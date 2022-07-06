/** @jsx h */
import { h } from "preact";
import Dndle from "../islands/Dndle.tsx"
import Container from "../components/layout/Container.tsx"

export default function Home() {
  return (
    <Container>
        <Dndle></Dndle>
    </Container>
  );
}
