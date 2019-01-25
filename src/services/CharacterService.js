const ENDPOINT = 'http://hp-api.herokuapp.com/api/characters';
const getCharactersList = () => fetch(ENDPOINT).then(res=>res.json());
export {getCharactersList};
