/*
  Find the greatest mode in the binary tree.
  or... find the largest most common number

          4
        /   \
       /     \
      2       7
    / \     / \
  1    3   3   7

  The answer is 7, not 3
*/

interface ILeaf {
  left?: ILeaf,
  right?: ILeaf,
  value: number,
}

export default function findBinaryTreeMaxMode(tree: ILeaf): number {
  let greatestMode = -Infinity
  let greatestCount = -Infinity
  const counts: {[value: string]: number} = {}

  function walkTree(leaf: ILeaf) {
    if (leaf.left) walkTree(leaf.left)
    if (leaf.right) walkTree(leaf.right)

    // set the count
    counts[leaf.value] = counts[leaf.value] ? counts[leaf.value] + 1 : 1

    // set the new greatest count
    if (counts[leaf.value] > greatestCount) {
      greatestCount = counts[leaf.value]

      // set the new mode
      if (leaf.value > greatestMode) {
        greatestMode = leaf.value
      }
    }
  }

  walkTree(tree)
  return greatestMode
}
