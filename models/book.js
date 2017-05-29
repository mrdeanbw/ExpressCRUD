var mongoose = require('mongoose');

//Genre Schema
var bookSchema = mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    genre:{
        type :String,
        required : true
    },
    description : {
        type:String,
    },
    author:{
        type : String,
        required: true
    },
    publisher:{
        type :String
    },
    pages:{
        type:String
    },
    image_url:{
        type:String
    },
    buy_url:{
        type:String
    },
    
    create_date : {
        type : Date,
        default : Date.now
    }
});

var Book = module.exports = mongoose.model('Book', bookSchema);
//Get books
module.exports.getBooks = function(callback, limit){
    Book.find(callback).limit(limit);
}
//Get Book
module.exports.getBookById = function(id, callback){
    Book.findById(id,callback);
}

//Add Book
module.exports.addBook = function(book, callback){
    Book.create(book, callback);
}
//update Book
module.exports.updateBook = function(id, book, options, callback){
    var query = {_id : id};
    var update = {
        title : book.title,
        genre : book.genre,
        description : book.description,
        author : book.author,
        pages : book.pages,
        publisher : book.publisher
        
    }
    Book.findOneAndUpdate(query,update, options,callback);
}
// Delete Book
module.exports.removeBook = function(id,callback){
    var query = {_id : id};
    Book.remove(query, callback);
}