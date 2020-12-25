import React from "react"
import "normalize.css"
import "../assets/styles/styles.scss"
import Typography from "../styles/Typography"
import Sidebar from "../components/Sidebar/Sidebar"
import bgStyle from "./layout.module.scss"

export default function Layout({ children }) {
  return (
    <div className={bgStyle.bg}>
      <Typography />
      <Sidebar />
      {children}
    </div>
  )
}
