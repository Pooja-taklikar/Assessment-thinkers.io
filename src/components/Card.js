import React, { useEffect, useState } from 'react'
import CardItem from './CardItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const Card = (props) => {

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)

    function getRandomString(length) {
        var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var result = '';
        for (var i = 0; i < length; i++) {
            result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
        }
        return result;
    }
    
    const updateNews = async () => {
        props.setProgress(10);
        let url=`https://api.pokemontcg.io/v2/cards?page=${page}&pageSize=${props.pageSize}`;

        setLoading(true);
        let data = await fetch(url);
        props.setProgress(30);
        let parsedDAta = await data.json();
        props.setProgress(70);
        console.log(parsedDAta);

        setArticles(parsedDAta.data)
        setTotalResults(articles.length)
        setLoading(false)

        props.setProgress(100);
    }

    useEffect(() => {
        document.title = `Pokemon`;
        updateNews();
        // eslint-disable-next-line
    }, [])

    const fetchMoreData = async () => {
        let url=`https://api.pokemontcg.io/v2/cards?page=${page}&pageSize=${props.pageSize}`;

        setPage(page + 1)

        let data = await fetch(url);
        let parsedDAta = await data.json();
        console.log(parsedDAta);
        setArticles(articles.concat(parsedDAta.data))
        setTotalResults(articles.length)
    };

    return (
        <>
            {/* This is a Card Component. */}
            <h1 className="text-center" style={{ margin: '35px 0px', marginTop: '30px' }}>Pokemon</h1>
            {loading && <Spinner />}

            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
            >
                <div className="container">
                </div>

                <div className="row">
                    {articles.map((element) => {
                        return <div className="col-md-4" key={getRandomString(5)}>
                            <CardItem  title={element.name} HP={element.hp} description={element.level} imageUrl={element.images.large}  Attacks = {element.attacks} Abilities = {element.abilities}/>
                            {/* <CardItem Attacks = {element.attacks.map(a => a.name)} /> */}
                        </div>
                    })}
                </div>
                {/* Attacks={element.attacks}  */}
            </InfiniteScroll>
        </>
    )
}
Card.defaultProps = {
    pageSize: 1
}
Card.propTypes = {
    pageSize: PropTypes.number
}

export default Card;