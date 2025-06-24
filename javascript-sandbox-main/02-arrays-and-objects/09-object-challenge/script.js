const library = [
  {
    title:"the road ahead",
    author:"bill Gates",
    status:{
            own:true,
            reading:false,
            read:false          }
  }
,
  {
    title:"the road ahead2",
    author:"mark Zuckerberg",
    status:{
            own:true,
            reading:false,
             read:false  
          }
  },
  {
    title:"instagram for dummies",
    author:"ambani",
    status:{
            own:true,
            reading:false,
             read:false  
          }
  }

  ]


  //step 2

  library[0].status.read=true;
  library[1].status.read=true;
  library[2].status.read=true;

//step 3
  const { title:firstBook } = library[0]


  console.log(firstBook);

//step 4

const {author:secondBook} =library[1]

console.log(secondBook);


const { status:{own:thirdBook} } = library[2]


console.log(thirdBook);

//step 4

const str= JSON.stringify(library);


console.log(str);