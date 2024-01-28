import React from "react";
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from "react-native";



const CollectionView = ({ navigation }) => {
  const signInLogo = require('../Assets/signinlogo.png');
  

  const violin = () => {
    navigation.navigate('BCV');
  };
  const guitar = () => {
    navigation.navigate('BCG');
  };
  const allocation = () => {
    navigation.navigate('allocation');
  };
  const PAY = () => {
    navigation.navigate('pay');
  };
 
 
  return (
    <ScrollView scrollEventThrottle={16}>
          <Image style={styles.logo} source={signInLogo} />
          <View style={{ flex: 5, backgroundColor: 'white', paddingTop: 10 }}>
            <Text style={{ fontSize: 25, fontWeight: '600', paddingHorizontal: 110, marginLeft: 30 }}>
              Trending Now
            </Text>

            <View style={{ height: 200, width: null, padding: 5, marginTop: 5 }}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >

                <TouchableOpacity style={{ flex: 1, }} onPress={guitar}>
                  <Image style={styles.img} source={require('../Assets/violin.png')} />
                  <Text style={{ fontSize: 18, marginLeft: 90 }}>GUITAR</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ flex: 1, }} onPress={guitar}>
                  <Image style={styles.imge} source={require('../Assets/violin.png')} />
                  <Text style={{ fontSize: 18, marginLeft: 90 }}>MRIDANGAM</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ flex: 1, }} onPress={violin}>
                  <Image style={styles.imge} source={require('../Assets/violin.png')} />
                  <Text style={{ fontSize: 18, marginLeft: 90 }}>DRUMS</Text>
                </TouchableOpacity>
           
         
              </ScrollView>
            </View>
          </View>

          <Text style={styles.txtstyle}>ONE-TO-ONE, ONLINE MUSIC CLASSES FROM TOP MUSICIANS</Text>

    
          <View>
            <TouchableOpacity onPress={allocation}>
              <Text style={{ marginTop: 30, marginHorizontal: 90, padding: 10, fontSize: 20, backgroundColor: 'black', textAlign: 'center', borderRadius: 5, color: 'white' }}>GURU's Log</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={PAY}>
              <Text style={{ marginTop: 30, marginHorizontal: 90, padding: 10, fontSize: 20, backgroundColor: 'black', textAlign: 'center', borderRadius: 5, color: 'white' }}>PAY</Text>
            </TouchableOpacity>

          </View>

          <View>
            <Text style={{ marginTop: 20, marginLeft: 80, fontSize: 24, color: 'blue', }}>POPULAR COURSES</Text>
            
          </View>
          <View>
            <Text style={{ marginTop: 8, marginLeft: 105, fontSize: 14, color: 'grey', }}>Our Most Popular Courses</Text>
          </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({

  logo: {
    width: null,
    height: 100,
    resizeMode: "stretch",
    padding: 10,
    backgroundColor: 'black',
  },
  img: {
    margin: 10,
    width: 200,
    height: 150,
    marginLeft: 20, 
    
  },
  imge: {
    margin: 10,
    width: 210,
    height: 150,
    marginLeft: 20
  },
  txtstyle: {
    fontSize: 25,
    marginTop: 20,
    padding: 5,
    color: 'red',
    marginLeft: 20,
  },

  ClassRecordbutton: {
    padding: 15,
    backgroundColor: 'black',
    borderRadius: 5,
    marginLeft: 10,
    color: 'white',
    paddingHorizontal: 20,
    marginLeft: 40,
    fontSize: 18,

  },
  gurusbutton: {
    padding: 15,
    backgroundColor: 'black',
    borderRadius: 5,
    marginLeft: 10,
    color: 'white',
    paddingHorizontal: 20,
    marginLeft: 50,
    fontSize: 18,


  },
  feat: {
    margin: 10,
    width: 310,
    height: 250,
    marginLeft: 40
  },
  contactButton: {
    marginTop: 30,
    padding: 15,
    backgroundColor: 'green',
    borderRadius: 12,
    marginLeft: 10,
    marginRight: 50,
    paddingHorizontal: 20,
    marginLeft: 50,
    fontSize: 18,

  }

});

export default CollectionView;