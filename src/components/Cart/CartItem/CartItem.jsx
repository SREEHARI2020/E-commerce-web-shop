import React from 'react';
import { TypographyStyle,Button,Card,CardActions,CardContent,CardMedia } from '@material-ui/core';
import useStyles from './styles';
import { Typography } from '@material-ui/core';
const CartItem = ({item}) => {
    const classes=useStyles();
    return (
        <Card>
            <Card Media image={CartItem.media.source} alt={item.name} className={classes.media}/>
            <CardContent className={classes.cardContent}>
            <Typography variant="h5" gutterBottom>{item.name}</Typography>
            <Typography variant="h5" >{item.price.formatted_with_symbol}</Typography>


            </CardContent>
            
            <CardActions className={classes.cardActions}>
            <div className={classes.buttons}>
                <Button type="button" size="small">-</Button>
                <Typography>{item.quantity}</Typography>
                <Button type="button" size="small">+</Button>

            </div>
            <Button variant="contained" type="button" color="secondary">Remove</Button>
            </CardActions>
        </Card>
    )
}

export default CartItem
