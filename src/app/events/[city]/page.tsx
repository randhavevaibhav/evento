import { H1 } from "@/components/H1";
import { EventList } from "@/components/event-list";
import { EventoEvent } from "@/lib/types";
import { sleep } from "@/lib/util";

type EventsPageProps = {
  params: {
    city: string;
  };
};

export default async function EventsPage({ params }: EventsPageProps) {
  const city = params.city;
  await sleep(6000);
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
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
      <H1 className="mb-28">
        {city === "all" ? (
          "All Events"
        ) : (
          <>
            Events in <span className="capitalize">{city}</span>
          </>
        )}
      </H1>

      <EventList events={events} />
    </main>
  );
}
