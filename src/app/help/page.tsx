import Link from "next/link";


export default function Page() {
    return (
        <>
            <div className="container mx-auto">
                <Link href="/lectures/free/vod">
                    <p className="px-2 pt-2">
                        무료 강의 수강 테스트
                    </p>
                </Link>
                <br/>
                <Link href="/lectures/1/1/vod">
                    <p className="px-2">
                        강의 수강 테스트
                    </p>
                </Link>
                <Link href="/purchase/shopping-cart">
                    <p className="px-2">
                        구매 테스트
                    </p>
                </Link>
                <Link href="/purchase/shopping-cart">
                    <p className="px-2">
                        마이페이지 테스트
                    </p>
                </Link>
            </div>
        </>
    )
}