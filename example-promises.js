/*function getTempCallback(location, callback) {
  callback(undefined, 78)
  callback('city not found')
}

getTempCallback('Philadelphia', function(err, temp) {
  if (err) {
    console.log('error', err)
  } else {
    console.log('success', temp)
  }
});

function getTempPromise(location) {
return new Promise(resolve, reject)=> {

  }
}
*/
function addPromise(a, b) {
  return new Promise(function(resolve, reject) {
    if (typeof a === 'number' && typeof b ==='number') {
      resolve(a + b)
    } else {
      reject('Error')
    }
  });
}
addPromise(2, 'e').then(function(sum) {
  console.log('somme = ', sum )
}, function(err){
  console.log('error', err)
})
