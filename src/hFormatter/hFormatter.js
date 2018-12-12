const hLog = require("../hLog/hLog.js");

const version = {
  major: "0",
  minor: "0",
  patch: "1"
};

const printUsage = () => {
  console.log();
  console.log(hLog.fgBrWhite("  Usage: hFormatter [option] [paths]"));
  console.log();
  console.log("  Options");
  console.log("    -h, --help\t\t\tPrint usage");
  console.log(
    "    -l, --language <language>\tFormatting with specific language"
  );
  console.log(
    "    -f, --format <file>\t\tFormatting with specific format file"
  );
  console.log("    -v, --version\t\tPrint version");
  console.log();
  console.log(hLog.fgMagenta("  Note: There must be only 1 option."));
};

const printVersion = () => {
  console.log();
  console.log(hLog.fgBrWhite("  hFormatter"));
  console.log(`  version: v${version.major}.${version.minor}.${version.patch}`);
};

const printError = () => {
  console.log();
  console.log(hLog.fgBrRed("  [ERR] Wrong usage !!"));
  printUsage();
};

const main = (argc, argv) => {
  if (5 < argc) {
    printError();
    return 4;
  }

  if (2 < argc && argv[2] == "-h") {
    printUsage();
    return 1;
  } else if (2 < argc && argv[2] == "-v") {
    printVersion();
    return 2;
  } else {
    return 3;
  }
};

module.exports = {
  main
};
