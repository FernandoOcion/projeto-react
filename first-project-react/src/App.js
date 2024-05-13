import React, { useState, useRef } from "react";
import axios from "axios"

import People from "./Assets/people.svg"
import Arrow from "./Assets/arrow.svg"
import Trash from "./Assets/trash.svg"

import { Container, ContainerItens, H1, P, Button, Image, Input, Users } from "./styles"

const App = () => {

  const [users, setUsers] = useState([]);
  const inputName = useRef();
  const inputAge = useRef();


  async function addNewUser() {
    const { data: newUser } = await axios.post("http://localhost:3001/users",{
      name: inputName.current.value,
      age: inputAge.current.value,

    });

    setUsers([...users, newUser]);
  }

  function deleteUsers (userId){
    const newUsers = users.filter((user) => user.id !== userId);

    setUsers (newUsers);
  }

  return (
    <Container>
      <Image alt="logo-imagem" src={People} />

      <ContainerItens>

        <H1> Olá! </H1>

        <P>Nome:</P>
        <Input placeholder="Nome" ref={inputName}></Input>

        <P>Idade:</P>
        <Input placeholder="Idade" ref={inputAge}></Input>

        <Button onClick={addNewUser}>Cadastrar <img alt="arrow" src={Arrow} /> </Button>

        <ul>
          {users.map((user) => (
            <Users key={user.id}>
              <p>{user.name}</p><p>{user.age}</p>
              <button onClick={() => deleteUsers(user.id)}><img alt="Trash-logo" src={Trash} /></button>
            </Users>
          ))}
        </ul>

      </ContainerItens>
    </Container>

  )
}

export default App;