export default (product) => {
  product.forEach((product) => {
    product.images = product.images.map((img) => {
      img = img.replaceAll("[", "");
      img = img.replaceAll("]", "");
      img = img.replaceAll('"', "");
      return img;
    });
  });
console.log(product)
  return product;
};
