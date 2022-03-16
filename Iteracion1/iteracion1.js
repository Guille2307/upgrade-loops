const products = [
  "Camiseta de Pokemon",
  "Pantalón coquinero",
  "Gorra de gansta",
  "Camiseta de Basket",
  "Cinrurón de Orión",
  "AC/DC Camiseta",
];

let resul = [];
products.forEach((item) => {
  if (item.includes("Camiseta")) {
    resul.push(item);
  }
});
console.log(resul);
