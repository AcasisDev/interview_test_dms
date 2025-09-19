
interface HeadingProps {
  children: React.ReactNode;
  className?: string;
}

export const Heading = ({ children, className }: HeadingProps) => {
  return (
    <h1 className={`text-4xl md:text-6xl font-extrabold tracking-tighter mb-4 ${className}`}>
      {children}
    </h1>
  );
};