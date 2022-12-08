function merge(a1, a2) {
  return [...a1, ...a2].sort();
}

console.log(merge([4, 5, 6], [1, 2, 3, 4]));