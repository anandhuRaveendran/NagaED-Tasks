const { Schema} =require('mongoose');
const { model} =require('mongoose');

const contactSchema = new Schema({
   name: { type: String, required: true },
   email: { type: String, required: true },
   message: { type: String, required: true }
});

const contacts = model('contact', contactSchema);

module.exports = contacts;
