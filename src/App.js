import React , { Component } from "react";
import Label from "./Label.js";

export default class App extends Component{

  render(){
    return (
        <>
        <h1>Hello woerld!</h1>
        <h2>Olá mundo!</h2>
        <Label nome="Andressa"/>
        <Label nome="Souza"/>
        <Label idade="19"/>

        </>

      );

  }

}
