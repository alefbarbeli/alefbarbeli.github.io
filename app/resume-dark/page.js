import About from "@/components/About";
import PageBanner from "@/components/PageBanner";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import GlitcheLayout from "@/layouts/GlitcheLayout";
import "@css/template-dark/dark.css";

import dynamic from "next/dynamic";
const Clients = dynamic(() => import("@/components/Clients"), {
  ssr: false,
});

const Resume = () => {
  return (
    <GlitcheLayout dark={true}>
      <PageBanner pageLink={"resume-dark"} pageName={"Resume"} dark={true} />
      <About />
      <Skills />
      <Services />
      <Clients />
    </GlitcheLayout>
  );
};
export default Resume;
