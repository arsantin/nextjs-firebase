import React, { Component } from 'react';
import Foodtrucks from './components/Foodtrucks'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import Header from './components/header/Header'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import AbertosHoje from './components/AbertosHoje'

import styled from "styled-components"
import './App.css'

const Wrapper = styled.div`
  font-family: 'boldcn';
  padding-top: 240px;
  .main-wrapper{
    max-width: 980px;
    margin: auto;
  }
  .wow.fadeInDownBig{
    padding: 15px;
    background-color: orange;
    float: right;
    width: 114px;
    text-align: right;    
  }        
` 


//apollo client setup

const client = new ApolloClient({
	uri: 'http://localhost:4000/graphql'
})

const Inicial = () => <h1>inicial</h1>
const Food = () => <h1>food</h1>
const Agenda = () => <h1>agenda</h1>
const Contato = () => <h1>contato</h1>

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <ApolloProvider client={client} className="provider">          
        <Route exact path="/" component={AbertosHoje} />   
        <Route path="/agenda" component={Agenda} />        
        <Route path="/food-trucks" component={Food} />
        <Route exact path="/contato" component={Contato} />   
        <Wrapper>
          <div className="App">           
            <Header />
            <div className="main-wrapper">             
              <div className="wow fadeInDownBig" data-wow-delay='0.5s'>AGENDA COMPLETA</div>              
            </div>            
              <Foodtrucks />
          </div>
        </Wrapper>       
      </ApolloProvider>          
      </BrowserRouter>
    );
  }
}

export default App;
