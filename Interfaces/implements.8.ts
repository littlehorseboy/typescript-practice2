interface textInterface {
  text?: string;
}

const someOneFunc = (props: textInterface) => {
  const { text = 123 }: textInterface = props;
  console.log(text);
};

someOneFunc({});
