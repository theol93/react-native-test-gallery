export default function getPhotos(id, uri, date) {
  return {
    type: 'ADD_PHOTO',
    payload: {id, uri, date},
  };
}
