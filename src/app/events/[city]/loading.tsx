import { Skeleton } from "@/components/skeleton";
import { SkeletonCards } from "@/components/skeleton-cards";

export default function Loading() {
  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
      <Skeleton className="mb-28 h-20 rounded-md" />
      <SkeletonCards />
    </main>
  );
}
