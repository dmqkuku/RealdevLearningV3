import Link from "next/link";


export default function Page() {
    return (
        <>
            <div className="container mx-auto">
                <hr/>
                <div className="flex mt-14 mb-14">
                    <p className="text-3xl font-bold">Introducing Out Best Author, Jeon</p>
                </div>
                <hr/>
            </div>
            <div className="container mx-auto">
                <div className="grid grid-cols-4 mr-2">
                    <Link href={`/blogs/1`}>
                        <div className="flex flex-col h-96 border border-solid rounded-sm border-gray-900 ml-2 mt-2 hover:shadow-xl">
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
                </div>
            </div>
        </>
    )
}