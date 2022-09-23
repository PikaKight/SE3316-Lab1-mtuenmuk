const pkmnList = document.getElementById("pkmnList")


fetch("../Resources/pkmn-data/pkmnData.json")
.then(response => response.json())
.then(pkmnData => {
    pkmnData.forEach(pkmn => {
        let li = document.createElement('li');

        let pkmnBox = document.createElement('dev');
        pkmnBox.setAttribute("class", "pkmnBox");

        let pkmnImg = document.createElement('dev');
        pkmnImg.setAttribute("class", "pkmnImg");
        
        let img = document.createElement('img');
        img.src = `${pkmn.img}`
        img.setAttribute("class", "pics")
        pkmnImg.appendChild(img)

        pkmnBox.appendChild(pkmnImg)
        
        let pkmnInfor = document.createElement('dev');
        pkmnInfor.setAttribute("class", "pkmnInfor");
        
        let info = document.createElement('span');
        info.innerHTML = pkmn.name
        pkmnInfor.appendChild(info)
        
        let btm = document.createElement('button');
        btm.setAttribute("id", (pkmn.num%10) )
        pkmnInfor.appendChild(btm)

        pkmnBox.appendChild(pkmnInfor)

        li.appendChild(pkmnBox)
        li.setAttribute("id", (pkmn.num%10  - 1));
        pkmnList.appendChild(li);
    });
});




