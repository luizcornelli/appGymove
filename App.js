import React from 'react';
import { View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text } from 'react-native';

export default function App() {
  return (
    <KeyboardAvoidingView>

      <View>
        <Image
          source={require('./src/assets/appGymoveLogo.png')}
        />
      </View>

      <View>

        <TextInput
          placeholder="email"
          autoCorrect={false}
          onChangeText={() => { }}
        />

        <TextInput
          placeholder="senha"
          autoCorrect={false}
          onChangeText={() => { }}
        />

        <TouchableOpacity>
          <Text>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text>Criar conta</Text>
        </TouchableOpacity>

      </View>

    </KeyboardAvoidingView>
  );
}