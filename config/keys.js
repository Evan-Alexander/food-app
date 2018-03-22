if (process.env.NODE_ENV === 'production') {
  // prod mode - use prod keys
  module.exports = require('./prod');

} else {
  // dev mode - use dev keys
  module.exports = require('./dev');
}
