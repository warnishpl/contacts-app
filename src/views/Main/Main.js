import { useContext } from "react";
import { MainBox } from "./Main.style.js";
import { AddContactButton } from "../../components/AddContactButton/AddContactButton.js";
import { ContactsHeader } from "../../components/ContactsHeader/ContactsHeader.js";
import { SearchInput } from "../../components/SearchInput/SearchInput.js";
import { ContactList } from "../../components/ContactList/ContactList.js";
import { ContactFormModal } from "../../components/ContactFormModal/ContactFormModal.js";
import { ModalModeContext } from "../../context/ModalModeContext.js";
import { SearchValueProvider } from "../../context/SearchValueContext.js";

export function Main() {
  const { modalMode } = useContext(ModalModeContext);

  return (
    <MainBox>
      <SearchValueProvider>
        <SearchInput />
        <AddContactButton />
        <ContactsHeader />
        <ContactList />
        {modalMode && <ContactFormModal />}
      </SearchValueProvider>
    </MainBox>
  );
}
