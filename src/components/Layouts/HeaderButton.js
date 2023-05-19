import { Button } from "flowbite-react";
import { useState } from "react";
import HeaderTab from "./HeaderTab";
import { modalActions } from "../../store/modal";
import { useDispatch, useSelector } from "react-redux";

export default function HeaderButton() {
  const dispatch = useDispatch();
  const secondMenu = useSelector((state) => state.Bmodal.headerMenu);
  // const [secondMenu,SetSecondMenu] =useState(false)


  const handlerAnyWhere = () => {
    // SetSecondMenu(true)
     dispatch(modalActions.showHeader());
   }




  if (secondMenu) {

    return (
      <HeaderTab></HeaderTab>
    )

  } else {

    return (
      <>
        <div className="inline-flex rounded-3xl border-spacing-1" role="group" onClick={e => {
          // do not close modal if anything inside modal content is clicked
          e.stopPropagation();
        }} >
          <button onClick={handlerAnyWhere}
            type="button" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100  dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            AnyWhere
          </button>
          <button onClick={handlerAnyWhere}
            type="button"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100  dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            AnyWeek
          </button>
          <button onClick={handlerAnyWhere}
            type="button"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100  dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            Add Guest
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 fill-pink-600 stroke-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>
      </>
    );

  }

}
