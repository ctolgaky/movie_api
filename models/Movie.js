const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = new Schema({

    director_id: Schema.Types.ObjectId,
    title: {
        type: String,
        required: [true, '{PATH} alanı zorunludur.'],
        maxlength: [25, 'Title `{VALUE}` is too much longer.'],
        minlength: [2, 'Title `{VALUE}` is too smaller.']
    },
    category: String,
    country: String,
    year: {
        type: Number,
        max: 2100,
        min: 1900
    },
    imdb_score: Number,
    createdAt: {
        type: Date,
        default: Date.now()
    }

});

module.exports = mongoose.model('movie', MovieSchema);
