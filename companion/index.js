import * as messaging from "messaging";
import { settingsStorage } from "settings";

let secondi;

// Message socket opens
messaging.peerSocket.onopen = () => {
  console.log("Companion Socket Open");
  restoreSettings();
};

// Message socket closes
messaging.peerSocket.onclose = () => {
  console.log("Companion Socket Closed");
};

function restoreSettings() {
  for (let index = 0; index < settingsStorage.length; index++) {
    let key = settingsStorage.key(index);
    if (key) {
      let data = {
        key: key,
        newValue: settingsStorage.getItem(key)
      };
      sendVal(data);
    }
  }
}

// A user changes settings
settingsStorage.onchange = evt => {
  let data = {
    key: evt.key,
    newValue: evt.newValue
  };
  sendVal(data);
  getNewCookie();
};

function getNewCookie() {
fetch('http://helloacm.com/api/fortune/') 
.then(function(response) {
  console.log(JSON.stringify(response));
}).then(function(data) {
    let cookieData = JSON.stringify(data)
    console.log(cookieData);
    sendVal(cookieData);
}).catch(function(err) {
  console.log(JSON.stringify(err));
})
};

function doSomething() {
  console.log("Hello World");
}


// Send data to device using Messaging API
function sendVal(data) {
  if (messaging.peerSocket.readyState === messaging.peerSocket.OPEN) {
    if (data.key==="seconds") 
      secondi=evt.data.newValue*1000;
    setTimeout(doSomething, secondi);
    messaging.peerSocket.send(data);
  }
};
