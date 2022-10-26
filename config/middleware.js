module.exports = {
  settings: {
    parser: {
      enabled: true,
      multipart: true,
      formLimit: '256mb',
      jsonLimit: '256mb',
      textLimit: '256mb',
      formidable: {
        maxFileSize: 200 * 1024 * 1024 
      }
    }
  },
};