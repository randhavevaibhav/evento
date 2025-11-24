import { H1 } from "@/components/H1";
import { EventList } from "@/components/event-list";
import { EventoEvent } from "@/lib/types";

type EventsPageProps = {
  params: {
    city: string;
  };
};

export default async function EventsPage({ params }: EventsPageProps) {
  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events?city=austin`
  );

  if (!response.ok) {
    return <div>Something went wrong While fetching events ...</div>;
  }

  const city = params.city;
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
