import React, { useState } from 'react';
import { Alert, Keyboard, StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import Kartica from '../components/Kartica'
import UnosBroja from '../components/UnosBroja'
import BrojOkvir from '../components/BrojOkvir'
import GlavniTekst from '../components/GlavniTekst'
import Tipka from '../components/Tipka'

const DrugiEkran = (props) => {
    const [unos, postaviUnos] = useState('')
    const [odabir, postaviOdabir] = useState(false)
    const [odabraniBroj, postaviOdabraniBroj] = useState()

    const unosProvjeraBroja = (noviUnos) => {
        //postaviUnos(noviUnos)
        postaviUnos(noviUnos.replace(/[^0-9]/g, ''))
    }
    const resetPoljeUnos = () => {
        postaviUnos('')
        postaviOdabir(false)
    }
    const prihvatiOdabir = () => {
        const broj = parseInt(unos)
        if (isNaN(broj) || broj <= 0 || broj > 99) {
            Alert.alert(
                'Neispravni unos!',
                'Unesite broj u rasponu 1-99',
                [{ text: 'Ok', onPress: resetPoljeUnos }]
            )
            return;
        }
        postaviOdabir(true)
        postaviOdabraniBroj(broj)
        postaviUnos('')
        Keyboard.dismiss()
    }
    let prikazBroja;

    if (odabraniBroj > props.brojKorisnika) {
        prikazBroja = (
            <Kartica style={stil.karticaBroj}>
                <Text>Unijeli ste broj:</Text>
                <BrojOkvir>{odabraniBroj}</BrojOkvir>
                <Text>Zamišljeni broj je manji!</Text>
            </Kartica>
        )
    }
    if (odabraniBroj < props.brojKorisnika) {
        prikazBroja = (
            <Kartica style={stil.karticaBroj}>
                <Text>Unijeli ste broj:</Text>
                <BrojOkvir>{odabraniBroj}</BrojOkvir>
                <Text>Zamišljeni broj je veći!</Text>
            </Kartica>
        )
    }

    if (odabraniBroj === props.brojKorisnika) {
        prikazBroja = (
            <Kartica style={stil.karticaBroj}>
                <Text>Unijeli ste broj:</Text>
                <BrojOkvir>{odabraniBroj}</BrojOkvir>
                <Text>Pogodak!!!</Text>
                <View style={stil.tipke}><Tipka onPress={props.restart}>Nova igra</Tipka></View>
            </Kartica>

        )
    }

    return (
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>

            <View style={stil.ekran}>
                <Kartica style={stil.unos}>
                    <GlavniTekst>Unesite jedan broj</GlavniTekst>
                    <UnosBroja
                        keyboardType='numeric'
                        maxLength={2} blurOnSumbit
                        style={stil.unosBroja}
                        value={unos}
                        onChangeText={unosProvjeraBroja}
                    />
                    <View style={stil.tipke}>
                        <Tipka onPress={resetPoljeUnos}>Odustani</Tipka>
                        <Tipka onPress={prihvatiOdabir}>Prihvati</Tipka>
                    </View>
                </Kartica>
                {prikazBroja}
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
        width: 60
    },
    tipke: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        paddingHorizontal: 15,
        paddingTop: 20
    },
    karticaBroj: {
        marginTop: 50,
        alignItems: 'center'
    }
})

export default DrugiEkran
