import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { BrowserRouter as Link } from "react-router-dom";
import styles from "./css/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = ({setSessionToken, setLoggedIn}) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    setSessionToken('')
    setLoggedIn(false)
    return localStorage.removeItem('token')
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <button style={styles.logoutButton} onClick={logout}>
            Logout
          </button>
          <Typography
            variant="h6"
            className={classes.title}
            style={styles.font}
          >
            <Link to='/teams'>Teams</Link>
          </Typography>
          <Typography
            variant="h6"
            className={classes.title}
            style={styles.font}
          >
            <Link to='/projects'>Projects</Link>
          </Typography>
          <Typography
            variant="h6"
            className={classes.title}
            style={styles.font}
          >
            <Link to='/'>Tasks</Link>
          </Typography>

          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose} style={styles.font}>
                <button style={styles.logoutButton}>
                  <Link to='/edit-teams'>Edit My Teams</Link>
                </button>
              </MenuItem>
              <MenuItem onClick={handleClose} style={styles.font}>
                <button style={styles.logoutButton}>
                  <Link to='/my-employees'>My Employees</Link>
                </button>
              </MenuItem>
              <MenuItem onClick={handleClose} style={styles.font}>
                <button style={styles.logoutButton}>
                  <Link to='/add-employee'>+ Employee</Link>
                </button>
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
