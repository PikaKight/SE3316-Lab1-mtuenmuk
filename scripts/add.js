
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


