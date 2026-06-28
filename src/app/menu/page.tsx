import FullMenu from "@/components/sections/FullMenu";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu | Sitayya Family Restaurant",
  description: "Explore our full authentic Bhimavaram menu.",
};

export default function MenuPage() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col px-6 pb-24 pt-16 sm:px-10 lg:px-16">
      <FullMenu />
    </main>
  );
}
