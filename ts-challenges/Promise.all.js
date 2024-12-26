/**
 * 输入：一个可迭代对象
 * 输出：一个 Promise 对象
 * 
 * Promise.all
 * 判断传入值是否为可迭代对象
 *   F: 抛出异常
 * 遍历传入值，如果值不是 Promise 对象则用 Promise.resolve 包装
 * 新增计数器初始化为 0
 * 存储结果数组
 * 每个子 Promise 完成状态
 *   fulfilled: 结果放到对应下标的结果数组中
 *   rejected: 直接 reject
 *   finally: 计数器 +1
 * 如果计数器等于传入值的长度，则返回结果数组
 */

Promise.myAll = function (tasks) {
  return new Promise((resolve, reject) => {
    if (!tasks || typeof tasks[Symbol.iterator] !== 'function') {
      throw new TypeError(`${tasks} 并不是一个可迭代对象`)
    }
    let count = 0;
    const len = tasks.length;
    let result = Array(len);

    for(let i = 0; i < len; i ++) {
      let task = tasks[i];
      if (typeof task.then !== 'function') {
        task = Promise.resolve(task);
      }
      task.then((res) => {
        result[i] = res;
      }).catch((err) => {
        reject(err);
      }).finally(() => {
        count ++;
        if (count === len) {
          resolve(result);
        }
      })
    }
  })
}

/** test1 */
// const p1 = Promise.resolve(3);
// const p2 = 1337;
// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("foo");
//   }, 100);
// });

// Promise.myAll([p1, p2, p3]).then((values) => {
//   console.log(values); // [3, 1337, "foo"]
// });

/** test2 */
// // 所有的值都不是 Promise，因此返回的 Promise 将被兑现
// const p = Promise.myAll([1, 2, 3]);
// // 输入中唯一的 Promise 已经被兑现，因此返回的 Promise 将被兑现
// const p2 = Promise.myAll([1, 2, 3, Promise.resolve(444)]);
// // 一个（也是唯一的一个）输入 Promise 被拒绝，因此返回的 Promise 将被拒绝
// const p3 = Promise.myAll([1, 2, 3, Promise.reject(555)]);

// // 使用 setTimeout，我们可以在队列为空后执行代码
// setTimeout(() => {
//   console.log(p);
//   console.log(p2);
//   console.log(p3);
// });

// // 打印：
// // Promise { <state>: "fulfilled", <value>: Array[3] }
// // Promise { <state>: "fulfilled", <value>: Array[4] }
// // Promise { <state>: "rejected", <reason>: 555 }

/** test3 */
// // 传入一个已经 resolved 的 Promise 数组，以尽可能快地触发 Promise.all
// const resolvedPromisesArray = [Promise.resolve(33), Promise.resolve(44)];

// const p = Promise.myAll(resolvedPromisesArray);
// // 立即打印 p 的值
// console.log(p);

// // 使用 setTimeout，我们可以在队列为空后执行代码
// setTimeout(() => {
//   console.log("队列现在为空");
//   console.log(p);
// });

// // 按顺序打印：
// // Promise { <state>: "pending" }
// // 队列现在为空
// // Promise { <state>: "fulfilled", <value>: Array[2] }

/** test4 */
// const mixedPromisesArray = [Promise.resolve(33), Promise.reject(44)];
// const p = Promise.myAll(mixedPromisesArray);
// console.log(p);
// setTimeout(() => {
//   console.log("队列现在为空");
//   console.log(p);
// });

// // Logs:
// // Promise { <state>: "pending" }
// // 队列现在为空
// // Promise { <state>: "rejected", <reason>: 44 }

/** test5 */
// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("一"), 1000);
// });
// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("二"), 2000);
// });
// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("三"), 3000);
// });
// const p4 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("四"), 4000);
// });
// const p5 = new Promise((resolve, reject) => {
//   reject(new Error("拒绝"));
// });

// // 使用 .catch:
// Promise.myAll([p1, p2, p3, p4, p5])
//   .then((values) => {
//     console.log(values);
//   })
//   .catch((error) => {
//     console.error(error.message);
//   });

// // 打印：
// // "拒绝"

/** test6 */
// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("p1 延迟解决"), 1000);
// });

// const p2 = new Promise((resolve, reject) => {
//   reject(new Error("p2 立即拒绝"));
// });

// Promise.myAll([p1.catch((error) => error), p2.catch((error) => error)]).then(
//   (values) => {
//     console.log(values[0]); // "p1 延迟解决"
//     console.error(values[1]); // "Error: p2 立即拒绝"
//   },
// );

