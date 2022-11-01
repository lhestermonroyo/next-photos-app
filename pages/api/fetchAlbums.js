const fetchAlbums = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/albums');
  return await res.json();
};

export default fetchAlbums;
