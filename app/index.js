import * as document from "document";
import * as messaging from "messaging";
var cookie = document.getElementById('cookie');

function fetchCookie() {
  if (messaging.peerSocket.readyState === messaging.peerSocket.OPEN) {
    // Send a command to the companion
    messaging.peerSocket.send({
      command: "cookie"
    });
  }
}

function processData(data) {
    cookie.text=`${data}`;
}

messaging.peerSocket.addEventListener("open", (evt) => {
  console.log('Copyright \u00A92022 Giulio Sorrentino<gsorre84@gmail.com>');
  console.log("This progam is dedicated to Francesca Milano");
  console.log('This program is based on MicroDateFrom');
  console.log('This program is distribuited under GPL. No Warranty is provided.');
  console.log('App Socket Open');
  fetchCookie();
});

messaging.peerSocket.addEventListener("message", (evt) => {
  if (evt.data) {
    processData(evt.data);
  }
});

messaging.peerSocket.addEventListener("error", (err) => {
  console.error(`Connection error: ${err.code} - ${err.message}`);
});



// Fetch the weather every 30 minutes
setInterval(fetchCookie, 1 * 1000 * 60);