import { useEffect, useState } from 'react';
import {ReactTyped as Typed} from 'react-typed';
import "../style/Home.css"
import { useNavigate } from 'react-router-dom';


export const Home = (props) => {

    const title = "Secure. Contain. Protect.";
    const nav = useNavigate();


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
                            <input type="radio" id="1" name="SCL" value="1" />
                            <label for="1">1</label>
                        </div>
                        <div>
                            <input type="radio" id="2" name="SCL" value="2" />
                            <label for="2">2</label>
                        </div>
                        <div>
                            <input type="radio" id="3" name="SCL" value="3" />
                            <label for="3">3</label>
                        </div>
                        <div>
                            <input type="radio" id="4" name="SCL" value="4" />
                            <label for="4">4</label>
                        </div>
                        <div>
                            <input type="radio" id="5" name="SCL" value="5" />
                            <label for="5">5</label>
                        </div>
                    </fieldset>
                </form>
            </div>
            <button onClick={() => nav("/SE")}>Log</button>
        </div>
    )
} 