const pwd = require('./pwd.js');
const ls = require('./ls.js');
const cat = require('./cat.js');

process.stdout.write('prompt >');

process.stdin.on('data', (data) => {
    const cmd = data.toString().trim(); 
    if (cmd === 'pwd') {
        pwd(); 
    } else if (cmd === 'ls') {
        ls();
    } else if (cmd.indexOf('cat') === 0) {
        var words = cmd.split(' ');
        cat(words[1]);
    }
})

