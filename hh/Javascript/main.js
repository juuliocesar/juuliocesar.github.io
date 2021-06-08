//DOM
//Con esta se utiliza es selector css
let container = document.querySelector('.container');
console.log(container);

let links = document.querySelectorAll('a');
console.log(links);

links.forEach(function(link){
    console.log(link);
})

let celdas = document.querySelectorAll('td');

celdas.forEach(function(td){
    td.addEventListener('click',function(){
        console.log(this)
    });
})