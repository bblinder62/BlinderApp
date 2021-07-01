
'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

var commentSchema = Schema( {
  words: String,
  userId: String,
  pageId:String,
  trueId:ObjectId,
  date:String

} );

module.exports = mongoose.model( 'commentModel', commentSchema );
