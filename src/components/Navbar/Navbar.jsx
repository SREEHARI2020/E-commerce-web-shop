
import React from 'react';
import {AppBar,Toolbar,IconButton,Badge,MenuItem,Menu,Typography} from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons';
import useStyles from './styles';
import logo from '../../assets/icons8-huawei-logo.svg'

const Navbar = ({cart}) => {
    const classes=useStyles();
   console.log("check",cart);
    return (
      <>
      {}
      <AppBar position="fixed" className={classes.AppBar} color="inherit" >
          <Toolbar>
              <Typography variant="h6" className={classes.title} color="inherit">
                <img src={logo} alt="shopper" height="25px" className={classes.image} />
                Shopper

              </Typography>
                <div className={classes.grow}></div>
                <div className={classes.button}>
                    <IconButton aria-label="show cart items" color="inherit">
                      {cart.cart?  <Badge badgeContent={cart.cart.total_items} color="secondary">
                        
                        <ShoppingCart/>
                        </Badge>:  <Badge  color="secondary">
                        
                        <ShoppingCart/>
                        </Badge> }
                      

                    </IconButton>
                </div>

          </Toolbar>
          </AppBar>
      </>
    )
}

export default Navbar
