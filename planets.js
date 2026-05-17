/* ============================================================
   PLANET DATA — eight worlds of the solar system
   ============================================================ */

window.PLANETS = [
  {
    id: "mercury",
    name: "Mercury",
    tagline: "The Swift Messenger",
    image: "images/mercury.png",
    color: "#a8a8a8",
    diameter: "4,879 km",
    distanceFromSun: "57.9 million km",
    dayLength: "59 Earth days",
    yearLength: "88 Earth days",
    moons: 0,
    surfaceTemp: "-173°C to 427°C",
    atmosphere: "Minimal (Exosphere)",
    description:
      "The smallest and innermost planet of the Solar System. Mercury is deeply cratered and shares an appearance similar to our Moon. Its lack of a significant atmosphere means it experiences the most extreme temperature variations in the solar system.",
    funFacts: [
      "Mercury is shrinking as its iron core cools.",
      "A year on Mercury is just 88 days long.",
      "Despite being closest to the Sun, Venus is hotter."
    ],
    history:
      "Known since antiquity, Mercury has been visited by two spacecraft: Mariner 10 and MESSENGER. BepiColombo is currently en route.",
    orbitRadius: 60,
    orbitSpeed: 8.8,
    orbitSize: 6
  },
  {
    id: "venus",
    name: "Venus",
    tagline: "Earth's Hellish Twin",
    image: "images/venus.png",
    color: "#e3bb76",
    diameter: "12,104 km",
    distanceFromSun: "108.2 million km",
    dayLength: "243 Earth days",
    yearLength: "225 Earth days",
    moons: 0,
    surfaceTemp: "462°C",
    atmosphere: "Carbon dioxide, Nitrogen",
    description:
      "Often called Earth's twin due to its similar size and density. However, a runaway greenhouse effect has created a hellish surface, with atmospheric pressure 92 times that of Earth and clouds of sulfuric acid.",
    funFacts: [
      "Venus rotates in the opposite direction to most planets.",
      "A day on Venus is longer than its year.",
      "It is the second brightest natural object in the night sky."
    ],
    history:
      "The Soviet Union's Venera 7 became the first spacecraft to land on another planet and transmit data back to Earth in 1970.",
    orbitRadius: 95,
    orbitSpeed: 22.5,
    orbitSize: 8
  },
  {
    id: "earth",
    name: "Earth",
    tagline: "The Pale Blue Dot",
    image: "images/earth.png",
    color: "#4b9fe3",
    diameter: "12,742 km",
    distanceFromSun: "149.6 million km",
    dayLength: "24 hours",
    yearLength: "365.25 days",
    moons: 1,
    surfaceTemp: "-88°C to 58°C",
    atmosphere: "Nitrogen, Oxygen",
    description:
      "Our home planet is the only known harbor of life in the universe. Its distance from the sun falls within the habitable zone, allowing liquid water to exist on its surface.",
    funFacts: [
      "Earth is the only planet not named after a god.",
      "The Earth's core is as hot as the surface of the sun.",
      "Earth is not a perfect sphere, it is slightly flattened at the poles."
    ],
    history:
      "We've been mapping and exploring Earth since the dawn of humanity, but only began exploring it from space in the 1950s.",
    orbitRadius: 130,
    orbitSpeed: 36.5,
    orbitSize: 9
  },
  {
    id: "mars",
    name: "Mars",
    tagline: "The Red Planet",
    image: "images/mars.png",
    color: "#e27b58",
    diameter: "6,779 km",
    distanceFromSun: "227.9 million km",
    dayLength: "24h 37m",
    yearLength: "687 Earth days",
    moons: 2,
    surfaceTemp: "-153°C to 20°C",
    atmosphere: "Carbon dioxide, Argon",
    description:
      "The Red Planet is a dusty, cold, desert world with a very thin atmosphere. It holds the largest volcano and canyon in the solar system, hinting at a much more active past.",
    funFacts: [
      "Mars has the largest dust storms in the solar system.",
      "Sunsets on Mars are blue.",
      "Pieces of Mars have fallen to Earth as meteorites."
    ],
    history:
      "Mars has been explored by numerous rovers, including Curiosity and Perseverance, searching for signs of ancient microbial life.",
    orbitRadius: 165,
    orbitSpeed: 68.7,
    orbitSize: 7
  },
  {
    id: "jupiter",
    name: "Jupiter",
    tagline: "The Gas Giant King",
    image: "images/jupiter.png",
    color: "#c99a75",
    diameter: "139,820 km",
    distanceFromSun: "778.5 million km",
    dayLength: "9h 55m",
    yearLength: "11.8 Earth years",
    moons: 95,
    surfaceTemp: "-110°C",
    atmosphere: "Hydrogen, Helium",
    description:
      "The largest planet in our solar system, a gas giant that lacks a true surface. Its iconic Great Red Spot is a storm larger than Earth that has been raging for hundreds of years.",
    funFacts: [
      "Jupiter is more than twice as massive as all other planets combined.",
      "It has rings, though they are very faint.",
      "Jupiter acts as a vacuum cleaner, protecting Earth from asteroids."
    ],
    history:
      "Galileo discovered its four largest moons in 1610. The Juno spacecraft is currently orbiting Jupiter.",
    orbitRadius: 215,
    orbitSpeed: 118,
    orbitSize: 18
  },
  {
    id: "saturn",
    name: "Saturn",
    tagline: "The Ringed Wonder",
    image: "images/saturn.png",
    color: "#e3d599",
    diameter: "116,460 km",
    distanceFromSun: "1.4 billion km",
    dayLength: "10h 33m",
    yearLength: "29.4 Earth years",
    moons: 146,
    surfaceTemp: "-140°C",
    atmosphere: "Hydrogen, Helium",
    description:
      "Famous for its spectacular ring system composed of ice and rock. Saturn is the least dense planet in the solar system — it would float if you could find a bathtub big enough.",
    funFacts: [
      "Saturn's rings are mostly made of chunks of ice and small amounts of rock.",
      "It spins so fast it flattens itself.",
      "Its moon Titan has a thick atmosphere and lakes of liquid methane."
    ],
    history:
      "The Cassini mission spent 13 years exploring the Saturn system, diving through its rings before plunging into the atmosphere.",
    orbitRadius: 260,
    orbitSpeed: 294,
    orbitSize: 15
  },
  {
    id: "uranus",
    name: "Uranus",
    tagline: "The Tilted Ice Giant",
    image: "images/uranus.png",
    color: "#a4d7d1",
    diameter: "50,724 km",
    distanceFromSun: "2.9 billion km",
    dayLength: "17h 14m",
    yearLength: "84 Earth years",
    moons: 27,
    surfaceTemp: "-195°C",
    atmosphere: "Hydrogen, Helium, Methane",
    description:
      "An ice giant with a unique feature: it rotates on its side. Its pale blue color comes from methane in its upper atmosphere absorbing red light.",
    funFacts: [
      "Uranus rolls like a barrel rather than spinning like a top.",
      "It is the coldest planet in the solar system.",
      "It was the first planet discovered using a telescope."
    ],
    history:
      "Discovered by William Herschel in 1781. Voyager 2 is the only spacecraft to have visited Uranus (in 1986).",
    orbitRadius: 300,
    orbitSpeed: 840,
    orbitSize: 12
  },
  {
    id: "neptune",
    name: "Neptune",
    tagline: "The Distant Storm",
    image: "images/neptune.jpg",
    color: "#4771c9",
    diameter: "49,244 km",
    distanceFromSun: "4.5 billion km",
    dayLength: "16h 6m",
    yearLength: "165 Earth years",
    moons: 14,
    surfaceTemp: "-200°C",
    atmosphere: "Hydrogen, Helium, Methane",
    description:
      "The most distant major planet in our solar system. Dark, cold, and whipped by supersonic winds, Neptune is the only planet found via mathematical prediction rather than empirical observation.",
    funFacts: [
      "Winds on Neptune can reach 2,100 km/h (1,300 mph).",
      "It takes 165 Earth years to orbit the sun once.",
      "Its largest moon, Triton, orbits backward."
    ],
    history:
      "Discovered in 1846. Like Uranus, it was only visited once by Voyager 2 in 1989.",
    orbitRadius: 340,
    orbitSpeed: 1650,
    orbitSize: 11
  }
];

window.getPlanetById = function (id) {
  return window.PLANETS.find(function (p) { return p.id === id; });
};
