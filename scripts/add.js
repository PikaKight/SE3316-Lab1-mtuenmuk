const fs = require('fs');

// let pkmnNum = document.getElementById("pkmnNum");
// let pkmnName = document.getElementById("pkmnName");
// let gen = document.getElementById("gen");
// let preEvol = document.getElementById("preEvol");
// let evol = document.getElementById("evol");
// let desc = document.getElementById("desc");

// let pkmn = {
//     "name": pkmnNum,
//     "generation": pkmnName,
//     "preEvol": gen,
//     "evol": preEvol,
//     "Type1": evol,
//     "Type2": desc
// }

let pkmn = {
    "name": "pkmnNum",
    "generation": "pkmnName",
    "preEvol": "gen",
    "evol": "preEvol",
    "Type1": "evol",
    "Type2": "desc"
}

let pkmnData = fs.readFileSync('Resources/pkmn-data/pkmn-data.json', 'utf-8');

let pkmns = JSON.parse(pkmnData)


console.log(pkmnData);