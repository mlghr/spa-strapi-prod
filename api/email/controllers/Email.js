// File /api/email/controllers/Email.js
'use strict'

/**
 * Read the documentation () to implement custom controller functions
 */

//  const jwt = require('jsonwebtoken');
//  const sgMail = require('@sendgrid/mail');
 
//  const route = express.Router();
//  // bring env variables into file
//  const sendGridKey = process.env.SENDGRID_KEY;
//  const resetSecret = process.env.RESET_SECRET;

module.exports = {
  /**
   * Sends an email to the recipient in the body of the request
   */
   send: async (ctx) => {
    const body = ctx.request.body
    const sendTo = body.email
    strapi.log.debug(`Trying to send an email to ${sendTo}`)
    console.log(body.email);
    try {
      await strapi.plugins['email'].services.email.send({
        to: 'mrosenbaum.dev@gmail.com',
        from: 'spa-food.xyz',
        replyTo: 'NA',
        subject: 'Use strapi email provider successfully',
        text: 'Hello world!',
        html: 'Hello world!',
      })
      strapi.log.debug(`Email sent to ${sendTo}`)
      ctx.send({ message: 'Email sent' })
    } catch (err) {
      strapi.log.error(`Error sending email to ${sendTo}`, err)
      ctx.send({ error: 'Error sending email' })
    }
}

  // send: async (ctx) => {
  //   const body = ctx.request.body;
  //   const sendTo = body.email
  //   strapi.log.debug(`Trying to send an email to ${sendTo}`)
  //   console.log(body.email);
  //   try {
      
  //   } catch(e) {
  //     console.log(e);
  //   }
  // }

}


