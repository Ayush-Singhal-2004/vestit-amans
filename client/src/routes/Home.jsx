function Home() {
    return (
        <div className="max-w-screen">
            <section id="home-head-section" className="h-screen w-full relative">
                <div className="h-full w-full flex justify-center items-center 
                bg-[#66666656]">
                    <div className="flex flex-col items-center gap-5">
                        <p className="text-white text-md font-medium">
                            SALES
                        </p>
                        <h1 className="text-white text-5xl font-bold">
                            UP TO 30% OFF
                        </h1>
                    </div>
                    <div className="flex justify-center gap-28 absolute left-1/2 
                    transform -translate-x-1/2 -translate-y-1/2 bottom-[10%]">
                        <h2 className="text-white text-3xl cursor-pointer
                        border-b-white border-b-2">
                            WOMEN
                        </h2>
                        <h2 className="text-white text-3xl cursor-pointer 
                        border-b-white border-b-2">
                            MEN
                        </h2>
                    </div>
                </div>
            </section>
            <section className="h-screen w-full">

            </section>
        </div>
    )
}   

export default Home;