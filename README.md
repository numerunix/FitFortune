# FitFortune

Questa app vuole essere un concorrente grafico dell'app fortune di GNU/Linux per fitbit.
Si basa su un sito web non gestito da me, nello specifico https://helloacm.com/api/fortune/ , e dovrebbe refreshare il frame ogni tot secondi, in modo da consentire una lettura immediata del cookie della fortuna.

Attualmente il frame viene refreshato indistintamente, perché l'app per accedere ad internet non funziona, è il companion a venire refreshato ad ogni cambio di stato.

Il cookie dovrebbe essere comunque leggibile per alcuni secondi al momento dell'aggiornamento del firmware del fitbit ionic.

# Bibliografia
https://community.fitbit.com/t5/SDK-Development/Messaging-from-device-to-companion-every-0-5-seconds-only-works-the-first/td-p/3101033

https://dev.fitbit.com/build/guides/migration/

https://dev.fitbit.com/build/reference/companion-api/fetch/#typealias-requestinfo

https://github.com/Fitbit/sdk-oauth/blob/b0880137397649f39ebebb370b05b7e5e565cc45/companion/index.js

https://helloacm.com/fortune/
