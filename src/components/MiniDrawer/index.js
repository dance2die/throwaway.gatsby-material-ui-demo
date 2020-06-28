// import React, { useEffect } from "react"
import React from "react"
import clsx from "clsx"
import { Router, Link, useLocation } from "@reach/router"
import { useQuery } from "react-query"

import { makeStyles, useTheme } from "@material-ui/core/styles"

import Drawer from "@material-ui/core/Drawer"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import List from "@material-ui/core/List"
import CssBaseline from "@material-ui/core/CssBaseline"
import Typography from "@material-ui/core/Typography"
import Divider from "@material-ui/core/Divider"
import IconButton from "@material-ui/core/IconButton"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import Box from "@material-ui/core/Box"

import MenuIcon from "@material-ui/icons/Menu"
import LiveTvOutlinedIcon from "@material-ui/icons/LiveTvOutlined"
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"
import ChevronRightIcon from "@material-ui/icons/ChevronRight"
// import AccountCircleIcon from "@material-ui/icons/AccountCircle"
import WatchLaterIcon from "@material-ui/icons/WatchLater"
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay"

<<<<<<< HEAD
import { useAuthentication } from "../../firebase/context"
import { useMemo } from "react"
=======
// import { useAuthentication, useFirebase } from "../../firebase/context"
>>>>>>> aa51512adc3f048d8faabd888cc94c2e50ae6eba

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}))

const PlayListItem = () => {
  // const params = useParams();
  const location = useLocation()

  // React.useEffect(() => {
  //   console.info(`params ==>`, JSON.stringify(params, null, 2), `location=>`, location)
  // }, [params]);

  return <Typography variant="caption">PlayList {location.search}</Typography>
}

const fetchPlaylist = async (key, credential) => {
  console.info(`fetchPlaylist key, credential ===>`, key, credential)

  if (!credential) return null;

  try {
    const json = await fetch(
      `https://www.googleapis.com/youtube/v3/playlists?part=snippet&mine=true&maxResults=5`,
      {
        headers: {
          "Content-Length": 0,
          Authorization: `Bearer ${credential.oauthAccessToken || credential.accessToken}`,
        },
      }
    ).then(_ => _.json())

    console.info(`playlist ===>`, json)
    return json
  } catch (error) {
    console.info(`error!!!!!!!!!!!!!`, error)
    return null
  }
}

export default function Layout({ children }) {
  const classes = useStyles()
  const theme = useTheme()
  const [open, setOpen] = React.useState(true)

  // const { db } = useFirebase(store => store.firebase)
<<<<<<< HEAD
  const { user, logIn, logOut, credential } = useAuthentication()
  const credentialCache = useMemo(() => credential, [credential])
  const { status, data, error } = useQuery(
    ["playlist", credentialCache],
    fetchPlaylist, {
      staleTime: Infinity
    }
  )

  useEffect(() => {
    console.info(`playlist credentialCache ==> `, credentialCache)
  }, [credentialCache])


  useEffect(() => {
    console.info(`playlist status, data, error ==> `, status, data, error)
  }, [status, data, error])

  // useEffect(() => {
  //   console.info(`user ===>`, user, `credential =>`, credential)
  // }, [user, credential])

=======
  // const { user, logIn, logOut, credential } = useAuthentication()

  // useEffect(() => {
  //   console.info(`user ===>`, user, `credential =>`, credential)
  // }, [user, credential])

>>>>>>> aa51512adc3f048d8faabd888cc94c2e50ae6eba
  // useEffect(() => {
  //   if (!user) return

  //   const usersRef = db.ref(`/users/${user.uid}`)
  //   usersRef.on("value", snapshot => {
  //     console.log(`usersRef snapshot`, snapshot.val())
  //   })

  //   return () => usersRef.off()
  // })

  const toggleDrawer = () => setOpen(o => !o)

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            edge="start"
            className="mr-2"
          >
            {open ? <ChevronLeftIcon /> : <MenuIcon />}
          </IconButton>
          <Typography variant="h6" noWrap>
            <Box display="flex" flexDirection="row" alignItems="center">
              <Box mr={0.3} mt={-0.5}>
                <LiveTvOutlinedIcon color="secondary" fontSize="large" />
              </Box>
              <Typography
                className="tracking-tight leading-relaxed"
                variant="h5"
                component="h1"
              >
                NeoTube Playlist Organizer
              </Typography>
            </Box>
          </Typography>
<<<<<<< HEAD
          <IconButton onClick={user ? logOut : logIn} color="inherit">
            {user && <img style={{width: '32px', margin: 0}} src={user.photoURL} alt="user" />}
=======
          {/* <IconButton onClick={user ? logOut : logIn} color="inherit">
            {user && <img src={user.photoURL} alt="user" />}
>>>>>>> aa51512adc3f048d8faabd888cc94c2e50ae6eba
            {!user && <AccountCircleIcon />}
          </IconButton> */}
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {["Watch later"].map((text, index) => (
            <ListItem key={text} button component={Link} to="/?list=watchlater">
              <ListItemIcon>
                <WatchLaterIcon />
              </ListItemIcon>
              <ListItemText primary="Watch later" />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {/* https://github.com/mui-org/material-ui/issues/1404#issuecomment-335981845 */}
          <ListItem button component={Link} to="/?list=goodsongs">
            <ListItemIcon>
              <PlaylistPlayIcon />
            </ListItemIcon>
            <ListItemText primary="Good Songs" />
          </ListItem>
          <ListItem button component={Link} to="/?list=javascript">
            <ListItemIcon>
              <PlaylistPlayIcon />
            </ListItemIcon>
            <ListItemText primary="JavaScript" />
          </ListItem>
        </List>
      </Drawer>

      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Router basepath="/">
          <PlayListItem path="/" />
        </Router>
      </main>
    </div>
  )
}
