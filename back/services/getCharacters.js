
/*

	Rien à toucher ici, renvoie toute la base de donnée

*/


const path = require('path')
const CharacterModel = require(path.join(__dirname, '..', 'models', 'CharacterModel'));


module.exports = (req,res,next) => {

	CharacterModel.find({}, (err, data)=>{
		res.json(data)
	})


}