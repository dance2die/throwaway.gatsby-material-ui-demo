import React from 'react';

import { Router, useParams } from "@reach/router";
import Typography from "@material-ui/core/Typography";

import Layout from "../components/MiniDrawer";

const PlayListItem = () => {
  const params = useParams();

  React.useEffect(() => {
    console.info(`params ==>`, JSON.stringify(params, null, 2))
  }, [params]);

  return <Typography variant="title">PlayList</Typography>
}


export default function Playlist() {
  return (
    <Layout>
      <Router basepath="/playlist">
        <PlayListItem path="/" />
      </Router>
    </Layout>
  )
}