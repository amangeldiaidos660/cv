const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const port = 3000;

app.use(cors());

app.get('/proxy', async (req, res) => {
  const url = req.query.url;
  
  try {
    const response = await axios.get(url);
    res.send(response.data);
  } catch (error) {
    res.status(error.response.status).send(error.response.statusText);
  }
});

app.listen(port, () => {
  console.log(`Proxy server is running at http://localhost:${port}`);
});
