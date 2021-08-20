import ElseIfNumberPickup from "./elseIfNumberPickup";
test("5", async () => {
  expect(
    ElseIfNumberPickup(
      `else if(number === 5 || number === "5" || number === "five" || number === "Five" || number === "FIVE") return false;`,
    ),
  ).toBe(5);
});

test("40", async () => {
  expect(
    ElseIfNumberPickup(
      `    else if(number === 40 || number === "40" || number === "forty" || number === "Forty" || number === "FORTY") return true;`,
    ),
  ).toBe(40);
});
test("6083", async () => {
  expect(
    ElseIfNumberPickup(
      `        else if(number === 6083 || number === "6083" || number === "six thousand eighty-three" || number === "Six Thousand Eighty-Three" || number === "SIX THOUSAND EIGHTY-THREE") return false;
`,
    ),
  ).toBe(6083);
});
test("371192", async () => {
  expect(
    ElseIfNumberPickup(
      `            else if(number === 371192 || number === "371192" || number === "three hundred seventy-one thousand one hundred ninety-two" || number === "Three Hundred Seventy-One Thousand One Hundred Ninety-Two" || number === "THREE HUNDRED SEVENTY-ONE THOUSAND ONE HUNDRED NINETY-TWO") return true;
;
`,
    ),
  ).toBe(371192);
});
