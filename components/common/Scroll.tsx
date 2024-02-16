
import {useState, useEffect, useRef } from 'react'
import BScroll from '@better-scroll/core'
import { BScrollConstructor } from '@better-scroll/core/dist/types/BScroll'

export interface ScrollProps {
  wrapWidth: number;
  prop?: any;
  children?: any;
  wrapperClass: string;
  contentClass: string;
  totalLength: number;
}

const Scroll: React.FC<ScrollProps> = ({   
  wrapWidth,
  wrapperClass,
  contentClass,
  prop,
  children,
  totalLength
  }) => {

  const wrapRef = useRef<HTMLDivElement>(null)

  const initRef = useRef(false)
  
  const [scrollObj, setscrollObj] = useState<BScrollConstructor>()
  const [scrollX ,setScrollX] = useState(0);
//   const [totalWidth, setTotalWidth] = useState<number>(0);
  
  const initBScroll = () => {
    const scroll =  new BScroll(wrapRef.current as HTMLDivElement, {
      probeType: 2,
      startX: 0,
      click: true,
      observeDOM: true,
      // mouseWheel: {
      //   speed: 20,
      //   invert: false,
      //   easeTime: 300
      // },
      scrollX: true,
      scrollY: false,
      useTransition: true,
    })
    setscrollObj(
      scroll
    )
    scroll && scroll.refresh();
    scroll && scroll.on('scroll',(pos:any) => {
        // console.log(pos.x)
        // setScrollX(pos.x);
    })
  }

    //  对象初始化
    useEffect(() => {
        initBScroll()
        return () => {
          scrollObj?.destroy()
        }
      }, [])

    useEffect(() => {

    },[scrollX])


  return (
    <div className={wrapperClass} ref={wrapRef}>
      <ul className={contentClass} style={{width: wrapWidth}}>
        {children}
      </ul>
    </div>
  )
}

export default Scroll
