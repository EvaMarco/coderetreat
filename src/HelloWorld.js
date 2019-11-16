export default (board) => {
if(board[1][1]){
  return(false)
}
else{
  for(let i of board){
    for (let j of i){
      if(j === 0){
        return false
      }
    }
  }
  return board
}
};