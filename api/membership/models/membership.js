'use strict';

const AWS_API = 'https://1837636utb.execute-api.us-east-1.amazonaws.com/prod';

const axios = require('axios');

const headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  "type":"TOKEN",
  "authorizerToken":"abc123",
  "methodArn":"arn:aws:execute-api:us-east-1:345558705693:1837636utb/*/*/",
}

module.exports = {
  lifecycles: {
    async afterCreate(member) {
      const bucketName = member['title'].toLowerCase();
      try {
        console.log("********MEMBER START********")
        console.log(member);
        console.log("********MEMBER END********")
        console.log(`********HEADERS: ${JSON.stringify(headers)}`)
        await axios.post(
          AWS_API, 
          { bucketName: bucketName,
            authorizerToken: headers.authorizerToken },
          { headers: headers })
        .then((res) => console.log(`*******RESPONSE: ${JSON.stringify(res)}`))
        .catch((e) => console.log(`*****ERROR: ${e}*********`));
      } catch(e) {
        console.log(e);
      }
    }
  }
};