import { ContainerItens as Container } from "./styles";

function ContainerItens({children, isBlur}) {
    return <Container isBlur={true}>{children}</Container>
}

export default ContainerItens