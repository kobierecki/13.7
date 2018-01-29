import { stat } from 'fs';


var fs = require('fs');
var colors = require('colors');


fs.readFile('./tekst.txt', 'utf-8', function(err, data){
    console.log('Dane przed zapisem!'.blue);
    console.log(data);
    fs.appendFile('./tekst.txt', '\nDane po zapisie', function(err){
        if(err)throw err;
        console.log('Zapisano!'.blue);
        fs.readFile('./tekst.txt', 'utf-8', function(err, data){
            console.log('Dane przed zapisem!'.blue);
            console.log(data);  
        })
    })
})

fs.stat('./img/cat.jpg', function(err, stats){
    console.log(stats);
})

fs.readdir('./img', function(err, stats){
    fs.appendFile('./pliki.txt', '\n' + stats, function(err){
        if(err)throw err;
        console.log('Zapisano'.red);
    })
})