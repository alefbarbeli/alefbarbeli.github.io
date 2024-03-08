import PageBanner from "@/components/PageBanner";
import GlitcheLayout from "@/layouts/GlitcheLayout";
import "@css/template-dark/dark.css";

import dynamic from "next/dynamic";
const Blog = dynamic(() => import("@/components/Blog"), {
  ssr: false,
});
const BlogPage = () => {
  return (
    <GlitcheLayout>
      <PageBanner pageLink={"blog-dark"} pageName={"Blog"} />
      <Blog />
    </GlitcheLayout>
  );
};
export default BlogPage;
