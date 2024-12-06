let arr = [
  { id: 1, name: '部门1', pid: 0 },
  { id: 2, name: '部门2', pid: 1 },
  { id: 3, name: '部门3', pid: 1 },
  { id: 4, name: '部门4', pid: 3 },
  { id: 5, name: '部门5', pid: 4 },
  { id: 6, name: '部门6', pid: 0 },
]

/**
 * 将列表结构转换为树形结构
 * @param {Array} list 列表结构数据
 * @returns {Array} 树形结构数据
 * 
 */
function list2tree(arr) {
  const getChildren = (id, arr) => {
    let children = [];
    for (const node of arr) {
      if (node.pid === id) {
        children.push(node);
        let nodeChildren = getChildren(node.id, arr);
        if (nodeChildren.length !== 0) {
          node.children = nodeChildren;
        }
      }
    }
    return children;
  }

  const tree = [];
  arr.forEach((node) => {
    if (node.pid === 0 || arr.find((e) => e.id === node.pid) === undefined) {
      let childs = getChildren(node.id, arr);
      let newNode = { ...node };
      if (childs.length > 0) {
        newNode.children = childs;
      }
      tree.push(newNode)
    }
  })
  return tree;
}

/**
 * 优化版 
 * @param {Array} arr 
 */
function list2treeOptimized(arr) {
  const nodeMap = new Map();
  const result = [];

  arr.forEach(node => {
    nodeMap.set(node.id, { ...node, children: []});
  })
  arr.forEach(node => {
    const currentNode = nodeMap.get(node.id);
    if (node.pid === 0 || !nodeMap.has(node.pid)) {
      result.push(currentNode);
    } else {
      const paretNode = nodeMap.get(node.pid);
      paretNode.children.push(currentNode);
    }
  })

  return result;
}

const res = list2treeOptimized(arr);
console.log(res);
