export function getPageCount(totalCount, limit) {
  //  console.log(limit);//НЕ обновляется LIMIT
    
    return Math.ceil(totalCount / limit)
}

export const getPagesArray = (totalPages) => {
   
   let result = [];
    for (let i = 0; i < totalPages; i++) {
        result.push(i + 1)    
    }
    return result;
}