var fs = require('fs');

// fs.appendFile('myfile.txt', 'my txt file', function(err) {
//   if (err) throw err;
//   console.log('Saved!');
// });


// fs.open('myfile2.txt', 'w', function(err, file) {
//   if (err) throw err;
//   console.log('Seves!!');
// });


// fs.writeFile('myfile3.txt', 'my text3 file', function(err) {
//   if (err) throw err;
//   console.log('Saved!!!');
// });


// fs.unlink('myfile3.txt', function(err) {
//   if (err) throw err;
//   console.log('Delete!');
// });


fs.rename('myfile2.txt', 'myfile22.txt', function(err) {
  if (err) throw err;
  console.log('Rename!');
});
