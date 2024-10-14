import 'react-native-gesture-handler';
import { Texto, Label, Button, Agendamentos } from './style';
import { FaBluesky, FaTrash } from "react-icons/fa6";

export default function ButtonPerfil() {
  return (
    <>
    <Texto>
    <h5>Para cancelar Agendamento clique em <FaTrash/> </h5>
    </Texto>
    <Agendamentos>
    <Label>Beleza Pura</Label>
    <Label>Corte de cabelo</Label>
    <Label>R$50.0</Label>
    <Button> <FaTrash/></Button>
    </Agendamentos>

    <Agendamentos>
    <Label>Beleza Pura</Label>
    <Label>Corte de cabelo</Label>
    <Label>R$50.0</Label>
    <Button> <FaTrash/></Button>
    </Agendamentos>

    <Agendamentos>
    <Label>Beleza Pura</Label>
    <Label>Corte de cabelo</Label>
    <Label>R$50.0</Label>
    <Button> <FaTrash/></Button>
    </Agendamentos>

    <Agendamentos>
    <Label>Beleza Pura</Label>
    <Label>Corte de cabelo</Label>
    <Label>R$50.0</Label>
    <Button><FaTrash/> </Button>
    </Agendamentos>
    
    </>

);
}