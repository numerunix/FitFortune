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
    } else if (index==1)
            settingsStorage.setItem('access_internet', true);
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
