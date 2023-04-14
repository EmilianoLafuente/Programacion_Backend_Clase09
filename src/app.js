const { port } = require('./config');
const app = require('./index')

app.listen(port, () => {
    console.log(`Server running at port ${port}`);
})