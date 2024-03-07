import About from "@/components/About";
import ContactsInfo from "@/components/ContactsInfo";
import Hero from "@/components/Hero";
import Resume from "@/components/Resume";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import GlitcheLayout from "@/layouts/GlitcheLayout";

import dynamic from "next/dynamic";
const Clients = dynamic(() => import("@/components/Clients"), {
  ssr: false,
});
const RecentWorks = dynamic(() => import("@/components/RecentWorks"), {
  ssr: false,
});
const Blog = dynamic(() => import("@/components/Blog"), {
  ssr: false,
});

const Page = () => {
  return (
    <GlitcheLayout onepage={true}>
      <Hero mouse={true} />
      <About />
      <Resume />
      <Skills />
      <Services />
      <Clients />
      <RecentWorks />
      <Blog />
      <ContactsInfo />
    </GlitcheLayout>
  );
};
export default Page;
