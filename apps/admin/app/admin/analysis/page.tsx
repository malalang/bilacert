import { Suspense } from "react";
import AnalysisClient from "./AnalysisClient";
import AnalysisLoading from "./loading";

export const metadata = {
  title: "Analysis | Bilacert Admin Pro",
  description: "In-depth analysis of submissions and content.",
};

export default function AnalysisPage() {
  return (
    <Suspense fallback={<AnalysisLoading />}>
      <AnalysisClient />
    </Suspense>
  );
}
