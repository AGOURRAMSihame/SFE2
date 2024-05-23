// controllers/responseController.js
const Response = require('../models/Response');
const Form = require('../models/form');


exports.submitResponse = async (req, res) => {
  try {
    const { formId, formData, userEmail, userName } = req.body;
    console.log('Form ID:', formId);
    console.log('Form Data:', formData);

    if (!formId || !formData || !userEmail || !userName) {
      return res.status(400).json({ message: 'Données d\'entrée manquantes.' });
    }

    const form = await Form.findById(formId);
    if (!form) {
      return res.status(404).json({ message: 'Formulaire non trouvé.' });
    }

    const response = new Response({
      formId: formId,
      formData: formData,
      userEmail: userEmail,
      userName: userName
    });

    await response.save();

    return res.status(201).json({ message: 'Réponse enregistrée avec succès.' });
  } catch (error) {
    console.error('Erreur lors de l\'enregistrement de la réponse :', error);
    return res.status(500).json({ message: 'Erreur lors de l\'enregistrement de la réponse.' });
  }
};
