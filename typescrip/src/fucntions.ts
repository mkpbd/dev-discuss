function sign(song: string){
     console.log("signing song: " + song);
}


sign("song1.mp3");


/// require parameter type

function sign2(song: string, year: number){
     console.log("signing song: " + song + " in year: " + year);
}


//  optional parameter type


function sign3(song: string, year?: number){
     console.log("signing song: " + song + " in year: " + year);

}


// default parameter type

function sign4(song: string, year: number = 2023){
     console.log("signing song: " + song + " in year: " + year);

}


// rest parameter type


function sign5(song: string, ...years: number[]){
     console.log("signing song: " + song + " in year: " + years);

}

sign5("song1.mp3", 2020, 2021, 2022, 2023);



// return types 

 function  singSongs(songs: string[]): string[]{
    return songs.map((song) => {
        return song + " is signed";
    })
 }  


// Type: (songs: string[], index: number) => string | undefined
function getSongAt(songs: string[], index: number) {
    return index < songs.length ? songs[index] : undefined;
  }


  // explacity types 

  function singSongsRecursive(songs: string[], count = 0): number {
    return songs.length ? singSongsRecursive(songs.slice(1), count + 1) : count;
  }

  
  // Function Types 

  const songs = ["Juice", "Shake It Off", "What's Up"];

  function runOnSongs(getSongAt: (index: number) => string) {
  
    for (let i = 0; i < songs.length; i += 1) {
  
      console.log(getSongAt(i));
  
    }
  
  }
  
  function getSongAt1(index: number) {
  
    return `${songs[index]}`;
  
  }
  
  runOnSongs(getSongAt1); // Ok
  
  function logSong(song: string) {
  
    return `${song}`;
  
  }



  //Parameter Type Inferences 


let singer: (song: string) => string;
singer = function (song) {
// Type of song: string
return `Singing: ${song.toUpperCase()}!`; // Ok
};



type StringToNumber = (input: string) => number;
let stringToNumber: StringToNumber;
stringToNumber = (input) => input.length; // Ok


type NumberToString = (input: number) => string;
function usesNumberToString(numberToString: NumberToString) {
console.log(`The string is: ${numberToString(1234)}`);
}
usesNumberToString((input) => `${input}! Hooray!`); // Ok
// usesNumberToString((input) => input * 2);

// Function Overloads

function createDate(timestamp: number): Date;
function createDate(month: number, day: number, year: number): Date;

function createDate(monthOrTimestamp: number, day?: number,year?: number) {
            return day === undefined || year === undefined
            ? new Date(monthOrTimestamp)
            : new Date(year, monthOrTimestamp, day);
}
createDate(554356800); // Ok
createDate(7, 27, 1987); // Ok
// createDate(4, 1);