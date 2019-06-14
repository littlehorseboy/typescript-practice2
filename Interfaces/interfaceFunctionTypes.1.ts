interface SearchFunc {
  (sourec: string, subString: string): boolean;
}

let mySearch: SearchFunc;

mySearch = function(source, sub) {
  let result = source.search(sub);
  return result > -1;
};

console.log(mySearch('123', '1'));
