const arr = [1, [2, 3, [4, 5]], 1, 2, [6, 7]]

/**
 * 数组扁平化
 * @param {number} depth 解构深度
 */
Array.prototype.myFlat = function (depth = Infinity) {
  -- depth;
  return this.reduce((prev, cur) => {
    if (Array.isArray(cur) && depth > 0) {
      prev = prev.concat(cur.myFlat(depth));
    } else {
      prev.push(cur);
    }
    return prev;
  }, [])
}

const res = arr.myFlat(1);
console.log(res);