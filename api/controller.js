const PatientModel = require('./models')

exports.apiInit = (req, res) => res.json({status: 'live'})

exports.createPatient = (req, res) => {

    // server validation

    // save to db
    const patient = new PatientModel(req.body)

    console.log({patient}) 

    patient.save(function(err, data){
        console.log({err})
        return res.json(data)
    })
}