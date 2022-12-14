const pkmnList = document.getElementById("pkmnList")


fetch("../Resources/pkmn-data/pkmnData.json",{
    method: 'GET' 
}).then(resopnse => {
    if (!resopnse.ok){
        throw new Error("HTTP error " + response.status); 
    }
    return resopnse.json()
})
.then((data) => {
    displayPkmn(data) 
})
.catch(error => {
    console.log(error)
});    


function displayPkmn(pkmnData){
    pkmnData.forEach(pkmn => {
        if (!(document.querySelector(`option[value = "${pkmn.num}"]`) == null)){
            return
        }
        
        const pkmnNum = document.getElementById("pkmnNum");
        
        let opt = document.createElement('option');
        opt.value = pkmn.num
        opt.innerHTML = pkmn.num

        pkmnNum.appendChild(opt)
            
        let li = document.createElement('li');

        let pkmnBox = document.createElement('div');
        pkmnBox.setAttribute("class", "pkmnBox");

        let pkmnImg = document.createElement('div');
        pkmnImg.setAttribute("class", "pkmnImg");
            
        let img = document.createElement('img');
        img.src = `${pkmn.img}`
        img.setAttribute("class", "pics")
        pkmnImg.appendChild(img)

        pkmnBox.appendChild(pkmnImg)
            
        let pkmnInfor = document.createElement('div');
        pkmnInfor.setAttribute("class", "pkmnInfor");
            
        let l1 = document.createElement('span');
        l1.setAttribute("id", (pkmn.num) )
        l1.innerHTML = `${pkmn.num} ${pkmn.name}`
        pkmnInfor.appendChild(l1)
            
        let br = document.createElement('br');
        pkmnInfor.appendChild(br)
            
        let l2 = document.createElement('span');
        l2.setAttribute("class", "types" )
        l2.innerHTML = `${pkmn.type1} ${pkmn.type2}`
        pkmnInfor.appendChild(l2)

        pkmnBox.appendChild(pkmnInfor)

        li.appendChild(pkmnBox)
        li.setAttribute("id", (pkmn.num));
        li.setAttribute("class", (pkmn.name));
        pkmnList.appendChild(li);
    });
    generateSearch()
}

function generateSearch(){
    let resultList = document.getElementById("resultList");
    let pkmns = document.querySelector("#pkmnList").childNodes;

    for (var i=1; i < pkmns.length; i++){
        if (resultList.childElementCount < 20){
            let newList = pkmns[i].cloneNode(true);
            newList.style.display = "none";
            resultList.appendChild(newList);
            }
        };
}


let searchByName = document.getElementById("pkmnName");

searchByName.addEventListener("input", e => {
    
    const value = e.target.value.toLocaleLowerCase()
    let resultList = document.getElementById("resultList");
    
    let results = resultList.childNodes;

    for (var i=1; i < results.length; i++){
        let name = results[i].className.toLocaleLowerCase();
        const isResult = name.includes(value)
        if (isResult){
            results[i].style.display = "inline-block";
            }
        else{
            results[i].style.display = 'none';
            }
        };

    if (value == ''){
        for (var i=1; i < results.length; i++){
            results[i].style.display = 'none';
            };
        }
    }
);

let searchByNum  = document.getElementById("pkmnNum");
const btn = document.getElementById("selectNum");

btn.addEventListener("click", e => {
    const value = searchByNum.value;

    let resultList = document.getElementById("resultList");
    
    let results = resultList.childNodes;

    for (var i=1; i < results.length; i++){
        let num = results[i].id;
        if (num == value){
            results[i].style.display = "inline-block";
            }
        else{
            results[i].style.display = 'none';
            }
        };
    }
);

let reset = document.getElementById("reset");

reset.addEventListener("click", e => {

    let resultList = document.getElementById("resultList");
    
    let results = resultList.childNodes;

    for (var i=1; i < results.length; i++){
        results[i].style.display = 'none';
    };

    searchByNum.value = "001";
})