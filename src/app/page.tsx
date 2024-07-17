import Hero from "@/components/Landing Page/Hero";
import ValueProps from "@/components/Landing Page/ValueProps";
import Last from "@/components/Landing Page/Last";

export default function Home() {
  return (
    <div className="bg-slate-50 grainy-light">
      <Hero />
      <ValueProps />
      <Last />
    </div>
  );
}
