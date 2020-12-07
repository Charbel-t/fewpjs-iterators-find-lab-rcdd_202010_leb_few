const testVar = {}

function testFunc() {
  return "hi"
}

function superBowlWin(record){
  let r = record.find(re => re.result)
  return !!r ? r.year : undefined;
}