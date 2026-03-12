import { BrowserRouter, Routes, Route } from "react-router-dom";
import Channel from "./pages/Channel";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ChannelPage from "./pages/ChannelPage";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import VideoPlayer from "./pages/VideoPlayer";
import UploadVideo from "./pages/UploadVideo";
import EditVideo from "./pages/EditVideo";
function App() {

  return (

    <BrowserRouter>

      <Header />

      <div style={{ display: "flex" }}>

        <Sidebar />

        <div style={{ flex: 1, padding: "20px" }}>

          <Routes>

            <Route path="/" element={<Home />} />

            <Route path="/login" element={<Login />} />
            <Route path="/edit/:id" element={<EditVideo />} />
            <Route path="/register" element={<Register />} />
            <Route path="/upload" element={<UploadVideo />} />
            <Route path="/video/:id" element={<VideoPlayer />} />
            <Route path="/channel" element={<Channel />} />
            <Route path="/channel/:id" element={<ChannelPage />} />
          </Routes>

        </div>

      </div>

    </BrowserRouter>

  )

}

export default App;