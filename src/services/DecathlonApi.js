// const getApiData = () => {
//   return fetch('https://5f86d366c8a16a0016e6bcd4.mockapi.io/products')
//     .then((response) => response.json())
//     .then((data) => {
//       const dataClean = data.map((movie) => {
//         return {
//           poster: movie.poster,
//           movie: movie.movie,
//           full_line: movie.full_line,
//           year: movie.year,
//           director: movie.director,
//           id: movie.movie + movie.current_wow_in_movie,
//           audio: movie.audio,
//         };
//       });
//       return dataClean;
//     });
// };

// export default getApiData;
