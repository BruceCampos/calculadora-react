import { ButtonContainer } from "./styles";

const Button = ({label, onClick, color}) => {
    return (
      <ButtonContainer onClick={onClick} style={{backgroundColor: {color}}}>
        {label}
      </ButtonContainer>
    );
  }
  
  export default Button;
  