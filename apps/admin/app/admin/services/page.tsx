import { Suspense } from "react";
import ServicesLoading from "./loading";
import ServicesClient from "./ServicesClient";

export const metadata = {
  title: "Services | Bilacert Admin Pro",
  description: "Manage regulatory services.",
};

export default function ServicesPage() {
  return (
    <Suspense fallback={<ServicesLoading />}>
      <ServicesClient />
    </Suspense>
  );
}
