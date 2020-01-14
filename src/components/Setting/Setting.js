import React, {
  Fragment
} from 'react';
import { useTranslation } from "react-i18next";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Divider from '@material-ui/core/Divider';
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  group: {
    margin: theme.spacing(1, 0),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Setting = (props) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const {
    playerNumber,
    setPlayerNumber,
    wolfNumber,
    setWolfNumber,
    isUsePredictor,
    setIsUsePredictor,
    isUseWitch,
    setIsUseWitch,
    isUseHunter,
    setIsUseHunter,
    handleStart,
    isKillKind,
    setIsKillKind,
    isUseKnight,
    setIsUseKnight,
    isUseidiot,
    setIsUseidiot,
    isMirror,
    setIsMirror,
  } = props;

  return (
    <Fragment>
      <div>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-native-simple">{t('player_number')}</InputLabel>
          <NativeSelect
            native
            value={playerNumber}
            onChange={(e) => {setPlayerNumber(e.target.value * 1)}}
          >
            <option value={6}>6</option>
            <option value={7}>7</option>
            <option value={8}>8</option>
            <option value={9}>9</option>
            <option value={10}>10</option>
            <option value={11}>11</option>
            <option value={12}>12</option>
          </NativeSelect>
        </FormControl>
      </div>

      <div>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-native-simple">{t('wolf_number')}</InputLabel>
          <NativeSelect
            native
            value={wolfNumber}
            onChange={(e) => {setWolfNumber(e.target.value * 1)}}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
          </NativeSelect>
        </FormControl>
      </div>

      <div>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-native-simple">{t('is_kill_kind')}</InputLabel>
          <NativeSelect
            native
            value={isKillKind}
            onChange={(e) => {setIsKillKind(e.target.value === 'true')}}
          >
            <option value={true}>{t('yes')}</option>
            <option value={false}>{t('no')}</option>
          </NativeSelect>
        </FormControl>
      </div>

      <div>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-native-simple">{t('predictor')}</InputLabel>
          <NativeSelect
            native
            value={isUsePredictor}
            onChange={(e) => {setIsUsePredictor(e.target.value === 'true')}}
          >
            <option value={true}>{t('yes')}</option>
            <option value={false}>{t('no')}</option>
          </NativeSelect>
        </FormControl>
      </div>

      <div>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-native-simple">{t('witch')}</InputLabel>
          <NativeSelect
            native
            value={isUseWitch}
            onChange={(e) => {setIsUseWitch(e.target.value === 'true')}}
          >
            <option value={true}>{t('yes')}</option>
            <option value={false}>{t('no')}</option>
          </NativeSelect>
        </FormControl>
      </div>

      <div>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-native-simple">{t('hunter')}</InputLabel>
          <NativeSelect
            native
            value={isUseHunter}
            onChange={(e) => {setIsUseHunter(e.target.value === 'true')}}
          >
            <option value={true}>{t('yes')}</option>
            <option value={false}>{t('no')}</option>
          </NativeSelect>
        </FormControl>
      </div>

      <div>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-native-simple">{t('knight')}</InputLabel>
          <NativeSelect
            native
            value={isUseKnight}
            onChange={(e) => {setIsUseKnight(e.target.value === 'true')}}
          >
            <option value={true}>{t('yes')}</option>
            <option value={false}>{t('no')}</option>
          </NativeSelect>
        </FormControl>
      </div>

      <div>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-native-simple">{t('idiot')}</InputLabel>
          <NativeSelect
            native
            value={isUseidiot}
            onChange={(e) => {setIsUseidiot(e.target.value === 'true')}}
          >
            <option value={true}>{t('yes')}</option>
            <option value={false}>{t('no')}</option>
          </NativeSelect>
        </FormControl>
      </div>

      <div>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-native-simple">{t('is_mirror')}</InputLabel>
          <NativeSelect
            native
            value={isMirror}
            onChange={(e) => {setIsMirror(e.target.value === 'true')}}
          >
            <option value={true}>{t('yes')}</option>
            <option value={false}>{t('no')}</option>
          </NativeSelect>
        </FormControl>
      </div>

      <Divider />
      <Button style={{ marginTop: '20px', marginBottom: '20px' }} onClick={handleStart} variant="contained" color="secondary">{t('finished')}</Button>
    </Fragment>
  );
};

export default Setting;
