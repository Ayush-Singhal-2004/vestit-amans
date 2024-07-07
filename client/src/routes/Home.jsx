import Card from "../components/Card";
import { homeCardData } from "../data/homeCardData";
import { useEffect, useState } from "react";

function getScreenWidth() {
    const { "innerWidth": width } = window;
    return innerWidth;
}

function Home() {

    const [swiperType, setSwiperType] = useState("women");
    const [screenWidth, setScreenWidth] = useState(getScreenWidth());

    useEffect(() => {
        var swiper = new Swiper(".mySwiper", {
            slidesPerView: screenWidth < 450 ? 1.2 : 3.5,
            spaceBetween: 10,
            loop: true,
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
        });
    }, []);

    return (
        <div className="max-w-screen overflow-hidden">
            <section id="home-head-section" className="h-screen w-full relative">
                <div className="h-full w-full flex justify-center items-center 
                bg-[#66666656]">
                    <div className="flex flex-col items-center gap-5">
                        <p className="text-white text-md font-medium">
                            SALES
                        </p>
                        <h1 className="text-white text-5xl font-bold max-sm:text-3xl">
                            UP TO 30% OFF
                        </h1>
                    </div>
                    <div className="flex justify-center gap-28 absolute left-1/2 
                    transform -translate-x-1/2 -translate-y-1/2 bottom-[10%] max-sm:gap-8">
                        <h2 className="text-white text-3xl cursor-pointer 
                        underline-animation after:bg-[#fff]">
                            WOMEN
                        </h2>
                        <h2 className="text-white text-3xl cursor-pointer 
                        underline-animation after:bg-[#fff]">
                            MEN
                        </h2>
                    </div>
                </div>
            </section>
            <section className="min-h-screen flex justify-end py-24">
                <div className="w-[90%] max-sm:w-full">
                    <div className="w-full pl-10 max-sm:pl-0">
                        <div className="flex items-center w-[80%] gap-[2vw]
                        border-b-gray-200 border-b-2 max-sm:gap-0 max-sm:w-full">
                            <h1 className={`text-2xl pb-2 text-gray-300 
                            underline-animation px-14 max-sm:px-10
                            ${swiperType == "women" && "text-black font-semibold"}
                            ${swiperType != "women" && "cursor-pointer after:bg-[black] hover:text-black"}`}
                            onClick={() => swiperType != "women" && setSwiperType("women")}
                            >
                                Women
                            </h1>
                            <h1 className={`text-2xl pb-2 text-gray-300 
                            underline-animation px-14
                            ${swiperType == "men" && "text-black font-semibold"}
                            ${swiperType != "men" && "cursor-pointer after:bg-[black] hover:text-black"}`}
                            onClick={() => swiperType != "men" && setSwiperType("men")}
                            >
                                Men
                            </h1>
                        </div>
                    </div>
                    <div className="swiper mySwiper ml-10">
                        <div className="swiper-wrapper">
                            {
                                homeCardData.map((item, idx) => (
                                    <div className="swiper-slide" key={idx}>
                                        <Card 
                                        imageURL={item.imageURL} 
                                        name={item.name}
                                        about={item.about} 
                                        price={item.price}
                                        key={idx}/>
                                    </div>
                                ))
                            }
                        </div>
                        {/* <div className="relative bottom-[50%] w-40">
                            <div className="swiper-button-next custom-pagination-next">
                            </div>
                            <div className="swiper-button-prev custom-pagination-prev">
                            </div>
                        </div> */}
                    </div>  
                </div>
            </section>
            <section>
                <div>
                    <div className="home-section3-1 h-[90vh]">
                        <div className="home-section3-sub h-full">

                        </div>
                    </div>
                    <div className="home-section3-2 h-[90vh]">
                        <div className="home-section3-sub h-full">
                            
                        </div>
                    </div>
                    <div className="home-section3-3 h-[90vh]">
                        <div className="home-section3-sub h-full">

                        </div>
                    </div>
                    <div className="home-section3-4 h-[80vh]">
                        <div className="home-section3-sub h-full">

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}   

export default Home;