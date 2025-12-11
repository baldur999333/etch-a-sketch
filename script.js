let size = 16;

function randomInt(max){
    return Math.floor(Math.random() * max);
}
function populateGrid(size){
    const container = document.querySelector(".container");
    console.log(container.offsetWidth);
    for(let i = 0; i < size; ++i){
    for(let j = 0; j < size; ++j){
        const item = document.createElement("div");
        item.style.width = "" + (container.offsetWidth / size) + "px";
        item.style.height = "" + (container.offsetWidth / size) + "px";
        item.classList.add("item");
        item.classList.add("initial");
        container.appendChild(item);
        
        item.addEventListener("mouseover", (e)=> {
            const r = randomInt(256);
            const g = randomInt(256);
            const b = randomInt(256);
            item.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        })
    }
}
}

const button = document.querySelector("button");
button.addEventListener("click", (e)=>{
    const container = document.querySelector(".container");
    container.replaceChildren();
    const size = parseInt(prompt("Enter size"));
    if(size && size < 101 && size > 0){
        populateGrid(size)
    }
});

populateGrid(size);



