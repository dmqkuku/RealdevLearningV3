'use client'

import { useState } from "react";

import acordionStyle from "@/app/accordion.module.css";
import Link from "next/link";
import { PiCurrencyKrwBold } from "react-icons/pi";
import Image from "next/image";

export default function Page() {

    /** accordion start*/
    const [accordion1Control, setAccordion1Control] = useState(1);
    function toggleAccordion1() {
        setAccordion1Control(accordion1Control === 1 ? 0 : 1);
    }
    /** accordion end */
    /** accordion start*/
    const [accordion2Control, setAccordion2Control] = useState(1);
    function toggleAccordion2() {
        setAccordion1Control(accordion2Control === 1 ? 0 : 1);
    }
    /** accordion end */
    /** accordion start*/
    const [accordion3Control, setAccordion3Control] = useState(1);
    function toggleAccordion3() {
        setAccordion1Control(accordion3Control === 1 ? 0 : 1);
    }
    /** accordion end */

    return (
        <>
            <div className="container mx-auto">
                <div className="flex my-14">
                    <p className="text-3xl font-bold">장바구니</p>
                </div>
            </div>
            <div className="container mx-auto">
                <div className={`flex my-6 mx-8
                    ${accordion1Control === 1 ? 'cursor-pointer' : 'cursor-default'}
                    `}
                    onClick={toggleAccordion1}
                    >
                    <p className="text-xl">종이책</p>
                </div>
                <hr/>
                <div className={`mx-2 
                    ${acordionStyle.accordion} 
                    ${accordion1Control === 1 ? acordionStyle.active : ''}
                    `}>
                    <div className={`${acordionStyle.view}`}>
                        <div className="grid grid-cols-4 gap-4">
                            <div>
                                <Link href={`/books/1`}>
                                    <div className="h-96 border border-solid rounded-sm border-gray-900 ml-2 mt-2 hover:shadow-inner hover:shadow-purple-300">
                                        <Image alt={`test`} src={`/test.png`} width={420} height={630}/>
                                        <div className="flex">
                                            <span title={`Java Programming Basic (PDF)`} className="p-2 text-xl font-bold overflow-hidden text-ellipsis w-11/12 whitespace-nowrap">Java Programming Basic (PDF)</span>
                                        </div>
                                        <div className="flex mt-6">
                                            
                                        </div>
                                        <hr className="mt-2"/>
                                        <div className="flex my-3">
                                            <span className="py-2 pl-2">54,000</span>
                                            <span className="py-2 mt-0.5"><PiCurrencyKrwBold/></span>
                                        </div>
                                    </div>
                                </Link>

                                <div className="flex justify-between m-2">
                                    <span className="underline cursor-pointer">삭제</span>
                                    <div className="flex justify-end">
                                        <span>구매가 : 32,000</span>
                                        <span><PiCurrencyKrwBold/></span>
                                    </div>
                                </div>
                            </div>
                        
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto">
                <div className="flex my-6 mx-8">
                    <p className="text-xl">전자책</p>
                </div>
                <hr/>
            </div>
            <div className="container mx-auto">
                <div className="flex my-6 mx-8">
                    <p className="text-xl">강의</p>
                </div>
                <hr/>
            </div>
            <div className="container mx-auto mt-10">
                <hr/>
                <div className="flex justify-end mt-8">
                    <span className="underline cursor-pointer text-xl">구매하기</span>
                </div>
            </div>
        </>
    )
}