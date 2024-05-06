import { title } from "process";

export const Indexes = [
  {
    title: "Defi",
    tokens: [
      {
        price: 9.98,
        marketcap: 9929309,
        name: "PolyPulse 10",
        image: "/polygon.png",
        isDisabled: false,
      },
      {
        price: 20.0,
        marketcap: 2979832893,
        name: "Base MemeX",
        image: "/meme.png",
        isDisabled: true,
      },
      {
        price: 30.0,
        marketcap: 3000,
        name: "GFX",
        image: "/game.png",
        isDisabled: true,
      },
    ],
  },
  {
    title: "Memes",
    tokens: [
      {
        price: 2.27,
        marketcap: 238935989,
        name: "Base MemeX",
        image: "/meme.png",
        isDisabled: false,
      },
      {
        price: 3.0,
        marketcap: 3000,
        name: "Base MemeX",
        image: "/meme.png",
        isDisabled: true,
      },
      {
        price: 4.0,
        marketcap: 4000,
        name: "GFX",
        image: "/game.png",
        isDisabled: true,
      },
    ],
  },
  {
    title: "Games",
    tokens: [
      {
        price: 1.67,
        marketcap: 12279809,
        name: "GFX",
        image: "/game.png",
        isDisabled: false,
      },
      {
        price: 2.0,
        marketcap: 2000,
        name: "Base MemeX",
        image: "/meme.png",
        isDisabled: true,
      },
      {
        price: 3.0,
        marketcap: 3000,
        name: "GFX",
        image: "/game.png",
        isDisabled: true,
      },
    ],
  },
];

export const marqueeElements = [
  {
    title: "PolyPulse 10",
    image: "/polygon.png",
    price: "$9.98",
    change1: 1.14,
    change2: 9.01,
    changeType: "up",
  },
  {
    title: "Base MemeX",
    image: "/meme.png",
    price: "$2.27",
    change1: 1.14,
    change2: 9.01,
    changeType: "down",
  },
  {
    title: "GFX",
    image: "/game.png",
    price: "$1.67",
    change1: 1.14,
    change2: 9.01,
    changeType: "up",
  },
  {
    title: "Ordinals Plus",
    image: "/originals.png",
    price: "-",
    change1: "-",
    change2: "-",
    changeType: "none",
  },
];
