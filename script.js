"use-strict";
// Değişkenler
const game = document.querySelector(".game-number");
let gameNumb = 1;
const f1 = document.querySelector(".f1");
const f2 = document.querySelector(".f2");
const wins1 = document.querySelectorAll(".f1");
console.log(wins1);
const wins2 = document.querySelectorAll(".f2");
console.log(wins2);
const player1 = document.querySelector(".player-1");
const player2 = document.querySelector(".player-2");
const roll = document.querySelector(".btn-roll-dice");
const hold = document.querySelector(".btn-hold");
const newGame = document.querySelector(".btn-new-game");
const continueBtn = document.querySelector(".btn-continue");
const dice = document.querySelectorAll(".dice");
const dice1 = document.querySelector(".dice-1");
const dice2 = document.querySelector(".dice-2");
const dice3 = document.querySelector(".dice-3");
const dice4 = document.querySelector(".dice-4");
const dice5 = document.querySelector(".dice-5");
const dice6 = document.querySelector(".dice-6");
const current1 = document.querySelector(".current-1");
const current2 = document.querySelector(".current-2");
const total1 = document.querySelector(".total-1");
let finalTotal1 = 0;
const total2 = document.querySelector(".total-2");
let finalTotal2 = 0;
let player1Win = 0;
let player2Win = 0;
const currentValue1 = document.querySelector(".current-value-1");
let finalValue1 = 0;
const currentValue2 = document.querySelector(".current-value-2");
let finalValue2 = 0;
const player1Active = function () {
  f1.classList.add("font-active");
  f1.classList.remove("font");
  f2.classList.remove("font-active");
  f2.classList.add("font");
  player1.classList.add("active");
  player2.classList.remove("active");
  current1.classList.remove("opacity");
  current2.classList.add("opacity");
};
const player2Active = function () {
  f1.classList.add("font");
  f1.classList.remove("font-active");
  f2.classList.remove("font");
  f2.classList.add("font-active");
  current1.classList.add("opacity");
  current2.classList.remove("opacity");
  player1.classList.remove("active");
  player2.classList.add("active");
};
// random zar
roll.addEventListener("click", function () {
  let diceValue = Math.trunc(Math.random() * 6) + 1;
  console.log(diceValue);
  if (diceValue === 1) {
    dice1.classList.remove("hidden");
    if (player1.classList.contains("active")) {
      player2Active();
      currentValue1.textContent = 0;
      finalValue1 = 0;
    } else if (player2.classList.contains("active")) {
      player1Active();
      currentValue2.textContent = 0;
      finalValue2 = 0;
    }
  } else dice1.classList.add("hidden");
  if (diceValue === 2) {
    dice2.classList.remove("hidden");
    if (player1.classList.contains("active")) {
      finalValue1 = Number(finalValue1 + diceValue);
      currentValue1.textContent = Number(finalValue1);
    } else if (player2.classList.contains("active")) {
      finalValue2 = Number(finalValue2 + diceValue);
      currentValue2.textContent = Number(finalValue2);
    }
  } else dice2.classList.add("hidden");
  if (diceValue === 3) {
    dice3.classList.remove("hidden");
    if (player1.classList.contains("active")) {
      finalValue1 = Number(finalValue1 + diceValue);
      currentValue1.textContent = Number(finalValue1);
    } else if (player2.classList.contains("active")) {
      finalValue2 = Number(finalValue2 + diceValue);
      currentValue2.textContent = Number(finalValue2);
    }
  } else dice3.classList.add("hidden");
  if (diceValue === 4) {
    dice4.classList.remove("hidden");
    if (player1.classList.contains("active")) {
      finalValue1 = Number(finalValue1 + diceValue);
      currentValue1.textContent = Number(finalValue1);
    } else if (player2.classList.contains("active")) {
      finalValue2 = Number(finalValue2 + diceValue);
      currentValue2.textContent = Number(finalValue2);
    }
  } else dice4.classList.add("hidden");
  if (diceValue === 5) {
    dice5.classList.remove("hidden");
    if (player1.classList.contains("active")) {
      finalValue1 = Number(finalValue1 + diceValue);
      currentValue1.textContent = Number(finalValue1);
    } else if (player2.classList.contains("active")) {
      finalValue2 = Number(finalValue2 + diceValue);
      currentValue2.textContent = Number(finalValue2);
    }
  } else dice5.classList.add("hidden");
  if (diceValue === 6) {
    dice6.classList.remove("hidden");
    if (player1.classList.contains("active")) {
      finalValue1 = Number(finalValue1 + diceValue);
      currentValue1.textContent = Number(finalValue1);
    } else if (player2.classList.contains("active")) {
      finalValue2 = Number(finalValue2 + diceValue);
      currentValue2.textContent = Number(finalValue2);
    }
  } else dice6.classList.add("hidden");
});

// toplam değeri saklama ve kazananı belirleme
hold.addEventListener("click", function () {
  if (player1.classList.contains("active")) {
    finalTotal1 = finalTotal1 + Number(currentValue1.textContent);
    total1.textContent = Number(finalTotal1);
    player2Active();
    currentValue1.textContent = 0;
    finalValue1 = 0;
    if (finalTotal1 >= 100) {
      player1Win += 1;
      player1.classList.add("win");
      switch (wins1[2].classList.contains("hidden")) {
        case true:
          wins1[2].classList.remove("hidden");
          current1.classList.add("hidden");
          break;
      }
      hold.disabled = true;
      roll.disabled = true;
      continueBtn.classList.remove("hidden");
      player1Active();
      if (player1Win === 1) {
        document.getElementById("one-1").classList.remove("hidden");
        document.querySelector(
          ".game1-1"
        ).textContent = `Game - 1 = ${finalTotal1}`;
      }
      if (player1Win === 2) {
        document.getElementById("two-1").classList.remove("hidden");
        document.querySelector(
          ".game1-2"
        ).textContent = `Game - 2 = ${finalTotal1}`;
      }
      if (player1Win === 3) {
        document.getElementById("three-1").classList.remove("hidden");
        switch (wins1[3].classList.contains("hidden")) {
          case true:
            wins1[1].classList.remove("hidden");
            wins1[2].classList.add("hidden");
            wins1[3].classList.remove("hidden");
            wins1[4].classList.remove("hidden");
            wins2[4].classList.remove("hidden");
            current1.classList.add("hidden");
            current2.classList.add("hidden");
            break;
        }
        total1.classList.add("scale-score");
        document.querySelector(
          ".game1-3"
        ).textContent = `Game - 3 = ${finalTotal1}`;
      }
      if (!document.getElementById("three-1").classList.contains("hidden"))
        continueBtn.classList.add("hidden");
    }
  } else if (player2.classList.contains("active")) {
    finalTotal2 = finalTotal2 + Number(currentValue2.textContent);
    total2.textContent = Number(finalTotal2);
    player1Active();
    currentValue2.textContent = 0;
    finalValue2 = 0;
    if (finalTotal2 >= 100) {
      player2Win += 1;
      player2.classList.add("win");
      switch (wins2[1].classList.contains("hidden")) {
        case true:
          wins2[2].classList.remove("hidden");
          current2.classList.add("hidden");
          break;
      }
      continueBtn.classList.remove("hidden");
      hold.disabled = true;
      roll.disabled = true;
      player2Active();
      if (player2Win === 1) {
        document.getElementById("one-2").classList.remove("hidden");
        document.querySelector(
          ".game2-1"
        ).textContent = `Game - 1 = ${finalTotal2}`;
      }
      if (player2Win === 2) {
        document.getElementById("two-2").classList.remove("hidden");
        document.querySelector(
          ".game2-2"
        ).textContent = `Game - 2 = ${finalTotal2}`;
      }
      if (player2Win === 3) {
        document.getElementById("three-2").classList.remove("hidden");
        switch (wins2[3].classList.contains("hidden")) {
          case true:
            wins2[1].classList.remove("hidden");
            wins2[2].classList.add("hidden");
            wins2[3].classList.remove("hidden");
            wins2[4].classList.remove("hidden");
            wins1[4].classList.remove("hidden");
            current1.classList.add("hidden");
            current2.classList.add("hidden");
            break;
        }
        total2.classList.add("scale-score");

        document.querySelector(
          ".game2-3"
        ).textContent = `Game - 3 = ${finalTotal2}`;
      }
      if (!document.getElementById("three-2").classList.contains("hidden"))
        continueBtn.classList.add("hidden");
    }
  }
});

// Continue butonu
continueBtn.addEventListener("click", function () {
  finalTotal1 = 0;
  finalTotal2 = 0;
  finalValue1 = 0;
  finalValue2 = 0;
  hold.disabled = false;
  roll.disabled = false;
  total1.textContent = 0;
  total2.textContent = 0;
  currentValue1.textContent = 0;
  currentValue2.textContent = 0;
  for (let i = 0; i < dice.length; i++) dice[i].classList.add("hidden");
  player1.classList.remove("win");
  player2.classList.remove("win");
  current1.classList.remove("hidden");
  current2.classList.remove("hidden");
  wins1[1].classList.add("hidden");
  wins2[1].classList.add("hidden");
  total1.classList.remove("scale-score");
  total2.classList.remove("scale-score");
  player1Active();
  continueBtn.classList.add("hidden");
  gameNumb += 1;
  game.textContent = gameNumb;
  wins1[2].classList.add("hidden");
  wins2[2].classList.add("hidden");
});

// Yeni oyun
newGame.addEventListener("click", function () {
  newGame.classList.add("click-move");
  finalTotal1 = 0;
  finalTotal2 = 0;
  finalValue1 = 0;
  finalValue2 = 0;
  currentValue1.textContent = 0;
  currentValue2.textContent = 0;
  total1.textContent = 0;
  total2.textContent = 0;
  for (let i = 0; i < dice.length; i++) dice[i].classList.add("hidden");
  player1.classList.remove("win");
  player2.classList.remove("win");
  current1.classList.remove("hidden");
  current2.classList.remove("hidden");

  total1.classList.remove("scale-score");
  total2.classList.remove("scale-score");
  hold.disabled = false;
  roll.disabled = false;
  player1Active();
  document.getElementById("one-1").classList.add("hidden");
  document.getElementById("two-1").classList.add("hidden");
  document.getElementById("three-1").classList.add("hidden");
  document.getElementById("one-2").classList.add("hidden");
  document.getElementById("two-2").classList.add("hidden");
  document.getElementById("three-2").classList.add("hidden");
  document.querySelector(".result-1").classList.add("hidden");
  document.querySelector(".result-2").classList.add("hidden");
  document.querySelector(".game1-1").textContent = "";
  document.querySelector(".game1-2").textContent = "";
  document.querySelector(".game1-3").textContent = "";
  document.querySelector(".game2-1").textContent = "";
  document.querySelector(".game2-2").textContent = "";
  document.querySelector(".game2-3").textContent = "";
  wins1[1].classList.add("hidden");
  wins1[2].classList.add("hidden");
  wins2[1].classList.add("hidden");
  wins2[2].classList.add("hidden");
  wins1[3].classList.add("hidden");
  wins2[3].classList.add("hidden");
  gameNumb = 1;
  player2Win = 0;
  player1Win = 0;
  continueBtn.classList.add("hidden");
  document.querySelector(".game-number").textContent = 1;
});
