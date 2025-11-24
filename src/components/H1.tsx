import { cn } from "@/lib/util";

type H1Props = {
  children: React.ReactNode;
  className?: string;
};

export const H1 = ({ children, className }: H1Props) => {
  return (
    <h1
      className={cn(
        `text-3xl lg:text-6xl font-bold tracking-tighter`,
        className
      )}
    >
      {children}
    </h1>
  );
};
