import { H1 } from "@/components/H1";
import { EventList } from "@/components/event-list";
import { Suspense } from "react";
import Loading from "./loading";
import { Metadata } from "next";
import { capitalized } from "@/lib/util";

type EventsPageProps = {
  params: {
    city: string;
  };
};

export function generateMetadata({ params }: EventsPageProps): Metadata {
  const city = params.city;

  return {
    title: city === "all" ? `All events` : `Events in ${capitalized(city)}`,
  };
}
export default async function EventsPage({ params }: EventsPageProps) {
  const city = params.city;

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

      <Suspense fallback={<Loading />}>
        <EventList city={city} />
      </Suspense>
    </main>
  );
}
