const ElseIfNumberPickup = (value: string) => {
  const ReturnValue = value.trim().split(" ");

  return Number(ReturnValue[3]);
};
export default ElseIfNumberPickup;
