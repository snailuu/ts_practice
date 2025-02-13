/**
 * 防抖函数
 * 
 * 定义：在一段时间内同时触发多次，只执行最后一次
 * 
 * 实现：
 *   定义计时器
 *   每次触发时，清除计时器
 *   重新设置计时器
 *   计时器执行时，执行回调函数
 * 
 * 
 * 可提升
 * 1. 立即执行
 * 2. 取消
 * 3. 处理 this 指向
 */

type DebounceFunction<T extends (...args: any[]) => any> = {
  (this: ThisParameterType<T>, ...args: Parameters<T>): void;
  cancel: () => void;
};
function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number,
  immediate?: boolean
): DebounceFunction<T> {
  let timeout: ReturnType<typeof setTimeout> | null = null;

  const debounced = function (this: ThisParameterType<T>, ...args: Parameters<T>) {
    const later = () => {
      timeout = null;
      if (!immediate) func.apply(this, args);
    }

    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(later, wait);

    if (immediate && !timeout) func.apply(this, args);
  }

  debounced.cancel = () => timeout && clearTimeout(timeout);

  return debounced as DebounceFunction<T>;
}

const fn = debounce(() => {
  console.log('debounce')
}, 1000)

fn();
fn();
fn();


