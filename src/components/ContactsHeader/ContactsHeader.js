import { HeaderWrapper, Wrapper } from "./ContactsHeader.styles.js";
import { ThemeContext } from "../../context/AppThemeContext.js";
import { ThemePicker } from "../ThemePicker/ThemePicker.js";
import { useContext } from "react";
import { SvgIconButton } from "../SvgIconButton/SvgIconButton.jsx";
import { IsAscendingContext } from "../../context/IsAscendingContext.js";
import { ReactComponent as SortAzIcon } from "../../assets/sort-ascending-letters.svg";
import { ReactComponent as SortZaIcon } from "../../assets/sort-descending-letters.svg";

export function ContactsHeader() {
  const { setTheme } = useContext(ThemeContext);
  const isAscendingContextValue = useContext(IsAscendingContext);
  return (
    <HeaderWrapper>
      <Wrapper>
        <h1>Moje kontakty</h1>
      </Wrapper>
      <ThemePicker setTheme={setTheme} />
      <SvgIconButton
        svg={
          isAscendingContextValue.isAscending ? <SortZaIcon /> : <SortAzIcon />
        }
        onClick={() => isAscendingContextValue.setIsAscending((prev) => !prev)}
      />
    </HeaderWrapper>
  );
}
