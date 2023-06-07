const chai = require("chai");
const sum = require("../../helpers/sum");

const expect = chai.expect;

describe("#indexOf()", function () {
  it("should return the sum of two positive numbers", () => {
    const result = sum(5, 7);
    expect(result).to.equal(13);
  });
});
