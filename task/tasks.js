// 1 task
const string ="ПривЕт, кАк дела?";

const vowels = ["а", "е", "о", "ё", "я", "э", "и", "ы", "ю", "у"];

const getVowels = stringToFilter => {

    let extractedVowels ="";

    for (let i = 0; i < stringToFilter.length; i++ ) {

        const currentLetter = stringToFilter[i].toLowerCase();


        if (vowels.includes(currentLetter)) { 
            extractedVowels += currentLetter;
        }
        console.log()
    }

    return extractedVowels;
}


console.log(getVowels(string));


// 2 task

     
const workers = [
    {"name":"John","salary":500},
    {"name":"Mike","salary":1300},
    {"name":"Linda","salary":1500}];

const getWorthyWorkers  = workersArr => {

    const worthyWorkers = [];

    workersArr.forEach (currentWorker => {
        if(currentWorker.salary > 1000) {
            worthyWorkers.push(currentWorker.name)
        }
    })
   /*   
    for(let i=0; i < workersArr.length; i++) {

        const currentWorker = workersArr[i];

        if(currentWorker.salary > 1000){
            worthyWorkers.push(currentWorker.name);
        }
    }
 */
    return worthyWorkers;
}

console.log(getWorthyWorkers(workers));

//3 task

const path = "/users/download/index.html";

const isHtml = path => {
    const requiredExt = ".html";
    const pathExt = path.slice(-5);
    
    if(pathExt == requiredExt) {
        return true;
    } else {
        return false;
    }
}

console.log(isHtml(path));


// фильтрация массива
const mixedArray = [3, 13, 74, 14, 66, 15, 22, 4];

const isEven = num => {
  return num % 2 === 0;
}

const filterArray = ( arrayToFilter, filterFn ) => {
  const filteredArray = [];

  arrayToFilter.forEach(num => {
    if (filterFn(num)) {
      filteredArray.push(num);
    }
  })

  return filteredArray;
}

console.log(filterArray(mixedArray, isEven));

