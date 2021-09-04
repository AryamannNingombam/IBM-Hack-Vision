const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const FamilySchema = new Schema({
    location:{
        type:String,
        required:true,
    }
    ageGroups:{

    },
    foodPreference:{

    }    
})