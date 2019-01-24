const ENDPOINT = 'http://hp-api.herokuapp.com/api/characters';
const getCharacters = () => fetch(ENDPOINT).then(res=>res.json());
export {getCharacters};
