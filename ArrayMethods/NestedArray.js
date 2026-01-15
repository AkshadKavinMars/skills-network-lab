// Nested Array
const NestedArray = [ {
    Name  : "Akshad",
    Class : "M.Tech",
    Hobby : {
            Chess : ["Elephant" , "Rooks" , "King" , "Queen"] , 
            Music: ["Classical", "Pop"]},
    Games : {
        PC : ["Rocket League"],
        Android : ["SuperSus"],
        Outdoor :["Badminton" , "Kho-Kho"]
    }},
    {
    Name  : "XYZ",
    Class : "M.Tech",
    Hobby : ["Painting" , "Driving"],
    Games : {
        PC : ["Valorant" , "Candy Crush"],
        Android : ["SuperSus" , "BGMI"],
        Outdoor :["Badminton" , "Kho-Kho"]
    }}
    ]

// Iterating the Array
NestedArray.forEach(property => console.log(property))

// Iterating only the Name
NestedArray.forEach(Student => console.log(Student.Name))

// Iterating only Hobbies
NestedArray.forEach(Student => console.log(Student.Hobby))

// Iterating only Hobbies (Accessing 1st object - 1st Hobby - 1st Preferences)
console.log(NestedArray[0].Hobby.Chess[0]);

// NESTING ARRAY FILTER FOREACH [CONCEPT OF INCLUDES]
const bgmiPlayers = NestedArray.filter(student =>
  student.Games.Android.includes("BGMI")
).forEach(student => console.log(student.Name));

