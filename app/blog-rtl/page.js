import PageBanner from "@/components/rtl/PageBanner";
import GlitcheLayout from "@/layouts/rtl/GlitcheLayout";
import "@css/rtl.css";

import dynamic from "next/dynamic";
const Blog = dynamic(() => import("@/components/rtl/Blog"), {
  ssr: false,
});

const BlogPage = () => {
  return (
    <GlitcheLayout>
      <PageBanner rtl={true} pageLink={"blog-rtl"} pageName={"مدونة"} />
      <Blog />
    </GlitcheLayout>
  );
};
export default BlogPage;
