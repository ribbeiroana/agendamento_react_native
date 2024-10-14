import 'react-native-gesture-handler';
import { Container, Logos } from './style';
import { FaHouse } from "react-icons/fa6";
import { FaSearch, FaRegHeart, FaUser } from "react-icons/fa";

export default function Menu() {
  return (
    <>
      <Container>
        <Logos>
          <FaSearch />
        </Logos>
        <Logos>
          <FaRegHeart />
        </Logos>
        <Logos>
          <FaUser />
        </Logos>
      </Container>
    </>

  );
}