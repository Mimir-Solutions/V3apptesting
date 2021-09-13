import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Modal } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { NavLink } from 'react-router-dom';
import { FaDiscord, FaTelegram, FaTwitter } from 'react-icons/fa';
import { green } from '@material-ui/core/colors';
import { createTheme } from '@material-ui/core/styles';
import clsx from 'clsx';
import { useEthers, useEtherBalance } from '@usedapp/core';
import { formatEther } from '@ethersproject/units';
import WalletConnect from './../components/modals/WalletConnect'

let theme = createTheme({
    palette: {
        secondary: {
            main: green[500],
            light: '#fff',
            dark: '#000',
            contrastText: '#fff',
        },
        type: 'dark',
        background: {
            default: '#191c24',
            paper: '#191c24',
        },
    },
});

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    modal: {
        position: 'absolute',
        width: '80%',
        backgroundColor: theme.palette.background.default,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    drawer: {
        width: 0,
        flexShrink: 1,
        [theme.breakpoints.up('md')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('lg')]: {
            display: 'none',
        },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        marginBottom: 56,
    },
    closeMenuButton: {
        marginRight: 'auto',
        marginLeft: 0,
    },
    toolbarBottom: {
        display: 'flex',
        justifyContent: 'space-between',
        position: 'fixed',
        bottom: 0,
        left: drawerWidth,
        right: 0,
        backgroundColor: '#191c24',
        zIndex: 1000,
        [theme.breakpoints.down('md')]: {
            left: 0,
        },
    },
    active: { borderLeft: '10px solid', borderLeftColor: green[500] },
    nav: {
        // [theme.breakpoints.up('md')]: {
        //     border: '1px solid #f00',
        // },
        // [theme.breakpoints.down('lg')]: {
        //     border: '1px solid #0f0',
        //     width: 0,
        // },
    },
}));

const dummyCategories = [
    {
        name: 'NFY',
        route: 'nfy',
    },
    {
        name: 'Diamond NFY',
        route: 'Diamond',
    },
    {
        name: 'Tek',
        route: 'tek',
    },

    {
        name: 'Bit Alliance',
        route: 'bit-alliance',
    },
    // // {
    //     name: 'Mimir',
    //     route: 'mimir',
    // },
   
    // {
    //     name: 'Churche Of The Chain',
    //     route: 'churche-of-the-chain',
    // },
    // {
    //     name: 'Eros',
    //     route: 'eros',
    // },
    // {
    //     name: 'Pantheon',
    //     route: 'pantheon',
    // },
];
function ResponsiveDrawer({ children }) {
    const classes = useStyles();
    const { activateBrowserWallet, account } = useEthers();
    const etherBalance = useEtherBalance(account);
    // const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [activeRoute, setActiveRoute] = React.useState(false);
    function handleDrawerToggle() {
        setMobileOpen(!mobileOpen);
    }

    const drawer = (
        <>
            {dummyCategories.map((menu) => (
                <NavLink
                    to={`/${menu.route}`}
                    style={{
                        textDecoration: 'none',
                        color: theme.palette.secondary.light,
                    }}
                    onClick={() => setActiveRoute(menu.route)}
                    className={activeRoute === menu.route ? 'active' : ''}
                    key={menu.route}
                >
                    <ListItem button>
                        <div className={`image ${menu.route}`} />
                        <ListItemText primary={menu.name} />
                    </ListItem>
                </NavLink>
            ))}
        </>
    );

    const [modalWalletOpened, setModalWalletOpened] = useState(false);

    

    const ConnectWalletSection = (
        <>
            {!account && (
                <Button
                    onClick={() => activateBrowserWallet()}
                    variant="outlined"
                    color="inherit"
                >
                    Connect Wallet
                </Button>
            )}

            {account && etherBalance && (

                        <p>
                            
                            <Modal 
                                open={modalWalletOpened} 
                                onClose={() => setModalWalletOpened(false)}
                                aria-labelledby="wallet-modal"
                                aria-describedby="wallet-modal-info"
                            >
                                <div style={{
                                    top: `50%`,
                                    left: `50%`,
                                    transform: `translate(-50%, -50%)`,
                                    backgroundColor: theme.palette.background.default
                                  }} className={classes.modal}>
                                      <WalletConnect closeModal={() => setModalWalletOpened(false)}></WalletConnect>
                                  </div>
                            </Modal>


                            <Button
                                className="ml-3"
                                onClick={() => setModalWalletOpened(true)}
                                variant="outlined"
                                color="inherit"
                                size="small"
                            >
                                {String(account).substr(0, 6)} {formatEther(etherBalance)}{' '} ETH
                            </Button>
                        </p>
                        
               
            )}
        </>
    );

    return (
        <div className={classes.root}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    className={classes.appBar}
                    color="inherit"
                >
                    <Toolbar
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}
                    >
                        <IconButton
                            color="inherit"
                            aria-label="Open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            className={classes.menuButton}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap>
                            Dashboard
                        </Typography>

                        {ConnectWalletSection}
                    </Toolbar>
                </AppBar>

                <nav className={clsx(classes.nav)}>
                    {/* For smaller screens e.g. mobile devices or tablets */}
                    <Hidden lgUp>
                        <Drawer
                            variant="temporary"
                            anchor={
                                theme.direction === 'rtl' ? 'right' : 'left'
                            }
                            open={mobileOpen}
                            onClose={handleDrawerToggle}
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                            ModalProps={{
                                keepMounted: true, // Better open performance on mobile.
                            }}
                        >
                            <IconButton
                                onClick={handleDrawerToggle}
                                className={classes.closeMenuButton}
                            >
                                <CloseIcon />
                            </IconButton>
                            
                            <NavLink
                                to="/Dashboard"
                                style={{
                                    textDecoration: 'none',
                                    color: theme.palette.secondary.light,
                                }}
                                onClick={() => setActiveRoute('Dashboard')}
                                className={
                                    activeRoute === 'Dashboard'
                                        ? 'active'
                                        : ''
                                }
                            >
                                <ListItem button>
                                    
                                       {/* <MenuIcon />
                                 */}
                                    {/* <ListItemText primary="Dashboard" /> */}
                                </ListItem>
                            </NavLink> 


                            {drawer}
                        </Drawer>
                    </Hidden>
                    {/* For larger screens */}
                    <Hidden mdDown>
                        <Drawer
                            className={classes.drawer}
                            variant="permanent"
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                        >
                            <div className={classes.toolbar} />
                            {drawer}
                        </Drawer>
                    </Hidden>
                </nav>
                <div className={classes.content}>
                    <div className={classes.toolbar} />
                    {children}
                    <Toolbar className={classes.toolbarBottom}>
                        <Typography variant="body1" color="inherit">
                            © {new Date().getFullYear()}
                        </Typography>
                        <Box>
                            <a
                                href="https://twitter.com/NFYFinance?s=20"
                                rel="noreferrer"
                                target="_blank"
                            >
                                <IconButton>
                                    <FaTwitter
                                        color={theme.palette.secondary.light}
                                    />
                                </IconButton>
                            </a>
                            <a
                                href="https://discord.gg/RqsBuMWyPV"
                                rel="noreferrer"
                                target="_blank"
                            >
                                <IconButton>
                                    <FaDiscord
                                        color={theme.palette.secondary.light}
                                    />
                                </IconButton>
                            </a>
                            <a
                                href="https://t.me/NFYOfficialChat"
                                rel="noreferrer"
                                target="_blank"
                            >
                                <IconButton>
                                    <FaTelegram
                                        color={theme.palette.secondary.light}
                                    />
                                </IconButton>
                            </a>
                        </Box>
                    </Toolbar>
                </div>
            </ThemeProvider>
        </div>
    );
}

export default ResponsiveDrawer;
