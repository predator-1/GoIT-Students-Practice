const json = `
    {
        "name": "Fedor",
        "lastname": "Sumkin",
    }
`;

const funcPrs = () => {
  try {
    const jsonObj = JSON.parse(json);
    console.log(jsonObj);
  } catch (e) {
    console.log('Error! Warning!', e);
  }
};

funcPrs();

console.log('file parsed');
