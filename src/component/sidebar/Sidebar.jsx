import React , { useEffect,  useRef, useState } from "react";
import styles from  "./styles.css";
import App from "../../App";

const sidebar = ({ width=280, children }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [xPosition, setXPosition] = React.useState(width);
    const side = useRef();

    const toggleMenu = () => {
        if( xPosition < 0 ) {
            setXPosition(0);
            setIsOpen(true);
        }
        else {
            setXPosition(-width);
            setIsOpen(false);
        }
    };

    const handleClose = () => {
        let sideArea = side.current;
        let sideChildren = side.current.contains(e.target);
        if(isOpen && (!sideArea || !sideChildren)) {
            await setX(-width);
            await setIsOpen(false);
        }
    }

    useEffect(()=> {
        window.addEventListener('click', handleClose);
        return () => {
            window.removeEventListener('click', handleClose);
        };
    })


    return (
        <div className={styles.container}>
            <div ref={side}  className={styles.sidebar} style={{ width: `${width}px`, height: '100%',  transform: `translatex(${-xPosition}px)`}}>
                <button onClick={() => toggleMenu()}
                        className={styles.button} >
                    {isOpen ?
                        <span>X</span> : <img src="images/avatar.png" alr="contact open button" className={styles.openBtn}/>
                    }
                </button>
                <div className={styles.content}>{children}</div> //사이드바 컴포넌트 내부 값이 구현되는 위치
            </div>
        </div>
    );
};

export default Sidebar;