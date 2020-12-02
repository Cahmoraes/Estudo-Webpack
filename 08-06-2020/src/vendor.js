// function ObservableOf(...data) {
//   this.subscribe = function (...observer) {
//     console.log('aqui')
//     console.log(observer)
//     const [next, error, complete] = observer
//     observerD = { next, error, complete };

//     try {
//       data.forEach((item) => {
//         //simulated an error with the type
//         if (typeof item === 'string') {
//           throw {};
//         }
//         observerD.next(item)
//       });
//       observerD.complete();
//     } catch (e) {
//       observerD.error("is a string");
//     }
//   };

//   return { subscribe: this.subscribe }
// }

// const source$ = new ObservableOf(1, "2", 3)

// source$.subscribe(
//   (message) => console.log("First observer message:" + message),
//   (error) => console.log("First observer error:" + error),
//   () => console.log("complete First")
// )

// source$.subscribe(
//   (message) => console.log("Second observer message:" + message),
//   (error) => console.log("Second observer error:" + error),
//   () => console.log("complete Second")
// )

function teste(...param) {
  const [um, dois, trem] = param
  console.log(um)
}

teste('um', 2, 3)
