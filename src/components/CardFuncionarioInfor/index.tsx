import 'react-native-gesture-handler';
import { Container, Buttons, ButtonHorarios, ButtonServicos } from './style';
import { FaHeart, FaClock, FaCheck } from "react-icons/fa";

export default function CardFuncionario() {
  return (
    <>
      <Container>
        <h2>Nome Funcionário <FaHeart /></h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit</p>

        <Buttons>
          <ButtonServicos>
            <label>Serviços Serviços <span>R$30,00</span></label>
            <button><FaCheck /> Agendar</button>
          </ButtonServicos>


          <ButtonServicos>
            <label>Serviços Serviços <span>R$30,00</span></label>
            <button><FaCheck /> Agendar</button>
          </ButtonServicos>

          <ButtonServicos>
            <label>Serviços Serviços <span>R$30,00</span></label>
            <button><FaCheck /> Agendar</button>
          </ButtonServicos>
        </Buttons>


        <ButtonHorarios>
          <button><FaClock /> 8:00</button>
          <button><FaClock /> 9:00</button>
          <button><FaClock /> 10:00</button>
          <button><FaClock /> 11:00</button>
          <button><FaClock /> 12:00</button>
          <button><FaClock /> 13:00</button>
        </ButtonHorarios>
    
      </Container>
    </>
  );
}


{/* <button><FaBluesky /><p>Serviços Serviços R$30,00</p></button>
<button><FaBluesky /><p>Serviços Serviços R$30,00</p></button> */}