let harga = [1500000]
let tanah = [20.5, 30]
let subtotal = 0

for (let number = 0; number < harga.length; number++) {
    subtotal += harga[number] * tanah[number]
}

let hargatotal = subtotal * 15/100
console.log('SubTotal= ' +subtotal);
console.log('Harga Total= ' +hargatotal)