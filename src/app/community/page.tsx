'use client'
import Link from "next/link";

import tagStyle from '@/app/tag.module.css'
import { useState } from "react";

export default function Page() {

/** 0 : all, 1 : sql */
  const [tag, setTag] = useState<number>(0);

  function toggleTag(clickedTag : number) {
    if(tag === clickedTag) setTag(0);
    else setTag(clickedTag);
  }


    return (
        <>
            <div className="container mx-auto">
                <hr/>
                <div className="flex mt-14 mb-2">
                    <p className="text-3xl font-bold">토론 및 질문 게시판</p>
                </div>
                <div className="pt-2 pb-2">
                    <Link href={`/`}>
                        <p className="text-sm text-gray-700">게시판 이용규칙 확인하러가기</p>
                    </Link>
                </div>
                <div className="flex mt-2 mb-6">
                    <span className={`border-purple-600 rounded-xl border-solid border p-1 m-1 text-purple-700 ${tag === 1 ? tagStyle.active : ''}`}
                        onClick={() => toggleTag(1)}
                        >Lectures</span>
                </div>
                <hr/>
            </div>
            <div className="container mx-auto">
                <div className="grid grid-cols-4">
                    <Link href={`/community/1`}>
                        <div className="h-24 border border-solid rounded border-gray-900 ml-2 mt-2 hover:shadow-xl">
                            <div className="flex">
                                <span title={`Sql Programming Basic (PDF)에 대한 질문입니다.`} className="p-2 text-xl font-bold overflow-hidden text-ellipsis w-11/12 whitespace-nowrap">
                                    Sql Programming Basic (PDF)에 대한 질문입니다.
                                </span>
                            </div>
                            <div className="flex">
                                <span className="p-2 text-sm text-gray-600">게시글 내용입니다</span>
                            </div>
                            <hr className="mt-2"/>
                        </div>
                    </Link>
                    <Link href={`/books/1`}>
                        <div className="h-24 border border-solid rounded border-gray-900 ml-2 mt-2 hover:shadow-xl">
                            <div className="flex">
                                <span title={`Sql Programming Basic (PDF)`} className="p-2 text-xl font-bold overflow-hidden text-ellipsis w-11/12 whitespace-nowrap">
                                    Sql Programming Basic (PDF)에 대한 논점입니다.
                                </span>
                            </div>
                            <div className="flex">
                                <span className="p-2 text-sm text-gray-600">게시글 내용입니다</span>
                            </div>
                            <hr className="mt-2"/>
                        </div>
                    </Link>
                    {
                        Array.from({length : 11}).map((_, index) => {
                           return (
                            <Link href={`/books/1`} key={index}>
                                <div className="h-24 border border-solid rounded border-gray-900 ml-2 mt-2 hover:shadow-xl">
                                    <div className="flex">
                                        <span title={`Sql Programming Basic (PDF)`} className="p-2 text-xl font-bold overflow-hidden text-ellipsis w-11/12 whitespace-nowrap">
                                            Sql Programming Basic (PDF)에 대한 논점입니다.
                                        </span>
                                    </div>
                                    <div className="flex">
                                        <span className="p-2 text-sm text-gray-600">게시글 내용입니다</span>
                                    </div>
                                    <hr className="mt-2"/>
                                </div>
                            </Link>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}