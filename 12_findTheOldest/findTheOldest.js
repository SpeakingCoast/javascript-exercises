const findTheOldest = function(array) {
    const year = new Date().getFullYear();
    return array.reduce((acc, curr) => {

        if(!acc.yearOfDeath && !curr.yearOfDeath){if ((year-acc.yearOfBirth) < (year-curr.yearOfBirth)){
            return curr
        }}
        else if(acc.yearOfDeath && !curr.yearOfDeath) {
            if ((acc.yearOfDeath-acc.yearOfBirth) < (year-curr.yearOfBirth)){
                return curr
            }
        }
        else if(!acc.yearOfDeath && curr.yearOfDeath){
            if ((year-acc.yearOfBirth) < (curr.yearOfDeath-curr.yearOfBirth)){
                return curr
            }
        
        return acc;
    }
    
    else if ((acc.yearOfDeath-acc.yearOfBirth) < (curr.yearOfDeath-curr.yearOfBirth)){
            return curr
        }
        return acc;
    }
    )};
// Do not edit below this line

module.exports = findTheOldest;
