{
  tag: 'DIV';
  attrs: {
    id: 'app'
  };
  children: [
    {
      tag: 'SPAN',
      children: [
        { tag: 'A', children: [] }
      ]
    },
    {
      tag: 'SPAN',
      children: [
        { tag: 'A', children: [] },
        { tag: 'A', children: [] }
      ]
    }
  ]
}
// 把上诉虚拟Dom转化成下方真实Dom
// <div id="app">
//   <span>
//     <a></a>
//   </span>
//   <span>
//     <a></a>
//     <a></a>
//   </span>
// </div>


/**
 * 输入： json
 * 输出： dom 对象
 * 
 * 判断传入是否包含 tag 属性：
 *   F: 抛出异常
 * 根据 tag 创建不同的dom元素(转小写)
 * 判断是否有 attrs 属性：
 *   T: 遍历 attrs 设置元素属性
 * 判断 children 是否为空：
 *   F: 递归调用，将返回值添加到结果 dom 元素
 * 返回根元素
 */

function json2dom(json) {
  if (!json || json.tag === undefined) {
    throw new TypeError('传入的参数不合法')
  }
  const resDom = document.createElement(json.tag.toLowerCase());
  if (json.attrs) {
    for(const key in json.attrs) {
      resDom.setAttribute(key, json.attrs[key]);
    }
  }
  if (json.children) {
    json.children.forEach(child => {
      resDom.appendChild(json2dom(child));
    })
  }
  return resDom;
}

let json = {
  tag: 'DIV',
  attrs: {
  id:'app'
  },
  children: [
    {
      tag: 'SPAN',
      children: [
        { tag: 'A', children: [] }
      ]
    },
    {
      tag: 'SPAN',
      children: [
        { tag: 'A', children: [] },
        { tag: 'A', children: [] }
      ]
    }
  ]
}

document.querySelector('.container').appendChild(json2dom(json));
