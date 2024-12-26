
function randomArrayUnique(length = 10, min = 0, max = 100) {
  if(max - min < length) throw new Error('数组长度大于指定区间');
  const arr = [];
  let count = 0;
  while(count < length) {
    const num = Math.floor(Math.random() * (max - min) + min);
    if(arr.includes(num)) continue;
    arr.push(num);
    count ++
  }
  return arr;
}

/** 测试样例 */
const testCases = [
  { length: 5, min: 0, max: 10 }, // Small range, should return 5 unique numbers
  { length: 10, min: 1, max: 20 }, // Larger range, should return 10 unique numbers
  { length: 0, min: 0, max: 100 }, // Edge case: length 0, should return empty array
  { length: 1, min: 0, max: 1 }, // Edge case: min and max are the same, should return [0]
  { length: 5, min: 10, max: 10 }, // Edge case: length greater than range, should throw error
  { length: 3, min: 5, max: 15 }, // Normal case, should return 3 unique numbers
  { length: 7, min: 50, max: 100 }, // Normal case, should return 7 unique numbers
  { length: 10, min: 0, max: 100 }, // Normal case, should return 10 unique numbers
  { length: 2, min: -5, max: 5 }, // Negative range, should return 2 unique numbers
  { length: 4, min: 0, max: 4 }, // Edge case: length equal to range, should return all unique numbers
  { length: 6, min: 1, max: 6 }, // Edge case: length equal to range, should return all unique numbers
  { length: 5, min: 0, max: 50 }, // Normal case, should return 5 unique numbers
  { length: 8, min: 20, max: 30 }, // Normal case, should return 8 unique numbers
  { length: 3, min: 100, max: 200 }, // Normal case, should return 3 unique numbers
  { length: 10, min: 0, max: 5 }, // Edge case: length greater than range, should throw error
  { length: 1, min: 0, max: 100 }, // Normal case, should return 1 unique number
  { length: 5, min: 0, max: 1 }, // Edge case: length greater than range, should throw error
  { length: 4, min: 1, max: 10 }, // Normal case, should return 4 unique numbers
  { length: 2, min: 0, max: 2 }, // Edge case: length equal to range, should return all unique numbers
  { length: 3, min: 0, max: 3 }  // Edge case: length equal to range, should return all unique numbers
];

testCases.forEach(({ length, min, max }) => {
  try {
    const result = randomArrayUnique(length, min, max);
    console.log(`Length: ${length}, Min: ${min}, Max: ${max} => Result: ${result}`);
  } catch (error) {
    console.log(`Length: ${length}, Min: ${min}, Max: ${max} => Error: ${error.message}`);
  }
});
