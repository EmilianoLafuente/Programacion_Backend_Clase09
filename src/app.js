const { port } = require('./config');
const app = require('../../Programacion_Backend_Clase09/src/index.js')

app.listen(port, () => {
    console.log(`Server running at port ${port}`);
})