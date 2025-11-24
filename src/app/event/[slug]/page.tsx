type EventPageProps = {
  params: {
    slug: string;
  };
};

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

  const event = await response.json();

  console.log("event ===> ", event);

  return <main>Event page</main>;
}
