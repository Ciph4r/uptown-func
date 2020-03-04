/******************
 * YOUR CODE HERE *
 ******************/
const call = (func) =>{
  func()
}

const callTwice = (func) => {
  func()
  func()
}

const callXTimes = (func , times) => {
  for (let i = 0 ; i < times ; i++){
    func()
  } 
}

const returnFromFunc = (func) => {
  return func()
}

const modifyString = (str , func) => {
    return func(str) 
}


const modifyNumber = (num,func) => {
return func(num)
}

const modifyAnything = (value , func) => {
  return func(value)
}


const twoFuncs = (func,func2) => {
  return func2(func())
}

const threeFuncs = (func,func2,func3) => {
  return func3(func2(func()))
}

const twoValues = (val,val2,func) => {
  return func(val,val2) 
}

const twoValuesRTL =(val,val2,func) => {
return func(val2,val)

}

/********************************
 * OUR CODE HERE - DON'T TOUCH! *
 ********************************/

if (typeof call === 'undefined') {
  call = undefined;
}

if (typeof callTwice === 'undefined') {
  callTwice = undefined;
}

if (typeof callXTimes === 'undefined') {
  callXTimes = undefined;
}

if (typeof returnFromFunc === 'undefined') {
  returnFromFunc = undefined;
}

if (typeof modifyString === 'undefined') {
  modifyString = undefined;
}

if (typeof modifyNumber === 'undefined') {
  modifyNumber = undefined;
}

if (typeof modifyAnything === 'undefined') {
  modifyAnything = undefined;
}

if (typeof twoFuncs === 'undefined') {
  twoFuncs = undefined;
}

if (typeof threeFuncs === 'undefined') {
  threeFuncs = undefined;
}

if (typeof twoValues === 'undefined') {
  twoValues = undefined;
}

if (typeof twoValuesRTL === 'undefined') {
  twoValuesRTL = undefined;
}


module.exports = {
  call,
  callTwice,
  callXTimes,
  returnFromFunc,
  modifyString,
  modifyNumber,
  modifyAnything,
  threeFuncs,
  twoFuncs,
  twoValues,
  twoValuesRTL,
}
