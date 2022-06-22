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
      {<Text bold align="center">Creato da Giulio Sorrentino </Text>}
      {<Text bold align="center">Debbugato dal team di fitbit </Text>}
    </Page>
  );
}

registerSettingsPage(mySettings);
