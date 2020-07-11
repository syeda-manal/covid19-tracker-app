import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import { NativeSelect } from '@material-ui/core';
import { Typography} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexgrow: 1,
        marginTop: 30,
        marginBottom: 30,
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        flexDirection: "row",
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },

}));

export default function CountryPicker(props) {
    const classes = useStyles();
    console.log(props.allCountriesData, "in Country Pciker");
    return (
        <div className = {classes.root}>
            
                <Typography>Select Country</Typography>
                <FormControl className = {classes.formControl}>
                    <NativeSelect onChange={(e) => {props.onChange(e.target.value)}}>
                        <option value="global">Global </option>
                        {Object.values(props.allCountriesData).map((country, i) => <option key = {i} value = {i+1}> {country.title}</option>)}
                        
                    </NativeSelect>
                </FormControl>
        </div>
    );
}