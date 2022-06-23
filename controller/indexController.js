const {registerModel} =  require('../model/registerModel');
const {solveDistance} = require('../utilities/distances');
const {getMyLocation} = require('../utilities/externalapi');



function register(req, res){
    const {locationName, description, phone, contactPerson, clientCoordinate} = req.body;
    const newRecord = new registerModel({
        locationName,
        description,
        phone,
        contactPerson,
        clientCoordinate
    });
    newRecord.save((error, record)=>{
        if(error){
            console.log(error);
        }else {
            res.json(record);
        }
    })
}

async function distance(req, res){
    const location = await registerModel.findById(req.params.id);
    const coordinateOne = location.clientCoordinate;
    const coordinateTwo = await getMyLocation();
    console.log(coordinateOne, coordinateTwo);
    const response = await solveDistance(coordinateOne, coordinateTwo);
    console.log(response + 'm');
    res.json(response + 'm');

};


function deleteLocation(req, res){
    const userId = req.params.id;
    registerModel.findByIdAndDelete(userId, (error, user)=>{
        if(error)console.log(error);
        res.send('DELETED');
    });
};

function editLocation(req, res){
    const userId = req.params.id;
    const {locationName, description, phone, contactPerson, clientCoordinate} = req.body;
    registerModel.findByIdAndUpdate(userId, {
        locationName, description, phone, contactPerson, clientCoordinate
    }, {new:true}, (error, user)=>{
        if(error)console.log(error);
        res.send(user);
    });

};

function getAllLocation(req, res){
    registerModel.find((error, user)=>{
        if(error)console.log(error);
        res.json(user);
    })

};

function specificLocation(req, res){
    const userId = req.params.id;
    registerModel.findById(userId, (error, user)=>{
        if(error)console.log(error);
        res.json(user);
    });
};

module.exports = { register, distance, deleteLocation, editLocation, getAllLocation, specificLocation};