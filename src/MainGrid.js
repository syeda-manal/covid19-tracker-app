import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Card, CardContent, Typography } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';
import CountryPicker from './CountryPicker';
import Graph from './Graph';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  card: {
    flexGrow: 1,
    // padding: theme.spacing('1%'),
    maxWidth: 200,
    margin: '0 1%',
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
  const [display, setDisplay] = useState([]);
  const [globalData, setGlobalData] = useState([]);
  const [allCountriesData, setAllCountriesData] = useState([]);

  useEffect(() => {
    async function getGlobalData() {
      const globalResponse = await fetch("https://api.thevirustracker.com/free-api?global=stats");
      const countriesResponse = await fetch("https://api.thevirustracker.com/free-api?countryTotals=ALL");

      const dataG = await globalResponse.json();
      const dataC = await countriesResponse.json();

      setGlobalData(dataG.results[0]);
      setAllCountriesData(dataC.countryitems[0]);
      setDisplay(dataG.results[0]);

    }
    getGlobalData();

  }, [])
  console.log(allCountriesData);
  console.log(globalData);
  const getCountry = (value) => {
    if (!value || value === 'global') {
      setDisplay(globalData);
    }
    else {
      setDisplay(allCountriesData[value]);
    }
  }
  if (!display.total_cases) {
    return 'Loading....';
  }
  return (
    <div className={classes.root}>
      <CountryPicker allCountriesData={allCountriesData} onChange={(value) => getCountry(value)} />
      <Grid container justify = "center" >
        <Grid item xs={12} sm={5} component={Card} className={cx(classes.totalCases, classes.card)}>
          <CardContent className={classes.card}>
            <Typography variant='h6' className={classes.secondaryDark} gutterBottom> Total Cases: <br />
              <CountUp start={0} end={display.total_cases} duration={3} separator="," />

            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={12} sm={5} component={Card} className={cx(classes.activeCases, classes.card)}>
          <CardContent className={classes.card}>
            <Typography variant='h6' gutterBottom>Active Cases: <br />
              <CountUp start={0} end={display.total_active_cases} duration={1.5} separator="," />
            </Typography>
            <Typography variant='caption' gutterBottom>New Cases:
                <CountUp start={0} end={display.total_new_cases_today} duration={1.5} separator="," />
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={12} sm={5} component={Card} className={cx(classes.recoveredCases, classes.card)}>
          <CardContent className={classes.card}>
            <Typography variant='h6' gutterBottom> Total Recovered: <br />
              <CountUp start={0} end={display.total_recovered} duration={1.5} separator="," />
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={12} sm={4} component={Card} className={cx(classes.deaths, classes.card)}>
          <CardContent className={classes.card}>
            <Typography variant='h6' className={classes.errorDark} gutterBottom> Total Deaths: <br />
              <CountUp start={0} end={display.total_deaths} duration={1.5} separator="," />
            </Typography>
            <Typography variant='caption' className={classes.errorDark} gutterBottom> new Deaths:
                <CountUp start={0} end={display.total_new_deaths_today} duration={1.5} separator="," />
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
      <Graph display = {display} /> 
    </div>
  );
}