export default function getPhotos(uri, date) {
  return {
    type: 'ADD_PHOTO',
    payload: {uri, date},
  };
}
