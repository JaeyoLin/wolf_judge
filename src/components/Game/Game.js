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

import {
  WOLF,
  PREDICTOR,
  WITCH,
  HUNTER,
  VILLAGER,
} from '../../constants/Role';

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

/**
 * DAY_TYPE
 * 白天, 晚上
 * 
 */
const DAY_TYPE = {
  DAY: 'DAY',
  NIGHT: 'NIGHT',
}

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
  good: {
    fontSize: '30px',
  },
  bad: {
    fontSize: '30px',
    color: 'red',
  },
  // greenAvatar: {
  //   margin: 10,
  //   color: '#fff',
  //   backgroundColor: green[500],
  // },
});

const Game = (props) => {
  const classes = useStyles();
  const {
    list,
    isUsePredictor,
    isUseWitch,
    isUseHunter,
  } = props;

  const { t } = useTranslation();
  const [step, setStep] = useState(1);
  const [isOpenWolfKill, setIsOpenWolfKill] = useState(false);
  const [deadNumber, setDeadNumber] = useState(null); // 狼人晚上殺人的
  const [witchDeadNumber, setWitchDeadNumber] = useState(null); // 女巫毒的角色
  const [isOpenWitchSave, setIsOpenWitchSave] = useState(false); // 解藥詢問 視窗
  const [isOpenWitchPoison, setIsOpenWitchPoison] = useState(false); // 毒藥詢問 視窗
  const [isUse, setIsUse] = useState(false); // 女巫一晚只能使用一種藥
  const [isOpenPredictor, setIsOpenPredictor] = useState(false); // 預言家選擇身份 視窗
  const [predictorSelect, setPredictorSelect] = useState(null); // 預言家選擇查驗的身份
  const [isOpenRole, setIsOpenRols] = useState(false); // 預言家查看身份 視窗
  const [isOpenResult, setIsOpenResult] = useState(false); // 晚上結果
  const [day, setDay] = useState(1); // 第幾天
  const [dayType, setDayType] = useState(DAY_TYPE.NIGHT); // 白天晚上
  const [messages, setMessages] = useState([]); // 遊戲訊息
  const [isOpenVote, setIsOpenVote] = useState(false); // 投票視窗
  const [selectVote, setSelectVote] = useState(null); // 選擇投票的人

  const [dead, setDead] = useState([]); // 死亡的人

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
        // 是否有使用女巫
        if (isUseWitch) {
          setStep(6);
        } else {
          // 是否使用預言家
          if (isUsePredictor) {
            setStep(12);
          } else {
            if (isUseHunter) {
              // 是否使用獵人
              setStep(16);
            } else {
              setStep(18);
            }
          }
        }
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
      case 9:
        setIsOpenWitchPoison(true);
        setStep(10);
        break;
      case 10:
        break;
      case 11:
        // 是否使用預言家
        if (isUsePredictor) {
          setStep(12);
        } else {
          if (isUseHunter) {
            // 是否使用獵人
            setStep(16);
          } else {
            setStep(18);
          }
        }
        // setStep(12);
        break;
      case 12:
        setStep(13);
        break;
      case 13:
        setIsOpenPredictor(true);
        break;
      case 14:
        // setStep(15);
        break;
      case 15:
        if (isUseHunter) {
          // 是否使用獵人
          setStep(16);
        } else {
          setStep(18);
        }
        break;
      case 16:
        setStep(17)
        break;
      case 17:
        setStep(18);
        break;
      case 18:
        setIsOpenResult(true);
        break;
      default:
    }
  }, [step]);

  /**
   * handleCloseWolfKill
   * 狼人殺人視窗
   * 
   */
  const handleCloseWolfKill = () => {
    setIsOpenWolfKill(false);
    setStep(5);
  }

  /**
   * handleWitchSave
   * 女巫是否使用解藥
   * 
   * @param {bool} isSave - true: 使用, false: 不使用
   */
  const handleWitchSave = (isSave) => {
    if (isSave) {
      // 使用解藥
      setIsUse(true);
      setDeadNumber(null);
    }
    setIsOpenWitchSave(false);
    setStep(9);
  }

  /**
   * handleWitchPoison
   * 關閉女巫是否使用毒藥
   * 
   * @param {bool} isPoison - true: 使用, false: 不使用
   */
  const handleWitchPoison = (isPoison) => {
    if (!isPoison) {
      setWitchDeadNumber(null);
    }
    setIsOpenWitchPoison(false);
    setStep(11);
  }

  /**
   * handlePredictor
   * 關閉預言家詢問視窗
   * 
   */
  const handlePredictor = () => {
    setIsOpenPredictor(false);
    setIsOpenRols(true);
    setStep(14);
  }

  /**
   * handleCloseCheckRole
   * 關閉預言家查驗身份結果
   * 
   */
  const handleCloseCheckRole = () => {
    setIsOpenRols(false);
    setStep(15);
  }

  /**
   * audioSrc
   * 取得音效檔
   * 
   */
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

  /**
   * generateResultMessage
   * 組出當晚死亡訊息
   * 
   */
  const generateResultMessage = () => {
    let returnMessage = null;
    if (deadNumber === null && witchDeadNumber === null) {
      returnMessage = t('christmas_eve')
    } else {
      let tmp = [];
      if (deadNumber !== null) {
        tmp.push(deadNumber.index);
      }
      if (witchDeadNumber !== null && witchDeadNumber.index !== deadNumber.index) {
        // returnMessage += `, ${witchDeadNumber.index}`;
        tmp.push(witchDeadNumber.index);
      }

      // 重新排序
      tmp.sort((a, b) => {
        return a - b;
      });
      
      // 每晚最多只會有兩位玩家死掉
      tmp.forEach((number, index) => {
        returnMessage += number;
        if (tmp.length === 2 && index !== tmp.length - 1) {
          returnMessage += ', ';
        }
      });
    }

    return returnMessage;
  }

  /**
   * handleCloseResult
   * 關閉晚上結果
   * 判斷是否結束遊戲
   * 判斷是否有獵人
   * 
   */
  const handleCloseResult = () => {
    // 設定成白天
    setDayType(DAY_TYPE.DAY);

    // 關閉晚上結果
    setIsOpenResult(false);
    
    // 更新遊戲訊息
    setMessages([
      ...messages,
      `${t('n_night', { day })}${generateResultMessage()}`
    ]);

    const tmpArray = [];

    // 狼人殺死的人
    if (deadNumber !== null) {
      tmpArray.push(deadNumber);
      setDead([
        ...dead,
        deadNumber,
      ]);
    }

    // 女巫毒的人
    if (isUseWitch && witchDeadNumber !== null) {
      tmpArray.push(witchDeadNumber);
    }

    // 更新已死亡的人
    if (tmpArray.length > 0) {
      setDead([
        ...dead,
        ...tmpArray,
      ]);
    }

    // 清空今晚死掉的人
    setDeadNumber(null);
    setWitchDeadNumber(null);
  }

  /**
   * generateSelectPicker
   * 組出選擇頭像 component
   * 
   * @param {string} role - 角色
   */
  const generateSelectPicker = (role) => {
    let returnComp = null;
    let selectValue = null;
    let selectFunc = null;

    switch(role) {
      // 狼人
      case WOLF.key:
        selectValue = deadNumber;
        selectFunc = setDeadNumber;
        break;
      // 女巫
      case WITCH.key:
        selectValue = witchDeadNumber;
        selectFunc = setWitchDeadNumber;
        break;
      // 預言家
      case PREDICTOR.key:
        selectValue = predictorSelect;
        selectFunc = setPredictorSelect;
        break;
      // 一般投票
      default:
        selectValue = selectVote;
        selectFunc = setSelectVote;
    }

    returnComp = (
      <Grid container justify="center" alignItems="center">
        {
          <Grid container justify="center" alignItems="center">
            {
              list.map(sit => {
                let className = classes.avatar;

                if (selectValue) {
                  if (selectValue.index === sit.index) {
                    className = classes.pinkAvatar;
                  };
                }

                return (
                  <>
                    <Avatar className={className} onClick={() => {selectFunc(sit)}}>
                      { sit.index }
                    </Avatar>
                  </>
                );
              })
            }
          </Grid>
        }
      </Grid>
    );

    return returnComp;
  }

  return (
    <>
      <div style={{ paddingTop: '20px' }}>
        { t('gaming') }
      </div>

      <div style={{ paddingTop: '20px' }}>
        { t('dead_message') }
      </div>

      <div>
        <ul>
          {
            messages.map(message => <li>{ message }</li>)
          }
        </ul>
      </div>

      <div>
          {
            (dayType === DAY_TYPE.DAY) && (
              <Button onClick={() => (setIsOpenVote(true))} variant="contained" color="secondary">{ t('start_vote') }</Button>
            )
          }
      </div>

      <AudioSound
        url={audioSrc}
        onFinishedPlaying={handleSongFinishedPlaying}
      />

      { /* Wolf Kill Start */ }
      <Dialog
        fullWidth
        open={isOpenWolfKill}
        // onClose={handleCloseWolfKill}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{t('wolf_kill')}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            { generateSelectPicker(WOLF.key) }
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseWolfKill} color="primary" disabled={deadNumber === null} variant="contained">
            { t('confirm') }
          </Button>
        </DialogActions>
      </Dialog>
      { /* Wolf Kill End */ }

      { /* Witch Save Start */ }
      <Dialog
        fullWidth
        open={isOpenWitchSave}
        // onClose={handleCloseWolfKill}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{t('witch_save')}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Grid container justify="center" alignItems="center">
              { t('dead_person', { index: (deadNumber) ? deadNumber.index : null }) }
            </Grid>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => {handleWitchSave(false)}} color="primary" variant="outlined">
            { t('no') }
          </Button>
          <Button onClick={() => {handleWitchSave(true)}} color="primary" variant="contained">
            { t('yes') }
          </Button>
        </DialogActions>
      </Dialog>
      { /* Witch Save End */ }

      {/* Witch Poison Start */}
      <Dialog
        fullWidth
        open={isOpenWitchPoison}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{t('witch_poison')}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            { generateSelectPicker(WITCH.key) }
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => {handleWitchPoison(false)}} color="primary" variant="outlined">
            { t('no') }
          </Button>
          <Button disabled={(isUse || witchDeadNumber === null)} onClick={() => {handleWitchPoison(true)}} color="primary" variant="contained">
            { t('yes') }
          </Button>
        </DialogActions>
      </Dialog>
      {/* Witch Poison End */}

      {/* Predictor Start */}
      <Dialog
        fullWidth
        open={isOpenPredictor}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{t('predictor_select')}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            { generateSelectPicker(PREDICTOR.key) }
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button disabled={predictorSelect === null} onClick={() => {handlePredictor()}} color="primary" variant="contained">
            { t('confirm') }
          </Button>
        </DialogActions>
      </Dialog>
      {/* Predictor End */}

      {/* Check Role Start */}
      <Dialog
        fullWidth
        open={isOpenRole}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{t('role_result')}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {
              (predictorSelect && predictorSelect.role.key === 'wolf') ? (
                <span className={classes.bad}>{t('is_wolf')}</span>
              ) : (
                <span className={classes.good}>{t('not_wolf')}</span>
              )
            }
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => {handleCloseCheckRole()}} color="primary" variant="contained">
            { t('confirm') }
          </Button>
        </DialogActions>
      </Dialog>
      {/* Check Role End */}

      {/* Result Start*/}
      <Dialog
        fullWidth
        open={isOpenResult}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{t('yesterday_dead')}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {
              generateResultMessage()
            }
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseResult} color="primary" variant="contained">
            { t('confirm') }
          </Button>
        </DialogActions>
      </Dialog>
      {/* Result End*/}

      { /* Vote Start */ }
      <Dialog
        fullWidth
        open={isOpenVote}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{t('start_vote')}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            { generateSelectPicker('') }
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => {console.log('TODO')}} color="primary" variant="contained">
            { t('confirm') }
          </Button>
        </DialogActions>
      </Dialog>
      { /* Vote End */ }
    </>
  );
};

export default Game;
