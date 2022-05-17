import { useState, useEffect } from "react";
import { Card } from "../../components/Card";
import { Container } from "./styled";

type Students = {
  name: string;
  time: string;
};

type User = {
  name: string;
  avatar: string;
}

export function Home() {
  const [studentName, setStudentName] = useState("");
  const [students, setStudents] = useState<Students[]>([]);
  const [user, setUser] = useState<User>();

  const handleAddStudent = () => {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }),
    };

    setStudents([...students, newStudent]);
    setStudentName("");
  };

  useEffect(() => {
    async function fetchData(){
      const response = await fetch("https://api.github.com/users/joaopsguimaraes");
      const data = await response.json();
      setUser({
        name: data.name,
        avatar: data.avatar_url
      });
    };
    fetchData();
  },[students])

  return (
    <Container>
      <header>
        <h2>Lista de presença</h2>
        <div>
          <strong>{user?.name}</strong>
          <img src={user?.avatar} alt="Foto do Perfil"/>
        </div>
      </header>
      <input
        type="text"
        placeholder="Digite seu nome..."
        onChange={(event) => setStudentName(event.target.value)}
        value={studentName}
      />
      <button type="button" onClick={handleAddStudent}>
        Adicionar
      </button>
      {students.map((student) => (
        <Card key={student.time} name={student.name} time={student.time} />
      ))}
    </Container>
  );
}
