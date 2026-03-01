import '../style/SE.css'
import logo from '../imgs/scp-logo-se.png'
import { ReactTyped as Typed } from 'react-typed'
import { useState } from 'react'

export const SE = (props) => {
    const [show, setShow] = useState(false);
    
    const showSearch = () => {
        setShow(true);
    }

    return (
        <div className='se-display'>
            <img id='img-logo' src={logo} alt='Who are you?' width="300px" height="auto"/>
            
            

            <div className='search-pleace'>
                <div>
                    <label id='title'>
                        <Typed
                            strings={["Secure. Contain. Protect."]}
                            typeSpeed={100}
                            onStringTyped={showSearch}
                            showCursor={false}
                        />
                    </label>
                </div>
                {show ? <div className='search-input'>
                    <label>SCP</label>
                    <label>-</label>
                    <input type=''/>
                    <button>Found</button>
                </div> : <></>}
            </div>

        </div>
    )
} 