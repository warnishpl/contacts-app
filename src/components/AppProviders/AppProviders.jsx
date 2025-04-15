import { AppThemeProvider } from "../../context/AppThemeContext";
import { ContactFormProvider } from "../../context/ContactFormContext.js";
import { ContactsListProvider } from "../../context/ContactsListContext.js";
import { IsAscendingProvider } from "../../context/IsAscendingContext.js";
import { ModalModeProvider } from "../../context/ModalModeContext.js";


export const AppProviders = ({ children }) => {
  return (
    <ContactsListProvider>
      <ModalModeProvider>
        <ContactFormProvider>
          <IsAscendingProvider>
            <AppThemeProvider>{children}</AppThemeProvider>
          </IsAscendingProvider>
        </ContactFormProvider>
      </ModalModeProvider>
    </ContactsListProvider>
  );
};