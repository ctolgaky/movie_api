const mongoose = require('mongoose');

module.exports = () => {
  mongoose.connect('mongodb://ctolgaky:tolga123@ds147096.mlab.com:47096/movie_api',  { useNewUrlParser: true } )
  mongoose.connection.on('open', () =>{
      console.log('MongoDB Connected')
  })  ;
  mongoose.connection.on('error', (err) =>{
      console.log('MongoDB Error:', err)
  })  ;
};