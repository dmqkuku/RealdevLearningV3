'use client'
import { useEffect, useRef, useState } from "react";
import { GiConsoleController } from "react-icons/gi";
//import Markdown from "react-markdown";
import tocStyle from '@/app/toc.module.css'
import { Remark } from "react-remark";
import RemarkSync from "@/app/component/remarkSync";

interface HeadingInfo {
    id : string,
    title : string,
    items : NestedHeadingInfo[]
}
interface NestedHeadingInfo {
    id : string,
    title : string,
}

export default function Page() {

    const markdownText = `
# H1H1 11
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ante congue neque eleifend tincidunt quis non turpis. Donec vitae facilisis odio. Integer at volutpat felis, vitae accumsan orci. Quisque in urna purus. Phasellus id eros dui. Mauris mollis orci at efficitur aliquet. Proin ut enim dignissim, interdum tortor in, blandit diam. Ut risus sapien, vulputate quis mauris a, tempus dictum nisl. Quisque egestas faucibus arcu, et lacinia lectus commodo et.
Proin malesuada ex magna, non gravida ex porttitor non. Aenean eu euismod urna, vel molestie erat. Integer ullamcorper mauris quam, sit amet bibendum risus ullamcorper sit amet. Nullam et nisl eget eros varius dictum eget eu lorem. Nullam at est mauris. Praesent auctor vulputate tortor, eget rutrum dui sagittis a. Proin consequat, justo at congue elementum, lacus ante dictum urna, nec tempor quam enim et diam. In a pharetra ipsum, a auctor diam.
Sed faucibus, augue in blandit sollicitudin, risus ipsum dapibus justo, id condimentum mauris augue eget ipsum. Cras at ultricies quam. Aenean erat ipsum, dictum sed ligula et, mattis lobortis purus. Integer mollis viverra dictum. Fusce urna libero, commodo eget arcu in, ultrices porttitor lorem. In hac habitasse platea dictumst. Sed lobortis dolor eget lacus ornare, ac semper turpis bibendum. Nam pellentesque commodo turpis, ac volutpat lacus sollicitudin sed. Morbi mollis nec diam sit amet tristique. Ut luctus mauris efficitur aliquet tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam lectus justo, fermentum eu risus ac, auctor volutpat enim. Sed imperdiet odio nec elementum malesuada. Donec egestas sapien ante, et dapibus orci condimentum vel.
Maecenas nulla sem, venenatis eu egestas a, porta in urna. Nam luctus lorem vitae dolor pulvinar gravida. Proin fermentum massa ante, id auctor magna ullamcorper sed. Nulla ullamcorper, nibh vel egestas laoreet, lorem mauris consequat turpis, ut rutrum libero mauris id velit. Aliquam convallis at est vel venenatis. Sed dictum lorem at lobortis luctus. Vivamus hendrerit, dui in laoreet ornare, massa lorem consectetur libero, ac consequat eros magna ut est. Donec vestibulum arcu ac commodo iaculis. Mauris molestie ex at nulla iaculis vulputate. Mauris viverra dui eleifend est volutpat, vitae tristique purus consequat. Praesent tristique magna nisl. Sed nec tellus id enim rutrum ultrices non placerat tortor. Sed a mauris in quam molestie posuere. Duis vel augue euismod, vehicula eros vitae, volutpat felis.
Suspendisse placerat est eros, at volutpat velit lobortis condimentum. Sed luctus nec lectus in scelerisque. In hac habitasse platea dictumst. Phasellus commodo sollicitudin ex porta pretium. Duis varius arcu neque, eu cursus ex finibus at. Praesent eget nunc ultricies, efficitur nibh et, vestibulum felis. Donec at massa ut est porttitor hendrerit eget ac felis. Etiam et consequat neque, ut posuere purus. Sed tempor tempus risus, et sodales mi malesuada vel. Proin vitae volutpat lorem. Aenean consequat purus non vulputate tempus. Integer posuere aliquam orci lobortis imperdiet.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ante congue neque eleifend tincidunt quis non turpis. Donec vitae facilisis odio. Integer at volutpat felis, vitae accumsan orci. Quisque in urna purus. Phasellus id eros dui. Mauris mollis orci at efficitur aliquet. Proin ut enim dignissim, interdum tortor in, blandit diam. Ut risus sapien, vulputate quis mauris a, tempus dictum nisl. Quisque egestas faucibus arcu, et lacinia lectus commodo et.
Proin malesuada ex magna, non gravida ex porttitor non. Aenean eu euismod urna, vel molestie erat. Integer ullamcorper mauris quam, sit amet bibendum risus ullamcorper sit amet. Nullam et nisl eget eros varius dictum eget eu lorem. Nullam at est mauris. Praesent auctor vulputate tortor, eget rutrum dui sagittis a. Proin consequat, justo at congue elementum, lacus ante dictum urna, nec tempor quam enim et diam. In a pharetra ipsum, a auctor diam.
# H1H1 222
## H2H2 111
Sed faucibus, augue in blandit sollicitudin, risus ipsum dapibus justo, id condimentum mauris augue eget ipsum. Cras at ultricies quam. Aenean erat ipsum, dictum sed ligula et, mattis lobortis purus. Integer mollis viverra dictum. Fusce urna libero, commodo eget arcu in, ultrices porttitor lorem. In hac habitasse platea dictumst. Sed lobortis dolor eget lacus ornare, ac semper turpis bibendum. Nam pellentesque commodo turpis, ac volutpat lacus sollicitudin sed. Morbi mollis nec diam sit amet tristique. Ut luctus mauris efficitur aliquet tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam lectus justo, fermentum eu risus ac, auctor volutpat enim. Sed imperdiet odio nec elementum malesuada. Donec egestas sapien ante, et dapibus orci condimentum vel.
Maecenas nulla sem, venenatis eu egestas a, porta in urna. Nam luctus lorem vitae dolor pulvinar gravida. Proin fermentum massa ante, id auctor magna ullamcorper sed. Nulla ullamcorper, nibh vel egestas laoreet, lorem mauris consequat turpis, ut rutrum libero mauris id velit. Aliquam convallis at est vel venenatis. Sed dictum lorem at lobortis luctus. Vivamus hendrerit, dui in laoreet ornare, massa lorem consectetur libero, ac consequat eros magna ut est. Donec vestibulum arcu ac commodo iaculis. Mauris molestie ex at nulla iaculis vulputate. Mauris viverra dui eleifend est volutpat, vitae tristique purus consequat. Praesent tristique magna nisl. Sed nec tellus id enim rutrum ultrices non placerat tortor. Sed a mauris in quam molestie posuere. Duis vel augue euismod, vehicula eros vitae, volutpat felis.
Suspendisse placerat est eros, at volutpat velit lobortis condimentum. Sed luctus nec lectus in scelerisque. In hac habitasse platea dictumst. Phasellus commodo sollicitudin ex porta pretium. Duis varius arcu neque, eu cursus ex finibus at. Praesent eget nunc ultricies, efficitur nibh et, vestibulum felis. Donec at massa ut est porttitor hendrerit eget ac felis. Etiam et consequat neque, ut posuere purus. Sed tempor tempus risus, et sodales mi malesuada vel. Proin vitae volutpat lorem. Aenean consequat purus non vulputate tempus. Integer posuere aliquam orci lobortis imperdiet.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ante congue neque eleifend tincidunt quis non turpis. Donec vitae facilisis odio. Integer at volutpat felis, vitae accumsan orci. Quisque in urna purus. Phasellus id eros dui. Mauris mollis orci at efficitur aliquet. Proin ut enim dignissim, interdum tortor in, blandit diam. Ut risus sapien, vulputate quis mauris a, tempus dictum nisl. Quisque egestas faucibus arcu, et lacinia lectus commodo et.
Proin malesuada ex magna, non gravida ex porttitor non. Aenean eu euismod urna, vel molestie erat. Integer ullamcorper mauris quam, sit amet bibendum risus ullamcorper sit amet. Nullam et nisl eget eros varius dictum eget eu lorem. Nullam at est mauris. Praesent auctor vulputate tortor, eget rutrum dui sagittis a. Proin consequat, justo at congue elementum, lacus ante dictum urna, nec tempor quam enim et diam. In a pharetra ipsum, a auctor diam.
## H2H2 222
Sed faucibus, augue in blandit sollicitudin, risus ipsum dapibus justo, id condimentum mauris augue eget ipsum. Cras at ultricies quam. Aenean erat ipsum, dictum sed ligula et, mattis lobortis purus. Integer mollis viverra dictum. Fusce urna libero, commodo eget arcu in, ultrices porttitor lorem. In hac habitasse platea dictumst. Sed lobortis dolor eget lacus ornare, ac semper turpis bibendum. Nam pellentesque commodo turpis, ac volutpat lacus sollicitudin sed. Morbi mollis nec diam sit amet tristique. Ut luctus mauris efficitur aliquet tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam lectus justo, fermentum eu risus ac, auctor volutpat enim. Sed imperdiet odio nec elementum malesuada. Donec egestas sapien ante, et dapibus orci condimentum vel.
Maecenas nulla sem, venenatis eu egestas a, porta in urna. Nam luctus lorem vitae dolor pulvinar gravida. Proin fermentum massa ante, id auctor magna ullamcorper sed. Nulla ullamcorper, nibh vel egestas laoreet, lorem mauris consequat turpis, ut rutrum libero mauris id velit. Aliquam convallis at est vel venenatis. Sed dictum lorem at lobortis luctus. Vivamus hendrerit, dui in laoreet ornare, massa lorem consectetur libero, ac consequat eros magna ut est. Donec vestibulum arcu ac commodo iaculis. Mauris molestie ex at nulla iaculis vulputate. Mauris viverra dui eleifend est volutpat, vitae tristique purus consequat. Praesent tristique magna nisl. Sed nec tellus id enim rutrum ultrices non placerat tortor. Sed a mauris in quam molestie posuere. Duis vel augue euismod, vehicula eros vitae, volutpat felis.
Suspendisse placerat est eros, at volutpat velit lobortis condimentum. Sed luctus nec lectus in scelerisque. In hac habitasse platea dictumst. Phasellus commodo sollicitudin ex porta pretium. Duis varius arcu neque, eu cursus ex finibus at. Praesent eget nunc ultricies, efficitur nibh et, vestibulum felis. Donec at massa ut est porttitor hendrerit eget ac felis. Etiam et consequat neque, ut posuere purus. Sed tempor tempus risus, et sodales mi malesuada vel. Proin vitae volutpat lorem. Aenean consequat purus non vulputate tempus. Integer posuere aliquam orci lobortis imperdiet.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ante congue neque eleifend tincidunt quis non turpis. Donec vitae facilisis odio. Integer at volutpat felis, vitae accumsan orci. Quisque in urna purus. Phasellus id eros dui. Mauris mollis orci at efficitur aliquet. Proin ut enim dignissim, interdum tortor in, blandit diam. Ut risus sapien, vulputate quis mauris a, tempus dictum nisl. Quisque egestas faucibus arcu, et lacinia lectus commodo et.
Proin malesuada ex magna, non gravida ex porttitor non. Aenean eu euismod urna, vel molestie erat. Integer ullamcorper mauris quam, sit amet bibendum risus ullamcorper sit amet. Nullam et nisl eget eros varius dictum eget eu lorem. Nullam at est mauris. Praesent auctor vulputate tortor, eget rutrum dui sagittis a. Proin consequat, justo at congue elementum, lacus ante dictum urna, nec tempor quam enim et diam. In a pharetra ipsum, a auctor diam.
Sed faucibus, augue in blandit sollicitudin, risus ipsum dapibus justo, id condimentum mauris augue eget ipsum. Cras at ultricies quam. Aenean erat ipsum, dictum sed ligula et, mattis lobortis purus. Integer mollis viverra dictum. Fusce urna libero, commodo eget arcu in, ultrices porttitor lorem. In hac habitasse platea dictumst. Sed lobortis dolor eget lacus ornare, ac semper turpis bibendum. Nam pellentesque commodo turpis, ac volutpat lacus sollicitudin sed. Morbi mollis nec diam sit amet tristique. Ut luctus mauris efficitur aliquet tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam lectus justo, fermentum eu risus ac, auctor volutpat enim. Sed imperdiet odio nec elementum malesuada. Donec egestas sapien ante, et dapibus orci condimentum vel.
Maecenas nulla sem, venenatis eu egestas a, porta in urna. Nam luctus lorem vitae dolor pulvinar gravida. Proin fermentum massa ante, id auctor magna ullamcorper sed. Nulla ullamcorper, nibh vel egestas laoreet, lorem mauris consequat turpis, ut rutrum libero mauris id velit. Aliquam convallis at est vel venenatis. Sed dictum lorem at lobortis luctus. Vivamus hendrerit, dui in laoreet ornare, massa lorem consectetur libero, ac consequat eros magna ut est. Donec vestibulum arcu ac commodo iaculis. Mauris molestie ex at nulla iaculis vulputate. Mauris viverra dui eleifend est volutpat, vitae tristique purus consequat. Praesent tristique magna nisl. Sed nec tellus id enim rutrum ultrices non placerat tortor. Sed a mauris in quam molestie posuere. Duis vel augue euismod, vehicula eros vitae, volutpat felis.
# H1H1 333
Suspendisse placerat est eros, at volutpat velit lobortis condimentum. Sed luctus nec lectus in scelerisque. In hac habitasse platea dictumst. Phasellus commodo sollicitudin ex porta pretium. Duis varius arcu neque, eu cursus ex finibus at. Praesent eget nunc ultricies, efficitur nibh et, vestibulum felis. Donec at massa ut est porttitor hendrerit eget ac felis. Etiam et consequat neque, ut posuere purus. Sed tempor tempus risus, et sodales mi malesuada vel. Proin vitae volutpat lorem. Aenean consequat purus non vulputate tempus. Integer posuere aliquam orci lobortis imperdiet.
    `;

    const [nestedHeadings, setNestedHeadings] = useState<HeadingInfo[]>([]);
    //const [headingMap, setHeadingMap] = useState<Map<string, string>>();

    // useEffect(() => {
    //     const lines : string[] = markdownText.split("\n"); 
    //     const resultMap : Map<string, string> = new Map();

    //     for(const line of lines) {
    //         if(line.startsWith("##")) {
    //             const title = line.replace("##", "").trimStart();
    //             const id = crypto.randomUUID();
    //             resultMap.set(title, id);
    //         } else if(line.startsWith("#")) {
    //             const title = line.replace("#", "").trimStart();
    //             const id = crypto.randomUUID();
    //             resultMap.set(title, id);
    //         }
    //     }

    //     setHeadingMap(resultMap);

    // }, []);

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

        // const callback = (headings : IntersectionObserverEntry[]) => {
        //     headings.forEach((heading) => {
        //         if(heading.isIntersecting) {
        //             setActiveHeadingId(heading.target.id);
        //         }
        //     })
        // }

        
        const observer = new IntersectionObserver(callback, {
            rootMargin : `0px 0px 0px 0px`,
        });


        headingElements.forEach((element) => observer.observe(element));


        return () => observer.disconnect();
    }, []);


    const scrollIntoView = () => {

    }

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
                <div className="my-2 border border-solid rounded border-gray-600">
                    <div>
                        <img src={`/test.png`}></img>
                    </div>
                    <div className="grid grid-cols-4">

                        <div className="col-span-3">

                            <div className="flex p-6 border border-solid border-gray-600 border-t-0 border-l-0">
                                <span className="underline">전병선</span>
                            </div>

                            <div className="flex flex-col p-6 border border-solid border-gray-600 border-t-0 border-l-0 border-b-0">
                                {/* {headingMap && <Markdown
                                    children={markdownText}
                                    components={{ 
                                        h1(props) {
                                            const {children, className, node, ...rest} = props;
                                            const id = headingMap.get(children?.toString() ?? "");
                                            return (
                                                <h1 id={`${id}`}>{children}</h1>
                                            )
                                        },
                                        h2(props) {
                                            const {children, className, node, ...rest} = props;
                                            const id = headingMap.get(children?.toString() ?? "");
                                            return (
                                                <h2 id={`${id}`}>{children}</h2>
                                            )
                                        }
                                    }
                                }
                                />} */}
                                {
                                    <RemarkSync markdownText={markdownText}/>
                                }
                            </div>
                        </div>

                        <div className="">
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
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}