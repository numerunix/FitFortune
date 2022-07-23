import document from "document";
import  * as messaging from "messaging";

var cookie = document.getElementById('cookie');
var secondi;

// Message is received
messaging.peerSocket.onmessage = evt => {
  console.log(`App received: ${JSON.stringify(evt)}`);
}

// Message socket opens
messaging.peerSocket.onopen = () => {
  console.log('Copyright \u00A92022 Giulio Sorrentino<gsorre84@gmail.com>');
  console.log("This progam is dedicated to the bartress of Max Bar of Rivisondoli who make me happy");
  console.log('This program is based on MicroDateFrom');
  console.log('This program is distribuited under GPL. No Warranty is provided.');
  console.log('App Socket Open');
};
                       
// Message socket closes
messaging.peerSocket.onclose = () => {
  console.log("App Socket Closed");
};
