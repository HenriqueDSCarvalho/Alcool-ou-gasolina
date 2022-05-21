import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, TextInput } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>

      <View style={{justifyContent: 'center', alignItems: 'center'}}>

      

      <Image
        style={styles.logo}
        source={require('./assets/logo.png')}
      />

      <Text style={styles.textologo}>
        Qual melhor opção?
      </Text>

      <Text style={styles.textologo}>
        Preço do alcool
      </Text>

      <TextInput
        style={styles.TextInput}
      />

      <Text style={styles.textologo}>
        Preço da gasolina
      </Text>

      <TextInput
        style={styles.TextInput}
      />

      <Button
      title='CALCULAR'

      />
      </View>


    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent:  'center',
    flexDirection: 'column',
    
  },
  logo: {
    width: 200,
    height: 200
  },
  textologo: {
    color: '#fff'
  },
  TextInput: {
    height: 20,
    backgroundColor: '#fff'

  },
  button: {
    backgroundColor: 'red'
  }
});
