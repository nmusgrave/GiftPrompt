<html>
  <head>
   	<script src='https://cdn.firebase.com/js/client/2.2.1/firebase.js'></script>
   	<script src='https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js'></script>
  </head>
  <body>
  	<script>
      var Firebase = require("firebase");
  		var myDataRef = new Firebase('https://ddkdnxfkxi3.firebaseio-demo.com/');
      myFirebaseRef.set({
          title: "Hello World!",
          author: "Firebase",
          location: {
          city: "San Francisco",
          state: "California",
          zip: 94103
        }
      });

      myFirebaseRef.child("location/city").on("value", function(snapshot) {
        alert(snapshot.val());  // Alerts "San Francisco"
      });
      
  	</script>
  </body>
</html>