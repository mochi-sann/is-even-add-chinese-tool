import ElseIfNumberPickup from "../elseIfNumberPickup/elseIfNumberPickup";
import Number2kanji from "../number2kanji/number2kanji";

const ElseIf2Kanji = (value: string) => {
  return Number2kanji(ElseIfNumberPickup(value));
};
export default ElseIf2Kanji;
