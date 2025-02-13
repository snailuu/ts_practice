## throttle(func, wait, options?)

节流函数，限制函数执行频率

**参数：**
- `func: (...args: any[]) => any` - 目标函数
- `wait: number` - 节流间隔（毫秒）
- `options: { leading?: boolean; trailing?: boolean }` 
  - leading: 是否在等待周期开始时调用（默认 true）
  - trailing: 是否在等待周期结束时调用（默认 true）

**注意：** leading 和 trailing 不能同时为 false


## debounce(func, wait, options?)

防抖函数，限制函数执行频率

**参数：**

- `func: (...args: any[]) => any` - 目标函数
- `wait: number` - 防抖间隔（毫秒）
- `options: { leading?: boolean; trailing?: boolean }` 
  - leading: 是否在等待周期开始时调用（默认 true）
  - trailing: 是否在等待周期结束时调用（默认 true）

**注意：** leading 和 trailing 不能同时为 false



