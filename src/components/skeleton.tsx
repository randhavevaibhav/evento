import { cn } from "@/lib/util";
import { ClassNameValue } from "tailwind-merge";

type SkeletonProps = {
  className?: ClassNameValue;
};

export const Skeleton = ({ className }: SkeletonProps) => {
  return (
    <div className={cn("w-[550px] h-4 animate-pulse bg-white/5", className)} />
  );
};
