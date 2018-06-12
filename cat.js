const fs = require('fs');

module.exports = function (fileName) {
    var content;
    // First I want to read the file
    fs.readFile(fileName, function read(err, data) {
        if (err) {
            throw err;
        }
        content = data;
    
        // Invoke the next step here however you like
        // console.log(content);   // Put all of the code here (not the best solution)
        processFile();          // Or put the next step in a function and invoke it
    });
    
    function processFile() {
        process.stdout.write(content);
        process.stdout.write('prompt > ')
    }
}