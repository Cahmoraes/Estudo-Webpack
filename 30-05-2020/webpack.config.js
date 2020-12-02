const environment = (process.env.NODE_ENV || 'development')

if (environment === 'development') {
  module.exports = require('./config/webpack.dev.config')
} else {
  module.exports = require('./config/webpack.prod.config')
}