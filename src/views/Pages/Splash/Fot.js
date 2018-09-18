import React, { Component } from 'react';

import { inject, observer} from "mobx-react";


@inject("appStore")
@observer
class Fot extends Component {
 

  render() {

   const store = this.props.appStore;
   console.log(store)
    return (


              <div className='footer mt-2'>&copy; {store.footer}</div>
         
  
    );
  }
}

export default Fot;
