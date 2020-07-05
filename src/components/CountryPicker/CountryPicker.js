import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import {NativeSelect} from '@material-ui/core';
import { Card, CardContent, Typography, StylesProvider } from '@material-ui/core';
import cx from 'classnames';

function CountryPicker(props) {
    const [allCountryData, setAllCountryData] = useState({});

    //all country stats
  useEffect(() => {
    async function getAllCountryData() {
      const response = await fetch("https://api.thevirustracker.com/free-api?countryTotals=ALL");
      let data = await response.json();
      setAllCountryData(Object.values(Object.values(data.countryitems)[0]));
    }
    getAllCountryData();
  }, [])
  console.log(allCountryData);
  allCountryData = Array.from(allCountryData);

 



    return (
        <div>
        
        </div>
    )
}
export default CountryPicker
