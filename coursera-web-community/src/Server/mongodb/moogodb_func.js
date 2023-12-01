async function searchInMoongoDb(searchTerm){
    const collection=db.collection('gameDetails');
    // const regex=new RegExp(searchTerm,'i');
    // const query={gameDetailTitle:regex}
    const result=await collection.find(searchTerm).toArray();

    return result
}

module.exports = {
    searchInMoongoDb: searchInMoongoDb,
};