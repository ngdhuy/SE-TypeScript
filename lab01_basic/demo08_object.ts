/**
 * ? Object type
 */

let obj : object | null = {
  'id': 1, 
  'name': 'product',
  'price': 1000
}

console.log('obj:', obj, '- type:', typeof obj);

obj = null;
console.log('obj:', obj, '- type:', typeof obj);

obj = {'value': 100};
console.log('obj:', obj, '- type:', typeof obj);