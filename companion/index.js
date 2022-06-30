import * as messaging from "messaging";
import { settingsStorage } from "settings";
import { me as companion } from "companion";

// Message socket opens
let indirizzo='http://helloacm.com/api/fortune/';
messaging.peerSocket.onopen = () => {
  console.log('Companion Socket Open');
  restoreSettings();
  companion.wakeInterval=360000;
  indirizzo='';
  companion.addEventListener('wakeInterval', getNewCookie);
};

// Message socket closes
messaging.peerSocket.onclose = () => {
  console.log('Companion Socket Closed');
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
      if (key=='seconds')
        companion.wakeInterval=data.newValue;
      else if (key=='indirizzo')
        indirizzo=data.newValue;
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
fetch(indirizzo) 
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
    if (data.key==='seconds') 
      companion.wakeInterval=data.newValue*60000;
    messaging.peerSocket.send(data);
  }
};
