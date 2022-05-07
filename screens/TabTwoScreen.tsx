import { Dimensions, Image, StyleSheet, ScrollView, SafeAreaView, Alert } from 'react-native';
//import LottieView from 'lottie-react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { Button } from "react-native-elements";
import { useAssets } from 'expo-asset';
import { TextInput } from 'react-native-paper';
import React, { useState } from 'react';
import ViewWithLoading from  "../components/ViewWithLoading";
import { Appbar } from 'react-native-paper';
import { AsyncStorage } from 'react-native';
import TabTwoScreen from './TabTwoScreen';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) 
{

  const[loading, setLoading] = useState<boolean>(true);
  const[email, setEmail]=useState<string>("");
  const[password, setPassword]=useState<string>("");
  const[retypepw, setReTypePW]=useState<string>("");
  const[firstname, setFirstName]=useState<string>("");
  const[lastname, setLastName]=useState<string>("");
  const[address, setAddress]=useState<string>("");
  const[birthday, setBirthday]=useState<string>("");
  const[mobilenumber, setMobileNumber]=useState<string>("+63");

  setTimeout (() => {
    setLoading(false);
  },1000);

  const setData = async () => {
    if(firstname.length == 0){
      Alert.alert('Warning!', 'First name is required.');
      return;
    }

    if(lastname.length == 0){
      Alert.alert('Warning!', 'Last name is required.');
      return;
    }

    if(birthday.length == 0){
      Alert.alert('Warning!', 'Birthday is required.');
      return;
    }

    if(mobilenumber.length == 0){
      Alert.alert('Warning!', 'Mobile number is required.');
      return;
    }

    if(email.length == 0){
      Alert.alert('Warning!', 'Email is required.');
      return;
    }

    if(password.length == 0){
      Alert.alert('Warning!', 'Password is required.');
      return;
    }

    else if(password.length < 8){
      Alert.alert('Warning!', 'Password must be 8 or more characters.');
      return;
    }

    if(retypepw.length == 0){
      Alert.alert('Warning!', 'Please confirm password.');
      return;
    }

    if(password != retypepw){
      Alert.alert('Warning!', 'Password do not match.');
      return;
    }

    const user_data = {'firstname': firstname,
                       'lastname': lastname,
                       'birthday': birthday,
                       'mobilenumber': mobilenumber,
                       'email': email,
                       'password': password};
    await AsyncStorage.setItem('Users', user_data);
    navigation.navigate('TabTwoScreen');
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.ScrollViewContainer}>
    
    <ViewWithLoading
      loading={loading}
    >
    <View style={styles.container}>
  
      <View style={{
        height: '100%',
        width: '100%',
        backgroundColor: 'lightblue',
        borderRadius: 20,
        borderStyle: 'solid',
        padding: 30,
        flexDirection: 'column'
        
      }}>


        <View style={{
          flex: 0,
          justifyContent: 'center',
          paddingHorizontal: 15,
          backgroundColor: 'lightblue'
        }}>

        <TextInput
        label="First Name"
        value={firstname}
        autoComplete={false}
        style={{borderRadius:20, marginBottom: 5, marginTop: 20, borderTopLeftRadius:20, borderTopRightRadius:20}}
        onChangeText={(text: string) => {
          setFirstName(text);
        }}
        />

        <TextInput
        label="Last Name"
        value={lastname}
        autoComplete={false}
        style={{borderRadius: 20,marginBottom: 5,borderTopLeftRadius:20, borderTopRightRadius:20}}
        onChangeText={(text: string) => {
          setLastName(text);
        }}
        />
        <TextInput
        label="Birthday (dd/mm/yy)"
        value={birthday}
        autoComplete={false}
        style={{borderRadius:20, marginBottom: 5,borderTopLeftRadius:20, borderTopRightRadius:20}}
        onChangeText={(text: string) => {
          setBirthday(text);
        }}
        />       
        <TextInput
        label="Mobile Number"
        value={mobilenumber}
        autoComplete={false}
        style={{borderRadius:20, marginBottom: 5,borderTopLeftRadius:20, borderTopRightRadius:20}}
        onChangeText={(text: string) => {
          setMobileNumber(text);
        }}
        />
        <TextInput
        label="E-mail Address"
        value={email}
        autoComplete={false}
        style={{borderRadius:20, marginBottom: 5,borderTopLeftRadius:20, borderTopRightRadius:20}}
        onChangeText={(text: string) => {
          setEmail(text);
        }}
        />
        <TextInput
        label="Password"
        value={password}
        autoComplete={false}
        secureTextEntry={true}
        style={{borderRadius:20, marginBottom: 5,borderTopLeftRadius:20, borderTopRightRadius:20}}
        onChangeText={(text: string) => {
          setPassword(text);   
        }}
        />
        <TextInput
        label="Re-type Password"
        value={retypepw}
        autoComplete={false}
        secureTextEntry={true}
        style={{borderRadius:20, marginBottom: 5,borderTopLeftRadius:20, borderTopRightRadius:20}}
        onChangeText={(text: string) => {
          setReTypePW(text);
        }}
        />
        <Text style={{
            fontSize: 15,
            fontWeight: 'normal',
            color: 'green',
            marginBottom: 5,
            paddingHorizontal: 5,
            paddingBottom: 5,
            paddingTop: 10,
           
          }}>
          Weak Password! ~ ~ ~
          </Text>
        
        </View>
        
        <View style={styles.PrivacyPolicyContainer}>
          <Text style={{
            fontSize: 13,
            fontWeight: 'bold',
            color: 'black',
            marginBottom: 5,
            paddingHorizontal: 20,
            backgroundColor: 'lightblue',
            paddingBottom: 10,
            paddingTop: 20,
            textDecorationLine: 'underline'
          }}>
          Agree to Terms of Use and Privacy Policy.
          </Text>
          </View>
            
          <View style={styles.buttonContainer}>
           

        <Button
                        title={'REGISTER'}
                        onPress={setData}
                        buttonStyle={{
                        backgroundColor: 'black',
                        borderRadius: 30,
                        padding: 15,
                        paddingHorizontal: 20,
                        shadowColor: 'blue',
                    }}
                    titleStyle={{
                        color: 'white',
                        fontFamily: 'poppins-bold',
                    }}
          />
        </View >
        

      </View>

        
    </View>
    </ViewWithLoading>
    </ScrollView>
    </SafeAreaView>
  );


}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleContainer:{
    flex: 0.5, 
    borderWidth: 0, 
    alignItems: 'center', 
    backgroundColor: 'lightblue',
    marginTop: 20,
    paddingTop: 12
    },
  buttonContainer:{
    flex: 0, 
    width: '100%', 
    justifyContent: 'center', 
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor:'lightblue',
    paddingBottom: 20
  },
  PrivacyPolicyContainer:{
    flex: 0, 
    borderWidth: 0, 
    alignItems: 'center', 
    backgroundColor: 'lightblue'
  },
  ScrollViewContainer:{
    backgroundColor: 'lightblue',
    marginHorizontal: 0
  }
})