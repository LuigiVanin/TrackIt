import { NavBarTop, RoundImage } from "./Header.style";
import { Bar } from "../../styles/components";
import TrackItLogo from "../../assets/TrackIt.png";

function Header() {
    const { image } = JSON.parse(localStorage.getItem("user"));
    return (
        <Bar color="#126ba5" position="top">
            <NavBarTop>
                <img src={TrackItLogo} alt="Logo" />
                <RoundImage size="50px" image={image}></RoundImage>
            </NavBarTop>
        </Bar>
    );
}

export default Header;
