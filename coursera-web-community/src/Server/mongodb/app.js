const express = require('express')
const { connectToDb, getDb } = require('./db');
const cors = require('cors'); // Import the cors package


const server = express();
//db connection
let db
const ObjectId=require('mongodb').ObjectId;

server.use(cors({
    origin:'http://localhost:8081',
}));

connectToDb((err) => {
    if (!err) {
        server.listen(9999, () => {
            console.log('app listening on port 9999')
        })
        db=getDb()
    }
})


//API routes
server.get('/api/news', async(req, res) => {
    try{
        const newsCollection=db.collection('news');
        const news=await newsCollection.find().toArray();
        res.status(200).json(news);
    }catch(error){
        console.error('Error fetching news => ',error);
        res.status(500).json({error:'An error occurred!'})
    }
})

server.get('/api/game', async(req, res) => {
    try{
        const newsCollection=db.collection('gameDetails');
        const news=await newsCollection.find().toArray();
        res.status(200).json(news);
    }catch(error){
        console.error('Error fetching news => ',error);
        res.status(500).json({error:'An error occurred!'})
    }
})

server.get('/api/news/:newsId', async(req, res) => {
    try{
        const newsCollection=db.collection('news');
        const newsId=req.params.newsId;
        const newObjectId=new ObjectId(newsId);

        const news = await newsCollection.findOne({ _id:newObjectId });

        if(news){
            res.status(200).json(news);
        }else{
            res.status(404).json({message:'News Not Found'});

        }
    }catch(error){
        console.error('Error fetching news => ',error);
        res.status(500).json({error:'An error occurred!' ,error})
    }
})

server.get('/api/game/:gameId', async(req, res) => {
    try{
        const gameDetailCollection=db.collection('gameDetails');
        const gameId=req.params.gameId;
        const gameObjectedId=new ObjectId(gameId);

        const gameDetails = await gameDetailCollection.findOne({ _id:gameObjectedId });

        if(gameDetails){
            res.status(200).json(gameDetails);
        }else{
            res.status(404).json({message:'News Not Found'});

        }
    }catch(error){
        console.error('Error fetching news => ',error);
        res.status(500).json({error:'An error occurred!' ,error})
    }
})