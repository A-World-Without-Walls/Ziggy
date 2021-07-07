import React from 'react';
import styled from 'styled-components';

import { Header } from '../../components';

export const App = () => {
  return (
   <div>
     <Header />
     <Main>
       <iframe
        src="https://fishplaces.on.gooddata.com/dashboards/embedded/#/project/h9dayklyci84zbb41lz0edzcgavkfawi/dashboard/aaAxaLgZdXxf?showNavigation=true"
        title="goodData"
        width="100%"
        height="100%"
        frameBorder="0"
       />
     </Main>
   </div>
  );
};

export default App;

const Main = styled.main`
  height: calc(100vh - 48px);
`;
