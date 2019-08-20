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

import {
  WOLF,
  PREDICTOR,
  WITCH,
  HUNTER,
  VILLAGER,
} from '../../constants/Role';
import Setting from '../Setting/Setting';
import CheckRole from '../CheckRole/CheckRole';
import Game from '../Game/Game';

const drawerWidth = 240;

const createArray = (len, itm) => {
  let arr1 = [itm],
      arr2 = [];
  while (len > 0) {
      if (len & 1) arr2 = arr2.concat(arr1);
      arr1 = arr1.concat(arr1);
      len >>>= 1;
  }
  return arr2;
}

const useStyles = makeStyles(theme => ({
  container: {
    paddingLeft: '0px',
    paddingRight: '0px',
    height: '100vh',
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
  const [step, setStep] = useState(0);
  const [list, setList] = useState([]);
  const [playerNumber, setPlayerNumber] = useState(6);
  const [wolfNumber, setWolfNumber] = useState(2);
  const [isUsePredictor, setIsUsePredictor] = useState(false);
  const [isUseWitch, setIsUseWitch] = useState(true);
  const [isUseHunter, setIsUseHunter] = useState(false);

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

  const getRaddomIndex = () => {
    return Math.floor(Math.random() * playerNumber);
  }

  const handleStart = () => {
    const list = createArray(playerNumber, null);

    // 狼人位置
    for (let i = 0 ; i < wolfNumber ; i += 1) {
      let index = null;

      beginning: while(true) {
        index = getRaddomIndex();
        if(list[index] !== null) {
          continue beginning;
        } else {
          break;
        }
      }

      list[index] = {
        index: index + 1,
        role: WOLF,
      };
    }

    // 預言家位置
    if (isUsePredictor) {
      let index = null;

      beginning: while(true) {
        index = getRaddomIndex();
        if(list[index] !== null) {
          continue beginning;
        } else {
          break;
        }
      }

      list[index] = {
        index: index + 1,
        role: PREDICTOR,
      };
    }

    // 女巫位置
    if (isUseWitch) {
      let index = null;

      beginning: while(true) {
        index = getRaddomIndex();
        if(list[index] !== null) {
          continue beginning;
        } else {
          break;
        }
      }

      list[index] = {
        index: index + 1,
        role: WITCH,
      };
    }

    // 獵人位置
    if (isUseHunter) {
      let index = null;

      beginning: while(true) {
        index = getRaddomIndex();
        if(list[index] !== null) {
          continue beginning;
        } else {
          break;
        }
      }

      list[index] = {
        index: index + 1,
        role: HUNTER,
      };
    }

    // 村民位置
    list.forEach((sit, index) => {
      if (sit === null) {
        list[index] = {
          index: index + 1,
          role: VILLAGER,
        };
      }
    })

    setList(list);
    setStep(1);
  }

  const handleStartGame = () => {
    setStep(2);
  }

  return (
    <div style={{ height: '100vh' }}>
      <Container maxWidth="sm" className={classes.container}>
        <Typography component="div" >
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
            
          {
            (step === 0) && (
              <Setting
                playerNumber={playerNumber}
                setPlayerNumber={setPlayerNumber}
                wolfNumber={wolfNumber}
                setWolfNumber={setWolfNumber}
                isUsePredictor={isUsePredictor}
                setIsUsePredictor={setIsUsePredictor}
                isUseWitch={isUseWitch}
                setIsUseWitch={setIsUseWitch}
                isUseHunter={isUseHunter}
                setIsUseHunter={setIsUseHunter}
                handleStart={handleStart}
              />
            )
          }
          {
            (step === 1) && (
              <CheckRole
                list={list}
                handleStartGame={handleStartGame}
              />
            )
          }
          {
            (step === 2) && (
              <Game
                list={list}
              />
            )
          }
        </Typography>
      </Container>
    </div>
  );
}

export default Home
