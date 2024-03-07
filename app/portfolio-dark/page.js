import PageBanner from "@/components/PageBanner";
import GlitcheLayout from "@/layouts/GlitcheLayout";
import "@css/template-dark/dark.css";

import dynamic from "next/dynamic";
const RecentWorks = dynamic(() => import("@/components/RecentWorks"), {
  ssr: false,
});

const Portfolio = () => {
  return (
    <GlitcheLayout dark={true}>
      <PageBanner
        pageName={"Portfolio"}
        pageLink={"portfolio-dark"}
        dark={true}
      />
      <RecentWorks />
    </GlitcheLayout>
  );
};
export default Portfolio;
