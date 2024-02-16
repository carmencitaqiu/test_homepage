import styles from "./index.module.scss";
interface PropTypes {
    name: string;
    value: string;
    interestingList?: string[];
    onClick: Function
}

export default function ContactAnimButton({
    name,
    value,
    interestingList,
    onClick,
  }: PropTypes) {
    return (
        <div className={`md:h-14 h-10 my-3 mx-2 border border-solid border-white-5 md:px-8 px-4 rounded-smd flex items-center justify-center cursor-pointer flex-col ${styles.interestingItem}`}
        style={{
            color: interestingList?.includes(value) ? "white" : "black",
            backgroundPosition: interestingList?.includes(value) ? "0 -100%" : "inherit"
        }}
        onClick={() => onClick()}
        
        >
            <div className={`${styles.interestingItemBox} md:text-lg text-sm font-gilroyRegular`}>{name}</div>
            <div className={`${styles.interestingItemBoxHidden} absolute md:text-lg text-sm font-gilroyRegular opacity-0 mt-[60px]`}>{name}</div>
        </div>
    )
}