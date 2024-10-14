import 'react-native-gesture-handler';
import { Container } from './style';
import CardPerfil from '../../components/CardPerfilUser';
import InputPerfil from '../../components/InputPerfil';
import Menu from '../../components/Menu';
import { FaBluesky } from "react-icons/fa6";

export default function Perfil() {
  return (
    <>
      <Container>
        <CardPerfil/>
        <h3><FaBluesky/> Histórico Agendamentos <FaBluesky/></h3>
        {/* <img src="../../../assets/images/designEstrela.png" alt="elementos do design" /> */}
        <InputPerfil/>
        <img className='img-dois' src="../../../assets/images/designEstrela.png" alt="elementos do design" />
      </Container>
      <Menu/>

    </>
  );
}