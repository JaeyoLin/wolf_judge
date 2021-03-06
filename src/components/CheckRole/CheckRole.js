/* eslint-disable jsx-a11y/alt-text */
import React, {
  useState,
} from 'react';
import { useTranslation } from "react-i18next";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

import wolf from '../../static/images/wolf.jpg';
import predictor from '../../static/images/predictor.jpg';
import witch from '../../static/images/witch.jpg';
import hunter from '../../static/images/hunter.jpg';
import knight from '../../static/images/knight.jpg';
import idiot from '../../static/images/idiot.jpg';
import villager from '../../static/images/villager.jpg';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    margin: '10px',
  },
  isChecked: {
    color: 'red',
  },
  role: {
    textAlign: 'center',
    fontSize: '30px',
  },
}));

const RoleCard = (props) => {
  const { sit } = props;
  const { t } = useTranslation();
  const classes = useStyles();

  const [isWatch, setIsWatch] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    if (!isWatch) {
      setIsOpen(true);
    }
  }

  const handleClose = () => {
    setIsOpen(false);
    setIsWatch(true);
  }

  let src = null;
  switch(sit.role.key) {
    case 'wolf':
      src = wolf;
      break;
    case 'predictor':
      src = predictor;
      break;
    case 'witch':
      src = witch;
      break;
    case 'hunter':
      src = hunter;
      break;
    case 'knight':
      src = knight;
      break;
    case 'idiot':
      src = idiot;
      break;
    case 'villager':
      src = villager;
      break;
    default:
      break;
  };

  return (
    <>
      <Paper className={classes.root} onClick={handleClick}>
        <Typography variant="h5" component="h3">
          { 
            t('sit_number', { index: sit.index }) 
            // sit.role.key
          }
        </Typography>
        <Typography component="p">
          { (isWatch) ? (
            <span className={classes.isChecked}>
              { t('is_checked') }
            </span>
          ) : t('check_role') }
        </Typography>
      </Paper>

      <Dialog
        fullWidth
        open={isOpen}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{t('your_role')}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <div className={classes.role}>
              { t(sit.role.key) }
            </div>
            <img src={src} width="100%" />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" variant="contained">
            { t('confirm') }
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

const CheckRole = (props) => {
  const { t } = useTranslation();
  const { list, handleStartGame } = props;
  // const classes = useStyles();

  return (
    <> 
      {
        list.map((sit, index) => {
          return (
            <div key={`role_${index}`}>
              <RoleCard
                sit={sit}
              />
            </div>
          )
        })
      }
      <Divider style={{ marginTop: '20px' }} />
      <Button style={{ marginTop: '20px', marginBottom: '20px' }} onClick={handleStartGame} variant="contained" color="secondary">{t('start')}</Button>
    </>
  );
};

export default CheckRole;
