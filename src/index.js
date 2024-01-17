import React from 'react';
import ReactDOM from "react-dom/client";
import App from './app/App';
import './index.css';
export const socialprofils = {
    twitter: "https://twitter.com/your_twitter_username",
    github: "https://github.com/your_github_username",
    facebook: "https://www.facebook.com/profile.php?id=100083125053944",
    linkedin: "https://linkedin.com/in/your_linkedin_username",
    youtube: "https://youtube.com/c/your_youtube_channel",
    twitch: "https://twitch.tv/your_twitch_username",
  };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <App />
);
