import React, { Component } from 'react';

const locurl = "http://localhost:4000/location";
const resturl = "http://localhost:4000/restauranthome?city=";

class Search extends Component {
    constructor() {
        super()
        this.state = {
            location: '',
            city: '',
            restaurents: ''
        }
    }

    handleCity = (event) => {
        this.setState({ restaurents: '' })
        this.setState({ city: event.target.value })
        var cityid = parseInt(event.target.value)
        sessionStorage.setItem('citiId', event.target.value)
        fetch(`${resturl}${cityid}`, { method: 'GET' })
            .then((res) => res.json())
            .then((data) => {
                this.setState({ restaurents: data })
            })
    }

    renderCity = (data) => {
        if (data) {
            return data.map((item) => {
                return (
                    <option value={item.city}>
                        {item.name}
                    </option>
                )
            })
        }
    }

    renderRest = (data) => {
        if (data) {
            return data.map((item) => {
                return (
                    <option>
                        {item.name} | {item.locality}
                    </option>
                )
            })
        }
    }

    render() {
        return (
            <header>
                <center>
                    <select onChange={this.handleCity}>
                        {this.renderCity(this.state.location)}
                    </select>
                    <input list="restaurent" name="rests" id="rests" />
                    <datalist id="restaurent">
                        {this.renderRest(this.state.restaurents)}
                    </datalist>
                </center>
                <hr />
            </header>
        )
    }

    componentDidMount() {
        fetch(locurl, { method: 'GET' })
            .then((res) => res.json())
            .then((data) => {

                this.setState({ location: data })
            })
    }

}

export default Search;