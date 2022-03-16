module.exports = {
  settings: {
    parser: {
      enabled: true,
      multipart: true,
      formLimit: '10mb', // modify here limit of the form body
      jsonLimit: '10mb', // modify here limit of the JSON body
      textLimit: '10mb', // modify here limit of the text body
      formidable: {
        maxFileSize: 2000 * 1024 * 1024 // Defaults to 200mb (200)
      }
    }
  },
};