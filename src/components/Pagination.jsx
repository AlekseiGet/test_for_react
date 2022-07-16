import React, { useMemo } from 'react';
import { getPagesArray } from '../Utils/pages';

const Pagination = ({ totalPages, page, changePage, limit }) => {
    let pagesArray = getPagesArray(totalPages)


    return (
        <div className='pages_button_conteiner'>
            <div className='pages_button_content'>
            {pagesArray.map(p =>
                <span
                    key={p}
                    className={page == p ? 'page page_current' : 'page'}
                    onClick={() => changePage(p)}
                >{p} </span>

            )}
            </div>
        </div>
    );
};

export default Pagination;