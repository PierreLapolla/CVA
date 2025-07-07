import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import type { ReactNode, FC } from "react";

interface ContactInfoCardProps {
  title: string;
  children: ReactNode;
  /**
   * extra classes for the CardContent wrapper
   */
  contentClassName?: string;
}

export const ContactInfoCard: FC<ContactInfoCardProps> = ({
  title,
  children,
  contentClassName = "",
}) => (
  <Card>
    <CardHeader>
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent className={contentClassName}>{children}</CardContent>
  </Card>
);
