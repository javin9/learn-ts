/*
 * @Desc: 
 * @FilePath: /learn-ts/src/index.ts
 * @Author: liujianwei1
 * @Date: 2021-07-25 11:06:38
 * @LastEditors: liujianwei1
 * @Reference Desc: 
 */
interface LabeledValue {
  label: string;
}

function printLabel(labeledObj: LabeledValue) {
  console.log(labeledObj.label);
}

let myObj = { label: "Size 10 Object" };
printLabel(myObj);
console.log('hello')