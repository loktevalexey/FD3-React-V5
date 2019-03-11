import React from 'react';

import MobileCompany from './MobileCompany';
import { withDataLoad } from './withDataLoad';

class MobileRoot extends React.PureComponent {

  fetchConfig={
    URL: "http://fe.it-academy.by/TestFetch.php",
    method: 'post',
    headers: {
        "Accept": "application/json",
    },
  };

  // HOC возвращает каждый раз НОВЫЙ, обёрнутый компонент
  // поэтому оборачивать в HOC лучше не внутри render, чтобы не рендерить каждый раз НОВЫЙ компонент
  MobileCompanyWithData=withDataLoad(this.fetchConfig,"companyData")(MobileCompany);

  render() {

    let MobileCompanyWithData=this.MobileCompanyWithData;
    return <MobileCompanyWithData /> ;

  }

}

export default MobileRoot;
