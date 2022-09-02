//function to get input value
function getInputValue() {
  const value = document.getElementById("search").value;
  return value;
}

const button = document.querySelector("button");

class DivCreator {
  constructor(title, description, thumbnail, chanelTitle, videoId) {
    this.title = title;
    this.description = description;
    this.thumbnail = thumbnail;
    this.chanelTitle = chanelTitle;
    this.videoId = videoId;
  }
  createDiv() {
    const el = document.createElement("div");
    el.classList.add("search-box");
    const title = document.createElement("h2");
    title.innerHTML = this.title;
    const description = document.createElement("p");
    description.innerHTML = this.description;
    const thumbnail = document.createElement("img");
    thumbnail.src = this.thumbnail;
    thumbnail.alt = this.title;
    el.appendChild(title);
    el.appendChild(thumbnail);
    el.appendChild(description);
    //...kreowanie diva do html
  }
}

function showData() {
  const showData = clickButton();
  showData.then((element) => {
    element.forEach((el) => {
      const newEl = new DivCreator(
        el.title,
        el.description,
        el.thumbnail,
        el.chanelTitle,
        el.videoId
      );
      return newEl;
    });
  });
}

const clickButton = function () {
  const query = getInputValue();
  let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=AIzaSyBBUzPFtZAiqnp-4RdAiFfHjBzOWMWJhlE&maxResults=25`;
  const selectedData = returnSelectedData(url);
  return selectedData;
};

const getData = async function (url) {
  const response = await fetch(url);
  let data = await response.json();
  return data.items;
};

const returnSelectedData = async function (url) {
  const data = await getData(url);
  const array = [];
  data.forEach((element) => {
    const title = element.snippet.title;
    const description = element.snippet.description;
    const thumbnail = element.snippet.thumbnails.high.url;
    const chanelTitle = element.snippet.channelTitle;
    const videoId = element.id.videoId;
    const newObj = Object.assign(
      {},
      { title, description, thumbnail, chanelTitle, videoId }
    );

    array.push(newObj);
  });
  return array;
};

button.addEventListener("click", showData);
