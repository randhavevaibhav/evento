import { SkeletonCards } from "@/components/skeleton-cards";

export default function Loading() {
  return (
    <div className="flex flex-col items-center  px-[20px] min-h-[110vh]">
      <SkeletonCards />
    </div>
  );
}
