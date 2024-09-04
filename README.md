# Mongoose

This repository demonstrates the usage of Mongoose, an elegant MongoDB object modeling tool for Node.js. It provides a schema-based solution to model your application data and handles the mapping between objects in code and documents in MongoDB.

## Features

- **Schema Definitions**: Define the structure and types of data to be stored in MongoDB.
- **Validation**: Built-in data validation before saving to the database.
- **Middleware**: Support for pre and post hooks for various operations like validation, saving, etc.
- **Population**: Populate document references from other collections easily.
- **Query Helpers**: Extend queries with custom methods.
- **Integration with Node.js**: Works seamlessly with Express.js and other Node.js frameworks.

## Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/NischayHR-11/Mongoose.git
cd Mongoose
npm install
```

## Usage

1. **Setup MongoDB**: Ensure you have MongoDB installed and running locally or use a cloud-based MongoDB service.

2. **Define a Mongoose Schema**: Create a schema to define the structure of your documents.

   ```javascript
   const mongoose = require('mongoose');

   const userSchema = new mongoose.Schema({
       name: String,
       email: String,
       age: Number
   });

   const User = mongoose.model('User', userSchema);
   ```

3. **Connect to MongoDB**: Establish a connection to your MongoDB instance.

   ```javascript
   mongoose.connect('mongodb://localhost:27017/yourdbname', {
       useNewUrlParser: true,
       useUnifiedTopology: true
   }).then(() => console.log('MongoDB Connected'))
   .catch(err => console.log(err));
   ```

4. **Create and Save Documents**: Use your Mongoose models to interact with the database.

   ```javascript
   const newUser = new User({
       name: 'John Doe',
       email: 'johndoe@example.com',
       age: 30
   });

   newUser.save()
   .then(user => console.log(user))
   .catch(err => console.log(err));
   ```

5. **Querying Data**: Perform CRUD operations with the Mongoose model.

   ```javascript
   User.find({ age: { $gte: 18 } })
   .then(users => console.log(users))
   .catch(err => console.log(err));
   ```

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

## Contributing

Contributions are welcome! Feel free to submit a pull request or open an issue.
