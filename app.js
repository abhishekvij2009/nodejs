import express from 'express';
import bodyParser from 'body-parser';

const xyz = express();
const PORT = 5000;


xyz.use(bodyParser.json());

xyz.listen(PORT, () => console.log('Server running on port: http://localhost${PORT}'));