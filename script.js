class Media {
  record() {}
  share() {}
}

class Movie extends Media {
  watch() {}
}

class Podcast extends Media {
  listen() {}
}

class Newsletter {
  write() {}
  read() {}
}

class Snippet extends Resource {
  gather() {}
}

// Composition
const recordable = (state) => ({
  record: () => `I'm recording a new ${state.type}...🎥`,
});

const shareble = (state) => ({
  share: () => `I'm share right now  ${state.name}... 🖕`,
});

const watchable = (state) => ({
  watch: () => `Spread a word about ${state.name} 👀`,
});

const movie = (name) => {
  const state = { name: name, type: "movie" };

  return Object.assign(
    {},
    recordable(state),
    shareble(state),
    watchable(state)
  );
};
