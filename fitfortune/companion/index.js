import * as messaging from "messaging";
import { settingsStorage } from "settings";
import { me as companion } from "companion";

// Message socket opens
messaging.peerSocket.addEventListener("open", (evt) => {
  console.log('Companion Socket Open');
  restoreSettings();
});



// Message socket closes
messaging.peerSocket.onclose = () => {
  console.log("Companion Socket Closed");
};

// A user changes settings
settingsStorage.addEventListener("change", (evt) => {
  let data = {
    key: evt.key,
    newValue: evt.newValue
  };
  sendVal(data);
});
// Restore any previously saved settings and send to the device
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

// Send data to device using Messaging API
function sendVal(data) {
  if (messaging.peerSocket.readyState === messaging.peerSocket.OPEN) {
    messaging.peerSocket.send(data);
  }
}


if (companion.launchReasons.settingsChanged) {
      let data= {
        key: "nome",
        newValue: settingsStorage.getItem(Nome0)
      };
      sendval(data);
      data=  {
            key: "day",
            newValue: settingsStorage.getItem(day0)
      };
      sendval(data);
      data= {
        key: "nome1",
        newValue: settingsStorage.getItem(Nome1)
      };
      sendval(data);
      data=  {
            key: "day1",
            newValue: settingsStorage.getItem(day1)
      };
      sendval(data);
        data= {
        key: "nome2",
        newValue: settingsStorage.getItem(Nome2)
      };
      sendval(data);
      data=  {
            key: "day2",
            newValue: settingsStorage.getItem(day2)
      };
      sendval(data);

}