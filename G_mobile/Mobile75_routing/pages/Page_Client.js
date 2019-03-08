import React from 'react';

import MobileClientInfo from '../components/MobileClientInfo';

import appData from '../appData';

class Page_Client extends React.PureComponent {
          
  render() {

    // раз написано <Route path="/client/:clid" component={Page_Client} />
    // значит Page_Client получит то что в УРЛе после /client/ под именем props.match.params.clid в виде строки
    let clientId=parseInt(this.props.match.params.clid);

    let clientData=appData.clientsArr.find( c => c.id==clientId );

    return (
      <MobileClientInfo
        info={clientData}
      />
    );
    
  }

}
    
export default Page_Client;
    