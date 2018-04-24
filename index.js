// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(driver,key,value){
		newDriver = Object.assign({},driver)
		newDriver[key] = value;
		return newDriver;
	}

function destructivelyUpdateDriverWithKeyAndValue(driver,key, value){
	driver[key]= value
	return driver;
}

function deleteFromDriverByKey(driver,key){
	newDrivers = Object.assign({}, driver);
	delete newDrivers[key]; 
	return newDrivers;
}

function destructivelyDeleteFromDriverByKey(driver,key){
	delete driver[key];
	return driver;
}