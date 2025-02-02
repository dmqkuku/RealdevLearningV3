'use client'

import Link from "next/link"
import { useEffect, useState } from "react"

import accordionStyle from '@/app/slider.module.css';

export default function Page() {

    return (
        <>
            <div className="container mx-auto">
                <div className="flex mt-14 mb-14">
                    <p className="text-3xl font-bold">무료강의제목</p>
                </div>
            </div>
            <div className="container mx-auto">
                <div className="flex gap-2">
                    <div className="grow-0">
                        <iframe 
                            width="920" 
                            height="505" 
                            src="https://www.youtube.com/embed/ucz3fxWdfFc?si=iMEimeJeNtFbm1_Z" 
                            title="YouTube video player" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerPolicy="strict-origin-when-cross-origin" 
                            allowFullScreen></iframe>
                    </div>
                    <div className="p-2 grow">
                        <div className="p-8">
                            <h1 className="text-xl">목차</h1>
                            <div className="p-4 overflow-scroll h-[30rem]">
                                <ul>
                                    <li className="mb-4">
                                        <Link href="#">
                                            <div className="flex">
                                                <h2 className="text-lg text-gray-800">영상 제목</h2>
                                            </div>
                                            <div className="flex">
                                                <p className="text-sm text-gray-500">영상 설명</p>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link href="#">
                                            <div className="flex">
                                                <h2 className="text-lg text-gray-800">영상 제목</h2>
                                            </div>
                                            <div className="flex">
                                                <p className="text-sm text-gray-500">영상 설명</p>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link href="#">
                                            <div className="flex">
                                                <h2 className="text-lg text-gray-800">영상 제목</h2>
                                            </div>
                                            <div className="flex">
                                                <p className="text-sm text-gray-500">영상 설명</p>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link href="#">
                                            <div className="flex">
                                                <h2 className="text-lg text-gray-800">영상 제목</h2>
                                            </div>
                                            <div className="flex">
                                                <p className="text-sm text-gray-500">영상 설명</p>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link href="#">
                                            <div className="flex">
                                                <h2 className="text-lg text-gray-800">영상 제목</h2>
                                            </div>
                                            <div className="flex">
                                                <p className="text-sm text-gray-500">영상 설명</p>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link href="#">
                                            <div className="flex">
                                                <h2 className="text-lg text-gray-800">영상 제목</h2>
                                            </div>
                                            <div className="flex">
                                                <p className="text-sm text-gray-500">영상 설명</p>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link href="#">
                                            <div className="flex">
                                                <h2 className="text-lg text-gray-800">영상 제목</h2>
                                            </div>
                                            <div className="flex">
                                                <p className="text-sm text-gray-500">영상 설명</p>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link href="#">
                                            <div className="flex">
                                                <h2 className="text-lg text-gray-800">영상 제목</h2>
                                            </div>
                                            <div className="flex">
                                                <p className="text-sm text-gray-500">영상 설명</p>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link href="#">
                                            <div className="flex">
                                                <h2 className="text-lg text-gray-800">영상 제목</h2>
                                            </div>
                                            <div className="flex">
                                                <p className="text-sm text-gray-500">영상 설명</p>
                                            </div>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>      
        </>
    )
}