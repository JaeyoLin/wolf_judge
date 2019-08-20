import React, {
  useState,
  useMemo,
  useCallback,
} from 'react';
import Sound from 'react-sound';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
// import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { green, pink } from '@material-ui/core/colors';

import { useTranslation } from "react-i18next";

import step1 from '../../static/audio/step_1.mp3'; // 天黑請閉眼
import step2 from '../../static/audio/step_2.mp3'; // 狼人現身請睜眼
import step3 from '../../static/audio/step_3.mp3'; // 狼人確認彼此的身份
import step4 from '../../static/audio/step_4.mp3'; // 狼人請殺人
import step5 from '../../static/audio/step_5.mp3'; // 狼人請閉眼
import step6 from '../../static/audio/step_6.mp3'; // 女巫請睜眼
import step7 from '../../static/audio/step_7.mp3'; // 這位玩家被殺死了
import step8 from '../../static/audio/step_8.mp3'; // 你要使用解藥嗎
import step9 from '../../static/audio/step_9.mp3'; // 你要使用毒藥嗎
import step10 from '../../static/audio/step_10.mp3'; // 你要毒誰呢
import step11 from '../../static/audio/step_11.mp3'; // 女巫請閉眼
import step12 from '../../static/audio/step_12.mp3'; // 預言家請睜眼
import step13 from '../../static/audio/step_13.mp3'; // 你要查驗的對象是
import step14 from '../../static/audio/step_14.mp3'; // 他的身份是
import step15 from '../../static/audio/step_15.mp3'; // 預言家請閉眼
import step16 from '../../static/audio/step_16.mp3'; // 獵人請睜眼
import step17 from '../../static/audio/step_17.mp3'; // 獵人請閉眼
import step18 from '../../static/audio/step_18.mp3'; // 天亮請睜眼

const AudioSound = React.memo((props) => {
  const {
    url,
    onFinishedPlaying,
  } = props;

  return (
    <Sound
      url={url}
      playStatus={Sound.status.PLAYING}
      // onLoading={this.handleSongLoading}
      // onPlaying={this.handleSongPlaying}
      onFinishedPlaying={onFinishedPlaying}
    />
  );
});

const useStyles = makeStyles({
  avatar: {
    margin: 10,
  },
  pinkAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: pink[500],
  },
  // greenAvatar: {
  //   margin: 10,
  //   color: '#fff',
  //   backgroundColor: green[500],
  // },
});

const Game = (props) => {
  const classes = useStyles();
  const { list } = props;
  const { t } = useTranslation();
  const [step, setStep] = useState(1);
  const [isOpenWolfKill, setIsOpenWolfKill] = useState(false);
  const [deadNumber, setDeadNumber] = useState(null);
  const [isOpenWitchSave, setIsOpenWitchSave] = useState(false);

  const handleSongFinishedPlaying = useCallback(() => {
    // setStep(step + 1);
    switch(step) {
      case 1:
        setStep(2);
        break;
      case 2:
        setStep(3);
        break;
      case 3:
        setStep(4);
        break;
      case 4:
        // setStep(2);
        setIsOpenWolfKill(true);
        break;
      case 5:
        setStep(6);
        break;
      case 6:
        setStep(7);
        break;
      case 7:
        setIsOpenWitchSave(true);
        setStep(8);
        break;
      case 8:
        
        break;
      default:
    }
  }, [step]);

  const handleCloseWolfKill = () => {
    setIsOpenWolfKill(false);
    setStep(5);
  }

  const audioSrc = useMemo(() => {
    let returnSrc = null;

    switch(step) {
      case 1:
        returnSrc = step1;
        break;
      case 2:
        returnSrc = step2;
        break;
      case 3:
        returnSrc = step3;
        break;
      case 4:
        returnSrc = step4;
        break;
      case 5:
        returnSrc = step5;
        break;
      case 6:
        returnSrc = step6;
        break;
      case 7:
        returnSrc = step7;
        break;
      case 8:
        returnSrc = step8;
        break;
      case 9:
        returnSrc = step9;
        break;
      case 10:
        returnSrc = step10;
        break;
      case 11:
        returnSrc = step11;
        break;
      case 12:
        returnSrc = step12;
        break;
      case 13:
        returnSrc = step13;
        break;
      case 14:
        returnSrc = step14;
        break;
      case 15:
        returnSrc = step15;
        break;
      case 16:
        returnSrc = step16;
        break;
      case 17:
        returnSrc = step17;
        break;
      case 18:
        returnSrc = step18;
        break;
      default:
        break;
    }

    return returnSrc;
  }, [step]);

  return (
    <>
      Game
      <AudioSound
        url={audioSrc}
        onFinishedPlaying={handleSongFinishedPlaying}
      />

      { /* Wolf Kill Start */ }
      <Dialog
        open={isOpenWolfKill}
        // onClose={handleCloseWolfKill}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">1111</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Grid container justify="center" alignItems="center">
              {
                list.map(sit => {
                  let className = classes.avatar;

                  if (deadNumber === sit.index) {
                    className = classes.pinkAvatar;
                  };

                  return (
                    <>
                      <Avatar className={className} onClick={() => {setDeadNumber(sit.index)}}>
                        { sit.index }
                      </Avatar>
                    </>
                  );
                })
              }
            </Grid>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseWolfKill} color="primary" disabled={deadNumber === null}>
            { t('confirm') }
          </Button>
        </DialogActions>
      </Dialog>
      { /* Wolf Kill End */ }

      { /* Witch Save Start */ }
      <Dialog
        open={isOpenWitchSave}
        // onClose={handleCloseWolfKill}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">1111</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Grid container justify="center" alignItems="center">
              { t('dead_person', { index: deadNumber }) }
            </Grid>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => {}} color="primary">
            { t('confirm') }
          </Button>
        </DialogActions>
      </Dialog>
      { /* Witch Save End */ }
    </>
  );
};

export default Game;
