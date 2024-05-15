const MongoClient = require("mongodb").MongoClient
let url = "mongodb://localhost:27017"

MongoClient.connect(url, function(err, db){
    if (err) throw err
    var dbo = db.db("Sistem_Informasi_Akademik_IndahChania")
    dbo.collection('Siswa').aggregate([
        {
            $lookup:
            {
                from: 'Kelas',
                localField: 'kode_kelas',
                foreignField: 'kode_kelas',
                as: 'data_kelas'
            }
        },
        {
            $lookup:
            {
                from: 'Mapel',
                localField: 'kode_mapel',
                foreignField: 'kode_mapel',
                as: 'data_mapel'
            }
        },
        {
            $lookup:
            {
                from: 'Nilai',
                localField: 'data_mapel.kode_mapel',
                foreignField: 'kode_mapel',
                as: 'data_nilai'
            }
        },
        {
            $match: { 'data_mapel.nama_mapel': { $eq: "Pemrograman Dasar Web"}}
        },
        {
            $sort: { 'data_kelas.kode_kelas': 1}
        }
    ]).toArray(function(err, res){
        if(err) throw err
        console.log(JSON.stringify(res,null,2))
        db.close()
    })
})