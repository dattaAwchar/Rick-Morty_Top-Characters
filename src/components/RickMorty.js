import React, { Component } from 'react';
import RickMortyItems from './RickMortyItems';

export default class RickMorty extends Component {
  constructor() {
    super();
    this.state = {
      results: [],
      displayedResults: [],
      loading: false,
      currentPage: 1,
      itemsPerPage: 15,
    };
  }

  async componentDidMount() {
    this.setState({ loading: true });
    try {
      // Fetch all pages
      let allResults = [];
      for (let i = 1; i <= 42; i++) {
        let url = `https://rickandmortyapi.com/api/character/?page=${i}`;
        let response = await fetch(url);
        let data = await response.json();
        allResults = allResults.concat(data.results);
      }
      this.setState({
        results: allResults,
        displayedResults: this.getItemsForPage(1, allResults),
        totalPages: Math.ceil(allResults.length / this.state.itemsPerPage),
        currentPage: 1,
        loading: false
      });
    } catch (error) {
      console.error('Error fetching data:', error);
      this.setState({ loading: false });
    }
  }

  getItemsForPage = (page, results) => {
    const { itemsPerPage } = this.state;
    const indexOfLastItem = page * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    return results.slice(indexOfFirstItem, indexOfLastItem);
  };

  handlePrevClick = () => {
    if (this.state.currentPage > 1) {
      const newPage = this.state.currentPage - 1;
      this.setState({
        displayedResults: this.getItemsForPage(newPage, this.state.results),
        currentPage: newPage
      });
      window.scrollTo(0, 0); // Scroll to the top of the page
    }
  };

  handleNextClick = () => {
    if (this.state.currentPage < this.state.totalPages) {
      const newPage = this.state.currentPage + 1;
      this.setState({
        displayedResults: this.getItemsForPage(newPage, this.state.results),
        currentPage: newPage
      });
      window.scrollTo(0, 0); // Scroll to the top of the page
    }
  };

  render() {
    const { displayedResults, loading, currentPage, totalPages } = this.state;

    return (
      <>
        <div className="container my-5 mt-5 pt-5">
          {loading && <p className="text-center">Loading...</p>}
          <div className='row'>
            {displayedResults.map((element) => (
              <div className="col-md-4 my-2" key={element.id}>
                <RickMortyItems 
                  imageURL={element.image} 
                  name={element.name} 
                  originName={element.origin.name} 
                  originUrl={element.origin.url} 
                  species={element.species} 
                  type={element.type ? element.type : "Unknown Type"} 
                  gender={element.gender} 
                  location={element.location.url} 
                  locationName={element.location.name} 
                  created={element.created.slice(0, 10)} 
                />
              </div>
            ))}
          </div>
          <div className="container d-flex justify-content-evenly mt-4">
            <button 
              disabled={currentPage <= 1} 
              type="button" 
              onClick={this.handlePrevClick} 
              className="btn btn-primary">
              Previous
            </button>
            <span className="align-self-center">Page {currentPage} of {totalPages}</span>
            <button 
              disabled={currentPage >= totalPages} 
              type="button" 
              onClick={this.handleNextClick} 
              className="btn btn-primary">
              Next
            </button>
          </div>
        </div>
      </>
    );
  }
}
