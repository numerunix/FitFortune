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
    sendVal(response.json());
}).then(function(data) {
    console.log(data)
}).catch(function(err) {
  console.error(err);
})
};


// Send data to device using Messaging API
function sendVal(data) {
  if (messaging.peerSocket.readyState === messaging.peerSocket.OPEN) {
    if (data.key==="seconds") 
      secondi=data.newValue*1000;
    setTimeout(getNewCookie, secondi);
    messaging.peerSocket.send(data);
  }
};
