import document from "document";
import  * as messaging from "messaging";

let cookie = document.getElementById("cookie");
let secondi;

// Message is received
messaging.peerSocket.onmessage = evt => {
  console.log(`App received: ${JSON.stringify(evt)}`);
    if (evt.data.key === "seconds" && evt.data.newValue) {
      secondi=evt.data.newValue;
  }
  if (evt.data.key !== "seconds")
    cookie.text = JSON.stringify(evt);
//  sleep(secondi*1000);
 }

// Message socket opens
messaging.peerSocket.onopen = () => {
;
};
                       
// Message socket closes
messaging.peerSocket.onclose = () => {
  console.log("App Socket Closed");
};

console.log("Copyright \u00A92022 Giulio Sorrentino<gsorre84@gmail.com>");
  console.log("This program is based on MicroDateFrom");
  console.log("This program is distribuited under GPL. No Warranty is provided.");
  console.log("App Socket Open");