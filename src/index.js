import react, {component} from 'react';
import {light} from '../../Theme/themes'
import  MovieCard from '../../components/MovieCard/MovieCard';
import  Search from '../../components/search/search';
import {useEffect, useState} from 'react';
class MovieSearch extends Component {
    state={
        movieId:'', //default.
             title:'',
movie:{},searchResults:[], isSearching: false,
    }
ComponetDidmount(){
    this.loadmovie()
}

ComponetDidmount(prevProps, prevState){
    if (prevState.movieId !==this.state.movieId){
        this.loadmovie()
    }

}


loadmovie(){

    axios.get('https://www.themoviedb.org/documentation/api=${this.state.movieId}').then(response=> this.Setstate({movie:response.data}) )}
    
    Catch(error={
        Console.log(error.message);
    })

    //timeout is used to prevent the api request to fire immediately as we type.


timeout= 'null';
SearchMovie=(event)=>{this.Setstate({title:event.target.value, isSearching:true})}
clearTimeout(this.timeout);

this.timeout=setTimeout(()=> {axios.get('https://www.themoviedb.org/documentation/api=${this.state.movieI,${this.state.title.}')}).then(response=>{
    if(response.data.Search){
        const movies= response.data.Search.slice(0,5);
        this.Setstate({searchResults:movies});
    }
})
.catch
(error=>{
    console.log('Opps', error.message);
}), 500);

// event handler for a search result item thats clicked
itemClicked=(item)=>{
    this.Setstate({movieId:item.imdbID,isSearching:false,title:Title,})
}
 render(){

    return( <div onClick={()this.Setstate({isSearching:false})}>
    <search 
    defaultTtile={this.state.title}
    search={this.SearchMovie}
    results={this.state.searchResults}
    clicked={this.itemClicked}
    searching={this.state.isSearching}
    <MovieCard Movie ={this.state.movie}/>
    </div>
    );
 }
 const ThemeStateContext = react.createContext()
 const ThemeUpdaterContext = react.createContext()

 export const ThemeProvider = ({chlidren})=>{
     const [theme,setTheme]=react.useState(light)

     return(
         <ThemeStateContext.Provider value ={theme}>
         <ThemeUpdaterContext.Provider VALUE={setTheme}>
         {children}
         </ThemeUpdaterContext.Provider>
         
         </ThemeStateContext.Provider>
     )
 }
 
}
export default MovieSearch;