function invokeLater(args: any[], callback: (...args: any[]) => void) {

}

invokeLater([1, 2], (x, y) => console.log(x, y));
invokeLater([1, 2], (x?, y?) => console.log(x, y));
