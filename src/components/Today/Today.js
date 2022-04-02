import dayjs from "dayjs";
import { useContext } from "react";
import TodayContext from "../../contexts/TodayContext";
import { Container } from "../../styles/components";
import Theme from "../../styles/theme";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import TodayHabit from "../TodayHabit/TodayHabit";
import { TodayContainer, HabitContainer, Title } from "./Today.style";

function TodayPage() {
    const weekdays = [
        "Domingo",
        "Segunda",
        "Terça",
        "Quarta",
        "Quinta",
        "Sexta",
        "Sábado",
    ];
    const { todayHabits } = useContext(TodayContext);
    console.log(todayHabits);

    function todayHabitDonePercentage() {
        if (todayHabits.length === 0) return 0;
        let counter = 0;
        todayHabits.forEach((item) => {
            counter += item.done;
        });
        return Math.ceil((counter / todayHabits.length) * 100);
    }

    function renderSubtitleText() {
        const percentage = todayHabitDonePercentage();
        return percentage === 0 ? (
            "Nenhum hábito concluído"
        ) : (
            <span>Foram concluídos {percentage}% dos hábitos</span>
        );
    }

    return (
        <>
            <Header />
            <Container width="100%" color={Theme.colors.backgroundGray}>
                <TodayContainer>
                    <Title>
                        <h1>
                            {weekdays[dayjs().day()]}, {dayjs().format("DD/MM")}
                        </h1>
                        <p>{renderSubtitleText()}</p>
                    </Title>
                    <HabitContainer>
                        {todayHabits.map((habit) => {
                            return <TodayHabit data={habit} key={habit.id} />;
                        })}
                    </HabitContainer>
                </TodayContainer>
            </Container>
            <Footer />
        </>
    );
}

export default TodayPage;
