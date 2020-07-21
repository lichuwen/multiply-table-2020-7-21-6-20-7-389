function createMultiplyTable(start, end) {
  if(isNumValid(start, end)){
    return getMultipulTable(start,end);
  }
  return null;
}
function isNumValid(start,end){
  if(start >= 1 && start <= 1000){
    return true;
  }
  if(end >= 1 && end <= 1000){
    return true;
  }
  if(start <= end){
    return true;
  }
  return false;
}

function getMultipulTable(start,end){
  var mulTable = "";
  for(var i=start; i<=end; i++){
    for(var j=start; j<=i; j++){
      mulTable += getExpression(j,i) + '\t';
    }
    mulTable = mulTable.substring(0,mulTable.length-1);
    if(i != end)
      mulTable += '\n';
  }
  return mulTable;
}

function getExpression(Multiplicand,multiplier){
  var oneLine = "";
  oneLine += Multiplicand + '*' + multiplier + '=' + Multiplicand * multiplier;
  return oneLine;
}

module.exports = {
  createMultiplyTable,
};
