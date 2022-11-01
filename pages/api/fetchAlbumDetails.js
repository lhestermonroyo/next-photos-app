const fetchAlbumDetails = async albumId => {
  const [photosRes, albumDetailsRes] = await Promise.all([
    fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`),
    fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}`),
  ]);

  return {
    photos: await photosRes.json(),
    albumDetails: await albumDetailsRes.json(),
  };
};

export default fetchAlbumDetails;
