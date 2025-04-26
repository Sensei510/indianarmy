import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

// Create Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Contact form endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, phone, subject, message } = req.body;
  
  // Log the form data to the console
  console.log('Contact form submission:');
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Phone:', phone || 'Not provided');
  console.log('Subject:', subject);
  console.log('Message:', message);
  console.log('------------------------');
  
  // In a real application, you would store the data or send emails here
  
  // Return a success response after a small delay to simulate processing
  setTimeout(() => {
    res.status(200).json({ success: true, message: 'Your message has been received' });
  }, 1000);
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Server is running' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});