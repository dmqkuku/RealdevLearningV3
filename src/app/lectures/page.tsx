import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa6";
import { PiCurrencyKrw, PiCurrencyKrwBold } from "react-icons/pi";


export default function Page() {
    return (
        <>
            <div className="container mx-auto">
                <hr/>
                <div className="flex mt-14 mb-14">
                    <p className="text-3xl font-bold">Introducing Out Best Instructor, Jeon</p>
                </div>
                {/* <div className="flex mt-2 mb-14">
                    <span className="border-purple-600 rounded-xl border-solid border p-1 m-1 text-purple-700">Posts</span>
                    <span className="border-purple-600 rounded-xl border-solid border p-1 m-1 text-purple-700">Lectures</span>
                </div> */}
                <hr/>
            </div>
            <div className="container mx-auto">
                <div className="grid grid-cols-4 mr-2">
                    <Link href={`/lectures/1`}>
                        <div className="h-96 border border-solid rounded border-gray-900 ml-2 mt-2">
                            <img src={`/test.png`}></img>
                            <div className="flex">
                                <span title={`Java Programming Basic (PDF)`} className="p-2 text-xl font-bold overflow-hidden text-ellipsis w-11/12 whitespace-nowrap">Java Programming Basic</span>
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
                    <Link href={`/lectures/1`}>
                        <div className="h-96 border border-solid rounded border-gray-900 ml-2 mt-2">
                            <img src={`/test.png`}></img>
                            <div className="flex">
                                <span title={`Javascript Programming Basic (PDF)`} className="p-2 text-xl font-bold overflow-hidden text-ellipsis w-11/12 whitespace-nowrap">Javascript Programming Basic</span>
                            </div>
                            <div className="flex mt-6">
                                
                            </div>
                            <hr className="mt-2"/>
                            <div className="flex my-3">
                                <span className="py-2 pl-2">60,000</span>
                                <span className="py-2 mt-0.5"><PiCurrencyKrwBold/></span>
                            </div>
                        </div>
                    </Link>
                    <Link href={`/lectures/1`}>
                        <div className="h-96 border border-solid rounded border-gray-900 ml-2 mt-2">
                            <img src={`/test.png`}></img>
                            <div className="flex">
                                <span title={`Sql Programming Basic (PDF)`} className="p-2 text-xl font-bold overflow-hidden text-ellipsis w-11/12 whitespace-nowrap">Sql Programming Basic</span>
                            </div>
                            <div className="flex mt-6">
                                
                            </div>
                            <hr className="mt-2"/>
                            <div className="flex my-3">
                                <span className="py-2 pl-2">66,000</span>
                                <span className="py-2 mt-0.5"><PiCurrencyKrwBold/></span>
                            </div>
                        </div>
                    </Link>
                    <Link href={`/lectures/1`}>
                        <div className="h-96 border border-solid rounded border-gray-900 ml-2 mt-2">
                            <img src={`/test.png`}></img>
                            <div className="flex">
                                <span title={`Html Programming Basic (PDF)`} className="p-2 text-xl font-bold overflow-hidden text-ellipsis w-11/12 whitespace-nowrap">Html Programming Basic </span>
                            </div>
                            <div className="flex mt-6">
                                
                            </div>
                            <hr className="mt-2"/>
                            <div className="flex my-3">
                                <span className="py-2 pl-2">33,000</span>
                                <span className="py-2 mt-0.5"><PiCurrencyKrwBold/></span>
                            </div>
                        </div>
                    </Link>
                    <Link href={`/lectures/1`}>
                        <div className="h-96 border border-solid rounded border-gray-900 ml-2 mt-2">
                            <img src={`/test.png`}></img>
                            <div className="flex">
                                <span title={`Css Programming Basic (PDF)`} className="p-2 text-xl font-bold overflow-hidden text-ellipsis w-11/12 whitespace-nowrap">Css Programming Basic</span>
                            </div>
                            <div className="flex mt-6">
                                
                            </div>
                            <hr className="mt-2"/>
                            <div className="flex my-3">
                                <span className="py-2 pl-2">33,000</span>
                                <span className="py-2 mt-0.5"><PiCurrencyKrwBold/></span>
                            </div>
                        </div>
                    </Link>
                    <Link href={`/lectures/free/vod`}>
                        <div className="h-96 border border-solid rounded border-gray-900 ml-2 mt-2">
                            <img src={`/test.png`}></img>
                            <div className="flex">
                                <span title={`Css Programming Basic (PDF)`} className="p-2 text-xl font-bold overflow-hidden text-ellipsis w-11/12 whitespace-nowrap">Css Programming Basic</span>
                            </div>
                            <div className="flex mt-6">
                                
                            </div>
                            <hr className="mt-2"/>
                            <div className="flex my-3">
                                <span className="py-2 pl-2">free</span>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}