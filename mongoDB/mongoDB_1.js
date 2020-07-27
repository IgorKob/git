//book online
//https://developer.mongodb.com/quickstart/node-crud-tutorial
//database online
//https://cloud.mongodb.com/v2/5ec0625d5037304d523b13cb#metrics/replicaSet/5ec06473b4503b2a9a86d361/explorer/kim/kim2/find


//mongodb+srv://asd:<password>@cluster0-dho0b.mongodb.net/test?retryWrites=true&w=majority

// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://asd:asdasdasd@cluster0-dho0b.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });












// //                        listDatabases MongoDB
// const { MongoClient } = require('mongodb');
//
// async function main() {
//     /**
//      * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
//      * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
//      */
//     const uri = "mongodb+srv://asd:asdasdasd@cluster0-dho0b.mongodb.net/test?retryWrites=true&w=majority/mydb";
//
//     /**
//      * The Mongo Client you will use to interact with your database
//      * See https://mongodb.github.io/node-mongodb-native/3.3/api/MongoClient.html for more details
//      */
//     const client = new MongoClient(uri);
//
//     try {
//         // Connect to the MongoDB cluster
//         await client.connect();
//
//         // Make the appropriate DB calls
//         await listDatabases(client);
//
//     } catch (e) {
//         console.error(e);
//     } finally {
//         // Close the connection to the MongoDB cluster
//         await client.close();
//     }
// }
//
// main().catch(console.error);
//
// /**
//  * Print the names of all available databases
//  * @param {MongoClient} client A MongoClient that is connected to a cluster
//  */
// async function listDatabases(client) {
//     databasesList = await client.db().admin().listDatabases();
//
//     console.log("Databases:");
//     databasesList.databases.forEach(db => console.log(` - ${db.name}`));
// };


























// //             create database and table and data
// const {MongoClient} = require('mongodb');
//
// async function main(){
//     const uri = "mongodb+srv://asd:asdasdasd@cluster0-dho0b.mongodb.net/test?retryWrites=true&w=majority";
//     const client = new MongoClient(uri);
//
//     try {
//         await client.connect();
//         await createListing(client,
//             {
//                 name: "qwe",
//                 summary: "ewq",
//                 bedrooms: 1,
//                 bathrooms: 1
//             }
//         );
//
//         // Create 3 new listings
//         await createMultipleListings(client, [
//             {
//                 name: "asd",
//                 summary: "dsa",
//                 property_type: "asd",
//                 bedrooms: 5,
//                 bathrooms: 4.5,
//                 beds: 5
//             },
//             {
//                 name: "zxc",
//                 property_type: "cxz",
//                 bedrooms: 1,
//                 bathroom: 1
//             },
//             {
//                 name: "qwe",
//                 summary: "qwe",
//                 bedrooms: 4,
//                 bathrooms: 2.5,
//                 beds: 7,
//                 last_review: new Date()
//             }
//         ]);
//     } finally {
//         // Close the connection to the MongoDB cluster
//         await client.close();
//     }
// }
//
// main().catch(console.error);
//
// async function createListing(client, newListing){
//     const result = await client.db("kim").collection("kim2").insertOne(newListing);
//     console.log(`New listing created with the following id: ${result.insertedId}`);
// }
//
// async function createMultipleListings(client, newListings){
//     const result = await client.db("kim").collection("kim2").insertMany(newListings);
//     console.log(`${result.insertedCount} new listing(s) created with the following id(s):`);
//     console.log(result.insertedIds);
// }


















// //        open element in database     findOne()     .find    .sort    .limit
// const { MongoClient } = require('mongodb');
//
// async function main() {
//     const uri = "mongodb+srv://asd:asdasdasd@cluster0-dho0b.mongodb.net/test?retryWrites=true&w=majority";
//     const client = new MongoClient(uri);
//
//     try {
//         await client.connect();
//         await findOneListingByName(client, "asd");
//         await findListingsWithMinimumBedroomsBathroomsAndMostRecentReviews(client, {
//             minimumNumberOfBedrooms: 4,
//             minimumNumberOfBathrooms: 2,
//             maximumNumberOfResults: 5
//         });
//
//     } finally {
//         // Close the connection to the MongoDB cluster
//         await client.close();
//     }
// }
//
// main().catch(console.error);
//
// async function findOneListingByName(client, nameOfListing) {
//     const result = await client.db("kim").collection("kim2").findOne({ name: nameOfListing });
//
//     if (result) {
//         console.log(`Found a listing in the collection with the name '${nameOfListing}':`);
//         console.log(result);
//     } else {
//         console.log(`No listings found with the name '${nameOfListing}'`);
//     }
// }
//
// async function findListingsWithMinimumBedroomsBathroomsAndMostRecentReviews(client, {
//     minimumNumberOfBedrooms = 0,
//     minimumNumberOfBathrooms = 0,
//     maximumNumberOfResults = Number.MAX_SAFE_INTEGER
// } = {}) {
//
//     const cursor = client.db("kim").collection("kim2")
//         .find({
//             bedrooms: { $gte: minimumNumberOfBedrooms },
//             bathrooms: { $gte: minimumNumberOfBathrooms }
//         }
//         )
//         .sort({ last_review: -1 })
//         .limit(maximumNumberOfResults);
//
//     // Store the results in an array
//     const results = await cursor.toArray();
//
//     // Print the results
//     if (results.length > 0) {
//         console.log(`Found listing(s) with at least ${minimumNumberOfBedrooms} bedrooms and ${minimumNumberOfBathrooms} bathrooms:`);
//         results.forEach((result, i) => {
//             date = new Date(result.last_review).toDateString();
//
//             console.log();
//             console.log(`${i + 1}. name: ${result.name}`);
//             console.log(`   _id: ${result._id}`);
//             console.log(`   bedrooms: ${result.bedrooms}`);
//             console.log(`   bathrooms: ${result.bathrooms}`);
//             console.log(`   most recent review date: ${new Date(result.last_review).toDateString()}`);
//         });
//     } else {
//         console.log(`No listings found with at least ${minimumNumberOfBedrooms} bedrooms and ${minimumNumberOfBathrooms} bathrooms`);
//     }
// }




























// //            update   database             .updateMany
// const { MongoClient } = require('mongodb');
//
// async function main() {
//     const uri = "mongodb+srv://asd:asdasdasd@cluster0-dho0b.mongodb.net/test?retryWrites=true&w=majority";
//     const client = new MongoClient(uri);
//
//     try {
//         await client.connect();
//
//         // UPDATE
//         // Print the Infinite Views listing
//         await findListingByName(client, "qwe");
//         // Update the Infinite Views listing to have 6 bedrooms and 8 beds
//         await updateListingByName(client, "qwe", { bedrooms: 6, beds: 8 });
//         // Print the updated Infinite Views listing
//         await findListingByName(client, "qwe");
//
//         // UPSERT
//         // Check if a listing named Cozy Cottage is in the db
//         await findListingByName(client, "zxc");
//         // Upsert the Cozy Cottage listing
//         await upsertListingByName(client, "zxc", { name: "zxc", bedrooms: 2, bathrooms: 1 });
//         // Print the details of the Cozy Cottage listing
//         await findListingByName(client, "zxc");
//         // Upsert the Cozy Cottage listing
//         await upsertListingByName(client, "zxc", { beds: 2 });
//         // Print the details of the Cozy Cottage listing
//         await findListingByName(client, "zxc");
//
//         // UPDATE MANY
//         // Update all listings so they have a property type
//         await updateAllListingsToHavePropertyType(client);
//         // Print the details of the Cozy Cottage listing that should now have a property type
//         await findListingByName(client, "zxc");
//
//     } finally {
//         // Close the connection to the MongoDB cluster
//         await client.close();
//     }
// }
//
// main().catch(console.error);
//
// async function updateListingByName(client, nameOfListing, updatedListing) {
//     const result = await client.db("kim").collection("kim2").updateOne({ name: nameOfListing }, { $set: updatedListing });
//
//     console.log(`${result.matchedCount} document(s) matched the query criteria.`);
//     console.log(`${result.modifiedCount} document(s) was/were updated.`);
// }
//
// async function upsertListingByName(client, nameOfListing, updatedListing) {
//     const result = await client.db("kim").collection("kim2").updateOne({ name: nameOfListing }, { $set: updatedListing }, { upsert: true });
//     console.log(`${result.matchedCount} document(s) matched the query criteria.`);
//
//     if (result.upsertedCount > 0) {
//         console.log(`One document was inserted with the id ${result.upsertedId._id}`);
//     } else {
//         console.log(`${result.modifiedCount} document(s) was/were updated.`);
//     }
// }
//
// async function updateAllListingsToHavePropertyType(client) {
//     const result = await client.db("kim").collection("kim2").updateMany({ property_type: { $exists: false } }, { $set: { property_type: "Unknown" } });
//     console.log(`${result.matchedCount} document(s) matched the query criteria.`);
//     console.log(`${result.modifiedCount} document(s) was/were updated.`);
// }
//
// async function findListingByName(client, nameOfListing) {
//     const result = await client.db("kim").collection("kim2").findOne({ name: nameOfListing });
//
//     if (result) {
//         console.log(`Found a listing in the db with the name '${nameOfListing}':`);
//         console.log(result);
//     } else {
//         console.log(`No listings found with the name '${nameOfListing}'`);
//     }
// }














// //     .deleteOne        .deleteMany
// const { MongoClient } = require('mongodb');
//
// async function main() {
//     const uri = "mongodb+srv://asd:asdasdasd@cluster0-dho0b.mongodb.net/test?retryWrites=true&w=majority";
//     const client = new MongoClient(uri);
//
//     try {
//         await client.connect();
//         // DELETE ONE
//         // Check if a listing named "Cozy Cottage" exists. Run update.js if you do not have this listing.
//         await printIfListingExists(client, "qwe");
//         // Delete the "Cozy Cottage" listing
//         await deleteListingByName(client, "qwe");
//         // Check that the listing named "Cozy Cottage" no longer exists
//         await printIfListingExists(client, "qwe");
//
//         // DELETE MANY
//         // Check if the listing named "Ribeira Charming Duplex" (last scraped February 16, 2019) exists
//         await printIfListingExists(client, "ewq");
//         // Check if the listing named "Horto flat with small garden" (last scraped February 11, 2019) exists
//         await printIfListingExists(client, "ewq");
//         // Delete the listings that were scraped before February 15, 2019
//         await deleteListingsScrapedBeforeDate(client, new Date("2019-02-15"));
//         // Check that the listing named "Ribeira Charming Duplex" still exists
//         await printIfListingExists(client, "ewq");
//         // Check that the listing named "Horto flat with small garden" no longer exists
//         await printIfListingExists(client, "dsa");
//
//     } finally {
//         // Close the connection to the MongoDB cluster
//         await client.close();
//     }
// }
//
// main().catch(console.error);
//
// async function deleteListingByName(client, nameOfListing) {
//     // See http://bit.ly/Node_deleteOne for the deleteOne() docs
//     const result = await client.db("kim").collection("kim2").deleteOne({ name: nameOfListing });
//     console.log(`${result.deletedCount} document(s) was/were deleted.`);
// }
//
// async function deleteListingsScrapedBeforeDate(client, date) {
//     // See http://bit.ly/Node_deleteMany for the deleteMany() docs
//     const result = await client.db("kim").collection("kim2").deleteMany({ "ewq": { $lt: date } });
//     console.log(`${result.deletedCount} document(s) was/were deleted.`);
// }
//
// async function printIfListingExists(client, nameOfListing) {
//     // See http://bit.ly/Node_findOne for the findOne() docs
//     const result = await client.db("kim").collection("kim2").findOne({ name: nameOfListing });
//
//     if (result) {
//         if (result.last_scraped) {
//             console.log(`Found a listing in the collection with the name '${nameOfListing}'. Listing was last scraped ${result.last_scraped}.`);
//         } else {
//             console.log(`Found a listing in the collection with the name '${nameOfListing}'`);
//         }
//     } else {
//         console.log(`No listings found with the name '${nameOfListing}'`);
//     }
// }



























// //    рамки агрегацій не працюють не ма відповіднох бази даних
// const { MongoClient } = require('mongodb');
//
// async function main() {
//     const uri = "mongodb+srv://asd:asdasdasd@cluster0-dho0b.mongodb.net/test?retryWrites=true&w=majority";
//     const client = new MongoClient(uri);
//
//     try {
//         await client.connect();
//         // Print the 10 cheapest suburbs in the Sydney, Australia market
//         await printCheapestSuburbs(client, "Australia", "Sydney", 10);
//
//     } finally {
//         // Close the connection to the MongoDB cluster
//         await client.close();
//     }
// }
//
// main().catch(console.error);
//
// async function printCheapestSuburbs(client, country, market, maxNumberToPrint) {
//     const pipeline = [
//         {
//             '$match': {
//                 'bedrooms': 1,
//                 'address.country': country,
//                 'address.market': market,
//                 'address.suburb': {
//                     '$exists': 1,
//                     '$ne': ''
//                 },
//                 'room_type': 'Entire home/apt'
//             }
//         }, {
//             '$group': {
//                 '_id': '$address.suburb',
//                 'averagePrice': {
//                     '$avg': '$price'
//                 }
//             }
//         }, {
//             '$sort': {
//                 'averagePrice': 1
//             }
//         }, {
//             '$limit': maxNumberToPrint
//         }
//     ];
//
//     // See http://bit.ly/Node_aggregate for the aggregate() docs
//     const aggCursor = client.db("kim").collection("kim2").aggregate(pipeline);
//
//     await aggCursor.forEach(airbnbListing => {
//         console.log(`${airbnbListing._id}: ${airbnbListing.averagePrice}`);
//     });
// }
















////
// const { MongoClient } = require('mongodb');
//
// // CRUD operations in transactions must be on existing collections, so be sure you have run
// // usersCollection.js prior to running this script.
//
// async function main() {
//     /**
//      * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
//      * See http://bit.ly/NodeDocs_lauren for more details
//      */
//     const uri = "mongodb+srv://<username>:<password>@<your-cluster-url>/test?retryWrites=true&w=majority";
//
//     /**
//      * The Mongo Client you will use to interact with your database
//      * See bit.ly/Node_MongoClient for more details
//      */
//     const client = new MongoClient(uri);
//
//     try {
//         // Connect to the MongoDB cluster
//         await client.connect();
//
//         // Make the appropriate DB calls
//
//         await createReservation(client,
//             "leslie@example.com",
//             "Infinite Views",
//             [new Date("2019-12-31"), new Date("2020-01-01")],
//             { pricePerNight: 180, specialRequests: "Late checkout", breakfastIncluded: true });
//
//     } finally {
//         // Close the connection to the MongoDB cluster
//         await client.close();
//     }
// }
//
// main().catch(console.error);
//
// /**
//  * Create a reservation by storing information in both the users collection and the listingsAndReviews collection
//  * Note: this function assumes there is only one Airbnb listing in the collection with the given name.  If more than
//  * listing exists with the given name, a reservation will be created for the first listing the database finds.
//  * @param {MongoClient} client A MongoClient that is connected to a cluster with the sample_airbnb database
//  * @param {String} userEmail The email address of the user who is creating the reservation
//  * @param {String} nameOfListing The name of the Airbnb listing to be reserved
//  * @param {Array.Date} reservationDates An array of the date(s) for the reservation
//  * @param {Object} reservationDetails An object containing additional reservation details that need to be stored with the reservation
//  */
// async function createReservation(client, userEmail, nameOfListing, reservationDates, reservationDetails) {
//
//     /**
//      * The users collection in the sample_airbnb database
//      */
//     const usersCollection = client.db("sample_airbnb").collection("users");
//
//     /**
//      * The listingsAndReviews collection in the sample_airbnb database
//      */
//     const listingsAndReviewsCollection = client.db("sample_airbnb").collection("listingsAndReviews");
//
//     /**
//      * The reservation document that will be added to the users collection document for this user
//      */
//     const reservation = createReservationDocument(nameOfListing, reservationDates, reservationDetails);
//
//     // Step 1: Start a Client Session
//     // See http://bit.ly/Node_startSession for the startSession() docs
//     const session = client.startSession();
//
//     // Step 2: Optional. Define options to use for the transaction
//     const transactionOptions = {
//         readPreference: 'primary',
//         readConcern: { level: 'local' },
//         writeConcern: { w: 'majority' }
//     };
//
//     try {
//         // Step 3: Use withTransaction to start a transaction, execute the callback, and commit (or abort on error)
//         // Note: The callback for withTransaction MUST be async and/or return a Promise.
//         // See http://bit.ly/Node_withTransaction for the withTransaction() docs
//         const transactionResults = await session.withTransaction(async () => {
//
//             // Important:: You must pass the session to each of the operations
//
//             // Add a reservation to the reservations array for the appropriate document in the users collection
//             const usersUpdateResults = await usersCollection.updateOne(
//                 { email: userEmail },
//                 { $addToSet: { reservations: reservation } },
//                 { session });
//             console.log(`${usersUpdateResults.matchedCount} document(s) found in the users collection with the email address ${userEmail}.`);
//             console.log(`${usersUpdateResults.modifiedCount} document(s) was/were updated to include the reservation.`);
//
//             // Check if the Airbnb listing is already reserved for those dates. If so, abort the transaction.
//             const isListingReservedResults = await listingsAndReviewsCollection.findOne(
//                 { name: nameOfListing, datesReserved: { $in: reservationDates } },
//                 { session });
//             if (isListingReservedResults) {
//                 await session.abortTransaction();
//                 console.error("This listing is already reserved for at least one of the given dates. The reservation could not be created.");
//                 console.error("Any operations that already occurred as part of this transaction will be rolled back.")
//                 return;
//             }
//
//             //  Add the reservation dates to the datesReserved array for the appropriate document in the listingsAndRewiews collection
//             const listingsAndReviewsUpdateResults = await listingsAndReviewsCollection.updateOne(
//                 { name: nameOfListing },
//                 { $addToSet: { datesReserved: { $each: reservationDates } } },
//                 { session });
//             console.log(`${listingsAndReviewsUpdateResults.matchedCount} document(s) found in the listingsAndReviews collection with the name ${nameOfListing}.`);
//             console.log(`${listingsAndReviewsUpdateResults.modifiedCount} document(s) was/were updated to include the reservation dates.`);
//
//         }, transactionOptions);
//
//         if (transactionResults) {
//             console.log("The reservation was successfully created.");
//         } else {
//             console.log("The transaction was intentionally aborted.");
//         }
//     } catch (e) {
//         console.log("The transaction was aborted due to an unexpected error: " + e);
//     } finally {
//         // Step 4: End the session
//         await session.endSession();
//     }
//
// }
//
// /**
//  * A helper function that generates a reservation document
//  * @param {String} nameOfListing The name of the Airbnb listing to be reserved
//  * @param {Array.Date} reservationDates An array of the date(s) for the reservation
//  * @param {Object} reservationDetails An object containing additional reservation details that need to be stored with the reservation
//  * @returns {Object} The reservation document
//  */
// function createReservationDocument(nameOfListing, reservationDates, reservationDetails) {
//     // Create the reservation
//     let reservation = {
//         name: nameOfListing,
//         dates: reservationDates,
//     }
//
//     // Add additional properties from reservationDetails to the reservation
//     for (let detail in reservationDetails) {
//         reservation[detail] = reservationDetails[detail];
//     }
//
//     return reservation;
// }

























//                         trygery
// const { MongoClient } = require('mongodb');
// const stream = require('stream');
//
// async function main() {
//     /**
//      * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
//      * See http://bit.ly/NodeDocs_lauren for more details
//      */
//     const uri = "mongodb+srv://<username>:<password>@<your-cluster-url>/test?retryWrites=true&w=majority";
//
//     /**
//      * The Mongo Client you will use to interact with your database
//      * See bit.ly/Node_MongoClient for more details
//      */
//     const client = new MongoClient(uri);
//
//     try {
//         // Connect to the MongoDB cluster
//         await client.connect();
//
//         // Make the appropriate DB calls
//
//         /**
//          * An aggregation pipeline that matches on new listings in the country of Australia and the Sydney market
//          */
//         const pipeline = [
//             {
//                 '$match': {
//                     'operationType': 'insert',
//                     'fullDocument.address.country': 'Australia',
//                     'fullDocument.address.market': 'Sydney'
//                 }
//             }
//         ];
//
//         // This script contains three ways to monitor new listings in the listingsAndReviews collection.
//         // Comment in the monitoring function you'd like to use.
//
//         // OPTION ONE: Monitor new listings using EventEmitter's on() function.
//         // await monitorListingsUsingEventEmitter(client, 30000, pipeline);
//
//         // OPTION TWO: Monitor new listings using ChangeStream's hasNext() function
//         // await monitorListingsUsingHasNext(client, 30000, pipeline);
//
//         // OPTION THREE: Monitor new listings using the Stream API
//         // await monitorListingsUsingStreamAPI(client, 30000, pipeline);
//
//     } finally {
//         // Close the connection to the MongoDB cluster
//         await client.close();
//     }
// }
//
// main().catch(console.error);
//
// /**
//  * Close the given change stream after the given amount of time
//  * @param {*} timeInMs The amount of time in ms to monitor listings
//  * @param {*} changeStream The open change stream that should be closed
//  */
// function closeChangeStream(timeInMs = 60000, changeStream) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Closing the change stream");
//             changeStream.close();
//             resolve();
//         }, timeInMs)
//     })
// };
//
// /**
//  * Monitor listings in the listingsAndReviews collections for changes
//  * This function uses the on() function from the EventEmitter class to monitor changes
//  * @param {MongoClient} client A MongoClient that is connected to a cluster with the sample_airbnb database
//  * @param {Number} timeInMs The amount of time in ms to monitor listings
//  * @param {Object} pipeline An aggregation pipeline that determines which change events should be output to the console
//  */
// async function monitorListingsUsingEventEmitter(client, timeInMs = 60000, pipeline = []) {
//     const collection = client.db("sample_airbnb").collection("listingsAndReviews");
//
//     // See http://bit.ly/Node_watch for the watch() docs
//     const changeStream = collection.watch(pipeline);
//
//     // ChangeStream inherits from the Node Built-in Class EventEmitter (https://nodejs.org/dist/latest-v12.x/docs/api/events.html#events_class_eventemitter).
//     // We can use EventEmitter's on() to add a listener function that will be called whenever a change occurs in the change stream.
//     // See https://nodejs.org/dist/latest-v12.x/docs/api/events.html#events_emitter_on_eventname_listener for the on() docs.
//     changeStream.on('change', (next) => {
//         console.log(next);
//     });
//
//     // Wait the given amount of time and then close the change stream
//     await closeChangeStream(timeInMs, changeStream);
// }
//
// /**
//  * Monitor listings in the listingsAndReviews collections for changes
//  * This function uses the hasNext() function from the MongoDB Node.js Driver's ChangeStream class to monitor changes
//  * @param {MongoClient} client A MongoClient that is connected to a cluster with the sample_airbnb database
//  * @param {Number} timeInMs The amount of time in ms to monitor listings
//  * @param {Object} pipeline An aggregation pipeline that determines which change events should be output to the console
//  */
// async function monitorListingsUsingHasNext(client, timeInMs = 60000, pipeline = []) {
//     const collection = client.db("sample_airbnb").collection("listingsAndReviews");
//
//     // See http://bit.ly/Node_watch for the watch() docs
//     const changeStream = collection.watch(pipeline);
//
//     // Set a timer that will close the change stream after the given amount of time
//     // Function execution will continue because we are not using "await" here
//     closeChangeStream(timeInMs, changeStream);
//
//     // We can use ChangeStream's hasNext() function to wait for a new change in the change stream.
//     // If the change stream is closed, hasNext() will return false so the while loop will exit.
//     // See http://bit.ly/Node_ChangeStream for the ChangeStream docs.
//     while (await changeStream.hasNext()) {
//         console.log(await changeStream.next());
//     }
// }
//
// /**
//  * Monitor listings in the listingsAndReviews collection for changes
//  * This function uses the Stream API (https://nodejs.org/api/stream.html) to monitor changes
//  * @param {MongoClient} client A MongoClient that is connected to a cluster with the sample_airbnb database
//  * @param {Number} timeInMs The amount of time in ms to monitor listings
//  * @param {Object} pipeline An aggregation pipeline that determines which change events should be output to the console
//  */
// async function monitorListingsUsingStreamAPI(client, timeInMs = 60000, pipeline = []) {
//     const collection = client.db('sample_airbnb').collection('listingsAndReviews');
//
//     // See http://bit.ly/Node_watch for the watch() docs
//     const changeStream = collection.watch(pipeline);
//
//     // See http://bit.ly/Node_pipe for the pipe() docs
//     changeStream.pipe(
//         new stream.Writable({
//             objectMode: true,
//             write: function (doc, _, cb) {
//                 console.log(doc);
//                 cb();
//             }
//         })
//     );
//
//     // Wait the given amount of time and then close the change stream
//     await closeChangeStream(timeInMs, changeStream);
// }
