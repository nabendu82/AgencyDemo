import React from "react"
import Layout from "../components/layout"
import { GenericH2, GenereicParaAbout } from "../styles/IndexStyles";

const ThankYouPage = () => (
  <Layout>
    <GenericH2 none dark some style={{textAlign: 'center', padding: '3rem'}}>Success</GenericH2>
    <GenereicParaAbout lessSize grey>Thank you for your submission!</GenereicParaAbout>
  </Layout>
)

export default ThankYouPage