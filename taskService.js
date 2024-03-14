// taskService.js

const { connectToMongoDB } = require('./dbConfig');

async function createTask(task) {
  const database = await connectToMongoDB();
  const result = await database.collection('tasks').insertOne(task);
  return result.insertedId;
}

async function getAllTasks() {
  const database = await connectToMongoDB();
  return database.collection('tasks').find({}).toArray();
}

// Implement update and delete functions similarly
