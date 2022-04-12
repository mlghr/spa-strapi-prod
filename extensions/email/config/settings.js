'use strict'

module.exports = {
  provider: 'sendgrid',
  providerOptions: {
    apiKey: process.env.SENDGRID_API_KEY,
  },
  settings: {
    defaultFrom: 'lsouthland@spa-food.org',
    defaultTo: 'no-reply@spa-food.org'
  },
}