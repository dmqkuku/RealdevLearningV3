import Link from "next/link";
import BlogCard from "./components/card";


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
                        <BlogCard/>
                    </Link>
                </div>
            </div>
        </>
    )
}