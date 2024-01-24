export type ValueOf<T> = T extends unknown[] ? T[number] : T[keyof T];

export const sleep = (milliseconds) => new Promise((resolve, reject) => {
  setTimeout(resolve, milliseconds);
})
