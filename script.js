let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=the%20weekend&key=AIzaSyBBUzPFtZAiqnp-4RdAiFfHjBzOWMWJhlE&maxResults=25`;

const getData = async function (url) {
  const response = await fetch(url);
  let data = await response.json();
  return data;
};

const videoId = async function (url) {
  const responseId = await getData(url);
  const VideoId = await responseId.items;
  VideoId.forEach((element) => {
    const idEl = element.id.videoId;
    const newEl = `https://www.youtube.com/watch?v=${idEl}`;
    return newEl;
  });
};

const videoTitle = async function (url) {
  const responseTitle = await getData(url);
  const Title = await responseTitle.items;
  Title.forEach((element) => {
    const idEl = element.snippet.title;
    return idEl;
  });
};

const thumbnails = async function (url) {
  const responseThumbnail = await getData(url);
  const Thumbnail = await responseThumbnail.items;

  Thumbnail.forEach((element) => {
    const thumbnail = element.snippet.thumbnails.high.url;
    return thumbnail;
  });
};

// async function getUrl() {
//   const returnUrl = getUrl.then((el) => {
//     console.log(el.items);
//   });
//   return returnUrl;
// }

const button = document.querySelector("button");

button.addEventListener("click", () => {
  videoId(url);
  videoTitle(url);
  thumbnails(url);
});
