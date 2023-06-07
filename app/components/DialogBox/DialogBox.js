import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import './style.scss';
import { Typography, Dialog, IconButton } from '@material-ui/core';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import CloseIcon from '@material-ui/icons/Close';

const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose} disableRipple>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);


const DialogBox = (props) => {

    const closeIconButton = props.iconButton;

    const closePopUp = () => {
        props.setOpenThisPopUp(false);
    };

    return (
        <div>
            <Dialog onClose={closePopUp} aria-labelledby="customized-dialog-title" open={true} disableBackdropClick="true" disableEscapeKeyDown="true">
                {
                    closeIconButton == true &&
                    <DialogTitle id="customized-dialog-title" onClose={closePopUp}></DialogTitle>
                }

                <DialogContent>
                    {props.modalDescription}
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default DialogBox;