const express = require('express');
const bodyParser = require('body-parser');


const app = express();


const port = process.env.PORT || 5000;
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.send('Hola mundo');
})

//importar ruta visitas.
const visitaRoutes = require('./src/routes/visita.route');

//crear ruta de visitas
app.use('/api/v1/visita', visitaRoutes);

app.listen(port, () => {
    console.log(`Express nodemon omar corriendo en el puerto ${port}`);
})