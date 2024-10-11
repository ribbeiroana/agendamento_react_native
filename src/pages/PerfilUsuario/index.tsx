import 'react-native-gesture-handler';
import { Container } from './style';
import CardPerfil from '../../components/CardPerfilUser';
import InputPerfil from '../../components/InputPerfil';


export default function Perfil() {
  return (
    <>
      <Container>
        <CardPerfil/>
        <h3>Histórico Agendamentos</h3>
        <img src="../../../assets/images/designEstrela.png" alt="elementos do design" />
        <InputPerfil></InputPerfil>
        <img className='img-dois' src="../../../assets/images/designEstrela.png" alt="elementos do design" />
      </Container>
    </>
  );
}