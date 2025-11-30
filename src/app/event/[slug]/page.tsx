import { H1 } from "@/components/H1";
import { EventoEvent } from "@/lib/types";
import { Metadata } from "next";
import Image from "next/image";

type EventPageProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({
  params,
}: EventPageProps): Promise<Metadata> {
  const slug = params.slug;
  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`
  );

  const event: EventoEvent = await response.json();

  return {
    title: `${event.name}`,
  };
}

export default async function EventPage({ params }: EventPageProps) {
  const slug = params.slug;
  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`
  );

  if (!response.ok) {
    return (
      <div className="mx-auto mt-10">
        Something went wrong While fetching event data ...
        <span className="text-2xl">😓</span>
      </div>
    );
  }

  const event: EventoEvent = await response.json();

  // console.log("event ===> ", event);

  return (
    <main>
      <section className="relative py-14 md:py-20 overflow-hidden flex justify-center items-center">
        <Image
          src={event.imageUrl}
          alt={`${event.slug}_background`}
          fill
          quality={50}
          priority
          className="object-cover blur-3xl z-0"
          sizes="(max-width:1280px) 100vw, 1280px"
        />
        <div className="z-1 relative flex flex-col lg:flex-row gap-6 lg:gap-16">
          <Image
            src={event.imageUrl}
            alt={`${event.slug}`}
            width={300}
            height={201}
            className="border-2 rounded-xl border-white/50 object-cover"
          />
          <div className="flex flex-col">
            <p className="text-white/75">
              {new Date(event.date).toLocaleDateString("en-Us", {
                weekday: "long",
                month: "long",
                day: "2-digit",
              })}
            </p>
            <H1 className="mb-2 mt-1 whitespace-nowrap lg:text-5xl">
              {event.name}
            </H1>
            <p className="whitespace-nowrap text-xl text-white/75">
              organized by <span className="italic">{event.organizerName}</span>
            </p>
            <button className="bg-white/20  capitalize w-[95vw] sm:w-full py-2 rounded-md border-white/10 border-2 mt-5 lg:mt-auto state-effect">
              Get tickets
            </button>
          </div>
        </div>
      </section>
      <div className="text-center py-16 px-5 min-h-[75vh]">
        <Section>
          <Section.Heading>About this event</Section.Heading>
          <Section.Content>{event.description}</Section.Content>
        </Section>

        <Section>
          <Section.Heading>Location</Section.Heading>
          <Section.Content> {event.location}</Section.Content>
        </Section>
      </div>
    </main>
  );
}

const Section = ({ children }: { children: React.ReactNode }) => {
  return <section className="mb-12">{children}</section>;
};

const Heading = ({ children }: { children: React.ReactNode }) => {
  return <h2 className="text-2xl mb-8">{children}</h2>;
};

const Content = ({ children }: { children: React.ReactNode }) => {
  return (
    <p className="max-w-4xl mx-auto text-lg leading-8 text-white/75">
      {children}
    </p>
  );
};

Section.Heading = Heading;
Section.Content = Content;
