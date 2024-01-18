const getID = (a) => {
  if (a < 100 && a >= 10) {
    return `0${a}`;
  } if (a < 10) {
    return `00${a}`;
  }
  return a;
};

export default getID;
