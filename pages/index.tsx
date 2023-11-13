import Image from "next/image";
import Header from "@/components/Header";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { BiChevronRight } from "react-icons/bi";
import { BsWhatsapp, BsInstagram, BsArrowRightCircle } from "react-icons/bs";
import { FiFacebook, FiPhoneCall } from "react-icons/fi";
import { PiTelegramLogo } from "react-icons/pi";
import { IoLocationOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function Home() {
    return (
        <>
            <Header />
            <main className="overflow-hidden relative">
                <section className="section_1">
                    <div className="w-[160%] max-[450px]:w-[190%] overflow-hidden absolute top-0 left-1/2 -translate-x-1/2  rounded-b-full h-[1000px] max-xl:h-[800px] max-lg:h-[650px] max-md:h-[550px] max-sm:h-[400px]">
                        <div className="bg-[url('/images/32.JPG')] bg-center bg-no-repeat bg-cover w-[100vw] h-full absolute top-0 left-1/2 -translate-x-1/2">

                        </div>
                    </div>
                    <div className="rounded-b-full h-[1000px] max-xl:h-[800px] max-lg:h-[650px] max-md:h-[550px] max-sm:h-[400px] flex flex-col items-center pt-[300px] max-xl:pt-[200px] max-md:pt-[150px] max-sm:pt-[120px] relative">
                        <p className="z-10 text-4xl max-xl:text-3xl max-lg:text-2xl max-sm:text-xl text-white">
                            welcome to School
                        </p>
                        <h1 className="z-10 text-7xl  max-xl:text-6xl max-lg:text-5xl max-sm:text-4xl max-[400px]:text-3xl text-white text-center mt-5 max-sm:mt-2">
                            Education is the best <br /> key to success in life
                        </h1>
                        <button className="z-10 bg-white flex items-center gap-4 px-[28px] py-[16px] max-lg:px-5 max-lg:py-3 max-sm:px-2 max-sm:py-1 text-[#032D6C] text-[18px] max-sm:text-base max-[400px]:text-sm font-medium rounded-md mt-10  max-sm:mt-10">
                            UPCOMING NOTICE
                            <BiChevronRight size={30} color={"#032D6C"} />
                        </button>

                        <div className="z-10 flex items-center justify-between gap-10 absolute -bottom-[100px] max-lg:hidden">
                            <div className="p-10 max-xl:p-7 bg-white flex flex-col justify-center items-center gap-5 rounded-[36px]">
                                <Image
                                    src={"/section1/section1_bottom1.png"}
                                    width={114}
                                    height={120}
                                    alt=""
                                    className="max-xl:w-[90px]"
                                />
                                <div className="flex items-center text-[#032D6C]">
                                    <span className="text-4xl max-lg:text-3xl font-bold">
                                        99+
                                    </span>
                                    <span className="text-3xl max-lg:text-2xl font-semibold">
                                        Teachers
                                    </span>
                                </div>
                            </div>
                            <div className="p-10 max-xl:p-7 bg-white flex flex-col justify-center items-center gap-5 rounded-[36px]">
                                <Image
                                    src={"/section1/section1_bottom2.png"}
                                    width={114}
                                    height={120}
                                    alt=""
                                    className="max-xl:w-[90px]"
                                />
                                <div className="flex items-center text-[#032D6C]">
                                    <span className="text-4xl  max-lg:text-3xl font-bold">
                                        12+
                                    </span>
                                    <span className="text-3xl  max-lg:text-2xl font-semibold">
                                        Research
                                    </span>
                                </div>
                            </div>
                            <div className="p-10 max-xl:p-7 bg-white flex flex-col justify-center items-center gap-5 rounded-[36px]">
                                <Image
                                    src={"/section1/section1_bottom3.png"}
                                    width={114}
                                    height={120}
                                    alt=""
                                    className="max-xl:w-[90px]"
                                />
                                <div className="flex items-center text-[#032D6C]">
                                    <span className="text-4xl  max-lg:text-3xl font-bold">
                                        15+
                                    </span>
                                    <span className="text-3xl max-lg:text-2xl font-semibold">
                                        Departments
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mt-40 max-lg:mt-0 section_2">
                    <div className="custom_container">
                        <div className="flex items-center justify-end max-lg:hidden">
                            <Image
                                src={"/section2/student_head.png"}
                                width={90}
                                height={55}
                                alt=""
                            />
                        </div>
                        <div className="mt-20 max-lg:mt-10 max-sm:mt-5 flex max-lg:flex-col items-center justify-between gap-20 max-lg:gap-10">
                            <div className="w-full flex items-center justify-center flex-col">
                                <p className="text-[#032D6C] text-4xl max-xl:text-3xl max-lg:text-4xl max-sm:text-3xl font-bold text-center">
                                    We are university since 12 years
                                </p>
                                <p className="text-[#032D6C] max-sm:text-sm text-center mt-7 max-sm:mt-5">
                                    Welcome to xyz, a distinguished institution
                                    of higher learning committed to academic
                                    excellence and innovation. With a history
                                    spanning 12 years, we have consistently
                                    provided a world-class education, empowering
                                    our students to succeed in their chosen
                                    fields. Our dedicated faculty,
                                    state-of-the-art facilities, and vibrant
                                    campus community create an environment where
                                    students can thrive both academically and
                                    personally.
                                </p>
                                <button className="bg-[#032D6C] flex items-center justify-center gap-3 px-10 py-4 max-md:px-7 max-md:py-3 max-sm:px-5 max-sm:py-2 text-[#E6EDF8] rounded-md mt-10 max-sm:mt-5 max-sm:text-sm">
                                    Learn more
                                    <BiChevronRight size={20} />
                                </button>
                            </div>
                            <div className="grid grid-cols-3 gap-5 w-[50%] max-lg:w-full">
                                <div className="bg-[url('/section2/160A2505.JPG')] bg-center bg-cover bg-no-repeat h-[160px] max-lg:h-[300px] max-sm:h-[200px] col-start-1 col-end-4"></div>
                                <div className="bg-[url('/section2/160A2504.JPG')] bg-center bg-cover bg-no-repeat h-[200px] max-lg:h-[300px] max-sm:h-[210px] row-start-2 row-end-3 col-start-1 col-end-4"></div>
                                {/* <div className="bg-[yellow] h-[200px] max-lg:h-[300px] max-sm:h-[210px] row-start-2 row-end-3 col-start-3 col-end-4"></div> */}
                            </div>
                        </div>
                    </div>
                </section>

                <div className="w-full h-20 max-lg:h-16 max-sm:h-11 bg-[#032D6C] my-14 max-lg:my-10 max-sm:my-8"></div>

                <section className="section_3">
                    <p className="text-[#032D6C] text-center text-4xl max-xl:text-3xl font-bold mb-20 max-xl:mb-10 max-sm:mb-8">
                        Upcoming Events
                    </p>

                    <div className="custom_container max-lg:hidden">
                        <Swiper
                            spaceBetween={50}
                            slidesPerView={3}
                            onSlideChange={() => console.log("slide change")}
                            onSwiper={(swiper: any) => console.log(swiper)}
                        >
                            <SwiperSlide className="text-center">
                                <div className="w-[360px] bg-white p-5 m-auto rounded">
                                    <Image
                                        src={"/section3/section3_slide_1.JPG"}
                                        width={200}
                                        height={100}
                                        alt=""
                                        className="w-full rounded"
                                    />
                                    <p className="text-2xl text-[#032D6C] font-bold text-center mt-5">
                                        Initiation program
                                    </p>
                                    <p className="mt-5 text-center text-[#032D6C]">
                                        Mark your calendars for the thrilling
                                        Annual Sports Day at our university on
                                        September 10, 2023 - a day of fierce
                                        competition and campus camaraderie you
                                        won`t want to miss!
                                    </p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="text-center">
                                <div className="w-[360px] bg-white p-5 m-auto rounded">
                                    <Image
                                        src={"/section3/section3_slide_2.JPG"}
                                        width={200}
                                        height={100}
                                        alt=""
                                        className="w-full rounded"
                                    />
                                    <p className="text-2xl text-[#032D6C] font-bold text-center mt-5">
                                        Initiation program
                                    </p>
                                    <p className="mt-5 text-center text-[#032D6C]">
                                        Mark your calendars for the thrilling
                                        Annual Sports Day at our university on
                                        September 10, 2023 - a day of fierce
                                        competition and campus camaraderie you
                                        won`t want to miss!
                                    </p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="text-center">
                                <div className="w-[360px] bg-white p-5 m-auto rounded">
                                    <Image
                                        src={"/section3/section3_slide_3.png"}
                                        width={200}
                                        height={100}
                                        alt=""
                                        className="w-full rounded"
                                    />
                                    <p className="text-2xl text-[#032D6C] font-bold text-center mt-5">
                                        Initiation program
                                    </p>
                                    <p className="mt-5 text-center text-[#032D6C]">
                                        Mark your calendars for the thrilling
                                        Annual Sports Day at our university on
                                        September 10, 2023 - a day of fierce
                                        competition and campus camaraderie you
                                        won`t want to miss!
                                    </p>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>

                    <div className="custom_container lg:hidden">
                        <div className="w-[560px] max-md:w-[80%] max-sm:w-[95%] bg-white p-5 m-auto rounded">
                            <Image
                                src={"/section3/section3_slide_1.JPG"}
                                width={200}
                                height={100}
                                alt=""
                                className="w-full rounded"
                            />
                            <p className="text-2xl max-sm:text-xl text-[#032D6C] font-bold text-center mt-5 max-sm:mt-4">
                                Initiation program
                            </p>
                            <p className="mt-5 max-sm:text-sm text-center text-[#032D6C]">
                                Mark your calendars for the thrilling Annual
                                Sports Day at our university on September 10,
                                2023 - a day of fierce competition and campus
                                camaraderie you won`t want to miss!
                            </p>
                        </div>
                        <div className="w-[560px] max-md:w-[80%] max-sm:w-[95%] bg-white p-5 m-auto rounded mt-10 max-sm:mt-8">
                            <Image
                                src={"/section3/section3_slide_2.JPG"}
                                width={200}
                                height={100}
                                alt=""
                                className="w-full rounded"
                            />
                            <p className="text-2xl  max-sm:text-xl text-[#032D6C] font-bold text-center mt-5 max-sm:mt-4">
                                Initiation program
                            </p>
                            <p className="mt-5 max-sm:text-sm text-center text-[#032D6C]">
                                Mark your calendars for the thrilling Annual
                                Sports Day at our university on September 10,
                                2023 - a day of fierce competition and campus
                                camaraderie you won`t want to miss!
                            </p>
                        </div>
                        <div className="w-[560px] max-md:w-[80%] max-sm:w-[95%] bg-white p-5 m-auto rounded mt-10 max-sm:mt-8">
                            <Image
                                src={"/section3/section3_slide_3.png"}
                                width={200}
                                height={100}
                                alt=""
                                className="w-full rounded"
                            />
                            <p className="text-2xl  max-sm:text-xl text-[#032D6C] font-bold text-center mt-5 max-sm:mt-4">
                                Initiation program
                            </p>
                            <p className="mt-5 max-sm:text-sm text-center text-[#032D6C]">
                                Mark your calendars for the thrilling Annual
                                Sports Day at our university on September 10,
                                2023 - a day of fierce competition and campus
                                camaraderie you won`t want to miss!
                            </p>
                        </div>
                    </div>

                    <button className="mt-10 max-sm:mt-8 m-auto bg-[#032D6C] flex items-center justify-center gap-3 px-10 py-4 max-sm:px-7 max-sm:py-3 max-sm:text-sm text-[#E6EDF8] rounded-md">
                        Explore all events
                        <BiChevronRight size={20} />
                    </button>
                </section>

                <section className="section_4 mt-14 max-lg:mt-10">
                    <p className="text-[#032D6C] text-4xl max-xl:text-3xl max-[400px]:text-3xl font-bold text-center">
                        University Video Tour
                    </p>
                    <div className="mt-20 max-xl:mt-16 max-lg:mt-10 h-[700px] max-xl:h-[550xp] max-lg:h-[450px] max-md:h-[350px] max-sm:h-[250px] max-[400px]:h-[200px] bg-[url('/images/33.JPG')] bg-cover bg-no-repeat bg-center"></div>
                </section>

                <section className="section_5 mt-20 max-xl:mt-10">
                    <p className="text-[#032D6C] text-4xl max-xl:text-3xl font-bold text-center mb-14 max-xl:mb-9">
                        Faculties
                    </p>
                    <div className="flex max-lg:flex-col items-center gap-10 max-xl:gap-5 max-lg:gap-10 max-sm:gap-5 custom_container">
                        <div className="w-full max-lg:w-3/4 max-md:w-full bg-white">
                            <div className="w-full bg-[#E6EDF8] py-3">
                                <p className="text-[#032D6C] text-[24px] font-bold text-center">
                                    Business
                                </p>
                            </div>
                            <Image
                                src={"/section5/section5_1.png"}
                                width={200}
                                height={200}
                                alt=""
                                className="my-5 m-auto"
                            />
                        </div>

                        <div className="w-full max-lg:w-3/4  max-md:w-full bg-white">
                            <div className="w-full bg-[#E6EDF8] py-3">
                                <p className="text-[#032D6C] text-[24px] font-bold text-center">
                                    Business
                                </p>
                            </div>
                            <Image
                                src={"/section5/section5_2.png"}
                                width={200}
                                height={200}
                                alt=""
                                className="my-5 m-auto"
                            />
                        </div>

                        <div className="w-full max-lg:w-3/4  max-md:w-full bg-white">
                            <div className="w-full bg-[#E6EDF8] py-3">
                                <p className="text-[#032D6C] text-[24px] font-bold text-center">
                                    Business
                                </p>
                            </div>
                            <Image
                                src={"/section5/section5_3.png"}
                                width={200}
                                height={200}
                                alt=""
                                className="my-5 m-auto"
                            />
                        </div>
                    </div>
                </section>

                <section className="section_6 mt-20 max-xl:mt-10">
                    <p className="text-[#032D6C] text-4xl max-xl:text-3xl font-bold text-center mb-14 max-xl:mb-7">
                        Our Expert Teachers
                    </p>
                    <div className="flex items-center justify-center gap-10 max-lg:gap-5 max-sm:gap-4 max-[400px]:gap-2 max-lg:flex-wrap m-auto custom_container">
                        <Image
                            src={"/section6/1.jpg"}
                            width={260}
                            height={350}
                            alt=""
                            className="max-sm:w-[140px] max-sm:h-[200px]"
                        />
                        <Image
                            src={"/section6/2.jpg"}
                            width={260}
                            height={350}
                            alt=""
                            className="max-sm:w-[140px] max-sm:h-[200px]"
                        />
                        <Image
                            src={"/section6/3.jpg"}
                            width={260}
                            height={350}
                            alt=""
                            className="max-sm:w-[140px] max-sm:h-[200px]"
                        />
                        <Image
                            src={"/section6/4.jpg"}
                            width={260}
                            height={350}
                            alt=""
                            className="max-sm:w-[140px] max-sm:h-[200px]"
                        />
                    </div>
                    <button className="mt-10 max-sm:mt-5 m-auto bg-[#032D6C] flex items-center justify-center gap-3 px-10 py-4 max-sm:px-5 max-sm:py-2 text-[#E6EDF8] rounded-md">
                        See more
                        <BiChevronRight size={25} />
                    </button>
                </section>

                <section className="section_7 mt-20 max-xl:mt-10">
                    <div className="custom_container">
                        <p className="text-[#032D6C] text-4xl max-xl:text-3xl font-bold text-center">
                            Frame by Frame
                        </p>
                        <p className="mt-10 max-md:mt-5 text-[#032D6C] text-center">
                            Explore a vibrant collection of visual masterpieces,
                            capturing the essence of our academic journey,
                            campus life, and student achievements. Immerse
                            yourself in a kaleidoscope of images that tell the
                            unique story of our vibrant and dynamic community.
                        </p>

                        <div className="flex items-center gap-5 max-md:gap-2 w-fit m-auto mt-10 max-lg:mt-5 max-md:flex-wrap justify-center">
                            <div className="px-5 py-2 max-sm:py-1 max-sm:px-3 bg-[#032D6C] text-[#E6EDF8] flex items-center justify-center rounded-md border border-[#032D6C]">
                                All
                            </div>
                            <div className="not_active">Admission</div>
                            <div className="not_active">Annual Program</div>
                            <div className="not_active">Awards</div>
                            <div className="not_active">Curiculum</div>
                        </div>

                        <div className="mt-10 max-md:mt-5 grid grid-cols-4 auto-rows-[250px] max-xl:auto-rows-[160px] max-lg:auto-rows-[140px] max-md:auto-rows-[100px] max-sm:auto-rows-[70px]  max-[400px]:auto-rows-[60px] gap-5 max-md:gap-2">
                            <div className="bg-[url('/images/1.JPG')] bg-center bg-cover bg-no-repeat col-start-1 col-end-2 row-start-1 row-end-3">
                                
                            </div>
                            <div className="bg-[url('/images/2.JPG')] bg-center bg-cover bg-no-repeat col-start-2 col-end-4 row-start-1 row-end-2">
                                
                            </div>
                            <div className="bg-[url('/images/3.JPG')] bg-center bg-cover bg-no-repeat col-start-4 col-end-5 row-start-1 row-end-2">
                                
                            </div>
                            <div className="bg-[url('/images/4.JPG')] bg-center bg-cover bg-no-repeat col-start-1 col-end-2 row-start-3 row-end-5">
                                
                            </div>
                            <div className="bg-[url('/images/32.JPG')] bg-center bg-cover bg-no-repeat col-start-2 col-end-4 row-start-2 row-end-5">
                                
                            </div>
                            <div className="bg-[url('/images/9.JPG')] bg-center bg-cover bg-no-repeat col-start-4 col-end-5 row-start-2 row-end-4">
                                
                            </div>
                            <div className="bg-[url('/images/18.JPG')] bg-center bg-cover bg-no-repeat col-start-1 col-end-4 row-start-5 row-end-6">
                                
                            </div>
                            <div className="bg-[url('/images/25.JPG')] bg-center bg-cover bg-no-repeat col-start-4 col-end-5 row-start-4 row-end-6">
                                
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section_8 mt-20  max-xl:mt-10 max-sm:mt-5">
                    <div className="custom_container">
                        <p className="text-[#032D6C] text-4xl max-xl:text-3xl font-bold text-center mb-14 max-lg:mb-7">
                            Student Voices
                        </p>
                        <Swiper
                            spaceBetween={50}
                            slidesPerView={1}
                            centeredSlides={true}
                            loop={true}
                            effect={"fade"}
                            autoplay={{
                                delay: 1500,
                                disableOnInteraction: true,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[EffectFade, Autoplay, Pagination]}
                            onSlideChange={() => console.log("slide change")}
                            onSwiper={(swiper: any) => console.log(swiper)}
                        >
                            {[1, 3, 4, 5, 6, 7, 8, 9].map(
                                (item: any, index: any) => (
                                    <SwiperSlide key={item}>
                                        <Image
                                            src={"/swiper-bottom1.png"}
                                            width={40}
                                            height={40}
                                            alt=""
                                            className="m-auto"
                                        />
                                        <p className="mt-5 max-w-[700px] m-auto text-center font-bold text-[#032D6C]">
                                            ``My university experience has been
                                            outstanding, thanks to the dedicated
                                            faculty, diverse opportunities, and
                                            a supportive community. It`s where
                                            I`ve grown academically and
                                            personally, making lifelong
                                            connections along the way.``
                                        </p>
                                        <Image
                                            src="/swiper-bottom2.png"
                                            width={66}
                                            height={66}
                                            className="m-auto mt-6"
                                            alt=""
                                        />
                                        <p className="font-bold text-[#032D6C] text-center mt-1">
                                            Twink Carrol
                                        </p>
                                        <p className=" text-gray-700 text-center mt-1 mb-10">
                                            Graduate of 2022,Department of CSE
                                        </p>
                                    </SwiperSlide>
                                )
                            )}
                        </Swiper>
                    </div>
                </section>
            </main>
            <footer className="mt-44 max-lg:mt-32 max-md:mt-28 pt-36 bg-[#032D6C] relative">
                <div className="bg-[#E6EDF8] py-10 max-lg:py-7 max-sm:py-5 w-[900px] max-lg:w-[700px] max-md:w-[80%] max-sm:w-[90%] absolute -top-[150px] max-lg:-top-[90px] max-sm:-top-[90px] left-1/2 -translate-x-1/2 flex flex-col items-center justify-center">
                    <p className="text-[#032D6C] text-4xl max-lg:text-3xl max-sm:text-2xl font-bold">
                        Join Our Newsletter
                    </p>
                    <p className="text-[#344054] mt-3 max-sm:text-sm w-[80%] text-center">
                        Keep up our latest news and events,Subscribe our
                        newsletter
                    </p>
                    <form
                        className="flex items-center gap-3 w-[70%] max-sm:w-[90%] mt-5"
                        action=""
                    >
                        <input
                            type="text"
                            placeholder="Email Address"
                            className="border font-medium border-[#032D6C] rounded-md px-5 py-3 max-sm:text-sm max-sm:px-3 max-sm:py-2 bg-[#E6EDF8] w-full"
                        />
                        <button className="bg-[#032D6C] text-center text-[#E6EDF8] max-sm:text-sm px-5 py-3 max-sm:px-3 max-sm:py-2 rounded-md">
                            Subscribe
                        </button>
                    </form>
                </div>
                <div className="custom_container flex max-xl:flex-col items-start max-xl:items-center justify-center gap-16 max-sm:gap-7 pb-16 max-sm:pb-7">
                    <div className="max-xl:flex max-xl:flex-col max-xl:items-center">
                        <Image src="/logo.png" width={190} height={50} alt="" />
                        <p className="text-white mt-5 leading-6 w-[217px] max-xl:w-[500px] max-sm:w-full max-xl:text-center">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Maecenas porttitor congue massa. Fusce
                            posuere, magna .
                        </p>
                        <div className="flex items-center gap-5 mt-6">
                            <BsWhatsapp size={25} color="white" />
                            <FiFacebook size={25} color="white" />
                            <PiTelegramLogo size={25} color="white" />
                            <BsInstagram size={25} color="white" />
                        </div>
                    </div>

                    <div className="flex gap-16 max-sm:gap-5">
                        <div className="text-white">
                            <p className="text-[24px] max-sm:text-xl font-bold">
                                Contact us
                            </p>
                            <div className="flex flex-col items-start gap-5 mt-6">
                                <div className="footer_flex">
                                    <IoLocationOutline
                                        size={25}
                                        color="white"
                                    />
                                    Sector 3,Uttara ,Dhaka
                                </div>
                                <div className="footer_flex">
                                    <TfiEmail size={25} color="white" />
                                    info@school.edu
                                </div>
                                <div className="footer_flex">
                                    <FiPhoneCall size={25} color="white" />
                                    01712345678
                                </div>
                                <div className="footer_flex">
                                    <FiPhoneCall size={25} color="white" />
                                    01987654321
                                </div>
                            </div>
                        </div>

                        <div className="text-white">
                            <p className="text-[24px]  max-sm:text-xl font-bold">
                                Useful links
                            </p>
                            <div className="flex flex-col items-start gap-5 mt-6">
                                <div className="footer_flex">
                                    <BsArrowRightCircle
                                        size={25}
                                        color="white"
                                    />
                                    Contact us
                                </div>
                                <div className="footer_flex">
                                    <BsArrowRightCircle
                                        size={25}
                                        color="white"
                                    />
                                    Academic
                                </div>
                                <div className="footer_flex">
                                    <BsArrowRightCircle
                                        size={25}
                                        color="white"
                                    />
                                    Admission
                                </div>
                                <div className="footer_flex">
                                    <BsArrowRightCircle
                                        size={25}
                                        color="white"
                                    />
                                    Job
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-white max-xl:w-full">
                        <p className="text-[24px] max-sm:text-xl font-bold max-xl:text-center">
                            Find Us On Google Map
                        </p>

                        <iframe
                            className={`w-full h-full max-xl:h-[300px] max-sm:h-[200px] mt-6`}
                            src={`https://yandex.uz/map-widget/v1/`}
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>

                <hr className="w-full border border-white max-lg:hidden" />

                <p className="text-center text-white py-5 max-sm:py-2 max-sm:text-xs">
                    copyright@school2023all right reserved
                </p>
            </footer>
        </>
    );
}
