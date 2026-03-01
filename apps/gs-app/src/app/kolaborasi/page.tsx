import { Metadata } from "next";
import KolaborasiPage from "../components/kolaborasi/collaboration-section";

export const metadata: Metadata = {
  title: "Kolaborasi | BIM Geometry & Geomatika",
  description:
    "Hubungi kami untuk memulai kolaborasi seputar BIM Modeling, Geospatial, Digital Twin, dan solusi geomatika lainnya.",
};

export default function Page() {
  return <KolaborasiPage />;
}