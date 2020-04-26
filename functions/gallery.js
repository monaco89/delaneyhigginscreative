const axios = require('axios')

exports.handler = function instagram(event, context, callback) {
  const endpoint = 'https://res.cloudinary.com/nickmonaco/image/list/'
  //   const token = process.env.INSTAGRAM_ACCESS_TOKEN
  //   const limit = 5

  // TODO Get page title
  axios
    .get(`${endpoint}style.json`)
    .then(({ data: { data } }) => {
      callback(null, {
        statusCode: 200,
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
    })
    .catch(e => {
      callback(e)
    })
}
