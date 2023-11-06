import React, {useState} from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import {Button, HelperText, TextInput} from 'react-native-paper';

const App = () => {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [pesoError, setPesoError] = useState('');
  const [alturaError, setAlturaError] = useState('');
  const [imc, setImc] = useState(0);
  const resultat = {missatge: '', color: ''};

  const entradaCorrecta = (unPes) => {
    const expresReg = /^\d+\.\d+$|^\d+$/;
    return expresReg.test(unPes);
  };

  const Resultat = () => {
    return (
      <View style={styles.sectionResult}>
        <Text style={{color: resultat.color, fontSize: 20, fontWeight: '600'}}>
          IMC : {imc.toFixed(2)}
        </Text>
        <Text style={{color: resultat.color, fontSize: 20, fontWeight: '600'}}>
          {resultat.missatge}
        </Text>
      </View>
    );
  };

  const CalculaIMC = () => {
    let pesoCalc = parseFloat(peso);
    let alturaCalc = parseFloat(altura) / 100;

    const imc = pesoCalc / (alturaCalc * alturaCalc);

    let mensaje = '';
    let color = '';

    if (imc < 18.5) {
      mensaje = 'Peso insuficiente';
      color = 'green';
    } else if (imc < 25) {
      mensaje = 'Peso normal';
      color = 'green';
    } else if (imc < 27) {
      mensaje = 'Sobrepeso grado I (preobesidad)';
      color = 'green';
    } else if (imc < 30) {
      mensaje = 'Sobrepeso grado II (preobesidad)';
      color = 'orange';
    } else if (imc < 35) {
      mensaje = 'Obesidad de tipo I';
      color = 'orange';
    } else if (imc < 40) {
      mensaje = 'Obesidad de tipo II';
      color = 'orange';
    } else if (imc < 50) {
      mensaje = 'Obesidad de tipo III (mórbida)';
      color = 'red';
    } else {
      mensaje = 'Obesidad de tipo IV (extrema)';
      color = 'red';
    }

    setImc(imc);
    resultat.missatge = mensaje;
    resultat.color = color;
  };

  const handleChangeInputPes = (text) => {
    if (entradaCorrecta(text) && parseFloat(text) >= 0) {
      setPeso(text);
      setPesoError('');
    } else {
      setPeso(text);
      setPesoError('Ingrese un valor numérico positivo');
    }
  };

  const handleChangeInputAltura = (text) => {
    if (entradaCorrecta(text) && parseFloat(text) >= 0) {
      setAltura(text);
      setAlturaError('');
    } else {
      setPeso(text);
      setAlturaError('Ingrese un valor numérico positivo');
    }
  };

  return (
    <View style={styles.all}>
      <StatusBar />
      <View style={styles.sectionTitle}>
        <Text style={styles.title}>Calcula tu IMC</Text>
      </View>
      <View style={styles.sectionData}>
        <View style={styles.sectionDataConcrete}>
          <View style={styles.sectionDataText}>
            <Text style={styles.dades}>Peso:</Text>
          </View>
          <View style={styles.sectionDataText}>
            <TextInput
              style={styles.textInput}
              placeholder="kg"
              onChangeText={handleChangeInputPes}
              value={peso}
              keyboardType="numeric"
            />
          </View>
        </View>
        <View style={styles.sectionDataConcrete}>
          <View style={styles.sectionDataText}>
            <Text style={styles.dades}>Altura:</Text>
          </View>
          <View style={styles.sectionDataText}>
            <TextInput
              style={styles.textInput}
              placeholder="cm"
              onChangeText={handleChangeInputAltura}
              value={altura}
              keyboardType="numeric"
            />
          </View>
        </View>
        <View style={styles.sectionCalcula}>
          <Button style={styles.button} mode="contained" onPress={CalculaIMC}>
            CALCULA
          </Button>
        </View>
      </View>
      <Resultat />
    </View>
  );
};

const styles = StyleSheet.create({
  all: {
    flex: 1,
  },
  sectionTitle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    textAlign: 'center',
    color: 'black',
  },
  dades: {
    fontSize: 20,
    color: 'black',
  },
  textInput: {
    margin: 20,
    alignSelf: 'stretch',
    justifyContent: 'center',
    fontSize: 15,
    textAlign: 'center',
  },
  sectionData: {
    flex: 2,
  },
  sectionDataConcrete: {
    flex: 1,
    flexDirection: 'row',
  },
  sectionDataText: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionCalcula: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    fontSize: 20,
  },
  sectionResult: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
