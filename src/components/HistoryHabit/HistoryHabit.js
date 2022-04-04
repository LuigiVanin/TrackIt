import Theme from "../../styles/theme";
import { HistoryHabitBox, HistorytInfo, SymbolBox } from "./HistoryHabit.style";

function HistoryHabit(props) {
    const { history } = props;
    return (
        <>
            <h1 className="availabel">Hábitos - {history.day}</h1>
            {history.habits.map((habit) => {
                return (
                    <HistoryHabitBox>
                        <HistorytInfo>
                            <h2>{habit.name}</h2>
                            {habit.done ? (
                                <p className="done">Hábito concluído</p>
                            ) : (
                                <p>Hábito não concluído</p>
                            )}
                        </HistorytInfo>

                        {habit.done ? (
                            <SymbolBox color={Theme.colors.green}>
                                <ion-icon name="checkmark-done"></ion-icon>
                            </SymbolBox>
                        ) : (
                            <SymbolBox color={Theme.colors.red}>
                                <ion-icon name="close"></ion-icon>
                            </SymbolBox>
                        )}
                    </HistoryHabitBox>
                );
            })}
        </>
    );
}

export default HistoryHabit;
