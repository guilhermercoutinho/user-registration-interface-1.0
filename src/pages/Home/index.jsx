import { useState, useRef } from "react";
import { useHistory } from "react-router-dom";

import axios from "axios";

import People from "../../assets/people.svg";
import Arrow from "../../assets/arrow.svg";

import H1 from "../../components/Title";
import ContainerItens from "../../components/ContainerItens";

import {
  Container,
  Image,
  InputLabel,
  Input,
  Button,
} from "./styles";

function Home() {
  const [users, setUsers] = useState([]);
  const history = useHistory()
  const inputName = useRef();
  const inputAge = useRef();

  async function addNewUser() {
    const { data: newUser } = await axios.post("http://localhost:3000/users", {
      name: inputName.current.value,
      age: inputAge.current.value,
    });

    setUsers([...users, newUser]);

    history.push("/usuarios")
  }

  return (
    <Container>
      <Image src={People} alt="logo-imagem" />
      <ContainerItens>
        <H1>Olá!</H1>

        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Nome"></Input>

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder="Idade"></Input>

        <Button onClick={addNewUser}>
          Cadastrar <img src={Arrow} alt="seta" />
        </Button>
      </ContainerItens>
    </Container>
  );
}

export default Home;
