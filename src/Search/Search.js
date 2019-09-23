

import React from 'react';
import'./Search.css';
import 'MovieAdd';
import './MovieAdd'




const search=(props)=>{
	let resultList=null;
	
	if(props.searching && (props.defaultTitle !=='')){
		
		resultList=( 
	<table className="table table-bordered">
	<thead>

		<tr>
			<th><input type="search" name="Movie-search "value={props.defaultTitle}onChange={props.searching}/></th>
			<th>{resultList}</th>
			
		</tr>
		{resultList}
	</thead>
	
	
	retun(
		
	)
<tBody>

	{ props.movieItem.length>0 ?(
		props.movieItem.map((movieItem)=>(
			<tr key={movieItem.id}>
			   <td>{movieItem.Rated}</td>
			   <td>{}</td>
			<td><button className="btn btn-primary ml-2" onClick={()=>props.MovieAdd(movieItem)}>Add {movieItem.status ? 'bought':' Movie added'}</button></td>
			
			
			
			</tr>
		))
	)

	}
</tBody>
	
	</table>
	



	);
	
}; 

export default Search;