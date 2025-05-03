import styled from '@emotion/styled';
import { useMemo } from 'react';

const Card = styled.div`
  background: rgba(255, 255, 255, 0.92);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
  border-radius: 32px;
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
`;

const ConfettiBackground = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
`;

const BirthdayVisual = styled.div`
  position: absolute;
  bottom: 10px;
  right: -30px;
  width: 160px;
  height: 160px;
  opacity: 0.13;
  z-index: 1;
  pointer-events: none;
`;

const Center = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: #222;
  margin-bottom: 1.5rem;
  font-size: 2rem;
  font-weight: 700;
  z-index: 2;
`;

const Message = styled.p`
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 1.5rem;
  white-space: pre-line;
  text-align: left;
  z-index: 2;
`;

const Trees = styled.div`
  font-size: 1rem;
  color: #27ae60;
  margin-bottom: 1.5rem;
  text-align: center;
  z-index: 2;
`;

const ShareButton = styled.button`
  background: linear-gradient(90deg, #219653, #27ae60, #6fcf97, #56ccf2, #2d9cdb, #2f80ed, #9b51e0, #eb5757, #f2994a, #f2c94c);
  color: white;
  border: none;
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  border-radius: 25px;
  cursor: pointer;
  font-weight: 600;
  margin-top: 1rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  transition: transform 0.2s, box-shadow 0.2s;
  background-size: 200% 200%;
  animation: rainbow 3s linear infinite alternate;
  z-index: 2;

  @keyframes rainbow {
    0% { background-position: 0% 50%; }
    100% { background-position: 100% 50%; }
  }

  &:hover {
    transform: scale(1.07);
    box-shadow: 0 4px 16px rgba(0,0,0,0.12);
  }
`;

const names = [
  'Alex', 'Jamie', 'Taylor', 'Sam', 'Robin', 'Casey', 'Jordan', 'Morgan', 'Riley', 'Skyler', 'You'
];

function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const BirthdayDemo = () => {
  const { name, trees, message } = useMemo(() => {
    const name = names[getRandomInt(0, names.length - 1)];
    const trees = getRandomInt(1, 50);
    const message = `Happy Birthday, ${name}! 🎉\n\nWishing you a fantastic year ahead filled with joy, adventure, and lots of bunq moments.\n\nDid you know? You've helped plant ${trees} trees this year! 🌳`;
    return { name, trees, message };
  }, []);

  const handleShare = () => {
    const shareText = `${message}\n\nNumber of trees planted: ${trees}`;
    if (navigator.share) {
      navigator.share({ title: 'Birthday Demo', text: shareText });
    } else {
      window.alert('Sharing is not supported in this browser.');
    }
  };

  return (
    <Center>
      <Card>
        <ConfettiBackground>
          <svg width="100%" height="100%" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="60" r="10" fill="#eb5757" fillOpacity="0.5" />
            <circle cx="120" cy="30" r="7" fill="#f2994a" fillOpacity="0.5" />
            <circle cx="200" cy="50" r="8" fill="#27ae60" fillOpacity="0.5" />
            <circle cx="300" cy="40" r="6" fill="#2d9cdb" fillOpacity="0.5" />
            <rect x="80" y="120" width="12" height="12" rx="3" fill="#f2c94c" fillOpacity="0.5" />
            <rect x="250" y="100" width="10" height="10" rx="2" fill="#9b51e0" fillOpacity="0.5" />
            <circle cx="350" cy="80" r="9" fill="#6fcf97" fillOpacity="0.5" />
            <circle cx="60" cy="200" r="8" fill="#2f80ed" fillOpacity="0.5" />
            <rect x="320" y="180" width="14" height="14" rx="4" fill="#f2994a" fillOpacity="0.5" />
            <circle cx="180" cy="300" r="7" fill="#eb5757" fillOpacity="0.5" />
            <rect x="100" y="320" width="10" height="10" rx="2" fill="#27ae60" fillOpacity="0.5" />
            <circle cx="350" cy="350" r="8" fill="#f2c94c" fillOpacity="0.5" />
            <circle cx="60" cy="350" r="6" fill="#9b51e0" fillOpacity="0.5" />
            <rect x="200" y="370" width="12" height="12" rx="3" fill="#2d9cdb" fillOpacity="0.5" />
          </svg>
        </ConfettiBackground>
        <BirthdayVisual>
          <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="60" cy="100" rx="40" ry="15" fill="#f2c94c" />
            <rect x="40" y="60" width="40" height="40" rx="12" fill="#eb5757" />
            <rect x="55" y="40" width="10" height="20" rx="5" fill="#6fcf97" />
            <circle cx="60" cy="40" r="6" fill="#f2994a" />
            <rect x="50" y="80" width="20" height="8" rx="4" fill="#fff3cd" />
          </svg>
        </BirthdayVisual>
        <Title>Birthday Demo</Title>
        <Message>{message}</Message>
        <Trees>
          <strong>Trees planted:</strong> {trees}
        </Trees>
        <ShareButton onClick={handleShare}>Share</ShareButton>
      </Card>
    </Center>
  );
};

export default BirthdayDemo; 