import React from 'react';
import  './MovieCard.css';
import React ,{component} from 'react'

class Table extends Component{


	constructor(props){
		super(props)
		this.state={ Movie:
			[{
				id, name, Description, Rated
			}]
		}
	}
}

render () {
	return( <div>
		<h1>Dyanmic Table</h1>
	</div>)
}

renderTableData (){
	return this.state.Movie.map((movie,index) =>{

		const{id, name, Description, Rated}= movie
		return(
			<tr key='movieID'
		)
	})
}


const MovieCard = (props)=> {
return (
<div className="container">

<div className="movie-Card">
<div className="content-header">
<h3 className="movie-title">{props.Movie.title}</h3>

<script>if(window.MatchMedia('(prefers-color-scheme)').media=='not all'){
	console.log('Browser doesnt support dark mode')
}
</script>
</div>
<div className="movie-info">
<label>Released</label>
<span> {props.movie.Released}</span>

</div>
<div className="info-section">
<label>IMDB Rating</label>
<span> {props.movie.Rating}</span>

</div>

<div className="info-section">
<label>Rated</label>
<span> {props.movie.Rated}</span>

</div>

<div className="info-section">
<label>Runtime</label>
<span> {props.movie.Released}</span>
<div className="plot" style={{fontSize:'12px'}}>
<p>{props.movie.Plot}</p>
<span> {props.movie.Released}</span>

</div>

</div>
</div
</div>
);
 export default Movietable;

}
