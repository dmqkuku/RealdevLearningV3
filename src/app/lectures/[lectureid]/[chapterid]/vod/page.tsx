'use client'

import Link from "next/link"
import { useEffect, useState } from "react";

import acordionStyle from '@/app/accordion.module.css';

import qnaStyle from "@/app/qna.module.css";

export default function Page() {

    /** Accordion Start */
    const [accordionControl, setAccordionControl] =  useState<number[]>([]);

    useEffect(() => {
        setAccordionControl([0, 0, 0, 0, 0]);
    }, []);

    function toggleAccordion(h1Index : number) {
        const temp = (new Array(accordionControl.length)).fill(0);

        accordionControl.forEach((v, i) => {
            if(i === h1Index) temp[i] = v === 0 ? 1 : 0;
            else temp[i] = v;
        })

        setAccordionControl(temp);
    }
    /** Accordion End */

    /** QnA Start */
    /** 0 : default(all closed), 1 : view, 2: write */
    const [qnaMode, setQnaMode] = useState<0 | 1 | 2>(0);

    function toggleWrite() {
        setQnaMode(qnaMode === 2 ? 0 : 2);
    }
    function toggleView() {
        setQnaMode(qnaMode === 1 ? 0 : 1);
    }

    const [currentPage, setCurrentPage] = useState(0);
    const [hasNextPage, setHasNextPage] = useState(false);
    const [hasPrevPage, setHasPrevHage] = useState(false);

    useEffect(() => {
        /** 임시로 테스트 데이터 적용 */
        setHasNextPage(true);

    }, []);

    function clickNextHandler() {
        /** 임시 구현 */
        setHasNextPage(false);
        setHasPrevHage(true);
    }
    function clickPrevHandler() {
        /** 임시 구현 */
        setHasPrevHage(false);
        setHasNextPage(true);

    }

    const [viewingQuestionId, setViewingQuestionId] = useState(0);

    function viewQuestion(qId : number) {
        setViewingQuestionId(qId);
    }
    /** QnA End */

    return (
        <>
            <div className="container mx-auto">
                <div className="flex mt-14 mb-14">
                    <p className="text-3xl font-bold">강의제목</p>
                </div>
            </div>
            <div className="container mx-auto">
                <div className="flex gap-2">
                    <div className="grow-0">
                        <video 
                            about="강의제목" 
                            controls 
                            autoPlay 
                            controlsList="nodownload;" 
                            width={"920px"}
                            height={"505px"}
                            src="#"
                            ></video>
                    </div>
                    <div className={`grow overflow-y-auto h-[30rem] ml-8 ${acordionStyle.scrollbar}`}>
                        <div className="cursor-pointer ">
                            <h1 className="text-xl p-2" onClick={() => {toggleAccordion(0)}}>
                                아코디언 큰제목1
                            </h1>
                            <div className={
                                `flex
                                ${acordionStyle.accordion} 
                                ${accordionControl[0] === 1 ? acordionStyle.active : ''}`}>
                                <div className={`
                                flex
                                justify-between ${acordionStyle.view}`}>
                                    <Link href="#">
                                        <h2 className={`
                                            m-2 text-gray-600 text-sm
                                            `}>아코디언 소제목</h2>
                                    </Link>
                                    <span className={`
                                        m-2 text-gray-600 text-sm
                                        `}>2분 48초</span>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="container mx-auto">
                <div className="flex mt-14 mb-14 justify-between">
                    <p className="text-3xl font-bold">강의 질문과 답변</p>
                    <div className="flex justify-end">
                        <span className="mx-2 underline cursor-pointer"
                            onClick={toggleView}
                        >질문 : 9개</span>
                        <span className="mx-2 underline cursor-pointer"
                            onClick={toggleWrite}
                        >질문하기</span>
                    </div>
                </div>
            </div>
            <div className={`container mx-auto ${qnaMode === 1 ? `${qnaStyle.container} ${qnaStyle.active}` : qnaStyle.container}`}>
                <div className={`${qnaStyle.view}`}>
                    <div className="flex justify-between">
                        <div className="flex justify-start">
                            <p className="text-xl mx-4">강의제목</p>
                            <div className="flex items-end">
                                <p className="text-sm text-gray-400">챕터제목</p>
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <span className={`text-sm text-gray-500 underline mx-2 cursor-pointer
                                ${hasPrevPage ? qnaStyle.active : ''}
                                `}
                                onClick={() => {if(hasPrevPage) clickPrevHandler()}}
                                >이전</span>
                            <span className={`text-sm text-gray-500 underline mx-2 cursor-pointer
                                ${hasNextPage ? qnaStyle.active : ''}
                                `}
                                onClick={() => {if(hasNextPage) clickNextHandler()}}
                                >다음</span>
                        </div>
                    </div>
                    <div className="">
                        {
                            hasNextPage && 
                            Array.from({length : 5}).map((v, i) => {
                                return (
                                    <div key={i} 
                                        onClick={() => viewQuestion(viewingQuestionId === 0 ? (i + 1) : 0)}
                                        className="h-full border border-solid rounded-sm border-gray-900 ml-2 mt-2 hover:shadow-xl cursor-pointer">
                                        <div className="flex justify-between">
                                            <span title={`Sql Programming Basic (PDF)`} className="p-2 text-xl font-bold overflow-hidden text-ellipsis w-11/12 whitespace-nowrap">
                                                Sql Programming Basic (PDF)에 대한 논점입니다.
                                            </span>
                                            <span className="p-2">홍길동</span>
                                        </div>
                                        <div className={`flex ${qnaStyle.container} ${viewingQuestionId === (i + 1) ? qnaStyle.active : ''}`}>
                                            <div className={`${qnaStyle.view} m-2`}>
                                                {
                                                    viewingQuestionId === (i + 1) && 
                                                    <>
                                                        <span>
                                                                            게시글 내용

        Text Description....
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ante congue neque eleifend tincidunt quis non turpis. Donec vitae facilisis odio. Integer at volutpat felis, vitae accumsan orci. Quisque in urna purus. Phasellus id eros dui. Mauris mollis orci at efficitur aliquet. Proin ut enim dignissim, interdum tortor in, blandit diam. Ut risus sapien, vulputate quis mauris a, tempus dictum nisl. Quisque egestas faucibus arcu, et lacinia lectus commodo et.

        Proin malesuada ex magna, non gravida ex porttitor non. Aenean eu euismod urna, vel molestie erat. Integer ullamcorper mauris quam, sit amet bibendum risus ullamcorper sit amet. Nullam et nisl eget eros varius dictum eget eu lorem. Nullam at est mauris. Praesent auctor vulputate tortor, eget rutrum dui sagittis a. Proin consequat, justo at congue elementum, lacus ante dictum urna, nec tempor quam enim et diam. In a pharetra ipsum, a auctor diam.

        Sed faucibus, augue in blandit sollicitudin, risus ipsum dapibus justo, id condimentum mauris augue eget ipsum. Cras at ultricies quam. Aenean erat ipsum, dictum sed ligula et, mattis lobortis purus. Integer mollis viverra dictum. Fusce urna libero, commodo eget arcu in, ultrices porttitor lorem. In hac habitasse platea dictumst. Sed lobortis dolor eget lacus ornare, ac semper turpis bibendum. Nam pellentesque commodo turpis, ac volutpat lacus sollicitudin sed. Morbi mollis nec diam sit amet tristique. Ut luctus mauris efficitur aliquet tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam lectus justo, fermentum eu risus ac, auctor volutpat enim. Sed imperdiet odio nec elementum malesuada. Donec egestas sapien ante, et dapibus orci condimentum vel.

        Maecenas nulla sem, venenatis eu egestas a, porta in urna. Nam luctus lorem vitae dolor pulvinar gravida. Proin fermentum massa ante, id auctor magna ullamcorper sed. Nulla ullamcorper, nibh vel egestas laoreet, lorem mauris consequat turpis, ut rutrum libero mauris id velit. Aliquam convallis at est vel venenatis. Sed dictum lorem at lobortis luctus. Vivamus hendrerit, dui in laoreet ornare, massa lorem consectetur libero, ac consequat eros magna ut est. Donec vestibulum arcu ac commodo iaculis. Mauris molestie ex at nulla iaculis vulputate. Mauris viverra dui eleifend est volutpat, vitae tristique purus consequat. Praesent tristique magna nisl. Sed nec tellus id enim rutrum ultrices non placerat tortor. Sed a mauris in quam molestie posuere. Duis vel augue euismod, vehicula eros vitae, volutpat felis.

        Suspendisse placerat est eros, at volutpat velit lobortis condimentum. Sed luctus nec lectus in scelerisque. In hac habitasse platea dictumst. Phasellus commodo sollicitudin ex porta pretium. Duis varius arcu neque, eu cursus ex finibus at. Praesent eget nunc ultricies, efficitur nibh et, vestibulum felis. Donec at massa ut est porttitor hendrerit eget ac felis. Etiam et consequat neque, ut posuere purus. Sed tempor tempus risus, et sodales mi malesuada vel. Proin vitae volutpat lorem. Aenean consequat purus non vulputate tempus. Integer posuere aliquam orci lobortis imperdiet.

                                                        </span>
                                                        <hr className="my-4"/>
                                                        <div>
                                                            <div className="flex justify-end">
                                                                <span className="m-2">장길산</span>
                                                            </div>
                                                            <span>
                                                                댓글 내용.


            Sed faucibus, augue in blandit sollicitudin, risus ipsum dapibus justo, id condimentum mauris augue eget ipsum. Cras at ultricies quam. Aenean erat ipsum, dictum sed ligula et, mattis lobortis purus. Integer mollis viverra dictum. Fusce urna libero, commodo eget arcu in, ultrices porttitor lorem. In hac habitasse platea dictumst. Sed lobortis dolor eget lacus ornare, ac semper turpis bibendum. Nam pellentesque commodo turpis, ac volutpat lacus sollicitudin sed. Morbi mollis nec diam sit amet tristique. Ut luctus mauris efficitur aliquet tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam lectus justo, fermentum eu risus ac, auctor volutpat enim. Sed imperdiet odio nec elementum malesuada. Donec egestas sapien ante, et dapibus orci condimentum vel.

    Maecenas nulla sem, venenatis eu egestas a, porta in urna. Nam luctus lorem vitae dolor pulvinar gravida. Proin fermentum massa ante, id auctor magna ullamcorper sed. Nulla ullamcorper, nibh vel egestas laoreet, lorem mauris consequat turpis, ut rutrum libero mauris id velit. Aliquam convallis at est vel venenatis. Sed dictum lorem at lobortis luctus. Vivamus hendrerit, dui in laoreet ornare, massa lorem consectetur libero, ac consequat eros magna ut est. Donec vestibulum arcu ac commodo iaculis. Mauris molestie ex at nulla iaculis vulputate. Mauris viverra dui eleifend est volutpat, vitae tristique purus consequat. Praesent tristique magna nisl. Sed nec tellus id enim rutrum ultrices non placerat tortor. Sed a mauris in quam molestie posuere. Duis vel augue euismod, vehicula eros vitae, volutpat felis.

    Suspendisse placerat est eros, at volutpat velit lobortis condimentum. Sed luctus nec lectus in scelerisque. In hac habitasse platea dictumst. Phasellus commodo sollicitudin ex porta pretium. Duis varius arcu neque, eu cursus ex finibus at. Praesent eget nunc ultricies, efficitur nibh et, vestibulum felis. Donec at massa ut est porttitor hendrerit eget ac felis. Etiam et consequat neque, ut posuere purus. Sed tempor tempus risus, et sodales mi malesuada vel. Proin vitae volutpat lorem. Aenean consequat purus non vulputate tempus. Integer posuere aliquam orci lobortis imperdiet.

                                                            </span>
                                                        </div>
                                                        
                                                    </>
                                                }
                                            </div>
                                            {
                                                viewingQuestionId !== (i + 1) &&
                                                <>
                                                    <span className="p-2 text-sm text-gray-600">게시글 내용입니다....</span>
                                                </>
                                            }
                                        </div>
                                        <hr className="mt-2"/>
                                    </div>
                                )
                            })
                        }
                        {
                            hasPrevPage && 
                            Array.from({length : 4}).map((v, i) => {
                                return (
                                    <div key={i} className="h-24 border border-solid rounded-sm border-gray-900 ml-2 mt-2 hover:shadow-xl cursor-pointer">
                                        <div className="flex">
                                            <span title={`Sql Programming Basic (PDF)`} className="p-2 text-xl font-bold overflow-hidden text-ellipsis w-11/12 whitespace-nowrap">
                                                Sql Programming Basic (종이책)에 대한 논점입니다.
                                            </span>
                                        </div>
                                        <div className="flex">
                                            <span className="p-2 text-sm text-gray-600">게시글 내용입니다</span>
                                        </div>
                                        <hr className="mt-2"/>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}