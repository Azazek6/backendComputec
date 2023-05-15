import moongose from "mongoose";

export const connectionDB = async () => {
  try {
    const connection = await moongose.connect(
      "mongodb://Azazek:70991065@ac-vpi3wxw-shard-00-00.ietf8tw.mongodb.net:27017,ac-vpi3wxw-shard-00-01.ietf8tw.mongodb.net:27017,ac-vpi3wxw-shard-00-02.ietf8tw.mongodb.net:27017/?ssl=true&replicaSet=atlas-t3xumv-shard-0&authSource=admin&retryWrites=true&w=majority"
    );
    console.log("Conectado a la base de datos en ", connection.connection.host);
  } catch (error) {
    console.error(error);
  }
};
