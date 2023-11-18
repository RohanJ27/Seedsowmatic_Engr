import React from 'react';
import Header from './Header';
import About from './About';
import HistoricGraph from './HistoricGraph';
import Graph from './Graph';

function HistoryPage() {
  return (
    <div>
        <Header />
        <h1 className='m-5'>Historic Data</h1>

        <div className="d-flex flex-column gap-5">
            <div className='d-flex justify-content-center align-items-center gap-5'>
                <h3>Weekly Summary</h3>
                <HistoricGraph />
            </div>
            <div className='d-flex justify-content-center align-items-center gap-5'>
                <h3>Daily Summary</h3>
            <Graph defaultData={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]} defaultLabels={['Start', '9:43:18AM', '9:43:38AM', '9:44:18AM', '9:44:38AM', '9:45:18AM', '9:45:38AM', '9:46:18AM', '9:46:38AM']}/>

            </div>
        </div>
    </div>
  );
}

export default HistoryPage;