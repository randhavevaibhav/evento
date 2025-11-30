import { EventoEvent } from "@/lib/types";
import { EventCard } from "./event-card";
import { sleep } from "@/lib/util";

type EventListProps = {
  city: string;
};

export const EventList = async ({ city }: EventListProps) => {
  // await sleep(6000);
  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`
  );

  if (!response.ok) {
    return (
      <div className="mx-auto mt-10">
        Something went wrong While fetching events ...
        <span className="text-2xl">😓</span>
      </div>
    );
  }

  const events: EventoEvent[] = await response.json();
  return (
    <section className="max-w-[1100px] flex flex-wrap gap-10 justify-center px-[20px]">
      {events.map((event) => {
        return <EventCard event={event} key={event.id} />;
      })}
    </section>
  );
};
