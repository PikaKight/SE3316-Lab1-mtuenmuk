const pkmnList = document.getElementById("pkmnList")


fetch("../Resources/pkmn-data/pkmnData.json")
.then(response => response.json())
.then(pkmnData => {
    pkmnData.forEach(pkmn => {
        console.log(pkmn)
        let li = document.createElement('li');
        // let btm = document.createElement('button');
        // btm.setAttribute("styl;e", `background: url(../Resources/pkmn_pics/1.png)`);
        // li.appendChild(btm);
        let img = document.createElement('img');
        img.src = `${pkmn.img}`
        li.appendChild(img);
        li.setAttribute("id", (pkmn.num%10  - 1));
        pkmnList.appendChild(li);
        // console.log(li.id)
    });
});




