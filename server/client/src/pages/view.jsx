
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ViewForm() {
  const [formData, setFormData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/forms/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setFormData(data);
      })
      .catch(error => {
        console.error('Error fetching form data:', error);
      });
  }, [id]);

  if (!formData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">{formData.title}</h1>
      <div>
        {formData.inputs.map((input, index) => (
          <div key={index} className="my-4">
            <label className="block mb-1">{input.label}</label>
            {input.type === 'textarea' ? (
              <textarea className="border rounded-md px-2 py-1" />
            ) : input.type === 'radio' ? (
              input.options.map((option, optionIndex) => (
                <div key={optionIndex}>
                  <input type="radio" name={`radio-${index}`} id={`radio-${index}-${optionIndex}`} value={option} />
                  <label htmlFor={`radio-${index}-${optionIndex}`} className="ml-2">{option}</label>
                </div>
              ))
            ) : input.type === 'checkbox' ? (
              input.options.map((option, optionIndex) => (
                <div key={optionIndex}>
                  <input type="checkbox" id={`checkbox-${index}-${optionIndex}`} value={option} />
                  <label htmlFor={`checkbox-${index}-${optionIndex}`} className="ml-2">{option}</label>
                </div>
              ))
            ) : (
              <input className="border rounded-md px-2 py-1" type={input.type} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewForm;
