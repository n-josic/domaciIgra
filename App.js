import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Naslov from './components/Naslov'
import PrviEkran from './screens/PrviEkran';
import DrugiEkran from './screens/DrugiEkran';
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading'

const dohvatiFont = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    'langar': require('./assets/fonts/Langar-Regular.ttf')
  })
}

export default function App() {
  const [brKorisnika, postaviBrKorisnika] = useState()
  const [brojRundi, postaviBrojRundi] = useState(0)
  const [podaciUcitani, postaviPodatke] = useState(false)

  if (!podaciUcitani) {
    return (
      <AppLoading
        startAsync={dohvatiFont}
        onFinish={() => postaviPodatke(true)}
        onError={ (err) => console.log(err)}
      />
    )
  }

  const pocetakIgre = (odabraniBroj) => {
    postaviBrKorisnika(odabraniBroj)
    postaviBrojRundi(0)
  }

  const krajIgre = (brRundi) => {
    postaviBrojRundi(brRundi)
  }

  const novaIgra = () => {
    postaviBrojRundi(0)
    postaviBrKorisnika(null)
  }
  //let sadrzaj =<PrviEkran/>

  let sadrzaj = <PrviEkran zaPocetak={pocetakIgre} />
  if (brKorisnika && brojRundi <= 0) {
    sadrzaj = <DrugiEkran brojKorisnika={brKorisnika} restart={novaIgra}/>
  }


  return (
    <View style={styles.ekran}>
      <Naslov naslov={"Pogodi broj!"} />
      {sadrzaj}
    </View>
  );
}

const styles = StyleSheet.create({
  ekran: {
    flex: 1
  }
});
