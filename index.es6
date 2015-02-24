import {curry2} from 'fj-curry';

let map = (fn, list) =>{
    let index = -1, 
    listLen = list.length, 
    result = new Array(listLen);
    
    while (++index < listLen) {
      result[index] = fn(list[index]);
    }
    
    return result;
}

export default curry2(map);
