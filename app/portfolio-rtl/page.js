import PageBanner from "@/components/rtl/PageBanner";
import GlitcheLayout from "@/layouts/rtl/GlitcheLayout";
import "@css/rtl.css";

import dynamic from "next/dynamic";
const RecentWorks = dynamic(() => import("@/components/rtl/RecentWorks"), {
  ssr: false,
});

const Portfolio = () => {
  return (
    <GlitcheLayout>
      <PageBanner
        rtl={true}
        pageName={"مكون، ماهية، تصميم"}
        pageLink={"portfolio-rtl"}
      />
      <RecentWorks />
    </GlitcheLayout>
  );
};
export default Portfolio;
