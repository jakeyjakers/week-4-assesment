const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, getEncouragement, getFruit, getSpecs, addHobbies } = require('./controller');

app.get("/api/compliment", getCompliment);

app.get("/api/fortune/", getFortune);

app.get("/api/encouragement/", getEncouragement);

app.get('/api/fruit/', getFruit);

app.get('/api/specs/', getSpecs);

app.post('/api/hobbies/', addHobbies)

app.listen(4000, () => console.log("Server running on 4000"));
