import React, { useState } from "react";
import { BsInstagram, BsArrowRightCircle } from "react-icons/bs";
import { FiFacebook, FiPhoneCall } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import InputMask from "react-input-mask";
import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { scrollToContent } from "./Header";
import Link from "next/link";

type Inputs = {
    number: string;
    email: string;
};

const URL = `https://api.telegram.org/bot6879318097:AAEupFfkcyiTn3Og-ymTEr_LGh8ZeC3Rru0/sendMessage`;

function Footer({ translation }: any) {
    const [number, setNumber] = useState("");

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        if (data.email.length == 0) {
            let msg = `🆕 Бесплатная консультация! \n`;
            // msg += `👨 Имя: ${info?.name} \n`;
            msg += `📞 Номер телефона: ${data.number} \n`;

            axios
                .post(URL, {
                    chat_id: "-1002031594819",
                    parse_mode: "html",
                    text: msg,
                })
                .then((res) => {
                    if (res.status === 200 || res.status === 201) {
                        setNumber("");
                    }
                })
                .catch((err) => console.log(err));
        }
    };

    return (
        <footer
            id="footer"
            className="mt-44 max-lg:mt-32 max-md:mt-28 pt-36 bg-[#032D6C] relative"
        >
            <div className="bg-[#E6EDF8] py-10 max-lg:py-7 max-sm:py-5 w-[900px] max-lg:w-[700px] max-md:w-[80%] max-sm:w-[90%] absolute -top-[150px] max-lg:-top-[90px] max-sm:-top-[90px] left-1/2 -translate-x-1/2 flex flex-col items-center justify-center">
                <p className="text-[#032D6C] text-4xl max-lg:text-3xl max-sm:text-2xl font-bold">
                    {translation?.form?.title}
                </p>
                <p className="text-[#344054] mt-3 max-sm:text-sm w-[80%] text-center">
                    {translation?.form?.text}
                </p>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex items-center gap-3 w-[70%] max-sm:w-[90%] mt-5"
                    action=""
                >
                    <InputMask
                        mask="+\9\98-(99)-999-99-99"
                        placeholder={translation.form.input_text}
                        required
                        {...register("number", { required: true })}
                        value={number}
                        onChange={(e: any) => setNumber(e.target.value)}
                        className="border font-medium border-[#032D6C] rounded-md px-5 py-3 max-sm:text-sm max-sm:px-3 max-sm:py-2 bg-[#E6EDF8] w-full"
                    ></InputMask>
                    <input
                        {...register("email")}
                        title="email"
                        type="email"
                        className="hidden"
                    />
                    <button
                        type="submit"
                        className="bg-[#032D6C] text-center text-[#E6EDF8] max-sm:text-sm px-5 py-3 max-sm:px-3 max-sm:py-2 rounded-md"
                    >
                        {translation.form.send}
                    </button>
                </form>
            </div>
            <div className="custom_container flex max-xl:flex-col items-start max-xl:items-center justify-center gap-16 max-sm:gap-7 pb-16 max-sm:pb-0">
                <div className="max-xl:flex max-xl:flex-col max-xl:items-center">
                    <Image src="/logo.png" width={190} height={50} alt="" />
                    <div className="flex items-center justify-center gap-5 mt-6">
                        {/* <BsWhatsapp size={25} color="white" /> */}
                        <Link href="https://www.facebook.com/profile.php?id=100026747054522">
                            <FiFacebook size={25} color="white" />
                        </Link>
                        {/* <PiTelegramLogo size={25} color="white" /> */}
                        <Link href="https://www.instagram.com/nematkuchkarov">
                            <BsInstagram size={25} color="white" />
                        </Link>
                    </div>
                </div>

                <div className="flex max-sm:flex-col gap-16 max-sm:gap-5">
                    <div className="text-white">
                        <p className="text-[24px] max-sm:text-xl max-sm:text-center font-bold">
                            {translation.contact.title}
                        </p>
                        <div className="flex flex-col items-start gap-5 mt-6">
                            <div className="footer_flex">
                                <IoLocationOutline size={25} color="white" />
                                {translation.contact.location}
                            </div>
                            <div className="footer_flex">
                                <FiPhoneCall size={25} color="white" />
                                <a href="tel:+998939170990">
                                    +998(93) 917-09-90
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="text-white">
                        <p className="text-[24px]  max-sm:text-center max-sm:text-xl font-bold">
                            {translation.links.title}
                        </p>
                        <div className="flex flex-col items-start gap-5 mt-6">
                            <a
                                onClick={(e) => scrollToContent(e, "about")}
                                className="footer_flex"
                            >
                                <BsArrowRightCircle size={25} color="white" />
                                {translation.links.aboutUs}
                            </a>
                            <a
                                onClick={(e) => scrollToContent(e, "direction")}
                                className="footer_flex"
                            >
                                <BsArrowRightCircle size={25} color="white" />
                                {translation.links.directions}
                            </a>
                            <a
                                onClick={(e) => scrollToContent(e, "teachers")}
                                className="footer_flex"
                            >
                                <BsArrowRightCircle size={25} color="white" />
                                {translation.links.teachers}
                            </a>
                            <a
                                onClick={(e) =>
                                    scrollToContent(e, "infrastructure")
                                }
                                className="footer_flex"
                            >
                                <BsArrowRightCircle size={25} color="white" />
                                {translation.links.infrastructure}
                            </a>
                        </div>
                    </div>
                </div>

                <div className="text-white max-xl:w-full max-sm:flex max-sm:items-center max-sm:flex-col max-sm:justify-center">

                    <Image src={'/map.png'} width={200} height={100} alt="" className="m-auto mb-10 w-full max-xl:w-[33%] max-md:w-[300px] max-sm:w-[200px] rounded-xl"/>

                    <p className="text-[24px] max-sm:text-xl font-bold max-xl:text-center">
                        {translation.map}
                    </p>

                    <iframe
                        loading="lazy"
                        className={`w-full h-full max-xl:h-[400px] max-sm:h-[200px] mt-6`}
                        src="https://yandex.ru/map-widget/v1/?um=constructor%3A3eff3b60f296d746ba3d38d52d423df71aa54d150283eb7557df60537fd65832&amp;source=constructor"
                        frameBorder="0"
                    ></iframe>
                </div>
            </div>

            <hr className="w-full border border-white max-lg:hidden" />

            <p className="text-center text-white py-5 max-sm:py-2 max-sm:text-xs">
                © 2023 all right reserved
            </p>
        </footer>
    );
}

export default Footer;