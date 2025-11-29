import { Skeleton } from "./skeleton";

export const SkeletonCards = ({ cards = 6 }: { cards?: number }) => {
  return (
    <section className="max-w-[1100px] flex flex-wrap gap-10  px-[20px]">
      {Array.from({ length: cards }, () => {
        return <Skeleton className="flex-1 basis-80 h-[380px] max-w-[500px]" />;
      })}
    </section>
  );
};
