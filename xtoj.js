

xlsxj = require("xlsx-to-json"); // npm install xlsx-to-json
  xlsxj({
    input: "table.xlsx",
    output: "webjson.json"
  }, function(err, result) {
    if(err) {
      console.error(err);
    }else {
      console.log(result);
    }
  });
