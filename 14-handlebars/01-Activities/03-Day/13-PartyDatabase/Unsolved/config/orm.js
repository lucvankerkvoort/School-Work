var connection = require("./connection.js");

var orm = {
  selectWhereVal: function(tableInput, colToSearch, valOfCol) {
    var querystring = "SELECT * FROM ?? WHERE ?? = ?";
    connection.query(querystring, [tableInput, colToSearch, valOfCol], function (err, result){
        if (err) throw err;
        console.log(result);
    });
  },
  selectWhere: function(tableInput, colToSearch) {
    var querystring = "SELECT * FROM ?? WHERE ??";
    connection.query(querystring, [tableInput, colToSearch], function (err, result){
        if (err) throw err;
        console.log(result);
    });
  },
  selectAndJoin: function (tableInput, )
};