var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mainCtrl = require('./server-assets/controllers/mainCtrl'),
    port = process.env.PORT || 7777;
    // What else needs to be required?


//What will we be using besides bodyParser?
app.use(bodyParser.json());


app.get('/api/cities', mainCtrl.getCities);

app.post('/api/cities', mainCtrl.postCity);



app.listen(port, function(){
    console.log('Listening on port:', port);
});
