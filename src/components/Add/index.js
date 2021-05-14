import React, {Fragment, useState, useEffect} from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {connect} from 'react-redux';
import getPhotos from '../../actions/photos';
import moment from 'moment';
import {SafeAreaView, StyleSheet, StatusBar, Dimensions} from 'react-native';
import {View, Text, Button} from 'native-base';

function App(props) {
  const [fileUri, setFileUri] = useState('');

  const {setPhotos} = props;

  //Every changes photo uri push data to store
  useEffect(() => {
    let id = Date.now();
    let date = moment().format('MMMM Do YYYY, h:mm:ss a');

    if (fileUri !== '') {
      console.log(date);
      setPhotos(id, fileUri, date);
    }
  }, [fileUri]);

  //Taking a photo
  const launchCam = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    launchCamera(options, response => {
      if (response.didCancel) {
        return;
      } else if (response.error) {
        return;
      } else if (response.customButton) {
        return;
      } else {
        setFileUri(response.uri);
      }
    });
  };

  //Take images from gallery
  const launchImage = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        return;
      } else if (response.error) {
        return;
      } else if (response.customButton) {
        return;
      } else {
        setFileUri(response.uri);
      }
    });
  };
  //Buttons view
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.body}>
          <Text style={{textAlign: 'center', fontSize: 20, paddingBottom: 10}}>
            Pick Images from:
          </Text>
          <View style={styles.btnParentSection}>
            <Button
              primary
              onPress={() => launchCam()}
              style={styles.btnSection}>
              <Text style={styles.btnText}>Launch Camera</Text>
            </Button>
            <Button
              primary
              onPress={() => launchImage()}
              style={styles.btnSection}>
              <Text style={styles.btnText}>Open Image Library</Text>
            </Button>
          </View>
        </View>
      </SafeAreaView>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  body: {
    display: 'flex',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 1,
    height: Dimensions.get('screen').height - 20,
    width: Dimensions.get('screen').width,
  },
  btnParentSection: {
    alignSelf: 'center',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    paddingHorizontal: 8,
    paddingVertical: 8,
    alignItems: 'center',
  },
  btnSection: {
    display: 'flex',
    justifyContent: 'center',
    width: 200,
    height: 50,
    alignItems: 'center',
    borderRadius: 3,
    marginBottom: 10,
  },
  btnText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

const mapStateToProps = store => {
  return {
    photos: store.photos,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setPhotos: (id, uri, date) => dispatch(getPhotos(id, uri, date)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
