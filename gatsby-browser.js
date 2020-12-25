import React from "react"
import Layout from "./src/Layouts/index"
require("typeface-pacifico")

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>
}
