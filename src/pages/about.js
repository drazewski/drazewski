import React from "react"
import { Link } from "gatsby"

import Layout from "../layout/layout"

const AboutPage = () => (
  <Layout>
      <h1>Bio!</h1>
      <p>Im front end dev!</p>
      <p><span>You can find me on: </span>
        <Link to='https://www.facebook.com/profile.php?id=100019374288075'>Facebook</Link>
        {' | '}
        <Link to='https://www.instagram.com/lukasz_drazewski/?hl=pl'>Instagram</Link>
      </p>
      <p>If you want to contact me feel free to write my email. <Link to='/contact'>See contact details</Link></p>
  </Layout>
)

export default AboutPage
