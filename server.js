const express = require("express");
const path = require("path");

const complements = [
  "You like nice today",
  "That dress looks nice on you",
  "Have you been working out?",
  "You can do hard things",
  "You're really smart!",
  "Damn, you're so cool!",
  "I'm really proud of you",
  "You are awesome!",
  "You gorgeous thing you."
];

function getRandomComplement() {
  const randomIndex = Math.floor(Math.random() * complements.length);
  return complements[randomIndex];
}

const app = express();

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/complement", function(req, res) {
  res
    .json({
      complement: getRandomComplement()
    })
    .end();
});

const insults = [
    "What are those?!",
    "You are hideous.",
    "You need to lose some weight!",
    "You are incapable.",
    "Everything you do ends in failure.",
    "Learn to code, asshole!",
    "You are a disappointment.",
    "You are dumb and you smell funny.",
    "Imagine being you, yikes."
  ];
  
  function getRandomInsult() {
    const randomIndex = Math.floor(Math.random() * insults.length);
    return insults[randomIndex];
  }
  
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });
  
  app.get("/insult", function(req, res) {
    res
      .json({
        insult: getRandomInsult()
      })
      .end();
  });

app.use("/public", express.static("./public"));

app.listen(3000);
console.log("listening on http://localhost:3000");