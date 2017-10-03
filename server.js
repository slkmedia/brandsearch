var GoogleSpreadsheet = require('google-spreadsheet');
var async = require('async');
var fs = require('fs');

var gs = new GoogleSpreadsheet('15HH778sfgJ9u2qe6G7OIaXALzm_A5SxIUgtaLS7kYBM');

var sheet;


async.series([
    function setAuth(step) {
  
    var creds = require('./creds.json');

    gs.useServiceAccountAuth(creds, step);
  },
  function getInfoAndWorksheets(step) {
    gs.getInfo(function(err, info) {
      sheet = info.worksheets[0];
      step();
    });
  },
  function readRows(){
      sheet.getRows({
          offset: 1
      },function(err,rows){

          var basic = [];
          var temp = [];
          var colors = [];

          for(var i = 0; i < rows.length; i++){
              
              temp.push(i + 1);
              temp.push(rows[i].name);
              temp.push(rows[i].slug);
              temp.push(rows[i].tagline);
              
                if(rows[i].color1 != ""){
                    colors.push(rows[i].color1);
                }
                if(rows[i].color2 != ""){
                    colors.push(rows[i].color2);
                }
                if(rows[i].color3 != ""){
                    colors.push(rows[i].color3);
                }
                if(rows[i].color4 != ""){
                    colors.push(rows[i].color4);
                }
                if(rows[i].color5 != ""){
                    colors.push(rows[i].color5);
                }


              temp.push(colors);

              temp.push(rows[i].link);

              basic.push(temp);

              temp = []
              colors = []
          }


          console.log(JSON.stringify(basic));

          fs.writeFile('src/app/json/basic.json',JSON.stringify(basic))
      
      });
  }
])