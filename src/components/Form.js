import React from 'react'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import FormLabel from '@material-ui/core/FormLabel'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
    textField: {
      margin: theme.spacing.unit,
      width: '70%'
    },
    button: {
      display: 'flex',
      margin: theme.spacing.unit,
      width: '70%',
      marginLeft: '250px',
      height: '55px'
    },
    formLabel: {
        margin: 70,
        fontSize: '1.25rem',
        color: '#000'
    }
  })

  const Form = (props) => (

    <form onSubmit={props.getData}>
        
        <FormLabel 
            className={props.classes.formLabel}
        >
            Search Term: 
        </FormLabel>

        <TextField
            className={props.classes.textField}
            placeholder='search term'
            margin='normal'
            name='term'
            type='search'
            variant='outlined'
            InputLabelProps={{
            required: true,
            color: 'white',
            shrink: true
            }}
        />

        <FormLabel 
            className={props.classes.formLabel}
        >
            Categories: 
        </FormLabel>

        <TextField
            className={props.classes.textField}
            placeholder='enter category'
            margin='normal'
            name='country'
            type='search'
            variant='outlined'
            InputLabelProps={{
            required: true,
            color: 'white',
            shrink: true
            }}
        />

        <FormLabel 
            className={props.classes.formLabel}
        >
            City/Location: 
        </FormLabel>

        <TextField
            className={props.classes.textField}
            placeholder='enter city'
            margin='normal'
            name='city'
            type='search'
            variant='outlined'
            InputLabelProps={{
            required: true,
            color: 'white',
            shrink: true
            }}
        />
    
        <Button
            className={props.classes.button}
            color='primary'
            type='submit'
            variant='raised'
        >
            Search
        </Button>
    </form>
  
  )
  
  export default withStyles(styles)(Form)