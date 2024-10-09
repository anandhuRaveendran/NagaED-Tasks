const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/courses-api');

const courseSchema = new mongoose.Schema({
  title: String,
  description: String,
  duration: String,  // You could also use a Number type for duration
});

const Course = mongoose.model('Course', courseSchema);

app.get('/api/courses', async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get('/api/courses/:id', async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) return res.status(404).json({ message: 'Course not found' });
    res.json(course);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post('/api/courses', async (req, res) => {
  const { title, description, duration } = req.body;
  const newCourse = new Course({ title, description, duration });

  try {
    const savedCourse = await newCourse.save();
    res.status(201).json(savedCourse);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.put('/api/courses/:id', async (req, res) => {
  try {
    const updatedCourse = await Course.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedCourse) return res.status(404).json({ message: 'Course not found' });
    res.json(updatedCourse);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.delete('/api/courses/:id', async (req, res) => {
  try {
    const deletedCourse = await Course.findByIdAndDelete(req.params.id);
    if (!deletedCourse) return res.status(404).json({ message: 'Course not found' });
    res.json({ message: 'Course deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
