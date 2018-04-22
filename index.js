//updateDriverWithKeyAndValue()- this
//  function should take in a driver object, a key and a value. The function should not mutate the driver
// parameter and return a new driver that has an updated value for the key passed in
const driver = {}
function updateDriverWithKeyAndValue(driver, key, value) {
  const newObj = { ...driver };
  newObj[key] = value;
  return newObj;
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  return obj;
}

function deleteFromDriverByKey(driver, key) {
  const newDriver = Object.assign({}, driver);
  delete newDriver[key]
return newDriver
}
// WHYYYYYYYY ***************************
// function deleteFromDriverByKey(driver, key) {
//   const newDriver = Object.assign({}, driver);
//   delete newDriver.Key;
// return newDriver
// }

function destructivelyDeleteFromDriverByKey(driver, key) {
delete driver[key]
return driver 
}
