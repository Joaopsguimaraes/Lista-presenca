import { Container } from "./styled";

interface CardProps{
    name: string;
    time:string;
}

export function Card({name, time}:CardProps){
    return(
        <Container>
            <strong>{name}</strong>
            <small>{time}</small>
        </Container>
    )
}