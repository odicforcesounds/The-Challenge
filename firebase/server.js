var express = require('express');
var path = require('path');


var server = express();

// Set static Folder ( Public )
server.use(express.static(path.join(__dirname, 'public')));

server.get('/api/members');



var PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server started on port ${PORT}`));

