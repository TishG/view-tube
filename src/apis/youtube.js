import axios from "axios";

const KEY = "AIzaSyCgcFXoSAiWicKXAZlBrpMDuFeioGY1W7Q";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
