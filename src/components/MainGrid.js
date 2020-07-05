import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import { NativeSelect } from '@material-ui/core';
// import { findByLabelText } from '@testing-library/react';
import { Card, CardContent, Typography, StylesProvider } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';
import CountryPicker from './CountryPicker/CountryPicker';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 2000,
    marginTop: 30,
    paddingLeft: 0,
  },
  card: {
    maxWidth: 200,
    marginLeft: 5,
    marginTop: 20,
    flexDirection: 'row',
    paddingRight: 0,
    paddingLeft: 0,
  },
  globalStats: {
    maxWidth: 200,
    marginLeft: 5,
    marginTop: 20,
    paddingTop: 1000,
    flexDirection: 'row',
    paddingRight: 0,
    paddingLeft: 0,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    flexDirection: "row",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  totalCases: {
    color: theme.palette.secondary.dark,
    // background: '#ff99bb',
    borderBottom: theme.palette.secondary.dark,
    borderBottomWidth: 20,
    borderBottomStyle: "solid",
  },
  activeCases: {
    color: '#e64a19',
    // background: '#ff9e80',
    borderBottom: theme.palette.warning.dark,
    borderBottomStyle: "solid",
    borderBottomWidth: 20,
  },
  recoveredCases: {
    color: theme.palette.success.dark,
    // background: '#a2cf6e',
    borderBottom: theme.palette.success.dark,
    borderBottomStyle: "solid",
    borderBottomWidth: 20,
  },
  deaths: {
    color: theme.palette.error.dark,
    // background: '#ffa199',
    borderBottom: theme.palette.error.dark,
    borderBottomStyle: "solid",
    borderBottomWidth: 20,
  },
}));

export default function MainGrid() {
  const classes = useStyles();
  const [globalData, setGlobalData] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch("https://api.thevirustracker.com/free-api?global=stats");
      let data = await response.json();
      delete data.results[0].source;
      // delete data.results[0].source;

      setGlobalData(data.results[0]);

    }
    getData();
  }, [])

  let [allCountryData, setAllCountryData] = useState({});

  //all country stats
  useEffect(() => {
    async function getAllCountryData() {
      const response = await fetch("https://api.thevirustracker.com/free-api?countryTotals=ALL");
      let data = await response.json();
      setAllCountryData(Object.values(Object.values(data.countryitems)[0]));
    }
    getAllCountryData();
  }, [])
  // console.log(allCountryData);
  allCountryData = Array.from(allCountryData);

  const [data, setData] = useState([]);
  

  const handleChange = (event) => {
    // console.log(event.target.value, "in handlechange");
    if(event.target.value == "global"){
      setData(globalData);
    }
    else {
      setData(allCountryData[event.target.value]);
    }
    
  }

  if (!globalData.total_active_cases) {
    return 'Loading...';
  }

  return ( 
    <div className={classes.root}>
      <Grid container spacing={3} >
        <Grid item xs={12} sm={5} className={classes.globalStats}>
          <Typography>Select country</Typography>
          <FormControl>
            <NativeSelect onChange={handleChange}>
              <option value= "global">Global </option>
              {allCountryData.map((country, i) => <option key={i} value={i}> {country.title} </option>)}
            </NativeSelect>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={5} component={Card} className={cx(classes.totalCases, classes.card)}>
          <CardContent className={classes.card}>
            <Typography variant='h6' className={classes.secondaryDark} gutterBottom> Total Cases: <br />
              {/* <CountUp start={0} end={data.total_cases} duration={1} separator="," /> */}
              {data.total_cases}
            </Typography>

          </CardContent>
        </Grid>
        <Grid item xs={12} sm={5} component={Card} className={cx(classes.activeCases, classes.card)}>
          <CardContent className={classes.card}>
            <Typography variant='h6' gutterBottom>Active Cases: <br />
              {/* <CountUp start={0} end={globalData.total_active_cases} duration={1.5} separator="," /> */}
              {data.total_serious_cases} 
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={12} sm={5} component={Card} className={cx(classes.recoveredCases, classes.card)}>
          <CardContent className={classes.card}>
            <Typography variant='h6' gutterBottom> Total Recovered: <br />
              {/* <CountUp start={0} end={globalData.total_recovered} duration={1.5} separator="," /> */}
              {data.total_recovered} 
            </Typography>

          </CardContent>
        </Grid>
        <Grid item xs={12} sm={4} component={Card} className={cx(classes.deaths, classes.card)}>
          <CardContent className={classes.card}>
            <Typography variant='h6' className={classes.errorDark} gutterBottom> Total Deaths: <br />
              {/* <CountUp start={0} end={globalData.total_deaths} duration={1.5} separator="," /> */}
              {data.total_deaths}
            </Typography>

          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
}
