import React, { useState } from 'react';
import { Keyboard, StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import Kartica from '../components/Kartica'
import GlavniTekst from '../components/GlavniTekst'
import NaslovTekst from '../components/NaslovTekst'
import Tipka from '../components/Tipka'

const PrviEkran = (props) => {
  //const [odabraniBroj, postaviOdabraniBroj] = useState()
  let odabraniBroj = Math.floor(Math.random() * 99) + 1;
  console.log(odabraniBroj)
  return (
    <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
      <View style={stil.ekran}>
        <NaslovTekst style={stil.naslov}>Upute</NaslovTekst>
        <Kartica style={stil.unos}>
          <GlavniTekst>Računalo "zamišlja" broj od 1 do 99. Odaberi novu igru i pokušaj pogoditi o kojem se broju radi. Nakon svakog unosa računalo kaže da li je broj veći ili manji od unesenog.</GlavniTekst>
        </Kartica>
        <View style={stil.tipke}>
          <Tipka onPress={() => props.zaPocetak(odabraniBroj)}>Nova igra</Tipka>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const stil = StyleSheet.create({
  ekran: {
    flex: 1,
    padding: 10,
    alignItems: "center"
  },
  naslov: {
    fontSize: 20,
    marginVertical: 10
  },
  unos: {
    width: 300,
    maxWidth: "80%"
  },
  unosBroja: {
    width: 50
  },
  tipke: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    paddingHorizontal: 15,
    alignItems: "center",
    paddingTop: 30
  },
  karticaBroj: {
    marginTop: 50,
    alignItems: 'center'
  }
})

export default PrviEkran
