'use client'
import Link from "next/link";
import { useState } from "react";
import { PiCurrencyKrwBold } from "react-icons/pi";

import tagStyle from '@/app/tag.module.css'
export default function Home() {

  /** 0 : all, 1 : Lectures, 2: 전자책, 3 : 종이책, 4 : posts */
  const [tag, setTag] = useState<number>(0);

  function toggleTag(clickedTag : number) {
    if(tag === clickedTag) setTag(0);
    else setTag(clickedTag);
  }

  return (
    <>
            <div className="container mx-auto">
                <hr/>
                <div className="flex mt-14 mb-14">
                    <p className="text-3xl font-bold">Introducing Out Best Instructor and Author, Jeon</p>
                </div>
                <div className="flex mt-2 mb-14">
                    <span className={`border-purple-600 rounded-xl border-solid border p-1 m-1 text-purple-700 ${tag === 1 ? tagStyle.active : ''}`}
                      onClick={() => toggleTag(1)}
                    >Lectures</span>
                    <span className={`border-purple-600 rounded-xl border-solid border p-1 m-1 text-purple-700 ${tag === 2 ? tagStyle.active : ''}`}
                      onClick={() => toggleTag(2)}
                    >전자책</span>
                    <span className={`border-purple-600 rounded-xl border-solid border p-1 m-1 text-purple-700 ${tag === 2 ? tagStyle.active : ''}`}
                      onClick={() => toggleTag(3)}
                    >종이책</span>
                    <span className={`border-purple-600 rounded-xl border-solid border p-1 m-1 text-purple-700 ${tag === 3 ? tagStyle.active : ''}`}
                      onClick={() => toggleTag(4)}
                    >Blogs</span>
                </div>
                <hr/>
            </div>
            <div className="container mx-auto">
                <div className="grid grid-cols-4 mr-2">
                  {
                    (tag === 0 || tag === 1) &&
                      <>
                        <Link href={`/lectures/1`}>
                          <div className="h-96 border border-solid rounded-sm border-gray-900 ml-2 mt-2">
                              <img src={`/test.png`}></img>
                              <div className="flex">
                                  <span title={`Java Programming Basic (PDF)`} className="p-2 text-xl font-bold overflow-hidden text-ellipsis w-11/12 whitespace-nowrap">Java Programming Basic</span>
                              </div>
                              <div className="flex mt-6">
                                <span className="p-2 text-gray-300">Lectures</span>
                              </div>
                              <hr className="mt-2"/>
                              <div className="flex my-3">
                                  <span className="py-2 pl-2">54,000</span>
                                  <span className="py-2 mt-0.5"><PiCurrencyKrwBold/></span>
                              </div>
                          </div>
                      </Link>
                      <Link href={`/lectures/1`}>
                          <div className="h-96 border border-solid rounded-sm border-gray-900 ml-2 mt-2">
                              <img src={`/test.png`}></img>
                              <div className="flex">
                                  <span title={`Javascript Programming Basic (PDF)`} className="p-2 text-xl font-bold overflow-hidden text-ellipsis w-11/12 whitespace-nowrap">Javascript Programming Basic</span>
                              </div>
                              <div className="flex mt-6">
                               <span className="p-2 text-gray-300">Lectures</span>
                              </div>
                              <hr className="mt-2"/>
                              <div className="flex my-3">
                                  <span className="py-2 pl-2">60,000</span>
                                  <span className="py-2 mt-0.5"><PiCurrencyKrwBold/></span>
                              </div>
                          </div>
                      </Link>
                      <Link href={`/lectures/1`}>
                          <div className="h-96 border border-solid rounded-sm border-gray-900 ml-2 mt-2">
                              <img src={`/test.png`}></img>
                              <div className="flex">
                                  <span title={`Sql Programming Basic (PDF)`} className="p-2 text-xl font-bold overflow-hidden text-ellipsis w-11/12 whitespace-nowrap">Sql Programming Basic</span>
                              </div>
                              <div className="flex mt-6">
                                <span className="p-2 text-gray-300">Lectures</span>
                              </div>
                              <hr className="mt-2"/>
                              <div className="flex my-3">
                                  <span className="py-2 pl-2">66,000</span>
                                  <span className="py-2 mt-0.5"><PiCurrencyKrwBold/></span>
                              </div>
                          </div>
                      </Link>
                      <Link href={`/lectures/1`}>
                          <div className="h-96 border border-solid rounded-sm border-gray-900 ml-2 mt-2">
                              <img src={`/test.png`}></img>
                              <div className="flex">
                                  <span title={`Html Programming Basic (PDF)`} className="p-2 text-xl font-bold overflow-hidden text-ellipsis w-11/12 whitespace-nowrap">Html Programming Basic </span>
                              </div>
                              <div className="flex mt-6">
                                <span className="p-2 text-gray-300">Lectures</span>
                              </div>
                              <hr className="mt-2"/>
                              <div className="flex my-3">
                                  <span className="py-2 pl-2">33,000</span>
                                  <span className="py-2 mt-0.5"><PiCurrencyKrwBold/></span>
                              </div>
                          </div>
                      </Link>
                      <Link href={`/lectures/1`}>
                          <div className="h-96 border border-solid rounded-sm border-gray-900 ml-2 mt-2">
                              <img src={`/test.png`}></img>
                              <div className="flex">
                                  <span title={`Css Programming Basic (PDF)`} className="p-2 text-xl font-bold overflow-hidden text-ellipsis w-11/12 whitespace-nowrap">Css Programming Basic</span>
                              </div>
                              <div className="flex mt-6">
                                <span className="p-2 text-gray-300">Lectures</span>
                              </div>
                              <hr className="mt-2"/>
                              <div className="flex my-3">
                                  <span className="py-2 pl-2">33,000</span>
                                  <span className="py-2 mt-0.5"><PiCurrencyKrwBold/></span>
                              </div>
                          </div>
                      </Link>
                    </>
                  }
                    
                  {
                    (tag === 0 || tag === 2) &&
                      <>
                        <Link href={`/books/1`}>
                          <div className="h-96 border border-solid rounded-sm border-gray-900 ml-2 mt-2">
                              <img src={`/test.png`}></img>
                              <div className="flex">
                                  <span title={`Java Programming Basic (PDF)`} className="p-2 text-xl font-bold overflow-hidden text-ellipsis w-11/12 whitespace-nowrap">Java Programming Basic (PDF)</span>
                              </div>
                              <div className="flex mt-6">
                                <span className="p-2 text-gray-300">Books</span>
                              </div>
                              <hr className="mt-2"/>
                              <div className="flex my-3">
                                  <span className="py-2 pl-2">54,000</span>
                                  <span className="py-2 mt-0.5"><PiCurrencyKrwBold/></span>
                              </div>
                          </div>
                      </Link>
                      <Link href={`/books/1`}>
                          <div className="h-96 border border-solid rounded-sm border-gray-900 ml-2 mt-2">
                              <img src={`/test.png`}></img>
                              <div className="flex">
                                  <span title={`Javascript Programming Basic (PDF)`} className="p-2 text-xl font-bold overflow-hidden text-ellipsis w-11/12 whitespace-nowrap">Javascript Programming Basic (PDF)</span>
                              </div>
                              <div className="flex mt-6">
                                <span className="p-2 text-gray-300">Books</span>
                              </div>
                              <hr className="mt-2"/>
                              <div className="flex my-3">
                                  <span className="py-2 pl-2">60,000</span>
                                  <span className="py-2 mt-0.5"><PiCurrencyKrwBold/></span>
                              </div>
                          </div>
                      </Link>
                      <Link href={`/books/1`}>
                          <div className="h-96 border border-solid rounded-sm border-gray-900 ml-2 mt-2">
                              <img src={`/test.png`}></img>
                              <div className="flex">
                                  <span title={`Sql Programming Basic (PDF)`} className="p-2 text-xl font-bold overflow-hidden text-ellipsis w-11/12 whitespace-nowrap">Sql Programming Basic (PDF)</span>
                              </div>
                              <div className="flex mt-6">
                                <span className="p-2 text-gray-300">Books</span>
                              </div>
                              <hr className="mt-2"/>
                              <div className="flex my-3">
                                  <span className="py-2 pl-2">66,000</span>
                                  <span className="py-2 mt-0.5"><PiCurrencyKrwBold/></span>
                              </div>
                          </div>
                      </Link>
                      <Link href={`/books/1`}>
                          <div className="h-96 border border-solid rounded-sm border-gray-900 ml-2 mt-2">
                              <img src={`/test.png`}></img>
                              <div className="flex">
                                  <span title={`Html Programming Basic (PDF)`} className="p-2 text-xl font-bold overflow-hidden text-ellipsis w-11/12 whitespace-nowrap">Html Programming Basic (PDF)</span>
                              </div>
                              <div className="flex mt-6">
                                <span className="p-2 text-gray-300">Books</span>
                              </div>
                              <hr className="mt-2"/>
                              <div className="flex my-3">
                                  <span className="py-2 pl-2">33,000</span>
                                  <span className="py-2 mt-0.5"><PiCurrencyKrwBold/></span>
                              </div>
                          </div>
                      </Link>
                      <Link href={`/books/1`}>
                          <div className="h-96 border border-solid rounded-sm border-gray-900 ml-2 mt-2">
                              <img src={`/test.png`}></img>
                              <div className="flex">
                                  <span title={`Css Programming Basic (PDF)`} className="p-2 text-xl font-bold overflow-hidden text-ellipsis w-11/12 whitespace-nowrap">Css Programming Basic (PDF)</span>
                              </div>
                              <div className="flex mt-6">
                                <span className="p-2 text-gray-300">Books</span>
                              </div>
                              <hr className="mt-2"/>
                              <div className="flex my-3">
                                  <span className="py-2 pl-2">33,000</span>
                                  <span className="py-2 mt-0.5"><PiCurrencyKrwBold/></span>
                              </div>
                          </div>
                      </Link>
                    </>
                  }
                  {
                    (tag === 0 || tag === 3) &&
                    <>
                      <Link href={`/books/1`}>
                          <div className="h-96 border border-solid rounded-sm border-gray-900 ml-2 mt-2">
                              <img src={`/test.png`}></img>
                              <div className="flex">
                                  <span title={`Css Programming Basic (종이책)`} className="p-2 text-xl font-bold overflow-hidden text-ellipsis w-11/12 whitespace-nowrap">Css Programming Basic (종이책)</span>
                              </div>
                              <div className="flex mt-6">
                                <span className="p-2 text-gray-300">Books</span>
                              </div>
                              <hr className="mt-2"/>
                              <div className="flex my-3">
                                  <span className="py-2 pl-2">33,000</span>
                                  <span className="py-2 mt-0.5"><PiCurrencyKrwBold/></span>
                              </div>
                          </div>
                      </Link>
                    </>
                  }
                  {
                    (tag === 0 || tag === 4) &&
                    <>
                      <Link href={`/blogs/1`}>
                        <div className="flex flex-col h-96 border border-solid rounded-sm border-gray-900 ml-2 mt-2">
                            <img src={`/test.png`}></img>
                            <div className="flex">
                                <span title={`Java Programming Basic (PDF)`} className="p-2 text-xl font-bold overflow-hidden text-ellipsis w-11/12 whitespace-nowrap">
                                    Mac에서 오라클 DB설치하기
                                </span>
                            </div>
                            <hr className="mt-2"/>
                            <div className="flex grow items-end p-2 justify-between">
                                <span className="text-gray-300">2025.01.09</span>
                                <span className="text-gray-300">Jeon</span>
                            </div>
                        </div>
                      </Link>
                    </>
                  }
                </div>
            </div>
        </>
  );
}
