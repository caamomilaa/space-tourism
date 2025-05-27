import { TABS } from '../../../constants/destination/destinationTabs';

const Tabs = ({ activeTab, setActiveTab }) => {
  return (
    <>
      <div>
        <ul>
          {TABS.map((tab, index) => (
            <li
              key={tab}
              //   $activeTab={activeTab}
              //   $currentTab={index}
              onClick={() => setActiveTab(index)}
            >
              {tab}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default Tabs;
