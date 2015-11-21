(function(){
    "use strict";
    window.onload = function(){

      var allLikes = [];
      var allMusic - [];
      // Liked pages on Facebook
      FB.api('/me?fields=likes', function(response) {
        var allLikes = [];
        for (var i = 0; i < response.data.length; ++i) {
            allLikes.push(response.data[i].name);
        }  
        console.log("All the things liked by me are: " + allLikes);
      });

      // Music Choices
      FB.api('/me?fields=music', function(response) {
        for (var i = 0; i < response.data.length; ++i) {
            allLikes.push(response.data[i].name);
        }  
        console.log("All the things liked by me are: " + allLikes);
      });
    };
    

 })(); 