import ContactsInfo from "@/components/ContactsInfo";
import PageBanner from "@/components/PageBanner";
import GlitcheLayout from "@/layouts/GlitcheLayout";
import "@css/template-dark/dark.css";
const Contacts = () => {
  return (
    <GlitcheLayout>
      <PageBanner
        pageName={"Contacts"}
        pageLink={"contacts-dark"}
      />
      <ContactsInfo />
    </GlitcheLayout>
  );
};
export default Contacts;
