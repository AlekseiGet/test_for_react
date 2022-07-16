export function getPageCount(totalCount, limit) {
 
    
    return Math.ceil(totalCount / limit)
}

// передаю для создания 
export const getPagesArray = (totalPages) => {
   
   let result = [];
    for (let i = 0; i < totalPages; i++) {
        result.push(i + 1)    
    }
   
    return result;
}