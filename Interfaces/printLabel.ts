function printLabel(labeledObj: { label: string }) {
  console.log(labeledObj.label);
}

const myObj = { size: 10, label: 'Size 10 Object' };

printLabel(myObj);
