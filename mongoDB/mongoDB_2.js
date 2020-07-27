////////////////////////https://www.w3schools.com/nodejs/nodejs_mongodb_insert.asp

////          connect db
// var MongoClient = require('mongodb').MongoClient;
//
// var url = "mongodb+srv://asd:asdasdasd@cluster0-dho0b.mongodb.net/test?retryWrites=true&w=majority";
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   console.log("Database created!");
//   db.close();
// });




////             create db
// var MongoClient = require('mongodb').MongoClient;
//
// var url = "mongodb+srv://asd:asdasdasd@cluster0-dho0b.mongodb.net/test?retryWrites=true&w=majority";
// var dbo = db.db("mydb");
//  //Create a collection name "customers":
//  dbo.createCollection("customers", function(err, res) {
//    if (err) throw err;
//    console.log("Collection created!");
//    db.close();
//  });
// });




////             .insertOne()
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb+srv://asd:asdasdasd@cluster0-dho0b.mongodb.net/test?retryWrites=true&w=majority";
//
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");
//   var myobj = { name: "dodik", address: "bodik" };
//   dbo.collection("mydb2").insertOne(myobj, function(err, res) {
//     if (err) throw err;
//     console.log("1 document inserted");
//     db.close();
//   });
// });





////       .insertMany()
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb+srv://asd:asdasdasd@cluster0-dho0b.mongodb.net/test?retryWrites=true&w=majority";
//
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");
//   var myobj = [
//     { name: 'John', address: 'Highway 71'},
//     { name: 'Peter', address: 'Lowstreet 4'},
//     { name: 'Amy', address: 'Apple st 652'},
//     { name: 'Hannah', address: 'Mountain 21'},
//     { name: 'Michael', address: 'Valley 345'},
//     { name: 'Sandy', address: 'Ocean blvd 2'},
//     { name: 'Betty', address: 'Green Grass 1'},
//     { name: 'Richard', address: 'Sky st 331'},
//     { name: 'Susan', address: 'One way 98'},
//     { name: 'Vicky', address: 'Yellow Garden 2'},
//     { name: 'Ben', address: 'Park Lane 38'},
//     { name: 'William', address: 'Central st 954'},
//     { name: 'Chuck', address: 'Main Road 989'},
//     { name: 'Viola', address: 'Sideway 1633'}
//   ];
//   dbo.collection("customers").insertMany(myobj, function(err, res) {
//     if (err) throw err;
//     console.log("Number of documents inserted: " + res.insertedCount);
//     db.close();
//   });
// });



// //                 _id
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb+srv://asd:asdasdasd@cluster0-dho0b.mongodb.net/test?retryWrites=true&w=majority";
// MongoClient.connect(url, function(err, db) {
//   if(err) throw err;
//   var dbo = db.db('mydb');
//   var myobj = [
//     {_id: 1, name: 'igor', last: 'kob'},
//     {_id: 2, name: 'oleg', last: 'kob2'},
//     {_id: 3, name: 'igor2', last: 'kob2'}
//   ];
//   dbo.collection('products').insertMany(myobj, function(err, res) {
//     if(err) throw err;
//     console.log(res);
//     db.close();
//   });
// });





// //              .findOne()
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb+srv://asd:asdasdasd@cluster0-dho0b.mongodb.net/test?retryWrites=true&w=majority";
// MongoClient.connect(url, function(err, db) {
//   if(err) throw err;
//   var dbo = db.db('mydb');
//   dbo.collection('products').findOne({}, function(err, res) {
//     if(err) throw err;
//     console.log(res.name);
//     db.close();
//   });
// });






// //               .find().toArray()
// var MongoClient =require('mongodb').MongoClient;
// var url = "mongodb+srv://asd:asdasdasd@cluster0-dho0b.mongodb.net/test?retryWrites=true&w=majority";
// MongoClient.connect(url, function(err, db) {
//   if(err) throw err;
//   db.db('mydb').collection('products').find({}).toArray(function(err, res) {
//     if(err) throw err;
//     console.log(res);
//     db.close();
//   });
// });






// //                 projection
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb+srv://asd:asdasdasd@cluster0-dho0b.mongodb.net/test?retryWrites=true&w=majority";
// MongoClient.connect(url, function(err, db) {
//   if(err) throw err;
//   db.db('mydb').collection('products').find({}, {projection:{_id: 0, name: 1, last: 1}}).toArray(function(err, res) {
//     if(err) throw err;
//     console.log(res);
//     db.close();
//   });
// });








// //            .find({name: 'oleg'})
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb+srv://asd:asdasdasd@cluster0-dho0b.mongodb.net/test?retryWrites=true&w=majority";
// MongoClient.connect(url, function(err, db) {
//   if(err) throw err;
//   db.db('mydb').collection('products').find({name: 'oleg'}).toArray(function(err, res) {
//     if(err) throw err;
//     console.log(res);
//     db.close();
//   });
// });






// //                   .find({/^i/})
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb+srv://asd:asdasdasd@cluster0-dho0b.mongodb.net/test?retryWrites=true&w=majority";
// MongoClient.connect(url, function(err, db) {
//   if(err) throw err;
//   db.db('mydb').collection('products').find({name: /^i/}).toArray(function(err, res) {
//     if(err) throw err;
//     console.log(res);
//     db.close();
//   });
// });








// //              .sort({name: -1})      revers
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb+srv://asd:asdasdasd@cluster0-dho0b.mongodb.net/test?retryWrites=true&w=majority";
// MongoClient.connect(url, function(err, db) {
//   if(err) throw err;
//   db.db('mydb').collection('products').find().sort({name: -1}).toArray(function(err, res) {
//     if(err) throw err;
//     console.log(res);
//     db.close();
//   });
// });






// //     .delete()                  .deleteMany({/^o/}) - Видалити всі документи, коли адреса починається з літери "O":
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb+srv://asd:asdasdasd@cluster0-dho0b.mongodb.net/test?retryWrites=true&w=majority";
// MongoClient.connect(url, function(err, db) {
//   if(err) throw err;
//   db.db('mydb').collection('products').deleteOne({name: 'igor2'}, function(err, res) {
//     if(err) throw err;
//     console.log('delete ok');
//     console.log(res);
//     db.close();
//   });
// });





////                    .drop()
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb+srv://asd:asdasdasd@cluster0-dho0b.mongodb.net/test?retryWrites=true&w=majority";
// MongoClient.connect(url, function(err, db) {
//   if(err) throw err;
//   db.db('mydb').collection('customers').drop(function(err, res) {
//     if(err) throw err;
//     if(res) console.log('delete ok');
//     console.log(res);
//     db.close();
//   });
// });




// //               .dropCollection()
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb+srv://asd:asdasdasd@cluster0-dho0b.mongodb.net/test?retryWrites=true&w=majority";
// MongoClient.connect(url, function(err, db) {
//   if(err) throw err;
//   db.db('mydb').dropCollection('customers', function(err, res) {
//     if(err) throw err;
//     if (res) console.log('delete ok');
//     console.log(res);
//     db.close();
//   });
// });





// //                .update()
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb+srv://asd:asdasdasd@cluster0-dho0b.mongodb.net/test?retryWrites=true&w=majority";
// MongoClient.connect(url, function(err, db) {
//   if(err) throw err;
//   db.db('mydb').collection('products').updateOne({name: 'oleg'}, {$set: {name: 'olik', last: 'molik'}}, function(err, res) {
//     if(err) throw err;
//     console.log('update ok');
//     db.close();
//   });
// });






// //              .updateMany()
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb+srv://asd:asdasdasd@cluster0-dho0b.mongodb.net/test?retryWrites=true&w=majority";
// MongoClient.connect(url, function(err, db) {
//   if(err) throw err;
//   db.db('mydb').collection('products').updateMany({name: /^i/}, {$set: {name: 'gor'}}, function(err, res) {
//     if(err) throw err;
//     console.log(res.result.nModified + " document(s) updated");
//     db.close();
//   });
// });








// //                  .limit()
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb+srv://asd:asdasdasd@cluster0-dho0b.mongodb.net/test?retryWrites=true&w=majority";
// MongoClient.connect(url, function(err, db) {
//   if(err) throw err;
//   db.db('mydb').collection('products').find().limit(2).toArray(function(err, res) {
//     if(err) throw err;
//     console.log(res);
//     db.close();
//   });
// });






// //                  .aggregate([{ $lookup: {...........обєднання таблиць
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb+srv://asd:asdasdasd@cluster0-dho0b.mongodb.net/test?retryWrites=true&w=majority";
// MongoClient.connect(url, function(err, db) {
//   if(err) throw err;
//   db.db('mydb').collection('products').aggregate([
//     { $lookup:
//       {
//         from: 'products',
//         localField: '_id',
//         foreignField: '_id',
//         as: 'mydb2'
//       }
//     }
//   ]).toArray(function(err, res) {
//     if(err) throw err;
//     console.log(JSON.stringify(res));
//     db.close();
//   });
// });
