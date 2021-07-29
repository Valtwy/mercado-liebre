const express = require('express');
const app = express();
const port= process.env.PORT || 3030
const path = require('path');

const publicFolderPath = path.resolve(__dirname, './public');
app.use(express.static(publicFolderPath))

app.listen(process.env.PORT || 3030, function() {
    console.log("Servidor corriendo en puerto 3030")
})


app.get("/", (req, res) => {
 let = htmlPath = path.resolve (__dirname, './views/index.html');
res.sendFile(htmlPath);
   })

app.get('/register.html', (req,res) => {
    res.sendFile(path.join(__dirname, '/views/register.html'));
});

app.get('/login.html', (req,res) => {
    res.sendFile(path.join(__dirname, '/views/login.html'));
});