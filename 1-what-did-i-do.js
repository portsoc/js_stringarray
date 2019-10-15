let day1 = {
  events: ["work", "touched tree", "pizza", "running"],
  squirrel: false,
};
console.log("turned into squirrel?", day1.squirrel);

// what did I do on day 1?
for (const event of day1.events) {
  console.log("on day 1 I did", event);
}
