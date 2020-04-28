const mongoose = require("mongoose");

var filmSchema = new mongoose.Schema({
  fields: {
    starships: [Number],
    edited: Date,
    vehicles: [Number],
    planets: [Number],
    producer: String,
    title: String,
    created: Date,
    episode_id: Number,
    directed: String,
    release_date: Date,
        opening_crawl: String,
        character: [Number],
        species: [Number],
    },
    models: String,
    pk:Number
});

var Film = mongoose.model("film", filmSchema, 'films');
module.exports.Film = Film
