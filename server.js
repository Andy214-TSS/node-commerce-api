/*
 Separating so that we could test the app without starting the server
*/
const app = require('./index')
const port = process?.env?.PORT || 3000;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
});