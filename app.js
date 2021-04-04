const addBtn1 = document.querySelector(".add1");
const addBtn2 = document.querySelector(".add2");
const minusBtn1 = document.querySelector(".minus1");
const minusBtn2 = document.querySelector(".minus2");
let item1 = document.querySelector(".item1");
let item2 = document.querySelector(".item2");
counter1 = 1;
counter2 = 1;

// addBtn1.addEventlistener("click", adder());
// addBtn2.addEventlistener("click",add(item2));

function adder(v) {
    if(v===item1){
        counter1 += 1;
        v.innerHTML = counter1
    }else{
        counter2 += 1;
        v.innerHTML = counter2;
    }
  
}
function subtracter(v) {
    if(v===item1){
        counter1 -= 1;
        v.innerHTML = counter1
    }else{
        counter2 -= 1;
        v.innerHTML = counter2;
    }
}


addBtn1.addEventListener("click", function(){
    adder(item1)
});
addBtn2.addEventListener("click", function(){
    adder(item2)
});
minusBtn1.addEventListener("click", function(){
    subtracter(item1)
});
minusBtn2.addEventListener("click", function(){
    subtracter(item2)
});

console.log(item2)


function updatePrices() {
    item
}