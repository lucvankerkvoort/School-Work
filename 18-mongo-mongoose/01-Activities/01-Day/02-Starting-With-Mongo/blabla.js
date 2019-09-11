[
  {
    name: "Luc",
    rownumber: 3,
    OS: "Win",
    hobbies: ["soccer", "music", "concerts"]
  },
  {
    name: "Greg",
    rownumber: 3,
    OS: "Mac",
    hobbies: ["programming", "music", "concerts"]
  },
  {
    name: "Jonathan",
    rownumber: 3,
    OS: "Mac",
    hobbies: ["programming", "music", "concerts"]
  }
];

db.classroom.update(
  { name: "Jonathan" },
  { $push: { hobbies: "Extreme Basketweaving" } }
);

db.classroom.update({ name: "Greg" }, { $set: { OS: "Win" } });

db.classroom.remove({ name: "Jonathan" });

db.classroom.update({}, { $set: { gavecandy: false } });

db.classroom.update({ name: "Luc" }, { $push: { majorcities: "Agadir" } });

db.classroom.insert({
  name: "Luc",
  rownumber: "3",
  OS: "Win",
  hobbies: ["Extreme Basketweaving", "soccer", "programming"]
});
