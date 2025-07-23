import { connect as mongoConnector } from "../db/mongo.js";

const getUsers = async () => {
  const { db } = await mongoConnector();
  let collection = await db.collection("User").find({}).toArray();
  console.log("User Collection:", collection);
  return collection;
}

export {getUsers};