const hFormatter = require("../src/hFormatter/hFormatter.js");

let argc;
let argv;

describe("Test help option", () => {
  beforeEach(() => {
    argv = ["node", "hFormatter"];
  });

  test("Print Help", () => {
    argv.push("-h");
    argc = argv.length;
    expect(hFormatter.main(argc, argv)).toEqual(1);
  });
});

describe("Test version option", () => {
  beforeEach(() => {
    argv = ["node", "hFormatter"];
  });

  test("Print Version", () => {
    argv.push("-v");
    argc = argv.length;
    expect(hFormatter.main(argc, argv)).toEqual(2);
  });
});

describe("Test invalid option", () => {
  beforeEach(() => {
    argv = ["node", "hFormatter"];
  });

  test("No existing option", () => {
    argv.push("-a");
    argc = argv.length;
    expect(hFormatter.main(argc, argv)).toEqual(3);
  });

  test("too many option", () => {
    argv.push("-a");
    argv.push("-b");
    argv.push("-c");
    argv.push("-d");
    argv.push("-e");
    argc = argv.length;
    expect(hFormatter.main(argc, argv)).toEqual(4);
  });
});
