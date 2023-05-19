import { useEffect, useReducer, useState } from "react";

const initialGuest = [
    {
      id: 1,
      title: "Adults",
      description:"Ages 13 or above",
      max:12,
      min:0,
      minbtndisable: true,
      maxbtndisable: false,
      value:0
    },
    {
        id: 2,
        title: "Children",
        description:"Ages 2–12",
        max:12,
        min:0,
        minbtndisable: true,
        maxbtndisable: false,
        value:0
      },
  ];

  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD_GUEST":
        return state.map((todo) => {
           
          if (todo.id === action.id) {
            let maxvalue = todo.value +1;
            if(todo.value >= 0 && maxvalue <= todo.max){
                let maxbtn = false;
                if(todo.max == maxvalue){
                    maxbtn = true;
                }
                return { ...todo, minbtndisable: false,maxbtndisable: maxbtn,value: maxvalue};
            }
            
            return todo;
          } else {
            return todo;
          }
        });
    case "REMOVE_GUEST":
        return state.map((todo) => {
            if (todo.id === action.id) {
                let minvalue = todo.value - 1;
                if(todo.value <= todo.max && minvalue >= 0){
                    let minbtn = false;
                        if(todo.min == minvalue){
                            minbtn = true;
                        }
                       
                    return { ...todo, minbtndisable: minbtn,maxbtndisable: false,value: minvalue};
                }
                if(minvalue == 0){
                    
                    return { ...todo, minbtndisable: true};
                }

                return { ...todo, value: todo.value - 1 };
            } else {
            return todo;
            }
        });   
      default:
        return state;
    }
  };

export default function GuestCountTab(props) {

    const [Guest, dispatch] = useReducer(reducer, initialGuest);
    
    useEffect(() => {
         props.guestcount(Guest)
    }, [Guest]);
    

    const [adultAdd, setAdultAdd] = useState(false);
    const [adultMinus, setAdultMinus] = useState(true);
   
    const handleAddGuest = (todo) => {
          dispatch({ type: "ADD_GUEST", id: todo.id });
        // props.guestcount(Guest)
    };
      
      const handleRemoveGuest = (todo) => {
        dispatch({ type: "REMOVE_GUEST", id: todo.id });
      };  

    // const [guest, setGuest] = useState({
    //     'adult': { 'value': 0, 'max': 12, "min": 0 },
    //     'children': { 'value': 0, 'max': 12, "min": 0 },
    //     'infants': { 'value': 0, 'max': 12, "min": 0 },
    //     'pets': { 'value': 0, 'max': 12, "min": 0 },
    // });


    const adultminus = () => {
        
        
    }

    const adultadd = () => {
        
       
    }

    return (
        <>
            <div className='w-full 	'>
                <div className="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 self-end ">
                    <div className="flow-root ">
                        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                        {Guest.map((todo) => (
                            <li className="py-3 sm:py-4" key={todo.id}>
                                <div className="flex  items-center space-x-6">

                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                            {todo.title}
                                        </p>
                                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                            {todo.description}
                                        </p>
                                    </div>
                                    <button className='disabled:opacity-25' disabled={todo.maxbtndisable}  onClick={() => handleAddGuest(todo)} >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 ">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </button>
                                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">

                                        <h2>{todo.value}</h2>

                                    </div>
                                    <button  disabled={todo.minbtndisable }   onClick={() => handleRemoveGuest(todo)}   className='disabled:opacity-10'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    </button>
                                </div>
                            </li>
                        ))
                        }
                            
                            {/* <li className="py-3 sm:py-4">
                                <div className="flex  items-center space-x-6">

                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                            Adults
                                        </p>
                                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                            Ages 13 or above
                                        </p>
                                    </div>
                                    <button className='disabled:opacity-25' onClick={adultadd} disabled={adultAdd}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 ">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </button>
                                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">

                                        <h2>{guest.adult.value}</h2>

                                    </div>
                                    <button onClick={adultminus} disabled={adultMinus} className='disabled:opacity-10'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    </button>
                                </div>
                            </li> */}
                            




                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}