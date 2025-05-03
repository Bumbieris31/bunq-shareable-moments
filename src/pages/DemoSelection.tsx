import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';

const Card = styled.div`
  background: rgba(255, 255, 255, 0.85);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
  border-radius: 32px;
  padding: 3rem 2rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 320px;
`;

const Center = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: #222;
  margin-bottom: 2rem;
  font-size: 2.5rem;
  font-weight: 700;
`;

const DemoButton = styled.button`
  background: linear-gradient(90deg, #219653, #27ae60, #6fcf97, #56ccf2, #2d9cdb, #2f80ed, #9b51e0, #eb5757, #f2994a, #f2c94c);
  color: white;
  border: none;
  padding: 1.2rem 2.5rem;
  font-size: 1.2rem;
  border-radius: 25px;
  cursor: pointer;
  font-weight: 600;
  margin: 0.5rem 0;
  width: 260px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  transition: transform 0.2s, box-shadow 0.2s;
  background-size: 200% 200%;
  animation: rainbow 3s linear infinite alternate;

  @keyframes rainbow {
    0% { background-position: 0% 50%; }
    100% { background-position: 100% 50%; }
  }

  &:hover {
    transform: scale(1.07);
    box-shadow: 0 4px 16px rgba(0,0,0,0.12);
  }
`;

const DemoSelection = () => {
  const navigate = useNavigate();

  return (
    <Center>
      <Card>
        <Title>Choose Your Demo</Title>
        <DemoButton onClick={() => navigate('/sinterklaas-demo')}>
          Sinterklaas Demo
        </DemoButton>
        <DemoButton onClick={() => navigate('/birthday-demo')}>
          Birthday Demo
        </DemoButton>
      </Card>
    </Center>
  );
};

export default DemoSelection; 