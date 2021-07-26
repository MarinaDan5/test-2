const express = require('express');
const exhbs = require('express-handlebars')
const products = require('./products.json')
const app = express();

const PORT = process.env.PORT || 444;


app.use(express.static('public'));
app.set('view engine', 'hbs');
app.engine('hbs',
    exhbs({
extname: 'hbs',
}));
//=============cтатический параметр============
app.get('/', (req, res) => {
    res.render('home');
    
});
app.get('/products', (req, res) => {
    res.render('products', {products, cssFileName: "products" });
})
//==============динамический параметр========
app.get('/product/:productId', (req, res) => {
    console.log(req.params);
    const product = products.find(p => p.id === req.params.productId);
    res.render('product', {product})
});



app.listen(PORT, () => {
    console.log('ejjjye ydhtpopj ${PORT}')
});