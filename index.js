import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes.js';
import mongoose from 'mongoose';
import Movie from './models/movie.js';

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/', routes);

const handleError = (error) => {
  console.log(error);
}

app.get('/movies', async (req, res) => {
  const movies = await Movie.find();
  res.send(movies)
})
// Connect to MongoDB
const mongoURL = 'mongodb+srv://lionfrosties:sM0tVxyHFcoXyWpf@cluster0.apaloih.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(mongoURL).
  catch(error => handleError(error));

const db = mongoose.connection;

db.on('connected', () => {
  console.log('Connected successfully!!!!!!!')
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`)
})