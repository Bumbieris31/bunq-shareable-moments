import styled from '@emotion/styled';
import React from 'react';

const Rainbow = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  display: flex;

  & > div {
    flex: 1;
    height: 100%;
  }
`;

const colors = [
  '#219653', // green
  '#27ae60', // lighter green
  '#6fcf97', // lightest green
  '#56ccf2', // cyan
  '#2d9cdb', // blue
  '#2f80ed', // darker blue
  '#9b51e0', // purple
  '#eb5757', // red
  '#f2994a', // orange
  '#f2c94c', // yellow
];

const RainbowBackground: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <>
    <Rainbow>
      {colors.map((color, idx) => (
        <div key={idx} style={{ background: color }} />
      ))}
    </Rainbow>
    <div style={{ position: 'relative', minHeight: '100vh' }}>{children}</div>
  </>
);

export default RainbowBackground; 