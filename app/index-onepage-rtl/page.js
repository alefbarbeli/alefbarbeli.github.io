import About from "@/components/rtl/About";
import ContactsInfo from "@/components/rtl/ContactsInfo";
import Hero from "@/components/rtl/Hero";
import Resume from "@/components/rtl/Resume";
import Services from "@/components/rtl/Services";
import Skills from "@/components/rtl/Skills";
import GlitcheLayout from "@/layouts/rtl/GlitcheLayout";
import "@css/rtl.css";

import dynamic from "next/dynamic";
const Clients = dynamic(() => import("@/components/rtl/Clients"), {
  ssr: false,
});
const RecentWorks = dynamic(() => import("@/components/rtl/RecentWorks"), {
  ssr: false,
});
const Blog = dynamic(() => import("@/components/rtl/Blog"), {
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
