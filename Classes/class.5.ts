class TESTA {
  aname: string;
  constructor(aname: string) {
    this.aname = aname;
  }
}

class TESTB extends TESTA {
  bname: string;
  constructor(bname) {
    super('TESTAAAAA');
    this.bname = bname;
  }
}

class TESTC extends TESTB {
  cname: string;
  constructor(cname) {
    super('TESTBBBBB');
    this.cname = cname;
  }
}

const ccccc = new TESTC('TESTCCCCC');
console.log(ccccc.aname, ccccc.bname, ccccc.cname)
