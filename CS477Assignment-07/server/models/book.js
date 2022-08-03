/* eslint-disable*/

const mongoose=require('mongoose');
const {Schema}=mongoose;
const bookSchema=new Schema({
    
            title:{typt:String,required:true},
             isbn:Number,
             publishedDate:Number,
            author:String

});
 const Model=mongoose.model('books',bookSchema);
 model.exports=Model;

























