import { useEffect, useState, createContext } from "react";
import apiHeader from "../assets/apiHeader";
import PropTypes from "prop-types";


export const LinkContext = createContext(null);

const LinkContextProvider = (props) => {
    
    const [apiData, setApiData] = useState([])

    
    const options = {
    method: 'GET',
    headers: apiHeader,
    };

    useEffect(() => {

        fetch('https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc', options)
        .then(response => response.json())
        .then(response => {
            console.log(response).results;
            setApiData(response.results)
        })
        .catch(err => console.error(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return(
        <LinkContext.Provider value={apiData}>
            {props.children}
        </LinkContext.Provider>
    )
}

export default LinkContextProvider;

LinkContextProvider.propTypes = {
    children: PropTypes.element
}