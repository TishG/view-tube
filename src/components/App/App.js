import React from "react";
import youtube from "../../apis/youtube";
import SearchBar from "../SearchBar/SearchBar";
import Header from "../Header/Header";
import VideoList from "../VideoList/VideoList";
import VideoDetail from "../VideoList/VideoDetail";
import "./App.css";

class App extends React.Component {
  state = {
    input: "",
    videos: [],
    videoSelected: null
  };

  componentDidMount() {
   this.handleSubmit("new music");
  }

  //SearchBar Methods
  handleChange = (e) => {
    this.setState({
      input: e.target.value
    });
  };

  handleSubmit = (input) => {
    youtube
      .get("/search", {
        params: {
          q: this.state.input
        }
      })
      .then((res) =>
        this.setState({
          input: "",
          videos: res.data.items,
          videoSelected: res.data.items[0]
        })
      )
      .catch((err) => console.log(err));
  };

  onVideoSelect = (video) => {
    this.setState({
      videoSelected: video
    });
  };

  render() {
    const { input } = this.state;
    return (
      <div className="App container text-center">
        <Header />
        <SearchBar
          handleChange={this.handleChange}
          input={input}
          handleSubmit={this.handleSubmit}
        />
        <div className="row d-flex justify-content-center align-items-start">
          <VideoDetail video={this.state.videoSelected} />
          <VideoList
            onVideoSelect={this.onVideoSelect}
            videos={this.state.videos}
          />
        </div>
      </div>
    );
  }
}

export default App;
