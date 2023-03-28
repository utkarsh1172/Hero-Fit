import connectMongo from "@/lib/mongo"

export default async function handler(req, res) {

  try {
    if(req.method === "POST") {
      await connectMongo();
      res.status(200).json({message: 'cool'})
    } else{
      res.status(400).json({error:"invalid params"});
    }
  }
  catch(e){
    res.status(500).json({ error: "something went wrong"});
  }
  //create auth token JWT
  //Save the user
  //Return the token
  }