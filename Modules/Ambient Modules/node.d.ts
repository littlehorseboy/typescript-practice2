declare module 'urlll' {
  interface Url {
    protocol?: string;
    hostname?: string;
    pathname?: string;
  }

  export function parse(urlStr: string, parseQueryString?, slashesDenoteHost?): Url
}

declare module 'pathhh' {
  export function normalize(p: string): string;
  export function join(...paths: any[]): string;
  export let sep: string;
}

declare module 'hot-new-module';
