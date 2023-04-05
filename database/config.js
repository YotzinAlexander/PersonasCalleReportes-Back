const express = require('express');
const mongoose = require('mongoose');
const oracle = require('oracledb');




const dbConnectionOracle = async ()  => {

    try {
        connection = await oracle.getConnection({
            user: "CONSULTAS",
            password: process.env.PASSWORDO,
            connectString: "10.11.102.31/a010rac"
        })

        console.log('BD ORACLE ONLINE')
        
    } catch (error) {
        console.log(error);
        throw new Error('Error al Conectar DB ORACLE');
    } finally {
        console.log('finally')
        if (connection) {
            console.log('entra')
            await connection.close();
          } 
        }
    
}

const dbConnection = async() => {
    mongoose.set("strictQuery", false);

    try {
        await mongoose.connect(process.env.DB_CNN, {
            useNewUrlParser: true,
            //useCreateIndex: true,
            useUnifiedTopology: true
        });

        console.log('BD ONLINE')
    } catch (error) {
        console.log(error);
        throw new Error('Error al conectar DB');
    }
}



module.exports = {
    dbConnection,
     dbConnectionOracle,
}



// lsof -i -P | grep -i "listen"

// kill -9 numero-id