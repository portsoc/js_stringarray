let day1 = {
  squirrel: false,
  events: ["work", "touched tree", "pizza", "running"],
  fox: {
    noise: "I'm oh so clever",
    colour: "rust",
  },
};

day1.wolf = {
  noise: "howl",
  colour: "white",
};


const animals = ['wolf', 'fox'];

for (const animal of animals) {
  console.log(day1[animal].colour, animal, "says", day1[animal].noise);
}
