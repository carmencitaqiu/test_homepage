import React, { useEffect, useState } from 'react';

export const SettingContext = React.createContext({
    screen: 'mobile',
})

export const SettingProvider = ({ children }:any) => {
    const [screen, setScreen] = useState("mobile")
  
  
    // 获取浏览器当前宽度
    useEffect(() => {
      if (document.documentElement.clientWidth < 720) {
        setScreen("mobile");
      }
      else if ((document.documentElement.clientWidth > 720
        || document.documentElement.clientWidth === 720)
        && document.documentElement.clientWidth < 1280) {
        setScreen("Tablet");
      }
      else if (document.documentElement.clientWidth > 1280
        || document.documentElement.clientWidth === 1280) {
        setScreen("laptop");
      }
    }, [screen]);
    
    return <SettingContext.Provider value={{ screen }}>{children}</SettingContext.Provider>
  }