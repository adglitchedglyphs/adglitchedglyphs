window.PRESTIGE_EVENT = {
  DIMENSION_BOOST: 0,
  ANTIMATTER_GALAXY: 1,
  INFINITY: 2,
  ETERNITY: 3,
  REALITY: 4,
};

function deepFreeze(obj) {
  Object.keys(obj).forEach(prop => {
    const reference = obj[prop];
    if (typeof reference === "object") deepFreeze(reference);
  });
  return Object.freeze(obj);
}

export const DC = deepFreeze({
  // Naming Scheme:
  // D[0-9]: Decimal mantissa variable
  // _: decimal (.) part of the mantissa
  // E[0-9]: Decimal exponent variable
  // C: Calculation. D - .div, P - .pow

  /* eslint-disable key-spacing */
  DM1:                  new Decimal("-1"),
  D0:                   new Decimal("0"),

  D0_01:                new Decimal("0.01"),
  D0_1:                 new Decimal("0.1"),
  D0_4:                 new Decimal("0.4"),
  D0_55:                new Decimal("0.55"),
  D0_8446303389034288:  new Decimal("0.8446303389034288"),
  D0_95:                new Decimal("0.95"),
  D0_965:               new Decimal("0.965"),
  D1:                   new Decimal("1"),
  D1_0000109:           new Decimal("1.0000109"),
  D1_00038:             new Decimal("1.00038"),
  D1_0004:              new Decimal("1.0004"),
  D1_0025:              new Decimal("1.0025"),
  D1_005:               new Decimal("1.005"),
  D1_007:               new Decimal("1.007"),
  D1_02:                new Decimal("1.02"),
  D1_0285:              new Decimal("1.0285"),
  D1_2:                 new Decimal("1.2"),
  D1_3:                 new Decimal("1.3"),
  D2:                   new Decimal("2"),
  D3:                   new Decimal("3"),
  D4:                   new Decimal("4"),
  D5:                   new Decimal("5"),
  D6_66:                new Decimal("6.66"),
  D15:                  new Decimal("15"),
  D16:                  new Decimal("16"),
  D11111:               new Decimal("11111"),
  D3E4:                 new Decimal("30000"),
  D2E5:                 new Decimal("2e5"),
  D2E6:                 new Decimal("2e6"),
  D5E7:                 new Decimal("5e7"),
  D2E9:                 new Decimal("2e9"),
  D2E25:                new Decimal("2e25"),
  D2E22222:             new Decimal("2e22222"),
  D9_99999E999:         new Decimal("9.99999e999"),
  D9_9999E9999:         new Decimal("9.9999e9999"),

  // Calculations for precise numbers.
  C1D1_1245:                Decimal.div(1, 1.1245),
  D2P30D0_61:               Decimal.pow(2, 30 / 0.61),
  C2P30:                    Decimal.pow(2, 30),
  C2P1024:                  Decimal.pow(2, 1024),
  C10P16000D3:              Decimal.pow(10, 16000 / 3),

  // 1e1 is 10
  E1:                   new Decimal("1e1"),
  E2:                   new Decimal("1e2"),
  E3:                   new Decimal("1e3"),
  E5:                   new Decimal("1e5"),
  E6:                   new Decimal("1e6"),
  E8:                   new Decimal("1e8"),
  E9:                   new Decimal("1e9"),
  E10:                  new Decimal("1e10"),
  E12:                  new Decimal("1e12"),
  E15:                  new Decimal("1e15"),
  E20:                  new Decimal("1e20"),
  E25:                  new Decimal("1e25"),
  E29:                  new Decimal("1e29"),
  E30:                  new Decimal("1e30"),
  E31:                  new Decimal("1e31"),
  E40:                  new Decimal("1e40"),
  E45:                  new Decimal("1e45"),
  E50:                  new Decimal("1e50"),
  E55:                  new Decimal("1e55"),
  E58:                  new Decimal("1e58"),
  E60:                  new Decimal("1e60"),
  E63:                  new Decimal("1e63"),
  E70:                  new Decimal("1e70"),
  E75:                  new Decimal("1e75"),
  E80:                  new Decimal("1e80"),
  E90:                  new Decimal("1e90"),
  E100:                 new Decimal("1e100"),
  E140:                 new Decimal("1e140"),
  E150:                 new Decimal("1e150"),
  E160:                 new Decimal("1e160"),
  E170:                 new Decimal("1e170"),
  E175:                 new Decimal("1e175"),
  E200:                 new Decimal("1e200"),
  E250:                 new Decimal("1e250"),
  E260:                 new Decimal("1e260"),
  E280:                 new Decimal("1e280"),
  E300:                 new Decimal("1e300"),
  E308:                 new Decimal("1e308"),
  E309:                 new Decimal("1e309"),
  E310:                 new Decimal("1e310"),
  E315:                 new Decimal("1e315"),
  E320:                 new Decimal("1e320"),
  E349:                 new Decimal("1e349"),
  E400:                 new Decimal("1e400"),
  E450:                 new Decimal("1e450"),
  E500:                 new Decimal("1e500"),
  E530:                 new Decimal("1e530"),
  E550:                 new Decimal("1e550"),
  E600:                 new Decimal("1e600"),
  E616:                 new Decimal("1e616"),
  E650:                 new Decimal("1e650"),
  E750:                 new Decimal("1e750"),
  E850:                 new Decimal("1e850"),
  E900:                 new Decimal("1e900"),
  E925:                 new Decimal("1e925"),
  E975:                 new Decimal("1e975"),
  E1000:                new Decimal("1e1000"),
  E1100:                new Decimal("1e1100"),
  E1200:                new Decimal("1e1200"),
  E1300:                new Decimal("1e1300"),
  E1400:                new Decimal("1e1400"),
  E1500:                new Decimal("1e1500"),
  E1750:                new Decimal("1e1750"),
  E1800:                new Decimal("1e1800"),
  E1900:                new Decimal("1e1900"),
  E2000:                new Decimal("1e2000"),
  E2350:                new Decimal("1e2350"),
  E2400:                new Decimal("1e2400"),
  E2500:                new Decimal("1e2500"),
  E2650:                new Decimal("1e2650"),
  E2700:                new Decimal("1e2700"),
  E2750:                new Decimal("1e2750"),
  E2800:                new Decimal("1e2800"),
  E2900:                new Decimal("1e2900"),
  E3000:                new Decimal("1e3000"),
  E3200:                new Decimal("1e3200"),
  E3350:                new Decimal("1e3350"),
  E4000:                new Decimal("1e4000"),
  E5000:                new Decimal("1e5000"),
  E6000:                new Decimal("1e6000"),
  E8000:                new Decimal("1e8000"),
  E9000:                new Decimal("1e9000"),
  E10000:               new Decimal("1e10000"),
  E10500:               new Decimal("1e10500"),
  E11000:               new Decimal("1e11000"),
  E11111:               new Decimal("1e11111"),
  E11200:               new Decimal("1e11200"),
  E12000:               new Decimal("1e12000"),
  E13000:               new Decimal("1e13000"),
  E14000:               new Decimal("1e14000"),
  E16500:               new Decimal("1e16500"),
  E17500:               new Decimal("1e17500"),
  E18000:               new Decimal("1e18000"),
  E20000:               new Decimal("1e20000"),
  E22500:               new Decimal("1e22500"),
  E23000:               new Decimal("1e23000"),
  E27000:               new Decimal("1e27000"),
  E28000:               new Decimal("1e28000"),
  E30000:               new Decimal("1e30000"),
  E45000:               new Decimal("1e45000"),
  E54000:               new Decimal("1e54000"),
  E60000:               new Decimal("1e60000"),
  E100000:              new Decimal("1e100000"),
  E110000:              new Decimal("1e110000"),
  E164000:              new Decimal("1e164000"),
  E200000:              new Decimal("1e200000"),
  E201600:              new Decimal("1e201600"),
  E208000:              new Decimal("1e208000"),
  E210000:              new Decimal("1e210000"),
  E300000:              new Decimal("1e300000"),
  E320000:              new Decimal("1e320000"),
  E500000:              new Decimal("1e500000"),
  E1E6:                 new Decimal("1e1000000"),
  E3E6:                 new Decimal("1e3000000"),
  E6E6:                 new Decimal("1e6000000"),
  E1E7:                 new Decimal("1e10000000"),
  E2E7:                 new Decimal("1e20000000"),
  E4E7:                 new Decimal("1e40000000"),
  E6E7:                 new Decimal("1e60000000"),
  E1E8:                 new Decimal("1e100000000"),
  E1_5E12:              new Decimal("1e1500000000000"),
  E1E15:                new Decimal("1e1000000000000000"),
});

window.AUTOBUYER_MODE = {
  BUY_SINGLE: 1,
  BUY_10: 10,
  BUY_MAX: 100,
};

window.AUTO_CRUNCH_MODE = {
  AMOUNT: 0,
  TIME: 1,
  X_HIGHEST: 2
};

window.AUTO_ETERNITY_MODE = {
  AMOUNT: 0,
  TIME: 1,
  X_HIGHEST: 2
};

window.AUTO_REALITY_MODE = {
  RM: 0,
  GLYPH: 1,
  EITHER: 2,
  BOTH: 3,
  TIME: 4,
  RELIC_SHARD: 5,
};

window.RECENT_PRESTIGE_RESOURCE = {
  ABSOLUTE_GAIN: 0,
  RATE: 1,
  CURRENCY: 2,
  PRESTIGE_COUNT: 3,
};

// Free tickspeed multiplier with TS171. Shared here because formatting glyph effects depends on it
window.TS171_MULTIPLIER = 1.25;

// Used as drag and drop data type
window.GLYPH_MIME_TYPE = "text/x-ivark-glyph";

// These need to be in descending order for searching over them to work trivially, and all need to be hex codes
// in order for reality glyph color parsing to work properly in the cosmetic handler
window.GlyphRarities = [
  {
    minStrength: 3.5,
    name: "Celestial",
    darkColor: "#3d3dec",
    lightColor: "#9696ff",
    darkHighContrast: "#ffff00",
    lightHighContrast: "#c0c000"
  }, {
    minStrength: 3.25,
    name: "Transcendent",
    darkColor: "#03ffec",
    lightColor: "#00c3c3",
    darkHighContrast: "#00ffff",
    lightHighContrast: "#00c0c0"
  }, {
    minStrength: 3,
    name: "Mythical",
    darkColor: "#d50000",
    lightColor: "#d50000",
    darkHighContrast: "#c00000",
    lightHighContrast: "#ff0000"
  }, {
    minStrength: 2.75,
    name: "Legendary",
    darkColor: "#ff9800",
    lightColor: "#d68100",
    darkHighContrast: "#ff8000",
    lightHighContrast: "#ff8000"
  }, {
    minStrength: 2.5,
    name: "Epic",
    darkColor: "#9c27b0",
    lightColor: "#9c27b0",
    darkHighContrast: "#ff00ff",
    lightHighContrast: "#ff00ff"
  }, {
    minStrength: 2,
    name: "Rare",
    darkColor: "#5096f3",
    lightColor: "#0d40ff",
    darkHighContrast: "#6060ff",
    lightHighContrast: "#0000ff"
  }, {
    minStrength: 1.5,
    name: "Uncommon",
    darkColor: "#43a047",
    lightColor: "#1e8622",
    darkHighContrast: "#00ff00",
    lightHighContrast: "#00b000"
  }, {
    minStrength: 1,
    name: "Common",
    darkColor: "#ffffff",
    lightColor: "#000000",
    darkHighContrast: "#ffffff",
    lightHighContrast: "#000000"
  },
];

window.GLYPH_BG_SETTING = {
  AUTO: 0,
  LIGHT: 1,
  DARK: 2,
};

window.GLYPH_TYPES = [
  "power",
  "infinity",
  "replication",
  "time",
  "dilation",
  "effarig",
  "reality",
  "cursed",
  "companion",
  "tmtrainer"
];

window.BASIC_GLYPH_TYPES = [
  "power",
  "infinity",
  "replication",
  "time",
  "dilation"
];

window.ALCHEMY_BASIC_GLYPH_TYPES = [
  "power",
  "infinity",
  "replication",
  "time",
  "dilation",
  "effarig"
];

window.GLYPH_SYMBOLS = {
  power: "Ω",
  infinity: "∞",
  replication: "Ξ",
  time: "Δ",
  dilation: "Ψ",
  effarig: "Ϙ",
  reality: "Ϟ",
  cursed: "⸸",
  companion: "♥",
  tmtrainer: "",
};

window.CANCER_GLYPH_SYMBOLS = {
  power: "⚡",
  infinity: "8",
  replication: "⚤",
  time: "🕟",
  dilation: "☎",
  effarig: "🦒",
  reality: "⛧",
  cursed: "☠",
  companion: "³",
  tmtrainer: "",
};

// sfc32 is public domain https://pracrand.sourceforge.net/ thank you Chris Doty-Humphrey and bryc on stackoverflow
function sfc32(a, b, c, d) {
    return function() {
      a >>>= 0; b >>>= 0; c >>>= 0; d >>>= 0;
      let t = (a + b) | 0;
      a = b ^ b >>> 9;
      b = c + (c << 3) | 0;
      c = (c << 21 | c >>> 11);
      d = d + 1 | 0;
      t = t + d | 0;
      c = c + t | 0;
      return (t >>> 0) / 4294967296;
    }
}

// probably completely botched this but we will pair it up with a math.random to the int limit so it'll be fine
window.RAND = function(seed) {
    let randnr = sfc32(seed * 0x9E317469 ^ 597399067, seed, seed * 0x14426038 ^ 2869860233, seed * 0xB3015A22 ^ 951274213);
    return randnr();
}

// util
window.randomInArray = function(arr, seed) {
  return arr[Math.round(RAND(seed) * (arr.length-1))];
}

// util
function randomSubstring(str, seed) {
    let len = str.length - 1;
    let randStart = Math.round(RAND(seed) * len);
    let randEnd = Math.round(RAND(RAND(seed * 1e9 * RAND(seed))) * len);
    if(randStart > randEnd) { let swap = randEnd; randEnd = randStart; randStart = swap; }
    return str.substring(randStart, randEnd);
}

// util
window.randwhiteblack = function(seed) {
  let results = [ "white", "black" ];
  return results[Math.round(RAND(seed))];
}

// util
window.randhex = function(seed) {
  let base16 = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F" ]
  let result = "#";
  for(let i = 0; i < 6; i++) {
    result += base16[Math.round(RAND(seed) * 15)];
    seed *= 1.2;
    seed = Math.ceil(seed);
  }
  return result;
}

// util -- for quick changing of bg, i think #000000 looks best
window.randlighthex = function(seed) {
  return "#000000";
}
// Why bother with learning modules and all when putting everything in constants.js is a thing

// Possible names for the glyphs: TMTRAINER Glyphs, Chaos Glyphs, Glitched Glyphs
// (yes, the first two of them are Isaac references)
// They will be refered to as TMTRAINER Glyphs in the code and something else outside the code, probably

// ------ TMTRAINER Sequence Building ------
// These pieces of code build the random gibberish that will be shown to the user as the glyph's name
// and level and effects.

// Snippets: 40% chance for a snippet subsequence. If chosen, takes a random substring from the snippet.
// Both to prevent full text names and bad stuff appearing from random merging, always followed by
// either a symbol, or an ASCII Garbage.
const TEXT_CHANCE = 0.4 // for quick balancing, actual chance is this - SYMBOL_CHANCE
window.TMTRAINER_TEXT = [ "myriad", "ghosts", "quantum", "You are currently in the Antimatter", "Universe (no active", "challenges) Game speed is altered: 🌀:, ", " Pulsing", "Drag Glyphs here or shift-click to", " Sacrifice.", "The confirmation can be disabled in", " Options or by holding Ctrl.", "You have made a total of", "The game is being run at", " a lower accuracy in order", " to quickly calculate the resources you", " gained while you were away", "You have reached the limits of", " Reality and cannot hold more than", "1e1500 Reality Machines. But I digress.", " We should tighten these chains.", "When loading a preset, try to", " match the following attributes.", "Potential Glyphs for this Reality", "Your maximum Dilated Time reached this", " Reality is", "All Infinity Dimensions except for the", " 8th are limited to a maximum of ", " useless paperclips.", "Ready to Reality! You have unlocked", "every available upgrade within this Reality.", "Accumulated Dimension Quantity: The next column", "Normal Challenge", "Eternity Challenge ", "Due to amplification of your current Reality,", "While charging, game speed multipliers are decreased", "and the lost speed is converted into stored game time", "Discharging the Black Hole", "skip forward in time. Stored game time", "\"amplify\" a Reality, simulating", "Inverted Black Hole divides game speed", "Maximum stored real time: 33:00:00", "Efficiency: 70%", "Glyph levels are boosted to a ", "minimum of 5,000.", "(exponent^0.55)", "Reward: Unlock Tesseracts", "Cursed Glyphs can be created ", "here or in the Effarig tab.", "Cursed Glyphs count as -3 Glyphs for the purposes", "Each Hard V-Achievement counts ", "as two V-Achievements", "and will award 2 Space Theorems", " instead of 1.", "Se7en Deadly Matters", "Young Boy", "Glyph Knight", "Requiem", "Post-Destination", "Shutter", "purchase Time Studies which are normally locked.", " used as a Currency in the Automator.", "You can Charge ", " Alchemy Resources.", " Triad Studies.", "Ra's Reality, Memory Chunks for Celestial Memories", "All Memories have been returned.", "The Destroyer", "False", "Deity", "Monarch", "Filament", "Mandate", "Galaxy Generator", "Dark Matter (capped).", "Your maximum Dark Matter ever is ", "Dark Matter Dimensions are unaffected ", " Dark Energy.", "Singularities.", "Total time to : ", "Entropy", "Glyphs are becoming unstable.", "1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "Antimatter Dimension", "Infinity Dimension", "Time Dimension", "Tachyon Particles", "Dilation", "Singularity gain rate: ", "Condense", "Annihilate", "Armaggedon", "Reality Shards", "Rift", "Strike", "Buy 10 Dimension purchase multiplier:", "Unequip Glyps on Reality", "Teresa", "Reality", "Effarig", "Celestial of", "Ancient Relics", "Nameless Ones", "Lai'tela", "Pelle", "Automator Points", "Perk Points", "Music Glyphs"];
// ASCII Garbage: 30% chance for an ASCII Garbage subsequence. If chosen: 50% 1, 50% 2.
window.TMTRAINER_ASCII_GARBAGE = [ "█", "▓", "░", "▒", "▐", "▄", "┌", "┐", "└", "┘", "─", "│", "╔", "╗", "╚", "╝", "═", "║", "☰", "☱", "☲", "☳", "☴", "☵", "☶", "☷", "▘", "▚", "▞", "▙", "▛", "▜", "▟" ];
const ASCII_GARBAGE_CHANCE = 0.7 // for quick balancing
// Symbols: 30% chance for a symbol subsequence. If chosen: 25% 1 symbol, 25% 2 symbols, 50% 2-7 same symbols
// Some thin text (hieroglyphs, amongi and others are kept) or color ignoring (emoji) symbols are not included
// Some symbols were moved over to ASCII Garbage
window.TMTRAINER_SYMBOLS = [ "+", "-", "*", "/", "^", "%", "⯅", "Ω", "∞", "Ξ", "Δ", "Ψ", "Ϙ", "Ϟ", "⸸", "♥", "⌬", "♅", "ᛝ", "♠", "♥", "♦", "♣", "♤", "♧", "♡", "♢", "ω", "ξ", "δ", "ψ", "ඔ", "ඕ", "ඞ", "ඩ", "$", "₽", "¥", "€", "¢", "£", "₩", "₷", "₰", "₳", "₯", "₻", "←", "↓", "↑", "→", "↖", "↗", "↘", "↙", "⇄", "⇅", "⇔", "⇕", "↺", "↯", "↬", "⇱", "⇲", "⇮", "↭", "∬", "∭", "∮", "∯", "∰", "∱", "∲", "∳", "①", "②", "③", "④", "⑤", "⑥", "⑦", "⑧", "▰", "▲", "◆", "◎", "◍", "♟", "♞", "♝", "♜", "♛", "♚", "☿", "♀", "♁", "♂", "♃", "♄", "♆", "♇", "♩", "♪", "♬", "♭", "♮", "♯", "♻", "♳", "♴", "♵", "♶", "♷", "♸", "♹", "⚀", "⚁", "⚂", "⚃", "⚄", "⚅", "☠", "☢", "☣", "⚠", "\uF0C1", "🜁", "🜂", "🜃", "🜄", "🜔", "🜍", "🜞", "🜚", "★", "☆", "✪", "✯", "✭", "✫", "🜞","✶", "✦", "✧", "✺", "✹", "✷", "𓄲" ];

// We can treat any function declared outside window. like private methods
function buildTmtrainerSequence(seed, subsequenceMin, subsequenceMax, lengthMax) {
    let subsequenceDelta = subsequenceMax - subsequenceMin;
    let subsequences = Math.ceil(RAND(seed) * subsequenceDelta) + subsequenceMin;

    let generationNoise = 1;
    let currentSubsequences = 0;
    let lastWasSnippet = false;

    let result = "";

    // Implement additional randomness with a random subsequence number,
    // but also prevent the sequence from getting too long than we need it
    while(currentSubsequences < subsequences && result.length < lengthMax) {
        let rng = RAND(Math.ceil(seed + generationNoise));
        generationNoise += (seed++);
        generationNoise = Math.ceil(generationNoise);
        currentSubsequences++;

        // Check if last was snippet to prevent only text sequences
        // Or merges of bad things like "9th" + " Antimatter Dimension"
        if(rng < TEXT_CHANCE && !lastWasSnippet) {
            let chosenText = randomInArray(TMTRAINER_TEXT, seed);
            result += randomSubstring(chosenText, seed);
            seed *= 1.214214;
            seed = Math.ceil(seed);
            lastWasSnippet = true;
            continue;
        }

        lastWasSnippet = false;

        if(rng < ASCII_GARBAGE_CHANCE) {
            // Regenerate rng for ascii garbage rng
            rng = RAND(seed+1746243);
            result += randomInArray(TMTRAINER_ASCII_GARBAGE, (seed++));
            if(rng <= 0.5) result += randomInArray(TMTRAINER_ASCII_GARBAGE, (seed++));
            continue;
        }

        let symbolsNr, symbolRepeat = false;
        // Regenerate rng for symbol rng
        rng = RAND(seed * generationNoise);
        generationNoise++;
        if(rng <= 0.25) symbolsNr = 1;
        else if(rng <= 0.5) symbolsNr = 2;
        else {
            // Regenerate rng for repeated symbol rng (but different from the previous rng)
            rng = RAND(seed);
            symbolsNr = Math.round(RAND(seed++));
            symbolRepeat = true;
        }

        for(let i = 0; i < symbolsNr; i++) {
            let nextSymbol = randomInArray(TMTRAINER_SYMBOLS, seed)
            if(!symbolRepeat) {
                generationNoise += (seed++);
                generationNoise = Math.ceil(generationNoise);
            }
            result += nextSymbol;
        }
    }

    if(result.length > lengthMax) {
      result = result.substring(0, lengthMax-1);
    }

    return result;
}

// now hopefully anyone who wanted to read the source code will have read ^^^^^, thought the code is not entirely
// horrible, and clicked off before they are subjected to the horrors within

window.TMTRAINER_TRY = function() {
    if (window.RAND(Math.ceil(window.player.reality.glyphs.tmtrainerSeed)) <= window.player.reality.glyphs.tmtrainerSuccessRate) {
      window.player.reality.glyphs.tmtrainerSuccessRate = 0.1;
      window.player.reality.glyphs.tmtrainerSeed = Math.ceil(Math.random() * 2e9);
      document.getElementById("tmtrainer-chance-text-uwu").innerHTML = "The TMTRAINER has a " + (window.player.reality.glyphs.tmtrainerSuccessRate * 100) + "% chance to turn a Glyph into a Glitched Glyph, but a " + (100 - window.player.reality.glyphs.tmtrainerSuccessRate * 100) + "% chance to destroy it."
      return true;
    } else {
      window.player.reality.glyphs.tmtrainerSuccessRate += 0.3;
      window.player.reality.glyphs.tmtrainerSeed = Math.ceil(Math.random() * 2e9);
      document.getElementById("tmtrainer-chance-text-uwu").innerHTML = "The TMTRAINER has a " + (window.player.reality.glyphs.tmtrainerSuccessRate * 100) + "% chance to turn a Glyph into a Glitched Glyph, but a " + (100 - window.player.reality.glyphs.tmtrainerSuccessRate * 100) + "% chance to destroy it."
      return false;
    }
},

window.RANDOM_TMTRAINER_NAME = function(seed) {
  return buildTmtrainerSequence(seed, 5, 16, 32);
};

window.RANDOM_TMTRAINER_TYPE = function(seed) {
  return buildTmtrainerSequence(seed, 1, 4, 9);
}

window.RANDOM_TMTRAINER_LEVEL = function(seed) {
  return buildTmtrainerSequence(seed, 4, 8, 10);
}

function randomTmtrainerEffect(seed) {
  return buildTmtrainerSequence(seed, 6, 16, 16);
}

window.RANDOM_TMTRAINER_NEWS = function() {
  return buildTmtrainerSequence(Math.ceil(Math.random() * 2e9), 10, 20, 100);
}

const HAPPENING_REVEALED = "{startEvent}, {chance}% chance to {endEvent}{isClick}";
// NR MODIFY       0 idx, 1 name, 2 min, 3 default, 4 max, 5 max decimals, 6 name in revealed
// HAPPENING EVENT 0 idx, 1 name, 2 "event", 3 actual event,  4 name in revealed
// HAPPENING CLICK 0 idx, 1 name, 2 "click", 3 id of element, 4 name in revealed
// test ids: pauseBHbtn, pulseBHbtn, bigCrunchBtn
const EFFECTDEF = [
  [0, "trollSidebarMulti", 0.0000001, 1, 999999.9999999, 7,
  "Resource amount shown on the Modern UI sidebar (only the SHOWN amount!) is multiplied by {value}"],

  [1, "prerealityAchievements", 1, 14, 18, 0,
  "The first [14 -> {value}] row(s) of achievements may be obtained via Automatic Achievements"],

  [2, "achievementRowBonusBase", 0.01, 1.25, 2.49, 2,
  "Achievement bonus for every completed row x{value} (default: x1.25)"],

  [3, "achievementSingleBonusBase", 0.01, 1.03, 2.59, 3,
  "Achievement bonus for every completed achievement x{value} (default: x1.03)"],

  [4, "achievementRowBonusDecoy", -10, 0, 10, 0,
  "Achievement bonus for every completed row acts as if you have {value} more rows completed"],

  [5, "achievementSingleBonusDecoy", -144, 0, 144, 0,
  "Achievement bonus for every completed achievement acts as if you have {value} more achievements completed"],

  [6, "achievementBonusExponent", 0.5, 1, 1.5, 1,
  "Raise the achievement bonus for every completed row/achievement to ^{value}"],

  [7, "achievementPelleDefault", 0.1, 1, 2, 1,
  "Achievement multiplier in a Doomed Reality becomes x{value}"],

  [8, "dmdAscensionAutobuyerMsInS", 1, 1000, 2000, 0,
  "The Dark Matter Dimension Ascension Autobuyer treats every second as having {value} milliseconds"],

  [9, "dmdAscensionAutobuyerMsInS", 1, 1000, 2000, 0,
  "Dark Matter Dimension Autobuyers treat every second as having {value} milliseconds"],

  [10, "dilUpgAutobuyerMsInS", 1, 1000, 2000, 0,
  "Dilation Upgrade Autobuyers treat every second as having {value} milliseconds"],

  [11, "infDimAutobuyerMsInS", 1, 1000, 2000, 0,
  "Infinity Dimension Autobuyers treat every second as having {value} milliseconds"],

  [12, "realAutobuyerMsInS", 1, 1000, 2000, 0,
  "The Reality Autobuyer treats every second as having {value} milliseconds"],

  [13, "realAutobuyerMsInS", 1, 1000, 2000, 0,
  "Replicanti Upgrade Autobuyers treat every second as having {value} milliseconds"],

  [14, "timeDimAutobuyerMsInS", 1, 1000, 2000, 0,
  "Time Dimension Autobuyers treat every second as having {value} milliseconds"],

  [15, "automatorIntervalBase", 0.75, 0.994, 1.25, 2,
  "Set the Automator interval base in the Realities interval speed-up calculation to {value} (default: 0.994)"],

  [16, "automatorPointRequirement", 1, 100, 200, 0,
  "Set the amount of Automator Points required to unlock the Automator to {value} (default: 100)"],

  [17, "dmdIntervalCostMulti", 2, 5, 8, 0,
  "Set the Dark Matter Dimension Interval cost multiplier per individual upgrade to x{value} (default: x5)"],

  [18, "dmdPowerCostMulti", 2, 10, 18, 0,
  "Set the Dark Matter Dimension Power cost multiplier per individual Dark Matter upgrade to x{value} (default: x10)"],

  [19, "dmdPowerDECostMulti", 1.1, 1.5, 1.9, 1,
  "Base of the Dark Matter Dimension Power cost multiplier per individual Dark Energy is set to x{value} (default: x1.5)"],

  [20, "dmdPowerDECostStep", 0.01, 0.05, 0.09, 1,
  "Step of the Dark Matter Dimension Power cost multiplier per individual Dark Energy is set to x{value} (default: +x0.05)"],

  [21, "dmdPowerDETierStep", 0, 1, 2, 0,
  "Dark Matter Dimension Power cost multiplier per individual Dark Energy upgrade raise {value} step(s) instead of 1 with each higher tier dimension"],

  [22, "singularitiesNondep", 2, 200, 398, 0,
  "Constant of the Singularity cap calculation is set to {value} (default: 200)"],

  [23, "singularitiesDepBase", 2, 10, 19, 0,
  "Base of the player chosen factor of the Singularity cap calculation is set to {value} (default: 10)"],

  [24, "singularitiesCapIncrease", 2, 11, 20, 0,
  "Set the default singularities gained for each cap increase multiplier to {value} (default: x11)"],

  [25, "singularitiesCapIncreaseMax", 1, 50, 99, 0,
  "Maximum amount of times the Singularity cap can be increased is set to {value} (default: 99)"],

  [26, "trollSingularityMilestonesNotificationMulti", 0, 0, 10, 0,
  "Notifications showing that you reached multiple Singularity Milestones have their SHOWN (ONLY SHOWN!) amount increased by {value}"],

  [27, "pelleDrainMulti", 0.01, 1, 2, 2,
  "Pelle Rifts in the Galaxy Generator sequence drain x{value} faster"],

  [28, "pelleGalgenMulti", 0.01, 1, 2, 2,
  "The Galaxy Generator generates galaxies x{value} faster"],

  [29, "endState", 0.1, 0, 1.4, 1,
  "Corrupt the tab names"], //Only fun if the player keeps full interactivity

  [30, "endSpeed", 0.1, 1, 3, 1,
  "Ending sequence plays x{value} faster"],

  [31, "pelleDoomedNameMulti", 0.1, 1, 7, 1,
  "Pelle's display name appears obfuscated/doomed/shifting x{value} more often"],

  [32, "pelleUnlockUpgrade", 11, 25, 25, 0,
  "Index of the Imaginary Upgrade needed to unlock Pelle is changed to {value} (rebuyable upgrades make the first 10 indexes)"],

  [33, "pelleRMGainMulti", 0.1, 1, 2, 1,
  "Pelle Remnant gain x{value}"],

  [34, "pelleRSGainBase", 2, 10, 18, 0,
  "Set base in Pelle Reality Shard gain calculation to {value} (default: 10)"],

  [35, "pelleRiftsMaxActive", 1, 2, 5, 0,
  "Maximum amount of active Pelle rifts is changed to {value} (default: 2)"],

  [36, "alchemyDisabledInV", 1, 14, 25, 0,
  "Internal ID of Alchemy Resource disabled in V's Reality is changed to {value} (default: 14 - Exponential)"],

  [37, "raMemChunksMulti", 0.1, 1, 2, 1,
  "Ra Memory Chunk generation is multiplied by x{value}"],

  [38, "raMemUpgMulti", 0.1, 1.3, 2.6, 1,
  "Multiplier of each Ra Memory upgrade bought with Memories is changed to x{value} (default: x1.3)"],

  [39, "raChunkUpgMulti", 0.1, 1.5, 3, 1,
  "Multiplier of each Ra Memory upgrade bought with Memory Chunks is changed to x{value} (default: x1.5)"],

  [40, "raMemUpgScale", 2, 5, 8, 0,
  "Cost scaling step of each Ra Memory upgrade bought with Memories is changed to x{value} (default: x5)"],

  [41, "raChunkUpgScale", 2, 25, 48, 0,
  "Cost scaling step of each Ra Memory upgrade bought with Memory Chunks is changed to x{value} (default: x25)"],

  [42, "raGenMsInS", 1, 1000, 2000, 0,
  "Ra generation treats every second as having {value} milliseconds"],

  [43, "raRemMulti", 2, 5, 8, 0,
  "Rememberance multiplier is changed to x{value} (default: x5)"],

  [44, "raRemNerf", 0.1, 0.5, 0.9, 1,
  "Rememberance nerf is changed to x{value} (default: x0.1)"],

  [45, "raRemReq", 1, 20, 40, 0,
  "Ra Memory Level requirement to unlock the Rememberance mechanic is changed to {value} (default: 20)"],

  [46, "raScalingBase", 1, 1.5, 2, 1,
  "Base of Ra Memory Levels additional cost scaling (default: kicks in at 15 levels) is changed to {value} (default: 1.5)"],

  [47, "raScalingMulti", 0.1, 1, 2, 1,
  "Ra Memory Level costs are multiplied by x{value}"],

  [48, "trollRaEstimateMulti", 0.01, 1, 10, 2,
  "Estimates for Ra upgrades are multiplied by x{value} (ONLY THE SHOWN ESTIMATES, DOES NOT AFFECT ACTUAL RESOURCE PRODUCTION)"],

  [49, "raMaxLevel", 1, 25, 24, 0,
  "Every Celestial can have a maximum of {value} Ra Memory Levels (default: 25)"],

  [50, "raUnlockReq", 1, 36, 35, 0,
  "Ra unlock requires {value} Space Theorems instead of 36"],

  [51, "alchemyFlowMsInS", 1, 1000, 2000, 0,
  "Glyph Alchemy Flow treats every second as having {value} milliseconds"],

  [52, "alchemyResourceCap", 1, 25000, 50000, 0,
  "All Alchemy Resources are capped at {value} instead of 25000"],

  [53, "momentumHoursMulti", 0.1, 1, 3, 1,
  "Momentum behaves as if the amount of hours since its unlock was multiplied by x{value}"],

  [54, "effarigGLCapMulti", 0.1, 1, 2, 1,
  "Glyph Level caps in each stage of Effarig's Reality are multiplied by x{value}"],

  [55, "effarigRSGainMulti", 0.1, 1, 2, 1,
  "Base in Relic Shard gain calculation is multiplied by x{value}"],

  [56, "effarigNerfFactorMulti", 0.1, 1, 2, 1,
  "Effarig nerf factor constant is multiplied by x{value}"],

  [57, "namelessRealityUnlockReqMulti", 0.1, 1, 2, 1,
  "Glyph Level requirement to unlock the Nameless Ones' Reality is multiplied by x{value}"],

  [58, "trollNamelessRealityUnlockReqSwap", 1, 0, 1, 0,
  "Swap around the ✓ and ✗ in the Nameless Ones' tab (no other effect on requirements)"],

  [59, "trollCelestialSymbolScramble", 1, 0, 1, 0,
  "Scramble some Celestials' symbols in some places"],

  [60, "namelessRealStoreEff", 0.01, 0.7, 1.41, 2,
  "Real time is stored inside the Nameless Ones with a {value} efficiency (default: 0.7 = 70%)"],

  [61, "namelessRealTimeCap", 0.1, 1, 2, 1,
  "Real time stored inside the Nameless Ones is capped at x{value} its normal cap"],

  [62, "trollNamelessSACH", 0.001, 1, 2, 3,
  "Real time required for Secret Achievement 46 multiplied by x{value}"],

  [63, "pulsingPercentDischarged", 0.01, 0.01, 0.99, 2,
  "Game time discharged on Black Hole Pulse is total * {value} (default: total * 0.01 = 1%)"],

  [64, "freeTesseract", 1, 0, 1, 0,
  "Tesseract cost scaling acts as if you have 1 less Tesseract than you actually do"],

  [65, "tesseractIncreaseMulti", 0.1, 1, 2, 1,
  "Tesseract effect x{value}"],

  [66, "cursedMusic", 1, 0, 1, 0,
  "Teresa gives Cursed Glyphs instead of Music Glyphs"],

  [67, "vReductionBaseMulti", 0.1, 1, 2, 1,
  "Base in the V Goal Reduction calculation is multiplied by x{value}"],

  [68, "powerGlyphADMultEffectMulti", 0.1, 1, 2, 1,
  "Power Glyphs' Antimatter Dimension Multiply effect is multiplied by x{value}"],

  [69, "forceADMultEffectMulti", 0.1, 1, 2, 1,
  "Glyph Alchemy: Force effect is multiplied by x{value}"],

  [70, "vRealityADExponent", 0.1, 0.5, 0.9, 1,
  "V's Reality raises your Antimatter Dimensions to ^{value} instead of ^0.5"],

  [71, "inflationEffectMulti", 1.01, 1.05, 1.25, 2,
  "Glyph Alchemy: Inflation effect raises Antimatter Dimensions to ^{value} instead of ^1.05"],

  [72, "antitableADTiers", 1, 0, 1, 0,
  "1st and 8th, 2nd and 7th, 3rd and 6th, 4th and 5th Antimatter Dimension pairs have their multiplier, buttons, autobuyers and keybinds swapped"],

  [73, "adpow", 0.01, 1, 2, 2,
  "All Antimatter Dimensions ^{value}"],

  [74, "dimensionMsInS", 1, 1000, 2000, 0,
  "Your Antimatter/Infinity/Time Dimensions act as if there are {value} milliseconds in a second"],

  [75, "idpow", 0.01, 1, 2, 2,
  "All Infinity Dimensions ^{value}"],

  [76, "idpurchaserate", 1, 10, 20, 0,
  "Infinity Dimensions act as if each purchase gives {value} IDs instead of 10"],

  // Literally just makes you go to e9e15 antimatter if you're above some iM
  [77, "idfliplimits", 1, 0, 1, 0,
  "Flip the purchase cap of 8th Infinity Dimension and 1st-7th Infinity Dimensions"],

  [78, "paradoxMilestone1pow", 0.1, 0.5, 1, 1,
  "1st Paradox Milestone changes costs by raising them to ^{value} instead of ^0.5"],

  [79, "tdpow", 0.01, 1, 2, 2,
  "All Time Dimensions ^{value}"],

  // This breaks the game
  // However (1) it can be solved by refreshing the page and unequipping the glyph
  // (2) what it does should look random enough to the user
  // Therefore it will be kept in
  [80, "bitflipchance", 1, 0, 100, 0,
  "{value}% (WILL INCREASE IN TIME) chance for queries on base aspects of the game (i.e. is upgrade unlocked, can effect be applied) to return wrong values"],

  [81, "everythingIsCursed", 1, 0, 1, 0,
  "The automatic glyph processor thinks everything is a Cursed glyph"],

  [82, "glEpCoeff", 0.1, 1, 2, 1,
  "Glyph level factor: EP factor is multiplied by x{value}"],

  [83, "glRepCoeff", 0.1, 1, 2, 1,
  "Glyph level factor: Replicanti factor is multiplied by x{value}"],

  [84, "glDtCoeff", 0.1, 1, 2, 1,
  "Glyph level factor: DT factor is multiplied by x{value}"],

  [85, "glInsRate", 2, 500, 1000, 0,
  "Glyph level instability rate is set to {value} (default: 500), lower rate = lower levels"],

  [86, "glHInsRate", 2, 400, 800, 0,
  "Glyph level hyperinstability rate is set to {value} (default: 400), lower rate = lower levels"],

  [87, "gDontRemoveVisualChance", 1, 0, 100, 0,
  "{value}% chance to not remove a New!/unequipped visual from a Glyph on every attempt to do so"],

  [88, "gDontAddVisualChance", 1, 0, 100, 0,
  "{value}% chance to not add a New!/unequipped visual to a Glyph on every attempt to do so"],

  [89, "gDontUnequipAll", 1, 0, 100, 0,
  "{value}% chance to not unequip all Glyphs on every attempt to do so"],

  [90, "gTrollUnequip", 1000, 0, 100000, 0,
  "Adds the unequipped visual to random glyphs in your inventory every {value} ms"],

  [91, "gSwapDAU&HAC", 1, 0, 1, 0,
  "Swap the behaviour of Delete All Unprotected and Harsh Purge"],

  [92, "gForceCES", 1, 0, 1, 0,
  "Force Collapse Empty Space (Glyphs) every time player interacts with Glyphs / realities"],

  [93, "gCESStart", 1, 0, 30, 0,
  "Collapse Empty Space (Glyphs) might behave weirdly or not work at all. Weirdness factor: {value}/30"],

  [94, "gIstart", 0.1, 1, 2, 0,
  "Glyph Instability threshold x{value}"],

  [95, "gHIstart", 0.1, 1, 2, 0,
  "Glyph Hyperinstability threshold x{value}"],

  [96, "cursedGlyphCount", 0, 3, 10000, 0,
  "Every Cursed Glyph counts as -{value} Glyphs"],

  [97, "basicGlyphsExtra", 2, 1, 8, 0,
  "Basic Glyphs that would gain the Game Speed Bonus Effect from Ra gain different effects instead"],

  [98, "dontCurseGlyphs", 1, 0, 1, 0,
  "Disables both methods to create Cursed Glyphs"],

  // WOO EFFECT 100
  [99, "ALLISCOMPANION", 4000, 0, 8000, 0,
  "ALL Newly created Glyphs are Companion Glyphs. No exceptions."],

  [100, "noCompanionModal", 1, 0, 1, 0,
  "Remove the confirmation modal for deleting the Companion Glyph"],

  [101, "glyphSacGainExpMulti", 0.1, 1, 2, 1,
  "Exponent of Glyph sacrifice value gained from each Glyph sacrifice ^{value}"],

  [102, "dilStudyTotalReq", 1, 12900, 26000, 0,
  "Unlock Dilation Time Study requires {value}TT to unlock instead of 12900TT"],

  [103, "dilStartPerksDontWork", 1, 0, 1, 0,
  "Perks DU1 and DU2 are disabled"],

  [104, "trollAlwaysFirstReality", 1, 0, 1, 0,
  "Every time you purchase the Reality Time Study, act as if it is your first time ever purchasing it"],

  [105, "allowDoubleClickEnterEC", 0, 1, 0, 0,
  "Removes QoL: double-click a Time Study to enter an Eternity Challenge"],

  [106, "disallowShiftclickUntilTS", 1, 0, 1, 0,
  "Removes QoL: shift-click a Time Study to buy all Studies until it"],

  [107, "bhPowerMult", 0.1, 1, 2, 1,
  "Raise Black Hole(s) Power to ^{value}"],

  [108, "trollBhDisplayAs", 0, 7, 6, 0,
  "Always DISPLAY the Black Hole(s) as if they are doing something specific, but never change their actual behaviour"],

  [109, "startWith10Antimatter", 1, 0, 1, 0,
  "Always start with 10 Antimatter"],

  [110, "trollTPNextDisplay", 1, 0, 1, 0,
  "Display the minimum antimatter needed in order to gain more TP as e9e15"],

  [111, "trollDTEstimates", 1, 0, 1, 0,
  "Dilation Upgrade estimates always show Never affordable"],

  [112, "dilationPenaltyBase", 0.5, 0.75, 0.9, 2,
  "Dilation penalty (before effects) changed to ^{value} from ^0.75"],

  [113, "dimboostExponentMulti", 0.1, 1, 2, 1,
  "Dimension Boost effect raised to ^{value}"],

  [114, "trollNumbersEND", 1, 0, 1, 0,
  "Format all numbers as END"],

  [115, "trollNumbersMulti", 0.1, 1, 2, 1,
  "All displayed numbers are shown as if they were multiplied by x{value} (including this one), no effect on their actual value"],

  [116, "remGalaxyStartMulti", 0.1, 1, 2, 1,
  "Remote Galaxy scaling start multiplied by x{value}"],

  [117, "remGalaxyBaseMulti", 0.1, 1, 2, 1,
  "Remote Galaxy scaling base multiplied by x{value} (default: 1.002)"],

  [118, "galaxyBaseSet", 1, 80, 160, 0,
  "Galaxy base cost is set to {value} (default: 80)"],

  [119, "galaxyEatChance", 1, 0, 100, 0,
  "{value}% chance to not increase galaxy amount when doing a singular/bulk/max galaxy reset" ],

  [120, "glyphEffectBreak", 1, 0, 1, 0,
  "Reverses Glyph effect comparators and scrambles which effect description is shown where (tooltip, modal, etc.)" ],

  [121, "trollSubtabKeySwap", 1, 0, 1, 0,
  "Swaps effect of up/down arrow and left/right arrow in tab navigation" ],

  [122, "breakRIUnlock", 1, 0, 1, 0,
  "Breaks the Reality/Imaginary Upgrade Unlocked notifications" ],

  [123, "allIC", 1, 0, 1, 0,
  "All Infinity Challenges are always running" ],

  [124, "allEC", 1, 0, 1, 0,
  "All Eternity Challenges are always running" ],

  [125, "allNC", 1, 0, 1, 0,
  "All Normal Challenges are always running" ],

  [126, "canAlwaysCharge", 1, 0, 1, 0,
  "You can charge every single Infinity Upgrade (the ones not chargable in vanilla cannot be respecced)" ],

  [127, "chargeRejectChance", 1, 0, 100, 0,
  "{value}% chance to not charge/discharge Infinity Upgrade every time it is attempted" ],

  [128, "ipMultCost", 1, 10, 100, 0,
  "IP Multiplier cost step x{value} (default: 10; breaks autobuyer past 1e3e6)" ],

  [129, "noKeybinds", 1, 0, 1, 0,
  "Disables interactive keybinds as if player was in the END sequence" ],

  [130, "rmHardcap", -20000, 0, 20000, 0,
  "Reality Machine hardcap +1e{value} (run \"player.reality.realityMachines = new Decimal(0)\" if you get stuck below 0RM)" ],

  [131, "rmMulti", 0.1, 1, 2, 1,
  "Reality Machines gained are multiplied by x{value}" ],

  [132, "imCapMulti", 0.1, 1, 1000000, 1,
  "Imaginary Machine cap is multiplied by x{value}" ],

  [133, "imGainMulti", 0.1, 1, 2, 1,
  "Imaginary Machine gain is multiplied by x{value}" ],

  [134, "mathUhOh", 0.1, 1, 2, 1,
  "Some unimportant-looking things in the math backend are multiplied by x{value}" ],

  [135, "trollNews", 1, 0, 1, 0,
  "Invert the \"unique news seen\" statistic" ],

  [136, "noPerkAP", 1, 0, 1, 0,
  "Perks do not give Automator Points" ],

  [137, "perkCost", 2, 0, 5, 0,
  "Perks cost {value} Perk Points instead of 1" ],

  [138, "perkn't", 1, 0, 1, 0,
  "All perks are useless" ],

  [139, "unlockn't", 1, 0, 1, 0,
  "Game does not consider player unlocks. Disables unequip. Good luck!" ],

  [140, "genGlyphs", 5, 4, 7, 0,
  "The minimum amount of Glyph choices each reality {value} (default: 4)" ],

  [141, "realityRewardsMultiplier", 0.1, 1, 2, 1,
  "All Reality rewards are multiplied by x{value}" ],

  [142, "cardinalityMultiplier", 0.1, 1, 2, 1,
  "Cardinality effect is multiplied by x{value}" ],

  [143, "RGMultiplier", 0.1, 1, 2, 1,
  "Gained Replicanti Galaxies are multiplied by x{value}" ],

  [144, "RGNeverRes", 0, 1, 0, 0,
  "Never keep resources after getting a Replicanti Galaxy" ],

  [145, "RepSpeed", 0.1, 1, 2, 1,
  "Replicanti speed x{value}" ],

  [146, "RepChanceCap", 0.01, 1, 0.99, 2,
  "Replicanti chance cap x{value}" ],

  [147, "RGScalingStart", 0.1, 1, 2, 1,
  "Replicanti chance cap x{value}" ],

  [148, "dimSacExpMulti", 0.1, 1, 2, 1,
  "Dimensional Sacrifice exponent is multiplied by x{value}" ],

  [149, "alwaysRealityTabNotifs", 1, 0, 1, 0,
  "Reality tab always has notifications enabled and tab notifications never get cleared" ],

  [150, "hideTabChance", 1, 0, 5, 0,
  "Tabs will flicker as if some of them are hidden and some of them are unhidden on every update tick. Flickering factor: {value}/5" ],

  [151, "galpower", 0.1, 1, 2, 1,
  "Galaxy power x{value}" ],

  [152, "finalsigil", 1, 0, 1, 0,
  "Destroyer Sigil is always shown on the Celestial Navigation" ],

  [153, "galsigil", 1, 0, 1, 0,
  "Galaxy Generator Sigil is always shown on the Celestial Navigation" ],

  [154, "glyphSlotUpgrades", -2, 0, 2, 0,
    "Each Glyph slot upgrade gives {value} extra Glyph slots. Requires a page refresh." ],

  [155, "vUnlockMulti", 0.1, 1, 2, 1,
  "All resources gain a x{value} multiplier in V's unlock" ],

  [156, "vReqMulti", 0.1, 1, 2, 1,
  "All V achievement requirements are multiplied by x{value}" ],

  [157, "allECMulti", 0.1, 1, 2, 1,
  "All ECs act as if you have x{value} more completions. Non-integer or >5 values allowed" ],

  [158, "allICMulti", 0.1, 1, 2, 1,
  "All IC rewards x{value}" ],

  [159, "tsMulti", 0.1, 1, 2, 1,
  "All Time Study effects x{value}" ],

  [160, "euMulti", 0.1, 1, 2, 1,
  "All Eternity Upgrade effects x{value}" ],

  [161, "biuMulti", 0.1, 1, 2, 1,
  "All Break Infinity Upgrade effects x{value}" ],

  [162, "iuMulti", 0.1, 1, 2, 1,
  "All Infinity Upgrade effects x{value}" ],

  // Glitched glyph effect changes are possible, but could break the game. Just change the TMTE function if you want to add it
  [163, "allGlyphEff", 0.1, 1, 2, 1,
  "All Glyph effects (not including Glitched glyphs) x{value}" ],

  [164, "allGlyphSacEff", 0.1, 1, 2, 1,
  "All Glyph Sacrifice effects (not including Glitched glyphs) x{value}" ],

  [165, "happeningOnClickPauseBHHeader", "click", "pauseBHbtn",
    "When clicking the Pause BH button in the header", 100],

  [166, "happeningOnClickCrunch", "click", "bigCrunchBtn",
    "When clicking the Big Crunch button in the header", 100],

  [167, "happeningOnClickEternityBtn", "click", "eternityBtn",
    "When clicking the Eternity button in the header", 100],

  [168, "happeningOnClickRealityBtn", "click", "realityBtn",
    "When clicking the Reality button in the header", 100],

  [169, "happeningOnEternity", "event", "ETERNITY_RESET_AFTER",
    "After an Eternity reset", 10],

  [170, "happeningOnCrunch", "event", "BIG_CRUNCH_AFTER",
    "After a manual Big Crunch reset", 10],

  [171, "happeningOnReality", "event", "REALITY_RESET_AFTER",
    "After a Reality reset", 25],

  [172, "happeningOnGEQC", "event", "GLYPHS_EQUIPPED_CHANGED",
    "After changing equipped Glyphs", 100],

  [173, "happeningOnGS", "event", "GLYPH_SACRIFICED",
    "After any Glyph is sacrificed (even automatically)", 5],

  [174, "happeningOnClick", "click", "all",
    "After clicking", 15],

  // These events do not work to be hooked into: game tick, dimension boost, antimatter galaxy
  // It would be *very* hilarious if it could happen though.

];

window.guaranteedForTesting = -1;

let TMTeffectsDefault = [];

function buildDefaults() {
  for(let i = 0; i < EFFECTDEF.length; i++) {
      TMTeffectsDefault[i] = EFFECTDEF[i][1].startsWith("happening") ? -1 : EFFECTDEF[i][3];
  }
}

function randomInArray3(seed) {
    let generationNoise = 324324;
    let temp_eff = [];
    let seen = [];
    let generated = 0;
    while(generated < effectNo) {
        seed += generationNoise;
        seed *= 1.21;
        let rand = Math.round(RAND(seed) * EFFECTDEF.length);
        if(seen.includes(rand)) {
            continue;
        } else {
            temp_eff.push(EFFECTDEF[rand]);
            seen.push(rand);
            generated++;
        }
    }
    return (guaranteedForTesting === -1) ? temp_eff
            : [EFFECTDEF[0], EFFECTDEF[1], EFFECTDEF[2], EFFECTDEF[3], EFFECTDEF[4], EFFECTDEF[5], EFFECTDEF[guaranteedForTesting]];
}

// 0 name 1 chance 2 name in revealed
// low chance elements are those who open modals or otherwise fuck up the game when triggered
window.happeningGuaranteedForTest = -1;
const HAPPENINGDEF = [
    [ "happeningcode_bhpause", "toggle Black Hole(s) Paused" ],
    [ "happeningcode_bhpulse", "toggle Black Holes Pulsing" ],
    [ "happeningcode_showrandommodal", "show a random modal" ],
    [ "happeningcode_toggleUI", "toggle Modern/Classic UI (seizure warning)" ],
    [ "happeningcode_toggleNews", "toggle News Ticker" ],
    [ "happeningcode_toggleID", "toggle all Infinity Dim autobuyers" ],
    [ "happeningcode_toggleTD", "toggle all Time Dim autobuyers" ],
    [ "happeningcode_toggleallauto", "toggle all autobuyers enabled/disabled" ],
    [ "happeningcode_toggleautopause", "toggle autobuyers paused/unpaused" ],
    [ "happeningcode_stopautomator", "stop Automator execution" ],
    [ "happeningcode_startautomator", "start Automator execution" ],
    [ "happeningcode_togglenexteternityrespec", "toggle Respec Time Studies on Next Eternity" ],
]

buildDefaults();

window.TMTeffects = [...TMTeffectsDefault];

// store what effects are changed so we can change them back on unequip fast
const TMTchangesDefault = [
-1, -1, -1, -1, -1, -1, -1
]
const effectNo = 7;
window.TMTchanges = [...TMTchangesDefault];

// just write a comment next to each usage of this with the name.
// short name so its easy to put everywhere
// not feeling like hashes and this is very often used to be anything more than O(1)
window.TMTE = function(i) {
    return TMTeffects[i];
}

window.TMTVALIDATE = function(idx, toClick) {
    for(let i = 0; i < effectNo; i++) if(TMTchanges[i] === idx) {
        if(TMTeffects[idx] === toClick) return true;
    }
    return false;
}

let breakGameTimeout;

function TMTCHANGE(idx, changeMult, intoDefault) {
    if(localStorage.tmtrainerLoadDelay === undefined) localStorage.tmtrainerLoadDelay = 2000;
    if(intoDefault) {
        for(let i = 0; i < effectNo; i++) if(TMTchanges[i] === idx) TMTchanges[i] = -1;
        if(EFFECTDEF[idx][1].startsWith("happening")) {
            TMTeffects[idx] = -1;
        } else TMTeffects[idx] = EFFECTDEF[idx][3];
        if(idx === 80) clearTimeout(breakGameTimeout);
    } else {
        for(let i = 0; i < effectNo; i++) if(TMTchanges[i] === -1) { TMTchanges[i] = idx; break; }
        if(EFFECTDEF[idx][1].startsWith("happening")) {
            TMTeffects[idx] = changeMult;
            return;
        }
        if(idx === 80) { breakGameTimeout = setTimeout(function() { TMTeffects[80] = 1; }, Math.random() * 50000 + 10000);
        return; }
        TMTeffects[idx] = changeMult;
        TMTeffects[idx] = Number(TMTeffects[idx].toFixed(EFFECTDEF[idx][5]));
    }
}

window.TMTLISTENERSPUT = false;
window.TROLLFLAGSPUT = false;
window.FORCECOLLAPSEGLYPHSPUT = false;
window.FORCECOLLAPSEEMPTYSPACETEMPSTOP = false;

const nonHappeningEffects = 165;
window.TMTLISTENERS = function() {
    for(let i = nonHappeningEffects; i < TMTeffects.length; i++) {
        if(EFFECTDEF[i][2] === "click") {
            let onButton;
            if(EFFECTDEF[i][3] === "all") {
                onButton = document;
                onButton.addEventListener('click', function () {
                  if (TMTeffects[i] !== -1) {
                    if(Math.random() * 100 < EFFECTDEF[i][5])
                    document.getElementById(TMTeffects[i]).click();
                  }
                }, false);
            } else {
              setTimeout(function () {
                onButton = document.getElementById(EFFECTDEF[i][3]);
                try {
                  onButton.addEventListener('click', function () {
                    if (TMTeffects[i] !== -1) {
                      if(Math.random() * 100 < EFFECTDEF[i][5])
                      document.getElementById(TMTeffects[i]).click();
                    }
                  }, false);
                } catch {
                  // Well, we tried.
                }
              }, localStorage.tmtrainerLoadDelay);
            }
        } else {
            EventHub.logic.on(EFFECTDEF[i][3],
                () => {
                    if(window.TMTeffects[i] !== -1) {
                        if(Math.random() * 100 < EFFECTDEF[i][5])
                        document.getElementById(window.TMTeffects[i]).click();
                    }
                }
            );
        }
    }
}

window.TMTRESET = function() {
    for(let i = 0; i < effectNo; i++) {
        if(TMTchanges[i] !== -1) {
            const resetIdx = TMTchanges[i];
            TMTCHANGE(resetIdx, -1, true);
        }
    }
}

let importantMessageSent = false;
function importantMessage() {
    if(importantMessageSent) return;
    console.log("IMPORTANT MESSAGE!!!");
    console.log("If you are getting errors when loading, or if the game refuses to load, try changing this value:")
    console.log("localStorage.tmtrainerLoadDelay (it is completely safe, feel free to check to source code)")
    console.log("You must change this to however long it takes you to load the game!")
    console.log("A larger value will load some effects of Glitched Glyphs slower!")
    console.log("Change the value by running: \"localStorage.tmtrainerLoadDelay = X\" in this console!")
    console.log("Where you must replace X by however long it takes you to load in miliseconds!")
    console.log("^^^^ IMPORTANT MESSAGE!! ^^^^");
    console.log("VERY IMPORTANT!! READ IF MOD DOESN'T WORK!!");
    setInterval(function() {
    console.log("Make sure to read the important message by scrolling up as much as you can in the console.");
    }, 60000);
    importantMessageSent = true;
}

window.effectsFromSeed = function(seed) {
    importantMessage();
    let eff = randomInArray3(seed);
    seed *= 1.2;
    for(let i = 0; i < effectNo; i++) {
        let changeMult;
        if(eff[i][1].startsWith("happening")) {
            let happeningRoll = randomInArray(HAPPENINGDEF, seed);
            if(window.happeningGuaranteedForTest !== -1) happeningRoll = HAPPENINGDEF[window.happeningGuaranteedForTest]
            changeMult = happeningRoll[0];
        } else {
            let effMin = eff[i][2];
            let effMax = eff[i][4];
            changeMult = Number(RAND(seed) * (effMax-effMin) + effMin);
            seed += 12313122;
        }
        TMTCHANGE(eff[i][0], changeMult, false);
    }
}

window.resetTMT = function() {
    window.TMTeffects = [...TMTeffectsDefault];
    window.TMTchanges = [...TMTchangesDefault];
}

window.revealTMT = function() {
    let result = "";
    for(let i = 0; i < effectNo; i++) {
        if(TMTchanges[i] === -1) return "";
        const eff = EFFECTDEF[TMTchanges[i]];
        let localres = "";
        if(eff[1].startsWith("happening")) {
            localres = HAPPENING_REVEALED.replace("{startEvent}", eff[4]);
            if(eff[2] === "click") { localres = localres.replace("{isClick}",
            " (takes effect " + format(localStorage.tmtrainerLoadDelay / 1000, 6, 3)
            + " seconds after refreshing)")}
            else { localres = localres.replace("{isClick}", ""); }
            localres = localres.replace("{chance}", eff[5])
            let endname = TMTeffects[TMTchanges[i]];
            for(const element of HAPPENINGDEF) { // :(
                if(element[0] === endname) {
                    localres = localres.replace("{endEvent}", element[1]);
                }
            }
            result += localres + "<br><br>";
            continue;
        }
        let decimals = Math.min(eff[5], 2);
        localres = eff[6].replace("{value}", format(TMTeffects[TMTchanges[i]], 2, decimals));
        result += localres + "<br><br>";
    }
    return result;
}

// Any reference to "EFFECT" from here on means the thing in the tooltip of the glyph
window.TMTRAINER_COLOR_SEED = Math.ceil(Math.random() * 2e9);
window.TMTRAINER_BW_SEED = Math.ceil(Math.random() * 2e9);
window.TMTRAINER_SYMBOL_SEED = Math.ceil(Math.random() * 2e9);
window.TMTRAINER_EFFECT_SEED = Math.ceil(Math.random() * 2e9);
window.TMTRAINER_SHORTNAME_SEED = Math.ceil(Math.random() * 2e9);
window.TMTRAINER_SHORTLEVEL_SEED = Math.ceil(Math.random() * 2e9);

window.RANDOM_TMTRAINER_EFFECTS = function(lines, generationNoise, brNotN) {
  let result = "";
  for(let i = 0; i < lines; i++) {
    result += randomTmtrainerEffect(Math.ceil(TMTRAINER_EFFECT_SEED * generationNoise + (1 + i*1.2e8)))
              + (brNotN ? "<br>" : "\n");
  }
  return result;
}


window.ALTERATION_TYPE = {
  ADDITION: 1,
  EMPOWER: 2,
  BOOST: 3
};

window.BLACK_HOLE_PAUSE_MODE = {
  NO_PAUSE: 0,
  PAUSE_BEFORE_BH1: 1,
  PAUSE_BEFORE_BH2: 2,
};

window.GLYPH_SIDEBAR_MODE = {
  INVENTORY_MANAGEMENT: 0,
  FILTER_SETTINGS: 1,
  SAVED_SETS: 2,
  SACRIFICE_TYPE: 3,
};

window.AUTO_SORT_MODE = {
  NONE: 0,
  LEVEL: 1,
  POWER: 2,
  EFFECT: 3,
  SCORE: 4
};

window.AUTO_GLYPH_SCORE = {
  LOWEST_SACRIFICE: 0,
  EFFECT_COUNT: 1,
  RARITY_THRESHOLD: 2,
  SPECIFIED_EFFECT: 3,
  EFFECT_SCORE: 4,
  LOWEST_ALCHEMY: 5,
  ALCHEMY_VALUE: 6
};

window.AUTO_GLYPH_REJECT = {
  SACRIFICE: 0,
  REFINE: 1,
  REFINE_TO_CAP: 2,
};

window.TIME_STUDY_PATH = {
  NONE: 0,
  ANTIMATTER_DIM: 1,
  INFINITY_DIM: 2,
  TIME_DIM: 3,
  ACTIVE: 4,
  PASSIVE: 5,
  IDLE: 6,
  LIGHT: 7,
  DARK: 8
};

window.TIME_STUDY_TYPE = {
  NORMAL: 0,
  ETERNITY_CHALLENGE: 1,
  DILATION: 2,
  TRIAD: 3
};

window.TS_REQUIREMENT_TYPE = {
  AT_LEAST_ONE: 0,
  ALL: 1,
  DIMENSION_PATH: 2,
};

window.ALCHEMY_RESOURCE = {
  POWER: 0,
  INFINITY: 1,
  TIME: 2,
  REPLICATION: 3,
  DILATION: 4,
  CARDINALITY: 5,
  ETERNITY: 6,
  DIMENSIONALITY: 7,
  INFLATION: 8,
  ALTERNATION: 9,
  EFFARIG: 10,
  SYNERGISM: 11,
  MOMENTUM: 12,
  DECOHERENCE: 13,
  EXPONENTIAL: 14,
  FORCE: 15,
  UNCOUNTABILITY: 16,
  BOUNDLESS: 17,
  MULTIVERSAL: 18,
  UNPREDICTABILITY: 19,
  REALITY: 20
};

window.SINGULARITY_MILESTONE_RESOURCE = {
  SINGULARITIES: 0,
  CONDENSE_COUNT: 1,
  MANUAL_TIME: 2,
  AUTO_TIME: 3,
};

window.SINGULARITY_MILESTONE_SORT = {
  SINGULARITIES_TO_NEXT: 0,
  CURRENT_COMPLETIONS: 1,
  PERCENT_COMPLETIONS: 2,
  FINAL_COMPLETION: 3,
  MOST_RECENT: 4,
};

window.COMPLETED_MILESTONES = {
  FIRST: 0,
  LAST: 1,
  IGNORED: 2,
};

window.SORT_ORDER = {
  ASCENDING: 0,
  DESCENDING: 1,
};

// One-indexed and ordered to simplify code elsewhere, do not change to be zero-indexed or reorder
window.PROGRESS_STAGE = {
  PRE_INFINITY: 1,

  EARLY_INFINITY: 2,
  BREAK_INFINITY: 3,
  REPLICANTI: 4,

  EARLY_ETERNITY: 5,
  ETERNITY_CHALLENGES: 6,
  EARLY_DILATION: 7,
  LATE_ETERNITY: 8,

  EARLY_REALITY: 9,

  TERESA: 10,
  EFFARIG: 11,
  ENSLAVED: 12,
  V: 13,
  RA: 14,
  IMAGINARY_MACHINES: 15,
  LAITELA: 16,
  PELLE: 17,
};

window.STD_BACKEND_URL = "https://antimatterdimensionspayments.ew.r.appspot.com";

window.SPEEDRUN_SEED_STATE = {
  UNKNOWN: 0,
  FIXED: 1,
  RANDOM: 2,
  PLAYER: 3,
};
