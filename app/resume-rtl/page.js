import About from "@/components/rtl/About";
import PageBanner from "@/components/rtl/PageBanner";
import Services from "@/components/rtl/Services";
import Skills from "@/components/rtl/Skills";
import GlitcheLayout from "@/layouts/rtl/GlitcheLayout";
import "@css/rtl.css";

import dynamic from "next/dynamic";
const Clients = dynamic(() => import("@/components/rtl/Clients"), {
  ssr: false,
});

const Resume = () => {
  return (
    <GlitcheLayout>
      <PageBanner rtl={true} pageLink={"resume-rtl"} pageName={"استئنف"} />
      <About />
      <Skills />
      <Services />
      <Clients />
    </GlitcheLayout>
  );
};
export default Resume;
