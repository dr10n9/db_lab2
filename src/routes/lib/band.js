
const Band  = require('../../database').Band;
const model  = new Band()
const router = require('express').Router();

router.get('/', async (req, res) => {
    console.log(req.path);
    model.getAll()
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.send(err);
        });
});

router.get('/id=:id', (req, res) => {
    model.get(req.params.id)
        .then(data => {
            if(data == null) res.json({mes: 'collection is empty'});
            else res.send(data);        })
        .catch(err => {
            res.send(err);
        });
});

router.post('/create', (req, res) => {
    // res.send(req.body);
    model.create(req.body)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.send(err);
        });
});

router.post('/update', (req, res)=>{
    if(req.query.id){
        model.update(req.query.id, req.body)
            .then(data => {
                if(data == null) res.json({mes: `no id=${req.query.id}`});
                else res.send(data);
            })
            .catch(err => {
                res.send(err);
            });
    } else res.json({mes: 'no id'});
});

router.post('/delete', (req, res) => {
    if(req.query.id){
        model.delete(req.query.id)
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                console.log(err);
                res.send(err);
            });
    } else res.json({mes: 'no id'});
});

module.exports.router = router;