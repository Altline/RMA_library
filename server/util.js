const BASE_URL = "https://www.googleapis.com/books/v1/";

function endpoint(name) {
    return `${BASE_URL}${name}`;
  }
  
  function endpointWithPathArg(name, pathArg) {
    return `${endpoint(name)}/${pathArg}`;
  }
  
  module.exports = { endpoint, endpointWithPathArg };