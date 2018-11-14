
const express = require('express');
const hbs     = require('hbs');
const app     = express();
const path    = require('path');

const PORT = 3000;

const PunkAPIWrapper = require('punkapi-javascript-wrapper');
const punkAPI = new PunkAPIWrapper();

hbs.registerPartials(__dirname + '/views/partials')

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res, next) => {
  res.render('index');
});

app.get('/beers', (req, res, next) => {
  punkAPI.getBeers()
 .then(beers => {
  // console.log(beers);
  res.render('beers', {beers});
 })
 .catch(error => {
   console.log(error)
 });

  
});

app.get('/random-beers', (req, res, next) => {
  res.render('random-beers');
});



app.listen(PORT, () => {
  console.log(`listen ${PORT}`)
});
