import React from 'react';

import MobileClients from '../components/MobileClients';

import appData from '../appData';

class Page_Company extends React.PureComponent {
          
  render() {

    return (
      <MobileClients
        name={appData.companyName}
        clients={appData.clientsArr}
      />
    );
    
  }

}
    
export default Page_Company;
    