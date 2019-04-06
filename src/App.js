import React, { Component } from 'react';
import './App.css';

import axios from 'axios'

import Form from './components/Form'
import Title from './components/TItle'
import DisplayData from './components/DisplayData'

const API_KEY = 'mVkI8cJKHAw2u_3H9vqxhfB4JhECH--tFRQwzTsnQQLYBCE4fL5T3DOwestN0YkJanJH-NWvQXxmGzbbnqC3dqc-TmxWBrNSgqPHzKUlOfurk00IxzhgNcZ3IlimXHYx'

class App extends Component {

  state = {
    busnisses: []
  }

  getData = async(event) => {
    event.preventDefault()
    console.log(this.state)

    const term = event.target.elements.term.value

    axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?location=vancouver`, {
      headers: {
        Authorization: `Bearer ${process.env.API_KEY}`
      },

      params: {
        locale: 'en_CA',
        term: `${term}`,
      }
    })
      .then((res) => {
        this.setState({
          busnisses: res.busnisses
        })
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render() {
    return (
      <div className="App">
        <Title />
        <Form 
          getData={this.getData}
        />
        {this.state.busnisses.slice(0, 10).map((business, i) => {
          return (
            <DisplayData 
              key={i}
              image={business.image_url}
              name={business.name}
              open={business.is_closed}
              reviews={business.review_count}
              ratings={business.rating}
              location={business.location.address1}
              phone={business.phone}
              link={business.url}
            />
          )
        })}
      </div>
    );
  }
}

export default App;
