import { Carousel } from "flowbite-react";

export default function GridCom() {


    return (

        <div className="grid grid-cols-4 gap">
            <div className="p-4 rounded-xl">
                <div className="h-80 relative rounded-xl">
                    <Carousel slide={false} leftControl={<a className="group invisible group-hover:visible" type="button" aria-label="Previous slide"> <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10"><svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"></path></svg></span></a> } 
                            
                            rightControl={<a className="group invisible group-hover:visible" data-testid="carousel-right-control" type="button" aria-label="Next slide"><span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10"><svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path></svg></span></a>}  >
                        <img className="rounded-xl" src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                            alt="firs"
                        />
                        <img className="rounded-xl" src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
                            alt="firs"
                        />
                    </Carousel>

                   

                    <h1 className="font-bold text-base/6 absolute top-0 right-0 mx-4 mt-6  " >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 stroke-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>


                    </h1>
                </div>
                <div>

                </div>
                <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions 2021
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of 2021 so
                    far, in reverse chronological order.
                </p>
            </div>

            <div className="p-4 rounded-xl">
                <div className="h-80 relative rounded-xl">
                    <Carousel slide={false} leftControl={<a className="group invisible group-hover:visible" type="button" aria-label="Previous slide"> <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10"><svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"></path></svg></span></a> } 
                            
                            rightControl={<a className="group invisible group-hover:visible" data-testid="carousel-right-control" type="button" aria-label="Next slide"><span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10"><svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path></svg></span></a>}  >
                        <img className="rounded-xl" src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                            alt="firs"
                        />
                        <img className="rounded-xl" src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
                            alt="firs"
                        />
                    </Carousel>

                   

                    <h1 className="font-bold text-base/6 absolute top-0 right-0 mx-4 mt-6  " >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 stroke-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>


                    </h1>
                </div>
                <div>

                </div>
                <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions 2021
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of 2021 so
                    far, in reverse chronological order.
                </p>
            </div>
            <div className="p-4 rounded-xl">
                <div className="h-80 relative rounded-xl">
                    <Carousel slide={false} leftControl={<a className="group invisible group-hover:visible" type="button" aria-label="Previous slide"> <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10"><svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"></path></svg></span></a> } 
                            
                            rightControl={<a className="group invisible group-hover:visible" data-testid="carousel-right-control" type="button" aria-label="Next slide"><span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10"><svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path></svg></span></a>}  >
                        <img className="rounded-xl" src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                            alt="firs"
                        />
                        <img className="rounded-xl" src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
                            alt="firs"
                        />
                    </Carousel>

                   

                    <h1 className="font-bold text-base/6 absolute top-0 right-0 mx-4 mt-6  " >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 stroke-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>


                    </h1>
                </div>
                <div>

                </div>
                <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions 2021
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of 2021 so
                    far, in reverse chronological order.
                </p>
            </div>
            <div className="p-4 rounded-xl">
                <div className="h-80 relative rounded-xl">
                    <Carousel slide={false} leftControl={<a className="group invisible group-hover:visible" type="button" aria-label="Previous slide"> <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10"><svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"></path></svg></span></a> } 
                            
                            rightControl={<a className="group invisible group-hover:visible" data-testid="carousel-right-control" type="button" aria-label="Next slide"><span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10"><svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path></svg></span></a>}  >
                        <img className="rounded-xl" src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                            alt="firs"
                        />
                        <img className="rounded-xl" src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
                            alt="firs"
                        />
                    </Carousel>

                   

                    <h1 className="font-bold text-base/6 absolute top-0 right-0 mx-4 mt-6  " >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 stroke-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>


                    </h1>
                </div>
                <div>

                </div>
                <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions 2021
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of 2021 so
                    far, in reverse chronological order.
                </p>
            </div>
            <div className="p-4 rounded-xl">
                <div className="h-80 relative rounded-xl">
                    <Carousel slide={false} leftControl={<a className="group invisible group-hover:visible" type="button" aria-label="Previous slide"> <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10"><svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"></path></svg></span></a> } 
                            
                            rightControl={<a className="group invisible group-hover:visible" data-testid="carousel-right-control" type="button" aria-label="Next slide"><span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10"><svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path></svg></span></a>}  >
                        <img className="rounded-xl" src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                            alt="firs"
                        />
                        <img className="rounded-xl" src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
                            alt="firs"
                        />
                    </Carousel>

                   

                    <h1 className="font-bold text-base/6 absolute top-0 right-0 mx-4 mt-6  " >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 stroke-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>


                    </h1>
                </div>
                <div>

                </div>
                <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions 2021
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of 2021 so
                    far, in reverse chronological order.
                </p>
            </div>
            <div className="p-4 rounded-xl">
                <div className="h-80 relative rounded-xl">
                    <Carousel slide={false} leftControl={<a className="group invisible group-hover:visible" type="button" aria-label="Previous slide"> <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10"><svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"></path></svg></span></a> } 
                            
                            rightControl={<a className="group invisible group-hover:visible" data-testid="carousel-right-control" type="button" aria-label="Next slide"><span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10"><svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path></svg></span></a>}  >
                        <img className="rounded-xl" src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                            alt="firs"
                        />
                        <img className="rounded-xl" src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
                            alt="firs"
                        />
                    </Carousel>

                   

                    <h1 className="font-bold text-base/6 absolute top-0 right-0 mx-4 mt-6  " >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 stroke-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>


                    </h1>
                </div>
                <div>

                </div>
                <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions 2021
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of 2021 so
                    far, in reverse chronological order.
                </p>
            </div>


        </div>
    );
}
