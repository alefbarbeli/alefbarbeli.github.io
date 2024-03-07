import ContactsInfo from "@/components/ContactsInfo";
import PageBanner from "@/components/PageBanner";
import GlitcheLayout from "@/layouts/GlitcheLayout";
const Contacts = () => {
  return (
    <GlitcheLayout>
      <PageBanner pageName={"Contacts"} pageLink={"contacts"} />
      <ContactsInfo />
    </GlitcheLayout>
  );
};
export default Contacts;
