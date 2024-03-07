import ContactsInfo from "@/components/rtl/ContactsInfo";
import PageBanner from "@/components/rtl/PageBanner";
import GlitcheLayout from "@/layouts/rtl/GlitcheLayout";
import "@css/rtl.css";

const Contacts = () => {
  return (
    <GlitcheLayout>
      <PageBanner pageName={"جهات الاتصال"} pageLink={"contacts-rtl"} />
      <ContactsInfo />
    </GlitcheLayout>
  );
};
export default Contacts;
