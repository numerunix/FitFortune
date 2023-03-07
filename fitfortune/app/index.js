import document from "document";
import { gettext } from "i18n";
import * as messaging from "messaging";


var testo0 = document.getElementById('testo1');
var testo1 = document.getElementById('testo2');
var testo2 = document.getElementById('testo3');

var nome0, nome1, nome2, data0, data1, data2

function elabora(nome, date, testo) {
  let s='';
  let data1=new Date(Date.now());
  let data2=new Date(date);
  let conto=data2.getTime();
  conto = data1- conto;
  conto=Math.floor(conto / (1000 * 3600 * 24));
  if (isNaN(conto)||conto<0) {
    testo.text=gettext('Valore non valido');
    return;
  }
  if (nome===undefined || nome==='')
   s=conto+' '+gettext('giorni sono passati')+'\n'; 
  else
   s=gettext('Hai incontrato')+' '+ nome +' '+gettext('circa')+' '+conto+' '+gettext('giorni fa')+'\n';
  if (data1.getDate()==data2.getDate() && conto>0)
    if (data1.getMonth()==data2.getMonth())
      s+=gettext('E\' il vostro anniversario');
    else
      s+=gettext('E\' il vostro meseversario');
  testo.text=s;

}
                                     
// Message is received
messaging.peerSocket.addEventListener("message", (evt) => {
  console.log(`App received: ${JSON.stringify(evt)}`);
  if (evt.data.key === 'nome' && evt.data.newValue) {
    nome0=JSON.parse(evt.data.newValue).name;
  }
  
  if (evt.data.key === 'day' && evt.data.newValue) {
    data0 = JSON.parse(evt.data.newValue).name;
  }
    if (evt.data.key === 'nome1' && evt.data.newValue) {
    nome1=JSON.parse(evt.data.newValue).name;
  }
  
  if (evt.data.key === 'day1' && evt.data.newValue) {
    data1 = JSON.parse(evt.data.newValue).name;
  }
  
  if (evt.data.key === 'nome2' && evt.data.newValue) {
    nome2=JSON.parse(evt.data.newValue).name;
  }
  
  if (evt.data.key === 'day2' && evt.data.newValue) {
    data2 = JSON.parse(evt.data.newValue).name;
  }
  
  elabora(nome0, data0, testo0);
  elabora(nome1, data1, testo1);
  elabora(nome2, data2, testo2);
});

// Message socket opens
messaging.peerSocket.onopen = () => {
  console.log("Copyright \u00A92020 Giulio Sorrentino<gsorre84@gmail.com>");
  console.log("This progam is dedicated to the bartress of Max Bar of Rivisondoli who make me happy");
  console.log("This program is inspired by commercial product \"Days Together\"");
  console.log("This program is distribuited under GPL. No Warranty is provided.");
  console.log("App Socket Open");
};

// Message socket closes
messaging.peerSocket.onclose = () => {
  console.log("App Socket Closed");
};
