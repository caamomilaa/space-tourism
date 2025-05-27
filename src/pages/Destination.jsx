import { useState } from 'react';
import Tabs from '../components/tabs/destination/DestinationTabs';
import { DESTINATIONS_INFO } from '../constants/destination/destination-info';
import { TABS, TABS_INFO } from '../constants/destination/destinationTabs';

const Destination = () => {
  const [activeTab, setActiveTab] = useState(TABS_INFO.MOON);

  console.log(activeTab);

  const selectedDestination = TABS[activeTab];

  console.log(selectedDestination);

  return (
    <>
      <h1>Pick your destination</h1>
      <div>
        <img src={DESTINATIONS_INFO[selectedDestination].images} alt='' />
      </div>
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <div>
        <h2>{DESTINATIONS_INFO[selectedDestination].title}</h2>
        <p>{DESTINATIONS_INFO[selectedDestination].text}</p>
      </div>
      <div>
        <div>
          <p>AVG. DISTANCE</p>
          <span>{DESTINATIONS_INFO[selectedDestination].distance}</span>
        </div>
        <div>
          <p>EST. TRAVEL TIME</p>
          <span>{DESTINATIONS_INFO[selectedDestination].days}</span>
        </div>
      </div>
    </>
  );
};

export default Destination;
