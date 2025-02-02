'use client'
import { PiCurrencyKrwBold } from "react-icons/pi";
import styles from "@/app/slider.module.css";
import { Remark } from "react-remark";

export default function Page() {

    const markdownText = `
Text Description....
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ante congue neque eleifend tincidunt quis non turpis. Donec vitae facilisis odio. Integer at volutpat felis, vitae accumsan orci. Quisque in urna purus. Phasellus id eros dui. Mauris mollis orci at efficitur aliquet. Proin ut enim dignissim, interdum tortor in, blandit diam. Ut risus sapien, vulputate quis mauris a, tempus dictum nisl. Quisque egestas faucibus arcu, et lacinia lectus commodo et.

Proin malesuada ex magna, non gravida ex porttitor non. Aenean eu euismod urna, vel molestie erat. Integer ullamcorper mauris quam, sit amet bibendum risus ullamcorper sit amet. Nullam et nisl eget eros varius dictum eget eu lorem. Nullam at est mauris. Praesent auctor vulputate tortor, eget rutrum dui sagittis a. Proin consequat, justo at congue elementum, lacus ante dictum urna, nec tempor quam enim et diam. In a pharetra ipsum, a auctor diam.

Sed faucibus, augue in blandit sollicitudin, risus ipsum dapibus justo, id condimentum mauris augue eget ipsum. Cras at ultricies quam. Aenean erat ipsum, dictum sed ligula et, mattis lobortis purus. Integer mollis viverra dictum. Fusce urna libero, commodo eget arcu in, ultrices porttitor lorem. In hac habitasse platea dictumst. Sed lobortis dolor eget lacus ornare, ac semper turpis bibendum. Nam pellentesque commodo turpis, ac volutpat lacus sollicitudin sed. Morbi mollis nec diam sit amet tristique. Ut luctus mauris efficitur aliquet tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam lectus justo, fermentum eu risus ac, auctor volutpat enim. Sed imperdiet odio nec elementum malesuada. Donec egestas sapien ante, et dapibus orci condimentum vel.

Maecenas nulla sem, venenatis eu egestas a, porta in urna. Nam luctus lorem vitae dolor pulvinar gravida. Proin fermentum massa ante, id auctor magna ullamcorper sed. Nulla ullamcorper, nibh vel egestas laoreet, lorem mauris consequat turpis, ut rutrum libero mauris id velit. Aliquam convallis at est vel venenatis. Sed dictum lorem at lobortis luctus. Vivamus hendrerit, dui in laoreet ornare, massa lorem consectetur libero, ac consequat eros magna ut est. Donec vestibulum arcu ac commodo iaculis. Mauris molestie ex at nulla iaculis vulputate. Mauris viverra dui eleifend est volutpat, vitae tristique purus consequat. Praesent tristique magna nisl. Sed nec tellus id enim rutrum ultrices non placerat tortor. Sed a mauris in quam molestie posuere. Duis vel augue euismod, vehicula eros vitae, volutpat felis.

Suspendisse placerat est eros, at volutpat velit lobortis condimentum. Sed luctus nec lectus in scelerisque. In hac habitasse platea dictumst. Phasellus commodo sollicitudin ex porta pretium. Duis varius arcu neque, eu cursus ex finibus at. Praesent eget nunc ultricies, efficitur nibh et, vestibulum felis. Donec at massa ut est porttitor hendrerit eget ac felis. Etiam et consequat neque, ut posuere purus. Sed tempor tempus risus, et sodales mi malesuada vel. Proin vitae volutpat lorem. Aenean consequat purus non vulputate tempus. Integer posuere aliquam orci lobortis imperdiet.
    
    `;

    return (
        <>
            <div className="container mx-auto">
                <hr/>
                <div className="flex mt-8 mb-8 justify-between">
                    <span className="text-3xl font-bold flex items-center">HTML 프로그래밍</span>
                    <div className="flex my-3">
                        <span className="py-2 pl-2 text-3xl">30,000</span>
                        <span className="py-2 mt-0.5"><PiCurrencyKrwBold size={28}/></span>
                    </div>
                </div>
                <hr/>
            </div>
            <div className="container mx-auto">
                <div className="my-2 border border-solid rounded-sm border-gray-600">
                    <div>
                        <img src={`/test.png`}></img>
                    </div>
                    <div className="grid grid-cols-3">

                        <div className="col-span-2">
                            <div className="border border-solid border-gray-600 border-t-0 border-l-0 p-6">
                                <span className="text-3xl font-bold flex items-center">HTML 프로그래밍</span>
                            </div>

                            <div className="flex p-6 border border-solid border-gray-600 border-t-0 border-l-0">
                                <span className="underline">전병선</span>
                            </div>

                            <div className="flex flex-col p-6 border border-solid border-gray-600 border-t-0 border-l-0 border-b-0">
                                <Remark>{markdownText}</Remark>
                            </div>
                        </div>

                        <div className="">
                            <div className="border border-solid border-gray-600 border-r-0 border-l-0 border-t-0 p-6">
                                <div className="flex justify-between">
                                    <div className="flex-col">
                                        <div className="flex justify-center">
                                            <span className="leading-5">30,000</span>
                                            <span><PiCurrencyKrwBold/></span>
                                        </div>
                                        <div className="flex">
                                            <span className="text-gray-400">minimum price</span>
                                        </div>
                                    </div>

                                    <div className="flex-col">
                                        <div className="flex justify-center">
                                            <span className="leading-5">40,000</span>
                                            <span><PiCurrencyKrwBold/></span>
                                        </div>
                                        <div className="flex">
                                            <span className="text-gray-400">suggested price</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex justify-center p-2 mt-4">
                                    <div className={styles[`slider-container`]}>
                                        You Pay
                                        <input type="range" min="0" max="100" defaultValue="50" className={styles[`slider`]}/>
                                    </div>
                                </div>

                                <div className="flex justify-center p-2">
                                    <div className={styles[`slider-container`]}>
                                        Author Earns
                                        <input type="range" min="0" max="100" defaultValue="50" className={styles[`slider`]}/>
                                    </div>
                                </div>
                                
                                <div className="grid grid-cols-5 mt-4">
                                    <div className="col-span-4 flex justify-end items-center pr-4">Total</div>
                                    <div className="flex justify-center border border-solid border-gray-600 rounded-sm p-2">30,000</div>
                                </div>

                                <div className="flex mt-4">
                                    <button className="underline">Add Lecture to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}