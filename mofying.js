
// const mondayMenu = {


//     cheesePlate :{


//         soft:"chevre",
//         semisoft :"Gruyere",
//         hard : "Manchego",
//     },

//     fries : "Curly",
//     salad : "Cobb",

// };

// console.log(mondayMenu);




// function destructivelyUpdateObject(obj,key, value){


//  obj[key] = value;  //why are we using bracket notation here

//  return obj



// }



const mondayMenu = {
    cheesePlate: {
      soft: "Chèvre",
      semiSoft: "Gruyère",
      hard: "Manchego",
    },
    fries: "Sweet potato",
    salad: "Cobb",
  };
  
  const tuesdayMenu = destructivelyUpdateObject(mondayMenu, "salad", "Caesar");
  
  tuesdayMenu;
  //=> { cheesePlate: { soft: "Chèvre", semiSoft: "Gruyère", hard: "Manchego" }, fries: "Sweet potato", salad: "Caesar" }
  
  tuesdayMenu.salad;
  //=> "Caesar"





