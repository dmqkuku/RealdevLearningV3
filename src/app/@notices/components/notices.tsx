'use client'

import { useEffect, useRef, useState } from "react";

import noticeStyle from "@/app/notices.module.css";

export default function Notices() {


    const containerRef = useRef<HTMLDivElement>(null);
        const [isMouseMoving, setIsMouseMoving] = useState(false);
        const [startX, setStartX] = useState(0);
    
        let timer = 0;
        let noticesCount = 3;
        let autoScrollDirection = 1;
    
        useEffect(() => {
            const container = containerRef.current;
            container?.addEventListener("mousedown", mouseDownHandler);
            container?.addEventListener("mouseup", mouseUpHandler);
            container?.addEventListener("mouseleave", mouseLeaveHandler);
            container?.addEventListener("mousemove", mouseMoveHandler);
    
            timer = window.setInterval(() => {
                //container?.scrollLeft
                if(noticesCount <= 1) {
                    ;
                } else {
                    if(container?.scrollLeft === (container?.clientWidth ?? 0) * (noticesCount - 1)) {
                        autoScrollDirection = -1;
                        container.scrollBy(autoScrollDirection, 0);
                    } else if(container?.scrollLeft === 0) {
                        autoScrollDirection = 1;
                        container.scrollBy(autoScrollDirection, 0);
                    } else {
                        container?.scrollBy(autoScrollDirection, 0)
                    }
                }
            }, 6000);
    
            return () => {
                window.clearInterval(timer);
    
                container?.removeEventListener("mousedown", mouseDownHandler);
                container?.removeEventListener("mouseup", mouseUpHandler);
                container?.removeEventListener("mouseleave", mouseLeaveHandler);
                container?.removeEventListener("mousemove", mouseMoveHandler);
            }
        }, [containerRef.current, isMouseMoving]);
    
        function mouseDownHandler(event : MouseEvent) {
            setIsMouseMoving(true);
            setStartX(event.pageX);
        }
        function mouseUpHandler() {
            setIsMouseMoving(false);
        }
        function mouseLeaveHandler() {
            console.log("Leave")
            setIsMouseMoving(false);
        }
        function mouseMoveHandler(event : MouseEvent) {
            if(!isMouseMoving) return;
            event.preventDefault();
            const dx = event.pageX - startX;
            console.log(dx);
            containerRef.current?.scrollBy(dx < 0 ? 1 : -1, 0);
        }

    return (
        <>
            <div className={`overflow-x-auto flex flex-nowrap snap-x snap-mandatory scroll-smooth whitespace-nowrap select-none
                    ${noticeStyle.scrollbar} 
                    ${isMouseMoving ? "cursor-pointerbing" : "cursor-pointer"}
                `}
                ref={containerRef}
                onMouseDown={(event) => mouseDownHandler(event.nativeEvent)}
                > 
                <div className="grow-0 shrink-0 basis-full inline-block w-100 snap-end h-36">
                    <p className="break-keep text-wrap text-xl mb-2">안녕하세요. 첫 공지입니다.</p>
                    <p className="break-keep text-wrap text-gray-700">
                        취준생을 위해 리얼데브러닝에서 출간한 다음 도서를 교재로 하는 60만원 상당의 유료 저자 직강 동영상 강의를 리얼데브러닝 사이트와 유튜브에서 무료로 공개합니다. - 자바스크립트 프로그래밍 - 자바 프로그래밍 기초 - SQL 프로그래밍 - JSP 서블릿 웹 프로그래밍 - 스프링 웹 프로그래밍 리얼데브러닝 사이트(www.realdev-learning.com)에서 회원 등록후  전 과정을 무료로 수강할 수 있으며,  유튜브(@realdev.learning)에서도 점차적으로 공개됩니다.
                    </p>
                    <div className="flex text-gray-500 justify-between">
                        <div className="flex">
                            <p>Jeon</p>&nbsp;&nbsp;&nbsp;
                            <p>2025.02.02</p>
                        </div>
                        <div className="flex justify-end">
                            <a href="https://youtube.com">링크</a>
                        </div>
                    </div>
                </div> 

                <div className="bg-beige text-black grow-0 shrink-0 basis-full inline-block w-100 snap-end h-36">
                    <p className="break-keep text-wrap text-xl mb-2">안녕하세요. 두 번째 공지입니다.</p>
                    <p className="break-keep text-wrap text-gray-700">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ante congue neque eleifend tincidunt quis non turpis. Donec vitae facilisis odio. Integer at volutpat felis, vitae accumsan orci. Quisque in urna purus. Phasellus id eros dui. Mauris mollis orci at efficitur aliquet. Proin ut enim dignissim, interdum tortor in, blandit diam. Ut risus sapien, vulputate quis mauris a, tempus dictum nisl. Quisque egestas faucibus arcu, et lacinia lectus commodo et.
                    </p>
                    <div className="flex text-gray-500 justify-between">
                        <div className="flex">
                            <p>Jeon</p>&nbsp;&nbsp;&nbsp;
                            <p>2025.02.02</p>
                        </div>
                        <div className="flex justify-end">
                            <a href="https://youtube.com">링크</a>
                        </div>
                    </div>
                </div>

                <div className="grow-0 shrink-0 basis-full inline-block w-100 snap-end h-36">
                    <p className="break-keep text-wrap text-xl mb-2">안녕하세요. 세 번째 공지입니다.</p>
                    <p className="break-keep text-wrap text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ante congue neque eleifend tincidunt quis non turpis. Donec vitae facilisis odio. Integer at volutpat felis, vitae accumsan orci. Quisque in urna purus. Phasellus id eros dui. Mauris mollis orci at efficitur aliquet. Proin ut enim dignissim, interdum tortor in, blandit diam. Ut risus sapien, vulputate quis mauris a, tempus dictum nisl. Quisque egestas faucibus arcu, et lacinia lectus commodo et.    
                    </p>
                    <div className="flex text-gray-500 justify-between">
                        <div className="flex">
                            <p>Jeon</p>&nbsp;&nbsp;&nbsp;
                            <p>2025.02.02</p>
                        </div>
                        <div className="flex justify-end">
                            <a href="https://youtube.com">링크</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    ) 
}