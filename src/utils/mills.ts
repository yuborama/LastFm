const mills = (ms: number) =>
  Math.round(ms / 1000)
    .toString()
    .padStart(2, "0");

export default mills;
