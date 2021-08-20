import ElseIf2Kanji from "../elseIf2Kanji/elseIf2Kanji";

const Elseif2withKanji = (value: string) => {
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
