const stocks = {
  Fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

/* --------------------------------------------------------------------- */
/*                    Create ice cream using Callbacks                   */
/* --------------------------------------------------------------------- */

// const order = (fruitName, callProduction) => {
//   setTimeout(() => {
//     console.log(`${stocks.Fruits[fruitName]} ice cream was selected`);
//     callProduction();
//   }, 2000);
// };

// const production = () => {
//   setTimeout(() => {
//     console.log("   Production started...");
//     setTimeout(() => {
//       console.log("   The fruit has been chopped");
//       setTimeout(() => {
//         console.log(`   Added ${stocks.liquid[0]} and ${stocks.liquid[1]}`);
//         setTimeout(() => {
//           console.log("   Started the machine");
//           setTimeout(() => {
//             console.log(`   Ice cream dispensed on a ${stocks.holder[0]}`);
//             setTimeout(() => {
//               console.log(`   Selected topping: ${stocks.toppings[0]}`);
//               setTimeout(() => {
//                 console.log("Ice cream served");
//               }, 2000);
//             }, 3000);
//           }, 2000);
//         }, 1000);
//       }, 1000);
//     }, 2000);
//   }, 0000);
// };

// order(0, production);

/* --------------------------------------------------------------------- */
/*                    Create ice cream using Promises                    */
/* --------------------------------------------------------------------- */

// const isShopOpen = true;

// const order = (time, work) => {
//   return new Promise((resolve, reject) => {
//     if (isShopOpen) {
//       setTimeout(() => {
//         resolve(work());
//       }, time);
//     } else {
//       reject(console.log("The ice cream shop is closed."));
//     }
//   });
// };

// order(2000, () => {
//   console.log(`${stocks.Fruits[0]} ice cream was selected`);
// })
//   .then(() => {
//     return order(0000, () => {
//       console.log("   Production started...");
//     });
//   })
//   .then(() => {
//     return order(2000, () => {
//       console.log("   The fruit has been chopped");
//     });
//   })
//   .then(() => {
//     return order(1000, () => {
//       console.log(`   Added ${stocks.liquid[0]} and ${stocks.liquid[1]}`);
//     });
//   })
//   .then(() => {
//     return order(1000, () => {
//       console.log("   Started the machine");
//     });
//   })
//   .then(() => {
//     return order(2000, () => {
//       console.log(`   Ice cream dispensed on a ${stocks.holder[0]}`);
//     });
//   })
//   .then(() => {
//     return order(3000, () => {
//       console.log(`   Selected topping: ${stocks.toppings[0]}`);
//     });
//   })
//   .then(() => {
//     return order(2000, () => {
//       console.log("-> Ice cream served");
//     });
//   })
//   .catch(() => {
//     console.log("-> Customer left.");
//   });

/* --------------------------------------------------------------------- */
/*                   Create ice cream using Async Await                  */
/* --------------------------------------------------------------------- */
const isShopOpen = true;

function time(ms) {
  return new Promise((resolve, reject) => {
    if (isShopOpen) {
      setTimeout(resolve, ms);
    } else {
      reject(console.log("Ice cream shop is closed."));
    }
  });
}

async function kitchen() {
  try {
    await time(2000);
    console.log(`${stocks.Fruits[0]} ice cream was selected`);

    await time(0000);
    console.log("   Production started...");

    await time(2000);
    console.log("   The fruit has been chopped");

    await time(1000);
    console.log(`   Added ${stocks.liquid[0]} and ${stocks.liquid[1]}`);

    await time(1000);
    console.log("   Started the machine");

    await time(2000);
    console.log(`   Ice cream dispensed on a ${stocks.holder[0]}`);

    await time(3000);
    console.log(`   Selected topping: ${stocks.toppings[0]}`);

    await time(2000);
    console.log("-> Ice cream served");
  } catch (error) {
    console.log("Customer left.", error);
  }
}

kitchen();
