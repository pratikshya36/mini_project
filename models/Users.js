"use strict"
module.exports = function(sequelize,Datatypes){
	var Users = sequelize.define("Users",{
		id:{
			type : Datatypes.INTEGER,
			unique : true,
			autoIncrement : true,
			allowNull : false,
			primaryKey : true
		},
		userName:{
			type : Datatypes.STRING,
			unique : true,
			autoIncrement : false
		},
		password :{
			type: Datatypes.STRING,
			allowNull: false
		},
	},{
		freezeTableName: true
	});
	return Users;
};