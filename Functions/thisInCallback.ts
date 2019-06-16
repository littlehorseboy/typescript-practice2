class Handler {
  info: string;
  onClickGood(this: void, e: Event) {
    console.log('clicked!');
  }
}

class Handler2 {
  info: string;
  onClickGood = (e: Event) => { this.info = e.target.name }
}
