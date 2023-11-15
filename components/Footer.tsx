import React, { useState } from "react";
import { BsWhatsapp, BsInstagram, BsArrowRightCircle } from "react-icons/bs";
import { FiFacebook, FiPhoneCall } from "react-icons/fi";
import { PiTelegramLogo } from "react-icons/pi";
import { IoLocationOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import InputMask from "react-input-mask";
import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";

type Inputs = {
    number: string;
    email: string;
};

const URL = `https://api.telegram.org/bot6879318097:AAEupFfkcyiTn3Og-ymTEr_LGh8ZeC3Rru0/sendMessage`;

function Footer() {

    const [number, setNumber] = useState('')

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
                        setNumber("")
                    }
                })
                .catch((err) => console.log(err));
        }
    };

    return (
        <footer className="mt-44 max-lg:mt-32 max-md:mt-28 pt-36 bg-[#032D6C] relative">
            <div className="bg-[#E6EDF8] py-10 max-lg:py-7 max-sm:py-5 w-[900px] max-lg:w-[700px] max-md:w-[80%] max-sm:w-[90%] absolute -top-[150px] max-lg:-top-[90px] max-sm:-top-[90px] left-1/2 -translate-x-1/2 flex flex-col items-center justify-center">
                <p className="text-[#032D6C] text-4xl max-lg:text-3xl max-sm:text-2xl font-bold">
                    Консультация
                </p>
                <p className="text-[#344054] mt-3 max-sm:text-sm w-[80%] text-center">
                    Keep up our latest news and events,Subscribe our newsletter
                </p>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex items-center gap-3 w-[70%] max-sm:w-[90%] mt-5"
                    action=""
                >
                    <InputMask
                        mask="+\9\98-(99)-999-99-99"
                        placeholder={"Номер телефона"}
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
                    <button type="submit" className="bg-[#032D6C] text-center text-[#E6EDF8] max-sm:text-sm px-5 py-3 max-sm:px-3 max-sm:py-2 rounded-md">
                        Отправить
                    </button>
                </form>
            </div>
            <div className="custom_container flex max-xl:flex-col items-start max-xl:items-center justify-center gap-16 max-sm:gap-7 pb-16 max-sm:pb-7">
                <div className="max-xl:flex max-xl:flex-col max-xl:items-center">
                    <Image src="/logo.png" width={190} height={50} alt="" />
                    <p className="text-white mt-5 leading-6 w-[217px] max-xl:w-[500px] max-sm:w-full max-xl:text-center">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Maecenas porttitor congue massa. Fusce posuere,
                        magna .
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
                                <IoLocationOutline size={25} color="white" />
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
                                <BsArrowRightCircle size={25} color="white" />
                                Contact us
                            </div>
                            <div className="footer_flex">
                                <BsArrowRightCircle size={25} color="white" />
                                Academic
                            </div>
                            <div className="footer_flex">
                                <BsArrowRightCircle size={25} color="white" />
                                Admission
                            </div>
                            <div className="footer_flex">
                                <BsArrowRightCircle size={25} color="white" />
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
    );
}

export default Footer;
