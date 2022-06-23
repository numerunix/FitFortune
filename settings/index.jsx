function mySettings(props) {
  return (
    <Page>
        {<Text bold align="center">Secondi del refresh: </Text>}
        <TextInput
          label="Numero di secondi: "
          title="seconds"
          settingsKey="seconds"
          type="text" 
        />
      <Toggle settingsKey="access_internet" label="Attiva la connesione internet" />
      <Button list label="Elimina impostazioni" onClick={() => props.settingsStorage.clear()} />
      {<Text bold align="center">Creato da Giulio Sorrentino</Text>}
      {<Text bold align="center">Debbugato dal team di fitbit</Text>}
      {<Text bold align="center">Dedicato a Francesca Milano</Text>}
      {<Text bold align="center">Questo programma è sotto licenza GPL v3 o, secondo il tuo parere, qualsiasi versione successiva</text>}
      {<Text bold align="center">https://www.github.com/numerunix/FitFortune</Text>}
    </Page>
  );
}

registerSettingsPage(mySettings);
