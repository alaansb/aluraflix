const URL = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://aluraflix-alan.herokuapp.com';

export default {
  URL,
};
