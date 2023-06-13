import "./styles.css";
import { useState, useEffect } from "react";
export default function App() {
  const [data, setData] = useState([]);
  const [emojiName, setEmojiName] = useState("");
  const [emoji, setEmoji] = useState([]);

  useEffect(() => {
    fetch(
      "https://emoji-api.com/emojis?access_key=38792f57605302c090bcf111ac7367f185448bb7"
    )
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  function findEmoji() {
    setEmoji(data.filter((ele) => ele.slug.includes(emojiName)));
    console.log(emoji);
  }
  return (
    <div className="App">
      <h1>Enter Emoji Name</h1>
      <input
        type="text"
        onChange={(e) => {
          setEmojiName(e.target.value);
          findEmoji();
        }}
      />

      {emoji.map((ele) => (
        <h1>{ele.character}</h1>
      ))}
    </div>
  );
}
