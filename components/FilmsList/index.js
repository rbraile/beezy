import React, { Component } from 'react'
import { getFilmList } from './../../actions'
import { connect } from 'react-redux'

class FilmList extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.getFilmList()
  }
  render() {
    return (
      <div>
        <p>caracteres</p>
        {this.props.films &&
          this.props.films.results &&
          this.props.films.results.map(film => <p>nombre:{film.title}</p>)}
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { films, paginate } = state
  return { films, paginate }
}

const mapDispatchToProps = {
  getFilmList,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilmList)
