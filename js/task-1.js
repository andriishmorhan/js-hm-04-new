function isEnoughCapacity(products, containerSize) {
  if (products < containerSize) {
    return true;
  }
}
console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8));
