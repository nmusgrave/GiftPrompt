(function(){
    "use strict";
    window.onload = function(){
      //gets the list of names in the social security database
      var ref = new Firebase('https://giftprompt.firebaseio.com/');
      var button = document.getElementById("add");
      button.onclick = function() {
        setUserSenderPair("Ruchira", "Nitaya", ref, "pair1");
      };
    };


    function setUserSenderPair(sender, receiver, ref, pair_num) {
      var pair = {"sender": sender, "receiver": receiver}
      ref.set({"SecretSanta": "pairs"});
      ref.push({
          "pair1": {"sender": "Ruchira", "receiver": "Nitaya"}
      });
      ref.push({
        "pair2": {"sender": "Nitaya", "receiver": "Pooja"}
      });
      ref.push({
        "pair3": {"sender": "Pooja", "receiver": "Naomi"}
      });
      ref.push({
        "pair4": {"sender": "Naomi", "receiver": "Ruchira"}
      });

      ref.child("pair1").on("value", function(snapshot) {
        alert(snapshot.val());
      });
    }
 })();       