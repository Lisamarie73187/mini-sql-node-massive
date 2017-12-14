module.exports ={
    getPlanes: (req ,res, next) => {
        const db = req.app.get('db');

        db.get_planes([25])
        .then(planes => {res.status(200)
        .send(planes)
    }).catch( err => {
        console.error(err);
        res.status(500).send(err);
    })
    }
}