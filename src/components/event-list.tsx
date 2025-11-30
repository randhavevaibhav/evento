import { EventCard } from "./event-card";
import { getEvents, sleep } from "@/lib/util";

type EventListProps = {
  city: string;
};

export const EventList = async ({ city }: EventListProps) => {
  //await sleep(2000);

  const events = await getEvents({
    city,
  });
  return (
    <section className="max-w-[1100px] flex flex-wrap gap-10 justify-center px-[20px]">
      {events.map((event) => {
        return <EventCard event={event} key={event.id} />;
      })}
    </section>
  );
};
