function linearSearch(el, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === el) return i;
  }
  return -1;
}

exports.linearSearch = linearSearch;