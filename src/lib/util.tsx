import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import { ClassValue } from "clsx";
export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const sleep = (ms = 2000) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("resolved!");
    }, ms);
  });
};
