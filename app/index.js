import document from "document";
import { gettext } from "i18n";
import  * as messaging from "messaging";
import * as document from "document";

let cookie = document.getElementById("avviso");


// Message is received
messaging.peerSocket.onmessage = evt => {
  console.log(`App received: ${JSON.stringify(evt)}`);
    if (evt.data.key === "seconds" && evt.data.newValue) {
    let cookie = JSON.parse(evt.data.newValue);
      cookie.text=cookie;
  }
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