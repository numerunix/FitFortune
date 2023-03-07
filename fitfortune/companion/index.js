import * as messaging from "messaging";
import { settingsStorage } from "settings";

settingsStorage.addEventListener("change", (evt) => {
  // Which setting changed
  console.log(`key: ${evt.key}`)

  // What was the old value
  console.log(`old value: ${evt.oldValue}`)

  // What is the new value
  console.log(`new value: ${evt.newValue}`)
});

function queryCookie() {
  fetch("https://api.justyy.workers.dev/api/fortune")
  .then(function (response) {
      response.json()
      .then(function(data) {
        returnCookie(data);
      });
  })
  .catch(function (err) {
    console.error(`Error fetching cookie: ${err}`);
  });
}

function returnCookie(data) {
  if (messaging.peerSocket.readyState === messaging.peerSocket.OPEN) {
    data=data.split('\t');
    data=data.join('  ');
    data+='\n\n\n';
    messaging.peerSocket.send(data);
  } else {
    console.error("Error: Connection is not open");
  }
}

messaging.peerSocket.addEventListener("message", (evt) => {
  if (evt.data && evt.data.command === "cookie") {
    queryCookie();
  }
});

messaging.peerSocket.addEventListener("error", (err) => {
  console.error(`Connection error: ${err.code} - ${err.message}`);
});
