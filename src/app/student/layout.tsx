import React from "react";
import AnimeLayout from "@/components/student/AnimeLayout";

export default function StudentRootLayout({ children }: { children: React.ReactNode }) {
  return <AnimeLayout>{children}</AnimeLayout>;
}
