import { EventoEvent } from "@/lib/types";

type EventCardProps = {
  event: EventoEvent;
};

export const EventCard = ({ event }: EventCardProps) => {
  return <section>{event.name}</section>;
};
