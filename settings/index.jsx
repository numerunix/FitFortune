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
    </Page>
  );
}

registerSettingsPage(mySettings);
