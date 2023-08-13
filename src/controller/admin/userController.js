const getUser = (req, res) => {
    try{
        res.send("User fetched!!")
    } catch(err){
        throw err
    }
}
module.exports = {
    getUser
}