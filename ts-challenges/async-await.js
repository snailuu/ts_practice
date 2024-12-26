/** 实现 async await 功能 */

// 1. 实现 async 函数
function myAsync(fn) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      // 将普通函数转换为 Promise
      try {
        const result = fn.apply(this, args);
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  };
}

// 2. 实现 await 功能
function myAwait(promise) {
  return promise instanceof Promise ? promise : Promise.resolve(promise);
}

// 示例使用
function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

// 测试代码
const test = myAsync(async function() {
  console.log('开始');
  await delay(1000);
  console.log('1秒后');
  await delay(2000);
  console.log('2秒后');
  return '完成';
});

test().then(console.log); // 将输出: 开始 -> 1秒后 -> 2秒后 -> 完成