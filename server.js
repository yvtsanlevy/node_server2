const express= require('express');
const hbs =require('hbs');


var app= express();

hbs.registerPartials(__dirname + '/wiews/partial')
app.set('views', __dirname + '/views');
app.set('view engine', 'hbs')
app.use(express.static(__dirname + '/public'));

app.get('/', (req,res) => {
res.send('<h1>hello express!<h1>')
});

app.get('/about', (req,res) => {
res.render('about.hbs', {
	pageTitle: 'about page',
	currentYear: new Date().getFullYear()

  });
});
app.get('/bad', (req,res) => {
res.send({
	errorMessage : 'unable to handle request'
  });
});
app.listen(3000);