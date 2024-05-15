const MongoClient = require("mongodb").MongoClient
let url = "mongodb://localhost:27017"

MongoClient.connect(url, function(err, db) {
    if(err) throw err
    var dbo = db.db("Sistem_Informasi_Akademik_IndahChania")
    var myquery = { _id: 1 }
    dbo.collection("Mapel").deleteOne(myquery, function(err, res) {
        if(err) throw err
        console.log("1 data berhasil dihapus")
        db.close()
    })
})