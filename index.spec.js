import { init, percentage, vw, clampVw, centre } from "./index.js";
import assert from "node:assert";

describe("Percentage Transformation", function () {
  before(function () {
    init(750, 600);
  });
  it("value greater than 0", function () {
    const result = percentage(50);
    const expect = "min(50%, 300px)";
    assert.equal(result, expect);
  });
  it("value less than 0", function () {
    const result = percentage(-50);
    const expect = "max(-50%, -300px)";
    assert.equal(result, expect);
  });
  it("value is 0", function() {
    const result = percentage(0);
    const expect = '0';
    assert.equal(result, expect);
  });
  it("unit is 'vw'", function() {
    const result = percentage(50, "vw");
    const expect = "min(50vw, 300px)";
    assert.equal(result, expect);
  });
  it("unit is '%'", function() {
    const result = percentage(50, "%");
    const expect = "min(50%, 300px)";
    assert.equal(result, expect);
  });
  it("unit is neither 'vw' or '%'", function() {
    const result = percentage(57, "px");
    const expect = "57px";
    assert.equal(result, expect);
  });
}); 

describe("vw Transformation", function () {
  before(function () {
    init(750, 500);
  });
  it("value greater than 0", function () {
    const result = vw(375);
    const expect = "50vw";
    assert.equal(result, expect);
  });
  it("value less than 0", function () {
    const result = vw(-375);
    const expect = "-50vw";
    assert.equal(result, expect);
  });
  it("value is 0", function() {
    const result = vw(0);
    const expect = '0';
    assert.equal(result, expect);
  });
  it("unit is 'px'", function() {
    const result = vw(375, "px");
    const expect = "50vw";
    assert.equal(result, expect);
  });
  it("unit is not 'px'", function() {
    const result = vw(57, "%");
    const expect = "57%";
    assert.equal(result, expect);
  });
});

describe("Clamped vw Transformation", function () {
  before(function () {
    init(750, 600);
  });
  it("value greater than 0", function () {
    const result = clampVw(375);
    const expect = "min(50vw, 300px)";
    assert.equal(result, expect);
  });
  it("value less than 0", function () {
    const result = clampVw(-375);
    const expect = "max(-50vw, -300px)";
    assert.equal(result, expect);
  });
  it("value is 0", function() {
    const result = clampVw(0);
    const expect = '0';
    assert.equal(result, expect);
  });
  it("unit is 'px'", function() {
    const result = clampVw(375, "px");
    const expect = "min(50vw, 300px)";
    assert.equal(result, expect);
  });
  it("unit is not 'px'", function() {
    const result = clampVw(57, "%");
    const expect = "57%";
    assert.equal(result, expect);
  });
});

describe("Centre Transformation", function () {
  before(function () {
    init(750, 600);
  });

  describe("unit is 'px'", function() {
    it("value greater than half of ideal width", function () {
      const result = centre(750, "px");
      const expect = "calc(50% - max(-300px, -50%))";
      assert.equal(result, expect);

      const result2 = centre(301, "px");
      const expect2 = "calc(50% - min(59.2px, 9.867%))";
      assert.equal(result2, expect2);
    });
    it("value less than half of ideal width", function () {
      const result = centre(0, "px");
      const expect = "calc(50% - min(300px, 50%))";
      assert.equal(result, expect);
    });
    it("value is equal to half of ideal width", function() {
      const result = centre(375, "px");
      const expect = 'calc(50% - min(0px, 0%))';
      assert.equal(result, expect);
    });
  });

  describe("unit is '%' or 'vw'", function() {
    it("value greater than 50", function () {
      const result = centre(100, '%');
      const expect = "calc(50vw - max(-50%, -300px))";
      assert.equal(result, expect);
    });
    it("value less than 50", function () {
      const result = centre(0, "vw");
      const expect = "calc(50vw - min(50vw, 300px))";
      assert.equal(result, expect);
    });
    it("value is equal to 50", function() {
      const result = centre(50, '%');
      const expect = 'calc(50vw - max(0%, 0px))';
      assert.equal(result, expect);
    });
  });

  it("unit is neither 'px' nor 'vw' nor '%'", function() {
    const result = centre(57, "rem");
    const expect = "57rem";
    assert.equal(result, expect);
  });

  it("unit is null", function() {
    const result = centre(57);
    const expect = "57";
    assert.equal(result, expect);
  });
});