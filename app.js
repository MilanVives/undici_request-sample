const { request } = require('undici')

async function makeRequest(){
    const {
        statusCode,
        headers,
        trailers,
        body
      } = await request('https://pokeapi.co/api/v2/')
      
      console.log('response received', statusCode)
      console.log('headers', headers)
      console.log('data', await body.json())
      console.log('trailers', trailers)
}

makeRequest()