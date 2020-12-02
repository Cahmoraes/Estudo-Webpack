const environment = (process.env.NODE_ENV || 'development').trim()

if (environment === 'development') {
  module.exports = require('./config/webpack.common.config')
} else {
  module.exports = require('./config/webpack.prod.config')
}