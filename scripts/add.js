// const fs = require('browserify-fs');

const form = document.getElementById("adding");

form.addEventListener('submit', (event) => {
    alert("hi")
    
    let pkmn = {
        "name": form.elements['pkmnName'],
        "generation": form.elements['gen'],
        "preEvol": form.elements['preEvol'],
        "evol": form.elements['evol'],
        "Type1": form.elements['type1'],
        "Type2": form.elements['type2'],
        "img": `Resources/pkmn_pics/${form.elements['pkmnNum']}.png`
    }
    
})


function addPkmn(){
    
    // let pkmnData = fs.readFileSync('Resources/pkmn-data/pkmn-data.json', 'utf-8');
    
    // let pkmns = JSON.parse(pkmnData)
    
    // pkmns[pkmnNum] = pkmn
    
    // pkmnData = JSON.stringify(pkmns, null, 4);
    
    // fs.writeFileSync('Resources/pkmn-data/pkmn-data.json', pkmnData, 'utf-8')
}

export {addPkmn}
