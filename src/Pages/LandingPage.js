export default function LandingPage() {
    return (<>
    <nav className="bg-purple-800 text-white flex justify-between">
      <span className="text-xl mx-3 flex  items-center">AirBnB</span>
      <ul className="px-28 py-4  flex space-x-11 justify-end">
        <li className="mx-2 cursor-pointer">Home</li>
        <li className="mx-2 cursor-pointer">About</li>
        <li className="mx-2 cursor-pointer">Contact</li>
      </ul>
    </nav>
    <main className="bg-fuchsia-100 flex justify-around">
      <div className="main py-40 pl-9">
        <div className="text-6xl">The Best Phone</div>
        <p className="py-3 w-1/3">thie is login </p>
        <div className="my-4 ">
          <button className="bg-purple-800 px-3 py-2 rounded-2xl text-white hover:text-purple-900 hover:bg-white mx-2 hover:border-2 hover:border-purple-900 ">
            BuyNow
          </button>
          <button className="bg-purple-800 px-3 py-2 rounded-2xl text-white hover:text-purple-900 hover:bg-white mx-2 hover:border-2 hover:border-purple-900 ">
            Contact us
          </button>
        </div>
      </div>
      <div className="flex items-center">
        <img src="https://media.istockphoto.com/id/1369199360/photo/portrait-of-a-handsome-young-businessman-working-in-office.jpg?s=1024x1024&w=is&k=20&c=-xjY_sj5IU0ibPJn3t8Qf63XyBlunViU3oeT2RwJ3RE=" className="w-60" />
      </div>
    </main>
  </>)
}