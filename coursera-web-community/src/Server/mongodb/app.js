const express = require('express')
const { connectToDb, getDb } = require('./db');
const cors = require('cors'); // Import the cors package
// const { MongoClient } = require('mongodb');


const server = express();
server.use(express.json());
//db connection
let db
const ObjectId = require('mongodb').ObjectId;

server.use(cors({
    origin: 'http://localhost:8081',
    //Connect To Front End View URL
}));

connectToDb((err) => {
    if (!err) {
        server.listen(9999, () => {
            console.log('app listening on port 9999')
        })
        db = getDb()
    }
})


//API routes
server.get('/api/all', async (req, res) => {
    try {
        const allNewsCollection = db.collection('news');
        const allGamesCollection = db.collection('gameDetails')

        const allNewsData = await allNewsCollection.find().toArray();
        const allGamesData = await allGamesCollection.find().toArray();

        const combineData = {
            'allGames': allGamesData,
            'allNews': allNewsData
        }

        console.log(combineData);
        res.status(200).json(combineData);

    } catch (error) {
        console.error('Error Fetching ALL DATA =>', error)
        res.status(500).json({ error: 'An Error Occured!' })
    }
})

server.get('/api/news', async (req, res) => {
    try {
        const newsCollection = db.collection('news');
        const news = await newsCollection.find().toArray();
        res.status(200).json(news);
    } catch (error) {
        console.error('Error fetching news => ', error);
        res.status(500).json({ error: 'An error occurred!' })
    }
})

server.get('/api/game', async (req, res) => {
    try {
        const newsCollection = db.collection('gameDetails');
        const news = await newsCollection.find().toArray();
        res.status(200).json(news);
    } catch (error) {
        console.error('Error fetching news => ', error);
        res.status(500).json({ error: 'An error occurred!' })
    }
})

server.get('/api/news/:newsId', async (req, res) => {
    try {
        const newsCollection = db.collection('news');
        const newsId = req.params.newsId;
        const newObjectId = new ObjectId(newsId);

        const news = await newsCollection.findOne({ _id: newObjectId });

        if (news) {
            res.status(200).json(news);
        } else {
            res.status(404).json({ message: 'News Not Found' });

        }
    } catch (error) {
        console.error('Error fetching news => ', error);
        res.status(500).json({ error: 'An error occurred!', error })
    }
})

server.get('/api/game/:gameId', async (req, res) => {
    try {
        const gameDetailCollection = db.collection('gameDetails');
        const gameId = req.params.gameId;
        const gameObjectedId = new ObjectId(gameId);

        const gameDetails = await gameDetailCollection.findOne({ _id: gameObjectedId });

        if (gameDetails) {
            res.status(200).json(gameDetails);
        } else {
            res.status(404).json({ message: 'News Not Found' });

        }
    } catch (error) {
        console.error('Error fetching news => ', error);
        res.status(500).json({ error: 'An error occurred!', error })
    }
})

server.get('/api/registerData', async (req, res) => {
    try {
        const registerCollection = db.collection('register');
        const registerDatas = await registerCollection.find().toArray();
        res.status(200).json(registerDatas);
    } catch (error) {
        console.error('Error fetching news => ', error);
        res.status(500).json({ error: 'An error occurred!' })
    }
})

// server.get('/api/game/getIndex',async(req,res)=>{
//     try{
//         const gameIndexCollection=db.collection(gameDetails);
//         const documentCount = await gameIndexCollection.countDocuments();
//         console.log(gameIndexCollection);
//         res.json(documentCount);

//     }catch(err){
//         console.error('Error Getting Index');
//         res.status(500).json({error:'Error Getting Game Index!'})
//     }
// });

server.post('/api/register', async (req, res) => {
    try {
        const userData = req.body;
        const registerCollection = db.collection('register');
        const existingUser = await registerCollection.findOne({ username: userData.username });
        if (existingUser) {
            res.status(403).json({ message: 'User Exists' });
        } else {
            const result = await registerCollection.insertOne(userData);
            if (result.acknowledged) {
                res.status(201).json({ message: 'User Registered Successfully' });
            } else {
                res.status(500).json({ message: 'User Registered Failed.' })
            }
        }
    } catch (error) {
        console.error('Error Fetching Register => ', error);
        res.status(500).json({ message: 'An Error Occured', error })
    }
})

server.post('/api/login', async (req, res) => {
    try {
        const loginData = req.body;
        const findRegisterCollection = db.collection('register');
        const existingLogin = await findRegisterCollection.findOne({ username: loginData.username });

        if (existingLogin) {
            // res.status(403).json({ message: existingLogin.username });
            // const passwordRegister = await bcrypt.compare(existingLogin.password, loginData.password);

            if (existingLogin.password == loginData.password) {
                res.status(201).json({ message: "Login Successfully",username:loginData.username });
            } else {
                res.status(401).json({ mesasge: "Invalid Password" });
            }
        } else {
            res.status(403).json({ message: "User Not Found Error" });

        }
    } catch (error) {
        console.error('Error Login', error);
        res.status(500).json({ message: 'Error Happend when trying and catching', error })
    }
})