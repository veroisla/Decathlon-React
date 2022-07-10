const getApiData = () => {
  return fetch('https://5f86d366c8a16a0016e6bcd4.mockapi.io/products')
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

export default getApiData;
