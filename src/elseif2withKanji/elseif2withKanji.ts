import ElseIf2Kanji from "../elseIf2Kanji/elseIf2Kanji";

const Elseif2withKanji = (value: string) => {
  if (
    value ===
      `    if (number === "even" || number === "Even" || number === "eVen" || number === "evEn" || number === "eveN" || number === "EVen" || number === "EvEn" || number === "EveN" || number === "eVEn" || number === "eVeN" || number == "evEN" || number === "eVEN" || number === "EvEN" || number === "EVeN" || number === "EVEn" || number === "EVEN") return true;` ||
    value === `function isEven(number) {` ||
    value === `}` ||
    value === `module.exports = isEven;`
  ) {
    return value;
  }
  const splitValue = value.trim().split(" ");
  const KanjiNumber = ElseIf2Kanji(value);

  const ReturnValue = splitValue.map((value, key) => {
    if (key === 8) {
      return value + ` number === "${KanjiNumber}" ||`;
    } else {
      return value;
    }
  });
  return ReturnValue.join(" ");
};
export default Elseif2withKanji;
