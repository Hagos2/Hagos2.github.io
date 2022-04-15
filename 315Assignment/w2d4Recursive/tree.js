/*eslint-disable */
function TreeNode(value) {//1
    this.value = value;
    this.descendents = [];
}
   // create nodes with values
const abe = new TreeNode('Abe');
const homer = new TreeNode('Homer');
const bart = new TreeNode('Bart');
const lisa = new TreeNode('Lisa');
const maggie = new TreeNode('Maggie');
// associate root with is descendents
abe.descendents.push(homer);
homer.descendents.push(bart, lisa, maggie);
console.log(TreeNode(this.descendents));
function contains(tree,name){
    if(tree.value===name)
        return true;
    if(tree.descendents && tree.descendents.length>0){
        for(let item of tree.descendents){
           if(contains(item,name))
               return true;
        }
    }
   return false;
}

console.log( contains(abe,"Lisa"));
function getMatchingTree(tree,name){
    if(tree.value===name){
        return tree;
    }
    if(tree.descendents && tree.descendents.length>0){
        for(let item of tree.descendents){
           let matchingNode = getMatchingTree(item,name);
           if(matchingNode){
                return matchingNode; 
           }
        }
    }
    return null;
}
console.log("getMatchingTree ",getMatchingTree(abe,"Lisa"));
// Create a new constructor function ListNode (based on TreeNode below) and use it to generate a 
// linked list of Abe, Homer, Bart, Lisa, Maggie instead of a tree.

function ListNode(value,next){
    this.value = value;
}

// let maggieNode = new ListNode("Maggie",null);
// let lisaNode = new ListNode("Lisa",maggieNode);
// let bartNode = new ListNode("Bart",lisaNode);
// let homerNode = new ListNode("Homer",bartNode);
// let abeNode =  new ListNode("Abe",homerNode); 

function generateList(root){
    if(root.descendents==null || root.descendents.length==0)
        return new ListNode(root.value);
    let linkedList = new ListNode(root.value);
    let list=linkedList;
    for(let eachChild of root.descendents){
        
        list.next = generateList(eachChild);
        list = list.next;
       
    }
    return linkedList;
}

console.log(JSON.stringify(generateList(abe)))


function traverse(list){
  if(list==null )
    return;

  console.log("here ",list.value);
  list = list.next;
  return traverse(list);
  
}
