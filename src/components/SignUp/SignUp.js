import { Link, useNavigate } from "react-router-dom";
import { Inputs, Button } from "../../styles/components";
import { SignUpContainer, SignUpForm } from "./SignUp.style";
import { useState } from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

import TaskItLogo from "../../assets/Logo.png";

function SignUp() {
    const DEBUG = {
        name: "Luis Felipe Vanin",
        email: "aaaaaa@gmail.com",
        password: "senha123",
        image: "https://avatars.githubusercontent.com/u/49759902?v=4",
    };
    const [registerData, setRegisterData] = useState(DEBUG);
    const [disable, setDisable] = useState("");
    const navigate = useNavigate();

    function changeRegisterData(event) {
        const target = event.target;
        registerData[target.name] = target.value;
        setRegisterData({ ...registerData });
    }

    function register(event) {
        event.preventDefault();
        setDisable("disabled");
        const URL =
            "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";
        const promise = axios.post(URL, registerData);
        promise.then((response) => {
            console.log(response.data);
            setDisable("");
            setTimeout(() => {
                navigate("/");
            }, 1000);
        });
        promise.catch((err) => {
            console.log(err.response);
            alert(err.response.data.message);
            setDisable("");
        });
    }
    return (
        <SignUpContainer>
            <img src={TaskItLogo} alt="Logo" />
            <SignUpForm onSubmit={register} className={disable}>
                <Inputs
                    type="email"
                    placeholder="email"
                    name="email"
                    onChange={changeRegisterData}
                    disabled={disable}
                />
                <Inputs
                    type="text"
                    placeholder="senha"
                    name="password"
                    onChange={changeRegisterData}
                    disabled={disable}
                />
                <Inputs
                    type="text"
                    placeholder="nome"
                    name="name"
                    onChange={changeRegisterData}
                    disabled={disable}
                />
                <Inputs
                    type="url"
                    placeholder="foto"
                    name="image"
                    onChange={changeRegisterData}
                    disabled={disable}
                />
                <Button type="submit" disabled={disable}>
                    {!disable ? <>Cadastrar</> : <ThreeDots color="white" />}
                </Button>
            </SignUpForm>
            <Link to="/">Já tem uma conta? Faça login!</Link>
        </SignUpContainer>
    );
}

export default SignUp;
