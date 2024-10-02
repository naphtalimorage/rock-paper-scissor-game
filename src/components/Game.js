import React from "react";
import { Component } from "react";

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playerScore: 0,
            computerScore: 0,
            playerChoice: null,
            computerChoice: null,
            result: null
        };
    }
}