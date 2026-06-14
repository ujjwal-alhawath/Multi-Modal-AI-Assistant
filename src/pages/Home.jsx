import React, { useContext, useState } from 'react'
import "../App.css"
import { dataContext, prevUser, user } from '../context/UserContext'
import Chat from './Chat'
import { generateResponse } from '../gemini'
import { query } from '../huggingFace'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import InputBox from '../components/InputBox'

function Home() {
  let {
    startRes,
    setStartRes,
    input,
    setInput,
    feature,
    setFeature,
    setShowResult,
    setPrevFeature,
    setGenImgUrl
  } = useContext(dataContext)

  let [imgPreview, setImgPreview] = useState(null)

  async function handleSubmit(e) {
    setStartRes(true)
    setPrevFeature(feature)
    setShowResult("")
    prevUser.data = user.data
    prevUser.mime_type = user.mime_type
    prevUser.imgUrl = user.imgUrl
    prevUser.prompt = input
    user.data = null
    user.mime_type = null
    user.imgUrl = null
    setImgPreview(null)
    setInput("")
    let result = await generateResponse()
    setShowResult(result)
    setFeature("chat")
  }

  function handleImage(e) {
    setFeature("upimg")
    let file = e.target.files[0]
    let reader = new FileReader()
    reader.onload = (event) => {
      let base64 = event.target.result.split(",")[1]
      user.data = base64
      user.mime_type = file.type
      user.imgUrl = `data:${user.mime_type};base64,${user.data}`
      setImgPreview(user.imgUrl)
    }
    reader.readAsDataURL(file)
  }

  async function handleGenerateImg() {
    setStartRes(true)
    setPrevFeature(feature)
    setGenImgUrl("")
    prevUser.prompt = input
    let result = await query().then((e) => {
      let url = URL.createObjectURL(e)
      setGenImgUrl(url)
    })
    setInput("")
    setFeature("chat")
  }

  return (
    <div className='home'>
      <Navbar setImgPreview={setImgPreview} />
      
      <input type="file" accept='image/*' hidden id='inputImg' onChange={handleImage} />
      
      {!startRes ? <Hero /> : <Chat />}
      
      <InputBox
        imgPreview={imgPreview}
        handleSubmit={handleSubmit}
        handleGenerateImg={handleGenerateImg}
      />
    </div>
  )
}

export default Home
