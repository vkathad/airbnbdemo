import { Tabs } from "flowbite-react";
import SearchTab from "../SearchTab";

export default function HeaderTab() {
  return (
    <div className="backdrop-blur-md ">
      <div className="shadow-sm" onClick={e => {
        // do not close modal if anything inside modal content is clicked
        e.stopPropagation();
      }}>
        <Tabs.Group
          aria-label="Tabs with underline"
          style="underline" className="justify-center mx-0 px-0"
        >
          <Tabs.Item active={true} title="Stays" >
                     <SearchTab></SearchTab>  
          </Tabs.Item>
          <Tabs.Item title="Experience">
            <SearchTab experiencetab={1}></SearchTab>  
          </Tabs.Item>
          <Tabs.Item title="Online Experiences">
            Settings content
          </Tabs.Item>

        </Tabs.Group>
      </div>
    </div>
  )
}