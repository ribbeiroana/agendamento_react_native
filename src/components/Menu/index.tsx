import 'react-native-gesture-handler';
import { Container } from './style';
import { FaHouse } from "react-icons/fa6";
import { FaSearch, FaCalendarDay, FaRegHeart, FaUser } from "react-icons/fa";

export default function Menu() {
  return (
    <>
      <Container>
      <FaHouse />
      <FaSearch />
      <FaCalendarDay />
      <FaRegHeart />
      <FaUser />
      </Container>
    </>

);
}