import * as messaging from "messaging";
import { settingsStorage } from "settings";
import { me as companion } from "companion"

// Message socket opens
messaging.peerSocket.onopen = () => {
  console.log("Companion Socket Open");
  restoreSettings();
  companion.wakeInterval=6000;
  companion.addEventListener("wakeInterval", getNewCookie);
};

// Message socket closes
messaging.peerSocket.onclose = () => {
  console.log("Companion Socket Closed");
};

function restoreSettings() {
  let index = 0
  let data = null;
  for (index=0; index < settingsStorage.length; index++) {
    let key = settingsStorage.key(index);
    if (key) {
      data = {
        key: key,
        newValue: settingsStorage.getItem(key)
      }
      sendVal(data);
    } else if (index==0) {
            settingsStorage.setItem('seconds', 5);
            data = {
              key: "seconds",
            newValue: settingsStorage.getItem(key)
            }
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
};

function getNewCookie() {
fetch('http://helloacm.com/api/fortune/') 
.then(function(response) {
    sendVal(response);
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
      companion.wakeInterval=data.newValue*1000;
    messaging.peerSocket.send(data);
  }
};
