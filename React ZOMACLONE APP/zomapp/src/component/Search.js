import React, { Component } from 'react';
import "./Search.css"

const locurl = "http://localhost:4000/location";
const resturl = "http://localhost:4000/restauranthome?city=";

class Search extends Component {
    constructor() {
        super()
        this.state = {
            location: '',
            city: '',
            restaurants: ''
        }
    }

    handleCity = (event) => {
        this.setState({ restaurants: '' })
        this.setState({ city: event.target.value })
        var cityid = parseInt(event.target.value)
        sessionStorage.setItem('citiId', event.target.value)
        fetch(`${resturl}${cityid}`, { method: 'GET' })
            .then((res) => res.json())
            .then((data) => {
                this.setState({ restaurants: data })
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
            <header className="bgimg">
                <center><h1 className="zname">Z!</h1>
                    <select onChange={this.handleCity} style={{ width: "150px" }}>
                        {this.renderCity(this.state.location)}
                    </select>
                    <input list="restaurant" name="rests" id="rests" style={{ height: "38px" }, { width: "250px" }} />
                    <button type="button" className="btn btn-light">Search</button>
                    <datalist id="restaurant">
                        {this.renderRest(this.state.restaurants)}
                    </datalist>
                </center>

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