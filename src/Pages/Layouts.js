export function Layouts(){
    function buttonclick() {}
    return  (
        <>
      <div className="container">
        <div>
          <div className="relative">
            <div className="top-0 left-0 right-0">Contacts</div>
            <div>
              <div className="flex items-center gap-4 p-4">
                <img
                  className="w-12 h-12 rounded-full"
                  src="https://images.unsplash.com/photo-1491904768633-2b7e3e7fede5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3131&q=80"
                />
                <strong>Andrew Alfred</strong>
              </div>
              <div className="flex items-center gap-4 p-4">
                <img
                  className="w-12 h-12 rounded-full"
                  src="https://images.unsplash.com/photo-1491904768633-2b7e3e7fede5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3131&q=80"
                />
                <strong>Andrew Alfred</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-4 grid-cols-3 ">
          <div className="relative ">
            <img
              className="w-full aspect-square  "
              src="https://images.unsplash.com/photo-1491904768633-2b7e3e7fede5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3131&q=80"
            />
            <h1
              onClick={buttonclick}
              className="font-bold text-base/6 absolute top-0 right-0 mx-4 "
            >
              sfs
            </h1>
          </div>

          <img
            className="w-full aspect-square "
            src="https://images.unsplash.com/photo-1491904768633-2b7e3e7fede5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3131&q=80"
          />
        </div>

        <div className="row-auto flex">
          <div className="columns-1 w-1/3">
            <div className="box-content h-32 w-32 p-4 border-4">
              <h2>first</h2>
            </div>
          </div>
          <div className="columns-1 w-1/3">
            <div className="box-content h-32 w-32 p-4 border-4">
              <h2>first</h2>
            </div>
          </div>
          <div className="columns-1 w-1/3">
            <div className="box-content h-32 w-32 p-4 border-4">
              <h2>first</h2>
            </div>
          </div>
          <div className="columns-1 w-1/3">
            <div className="box-content h-32 w-32 p-4 border-4">
              <h2>first</h2>
            </div>
          </div>
          <div className="columns-1 w-1/3">
            <div className="box-content h-32 w-32 p-4 border-4">
              <h2>first</h2>
            </div>
          </div>
        </div>

        <div className="columns-3 px-5 py-5 flex-row">
          <img
            className="w-full aspect-square "
            src="https://images.unsplash.com/photo-1491904768633-2b7e3e7fede5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3131&q=80"
          />
          <img
            className="w-full aspect-square "
            src="https://images.unsplash.com/photo-1491904768633-2b7e3e7fede5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3131&q=80"
          />
          <img
            className="w-full aspect-square "
            src="https://images.unsplash.com/photo-1491904768633-2b7e3e7fede5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3131&q=80"
          />
          <img
            className="w-full aspect-square "
            src="https://images.unsplash.com/photo-1491904768633-2b7e3e7fede5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3131&q=80"
          />
          <img
            className="w-full aspect-square "
            src="https://images.unsplash.com/photo-1491904768633-2b7e3e7fede5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3131&q=80"
          />
        </div>
      </div>
    </>
    )
}