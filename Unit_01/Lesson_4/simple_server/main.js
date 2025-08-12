// Define the port number the server will listen on
const port = 3000,

  // Import the built-in http module to create the server
  http = require("http"),

  // Import the http-status-codes module for readable status codes
  httpStatus = require("http-status-codes"),

  // Create the HTTP server and define how it will handle requests
  app = http.createServer((request, response) => {

    // Log when the server receives a request
    console.log("Received an incoming request!");

    // Set the response header with a 200 OK status and content type as HTML
    response.writeHead(httpStatus.OK, {
      "Content-Type": "text/html"
    });

    // Define the HTML message to be sent in the response body
    let responseMessage = "<h1>Hello, Universe!</h1>";

    // Write the response message to the client
    response.write(responseMessage);

    // End the response
    response.end();

    // Log the message that was sent back to the client
    console.log(`Sent a response: ${responseMessage}`);
  });

// Start the server and listen on the specified port
app.listen(port);

// Log that the server has started successfully
console.log(`The server has started and is listening on port number: ${port}`);
