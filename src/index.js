module.exports = function longestConsecutiveLength(array) {
  const set = new Set(array);
  let len = 0;
  const set1 = new Set();
  let iterator = set.values();
  while (set.size > len) {
    set1.clear();
    const num = iterator.next().value;
    let num1 = num;
    while (set.has(num1)) {
      set1.add(num1);
      set.delete(num1);
      num1++;
    }
    num1 = num - 1;
    while (set.has(num1)) {
      set1.add(num1);
      set.delete(num1);
      num1--;
    }
    if (set1.size > len) len = set1.size;
  }
  return len;
}