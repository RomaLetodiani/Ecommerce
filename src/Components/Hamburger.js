import { styled } from 'styled-components';

const HamburgerDiv = styled.div`
  width: 32px;
  height: 32px;
  cursor: pointer;

  span {
    width: 100%;
    height: 12.5%;
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    background-color: #fff;

    &:nth-child(1) {
      transform: ${(props) => (props.isActive ? 'rotate(45deg)' : 'rotate(0)')};
    }
    &:nth-child(2) {
      transform: ${(props) =>
        props.isActive ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${(props) => (props.isActive ? '0' : '1')};
    }
    &:nth-child(3) {
      transform: ${(props) =>
        props.isActive ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

const Hamburger = ({ isActive, setIsActive }) => {
  return (
    <HamburgerDiv
      onClick={() => setIsActive(!isActive)}
      isActive={isActive}
      className="md:hidden flex flex-col justify-around"
    >
      <span />
      <span />
      <span />
    </HamburgerDiv>
  );
};

export default Hamburger;
