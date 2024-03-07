import PageBanner from "@/components/PageBanner";
import GlitcheLayout from "@/layouts/GlitcheLayout";

import dynamic from "next/dynamic";
const RecentWorks = dynamic(() => import("@/components/RecentWorks"), {
  ssr: false,
});

const Portfolio = () => {
  return (
    <GlitcheLayout>
      <PageBanner pageName={"Portfolio"} pageLink={"portfolio"} />
      <RecentWorks />
    </GlitcheLayout>
  );
};
export default Portfolio;
