import { useCallback, useContext, useState } from "react";
import { ReactComponent as CopyIcon } from "../../assets/copy-plus.svg";
import { ReactComponent as CopyDoneIcon } from "../../assets/copy-check.svg";
import { ReactComponent as EditIcon } from "../../assets/edit.svg";
import {
  ContactItemWrapper,
  PictureWrapper,
  PersonalDataWrapper,
  NameWrapper,
  PhoneWrapper,
  FunctionIconsWrapper,
  Paragraph,
} from "./ContactItem.styles.js";
import { Img } from "../PhoneInput/PhoneInput.styles.js";
import { COUNTRY_LIST } from "../../utils/constants/country_list.js";
import { SvgIconButton } from "../SvgIconButton/SvgIconButton.jsx";
import { ReactComponent as TrashIcon } from "../../assets/trash.svg";
import { ModalModeContext } from "../../context/ModalModeContext.js";
import { useAddContactFormContext } from "../../context/ContactFormContext.js";

export const ContactItem = ({ personalData }) => {
  const { name, prefix, phone, picture } = personalData;
  const [isExtended, setIsExtended] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const {
    setPhoneValue,
    setPrefixValue,
    setPhoneLengthValue,
    setImageSrc,
    setNameValue,
    deleteContact,
  } = useAddContactFormContext();

  function handlerIsExtended() {
    setIsExtended((prev) => !prev);
  }
  const { handleEditMode, setEditedContactId } = useContext(ModalModeContext);

  const focusToEditContact = useCallback(
    (e) => {
      e.stopPropagation();
      handleEditMode(personalData.id);
      setNameValue(name);
      setPhoneValue(phone);
      setPrefixValue(prefix);
      setPhoneLengthValue(phone.length);
      setImageSrc(picture);
      setEditedContactId(personalData.id);
    },
    [
      handleEditMode,
      phone,
      prefix,
      picture,
      setPhoneValue,
      setPrefixValue,
      setImageSrc,
      setPhoneLengthValue,
      setNameValue,
      name,
      personalData.id,
      setEditedContactId,
    ]
  );

  const handleDelete = useCallback(() => {
    deleteContact(personalData.id);
  }, [deleteContact, personalData.id]);

  const country = COUNTRY_LIST.find((item) => item.phone === prefix);

  const copyHandler = useCallback((textToCopy) => {
    return (e) => {
      e.stopPropagation();
      navigator.clipboard.writeText(textToCopy).then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 1000);
      });
    };
  }, []);

  return (
    <ContactItemWrapper onClick={handlerIsExtended} $isExtended={isExtended}>
      <PersonalDataWrapper $isExtended={isExtended}>
        <PictureWrapper $isExtended={isExtended}>
          <img src={picture} alt="zdjęcie profilowe"></img>
        </PictureWrapper>
        <NameWrapper $isExtended={isExtended}>
          <p>{name}</p>
        </NameWrapper>
        <FunctionIconsWrapper>
          <SvgIconButton
            svg={isCopied ? <CopyDoneIcon /> : <CopyIcon />}
            onClick={copyHandler(phone)}
          />
          <SvgIconButton svg={<EditIcon />} onClick={focusToEditContact} />
          <SvgIconButton svg={<TrashIcon />} onClick={handleDelete} />
        </FunctionIconsWrapper>

        <PhoneWrapper $isExtended={isExtended}>
          {country && (
            <Img
              src={require(`../../assets/flags/${country.flag}.png`)}
              alt={country.label}
            />
          )}
          <Paragraph>
            {prefix} {phone}
          </Paragraph>
        </PhoneWrapper>
      </PersonalDataWrapper>
    </ContactItemWrapper>
  );
};
