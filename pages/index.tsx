import Image from "next/image";
import Header, { scrollToContent } from "@/components/Header";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { BiChevronRight } from "react-icons/bi";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Footer from "@/components/Footer";
import { useContext } from "react";
import TranslateContext from "@/context/useTranslate";

export default function Home() {
    const translation: any = useContext(TranslateContext);

    return (
        <>
            <Header translation={translation.header} />
            <main className="overflow-hidden relative">
                <section className="section_1">
                    <div className="w-[160%] max-[450px]:w-[190%] overflow-hidden absolute top-0 left-1/2 -translate-x-1/2  rounded-b-full h-[1000px] max-xl:h-[800px] max-lg:h-[650px] max-md:h-[550px] max-sm:h-[400px]">
                        <div className="bg-[url('/section1.jpg')] bg-center bg-no-repeat bg-cover w-[100vw] h-full absolute top-0 left-1/2 -translate-x-1/2"></div>
                        <div className="bg-[#0000ff52] w-[100vw] h-full absolute top-0 left-1/2 -translate-x-1/2"></div>
                    </div>
                    <div className="rounded-b-full h-[1000px] max-xl:h-[800px] max-lg:h-[650px] max-md:h-[550px] max-sm:h-[400px] flex flex-col items-center pt-[300px] max-xl:pt-[200px] max-md:pt-[150px] max-sm:pt-[120px] relative">
                        <p className="z-10 text-4xl max-xl:text-3xl max-lg:text-2xl max-sm:text-xl text-white">
                            {translation.section1.text}
                        </p>
                        <h1 className="w-[1000px] max-lg:w-[600px] max-sm:w-[85%] z-10 text-7xl  max-xl:text-6xl max-lg:text-5xl max-sm:text-4xl max-[400px]:text-3xl text-white text-center mt-5 max-sm:mt-2">
                            {translation.section1.title}
                        </h1>

                        <div className="w-[1200px] max-xl:w-[900px] z-10 grid grid-cols-3 gap-10 absolute -bottom-[100px] max-lg:hidden">
                            <div className="p-10 max-xl:p-7 bg-white flex flex-col justify-center items-center gap-5 rounded-[36px]">
                                <Image
                                    src={"/section1/section1_bottom1.png"}
                                    width={114}
                                    height={120}
                                    alt=""
                                    className="max-xl:w-[90px]"
                                />
                                <div className="flex items-center gap-2 text-[#032D6C]">
                                    <span className="text-4xl max-lg:text-3xl font-bold">
                                        18
                                    </span>
                                    <span className="text-3xl max-lg:text-2xl font-semibold">
                                        {translation.section1.bottomBlock.first}
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
                                    <span className="text-3xl  max-lg:text-2xl font-semibold text-center">
                                        {
                                            translation.section1.bottomBlock
                                                .secant
                                        }
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
                                    <p className="text-3xl max-lg:text-2xl font-semibold text-center">
                                        {translation.section1.bottomBlock.third}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="hidden max-lg:block mt-20">
                    <div className="w-[90%] z-10 grid grid-cols-1 gap-10 m-auto">
                        <div className="w-[70%] max-sm:w-full m-auto p-7 bg-white flex flex-col justify-center items-center gap-5 rounded-[36px]">
                            <Image
                                src={"/section1/section1_bottom1.png"}
                                width={114}
                                height={120}
                                alt=""
                                className="w-[90px]"
                            />
                            <div className="flex items-center gap-2 text-[#032D6C]">
                                <span className="text-3xl font-bold">
                                    18
                                </span>
                                <span className="text-3xl max-lg:text-2xl font-semibold">
                                    {translation.section1.bottomBlock.first}
                                </span>
                            </div>
                        </div>
                        <div className="w-[70%] max-sm:w-full m-auto p-7 bg-white flex flex-col justify-center items-center gap-5 rounded-[36px]">
                            <Image
                                src={"/section1/section1_bottom2.png"}
                                width={114}
                                height={120}
                                alt=""
                                className="w-[90px]"
                            />
                            <div className="flex items-center text-[#032D6C]">
                                <span className="text-2xl font-semibold text-center">
                                    {translation.section1.bottomBlock.secant}
                                </span>
                            </div>
                        </div>
                        <div className="w-[70%] max-sm:w-full m-auto p-7 bg-white flex flex-col justify-center items-center gap-5 rounded-[36px]">
                            <Image
                                src={"/section1/section1_bottom3.png"}
                                width={114}
                                height={120}
                                alt=""
                                className="w-[90px]"
                            />
                            <div className="flex items-center text-[#032D6C]">
                                <p className="text-2xl font-semibold text-center">
                                    {translation.section1.bottomBlock.third}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="about" className="mt-40 max-lg:mt-0 section_2">
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
                                <p className="text-[#032D6C] text-4xl max-xl:text-3xl max-lg:text-4xl max-sm:text-3xl font-bold text-center max-w-[400px]">
                                    {translation.section2.title}
                                </p>
                                <p className="text-[#032D6C] max-sm:text-sm text-center mt-7 max-sm:mt-5  max-w-[600px]">
                                    {translation.section2.text}
                                </p>
                            </div>
                            <div className="grid grid-cols-3 gap-5 w-[50%] max-lg:w-full">
                                <div className="bg-[url('/section2/160A2505.jpg')] bg-center bg-cover bg-no-repeat h-[160px] max-lg:h-[300px] max-sm:h-[200px] col-start-1 col-end-4"></div>
                                <div className="bg-[url('/section2/160A2504.jpg')] bg-center bg-cover bg-no-repeat h-[200px] max-lg:h-[300px] max-sm:h-[210px] row-start-2 row-end-3 col-start-1 col-end-4"></div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="w-full h-20 max-lg:h-16 max-sm:h-11 bg-[#032D6C] my-14 max-lg:my-10 max-sm:my-8"></div>

                <section id="direction" className="section_3">
                    <p className="text-[#032D6C] text-center text-4xl max-xl:text-3xl font-bold mb-20 max-xl:mb-10 max-sm:mb-8">
                        {translation.section3.title}
                    </p>

                    <div className="custom_container max-lg:hidden">
                        <Swiper
                            spaceBetween={50}
                            slidesPerView={3}
                            onSlideChange={() => console.log("slide change")}
                            onSwiper={(swiper: any) => console.log(swiper)}
                        >
                            {translation.section3.directions.map(
                                (item: any) => (
                                    <SwiperSlide
                                        key={item.id}
                                        className="text-center"
                                    >
                                        <div className="w-[360px] bg-white p-5 m-auto rounded">
                                            <Image
                                                src={item.img}
                                                width={200}
                                                height={100}
                                                alt=""
                                                className="w-full rounded"
                                            />
                                            <p className="text-2xl text-[#032D6C] font-bold text-center mt-5">
                                                {item.title}
                                            </p>
                                            <div className="flex flex-col gap-5 text-start text-[#032D6C] mt-5">
                                                <p>{item?.text1}</p>
                                                <p>{item?.text2}</p>
                                                <p>{item?.text3}</p>
                                                <p>{item?.text4}</p>
                                                <p>{item?.text5}</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            )}
                        </Swiper>
                    </div>

                    <div className="custom_container lg:hidden">
                        {translation.section3.directions.map((item: any) => (
                            <div
                                key={item.id}
                                className="mt-10 w-[560px] max-md:w-[80%] max-sm:w-[95%] bg-white p-5 m-auto rounded"
                            >
                                <Image
                                    src={item.img}
                                    width={200}
                                    height={100}
                                    alt=""
                                    className="w-full rounded"
                                />
                                <p className="text-2xl max-sm:text-xl text-[#032D6C] font-bold text-center mt-5 max-sm:mt-4">
                                    {item.title}
                                </p>
                                <div className="flex flex-col gap-5 text-start text-[#032D6C] mt-5">
                                    <p>{item?.text1}</p>
                                    <p>{item?.text2}</p>
                                    <p>{item?.text3}</p>
                                    <p>{item?.text4}</p>
                                    <p>{item?.text5}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="section_4 mt-14 max-lg:mt-10">
                    <p className="text-[#032D6C] text-4xl max-xl:text-3xl max-[400px]:text-3xl font-bold text-center">
                        {translation.section4.title}
                    </p>
                    <div className="mt-20 max-xl:mt-16 max-lg:mt-10 h-[700px] max-xl:h-[550xp] max-lg:h-[450px] max-md:h-[350px] max-sm:h-[250px] max-[400px]:h-[200px] bg-[url('/images/33.webp')] bg-cover bg-no-repeat bg-center relative">
                        <div className="bg-[#0000ff5d] absolute top-0 left-0 h-full w-full"></div>
                    </div>
                </section>

                <section className="section_5 mt-20 max-xl:mt-10">
                    <p className="text-[#032D6C] text-4xl max-xl:text-3xl font-bold text-center mb-14 max-xl:mb-9">
                        {translation.section5.title}
                    </p>
                    <div className="grid grid-cols-4 max-xl:grid-cols-2 max-sm:grid-cols-1 gap-8 max-xl:gap-5 max-sm:gap-5 custom_container">
                        <div className="w-full max-md:w-full max-sm:w-[90%] max-sm:m-auto bg-white">
                            <div className="w-full bg-[#E6EDF8] py-3 px-2">
                                <p className="text-[#032D6C] text-[24px] font-bold text-center">
                                    {translation.section5.block1_text}
                                </p>
                            </div>
                            <Image
                                src={"/section5/section5_1.png"}
                                width={200}
                                height={200}
                                alt=""
                                className="my-5 m-auto max-sm:w-[100px] max-sm:h-[100px]"
                            />
                        </div>

                        <div className="w-full max-md:w-full max-sm:w-[90%] max-sm:m-auto bg-white">
                            <div className="w-full bg-[#E6EDF8] py-3 px-2">
                                <p className="text-[#032D6C] text-[24px] font-bold text-center">
                                    {translation.section5.block2_text}
                                </p>
                            </div>
                            <Image
                                src={"/section5/section5_2.jpg"}
                                width={200}
                                height={200}
                                alt=""
                                className="my-5 m-auto max-sm:w-[150px] max-sm:h-[150px]"
                            />
                        </div>

                        <div className="w-full  max-md:w-full max-sm:w-[90%] max-sm:m-auto bg-white">
                            <div className="w-full bg-[#E6EDF8] py-3 px-2">
                                <p className="text-[#032D6C] text-[24px] font-bold text-center">
                                    {translation.section5.block3_text}
                                </p>
                            </div>
                            <Image
                                src={"/section5/section5_3.png"}
                                width={200}
                                height={200}
                                alt=""
                                className="my-5 m-auto max-sm:w-[150px] max-sm:h-[150px]"
                            />
                        </div>

                        <div className="w-full  max-md:w-full max-sm:w-[90%] max-sm:m-auto bg-white">
                            <div className="w-full bg-[#E6EDF8] py-3 px-2">
                                <p className="text-[#032D6C] text-[24px] font-bold text-center">
                                    {translation.section5.block4_text}
                                </p>
                            </div>
                            <Image
                                src={"/section5/section5_4.png"}
                                width={200}
                                height={200}
                                alt=""
                                className="my-5 m-auto max-sm:w-[150px] max-sm:h-[150px]"
                            />
                        </div>
                    </div>
                </section>

                <section id="teachers" className="section_6 mt-20 max-xl:mt-10">
                    <p className="text-[#032D6C] text-4xl max-xl:text-3xl font-bold text-center mb-14 max-xl:mb-7">
                        {translation.section6.title}
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
                </section>

                <section
                    id="infrastructure"
                    className="section_7 mt-20 max-xl:mt-10"
                >
                    <div className="custom_container">
                        <p className="text-[#032D6C] text-4xl max-xl:text-3xl font-bold text-center">
                            {translation.section7.title}
                        </p>
                        <p className="mt-10 max-md:mt-5 text-[#032D6C] text-center">
                            {translation.section7.text}
                        </p>

                        <div className="my-10 max-md:my-5 grid grid-cols-4 auto-rows-[250px] max-xl:auto-rows-[160px] max-lg:auto-rows-[140px] max-md:auto-rows-[100px] max-sm:auto-rows-[70px]  max-[400px]:auto-rows-[60px] gap-5 max-md:gap-2">
                            <div className="bg-[url('/images/1.webp')] bg-center bg-cover bg-no-repeat col-start-1 col-end-2 row-start-1 row-end-3 relative">
                                <div className="bg-[#0000ff5d] absolute top-0 left-0 h-full w-full"></div>
                            </div>
                            <div className="bg-[url('/images/2.webp')] bg-center bg-cover bg-no-repeat col-start-2 col-end-4 row-start-1 row-end-2 relative">
                                <div className="bg-[#0000ff5d] absolute top-0 left-0 h-full w-full"></div>
                            </div>
                            <div className="bg-[url('/images/3.webp')] bg-center bg-cover bg-no-repeat col-start-4 col-end-5 row-start-1 row-end-2 relative">
                                <div className="bg-[#0000ff5d] absolute top-0 left-0 h-full w-full"></div>
                            </div>
                            <div className="bg-[url('/images/4.webp')] bg-center bg-cover bg-no-repeat col-start-1 col-end-2 row-start-3 row-end-5 relative">
                                <div className="bg-[#0000ff5d] absolute top-0 left-0 h-full w-full"></div>
                            </div>
                            <div className="bg-[url('/images/32.webp')] bg-center bg-cover bg-no-repeat col-start-2 col-end-4 row-start-2 row-end-5 relative">
                                <div className="bg-[#0000ff5d] absolute top-0 left-0 h-full w-full"></div>
                            </div>
                            <div className="bg-[url('/images/9.webp')] bg-center bg-cover bg-no-repeat col-start-4 col-end-5 row-start-2 row-end-4 relative">
                                <div className="bg-[#0000ff5d] absolute top-0 left-0 h-full w-full"></div>
                            </div>
                            <div className="bg-[url('/images/18.webp')] bg-center bg-cover bg-no-repeat col-start-1 col-end-4 row-start-5 row-end-6 relative">
                                <div className="bg-[#0000ff5d] absolute top-0 left-0 h-full w-full"></div>
                            </div>
                            <div className="bg-[url('/images/25.webp')] bg-center bg-cover bg-no-repeat col-start-4 col-end-5 row-start-4 row-end-6 relative">
                                <div className="bg-[#0000ff5d] absolute top-0 left-0 h-full w-full"></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <section className="section_8 mt-20  max-xl:mt-10 max-sm:mt-5">
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
                            // onSlideChange={() => console.log("slide change")}
                            // onSwiper={(swiper: any) => console.log(swiper)}
                        >
                            {[1, 2, 3, 4].map((item: any, index: any) => (
                                <SwiperSlide key={item}>
                                    <div className="bg-[#F6FAFF]">
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
                                            src={`/section6/${item}.jpg`}
                                            width={150}
                                            height={150}
                                            className="m-auto mt-6 rounded-md"
                                            alt=""
                                        />
                                        <p className="font-bold text-[#032D6C] text-center mt-1">
                                            {item}
                                        </p>
                                        <p className=" text-gray-700 text-center mt-1 mb-10">
                                            {item} Graduate of 2022,Department
                                            of CSE
                                        </p>{" "}
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </section> */}
            </main>
            <Footer translation={translation.footer} />
        </>
    );
}
