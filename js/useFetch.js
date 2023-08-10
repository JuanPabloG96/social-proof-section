export function useFetch(url) {
  return fetch(url)
    .then(response => {
      return response.json()
    })
    .then(data => {
      return data;
    })
    .catch(error => {
      console.error("fetching data error: ", error);
    });
}