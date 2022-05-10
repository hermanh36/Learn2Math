// keys.js
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./keys_prod');
} else {
  module.exports = require('./keys_dev');
}

// module.exports = {
//   mongoURI: 'mongodb+srv://user1:mA9x0EvXck7pyzSc@cluster0.75vat.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
//   secretOrKey: 'OB8UgS5r30S0SlZ'
// }
// module.exports = {
//   mongoURI: 'mongodb://<DBUser>:<password>@cluster.mongodb.net/test?retryWrites=true&w=majority'
//  
// }


