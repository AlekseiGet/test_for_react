
import React, { useEffect, useMemo, useRef, useState } from 'react';
import Evmos from './componentHtml/Evmos';
import Rocket from './componentHtml/Rocket';
import Logo from "../imj/logo.png";
import SocialLinc from './componentHtml/SocialLinc';
import Asteroids from './componentHtml/Asteroids';
import TokenList from '../components/TokenList';
import TokenFilter from '../components/TokenFilter';
import TokenService from '../API/TokenService';
import Loader from '../components/UI/Loader/Loader'; 
import { useFetching } from '../components/Hooks/useFetching';
import { getPageCount } from '../Utils/pages';
import Pagination from '../components/Pagination';



const BackBase = () => {
    const [tokens, setTokens] = useState([]);
    const [filter, setFilter] = useState({ sort: '', query: '' });
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(5);
    const [page, setPage] = useState(1);
    const lastElement = useRef();
    const observer = useRef();

    const [fetchingToken, isTokenLoading, tokenError] = useFetching(async () => {
        const response = await TokenService.getAll(limit, page);//запрос на сервер    
        setTokens(response.data)   //Косяк туту был "setTokens([...tokens,...response.data]) "
        const totalCount = response.data.length;
        setTotalPages(getPageCount(totalCount, limit));
    })

    useEffect(() => {
        if (isTokenLoading) {
            return
        };
        if (observer.current) {
            observer.current.disconnect()//удаляю старый обсервер
        };
        var callback = function (entries, observer) {
            if (entries[0].isIntersecting && page < totalPages) {
                setLimit(limit + 5)//добавляю ещё при
            }
        };
        observer.current = new IntersectionObserver(callback);
        observer.current.observe(lastElement.current)//при видимости его
    }, [isTokenLoading])



    const queryToken = useMemo(() => {

        const userSelectedSort = filter.sort.slice(0, -3);
        if (filter.sort) {

            if (filter.sort == 'db_id_UP') {
                return ([...tokens].sort((a, b) => a[userSelectedSort] - b[userSelectedSort]))
            } else if (filter.sort == 'db_id_DO') {
                return ([...tokens].reverse((a, b) => a[userSelectedSort] - b[userSelectedSort]))
            } else if (filter.sort == 'name_UP') {
                return ([...tokens].sort((a, b) => a[userSelectedSort].localeCompare(b[userSelectedSort],)))
            } else {
                return ([...tokens].reverse((a, b) => a[userSelectedSort].localeCompare(b[userSelectedSort],)))
            }

        }
        return tokens
    }, [filter.sort, tokens])


    const sortedAndSearched = useMemo(() => {
        return queryToken.filter(post => post.name.toLowerCase().includes(filter.query))
    }, [filter.query, queryToken])


    //отработает один раз, [filter] при каждом изменении filter
    useEffect(() => { fetchingToken() }, [page, limit])


    const changePage = (page) => {
        setPage(page)

    }

    return (
        <div>
            
            <div className="back_Base">
                <div className="back_conectnt">
                    <div className="app__navbar">
                        <div className="app__navbar__part__logo logo">
                            <img src={Logo} alt="upss"/>
                        </div>
                        <div className='app__navbar_search'>
                            <TokenFilter filter={filter} setFilter={setFilter} limit={limit} setLimit={setLimit} />
                        </div>
                      
                    </div>
                    <div className="app__slider">
                        <div className="app__slider__content">
                            <div className="app__slider__rocket">
                                <Rocket/>
                            </div>
                            <div className='app__slider__token__conteiner'>
                                <Pagination totalPages={totalPages} page={page} changePage={changePage} limit={limit} />
                                {/*Обработка ошибки*/}
                                {tokenError &&
                                    <h1>Произошла ошибка ${tokenError} </h1>
                                }
                                <TokenList tokens={sortedAndSearched} title="" limit={limit} page={page} />
                                <div ref={lastElement} style={{ height: 20 }}></div>
                                {isTokenLoading && <div className='loader_conteiner'><Loader /></div>}
                            </div>
                           
                        </div>
                    </div>
                    <div className="app__desctiption">
                       <Asteroids/>
                       <SocialLinc/>
                        <div className="app__desctiption__backed">Backed By</div>
                        <div className="app__desctiption__evmos">
                           <Evmos/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BackBase;