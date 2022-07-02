import React, { useMemo } from 'react';
import { getPagesArray } from '../Utils/pages';

const Pagination = ({ totalPages, page, changePage, limit }) => {
    let pagesArray = getPagesArray(totalPages)
    return (
        <div className='pages_button_conteiner'>
            {pagesArray.map(p =>
                <span
                    key={p}
                    className={page == p ? 'page page_current' : 'page'}
                    onClick={() => changePage(p)}
                >{p} </span>

            )}
        </div>
    );
};

export default Pagination;