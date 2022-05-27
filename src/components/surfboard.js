import React, { Component } from 'react'

export default class Items extends Component {
    constructor(props) {
        super(props)

        this.state = {
            items: [],
            loading: true,
            error: false
        }
    }

   

    componentDidMount() {
        fetch("https://warrens-surf-shop-back.herokuapp.com/surfboard/get")
        .then(response => response.json())
        .then(data => {
            this.setState({
                items: data,
                loading: false
            })
        })
        .catch(error => {
            console.log("Error getting items ", error)
            this.setState({
                error: true,
                loading: false
            })
        })
    }

    renderItems() {
        const surfboards = this.state.items.map(item => (
            <div className="item-wrapper" key={item.id}>
                <h3>{item.name}</h3>
                <p>{item.type}</p>
                <img src={item.item_img} />
            </div>
        ))

        return surfboards
    }

    render() {
        if (this.state.loading) {
            return (
                <div className='items-page-wrapper'>
                    <h2>Surfboards I have made in the past</h2>
                    <div className='items-wrapper'>
                        <div className="loading">Loading...</div>
                    </div>
                </div>
            )
        }

        else if (this.state.error) {
            return (
                <div className='items-page-wrapper'>
                    <h2>Oh No! Something went wrong. Please check back soon</h2>
                    <div className='items-wrapper'>
                        <div className="error">An error occured... Please try again later.</div>
                    </div>
                </div>
            )
        }

        else {
            return (
                <div className='items-page-wrapper'>
                    <h2 style={{textAlign: "center"}}>Here is a list of surfboards I have made in the past for clients. These are just examples of the work I am capable of creating for you. I am adding to this list with every board I build. If you would like a style that resembles any of these boards, please add the name of the board in the message section of the contact page. </h2>
                        <div className="items-wrapper">
                            {this.renderItems()}
                        </div>
                </div>
            )
        }
    }
}
