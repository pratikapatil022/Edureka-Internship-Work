import React, { Component } from 'react';

class Search extends Component {
    constructor() {
        super()
        console.log("-------- Inside constructor")
        this.state = {
            title: 'Pratik Doing Internship',
            keyword: 'User Text Here',
            location: '',
            city: ''
        }
    }


    handleChange = (event) => {
        this.setState({ keyword: event.target.value ? event.target.value : 'User Text Here' })
    }

    handleCity = (event) => {
        this.setState({ city: event.target.value })
    }

    render() {
        console.log("Inside Render")
        return (
            <header>
                <center>
                    <h1>{this.state.title}</h1>
                    <input type="text" onChange={this.handleChange} />
                    <p>{this.state.keyword}</p>

                    <select onChange={this.handleCity}>
                        <option value="delhi">Andheri</option>
                        <option value="mumbai">Ghatkopar</option>
                        <option value="chandigarh">Panvel</option>
                    </select>
                    <p>Selected City is {this.state.city}</p>
                </center>
                <hr />
            </header>
        )
    }

    componentDidMount() {
        console.log("Inside Component Did Mount")
    }

}

export default Search;