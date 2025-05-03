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

const SinterklaasHat = styled.div`
  position: absolute;
  bottom: 10px;
  right: -30px;
  width: 160px;
  height: 160px;
  opacity: 0.13;
  z-index: 0;
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
  z-index: 1;
`;

const Poem = styled.p`
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 1.5rem;
  white-space: pre-line;
  text-align: left;
  z-index: 1;
`;

const Trip = styled.div`
  font-size: 1rem;
  color: #2d9cdb;
  margin-bottom: 1.5rem;
  text-align: center;
  z-index: 1;
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
  z-index: 1;

  @keyframes rainbow {
    0% { background-position: 0% 50%; }
    100% { background-position: 100% 50%; }
  }

  &:hover {
    transform: scale(1.07);
    box-shadow: 0 4px 16px rgba(0,0,0,0.12);
  }
`;

const locations = [
  'Amsterdam',
  'Rotterdam',
  'Utrecht',
  'The Hague',
  'Eindhoven',
  'Groningen',
  'Maastricht',
  'Leiden',
  'Haarlem',
  'Delft',
];

function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const SinterklaasDemo = () => {
  const { location, expenses, poem } = useMemo(() => {
    const location = locations[getRandomInt(0, locations.length - 1)];
    const expenses = getRandomInt(40, 150) + '.' + getRandomInt(0, 99).toString().padStart(2, '0');
    const poem = `Sinterklaas kwam op bezoek vandaag,\nMet een tas vol boodschappen, o zo graag.\nDe kar zat vol met lekkers en fruit,\nEn koekjes die je zelf uitkiest, stuk voor stuk eruit.\n\nIn ${location} was het winkelplezier,\nMaar aan de kassa dacht ik: \"Oei, wat een getal hier!\"\nSamen hebben we gelachen om de uitgaven deze keer,\nWant boodschappen doen kostte €${expenses} weer!`;
    return { location, expenses, poem };
  }, []);

  const handleShare = () => {
    const shareText = `${poem}\n\nTrip location: ${location}\nTotal spent: €${expenses}`;
    if (navigator.share) {
      navigator.share({ title: 'Sinterklaas Demo', text: shareText });
    } else {
      window.alert('Sharing is not supported in this browser.');
    }
  };

  return (
    <Center>
      <Card>
        <SinterklaasHat>
          <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="60" cy="100" rx="40" ry="15" fill="#fff3cd" />
            <path d="M60 15 L100 100 L20 100 Z" fill="#eb5757" stroke="#b71c1c" strokeWidth="4" />
            <rect x="54" y="45" width="12" height="35" rx="6" fill="#f2c94c" />
            <rect x="58" y="45" width="4" height="35" rx="2" fill="#b71c1c" />
          </svg>
        </SinterklaasHat>
        <Title>Sinterklaas Demo</Title>
        <Poem>{poem}</Poem>
        <Trip>
          <strong>Recent trip:</strong> {location}<br />
          <strong>Total spent:</strong> €{expenses}
        </Trip>
        <ShareButton onClick={handleShare}>Share</ShareButton>
      </Card>
    </Center>
  );
};

export default SinterklaasDemo; 