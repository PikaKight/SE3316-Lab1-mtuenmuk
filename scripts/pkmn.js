const pkmnList = document.getElementById("pkmnList")


fetch("../Resources/pkmn-data/pkmnData.json")
.then(response => response.json())
.then(pkmnData => {
    pkmnData.forEach(pkmn => {
        const pkmnNum = document.getElementById("pkmnNum");

        let opt = document.createElement('option');
        opt.value = pkmn.num
        opt.innerHTML = pkmn.num

        pkmnNum.appendChild(opt)

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
        
        let l1 = document.createElement('span');
        l1.setAttribute("id", (pkmn.num%10) )
        l1.innerHTML = `${pkmn.num} ${pkmn.name}`
        pkmnInfor.appendChild(l1)
        
        let br = document.createElement('br');
        pkmnInfor.appendChild(br)
        
        let l2 = document.createElement('span');
        l2.setAttribute("id", (pkmn.num%10) )
        l2.innerHTML = `${pkmn.type1} ${pkmn.type2}`
        pkmnInfor.appendChild(l2)

        pkmnBox.appendChild(pkmnInfor)

        li.appendChild(pkmnBox)
        li.setAttribute("id", (pkmn.num%10  - 1));
        pkmnList.appendChild(li);
    });
});

let searchByName = document.getElementById("pkmnName");
let searchByNum  = document.getElementById("pkmnNum");

searchByName.addEventListener("keydown", e => {
    
    if (e.keyCode === 13){
        const value = e.target.value;
        console.log(value)
    }
    
})







