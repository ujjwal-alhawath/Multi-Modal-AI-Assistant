import React, { useContext } from 'react'
import { RiImageAiLine, RiImageAddLine } from 'react-icons/ri'
import { FiPlus } from 'react-icons/fi'
import { FaArrowUpLong } from 'react-icons/fa6'
import { dataContext } from '../context/UserContext'

function InputBox({ imgPreview, handleSubmit, handleGenerateImg }) {
  const {
    popUp,
    setPopUP,
    input,
    setInput,
    feature,
    setFeature
  } = useContext(dataContext)

  return (
    <form className="input-box" onSubmit={(e) => {
      e.preventDefault()
      if (input) {
        if (feature === "genimg") {
          handleGenerateImg()
        } else {
          handleSubmit(e)
        }
      }
    }}>


      {popUp ? (
        <div className="pop-up">
          <div className="select-up" onClick={() => {
            setPopUP(false)
            setFeature("chat")
            document.getElementById("inputImg").click()
          }}>
            <RiImageAddLine />
            <span>Upload Image</span>
          </div>
          <div className="select-gen" onClick={() => {
            setFeature("genimg")
            setPopUP(false)
          }}>
            <RiImageAiLine />
            <span>Generate Image</span>
          </div>
        </div>
      ) : null}

      <div id="add" onClick={() => {
        setPopUP(prev => !prev)
      }}>
        {feature === "genimg" ? <RiImageAiLine id="genImg" /> : <FiPlus />}
      </div>
      <div className="input-field-wrapper">
        {imgPreview && <img src={imgPreview} alt="" id="im" />}
        <input
          type="text"
          placeholder='Ask Something...'
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
      </div>
      {input ? (
        <button id="submit">
          <FaArrowUpLong />
        </button>
      ) : null}
    </form>
  )
}

export default InputBox
