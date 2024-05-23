import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  const [forms, setForms] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/forms')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setForms(data);
      })
      .catch(error => {
        console.error('Error fetching forms:', error);
      });
  }, []);

  const handleDeleteForm = async (formId) => {
    try {
      // Effectuer une requête DELETE vers le backend pour supprimer le formulaire avec l'ID formId
      const response = await fetch(`http://localhost:3000/forms/${formId}`, {
        method: 'DELETE',
      });
  
      // Vérifier si la requête s'est bien passée
      if (!response.ok) {
        throw new Error('Failed to delete form');
      }
  
      // Rafraîchir la liste des formulaires après la suppression
      setForms(forms.filter(form => form._id !== formId));
  
      // Afficher une confirmation à l'utilisateur
      alert('Form deleted successfully');
    } catch (error) {
      console.error('Error deleting form:', error);
      // Afficher un message d'erreur à l'utilisateur en cas d'échec de la suppression
      alert('An error occurred while deleting the form');
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Form Dashboard</h1>
      <table className="w-full">
        <thead>
          <tr>
            <th>Title</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {forms.map(form => (
            <tr key={form._id}>
              <td>{form.title}</td>
              <td>
                <Link to={`/update/${form._id}`} className="bg-yellow-500 text-white py-1 px-2 rounded-md mr-2 hover:bg-yellow-600 transition duration-200">Update</Link>
                <Link to={`/view/${form._id}`} className="bg-blue-500 text-white py-1 px-2 rounded-md mr-2 hover:bg-blue-600 transition duration-200">View</Link>
                <button onClick={() => handleDeleteForm(form._id)} className="bg-red-500 text-white py-1 px-2 rounded-md hover:bg-red-600 transition duration-200">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;