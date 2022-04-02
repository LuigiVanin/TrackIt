import { Bar } from "../../styles/components";
import { NavBarBottom, ProgressBarWrapper } from "./Footer.style";
import { Link } from "react-router-dom";
import TodayContext from "../../contexts/TodayContext";
import { useContext } from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Theme from "../../styles/theme";

function Footer() {
    const { todayHabits } = useContext(TodayContext);

    const progressBarStyles = buildStyles({
        backgroundColor: Theme.colors.lightBlue,
        textColor: Theme.colors.white,
        pathColor: Theme.colors.white,
        trailColor: Theme.colors.lightBlue,
        textSize: "26px",
    });

    function todayHabitsDone() {
        if (todayHabits.length === 0) return 0;
        let counter = 0;
        todayHabits.forEach((item) => {
            counter += item.done;
        });
        return Math.ceil((counter / todayHabits.length) * 100);
    }

    return (
        <Bar position="bottom" color="white">
            <NavBarBottom>
                <Link to="/habitos">Hábitos</Link>
                <ProgressBarWrapper>
                    <Link to="/hoje/">
                        <CircularProgressbar
                            className="progress-bar"
                            value={todayHabitsDone()}
                            text="Hoje"
                            background
                            backgroundPadding={5}
                            styles={progressBarStyles}
                        />
                    </Link>
                </ProgressBarWrapper>
                <Link to="/historico">Histórico</Link>
            </NavBarBottom>
        </Bar>
    );
}

export default Footer;
