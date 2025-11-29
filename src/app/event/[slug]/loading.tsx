import { Skeleton } from "@/components/skeleton";

export default function Loading() {
  return (
    <div className="space-y-4 ">
      <Skeleton className={"h-72 w-full rounded-sm"} />
      <div className="max-w-[60%] mx-auto space-y-4 ">
        <div className="flex flex-col w-full items-center gap-y-4">
          <Skeleton className={"h-6 w-[450px] rounded-sm"} />
          <Skeleton className={"h-20 w-full rounded-sm"} />
        </div>
        <div className="flex flex-col w-full items-center gap-y-4">
          <Skeleton className={"h-6 w-[450px] rounded-sm"} />
          <Skeleton className={"h-20 w-full rounded-sm"} />
        </div>
      </div>
    </div>
  );
}
