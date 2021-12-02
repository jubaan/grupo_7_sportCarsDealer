const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000; // Default
const publicPath = path.resolve(__dirname, './public')

app.use(express.static(publicPath))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './views/index.html'));
});

app.listen(port, () => {
    console.log(`Server is listening in port ${port}. Please visit http://localhost:${port}`)
})