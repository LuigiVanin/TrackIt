import { TodayBox, HabitInfo, CheckMark, Span } from "./TodayHabit.style";
import Checkmark from "../../assets/Checkmark.svg";

function TodayHabit(props) {
    const { id, name, currentSequence, highestSequence, done } = props.data;

    return (
        <TodayBox>
            <HabitInfo>
                <h1>{name}</h1>
                <p>
                    Sequência atual:
                    <Span done={done}> {currentSequence} dias</Span>
                </p>
                <p>
                    Seu recorde:
                    <Span done={done}> {highestSequence} dias</Span>
                </p>
            </HabitInfo>
            <CheckMark done={done}>
                <img src={Checkmark} alt="X" />
            </CheckMark>
        </TodayBox>
    );
}

export default TodayHabit;
