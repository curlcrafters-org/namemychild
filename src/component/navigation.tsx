import { Box, Grid } from '@mui/material';
import {
  Button,
  List,
  ListItem,
  Menu,
  MenuItem,
  Option,
  Select,
} from '@mui/joy';
import { AppContext } from '@/context/appContext';
import { useContext, useState } from 'react';

import { FaChevronDown } from 'react-icons/fa';

// React imports above ^^^^^^

import options from './../data/options.json';

const Navigation = () => {
  const appContext = useContext(AppContext);

  const { nameBody, getNames, updatePrompts, result, setResult } = appContext;

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box className='navigation'>
      <Grid
        container
        className='grid-container'
      >
        <Grid
          item
          lg={3}
          md={3}
          sm={12}
          className='col-1'
        >
          <h1>Name my child</h1>
        </Grid>
        <Grid
          item
          lg={5}
          md={5}
          className='col-2'
        >
          <Box className='menu'>
            <List
              className='menu-list'
              orientation='horizontal'
            >
              <ListItem onMouseLeave={handleClose}>
                <Button
                  id='basic-button'
                  aria-controls={open ? 'basic-menu' : undefined}
                  aria-haspopup='true'
                  aria-expanded={open ? 'true' : undefined}
                  onMouseEnter={handleClick}
                  endDecorator={<FaChevronDown />}
                  variant='outlined'
                >
                  Baby Names
                </Button>
                <Menu
                  id='basic-menu'
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}

                >
                  <MenuItem onClick={handleClose}>Popular Names</MenuItem>
                  <MenuItem onClick={handleClose}>Modern Unisex Names</MenuItem>
                  <MenuItem onClick={handleClose}>
                    Famous Historical Names
                  </MenuItem>
                </Menu>
              </ListItem>
              <ListItem>
                <Button>Shortlisted Names</Button>
              </ListItem>
              <ListItem>
                <Button>Login</Button>
              </ListItem>
            </List>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Navigation;
