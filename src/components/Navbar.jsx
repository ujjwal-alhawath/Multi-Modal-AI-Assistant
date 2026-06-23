import React, { useContext } from 'react'
import { dataContext, user } from '../context/UserContext'

function Navbar({ setImgPreview }) {
  const { setStartRes, setFeature, setPopUP } = useContext(dataContext)

  return (
    <nav>
      <div className="logo" onClick={() => {
        setStartRes(false)
        setFeature("chat")
        user.data = null
        user.mime_type = null
        user.imgUrl = null
        setImgPreview(null)
        setPopUP(false)
      }}>
        Fusion<span className="logo-gradient">AI</span>
      </div>
    </nav>
  )
}

export default Navbar
