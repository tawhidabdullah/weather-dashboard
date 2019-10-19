import React from 'react';


function App() {
  return (
   <div className='DashboardContent'> 
        <div className='DashboardContent__weatherIconBox'>
            <i className='fa fa-cloud' />
        </div>
        <div className='DashboardContent__location'>
            Shamoly Square, Ring Road, Dhaka, Bangladesh
        </div>

        <div className='DashboardContent__date'>
            19 octobor, 2019
        </div>
   </div>
  );
}

export default App;
