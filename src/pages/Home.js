import "../style/Home.css"
import { useNavigate } from 'react-router-dom';
import { context } from "../components/data";
import { useContext } from "react";

export const Home = (props) => {

    const nav = useNavigate();
    const [level, setLevel] = useContext(context);

    const handle = (user_level) => {
        setLevel(user_level);
    }

    return (
        <div className='ui-display'>
            <h1>
                Secure. Contain. Protect
            </h1>
            <div className='ui-choice'>
                <div className='ui-inputs'>
                    <input type='password' placeholder='ID Agent'/>
                    <input type='password' placeholder='Password'/>
                </div>
                <form>
                    <fieldset>
                        <legend>Security Clearance Levels</legend>
                        <div>
                            <input type="radio" id="0" name="SCL" value="0" onChange={(e) => handle(e.target.value)}/>
                            <label for="0">0</label>
                        </div>
                        <div>
                            <input type="radio" id="1" name="SCL" value="1" onChange={(e) => handle(e.target.value)}/>
                            <label for="1">1</label>
                        </div>
                        <div>
                            <input type="radio" id="2" name="SCL" value="2" onChange={(e) => handle(e.target.value)}/>
                            <label for="2">2</label>
                        </div>
                        <div>
                            <input type="radio" id="3" name="SCL" value="3" onChange={(e) => handle(e.target.value)}/>
                            <label for="3">3</label>
                        </div>
                        <div>
                            <input type="radio" id="4" name="SCL" value="4" onChange={(e) => handle(e.target.value)}/>
                            <label for="4">4</label>
                        </div>
                        <div>
                            <input type="radio" id="5" name="SCL" value="5" onChange={(e) => handle(e.target.value)}/>
                            <label for="5">5</label>
                        </div>
                    </fieldset>
                </form>
            </div>
            <button onClick={() => nav("/SE")}>Log</button>
        </div>
    )
} 