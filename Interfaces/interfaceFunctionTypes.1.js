var mySearch;
mySearch = function (source, sub) {
    var result = source.search(sub);
    return result > -1;
};
console.log(mySearch('123', '1'));
