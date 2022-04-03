import { LoginContainer, LoginForm } from "./Login.style";
import { Button, Inputs } from "../../styles/components";
import { Link, useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import { useState } from "react";
import axios from "axios";

import TrackItLogo from "../../assets/Logo.png";

function Login() {
    const DEBUG = {
        email: "luisfvaninmartins@gmail.com",
        password: "senha123",
    };
    const navigate = useNavigate();
    const [loginData, setLoginData] = useState(DEBUG);
    const [disable, setDisable] = useState("");

    function changeLoginData(event) {
        const target = event.target;
        loginData[target.name] = target.value;
        setLoginData({ ...loginData });
    }

    function login() {
        setDisable("disabled");
        const URL =
            "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";
        const promise = axios.post(URL, loginData);
        promise.then((response) => {
            const localUserData = {
                name: response.data.name,
                image: response.data.image,
            };
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("user", JSON.stringify(localUserData));
            navigate("/hoje/");
        });
        promise.catch((err) => {
            console.log(err.response);
            alert(err.response.data.message);
            setDisable("");
        });
    }
    return (
        <LoginContainer>
            <img src={TrackItLogo} alt="Logo" />
            <LoginForm
                onSubmit={(event) => {
                    event.preventDefault();
                    login();
                }}
                className={disable}
            >
                <Inputs
                    placeholder="email"
                    type="email"
                    name="email"
                    onChange={changeLoginData}
                    disabled={disable}
                />
                <Inputs
                    placeholder="senha"
                    type="password"
                    name="password"
                    onChange={changeLoginData}
                    disabled={disable}
                />
                <Button type="submit" disabled={disable}>
                    {!disable ? <>Entrar</> : <ThreeDots color="white" />}
                </Button>
            </LoginForm>

            <Link to="/cadastro/">Não tem uma conta? Cadastre-se!</Link>
        </LoginContainer>
    );
}

export default Login;
