import React, {useEffect} from 'react';
import {Text, View} from 'native-base';
import {connect} from 'react-redux';
import DisplayAnImage from './images';

//Gallery page
function Gallery(props) {
  let photos = props.photos;
  useEffect(() => {
    console.log(photos);
  }, [photos]);

  //Transform data object to array
  function TransformService(data) {
    return Object.keys(data).map(key => {
      const item = data[key];
      item.id = key;
      return item;
    });
  }

  //If we have not added any photo return text else - photos
  let photoGallery = <Text>You added 0 photos.</Text>;
  if (Object.keys(photos).length !== 0) {
    let photosArray = TransformService(photos);
    photoGallery = DisplayAnImage(photosArray);
  }

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {photoGallery}
    </View>
  );
}

const mapStateToProps = store => {
  return {
    photos: store.photos,
  };
};

export default connect(mapStateToProps)(Gallery);
