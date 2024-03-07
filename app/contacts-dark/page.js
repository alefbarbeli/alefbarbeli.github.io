import ContactsInfo from "@/components/ContactsInfo";
import PageBanner from "@/components/PageBanner";
import GlitcheLayout from "@/layouts/GlitcheLayout";
import "@css/template-dark/dark.css";
const Contacts = () => {
  return (
    <GlitcheLayout dark={true}>
      <PageBanner
        pageName={"Contacts"}
        pageLink={"contacts-dark"}
        dark={true}
      />
      <ContactsInfo />
    </GlitcheLayout>
  );
};
export default Contacts;
