import {
  DatePicker,
  DatePickerProvider,
  useDatePickGetter,
  useDatePickReset,
} from "@bcad1591/react-date-picker";
import React, { useState } from "react";
import GuestCountTab from "./GuestCountTab";
import SerchByRegion from "./SerchByRegion";

export default function SearchTab(props) {
  const experiencetab = props.experiencetab ? props.experiencetab : 0;

  const [tabindex, setTabIndex] = useState(0);
  const [guestCountData, setGuestCountData] = useState("Add Guest");
  const { pickedDates } = useDatePickGetter();

  const resetFunc = useDatePickReset();
  const firstTab = () => setTabIndex(0);
  const secondTab = () => setTabIndex(1);
  const thirdTab = () => setTabIndex(2);
  const forthTab = () => setTabIndex(3);
  function guestcount(data) {
    let filtered = data.filter(function (el) {
      return el.value > 0;
    });
    let totalguest = filtered.map((todo) => {
      return todo.title + ":" + todo.value;
    });
    if (totalguest == "") {
      totalguest = "Add Guest";
    }
    setGuestCountData(totalguest);
  }

  return (
    <>
      <div className="relative rounded-xl overflow-auto p-0">
        <div className="grid grid-cols-4 divide-x  p-1  border-black ">
          <div
            className="rounded-full hover:bg-gray-300 p-0"
            onClick={firstTab}
          >
            <div className="pl-8">
              <label className="block text-gray-700 text-sm ">Where</label>
              <input
                id="where"
                type="text"
                placeholder="Search Destination"
                className="border-none p-0 bg-transparent  focus:border-none focus:outline-none focus:border-0"
              />
            </div>
          </div>
          {experiencetab === 0 && (
            <>
              <div
                className="rounded-full hover:bg-gray-300 p-0"
                onClick={secondTab}
              >
                <div className="pl-8">
                  <label className="block text-gray-700 text-sm ">
                    Check In
                  </label>
                  <span>
                    {pickedDates.firstPickedDate
                      ? pickedDates.firstPickedDate.toLocaleDateString()
                      : "Add date"}
                  </span>
                </div>
              </div>
              <div
                className="rounded-full hover:bg-gray-300 p-0"
                onClick={thirdTab}
              >
                <div className="pl-8">
                  <label className="block text-gray-700 text-sm ">
                    Check Out
                  </label>
                  <span>
                    {pickedDates.secondPickedDate
                      ? pickedDates.firstPickedDate.toLocaleDateString()
                      : "Add date"}
                  </span>
                </div>
              </div>
            </>
          )}
          {experiencetab === 1 && (
            <div
              className="rounded-full hover:bg-gray-300 p-0"
              onClick={secondTab}
            >
              <div className="pl-8">
                <label className="block text-gray-700 text-sm ">Add date</label>
                <span>
                  {pickedDates.firstPickedDate
                    ? pickedDates.firstPickedDate.toLocaleDateString()
                    : "Add date"}{" "}
                  {pickedDates.secondPickedDate
                    ? " - " + pickedDates.secondPickedDate.toLocaleDateString()
                    : ""}{" "}
                </span>
              </div>
            </div>
          )}

          <div
            className="rounded-full hover:bg-gray-300 p-0"
            onClick={forthTab}
          >
            <div className="pl-8 flex ">
              <div>
                <label className="block text-gray-700 text-sm ">Who</label>
                <span>{guestCountData}</span>
              </div>
              <div className="ml-4">
                <button className="rounded-full bg-pink-600 text-white p-2 pr-6 flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 mx-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute z-10">
        <div>
          {tabindex === 0 && <SerchByRegion></SerchByRegion>}
          {tabindex === 1 && <DatePicker disablePreviousDays />}
          {tabindex === 2 && <DatePicker disablePreviousDays />}
          {tabindex === 3 && (
            <GuestCountTab guestcount={guestcount}></GuestCountTab>
          )}
          {/* <button type="button" onClick={resetFunc}>
                                Reset
                            </button>  */}
        </div>
      </div>
    </>
  );
}
