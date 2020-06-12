const bd = require('./mysql1')


let leads = bd.seq.define('leads_novos', {
    nome: {
        allowNull: false,
        type: bd.sequelize.STRING,
        
    
    },

email: {
unique: true,
allowNull: false,
type: bd.sequelize.STRING,


},
telefone: {
type: bd.sequelize.STRING,

},
interesse1: {
    type: bd.sequelize.STRING,
    
    
},
interesse2: {
    type: bd.sequelize.STRING,
   
    
},
interesse3: {
    type: bd.sequelize.STRING,
   
},
interesse4: {
    type: bd.sequelize.STRING,
    
  
},
interesse5: {
    type: bd.sequelize.STRING,
    
  
}

    })
   
   //leads.sync({force: true})

    module.exports = leads