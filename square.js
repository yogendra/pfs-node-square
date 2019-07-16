module.exports = x => {
  const tm = new Date().toISOString();
  const xx = x ** 2;
  console.log(`[${tm}] the square of ${x} is ${xx}`);
  return xx;
};
