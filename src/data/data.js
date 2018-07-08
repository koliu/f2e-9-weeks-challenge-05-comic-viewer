const chapter1 = {
  id: "chapter1",
  title: "Chapter 1",
  desc: "The F2E Challenge Start!",
  new: false,
  images: []
};
const chapter2 = {
  id: "chapter2",
  title: "Chapter 2",
  desc: "Todo List is Going Crazy!",
  new: true,
  images: []
};
for (let i = 0; i < 12; ) {
  chapter1.images[i] = `../src/static/assets/storyboard-${++i}.png`;
}
for (let i = 0; i < 6; ) {
  chapter2.images[i] = `../src/static/assets/storyboard-${++i}.png`;
}

export default {
  chapters: [chapter1, chapter2]
};
