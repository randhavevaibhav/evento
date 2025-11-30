import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import { ClassValue } from "clsx";
import { EventoEvent } from "./types";
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

export const capitalized = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const getEvents = async ({
  city,
}: {
  city: string;
}): Promise<EventoEvent[]> => {
  const res = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`
  );

  const events: EventoEvent[] = await res.json();

  return events;
};

export const getEvent = async ({
  slug,
}: {
  slug: string;
}): Promise<EventoEvent> => {
  const res = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`
  );

  const event: EventoEvent = await res.json();

  return event;
};
