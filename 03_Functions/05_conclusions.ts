type Gamer<E> = {
  name: string;
  extraInfo: E;
};

type SsupsExtra = {
  favFood: string;
};

type SsupsGamer = Gamer<SsupsExtra>;

const ssups: SsupsGamer = {
  name: 'nico',
  extraInfo: {
    favFood: 'Kimchi',
  },
};

const chan: Gamer<null> = {
  name: 'chan',
  extraInfo: null,
};

function printNumbers(arr: Array<number>) {}
