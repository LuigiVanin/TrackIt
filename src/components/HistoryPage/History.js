import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { HistoryContainer } from "./history.style";
import { Container, Title } from "../../styles/components";
import Theme from "../../styles/theme";

function History() {
    return (
        <>
            <Header />
            <Container color={Theme.colors.backgroundGray} width="100%">
                <HistoryContainer>
                    <Title>
                        <h1>Histórico</h1>
                    </Title>
                    <p>
                        Em Breve você poderá ver o histórico dos seus hábitos
                        aqui!
                    </p>
                </HistoryContainer>
            </Container>
            <Footer />
        </>
    );
}

export default History;
