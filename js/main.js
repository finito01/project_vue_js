 var App = new Vue({
        el: '#app',
        data: {
               orderData: [] 
              },
        mounted () {
    	  var self = this; 
    	  $.getJSON("orders.json", function(data) {
    	  self.orderData = data.orders;
          })
        }
})