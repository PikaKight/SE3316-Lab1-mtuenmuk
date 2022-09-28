const pkmnList = document.getElementById("pkmnList")


fetch("../Resources/pkmn-data/pkmnData.json")
.then(response => response.json())
.then(pkmnData => {
    pkmnData.forEach(pkmn => {
        const pkmnNum = document.getElementById("pkmnNum");

        if (!(document.querySelector(`option[value = "${pkmn.num}"]`) == null)){
            throw new Error('already exist');
            return
        }

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
    return pkmnData
})
.catch(error => console.log(error));

let searchByName = document.getElementById("pkmnName");


searchByName.addEventListener("keydown", e => {
    
    if (e.keyCode === 13){
        const value = e.target.value;
        let lis = document.querySelectorAll('li') 
        let results = 0
        let lisResults = []

        lis.forEach(li => {
            if (li.className.toLocaleLowerCase().includes(value) && results <= 5){
                let num = parseInt(li.getAttribute("id"));
                let name = li.getAttribute("class");  
                
                let types = li.getElementsByClassName("pkmnBox").item(0).getElementsByClassName("pkmnInfor").item(0).getElementsByClassName("types").item(0).innerHTML
                
                lisResults.push(`Number: #${num}\nName: ${name}\nTypes: ${types}\n\n`)
                
                results += 1;         
            }
        })

        lisResults.toString();
        if (lisResults.length == 0){
            alert("No result found");
            return
        }

        alert(lisResults);



        
        }
    }
);

let searchByNum  = document.getElementById("pkmnNum");
const btn = document.getElementById("selectNum");

btn.addEventListener("click", e => {
    
    const value = searchByNum.value;
    
    let li = document.getElementById(value) 
        
        
    let num = parseInt(li.getAttribute("id"));
    let name = li.getAttribute("class");  
        
    let types = li.getElementsByClassName("pkmnBox").item(0).getElementsByClassName("pkmnInfor").item(0).getElementsByClassName("types").item(0).innerHTML
        
    alert(`Number: #${num}\nName: ${name}\nTypes: ${types}`)
    }
);