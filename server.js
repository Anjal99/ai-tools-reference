const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'ai-tools-reference.html'));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
