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

console.log("fox says", day1.fox.noise);
console.log("wolf says", day1.wolf.noise);
