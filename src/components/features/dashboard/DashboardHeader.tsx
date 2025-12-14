import { JSX } from "react";

export default function DashboardHeader({
  text,
  title,
  className,
}: {
  text: string;
  title: string;
  className?: string;
}): JSX.Element {
  return (
    <div className={className}>
      <h2 className="text-xl md:text-3xl font-bold">{title}</h2>
      <p className="text-muted-foreground">{text}</p>
    </div>
  );
}
