import config from '../config';

const URL_CATEGORIAS = `${config.URL}/categorias`;

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIAS}?_embed=videos`)
    .then(async (response) => {
      if (response.ok) {
        const jsonReponse = await response.json();

        return jsonReponse;
      }
      throw new Error('Erro to get all categories');
    });
}

export default {
  getAllWithVideos,
};
