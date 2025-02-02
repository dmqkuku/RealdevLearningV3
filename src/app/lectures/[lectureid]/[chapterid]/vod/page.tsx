'use client'

import Link from "next/link"
import { useEffect, useState } from "react";

import acordionStyle from '@/app/accordion.module.css'

export default function Page() {


    const [accordionControl, setAccordionControl] =  useState<number[]>([]);

    useEffect(() => {
        setAccordionControl([0, 0, 0, 0, 0]);
    }, []);

    function toggleAccordion(h1Index : number) {
        const temp = (new Array(accordionControl.length)).fill(0);

        accordionControl.forEach((v, i) => {
            if(i === h1Index) temp[i] = v === 0 ? 1 : 0;
            else temp[i] = v;
        })

        setAccordionControl(temp);
    }

    return (
        <>
            <div className="container mx-auto">
                <div className="flex mt-14 mb-14">
                    <p className="text-3xl font-bold">강의제목</p>
                </div>
            </div>
            <div className="container mx-auto">
                <div className="flex gap-2">
                    <div className="grow-0">
                        <video 
                            about="강의제목" 
                            controls 
                            autoPlay 
                            controlsList="nodownload;" 
                            width={"920px"}
                            height={"505px"}
                            src="#"
                            ></video>
                    </div>
                    <div className="grow overflow-scroll h-[30rem]">
                        <div className="cursor-grab ">
                            <h1 className="text-xl p-2" onClick={() => {toggleAccordion(0)}}>
                                아코디언 큰제목1
                            </h1>
                            <div className={
                                `flex
                                ${acordionStyle.accordion} 
                                justify-between 
                                ${accordionControl[0] === 1 ? acordionStyle.active : ''}`}>
                                <Link href="#">
                                    <h2 className={`
                                        m-2 text-gray-600 text-sm
                                        `}>아코디언 소제목</h2>
                                </Link>
                                <span className={`
                                    m-2 text-gray-600 text-sm
                                    `}>2분 48초</span>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}