import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import axios from "axios";

import Avatar from "../../assets/avatar.svg";
import Arrow from "../../assets/arrow.svg";
import Trash from "../../assets/trash.svg";

import {
  Container,
  H1,
  Image,
  ContainerItens,
  Button,
  User,
} from "./styles";

function Users() {
  const [users, setUsers] = useState([]);
  const history = useHistory()

  useEffect(() => {
    async function fetchUsers() {
      const { data: newUsers } = await axios.get("http://localhost:3000/users");

      setUsers(newUsers);
    }

    fetchUsers()
  }, []);

  async function deleteUser(userId) {
    await axios.delete(`http://localhost:3000/users/${userId}`)
    const newUsers = users.filter((user) => user.id !== userId);

    setUsers(newUsers);
  }

  function goBackPage() {
    history.push("/")
  }

  return (
    <Container>
      <Image src={Avatar} alt="logo-imagem" />
      <ContainerItens>
        <H1>Usuários</H1> 

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p>
              <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}>
                <img src={Trash} alt="lata-de-lixo" />
              </button>
            </User>
          ))}
        </ul>

        <Button onClick={goBackPage}>
          <img src={Arrow} alt="seta" /> Voltar
        </Button>

      </ContainerItens>
    </Container>
  );
}

export default Users;