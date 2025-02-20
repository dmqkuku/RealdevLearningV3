import Link from "next/link";

import tagStyle from '@/app/tag.module.css'

export default function Page() {
    return (
        <>
            <div className="container mx-auto">
                <div>
                    <hr/>
                    <div className="flex mt-14 mb-2 justify-between">
                        <p className="text-3xl font-bold">게시글 제목</p>
                        <div className="">
                            <span className="text-xl">홍길동</span>
                        </div>
                    </div>
                    <div className="pt-2 pb-2">
                        <Link href={`/`}>
                            {/* <p className="text-sm text-gray-700">게시판 이용규칙 확인하러가기</p> */}
                        </Link>
                    </div>
                    <div className="flex mt-2 mb-6">
                        <span className={`border-purple-600 rounded-xl border-solid border p-1 m-1 text-purple-700 `}
                            >Lectures</span>
                    </div>
                    <hr/>
                </div>
                <div className="mx-12">
                    <div className="p-2 mb-4">
                        게시글 내용

                        Text Description....
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ante congue neque eleifend tincidunt quis non turpis. Donec vitae facilisis odio. Integer at volutpat felis, vitae accumsan orci. Quisque in urna purus. Phasellus id eros dui. Mauris mollis orci at efficitur aliquet. Proin ut enim dignissim, interdum tortor in, blandit diam. Ut risus sapien, vulputate quis mauris a, tempus dictum nisl. Quisque egestas faucibus arcu, et lacinia lectus commodo et.

    Proin malesuada ex magna, non gravida ex porttitor non. Aenean eu euismod urna, vel molestie erat. Integer ullamcorper mauris quam, sit amet bibendum risus ullamcorper sit amet. Nullam et nisl eget eros varius dictum eget eu lorem. Nullam at est mauris. Praesent auctor vulputate tortor, eget rutrum dui sagittis a. Proin consequat, justo at congue elementum, lacus ante dictum urna, nec tempor quam enim et diam. In a pharetra ipsum, a auctor diam.

    Sed faucibus, augue in blandit sollicitudin, risus ipsum dapibus justo, id condimentum mauris augue eget ipsum. Cras at ultricies quam. Aenean erat ipsum, dictum sed ligula et, mattis lobortis purus. Integer mollis viverra dictum. Fusce urna libero, commodo eget arcu in, ultrices porttitor lorem. In hac habitasse platea dictumst. Sed lobortis dolor eget lacus ornare, ac semper turpis bibendum. Nam pellentesque commodo turpis, ac volutpat lacus sollicitudin sed. Morbi mollis nec diam sit amet tristique. Ut luctus mauris efficitur aliquet tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam lectus justo, fermentum eu risus ac, auctor volutpat enim. Sed imperdiet odio nec elementum malesuada. Donec egestas sapien ante, et dapibus orci condimentum vel.

    Maecenas nulla sem, venenatis eu egestas a, porta in urna. Nam luctus lorem vitae dolor pulvinar gravida. Proin fermentum massa ante, id auctor magna ullamcorper sed. Nulla ullamcorper, nibh vel egestas laoreet, lorem mauris consequat turpis, ut rutrum libero mauris id velit. Aliquam convallis at est vel venenatis. Sed dictum lorem at lobortis luctus. Vivamus hendrerit, dui in laoreet ornare, massa lorem consectetur libero, ac consequat eros magna ut est. Donec vestibulum arcu ac commodo iaculis. Mauris molestie ex at nulla iaculis vulputate. Mauris viverra dui eleifend est volutpat, vitae tristique purus consequat. Praesent tristique magna nisl. Sed nec tellus id enim rutrum ultrices non placerat tortor. Sed a mauris in quam molestie posuere. Duis vel augue euismod, vehicula eros vitae, volutpat felis.

    Suspendisse placerat est eros, at volutpat velit lobortis condimentum. Sed luctus nec lectus in scelerisque. In hac habitasse platea dictumst. Phasellus commodo sollicitudin ex porta pretium. Duis varius arcu neque, eu cursus ex finibus at. Praesent eget nunc ultricies, efficitur nibh et, vestibulum felis. Donec at massa ut est porttitor hendrerit eget ac felis. Etiam et consequat neque, ut posuere purus. Sed tempor tempus risus, et sodales mi malesuada vel. Proin vitae volutpat lorem. Aenean consequat purus non vulputate tempus. Integer posuere aliquam orci lobortis imperdiet.
        
                    </div>
                </div>
                <div className="mx-12">
                    <hr/>
                    <div className="flex justify-end p-2">
                        <span className="text-xl">장길산</span>
                    </div>
                    <div className="p-2">
                        댓글 내용
                        Text Description....
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ante congue neque eleifend tincidunt quis non turpis. Donec vitae facilisis odio. Integer at volutpat felis, vitae accumsan orci. Quisque in urna purus. Phasellus id eros dui. Mauris mollis orci at efficitur aliquet. Proin ut enim dignissim, interdum tortor in, blandit diam. Ut risus sapien, vulputate quis mauris a, tempus dictum nisl. Quisque egestas faucibus arcu, et lacinia lectus commodo et.

    Proin malesuada ex magna, non gravida ex porttitor non. Aenean eu euismod urna, vel molestie erat. Integer ullamcorper mauris quam, sit amet bibendum risus ullamcorper sit amet. Nullam et nisl eget eros varius dictum eget eu lorem. Nullam at est mauris. Praesent auctor vulputate tortor, eget rutrum dui sagittis a. Proin consequat, justo at congue elementum, lacus ante dictum urna, nec tempor quam enim et diam. In a pharetra ipsum, a auctor diam.

                    </div>
                </div>
                <div className="mx-12">
                    <hr/>
                    <div className="flex justify-end p-2">
                        <span className="text-xl">장길산1</span>
                    </div>
                    <div className="p-2">
                        댓글 내용
                        Text Description....
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ante congue neque eleifend tincidunt quis non turpis. Donec vitae facilisis odio. Integer at volutpat felis, vitae accumsan orci. Quisque in urna purus. Phasellus id eros dui. Mauris mollis orci at efficitur aliquet. Proin ut enim dignissim, interdum tortor in, blandit diam. Ut risus sapien, vulputate quis mauris a, tempus dictum nisl. Quisque egestas faucibus arcu, et lacinia lectus commodo et.

    Proin malesuada ex magna, non gravida ex porttitor non. Aenean eu euismod urna, vel molestie erat. Integer ullamcorper mauris quam, sit amet bibendum risus ullamcorper sit amet. Nullam et nisl eget eros varius dictum eget eu lorem. Nullam at est mauris. Praesent auctor vulputate tortor, eget rutrum dui sagittis a. Proin consequat, justo at congue elementum, lacus ante dictum urna, nec tempor quam enim et diam. In a pharetra ipsum, a auctor diam.

                    </div>
                </div>
                <div className="mx-12">
                    <hr/>
                    <div className="flex justify-end p-2">
                        <span className="text-xl">장길산2</span>
                    </div>
                    <div className="p-2">
                        댓글 내용
                        Text Description....
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ante congue neque eleifend tincidunt quis non turpis. Donec vitae facilisis odio. Integer at volutpat felis, vitae accumsan orci. Quisque in urna purus. Phasellus id eros dui. Mauris mollis orci at efficitur aliquet. Proin ut enim dignissim, interdum tortor in, blandit diam. Ut risus sapien, vulputate quis mauris a, tempus dictum nisl. Quisque egestas faucibus arcu, et lacinia lectus commodo et.

    Proin malesuada ex magna, non gravida ex porttitor non. Aenean eu euismod urna, vel molestie erat. Integer ullamcorper mauris quam, sit amet bibendum risus ullamcorper sit amet. Nullam et nisl eget eros varius dictum eget eu lorem. Nullam at est mauris. Praesent auctor vulputate tortor, eget rutrum dui sagittis a. Proin consequat, justo at congue elementum, lacus ante dictum urna, nec tempor quam enim et diam. In a pharetra ipsum, a auctor diam.

                    </div>
                </div>
            </div>
        </>
    )
}