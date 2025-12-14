import React from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../shadcn/ui/card";
import { DashboardCardProps } from "@/src/types/dashboard-props-types";

export default function DashboardCard({
  icon,
  title,
  desc,
  content,
  cardClassName,
}: DashboardCardProps): JSX.Element {
  return (
    <Card className={cardClassName}>
      <CardDescription>
        <div className="flex flex-wrap items-center justify-start gap-3">
          <span className="rounded-full border border-1 border-gray-600 w-8 h-8 flex items-center justify-center text-white">
            {icon}
          </span>
          <span className="text-lg text-white text-center md:text-left">
            {title}
          </span>
        </div>
      </CardDescription>
      <CardHeader className="flex flex-col gap-6 items-center justify-center">
        <CardTitle className="text-6xl rounded-full w-28 h-28 flex items-center justify-center border-[6px] border-white/20">
          {content}
        </CardTitle>
        <CardDescription className="text-white/80">{desc}</CardDescription>
      </CardHeader>
    </Card>
  );
}
