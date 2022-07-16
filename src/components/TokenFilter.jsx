import React from 'react';
import MyInput from './UI/input/MyInput';
import MyLimit from './UI/Limit/MyLimit';
import MySelect from './UI/select/MySelect';

const TokenFilter = ({ filter, setFilter, limit, setLimit } ) => {
    
    return (
        <div className='filter_conteiner'>
            <MyInput
                value={filter.query}
                onChange={e => setFilter({ ...filter, query: e.target.value})}
                placeholder='Поиск по имени...'
           />

            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort}) }
                defaultValue="Сортировка"
                options={[
                    { value: 'id_UP', name: 'По ID UP' },
                    { value: 'id_DO', name: 'По ID DOWN' },

                ]}
            />  

            <MyLimit
                limit={limit} 
                setLimit={setLimit}
            />
        </div>
    );
};

export default TokenFilter;