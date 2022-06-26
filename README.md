# FitFortune

Questa app vuole essere un concorrente grafico dell'app fortune di GNU/Linux per fitbit.
Si basa su un sito web non gestito da me, nello specifico https://helloacm.com/api/fortune/ , e dovrebbe refreshare il frame ogni tot secondi, in modo da consentire una lettura immediata del cookie della fortuna.

Attualmente il frame viene non viene refreshato, per limiti tecnici, ma mostra un cookie all'avvio. Per avere più cookie bisogna chiudere e riaprire l'app.

# Installazione

Il team di fitbit mi ha fatto capire che per funzionare servono i permessi per accedere ad internet ed io ho capito che servono i permessi di background, e quelli li possono avere solo le app siglate da fitbit che le richiedono, per cui andrebbe installata la versione sullo store Fitbit.

Dal momento che necessita di internet sempre attivo, è meglio usare l'app su un firmware dotato di microfequenze.

Se volete vedere come è impaginata questa app ma non per farla funzionare, loggatevi su http://studio.fitbit.com dal pc, collegate sia l'orologio che il cellullare google alla stessa rete wifi in cui c'è il pc, sezionate il cellulare e l'orologio nella barra in alto, create un nuovo progetto vuoto ed importate tutti i files presenti, infine cliccate su run e se l'orologio non è troppo pieno di app funziona. Per mettere le impostazioni, dovete aprire le impostazioni del fitibit sul cellulare, tappare su menù sviluppatore, tappare su FitFortune in app trasferite in locale, tappare su impostazioni, ed impostare i dati e, per sicurezza, sincronizzare il Fitbit.


# Dedica
Dedico il progetto FitFortune a Francesca Milano.

# Credits

Si ringrazia il team americano di Fitbit per il prezioso aiuto nella stesura della app e del debugging e la comunità americana di Fitbit per il prezioso aiuto nel debugging. Senza di loro questa app non esisterebbe.

# Bibliografia
https://community.fitbit.com/t5/SDK-Development/Messaging-from-device-to-companion-every-0-5-seconds-only-works-the-first/td-p/3101033

https://dev.fitbit.com/build/guides/migration/

https://dev.fitbit.com/build/reference/companion-api/fetch/#typealias-requestinfo

https://github.com/Fitbit/sdk-oauth/blob/b0880137397649f39ebebb370b05b7e5e565cc45/companion/index.js

https://community.fitbit.com/t5/SDK-Development/Reliable-way-of-invoking-a-function-every-second/td-p/2608715

https://helloacm.com/fortune/
