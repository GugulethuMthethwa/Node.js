// Listing 6.2 - Page 71

const port = 3000,
    http = require("http"),                            // Built-in HTTP module
    httpStatusCodes = require("http-status-codes"),    // For HTTP status codes
    router = require("./router"),                      // Import custom router to handle routes
    fs = require("fs"),                                // File system module

    plainTextContentType = {
        "Content-Type": "text/plain"
    },
    htmlContentType = {
        "Content-Type": "text/html"
    };

// Function to read a file and send its contents in the response
const customReadFile = (file, res) => {
    fs.readFile(`./${file}`, (errors, data) => {
        if (errors) {
            console.log("Error reading the file...");
            res.writeHead(httpStatusCodes.StatusCodes.NOT_FOUND, htmlContentType);
            res.end("<h1>File Not Found</h1>");
        } else {
            res.end(data);
        }
    });
};

// ✅ Serve the HTML page when visiting "/"
router.get("/", (req, res) => {
    res.writeHead(httpStatusCodes.StatusCodes.OK, htmlContentType);
    customReadFile("views/index.html", res); // 👈 serve HTML page
});

// Route for '/index.html' as well (optional redundancy)
router.get("/index.html", (req, res) => {
    res.writeHead(httpStatusCodes.StatusCodes.OK, htmlContentType);
    customReadFile("views/index.html", res);
});

// Route for serving test.js
router.get("/test.js", (req, res) => {
    res.writeHead(httpStatusCodes.StatusCodes.OK, { "Content-Type": "application/javascript" });
    customReadFile("public/js/test.js", res);
});

// Route for serving test.css
router.get("/test.css", (req, res) => {
    res.writeHead(httpStatusCodes.StatusCodes.OK, { "Content-Type": "text/css" });
    customReadFile("public/css/test.css", res);
});

// Route for serving test.png
router.get("/test.png", (req, res) => {
    res.writeHead(httpStatusCodes.StatusCodes.OK, { "Content-Type": "image/png" });
    customReadFile("public/images/test.png", res);
});

// POST handler for "/"
router.post("/", (req, res) => {
    console.log("Received a POST request at /");
    res.writeHead(httpStatusCodes.StatusCodes.OK, plainTextContentType);
    res.end("POSTED");
});

// Start the server
http.createServer(router.handle).listen(port);
console.log(`The server is listening on port number: ${port}`);
