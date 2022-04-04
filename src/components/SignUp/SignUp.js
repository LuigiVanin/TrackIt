import { Link, useNavigate } from "react-router-dom";
import { Inputs, Button } from "../../styles/components";
import { SignUpContainer, SignUpForm } from "./SignUp.style";
import { useState } from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

import TaskItLogo from "../../assets/Logo.png";

function SignUp() {
    const [registerData, setRegisterData] = useState({
        email: "",
        password: "",
        name: "",
        image: "",
    });
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
            if (err.response.status === 409) {
                alert(err.response.data.message);
            } else {
                alert("Algum campo do formulários estão inapropriado");
            }
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
                    required
                />
                <Inputs
                    type="text"
                    placeholder="senha"
                    name="password"
                    onChange={changeRegisterData}
                    disabled={disable}
                    required
                />
                <Inputs
                    type="text"
                    placeholder="nome"
                    name="name"
                    onChange={changeRegisterData}
                    disabled={disable}
                    required
                />
                <Inputs
                    type="url"
                    placeholder="foto"
                    name="image"
                    onChange={changeRegisterData}
                    disabled={disable}
                    required
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
