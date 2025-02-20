'use client'

import { useEffect, useState } from "react";

import tocStyle from '@/app/toc.module.css'
interface HeadingInfo {
    id : string,
    title : string,
    items : NestedHeadingInfo[]
}
interface NestedHeadingInfo {
    id : string,
    title : string,
}



export default function BlogToc() {


    const [nestedHeadings, setNestedHeadings] = useState<HeadingInfo[]>([]);

    useEffect(() => {
        const headingElements : HTMLHeadingElement[] = Array.from(document.querySelectorAll("h1, h2"));

        const newNestedHeadings = getNestedHeadings(headingElements);

        setNestedHeadings(newNestedHeadings);
    }, []);
    //headingMap

    const getNestedHeadings = (headingElements : HTMLHeadingElement[]) => {
        const nestedHeadings : HeadingInfo[] = [];

        headingElements.forEach((heading, index) => {
            const {innerText: title, id} = heading;

            if(heading.nodeName === 'H1') {
                nestedHeadings.push({id, title, items : []});
            } else if(heading.nodeName === 'H2' && nestedHeadings.length > 0) {
                nestedHeadings[nestedHeadings.length - 1].items.push({
                    id, title, 
                });
            }
        });

        return nestedHeadings;
    }

    const [activeHeadingId, setActiveHeadingId] = useState<string>();

    useEffect(() => {
        const headingElements = Array.from(document.querySelectorAll(`h1, h2`));

        const callback = (headings : IntersectionObserverEntry[]) => {
            const temp : IntersectionObserverEntry[] = [];
            const intersectedHeadings = headings.reduce((array, headingElement) => {
                if(headingElement.isIntersecting) array.push(headingElement);
                return array;
            }, temp);

            if(intersectedHeadings.length == 0) {
                const activeElement = headingElements.find((element) => element.id === activeHeadingId);
                const activeIndex = headingElements.findIndex((element) => element.id === activeHeadingId);
    
                const activeIdYCoord = activeElement?.getBoundingClientRect().y;
                if(activeIdYCoord && activeIdYCoord > 150 && activeIndex !== 0) {
                    setActiveHeadingId(headingElements[activeIndex - 1].id);
                }
            } else if(intersectedHeadings.length == 1) {
                setActiveHeadingId(intersectedHeadings[0].target.id);
            } else {
                const sortedIntersectedHeadings = intersectedHeadings.sort((a, b) => headingElements.findIndex((e) => e.id === a.target.id) - headingElements.findIndex((e) => e.id === b.target.id));
                setActiveHeadingId(sortedIntersectedHeadings[0].target.id);
            }
        };

        
        const observer = new IntersectionObserver(callback, {
            rootMargin : `0px 0px 0px 0px`,
        });


        headingElements.forEach((element) => observer.observe(element));


        return () => observer.disconnect();
    }, []);


    return (
        <>
            <div className="border border-solid border-gray-600 border-r-0 border-l-0 border-t-0 p-6 sticky top-0">
                <nav className="flex flex-col">
                    <ul>
                        {
                            nestedHeadings.map((heading, index) => (
                                <li key={index} className={`text-gray-300 mt-1 ${activeHeadingId === heading.id ? tocStyle.active : ''}`}>
                                    <a href={`#${heading.id}`}>{heading.title}</a>
                                    {
                                        heading.items.length > 0 && (
                                            <ul>
                                                {
                                                    heading.items.map((child, subIndex) => (
                                                        <li key={subIndex} className={`text-sm text-gray-300 ml-2 ${activeHeadingId === child.id ? tocStyle.active : ''}`}>
                                                            <a href={`#${heading.id}`}>{child.title}</a>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        )
                                    }
                                </li>
                            ))
                        }
                    </ul>
                </nav>
            </div>
        </>
    )
}