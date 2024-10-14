import 'react-native-gesture-handler';
import { Container } from './style';
import { Text, View, Image } from "react-native";
import CardFotos from '../../components/CardFotos';
import CardFuncionario from '../../components/CardFuncionarioInfor';
import Menu from '../../components/Menu';

export default function Funcionario() {
  return (
    <>
      {/* <Container> */}
        <CardFotos />
        <CardFuncionario/>
      {/* </Container> */}
      <Menu/>
    </>
  );
}
