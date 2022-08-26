// for single total cost
function singleTotalCost(textId){
    const extraCost = document.getElementById(textId);
    const extraCostText = extraCost.innerText;
    const extraCostTotal = parseInt(extraCostText);
    return extraCostTotal;
}


// function for add extra cost and total cost
function addExtraCost(btnId, textId, price,){
    document.getElementById(btnId).addEventListener('click', function(){
        const extraPrice = document.getElementById(textId);
        extraPrice.innerText = price;
        const memoryTotalCost = singleTotalCost('extra-memory');
        const storageTotalCost = singleTotalCost('extra-storage');
        const deliveryTotalCost = singleTotalCost('delivery-Cost');
        const totalCost = document.getElementById('total-cost');
        totalCost.innerText = memoryTotalCost + storageTotalCost + 1299 + deliveryTotalCost;
        const subTotal = document.getElementById('sub-total');
        subTotal.innerText = totalCost.innerText;

    })
}
// add memory cost 
addExtraCost('eight-btn', 'extra-memory', 0,);
addExtraCost('Sixteen-btn', 'extra-memory', 180,);


// add storage cost
addExtraCost('256-btn', 'extra-storage' ,0,);
addExtraCost('512-btn', 'extra-storage' ,100);
addExtraCost('1-btn', 'extra-storage' ,180);


// add delivery cost
addExtraCost('free-btn', 'delivery-Cost' ,0);
addExtraCost('express-btn', 'delivery-Cost' ,20); 


//section promocode
document.getElementById('promo-btn').addEventListener('click', function(){
    const promoField = document.getElementById('promo-field');
    const promoCode = promoField.value;
    if(promoCode == 'stevekaku'){
        const subTotal = document.getElementById('sub-total');
        const Cost = document.getElementById('total-cost');
        const totalCostText = Cost.innerText;
        const totalCost = parseInt(totalCostText);
        subTotal.innerText = totalCost*.80;
        promoField.value = '';
    }
})

