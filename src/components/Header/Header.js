import React, { useEffect } from 'react';
import styles from './Header.module.css';
import PropTypes from 'prop-types';

const Header = props => {

    useEffect(() => {
        console.log("Header useEffect");

        setTimeout(() => {
            console.log("http request is done");
        }, 1500);
    }, [props.showArticles]);

    let buttonStyles = [styles.toggleButton];

    if(props.showArticles) {
        buttonStyles.push(styles.red);
    } 

    const futureYear = props.year + 10;

    console.log("Header return");
    return (
        <div>
           <h1>Article app</h1>
           <h2>Future year: {futureYear}</h2>
            <button className={buttonStyles.join(' ')} 
                onClick={props.toggleArticles}>Toggle articles
            </button>  
        </div>
    )
}

Header.propTypes = {
    year: PropTypes.number
}

export default React.memo(Header);