const PadToThree = (num) => {
  return num <= 999 ? `00${num}`.slice(-3) : num;
};

export default PadToThree;
