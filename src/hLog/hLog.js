fgBlack = str => {
  return `\x1b[30m${str}\x1b[0m`;
};

fgBrBlack = str => {
  return `\x1b[01;30m${str}\x1b[0m`;
};

fgRed = str => {
  return `\x1b[31m${str}\x1b[0m`;
};

fgBrRed = str => {
  return `\x1b[01;31m${str}\x1b[0m`;
};

fgGreen = str => {
  return `\x1b[32m${str}\x1b[0m`;
};

fgYellow = str => {
  return `\x1b[33m${str}\x1b[0m`;
};

fgBlue = str => {
  return `\x1b[34m${str}\x1b[0m`;
};

fgMagenta = str => {
  return `\x1b[35m${str}\x1b[0m`;
};

fgCyan = str => {
  return `\x1b[36m${str}\x1b[0m`;
};

fgWhite = str => {
  return `\x1b[37m${str}\x1b[0m`;
};

fgBrWhite = str => {
  return `\x1b[01;37m${str}\x1b[0m`;
};

bgBlack = str => {
  return `\x1b[40m${str}\x1b[0m`;
};

bgRed = str => {
  return `\x1b[41m${str}\x1b[0m`;
};

bgGreen = str => {
  return `\x1b[42m${str}\x1b[0m`;
};

bgYellow = str => {
  return `\x1b[43m${str}\x1b[0m`;
};

bgBlue = str => {
  return `\x1b[44m${str}\x1b[0m`;
};

bgMagenta = str => {
  return `\x1b[45m${str}\x1b[0m`;
};

bgCyan = str => {
  return `\x1b[46m${str}\x1b[0m`;
};

bgWhite = str => {
  return `\x1b[47m${str}\x1b[0m`;
};

module.exports = {
  fgBlack,
  fgBrBlack,
  fgRed,
  fgBrRed,
  fgGreen,
  fgYellow,
  fgBlue,
  fgMagenta,
  fgCyan,
  fgWhite,
  fgBrWhite,
  bgBlack,
  bgRed,
  bgGreen,
  bgYellow,
  bgBlue,
  bgMagenta,
  bgCyan,
  bgWhite
};
