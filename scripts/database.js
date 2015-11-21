(function(){
    "use strict";
    window.onload = function(){
      //gets the list of names in the social security database
      var ref = new Firebase('https://giftprompt.firebaseio.com/');
      ref.set({"SecretSanta": "pairs",
        "PreferenceList":"something"});

        makeCorsRequest();
        setUserSenderPair("Ruchira", "Nitaya", ref, "pair1");
        createPreferenceList(ref, "puppies", []);
    
    };

    // Creates a secret santa pair for the group of users
    function setUserSenderPair(sender, receiver, ref, pair_num) {
      var pair = ref.child("SecretSanta");
      var newPostRef = pair.push();
      //pair.set({"sender": sender, "receiver": receiver});

      newPostRef.set({
          "pair1": {"sender": "Ruchira", "receiver": "Nitaya"},
          "pair2": {"sender": "Nitaya", "receiver": "Pooja"},
          "pair3": {"sender": "Pooja", "receiver": "Naomi"},
          "pair4": {"sender": "Naomi", "receiver": "Ruchira"}

      });
      
      newPostRef.child("pair1").on("value", function(snapshot) {
        //alert(snapshot.val());
      });
    }

    // Create the XHR object.
function createCORSRequest(method, url) {
  var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {
    // XHR for Chrome/Firefox/Opera/Safari.
    xhr.open(method, url, true);
  } else if (typeof XDomainRequest != "undefined") {
    // XDomainRequest for IE.
    xhr = new XDomainRequest();
    xhr.open(method, url);
  } else {
    // CORS not supported.
    xhr = null;
  }
  return xhr;
}


// Make the actual CORS request.
function makeCorsRequest() {
  // All HTML5 Rocks properties support CORS.
  var keywords = "puppies"; //should be a list of keywords from user's wishlist
  var url = "https://openapi.etsy.com/v2/listings/active?api_key=xrj8aykbzt567hxwuea4suso&keywords=" + keywords;
 
  alert("in make cors request");
  var xhr = createCORSRequest('GET', url);
  if (!xhr) {
    alert('CORS not supported');
    return;
  }

  // Response handlers.
  xhr.onload = parseJSONFromEtsy;

  xhr.onerror = function() {
    alert('Woops, there was an error making the request.');
  };

  xhr.send();
}

    // Parses the response text from the etsy queries
    function parseJSONFromEtsy() {
      var gifts = [];
      if(status == 200){
        var text = this.responseText;
        console.log(text);
        var temp = JSON.parse(text);
        var results = temp.result;
        for (var i = 0; i < results.length; i++) {
          var obj = results[i];
          var item = {
            "name": obj.Title,
            "listing_id":obj.listing_id,
            "listing_image_id": obj.listing_image_id,
            "price": obj.price
          };
          gifts.push(item);
        }
        return gifts;
      }
    }

    function fbGetData(){
      var allLikes = [];
      var allMusic = [];
      // Liked pages on Facebook
      FB.api('/me?fields=likes', function(response) {
        //var allLikes = [];
        //for (var i = 0; i < response.data.length; ++i) {
        //    allLikes.push(response.data[i].name);
        //}  
        allLikes.push(response.data[0].likes.data[0].name);
        console.log("All the things liked by me are: " + response.data[0].likes.data[0].name);
      });
      FB.api('/me?fields=name', function(response) {
        //for (var i = 0; i < response.data.length; ++i) {
        //    allLikes.push(response.data[i].name);
        //}  
        var name = response.data[0].name;
        console.log("The name of the user is: " + name);
      });
      return {"n": name, "allLikes": allLikes};
    }

    // Creates the preference list for the users in the secret santa when they log in
    function createPreferenceList(ref, like, gifts){
      var obj = fbGetData();
      //var obj = {"n": "Ruchira", "likes": "puppies"};
      var pair = ref.child("PreferenceList");
      var temp = ["toys", "paper plates"];
      var newPostRef = pair.push();

      newPostRef.set({
          "Ruchira": {"gifts": {"puppies": temp}},
          "Nitaya": {"gifts": ["ipod", "puppy"]},
          "Pooja": {"gifts": ["another toy", "spoons", "turkey"]},
          "Naomi": {"gifts": ["toy", "bananas","apples"]}

      });
    }
 })();       