const express = require('express');
const app = express();
const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);
const cors = require('cors');

app.set('port', process.env.PORT || 3000);
app.locals.title = 'Personal Website';
app.use(express.json());
app.use(cors());

app.get('/', (request, response) => {
  response.send('Sams Data');
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});

app.get('/api/v1/projects', (request, response) => {
  database('projects').select()
    .then((projects) => {
      response.status(200).json(projects)
    })
    .catch((error) => {
      response.status(500).json({ error })
    })
})

app.get('/api/v1/schools', (request, response) => {
  database('schools').select()
    .then(schools => {
      response.status(200).json(schools)
    })
    .catch(error => {
      response.status(500).json({ error })
    })
})