import React, { Component } from 'react'

export default class RickMortyItems extends Component {

    render() {

        let { imageURL,originName, name, species, type, gender, location, locationName, created, originUrl} = this.props;

        return (
            <>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={imageURL} className="card-img-top" alt="Rick and Morty" />
                    <div className="card-body">
                        <h5 className="list-group-item">{name}</h5>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">{species}</li>
                        <li className="list-group-item">{type}</li>
                        <li className="list-group-item">{gender}</li>
                    </ul>
                    <div className="card-body">
                        <small className="text-body-secondary">Origin:</small> <a href={originUrl} className="card-link link-danger text-decoration-none">{originName}</a><br/>

                        <small className="text-body-secondary">Last Seen:</small> <a href={location} className="card-link link-danger text-decoration-none">{locationName}</a><br/>

                        <small className="text-body-secondary">Created: </small><small className='text-body-dark'>{created}</small>
                    </div>

                </div>

            </>
        )
    }
}
