const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const apiRoutes = require('./routes/api');



require('dotenv').config(); 
const app = express();

const uri = process.env.URI;

app.use(cors());
app.use(express.json());

// MongoDB connection
 mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes
app.use('/api', apiRoutes);


app.get('/', (req, res) => {
    res.send('Welcome to the API!');
  });
// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
