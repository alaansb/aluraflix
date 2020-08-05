import config from '../config';

const URL_VIDEOS = `${config.URL}/videos`;

function create(video) {
  return fetch(`${URL_VIDEOS}`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(video),
  })
    .then(async (response) => {
      if (response.ok) {
        const jsonReponse = await response.json();

        return jsonReponse;
      }
      throw new Error('Erro to create video');
    });
}

export default {
  create,
};
