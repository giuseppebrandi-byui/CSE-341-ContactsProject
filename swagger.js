const swaggerAutogen = require('swagger-autogen')()


const doc = {
    info: {
        version: "1.0.0",
        title: "Contacts Project",
        description: "CSE 341 Contact Project"
    },
    host: "localhost:3000",
    basePath: "/",
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json'],

}

const outputFile = './swagger.json'
const endpointsFiles = ['./routes/index.js']

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require('./server.js')           // Your project's root file
})