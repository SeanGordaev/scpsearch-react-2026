import '../style/SE.css'
import logo from '../imgs/scp-logo-se.png'
import { ReactTyped as Typed } from 'react-typed'
import { useState, useEffect, useContext } from 'react'
import { context } from '../components/data'

export const SE = () => {
    const [showTerminal, setShowTerminal] = useState(false)
    const [showSearch, setShowSearch] = useState(false)
    const [showCard, setShowCard] = useState(false)
    const [userInput, setUserInput] = useState('');
    const [blocks, setBlocks] = useState(false);
    const cont = useContext(context);
    try {
        const [level] = cont[0] !== undefined ? cont : JSON.parse(window.localStorage.getItem("agents-level"));
    } catch (TypeError) {
        
    }

    useEffect(() => {
        if (showTerminal) {
            setTimeout(() => {
                setShowSearch(true)
            }, 4500)
            setTimeout(() => {
                setShowCard(true)
            }, 3500)
        }
    }, [showTerminal])

    useEffect(() => {
        if (level !== undefined)
            window.localStorage.setItem("agents-level", JSON.stringify(level));
        //todo - who are you?
    }, [])

    const checkCorrect = (text) => {
        return /^\d+$/.test(text);;
    }

    const Search = (num) => {
        console.log(num.lenght)
        if (checkCorrect(num) && level !== "0") {
            setBlocks(false);
            if (num.length === 1) { window.open("https://scp-wiki.wikidot.com/scp-00"+num) }
            else if (num.length === 2) { window.open("https://scp-wiki.wikidot.com/scp-0"+num) }
            else { window.open("https://scp-wiki.wikidot.com/scp-"+num)}
        } else if (!checkCorrect(num)) {

        } else if (level === "0") {
            setBlocks(true);
        }
    }

    return (
        <div className='se-display'>
            <img id='img-logo' src={logo} alt='Who Are You?' />

            <div className='search-pleace'>
                <label id='title'>
                    <Typed
                        strings={["Secure. Contain. Protect."]}
                        typeSpeed={80}
                        showCursor={false}
                        onComplete={() => setShowTerminal(true)}
                    />
                </label>

                <div className='tt'>
                    {showTerminal && (
                        <div className="terminal">
                            <div className="terminal-lines">
                                <p>{"> Establishing secure tunnel..."}</p>
                                <p>{"> Connecting to SPI node..."}</p>
                                <p>{"> Verifying clearance level..."}</p>
                                <p>{"> Caching anomaly index..."}</p>
                                <p className="ok">{"> ACCESS GRANTED"}</p>
                            </div>
                        </div>
                    )}

                    {showCard && <div className={`user-card card-out level-${level}`}>
                        <span className='welcome'>Foundation Personnel Access</span>

                        <div className='user-card card-in'>
                            <div className='user-meta'>
                                <span>ID: ██████</span>
                                <span>Clearance: Level █</span>
                                <span>Status: Active</span>
                            </div>

                            <div className='user-tags'>
                                <span className='tag'>DATABASE ACCESS</span>
                                <span className='tag'>LOG AUTHORIZED</span>
                                <span className='tag'>INTERNAL NETWORK</span>
                            </div>
                        </div>
                    </div>}

                    {showSearch && (
                        <div>
                            <div className='input'>
                                <div className='search-input'>
                                    <span className="prefix">scp -</span>
                                    <input type='text' placeholder='enter object id' onChange={(e) => setUserInput(e.target.value)}/>
                                    <button onClick={() => Search(userInput)}>QUERY</button>
                                </div>
                                {blocks && <span id='blocks'>Access Denied</span>}
                            </div>
                        </div>
                    )}
                </div>

            </div>
        </div>
    )
}