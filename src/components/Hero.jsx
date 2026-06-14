import React, { useContext } from 'react'
import { RiImageAiLine, RiImageAddLine } from 'react-icons/ri'
import { MdChatBubbleOutline } from 'react-icons/md'
import { dataContext } from '../context/UserContext'

function Hero() {
  const { setFeature } = useContext(dataContext)

  return (
    <div className="hero">
      <span id="tag">What can I help with ?</span>
      <div className="cate">
        <div className="upImg" onClick={() => {
          document.getElementById("inputImg").click()
        }}>
          <RiImageAddLine />
          <span>Upload Image</span>
        </div>
        <div className="genImg" onClick={() => setFeature("genimg")}>
          <RiImageAiLine />
          <span>Generate Image</span>
        </div>
        <div className="chat" onClick={() => setFeature("chat")}>
          <MdChatBubbleOutline />
          <span>Let's Chat</span>
        </div>
      </div>
    </div>
  )
}

export default Hero
