import { Schema, model } from 'mongoose';

const collectioSchema = new Schema({
    text:{
        type:String,
        require:true
    }
})

const Collection = model('Collection',collectioSchema);

export default Collection;