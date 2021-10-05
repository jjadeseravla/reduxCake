export const buyCake = (num = 1) => {
  return {
    type: 'BUY_CAKE',
    payload: num //payload sends additional info to reducer 
  }
}