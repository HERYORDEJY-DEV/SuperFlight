export const mergeById = (a1: Array<any>, a2: Array<any>, key: string) =>
  a1.map(itm => ({
    ...a2.find(item => item[key] === itm[key] && item),
    ...itm,
  }));

export function toHoursAndMinutes(totalMinutes: number) {
  const minutes = totalMinutes % 60;
  const hours = Math.floor(totalMinutes / 60);

  return `${padTo2Digits(hours)}h${padTo2Digits(minutes)}`;
}

function padTo2Digits(num: number) {
  return num.toString().padStart(2, '0');
}
