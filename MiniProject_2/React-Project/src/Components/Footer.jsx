import React from 'react';
import { MDBFooter, MDBContainer } from 'mdb-react-ui-kit';
import CallMeLogo from './CallMeLogo';

export default function App() {
  return (
    <MDBFooter className='text-center text-white' style={{ backgroundColor: '#21081a' }}>
      <MDBContainer className='p-4'></MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2024 Copyright:
        <a className='text-white' href='http://localhost:5173/coffeelist'> KITCHEN IDEAS</a>
        {/* <CallMeLogo></CallMeLogo> */}
      </div>
    </MDBFooter>
  );
}