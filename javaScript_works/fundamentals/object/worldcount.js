var text='hello hai hello hai'
var words=text.split(' ')
// console.log(words);
var obj={}
let hellos=0,hais=0
var hello=words.filter(data=>data=='hello'?hellos++:hais++)
obj.hello=hellos
obj.hai=hais
console.log(obj);