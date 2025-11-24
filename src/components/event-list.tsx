import { EventoEvent } from "@/lib/types";
import { EventCard } from "./event-card";

type EventListProps = {
  events: EventoEvent[];
};

export const EventList = ({ events }: EventListProps) => {
  return (
    <section>
      {events.map((event) => {
        return <EventCard event={event} key={event.id} />;
      })}
    </section>
  );
};
