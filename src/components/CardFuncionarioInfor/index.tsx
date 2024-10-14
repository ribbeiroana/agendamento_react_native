import 'react-native-gesture-handler';
import { Container,Header, Img,  Buttons, ButtonHorarios, ButtonServicos } from './style';
import { FaHeart, FaClock, FaCheck, FaCalendarCheck, FaAlignJustify } from "react-icons/fa";
import { FaBluesky } from "react-icons/fa6";

export default function CardFuncionario() {
  return (
    <>
      <Container>

        <Header>
        <Img>
        <img src="../../../assets/images/ava.jpg" alt="avatar" />
        </Img>
        <h2>Beleza Pura</h2>
        <h5>Ana Silva</h5>
        <p>Especialista em corte e coloração</p>
        <p>Rua das Flores, 123</p>
        </Header>

        <Buttons>
          <h3><FaBluesky /> Lista de Serviços </h3>
          <ButtonServicos>
            <label>Corte de cabelo (Corte masculino e feminino) <span>R$50.0</span></label>
            <button><FaBluesky /> Agendar</button>
          </ButtonServicos>

          <ButtonServicos>
            <label>Corte de cabelo (Corte masculino e feminino) <span>R$50.0</span></label>
            <button><FaBluesky /> Agendar</button>
          </ButtonServicos>

        </Buttons>


        <ButtonHorarios>
          <h4>Horários Disponíveis</h4>
          <button>
            <FaClock /> 8:00 <br></br>
            <FaCalendarCheck /> 10/10
          </button>
          <button>
            <FaClock /> 8:00 <br></br>
            <FaCalendarCheck /> 10/10
          </button>
          <button>
            <FaClock /> 8:00 <br></br>
            <FaCalendarCheck /> 10/10
          </button>
          <button>
            <FaClock /> 8:00 <br></br>
            <FaCalendarCheck /> 10/10
          </button>
        </ButtonHorarios>
      </Container>
    </>
  );
}
