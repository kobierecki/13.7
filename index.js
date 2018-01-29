
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

fs.truncate('./pliki.txt', 0, function(err){console.log('done');})
fs.truncate('./tekst.txt', 0, function(err){console.log('done');})

fs.readdir('./img', function(err, stats){
        for(var i = 0; i <= stats.length - 1; i++){
            fs.appendFile('./pliki.txt', stats[i] + '\n', function(err){
            })
        }     
})
