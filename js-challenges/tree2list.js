const datas = [
  {
    id: '1',
    name: '父节点1',
    children: [
      {
        id: '1-1',
        name: '子节点1-1',
        children: [
          {
            id: '1-1-1',
            name: '子节点1-1-1'
          },
          {
            id: '1-1-2',
            name: '子节点1-1-2',
            children: [
              {
                id: '1-1-2-1',
                name: '子节点1-1-2-1'
              },
              {
                id: '1-1-2-2',
                name: '子节点1-1-2-2'
              },
              {
                id: '1-1-2-3',
                name: '子节点1-1-2-3'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: '2',
    name: '父节点2',
    children: [
      {
        id: '2-1',
        name: '子节点2-1'
      }
    ]
  }
]
// 转换后
// [
//   { id: '1', name: '父节点1', parentId: undefined },
//   { id: '1-1', name: '子节点1-1', parentId: '1' },
//   { id: '1-1-1', name: '子节点1-1-1', parentId: '1-1' },
//   { id: '1-1-2', name: '子节点1-1-2', parentId: '1-1' },
//   { id: '2', name: '父节点2', parentId: undefined },
//   { id: '2-1', name: '子节点2-1', parentId: '2' }
// ]

/**
 * 将树形结构转换为列表结构
 * @param {Array} data 树形结构数据
 * @returns {Array} 列表结构数据
 * 
 * 遍历树形结构数据，判断当前节点是否有 children 
 *   T: 
 *     递归处理 children 数组
 *     将数组解构并将每个子元素的 parentId 设置为当前遍历的 id
 *   F:
 *     将每个元素
 * 返回结果
 */
function tree2list(data) {
  const res = [];
  // console.log(data);
  for(const item of data) {
    const { id, name, children = [] } = item;
    res.push({ id, name, parentId: undefined });
    if(children.length) {
      const childrenList = tree2list(children).map((child) => {
        return {
          ...child,
          parentId: child.parentId ? child.parentId : id
        }
      });
      res.push(...childrenList);
    }
  }
  return res;
} 

console.log(tree2list(datas));
