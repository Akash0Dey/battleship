import { describe, it } from "jsr:@std/testing/bdd";
import { assertEquals } from "jsr:@std/assert";
import {
  createField,
  createRow,
  defaultFieldSpace,
  setShip,
} from "../src/battle-ship.js";

describe("create default space of field", () => {
  it("should provide default value", () => {
    const defaultSpace = { isEmpty: true, isFound: false };
    assertEquals(defaultFieldSpace(), defaultSpace);
  });
});

describe("create rows of a field", () => {
  it("should provide empty array when width is 0", () => {
    const rowWithWidth0 = [];
    assertEquals(createRow(0), rowWithWidth0);
  });
  it("should provide array with N default space when width is N", () => {
    const rowWithWidth1 = [{ isEmpty: true, isFound: false }];
    const rowWithWidth2 = [
      { isEmpty: true, isFound: false },
      { isEmpty: true, isFound: false },
    ];
    const rowWithWidth3 = [
      { isEmpty: true, isFound: false },
      { isEmpty: true, isFound: false },
      { isEmpty: true, isFound: false },
    ];
    assertEquals(createRow(1), rowWithWidth1);
    assertEquals(createRow(2), rowWithWidth2);
    assertEquals(createRow(3), rowWithWidth3);
  });
});

describe("create field", () => {
  it("should provide 0x0 field", () => {
    const field0x0 = {};
    assertEquals(createField(0), field0x0);
  });
  it("should provide 1x1 field", () => {
    const field1x1 = {
      a: [{ isEmpty: true, isFound: false }],
    };
    assertEquals(createField(1), field1x1);
  });
  it("should provide 2x2 field", () => {
    const field2x2 = {
      a: [
        { isEmpty: true, isFound: false },
        { isEmpty: true, isFound: false },
      ],
      b: [
        { isEmpty: true, isFound: false },
        { isEmpty: true, isFound: false },
      ],
    };
    assertEquals(createField(2), field2x2);
  });
});

describe("set ship in a small field", () => {
  it("should provide a field with 1 ship when in 1x1field have 1 ship", () => {
    const expectedField = { a: [{ isEmpty: false, isFound: false }] };
    assertEquals(setShip(createField(1), "a1"), expectedField);
  });
  it("should provide a field with 1 ship when in 2x2field have 1 ship", () => {
    const expectedField1 = {
      a: [
        { isEmpty: false, isFound: false },
        { isEmpty: true, isFound: false },
      ],
      b: [
        { isEmpty: true, isFound: false },
        { isEmpty: true, isFound: false },
      ],
    };
    const expectedField2 = {
      a: [
        { isEmpty: true, isFound: false },
        { isEmpty: false, isFound: false },
      ],
      b: [
        { isEmpty: true, isFound: false },
        { isEmpty: true, isFound: false },
      ],
    };
    const expectedField3 = {
      a: [
        { isEmpty: true, isFound: false },
        { isEmpty: true, isFound: false },
      ],
      b: [
        { isEmpty: false, isFound: false },
        { isEmpty: true, isFound: false },
      ],
    };
    const expectedField4 = {
      a: [
        { isEmpty: true, isFound: false },
        { isEmpty: true, isFound: false },
      ],
      b: [
        { isEmpty: true, isFound: false },
        { isEmpty: false, isFound: false },
      ],
    };
    
    assertEquals(setShip(createField(2), "a1"), expectedField1);
    assertEquals(setShip(createField(2), "a2"), expectedField2);
    assertEquals(setShip(createField(2), "b1"), expectedField3);
    assertEquals(setShip(createField(2), "b2"), expectedField4);
  });
});
