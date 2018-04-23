// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(obj,key,value) {
  return Object.assign({},obj,{[key]:value});
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign(driver,{[key]:value});
}

function deleteFromDriverByKey(driver, key) {
  return Object.assign({},driver[key].delete)
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  return Object.assign(delete driver[key]);
}
