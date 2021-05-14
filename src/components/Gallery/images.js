import React from 'react';
import {
  Image,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from 'react-native';
import {View, Text} from 'native-base';

const styles = StyleSheet.create({
  tinyLogo: {
    marginTop: 30,
    width: 350,
    height: 350,
  },
  logo: {
    width: 66,
    height: 58,
  },
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    marginHorizontal: 20,
  },
  text: {
    marginTop: 20,
    fontSize: 26,
  },
});

//Take photos data from store
const DisplayAnImage = photos => {
  let photoImage = photos.map((photo, id) => {
    return (
      <View key={id}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: photo.uri,
          }}
        />
        <Text style={styles.text}>{photo.date}</Text>
        <View
          style={{flex: 1, height: 1, backgroundColor: 'black', marginTop: 20}}
        />
      </View>
    );
  });

  //Render every photo from store
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>{photoImage}</View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DisplayAnImage;
