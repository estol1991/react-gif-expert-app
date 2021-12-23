export const getGifs = async (category) => {
  const url = "http://api.giphy.com/v1/gifs/search?q=" + encodeURI(category) + "&limit=10&api_key=PnaBlgXAhaCexOVDf1d4fv4rb1uEkgzw";
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });

  return gifs;
};