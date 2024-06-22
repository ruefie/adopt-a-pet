const express = require('express');
const multer = require('multer');
const path = require('path');
const { getPets, getPet, addPet, deletePet } = require('./database');

const app = express();
const port = 8000;

// Set view engine to ejs
app.set('view engine', 'ejs');

// Middleware to parse POST data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Multer setup for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});
const upload = multer({ storage });

// Serve static files
app.use(express.static('public'));

// Route for the homepage
app.get('/', (req, res) => {
  const pets = getPets();
  res.render('index', { pets });
});

// Route for the pet list
app.get('/animals', (req, res) => {
  const pets = getPets();
  res.render('petlist.ejs', { pets });
});

// Route for individual pet details
app.get('/animals/:id', (req, res) => {
  const id = +req.params.id;
  const pet = getPet(id);
  if (!pet) {
    res.status(404).render('err404.ejs');
    return;
  }
  res.render('pet.ejs', { pet });
});

// Route to render addPet form
app.get('/addPet', (req, res) => {
  res.render('addPet.ejs');
});

// Route to handle adding a new pet
app.post('/addPet', upload.single('photo'), (req, res) => {
  const petData = {
    name: req.body.name,
    age: req.body.age,
    breed: req.body.breed,
    description: req.body.description,
    url: `/uploads/${req.file.filename}` // Store the path to the uploaded photo
  };
  addPet(petData);
  res.redirect('/animals');
});

// Route to handle deleting a pet
app.post('/animals/:id/delete', (req, res) => {
  const id = +req.params.id;
  deletePet(id);
  res.redirect('/animals');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
