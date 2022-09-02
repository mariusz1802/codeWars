// let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=the%20weekend&key=AIzaSyBBUzPFtZAiqnp-4RdAiFfHjBzOWMWJhlE&maxResults=25`;

// const getData = async function (url) {
//   const response = await fetch(url);
//   let data = await response.json();
//   return data;
// };

// const videoId = async function (url) {
//   const responseId = await getData(url);
//   const VideoId = await responseId.items;
//   VideoId.forEach((element) => {
//     const idEl = element.id.videoId;
//     const newEl = `https://www.youtube.com/watch?v=${idEl}`;
//     return newEl;
//   });
// };

// const videoTitle = async function (url) {
//   const responseTitle = await getData(url);
//   const Title = await responseTitle.items;
//   Title.forEach((element) => {
//     const idEl = element.snippet.title;
//     return idEl;
//   });
// };

// const thumbnails = async function (url) {
//   const responseThumbnail = await getData(url);
//   const Thumbnail = await responseThumbnail.items;

//   Thumbnail.forEach((element) => {
//     const thumbnail = element.snippet.thumbnails.high.url;
//     return thumbnail;
//   });
// };

// const button = document.querySelector('button');

// button.addEventListener('click', () => {
//   videoId(url);
//   videoTitle(url);
//   thumbnails(url);

// });
// const button = document.querySelector("button");

// button.addEventListener("click", () => {
//   videoId(url);
//   videoTitle(url);
//   thumbnails(url);
// });

let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=the%20weekend&key=AIzaSyBBUzPFtZAiqnp-4RdAiFfHjBzOWMWJhlE&maxResults=25`;

// const videoId = async function (url) {
//   const responseId = await getData(url);
//   const VideoId = await responseId.items;
//   VideoId.forEach((element) => {
//     const idEl = element.id.videoId;
//     const newEl = `https://www.youtube.com/watch?v=${idEl}`;
//     return newEl;
//   });
// };

// ta funkcja zwraca consol.log ze obiektem state.title
const titleAble = (state) => ({
  title: function () {
    return console.log(`this is title: ${state.title}`);
  },
});
//funkcja asynchroniczna ktora pobiera cały zestaw danych
const getData = async function (url) {
  const response = await fetch(url);
  let data = await response.json();
  return data;
};

//fabryka wyszukiwania wynikow czeka az pobiorą sie itemsy a pozniej leci po elemetach po kolei
const searchResult = async (title) => {
  // podanie statu wprowadzanego do funkcji
  const state = {
    title: snippet.title,
  };

  const Data = await getData(url);
  const Items = await Data.items; //Array of Objects
  await Items.forEach((element) => {
    console.log(element);
  });

  // zwrocnie obiektu z przypisanymi wartosciami do funkcji
  return Object.assign(
    {},

    titleAble(state)
  );
};
