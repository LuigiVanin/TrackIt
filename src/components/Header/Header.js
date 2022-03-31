import { NavBarTop } from "./Header.style";
import { Bar } from "../../styles/components";

function Header() {
    return (
        <Bar color="#126ba5" position="top">
            <NavBarTop>
                <h1>Topo</h1>
            </NavBarTop>
        </Bar>
    );
}

export default Header;
