import React,{useState,useEffect} from 'react';
import randomColor from 'randomcolor'
import {FaTwitterSquare,FaQuoteLeft} from 'react-icons/fa';
const axios = require('axios');

const Quotes = () => {

    var color=randomColor();
    const [bgcolor, setBgColor]=useState("blue");
    const[quote, setQuote]=useState([]);
    const[author, setAuthor]=useState([]);
    const min=1;
    const max=1644;

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    function getQuotes(){
        axios.get("https://type.fit/api/quotes/")
            .then((res)=>{
                console.log(res)
                const allquotes=res.data;
                const id=getRandomInt(min, max)
                setQuote(allquotes[id].text);
                setAuthor(allquotes[id].author);
            })
            .catch((error) =>console.error(error));

    }
    
    useEffect(() => {
        axios.get("https://type.fit/api/quotes/")
            .then((res)=>{
                console.log(res)
                const allquotes=res.data;
                const id=getRandomInt(min, max)
                setQuote(allquotes[id].text);
                setAuthor(allquotes[id].author);
            })
            .catch((error) =>console.error(error));

    }, [])

    const handelClick = () => {
        setBgColor(color);
        document.body.style.backgroundColor=bgcolor;
        document.getElementById('text').style.color=bgcolor;
        document.getElementById('author').style.color=bgcolor;
        document.getElementById('button').style.backgroundColor=bgcolor;
        document.getElementById('tweet-quote').style.color=bgcolor;
        getQuotes();
    };
    

    return (
            <div id="quotes-box">

                <div id="text">
                <FaQuoteLeft />
                {" "}{quote}
                </div>
                <div id="author">
                    -{author}
                </div>
                <div id="tweetbtn">
                <a href="twitter.com/intent/tweet" id="tweet-quote">
                    <FaTwitterSquare />
                </a>
                <div id="new-quote">
                    <button id="button" onClick={handelClick}>New Quotes</button>
                </div>
                </div>
            </div>
    )
}

export default Quotes
