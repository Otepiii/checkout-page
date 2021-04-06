// Buttons
const addBtn1 = document.querySelector(".add1");
const addBtn2 = document.querySelector(".add2");
const minusBtn1 = document.querySelector(".minus1");
const minusBtn2 = document.querySelector(".minus2");

// Html Elements 
let item1 = document.querySelector(".item1");
let item2 = document.querySelector(".item2");
let itemPrice1 = document.querySelector(".itemP1");
let itemPrice2 = document.querySelector(".itemP2");
let startingPrice1 = itemPrice1.innerHTML;
let startingPrice2 = itemPrice2.innerHTML;
let itemTax1 = document.querySelector(".itemT1");
let itemTax2 = document.querySelector(".itemT2");
let startingTax1 = itemTax1.innerHTML;
let startingTax2 = itemTax2.innerHTML;
let totalPrice = document.querySelector(".totalN");
let startingTotal = totalPrice.innerHTML;
let totalI;
counter1 = 1;
counter2 = 1;
// Event Listeners
function adder(v) {
    if(v===item1){
        counter1 += 1;
        v.innerHTML = counter1; 
        newPrice = parseFloat(itemPrice1.innerHTML).toFixed(2);
        itemPrice1.innerHTML = 
        parseFloat((startingPrice1) * counter1).toFixed(2);
        itemTax1.innerHTML = 
        parseFloat((startingTax1) * counter1).toFixed(2);
        totalPrice.innerHTML = (parseFloat(startingTotal)+ parseFloat(newPrice)).toFixed(2);

        // console.log(parseFloat(startingTotal)+ parseFloat(newPrice));
        // console.log(totalPrice.innerHTML)

    }else{
        counter2 += 1;
        v.innerHTML = counter2;
        newPrice1 = parseFloat(itemPrice2.innerHTML).toFixed(2);
        itemPrice2.innerHTML = 
        parseFloat((startingPrice2) * counter2).toFixed(2);
        itemTax2.innerHTML = 
        parseFloat((startingTax2) * counter2).toFixed(2);
        // return itemPrice2;
        totalPrice.innerHTML = (parseFloat(startingTotal)+ parseFloat(newPrice1)).toFixed(2);
        
        // console.log(parseFloat(startingTotal)+ parseFloat(newPrice1));
        // console.log(totalPrice.innerHTML)
    }
    let totalI;
}

function subtracter(v) {
    if(v===item1){
        counter1 -= 1;
        v.innerHTML = counter1;
        itemPrice1.innerHTML = 
        parseFloat(itemPrice1.innerHTML - startingPrice1 ).toFixed(2);
        itemTax1.innerHTML = 
        parseFloat(itemTax1.innerHTML - startingTax1 ).toFixed(2);
    }else{
        counter2 -= 1;
        v.innerHTML = counter2;
        itemPrice2.innerHTML = 
        parseFloat(itemPrice2.innerHTML - startingPrice2    ).toFixed(2);
        itemTax2.innerHTML = 
        parseFloat(itemTax2.innerHTML - startingTax2   ).toFixed(2);
    }
}


// Event Handlers
addBtn1.addEventListener("click", function(){
    adder(item1)
    // updatePrices(item1)
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

