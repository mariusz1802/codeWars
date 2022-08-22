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

let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=the%20weekend&key=AIzaSyBBUzPFtZAiqnp-4RdAiFfHjBzOWMWJhlE&maxResults=25`;

const getData = async function (url) {
  const response = await fetch(url);
  let data = await response.json();
  return data;
};

// const videoId = async function (url) {
//   const responseId = await getData(url);
//   const VideoId = await responseId.items;
//   VideoId.forEach((element) => {
//     const idEl = element.id.videoId;
//     const newEl = `https://www.youtube.com/watch?v=${idEl}`;
//     return newEl;
//   });
// };

const videoIdAble = (state) => ({
  videoId: function () {
    return console.log(`id video to: ${state.videoId}`);
  },
});

const titleAble = (state) => ({
  title: function () {
    return console.log(`title video : ${state.title}`);
  },
});
const thumbnailAble = (state) => ({
  thumbnail: function () {
    return console.log(`thumbnail : ${state.thumbnail}`);
  },
});

const searchResult = async (name, videoId, title, thumbnail) => {
  const Data = await getData(url);
  const Items = await Data.items; //Array of Objects

  Items.forEach((element) => {
    console.log(element);
  });

  const state = {
    name: name,
    videoId: videoId,
    title: title,
    thumbnail: thumbnail,
  };

  return Object.assign(
    {},
    videoIdAble(state),
    titleAble(state),
    thumbnailAble(state)
  );
};

const newVideo = searchResult('MojeVideo', '1234', 'Blade', 'picturethumbnail');

newVideo.videoId();

const button = document.querySelector('button');

button.addEventListener('click', () => {
  videoId(url);
  videoTitle(url);
  thumbnails(url);
});
