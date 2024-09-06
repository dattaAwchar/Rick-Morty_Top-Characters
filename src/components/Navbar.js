import React, { Component } from 'react';

export default class Navbar extends Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg bg-primary fixed-top" data-bs-theme='dark'>
                    <div className="container-fluid d-flex justify-content-center py-1">
                        <h2 className='text-center text-white m-0'>Rick And Morty - Top Characters</h2>
                    </div>
                </nav>
            </>
        )
    }
}
