const mongoose = require("mongoose"); //importing mongoose
const Schema = mongoose.Schema;       //creating schema

const userSchema = new Schema({ //You are creating a new schema by using new schema
 firstName: { type: String, default: "Rahul" },
 lastName: { type: String, default: "Pala" },
 emailId: { type: String, default: "rahulpala@melbourneuni.com" },
 password: { type: String, default: "xxxxxx" },
 createdAt: { type: Date, default: Date.now },
 updatedAt: { type: Date, default: Date.now }
 });

 //Example of how to make foreign key
//  const postSchema = new Schema({ //You are creating a new schema by using new schema
//     postTitle: { type: String, default: "Rahul" },
//     postDescription: { type: String, default: "Pala" },
//      // foreign key needs ObjectId type and a 'ref' to the referenced schema
//     userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user' }, 
//  })

 module.exports = mongoose.model("user", userSchema);

 // The "user" mentioned in the above line should be in 
// lowercase singular form ..whereas the actual collection 
// name in mongodb will be in the plural form.
 // Refer to mongoose documentation for more: 
//https://www.npmjs.com/package/mongoose
 // The first argument is the singular name of your collection.
 // Mongoose automatically looks for the lowercase plural version. For example, if you use
 // const MyModel = mongoose.model('Ticket', mySchema);
 // Then MyModel will use the tickets collection, not the Ticket collection.