import { Button } from "@/ui-liberty/buttons";
import { Container } from "./styles";

const Account = () => {
  return (
    <Container>
      <Button variant="contained">Sign in</Button>
      <Button variant="text">Sign up</Button>
    </Container>
  );
};

export default Account;
