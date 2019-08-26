import React, {
  // useState,
} from 'react';
import { useTranslation } from "react-i18next";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
// import Select from '@material-ui/core/Select';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
// import InputLabel from '@material-ui/core/InputLabel';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
  group: {
    margin: theme.spacing(1, 0),
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
  } = props;

  // console.log('wolfNumber', wolfNumber);

  return (
    <>
      <div>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">{t('player_number')}</FormLabel>
          <RadioGroup
            row
            className={classes.group}
            value={playerNumber}
            onChange={(e) => {setPlayerNumber(e.target.value * 1)}}
          >
            <FormControlLabel value={6} control={<Radio />} label="6" />
            <FormControlLabel value={7} control={<Radio />} label="7" />
            <FormControlLabel value={8} control={<Radio />} label="8" />
            <FormControlLabel value={9} control={<Radio />} label="9" />
            <FormControlLabel value={10} control={<Radio />} label="10" />
            <FormControlLabel value={11} control={<Radio />} label="11" />
            <FormControlLabel value={12} control={<Radio />} label="12" />
          </RadioGroup>
        </FormControl>
      </div>
      <div>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">{t('wolf_number')}</FormLabel>
          <RadioGroup
            row
            className={classes.group}
            value={wolfNumber}
            onChange={(e) => {setWolfNumber(e.target.value * 1)}}
          >
            <FormControlLabel value={1} control={<Radio />} label="1" />
            <FormControlLabel value={2} control={<Radio />} label="2" />
            <FormControlLabel value={3} control={<Radio />} label="3" />
          </RadioGroup>
        </FormControl>
      </div>
      <div>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">{t('is_kill_kind')}</FormLabel>
          <RadioGroup
            row
            className={classes.group}
            value={isKillKind}
            onChange={(e) => {setIsKillKind((e.target.value === 'true'))}}
          >
            <FormControlLabel value={true} control={<Radio />} label={t('yes')} />
            <FormControlLabel value={false} control={<Radio />} label={t('no')} />
          </RadioGroup>
        </FormControl>
      </div>
      <Divider />
      <div>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">{t('predictor')}</FormLabel>
          <RadioGroup
            row
            className={classes.group}
            value={isUsePredictor}
            onChange={(e) => {setIsUsePredictor((e.target.value === 'true'))}}
          >
            <FormControlLabel value={true} control={<Radio />} label={t('yes')} />
            <FormControlLabel value={false} control={<Radio />} label={t('no')} />
          </RadioGroup>
        </FormControl>
      </div>
      <div>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">{t('witch')}</FormLabel>
          <RadioGroup
            row
            className={classes.group}
            value={isUseWitch}
            onChange={(e) => {setIsUseWitch((e.target.value === 'true'))}}
          >
            <FormControlLabel value={true} control={<Radio />} label={t('yes')} />
            <FormControlLabel value={false} control={<Radio />} label={t('no')} />
          </RadioGroup>
        </FormControl>
      </div>
      <div>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">{t('hunter')}</FormLabel>
          <RadioGroup
            row
            className={classes.group}
            value={isUseHunter}
            onChange={(e) => {setIsUseHunter((e.target.value === 'true'))}}
          >
            <FormControlLabel value={true} control={<Radio />} label={t('yes')} />
            <FormControlLabel value={false} control={<Radio />} label={t('no')} />
          </RadioGroup>
        </FormControl>
      </div>
      <Divider />
      <Button style={{ marginTop: '20px', marginBottom: '20px' }} onClick={handleStart} variant="contained" color="secondary">{t('finished')}</Button>
    </>
  );
};

export default Setting;
