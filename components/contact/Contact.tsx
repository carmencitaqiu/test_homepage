import {RefObject} from "react";
import ContactAnimButton from "./ContactButton"
import React, {useState, useEffect, useRef} from 'react';
import autosize from "autosize";
import styles from "./index.module.scss";

type InterestingItem = {
    name: string,
    value: string
};
const LIST_INTERESTING: InterestingItem[] = [{
    name: "Branding",
    value: "branding"
},{
    name: "Web design value",
    value: "web_design"
},{
    name: "App design",
    value: "app_design"
},{
    name: "ASO experies",
    value: "aso"
},{
    name: "Illustrations value",
    value: "illustrations"
},{
    name: "HTML/CSS coding",
    value: "html"
},{
    name: "iOS development",
    value: "ios"
},{
    name: "Design concept",
    value: "design_concept"
},{
    name: "Site from scratch",
    value: "site"
},{
    name: "App from scratch",
    value: "app"
},{
    name: "Android development",
    value: "android"
}];

const BUDGET_LIST: InterestingItem[] = [{
    name: "10-20k",
    value: "10_20"
},{
    name: "30-40k",
    value: "30_40"
},{
    name: "40-50k",
    value: "40-50"
},{
    name: "50-100k",
    value: "50-100"
},{
    name: "> 100k",
    value: "100"
}]
export default function Contact() {

    const [isPaneOpen, setIsPaneOpen] = useState(false);
    const [interestingList, setInterestingList] = useState<string[]>([]);
    const [budget, setBudget] = useState<string[]>([]);
    const [selectedFiles, setSelectedFiles] = useState<any[]>([]);
    const [email, setEmail] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [tellUs, setTellUs] = useState<string>("");
    const [invalidEmail, setInvalidEmail] = useState<boolean>(false);
    const [validation, setValidation] = useState<boolean>(false);

    const textareaRef: RefObject<HTMLTextAreaElement> = useRef<HTMLTextAreaElement>(null);

    const checkValidation = () => {
        if (interestingList?.length === 0) {
            setValidation(false)
            return
        }

        if (name?.length === 0) {
            setValidation(false)
            return
        }
        if (email?.length === 0) {
            setValidation(false)
            return
        }
        if (tellUs?.length === 0) {
            setValidation(false)
            return
        }
        if (budget?.length === 0) {
            setValidation(false)
            return
        }
        if (invalidEmail) {
            setValidation(false)
            return
        }
        setValidation(false)
        return
    }

    const clickInteresting = async (value: string) => {
        let list = JSON.parse(JSON.stringify(interestingList))
        if (list.includes(value)) {
            list = list.filter((item: string) => item !== value)
        } else {
            list.push(value)
        }
        await setInterestingList(list);
        console.log(interestingList)
        checkValidation()
    }

    const clickBudget = (value: string) => {
        setBudget([value])
        checkValidation()
    }

    const onChangeName = (e:any) => {
        setName(e.target.value)
        checkValidation();
    }

    const validateEmail = (email: string) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    const onChangeEmail = (e: React.FormEvent<HTMLInputElement>) => {
        setEmail((e.target as any).value);
        if ((e.target as any).value.length === 0) {
            setInvalidEmail(false)
        } else {
            if (!validateEmail((e.target as any).value)) {
                setInvalidEmail(true);
            } else {
                setInvalidEmail(false);
            }
        }
        checkValidation();
    }

    const onChangeTellUs = (e: React.FormEvent<HTMLElement>) => {
        setTellUs((e.target as any).value);
        checkValidation()
    }

    const readURL = (input: any) => {
        var arr = []
        if (input.target.files) {
            setSelectedFiles(input.target.files);
            for (let i = 0; i < input.target.files.length; i++) {
                arr.push(input.target.files[i])
            }
            setSelectedFiles(arr);
        }
    }

    const removeUpload = (item:any) => {
        let arr = JSON.parse(JSON.stringify(selectedFiles));
        arr = arr.filter((file: any) => file.name !== item.name)
        setSelectedFiles(arr);
    }

    const send = () => {

    }


    useEffect(() => {
        autosize(textareaRef);
        const labels: NodeListOf<Element> = document.querySelectorAll(".form-control label");
        labels.forEach((label:any, index: number) => {
            label.innerHTML = label.innerText
                .split("")
                .map(
                    (letter:any, idx:number) =>
                        `<span style="transition-delay:${idx * 5}ms">${letter}</span>`
                )
                .join("");
        });
    })
    return (
        <section className="w-full">
            <div className="mx-auto container">
                <div className="md:px-[10%] px-[5%] md:pt-64 w-full mb-48">
                    <p className="md:text-[65px] text-[47px] text-left font-gilroyMedium text-black-2 leading-15">
                    Hey! Tell us all<br/>the things
                    <img src="/static/images/wave_hand.svg" 
                    className="inline-block md:h-17 md:w-17 ml-5 w-[50px] h-[50px] mb-4" />
                    </p>
                    <div className="md:text-4xl text-[28px] text-black opacity-30 font-gilroyRegular mt-20">I&apos;m interested in...</div>
                    <div className="flex md:w-[90%] w-full mt-10 flex-wrap">
                        {
                            LIST_INTERESTING.map((item:InterestingItem, index:number) => {
                                return (
                                    <ContactAnimButton 
                                        key={`interesting_${index}`}
                                        name={item.name}
                                        value={item.value}
                                        onClick={() => clickInteresting(item.value)}
                                        interestingList={interestingList}
                                    />
                                )
                            })
                        }
                        
                        {/* <ContactAnimButton 
                            name="Web design"
                            value="web_design"
                            onClick={() => clickInteresting('web_design')}
                            interestingList={interestingList}
                        />
                        <ContactAnimButton 
                            name="App design"
                            value="app_design"
                            onClick={() => clickInteresting('app_design')}
                            interestingList={interestingList}
                        />
                        <ContactAnimButton 
                            name="ASO experies"
                            value="aso"
                            onClick={() => clickInteresting('aso')}
                            interestingList={interestingList}
                        />
                        <ContactAnimButton
                            name="Illustrations"
                            value="illustrations"
                            onClick={() => clickInteresting('illustrations')}
                            interestingList={interestingList}
                        />
                        <ContactAnimButton
                            name="HTML/CSS coding"
                            value="html"
                            onClick={() => clickInteresting('html')}
                            interestingList={interestingList}
                        />
                         <ContactAnimButton
                            name="iOS development"
                            value="ios"
                            onClick={() => clickInteresting('ios')}
                            interestingList={interestingList}
                        />
                        <ContactAnimButton
                            name="Design concept"
                            value="design_concept"
                            onClick={() => clickInteresting('design_concept')}
                            interestingList={interestingList}
                        />
                        <ContactAnimButton
                            name="Site from scratch"
                            value="site"
                            onClick={() => clickInteresting('site')}
                            interestingList={interestingList}
                        />
                        <ContactAnimButton
                            name="App from scratch"
                            value="app"
                            onClick={() => clickInteresting('app')}
                            interestingList={interestingList}
                        />
                         <ContactAnimButton
                            name="Android development"
                            value="android"
                            onClick={() => clickInteresting('android')}
                            interestingList={interestingList}
                        /> */}
                    </div>
                    <div className="flex flex-col w-[90%] mt-10">
                        <div className="form-control">
                            <input type="text" required
                                value={name}
                                onChange={onChangeName}
                                className="md:text-sbase2 text-lg"
                            />
                            <label className="md:text-[32px] text-lg">Your&nbsp;name</label>
                        </div>
                        <div className="form-control">
                            <input type="text" required
                                onChange={onChangeEmail}
                                value={email}
                                className="md:text-sbase2 text-lg"
                                style={invalidEmail ? { borderBottom: '2px solid red' } : undefined}
                            />
                            <label className="md:text-[32px] text-lg">Your&nbsp;email</label>
                        </div>
                        <div className="form-control">
                            <textarea 
                                required
                                value={tellUs}
                                ref={textareaRef}
                                onChange={onChangeTellUs}
                                className="md:text-sbase2 text-lg"
                            />
                            <label className="md:text-[32px] text-lg">Tell&nbsp;us&nbsp;about&nbsp;your&nbsp;project</label>
                        </div>
                    </div>
                    
                    {/* interesting*/}
                    <div className="text-black md:text-sbase2 text-[28px] opacity-30 font-gilroyRegular mt-12">Project budget (USD)</div>
                    <div className="flex md:w-[90%] w-full mt-10 flex-wrap">
                        {
                            BUDGET_LIST.map((item:InterestingItem, index:number) => {
                                return (
                                    <ContactAnimButton
                                        key={`budget_${index}`}
                                        name={item.name}
                                        value={item.value}
                                        onClick={() => clickBudget(item.value)}
                                        interestingList={budget}
                                    />
                                )
                            })
                        }
                        {/* <ContactAnimButton
                            name="10-20k"
                            value="10_20"
                            onClick={() => clickBudget('10_20')}
                            interestingList={budget}
                        />
                        <ContactAnimButton
                            name="30-40k"
                            value="30_40"
                            onClick={() => clickBudget('30_40')}
                            interestingList={budget}
                        />
                        <ContactAnimButton
                            name="40-50k"
                            value="40-50"
                            onClick={() => clickBudget('40-50')}
                            interestingList={budget}
                        />
                        <ContactAnimButton
                            name="50-100k"
                            value="50-100"
                            onClick={() => clickBudget('50-100')}
                            interestingList={budget}
                        />
                        <ContactAnimButton
                            name="> 100k"
                            value="100"
                            onClick={() => clickBudget('100')}
                            interestingList={budget}
                        /> */}
                    </div>

                    {/* end of interesting*/}

                    {/* file-upload */}

                    <div className="bg-white p-5 mt-10">
                        <div className={`mt-5 relative ${styles.imageUploadWrap}`}>
                            <input className="absolute m-0 p-0 w-full h-full outline-0 opacity-0 cursor-pointer" type="file" onChange={readURL}  multiple/>
                            <div className="flex items-center">
                                <img className="w-[26px] h-[26px] object-contain mr-[10px]" src="static/icons/pin.png" alt="attach-pin"/>
                                <div className="text-[22px] text-black font-gilroyMedium">Add attachment</div>
                            </div>
                            <div className={`border-b border-solid border-black mt-[3px] w-0 mb-5 ${styles.imageUploadWrapHidden}`}></div>
                        </div>

                        {
                            selectedFiles && selectedFiles.map((item, index) => {
                                return (
                                    <div 
                                    key={`selectKey_${index}`}
                                    onClick={() => removeUpload(item)}
                                    className="flex items-center my-4 opacity-1 hover:opacity-60 hover:translate-x-5">
                                        <img className="w-[22px] h-[22px] object-contain mr-5" src="/static/icons/close.png" alt="close-icon"/>
                                        <div className="font-gilroyRegular text-xl pt-1">{item.name}</div>
                                    </div>
                                )
                            })
                           
                        }
                    </div>

                    {/* end of file-upload */}

                    <div 
                    onClick={send}
                    className={`bg-black-4 border-none text-white outline-0 h-15 relative mt-[50px] font-gilroyMedium text-ssm md:w-50 w-full flex items-center justify-center ${styles.animatedBorderButton}`}
                    style={{
                        cursor: validation ? 'pointer' : 'not-allowed'
                    }}
                    >Send request</div>

                </div>
            </div>
        </section>
    )
}