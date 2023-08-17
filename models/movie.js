import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const movieSchema = new Schema({
  title: {type: String, required: true, maxlength: 150},
  director: {type: String, required: true, maxlength: 200},
  year: {type: Number, required: true}
}, {bufferCommands: true});

const Movie = model('Movie', movieSchema);

export default Movie;