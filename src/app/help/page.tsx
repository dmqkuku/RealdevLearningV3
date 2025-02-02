import Link from "next/link";


export default function Page() {
    return (
        <>
            <div className="container mx-auto">
                <Link href="/lectures/free/vod">무료 강의 수강 테스트</Link>
                <br/>
                <Link href="/lectures/1/1/vod">강의 수강 테스트</Link>
            </div>
        </>
    )
}