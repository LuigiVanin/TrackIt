import { NavBarTop, RoundImage } from "./Header.style";
import { Bar } from "../../styles/components";
import TrackItLogo from "../../assets/TrackIt.png";
import Theme from "../../styles/theme";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";

function Header() {
    const { user } = useContext(UserContext);
    return (
        <Bar color={Theme.colors.DarkBlue} position="top">
            <NavBarTop>
                <img src={TrackItLogo} alt="Logo" />
                <RoundImage size="50px" image={user.image}></RoundImage>
            </NavBarTop>
        </Bar>
    );
}

export default Header;
