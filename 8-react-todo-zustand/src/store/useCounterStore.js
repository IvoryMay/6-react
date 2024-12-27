import { create } from "zustand";




// const useCounterStore =  create(function (set){
//   return {
//     count: 0,
//     resetCount: function(){
//       return set({count:0})
//     },
//     increaseCount: function(amount){
//       return set(function(state){
//         return{count: state.count + amount}
//       })
//     },

//     decreaseCount: function(amount){
//       return set(function(state){
//         return {count: state.count - amount}
//       })
//     }
//   }
// });

const useCounterStore = create((set) => ({
  count: 0,
  resetCount: () => {
    set({count:0})
  },
  increaseCount: (amount) => {
    set((state) => 
     ({count: state.count + amount}) 
    )
  }, 

  decreaseCount: (amount) => {
    set((state) => ({
      count: state.count - amount
    }))
  }
}));

export default useCounterStore;