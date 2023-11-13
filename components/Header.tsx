import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { BiChevronRight } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { Select } from "antd";
import { useRouter } from "next/router";

function Header() {
    const [modalHandler, setModalHandler] = useState(false);
    const router = useRouter();
    const { locale } = router;
    const [localeValue, setLocaleValue] = useState<any>(locale);

    const changeLang = (e: any) => {
        const locale = e;
        router.push(
            { pathname: router.pathname, query: router.query },
            router.asPath,
            { locale }
        );
        setLocaleValue(locale);
    };

    return (
        <header className="w-full absolute top-0 left-0 bg-[#F6FAFF] z-10">
            <div className="w-[80%] max-md:w-[95%] p-3 m-auto flex items-center justify-between gap-5">
                <Image
                    src="/logo.png"
                    width={100}
                    height={20}
                    alt=""
                    className="max-lg:w-[90px] max-sm:w-[50px]"
                />

                <div className="flex items-center gap-5 max-lg:hidden">
                    <ul className="flex items-center gap-5 text-[#032D6C]">
                        <li>
                            <Link href={"#"}>About</Link>
                        </li>
                        <li>
                            <Link href={"#"}>Academics</Link>
                        </li>
                        <li>
                            <Link href={"#"}>Admission</Link>
                        </li>
                        <li>
                            <Link href={"#"}>Research</Link>
                        </li>
                        <li>
                            <Link href={"#"}>Job</Link>
                        </li>
                    </ul>
                </div>

                <div className="flex items-center gap-5 max-md:gap-4">
                    <Select
                        defaultValue={localeValue}
                        style={{
                            width: "90px",
                            display: "flex",
                            justifyItems: "center",
                            justifyContent: "center",
                        }}
                        value={localeValue}
                        onChange={(e: any) => changeLang(e)}
                        options={[
                            {
                                value: "ru",
                                label: (
                                    <p className="flex items-center gap-1">
                                        <Image
                                            width={100}
                                            height={100}
                                            src="/images/russia.svg"
                                            alt="russia"
                                            className="w-[20px]"
                                        />
                                        {"RU"}
                                    </p>
                                ),
                            },
                            {
                                value: "uz",
                                label: (
                                    <span className="flex items-center gap-1">
                                        <Image
                                            width={100}
                                            height={100}
                                            src="/images/uzb.png"
                                            alt="uzb"
                                            className="w-[20px]"
                                        />
                                        {"UZ"}
                                    </span>
                                ),
                            },
                            {
                                value: "tjk",
                                label: (
                                    <span className="flex items-center gap-1">
                                        <Image
                                            width={100}
                                            height={100}
                                            src="/images/eng_flag.webp"
                                            alt="eng"
                                            className="w-[20px] h-[20px] rounded-full"
                                        />
                                        {"TJK"}
                                    </span>
                                ),
                            },
                        ]}
                    />
                    <button className="max-lg:hidden bg-[#032D6C] flex items-center gap-4 px-[28px] py-[10px] text-white text-[18px] font-medium rounded-full">
                        Contact us
                        <BiChevronRight size={25} />
                    </button>

                    <GiHamburgerMenu
                        size={30}
                        color="#032D6C"
                        className="lg:hidden cursor-pointer"
                        onClick={() => setModalHandler(true)}
                    />
                </div>
            </div>

            {modalHandler ? (
                <div className="w-full h-screen bg-[#F6FAFF] fixed top-0 left-0 lg:hidden">
                    <div className="w-[80%] max-md:w-[95%] p-3 m-auto flex items-center justify-between gap-5">
                        <Image
                            src="/logo.png"
                            width={200}
                            height={120}
                            alt=""
                            className="w-[150px] max-sm:w-[130px]"
                        />
                        <IoClose
                            size={30}
                            color="#032D6C"
                            onClick={() => setModalHandler(false)}
                        />
                    </div>

                    <ul className="flex flex-col items-center gap-5 mt-20 text-[#032D6C] font-bold text-2xl">
                        <li>
                            <Link href={"#"}>About</Link>
                        </li>
                        <li>
                            <Link href={"#"}>Academics</Link>
                        </li>
                        <li>
                            <Link href={"#"}>Admission</Link>
                        </li>
                        <li>
                            <Link href={"#"}>Research</Link>
                        </li>
                        <li>
                            <Link href={"#"}>Job</Link>
                        </li>
                    </ul>
                    <button className="mt-5 bg-[#032D6C] flex items-center gap-4 px-[28px] py-[10px] text-white text-[18px] font-medium rounded-full m-auto">
                        Contact us
                        <BiChevronRight size={25} />
                    </button>
                </div>
            ) : null}
        </header>
    );
}

export default Header;