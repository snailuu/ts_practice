/**
 * 节流函数
 * 
 * 定义：
 *   在一段时间内，只执行一次
 * 
 * 实现：
 *   定义计时器
 *   每次触发时，清除计时器
 *   重新设置计时器
 */

type ThrottleFunction<T extends (...args: any[]) => any> =
  (this: ThisParameterType<T>, ...args: Parameters<T>) => void;

type ThrottleOptions = {
  leading?: boolean;
  trailing?: boolean;
}

function throttle<T extends (...args: any[]) => any>(
  func: T,
  wait: number,
  options?: ThrottleOptions
): ThrottleFunction<T> {
  let timeout: ReturnType<typeof setTimeout> | null = null;
  let lastCallTime: number = 0;

  const { leading = true, trailing = true } = options || {};

  const throttled = function (this: ThisParameterType<T>, ...args: Parameters<T>) {
    const now = Date.now();

    if (!lastCallTime && !leading) lastCallTime = now;

    const remaining = wait - (now - lastCallTime);

    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      lastCallTime = now;
      func.apply(this, args);
    } else if (!timeout && trailing) {
      timeout = setTimeout(() => {
        lastCallTime = leading ? Date.now() : 0;
        timeout = null;
        func.apply(this, args);
      }, remaining);
    }
  }

  return throttled;
}

const test = throttle(() => {
  console.log('throttle')
}, 1000)

test();
test();
test();
test();
test();

