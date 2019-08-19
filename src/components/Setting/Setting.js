import React, {
  useState,
} from 'react';
import { useTranslation } from "react-i18next";

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import FormLabel from '@material-ui/core/FormLabel';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';

const Setting = () => {
  const { t } = useTranslation();

  const [playerNumber, setPlayerNumber] = useState(6);
  const [wolfNumber, setWolfNumber] = useState(2);
  const [isUsePredictor, setIsUsePredictor] = useState(false);
  const [isUseWitch, setIsUseWitch] = useState(false);
  const [isUseHunter, setIsUseHunter] = useState(false);

  return (
    <>
      <div>
        <TextField
          label={t('player_number')}
          // className={classes.textField}
          value={playerNumber}
          onChange={(e) => {setPlayerNumber(e.target.value)}}
          margin="normal"
        />
      </div>
      <div>
        <TextField
          label={t('player_number')}
          // className={classes.textField}
          value={wolfNumber}
          onChange={(e) => {setWolfNumber(e.target.value)}}
          margin="normal"
        />
      </div>
      <div>
        <InputLabel htmlFor="age-native-helper">{t('predictor')}</InputLabel>
        <Select
          color="inherit"
          native
          value={isUsePredictor}
          onChange={(e) => setIsUsePredictor(e.target.value)}
          inputProps={{
            name: t('predictor'),
          }}
        >
          <option value={true}>{t('yes')}</option>
          <option value={false}>{t('no')}</option>
        </Select>
      </div>
      <div>
        <InputLabel htmlFor="age-native-helper">{t('witch')}</InputLabel>
        <Select
          color="inherit"
          native
          value={isUseWitch}
          onChange={(e) => setIsUseWitch(e.target.value)}
          // inputProps={{
          //   name: t('predictor'),
          // }}
        >
          <option value={true}>{t('yes')}</option>
          <option value={false}>{t('no')}</option>
        </Select>
      </div>
      <div>
        <InputLabel htmlFor="age-native-helper">{t('hunter')}</InputLabel>
        <Select
          color="inherit"
          native
          value={isUseHunter}
          onChange={(e) => setIsUseHunter(e.target.value)}
          // inputProps={{
          //   name: t('predictor'),
          // }}
        >
          <option value={true}>{t('yes')}</option>
          <option value={false}>{t('no')}</option>
        </Select>
      </div>
      <Button>{t('start')}</Button>
    </>
  );
};

export default Setting;
