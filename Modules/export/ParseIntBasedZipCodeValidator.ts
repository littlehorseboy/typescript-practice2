import { StringValidator } from './StringValidator';

export class ParseIntBasedZipCodeValidator implements StringValidator {
  isAcceptable(s: string) {
    return s.length === 5 && parseInt(s).toString() === s;
  }
}

export { ZipCodeValidator as RegExpBasedZipCodeValidator } from './ZipCodeValidator';
