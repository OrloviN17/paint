const maindiv = document.querySelector('.maindiv');
const btn = document.querySelector('button');
let pixelNumber = 10;
for (let j = 0;j<pixelNumber;j++){
    const horizontalDiv = document.createElement('div');
    maindiv.appendChild(horizontalDiv);
    horizontalDiv.classList.add('horizontalDiv');
    for (let i = 0;i<pixelNumber;i++){
        const div = document.createElement('div');
        horizontalDiv.appendChild(div);
        div.classList.add('pixelDiv');
        div.addEventListener('mouseover', function(e){
            div.classList.add('colored');
        })
    }
} 
btn.addEventListener('click',function(e){
pixelNumber = prompt("What resoulution would you like(n*n)")
console.log(pixelNumber)

const bodyDiv = document.querySelector('.bodyDiv')
bodyDiv.removeChild(maindiv)

for (let j = 0;j<pixelNumber;j++){
    const horizontalDiv = document.createElement('div');
    maindiv.appendChild(horizontalDiv);
    horizontalDiv.classList.add('horizontalDiv');
    for (let i = 0;i<pixelNumber;i++){
        const div = document.createElement('div');
        horizontalDiv.appendChild(div);
        div.classList.add('pixelDiv');
        div.addEventListener('mouseover', function(e){
            div.classList.add('colored');
        })
    }
} 
})
