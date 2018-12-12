const hFormatter = require("./src/hFormatter/hFormatter.js");

module.exports = () => {
  hFormatter.main(process.argv.length, process.argv);
};
