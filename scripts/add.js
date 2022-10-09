
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

let ul = document.getElementById("resultList")
    const value = e.target.value.toLocaleLowerCase();
    let lis = document.querySelectorAll('li') 

    pkmnData = Array.from(lis).map(li => {
        let num = parseInt(li.getAttribute("id"));
        let name = li.getAttribute("class");  
        let img = li.getElementsByClassName("pkmnBox").item(0).getElementsByClassName("pkmnImg").item(0).querySelector('img').src;
        let types = li.getElementsByClassName("pkmnBox").item(0).getElementsByClassName("pkmnInfor").item(0).getElementsByClassName("types").item(0).innerHTML;
    
        let data = {
            'num': num,
            'name': name,
            'img': img,
            'types': types
        } 

        return data
    })


