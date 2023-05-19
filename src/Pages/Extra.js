import { Tabs } from "flowbite-react";
import SearchTab from "../components/SearchTab";

export function Extra() {
  return (
    <>
      <div className="backdrop-blur-md">
        <div
          className="shadow-sm Pulse"
          onClick={(e) => {
            // do not close modal if anything inside modal content is clicked
            e.stopPropagation();
          }}
        >
          <Tabs.Group aria-label="Tabs with underline" style="underline">
            <Tabs.Item title="Stays">
              <SearchTab></SearchTab>
            </Tabs.Item>
            <Tabs.Item active={true} title="Experience">
              Dashboard content
            </Tabs.Item>
            <Tabs.Item title="Online Experiences">Settings content</Tabs.Item>
          </Tabs.Group>
        </div>
      </div>
    </>
  );
}
