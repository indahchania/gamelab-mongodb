const MongoClient = require("mongodb").MongoClient
let url = "mongodb://localhost:27017"

MongoClient.connect(url, function(err, db) {
    if (err) throw err
    var dbo = db.db("Sistem_Informasi_Akademik")
    var myobj = [
        { kode_mapel: 'H02', nama_mapel: 'HTML Dasar'}, 
        { kode_mapel: 'H03', nama_mapel: 'HTML Lanjut'},
        { kode_mapel: 'J01', nama_mapel: 'Javascript Dasar'}, 
        { kode_mapel: 'J02', nama_mapel: 'Javascript Lanjut'},
        { kode_mapel: 'N01', nama_mapel: 'NodeJS Dasar'}, 
        { kode_mapel: 'NO2', nama_mapel: 'NodeJS Lanjut'},
        { kode_mapel: 'P01', nama_mapel: 'PHP Dasar'},
        { kode_mapel: 'P02', nama_mapel: 'PHP Lanjut'},
        { kode_mapel: 'M01', nama_mapel: 'MongoDB Dasar'},
        { kode_mapel: 'M02', nama_mapel: 'MongoDB Lanjut'},
        { kode_mapel: 'M03', nama_mapel: 'MySQL Dasar'},
        { kode_mapel: 'M04', nama_mapel: 'MySQL lanjut'},
        { kode_mapel: 'L01', nama_mapel: 'Laravel Dasar'},
        { kode_mapel: 'L01', nama_mapel: 'Laravel Lanjut'}
    ]
    dbo.collection("Mata_Pelajaran").insertMany(myobj, function(err, res){
        if (err) throw err
        console.log("Jumlah data yang berhasil ditambahkan adalah: " + res.insertedCount)
        db.close()
    })
})