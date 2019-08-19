import React, {
  useState,
} from 'react';
import { useTranslation } from "react-i18next";
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Select from '@material-ui/core/Select';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import AutorenewIcon from '@material-ui/icons/Autorenew';
import CachedIcon from '@material-ui/icons/Cached';

import Setting from '../Setting/Setting';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  container: {
    paddingLeft: '0px',
    paddingRight: '0px',
  },
  toolbar: theme.mixins.toolbar,
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
}));

const Home = (props) => {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const { t, i18n } = useTranslation();
  const classes = useStyles();

  const handleChange = (value) => {
    i18n.changeLanguage(value);
    // console.log('value', value);
    // setLanguage(value);
  }

  const toggleDrawer = (isOpen) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setIsOpenDrawer(isOpen);
  };

  const handleRestart = () => {
    setIsOpenDrawer(false);
  }

  const handleReSetting = () => {
    setIsOpenDrawer(false);
  }

  return (
    <>
      <Container maxWidth="sm" className={classes.container}>
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                { t('title') }
              </Typography>
              <Select
                color="inherit"
                native
                // value={language}
                onChange={(e) => handleChange(e.target.value)}
                inputProps={{
                  name: 'age',
                  id: 'age-native-simple',
                }}
              >
                <option value="zh-TW">繁體中文</option>
                <option value="en-US">English</option>
              </Select>
            </Toolbar>
          </AppBar>
          <Drawer
            anchor="left"
            open={isOpenDrawer}
            onClose={toggleDrawer(false)}
            className={classes.drawer}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.toolbar} />
            <Divider />
            <List>
              <ListItem button key={t('restart')} onClick={handleRestart}>
                <ListItemIcon><CachedIcon /></ListItemIcon>
                <ListItemText primary={t('restart')} />
              </ListItem>
              <ListItem button key={t('resetting')} onClick={handleReSetting}>
                <ListItemIcon><AutorenewIcon /></ListItemIcon>
                <ListItemText primary={t('resetting')} />
              </ListItem>
            </List>
          </Drawer>
        
          <Setting />
        </Typography>
      </Container>
    </>
  );
}

export default Home
