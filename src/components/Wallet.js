import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deposit, withdraw } from '../store/actions';


export class Wallet extends Component {
    constructor(){
        super();
        this.state = { balance: undefined };

    }

    updateBalance = (event) => this.setState({balance: parseInt(event.target.value,10)})
    deposits = () => this.props.deposit( this.state.balance );
    withdrawl = () => this.props.withdraw( this.state.balance );

    render() {
        return (
            <div>
                <h2 className='balance'>Wallet balance: { this.props.balance }</h2>
                <br/>
                <input type="number" className='input-wallet' onChange = { this.updateBalance}/>
                <button className='btn-deposit' onClick = { this.deposits }> Deposit </button>
                <button className='btn-withdrawl' onClick = { this.withdrawl }> Withdraw </button>
            </div>            
        );
    };
};


export default connect( state => { return {balance: state.balance} }, { deposit , withdraw } )(Wallet);   // Whole state in redux is just a number for now !! 
