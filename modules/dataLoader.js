async function fetchJSON(url, headers) {
  //await keyword - call this function and expect a promise in return. Fetch returns a promise object that contains methods
  //from the Response object (delegates, in Class terms, it's a constructor)
    let response = await fetch(url,
      {
      headers: headers
      });
  //data = the result of the fetch() function, which here I've called 'response' and is
  // a promise with some special methods for reading it from the Response object like .json() or .text()
    let data = await response.json();
    return data
}

export { fetchJSON };
