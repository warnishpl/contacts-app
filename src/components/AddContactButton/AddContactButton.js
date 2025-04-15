import { useContext, memo } from "react";
import { ReactComponent as AddIcon } from "../../assets/add-icon.svg";
import { Wrapper, Button, ParagraphStyled } from "./AddContactButton.styles.js";
import { ModalModeContext } from "../../context/ModalModeContext.js";
import { useAddContactFormContext } from "../../context/ContactFormContext.js";
export const AddContactButton = memo(function AddContactButton() {
  const { handleAddMode } = useContext(ModalModeContext);
  const {
    setPhoneValue,
    setPrefixValue,
    setPhoneLengthValue,
    setImageSrc,
    setNameValue,
  } = useAddContactFormContext();
  const handleClick = () => {
    handleAddMode();
    setPhoneValue("");
    setPrefixValue("+48");
    setPhoneLengthValue(9);
    setImageSrc(null);
    setNameValue("");
  };

  return (
    <Wrapper>
      <Button onClick={handleClick}>
        <AddIcon />
        <ParagraphStyled>Dodaj kontakt</ParagraphStyled>
      </Button>
    </Wrapper>
  );
});
