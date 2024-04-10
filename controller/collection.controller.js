import Collection from "../models/collection.model.js";
import UpdateTracking from "../models/updatecount.model.js";
import { errorHandler } from "../utils/error.js";


export const getCollection = async (req, res, next) => {
    try {
        const collections = await Collection.find();
        const updateCount = await UpdateTracking.findOne(); 
        res.status(200).json({ collections, updateCount });
    } catch (error) {
        next(error);
    }
};

export const addCollection = async(req,res,next) =>{
     const {text} = req.body;
     if(!text || text === ''){
        return next(errorHandler(401,'All Fileds are required'));
     }
     const newCollection = new Collection({text});
     try {
        await newCollection.save();
        res.status(200).json({message:'Added Successfully'});
     } catch (error) {
        next(error);
     }
}

export const updateCollection = async(req,res,next) =>{
    const {text} = req.body;
    const collectionId = req.params.collectionId;
    if(!text || text === ''){
        return next(errorHandler(401,'All Fileds are required'));
     }
    const collection = await Collection.findById(collectionId);
    const updateCount = await UpdateTracking.findOne(); 
    if(!collection){
      return  next(errorHandler(404, 'Collection not found'));
    }
    
    try {
        collection.text = text;
        await collection.save();
        if(updateCount){
            updateCount.update_count += 1;
            await updateCount.save();
        }else{
            await UpdateTracking.create({ update_count: 1 });
        }
        res.status(200).json({ message: 'Collection updated successfully' });
    } catch (error) {
        next(error)
    }
}