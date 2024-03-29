import { useState, useEffect } from "react";
import "./style/commands.css";
import FunPhotos from "./FunPhotos"
import BlobCover from "../Landing/BlobCover";
import KeshaAi from "./KeshaAi";
import MusicCommands from "./MusicCommands";

type selectType = "Fun Photos" | "AI" | "Music";

const Commands = () => {
  const [selectedCommands, setSelectedCommands] =
    useState<selectType>("Fun Photos");
    const [avatar, setAvatar] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
      document.title = "Kesha bot - Commands 🌈🛸👽"
    }, [])

    useEffect(() => {
      setIsLoading(true)

    fetch("https://kesha-bot-users.herokuapp.com/user/938136480453365770")
    .then((resp) => resp.json())
    .then(data => {
      setAvatar(data.avatarURL)
      setIsLoading(false)
    })
    }, [])

  return (
    <section className="commands-section">
      <div className="blob-banner">
        <BlobCover />
      </div>
      <main>
        <h1>Commands</h1>
        <div className="commands-check">
          <div className="commands-menu">
            <button
              className={
                selectedCommands === "Fun Photos"
                  ? "command-btn selected"
                  : "command-btn"
              }
              onClick={() => setSelectedCommands("Fun Photos")}
            >
              For Fun
            </button>
            <button
              className={
                selectedCommands === "AI"
                  ? "command-btn selected"
                  : "command-btn"
              }
              onClick={() => setSelectedCommands("AI")}
            >
              Kesha AI
            </button>
            <button
              className={
                selectedCommands === "Music"
                  ? "command-btn selected"
                  : "command-btn"
              }
              onClick={() => setSelectedCommands("Music")}
            >
              Music
            </button>
          </div>
          <div className="commands-preview">
            {selectedCommands === "Fun Photos" && <FunPhotos avatar={avatar} Loading={isLoading}/>}
            {selectedCommands === "AI" && <KeshaAi avatar={avatar} Loading={isLoading}/>}
            {selectedCommands === "Music" && <MusicCommands />}
          </div>
        </div>
      </main>
    </section>
  );
};

export default Commands;
