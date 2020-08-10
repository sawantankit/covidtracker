import React from 'react';

import { Cards, CountryPicker, Chart } from './components';
import styles from './App.module.css';
import { fetchData } from './api/';

import covidLogo from './images/COVID.jpg';
import backgroundImage from './images/background.jpg';


class App extends React.Component {

  state = {
    data: {},
    country: '',
  }
  async componentDidMount(){
    const fetchedData = await fetchData();

    this.setState({data : fetchedData}); 
   }

//Method to change the state of the country picker
   handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);

    this.setState({data : fetchedData, country: country}); 
   }

    render(){
        const { data, country } = this.state;

        return(
          <div styles={{ backgroundImage:`url(${backgroundImage})` }} className={styles.container}>
            <img className={styles.image} src={covidLogo} alt="COVID-19"/>
            <Cards data={data}/>
            <CountryPicker handleCountryChange ={this.handleCountryChange}/>
            <Chart data= {data} country = {country} />
          </div>
        )

    }

} 

export default App;
