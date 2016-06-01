var React = require('react');


var Utils = React.createClass({
    statics: {
        customMethod: function(foo) {
            var result = foo + " Added Part";
            console.log("customMethod result is " + result);
            alert(result);
            return result;

        },
        getNetworkUrl: function (categoryId) {
            var url = 'http://localhost:3000/lifestylejson?category_id='+categoryId+'';
            return url;
        }
        
    },
    yyyymmdd: function(date) {
    var yyyy = date.getFullYear().toString();
    var mm = (date.getMonth()+1).toString(); // getMonth() is zero-based
    var dd  = date.getDate().toString();
    return yyyy + (mm[1]?mm:"0"+mm[0]) + (dd[1]?dd:"0"+dd[0]); // padding
  },


render: function (){
    }
});

module.exports = Utils;
