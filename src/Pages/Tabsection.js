import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';

import Applied from './Applied';
import Saved from './Saved';
import MyJobs from './MyJobs';

export default function Tabsection() {
    return (
        <Tabs isFitted variant='enclosed' >
            <TabList>
                <Tab fontWeight='bold'>Applied</Tab>
                <Tab fontWeight='bold'>Saved</Tab>
                <Tab fontWeight='bold'>Job Alerts</Tab>
            </TabList>

            <TabPanels>
                <TabPanel>
                    
                    <Applied/>
                    
                </TabPanel>

                <TabPanel>
                    <Saved/>
                </TabPanel>
                <TabPanel>
                    <MyJobs/>
                </TabPanel>
            </TabPanels>
        </Tabs>
    );
}