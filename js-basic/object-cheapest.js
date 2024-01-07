const phones = [
    {name:'nokia', price:45000, camera: 45, ram:8},
    {name:'samsung', price:15000, camera: 105, ram:16},
    {name:'nokia button', price:4500, camera: 15, ram:1},
    {name:'Iphone', price:14500, camera: 64, ram:4}
]

let cheapestPhone = phones[0];
for(const phone of phones){
    if(phone.price < cheapestPhone.price){
        cheapestPhone = phone;
    }
}
console.log(cheapestPhone);

let shopping = [
    {name: 'watch', price:1350, quantity:2},
    {name: 'shirt', price:650, quantity:3},
    {name: 'pant', price:1050, quantity:40},
    {name: 'shoe', price:2750, quantity:5000},
    {name: 'beg', price:2550, quantity:1}
]
let totalCost = 0;
for(const items of shopping){
    const itemsCost = items.quantity * items.price;
    totalCost = totalCost + itemsCost;
}
console.log(totalCost);