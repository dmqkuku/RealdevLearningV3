import BlogContent from "./components/content";
import BlogToc from "./components/toc";

export default function Page() {

    return (
        <>
            <div className="container mx-auto">
                <hr/>
                <div className="flex mt-8 mb-8 justify-between">
                    <span className="text-3xl font-bold flex items-center">Mac에 Oracle DB 설치하기</span>
                </div>
                <hr/>
            </div>
            <div className="container mx-auto">
                <div className="my-2 border border-solid rounded-sm border-gray-600">
                    <div>
                        <img src={`/test.png`}></img>
                    </div>
                    <div className="grid grid-cols-4">

                        <div className="col-span-3">

                            <BlogContent/>
                        </div>

                        <div className="">
                            <BlogToc/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}