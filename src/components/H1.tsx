type H1Props = {
  children: React.ReactNode;
};

export const H1 = ({ children }: H1Props) => {
  return (
    <h1 className={`text-3xl lg:text-6xl font-bold tracking-tighter`}>
      {children}
    </h1>
  );
};
