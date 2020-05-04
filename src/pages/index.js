import React from "react"
// import { Link } from "gatsby"

// import Button from '@material-ui/core/Button';

// import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"
import Layout from "../components/MiniDrawer";
import Typography from '@material-ui/core/Typography';

import { FirebaseContext } from "../firebase/context";

const IndexPage = () => (
  <FirebaseContext.Provider>
    <Layout>
      <Typography variant="title">This is the main content in "index.js"</Typography>
    </Layout>
  </FirebaseContext.Provider>

)

export default IndexPage
