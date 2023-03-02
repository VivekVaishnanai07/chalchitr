import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { ReactComponent as MovieIcon } from '../../assets/svg/film.svg';
import { ReactComponent as FilmIcon } from '../../assets/svg/film1.svg';
import { getRandomColor } from '../../pages/common/utils';
import './header.css';
import Style from './sidebar.module.scss';

const drawerWidth = 240;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const collections = ['Bollywood', 'Hollywood', 'South', 'Gujarati'];
const sideMenuItem = [
  {
    id: 'collections',
    title: 'Collections',
    icon: <FilmIcon className='movie-icon' style={{ height: 30, width: 28 }} />,
    route: 'collections',
  }
];
export default function TopBar(props: Props) {
  const { window } = props;
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  const pathname = location.pathname.split('/').filter((x) => x);
  const pathLocation = location.pathname.slice(1)

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const onMenuItemClick = (menu: any) => {
    navigate(menu.route);
    setOpen(false)
  };

  const onClickBack = () => {
    navigate(-1);
  };

  const onSelectMenu = (col: any) => {
    navigate(`/collections/${col.toLowerCase()}`);
    setOpen(false)
  }

  const collectionList = (
    <div className={Style['nav-collection-list']}>
      <div className={Style['title']}>
        <p> Collections </p>
      </div>

      <div className={Style['list']}>
        {collections.map((col) => (
          <div className={Style['item']} key={col} onClick={() => onSelectMenu(col)}>
            <div className='dot-sm' style={{ backgroundColor: getRandomColor() }} />
            <p>{col}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const SideBarHeader = (
    <div className={Style['sidebar-header']}>
    </div>
  );

  const drawer = (
    <div className={Style['sidebar-wrapper']}>
      {SideBarHeader}

      <div className={Style['sidebar-content']}>
        <List>
          {sideMenuItem.map((menu) => (
            <ListItem
              key={menu.id}
              className={[
                Style['nav-item'],
                location?.pathname?.includes(menu.route) &&
                Style['nav-item-active'],
              ].join(' ')}
              onClick={() => onMenuItemClick(menu)}
            >
              <ListItemIcon className={Style['menu-icon']} color='inherit'>
                {menu.icon}
              </ListItemIcon>
              <ListItemText
                color='primary'
                primary={menu.title}
                className={Style['menu-title']}
              />
            </ListItem>
          ))}
        </List>
        {collectionList}
      </div>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
        style={{ background: 'white', color: 'black' }}
      >
        <Toolbar style={{ lineHeight: 0, padding: '0 8px' }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerOpen}
            sx={{ display: { sm: 'none' } }}
            style={{ margin: 0 }}
          >
            <MenuIcon />
          </IconButton>
          {
            pathLocation === "collections" ?
              (
                <div className='icon-wrapper'>
                  <MovieIcon style={{ height: 30, width: 30, margin: 8 }} />
                </div>
              ) :
              (
                <div className='icon-wrapper'>
                  <ArrowBackIosIcon style={{ height: 25, width: 25, margin: 8 }} onClick={onClickBack} />
                </div>
              )
          }
          <Breadcrumbs aria-label='breadcrumb'>
            {
              pathname.map((path, index) => {
                return (
                  <Typography key={index} variant="h5" sx={{ textTransform: 'capitalize', fontSize: '20px' }} color='text.primary'>
                    {path}
                  </Typography>
                )
              })
            }
          </Breadcrumbs>
          {/* <TextField label='' fullWidth={false} inputProps={{
            size: 'small',
            InputProps: { startAdornment: <SearchIcon style={{ backgroundColor: 'black' }} /> }
          }} /> */}
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={open}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box' },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box' },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        style={{ padding: '0px', marginTop: '68px' }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}