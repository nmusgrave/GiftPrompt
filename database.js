<html>
  <head>
   	<script src='https://cdn.firebase.com/js/client/2.2.1/firebase.js'></script>
   	<script src='https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js'></script>
  </head>
  <body>
  	<script>
  		var myDataRef = new Firebase('https://ddkdnxfkxi3.firebaseio-demo.com/');
  		myDataRef.set('User ' + name + ' says ' + text);
  	</script>
  </body>
</html>