(function(){
    "use strict";
    window.onload = function(){
      //gets the list of names in the social security database
      var ref = new Firebase('https://giftprompt.firebaseio.com/');
      ref.set({"SecretSanta": "pairs",
        "PreferenceList":"something"});
      var button = document.getElementById("add");
      button.onclick = function() {
        setUserSenderPair("Ruchira", "Nitaya", ref, "pair1");
        createPreferenceList(ref);
      };
    };


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
        alert(snapshot.val());
      });
    }

    function createPreferenceList(ref){
      var pair = ref.child("PreferenceList");
      var temp = ["123", "456", "789"];
      var newPostRef = pair.push();
      newPostRef.set({
          "1": {"receiver": "Ruchira", "gifts": temp},
          "2": {"receiver": "Nitaya", "gifts": ["ipod", "puppy"]},
          "3": {"receiver": "Pooja", "gifts": ["another toy", "spoons", "turkey"]},
          "4": {"receiver": "Naomi", "gifts": ["toy", "bananas","apples"]}

      });
    }
 })();       