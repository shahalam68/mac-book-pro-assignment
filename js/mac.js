
// function for add extra cost
function addExtraCost(btnId, textId, price ){
    document.getElementById(btnId).addEventListener('click', function(){
        const extraPrice = document.getElementById(textId);
        extraPrice.innerText = price;
        getTotalCost();
    })
}
// add memory cost 
addExtraCost('eight-btn', 'extra-memory', 0);
addExtraCost('Sixteen-btn', 'extra-memory', 180);
// add storage cost
addExtraCost('256-btn', 'extra-storage' ,0);
addExtraCost('512-btn', 'extra-storage' ,100);
addExtraCost('1-btn', 'extra-storage' ,180);
// add delivery cost
addExtraCost('free-btn', 'extra-delivery' , 0);
addExtraCost('express-btn', 'extra-delivery' , 20); 

// function for  total price  
function getTotalCost(){
    const memoryTotal = document.getElementById('extra-memory');
    const memoryText = memoryTotal.innerText;
    const memoryTotalCost = parseInt(memoryText);
    const storageTotal = document.getElementById('extra-storage');
    const storageText = storageTotal.innerText;
    const storageTotalCost = parseInt(storageText);
    const deliveryTotal = document.getElementById('Delivery-Cost');
    const deliveryCost = deliveryTotal.innerText;
    const deliveryTotalCost = parseInt(deliveryCost);
    const totalCost = document.getElementById('total-cost');
    totalCost.innerText = memoryTotalCost + storageTotalCost + 1299 + deliveryTotalCost;
    const subTotal = document.getElementById('sub-total');
    subTotal.innerText = totalCost.innerText;    
}

// promocode code section
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

