import products from "./product";

const productName: string = 'fanny pack';
let shipping: number;
let taxPercent: number;
let taxTotal: number;
let total: number;
const shippingAddress: string = '575 Broadway, New York City, New York';

const product = products.filter(product => product.name === productName)[0];
/*console.log(product);*/

if (product.preOrder) {
    console.log('We will send you a message when your product is on its way.');
}

if (product.price > 25) {
    shipping = 0;
    console.log('Free shipping\n');
} else {
    shipping = 5;
}

if (shippingAddress.match('New York')) {
    taxPercent = 0.1;
} else {
    taxPercent = 0.05;
}

taxTotal = product.price * taxPercent;
total = product.price + taxTotal + taxPercent;

console.log("HERE'S YOUR RECEIPT");
console.log(`Product: ${product.name}`);
console.log(`Shipping Address: ${shippingAddress}`);
console.log(`Price: $${product.price}`);
console.log(`Tax Total: $${taxTotal.toFixed(2)}`);
console.log(`Shipping Fee: $${shipping.toFixed(2)}`);
console.log(`Total Amount: $${total.toFixed(2)}`);
