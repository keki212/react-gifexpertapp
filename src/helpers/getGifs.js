
export const getGifs = async ( category ) => {
    const apiKey = "zdp8ejpp4HjngoQYT3ZVk87Nx5jJ6kHT";
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=${apiKey}`;
    const respuesta = await fetch(url);
    const { data } = await respuesta.json();

    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images.downsized_large.url,
        username: img.username,
      };
    });

    return gifs;
  };