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
                    { value: 'db_id_UP', name: 'По ID UP' },
                    { value: 'db_id_DO', name: 'По ID DOWN' },
                    { value: 'name_UP', name: 'По NAME UP' },
                    { value: 'name_DO', name: 'По NAME DOWN' }

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