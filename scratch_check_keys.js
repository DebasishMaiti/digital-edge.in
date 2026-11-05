const fs = require('fs');

const content = fs.readFileSync('src/data/successStories.tsx', 'utf8');

// Match keys
const storyKeys = new Set();
const matches = content.matchAll(/^\s{2}"([^"]+)":\s*\{/gm);
for (const match of matches) {
  storyKeys.add(match[1]);
}

// Also check assignments like storiesData["foo"] = ...
const assignMatches = content.matchAll(/storiesData\["([^"]+)"\]\s*=/g);
for (const match of assignMatches) {
  storyKeys.add(match[1]);
}

console.log("All story keys:", Array.from(storyKeys).sort());

const targetCompanies = [
  // from portfolioItems
  "genesis",
  "melfort",
  "chris-louis",
  "united-by-blue",
  "truboy-bbq",
  "aladeen",
  "earthbags",
  "mezoma",
  "sacred-suta",
  "peach-tassels",
  "no-end",
  "velvet-box",
  // from webDevImages
  "true-boy-bbq",
  // from appImages
  "instayaar",
  "kaamdham",
  "publix",
  "sabjiking",
  "sabji-king",
  "hubfit",
  "recipe-keeper"
];

const missing = [];
for (const key of targetCompanies) {
  if (!storyKeys.has(key)) {
    missing.push(key);
  }
}

console.log("MISSING KEYS:", missing);
