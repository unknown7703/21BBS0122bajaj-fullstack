const express = require('express');
const cors = require('cors'); // Import the cors middleware

const app = express();

// Enable CORS for all origins
app.use(cors());

// Parse JSON request bodies
app.use(express.json());

const PORT = process.env.PORT || 3000;

// POST route: /bfhl
// app.post('/bfhl', (req, res) => {
//     const { data } = req.body;

//     if (!data || !Array.isArray(data)) {
//         return res.status(400).json({
//             is_success: false,
//             message: "Invalid input data"
//         });
//     }

//     const numbers = data.filter(item => !isNaN(item));
//     const alphabets = data.filter(item => /^[a-zA-Z]+$/.test(item));
//     const lowercaseAlphabets = alphabets.filter(item => /^[a-z]$/.test(item));
//     const highestLowercaseAlphabet = lowercaseAlphabets.sort().slice(-1);

//     const response = {
//         is_success: true,
//         user_id: "john_doe_17091999",  // Replace with actual logic to generate the user_id
//         email: "john@xyz.com",  // Replace with the actual email ID
//         roll_number: "ABCD123",  // Replace with the actual roll number
//         numbers,
//         alphabets,
//         highest_lowercase_alphabet: highestLowercaseAlphabet
//     };

//     res.status(200).json(response);
// });

// GET route: /bfhl
// app.get('/bfhl', (req, res) => {
//     res.status(200).json({
//         operation_code: 1
//     });
// });
app.get('/book', (req, res) => {
    res.send('Booking successful');
  });

  app.get('/cancel', (req, res) => {
    res.send('Booking cancled');
  });
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
