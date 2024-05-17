import { useState } from "react"

function Emoji() {

    const [emojitype, setEmojitype] = useState("../Photos/image8.jpg");

    const handleHeart = () => {
        setEmojitype("../Photos/image11.png")
    }

    return(
    <>
    <div>
        current Emoji: <img src={emojitype} alt={`Photo of a Mood`} height= "100" width="150"/>
        <div>
        <button onClick={() => setEmojitype("../Photos/image9.jpg")}>Cool</button>
        <button onClick={() => setEmojitype("../Photos/image10.jpg")}>Lovely</button>
        <button onClick={handleHeart}>HeartEyes</button>
        </div>
    </div>
    </>
    )
}

export default Emoji