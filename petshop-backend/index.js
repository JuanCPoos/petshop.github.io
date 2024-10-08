const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const dotenv = require('dotenv'); /* cargar y tener accesible las variables a traves de process.env  */
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
   .then(() => console.log("Connected to MongoDB"))
   .catch(err => console.error("Could not connect to MongoDB", err));

app.get('/', (req, res) => {
   res.send('API is running...');
});

app.listen(PORT, () => {
   console.log(`Server running on port ${PORT}`);
});
