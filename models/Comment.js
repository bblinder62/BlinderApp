
'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

var commentSchema = Schema( {
  words: String,
  createdAt: Date,
  userId: ObjectId

} );

module.exports = mongoose.model( 'comment', commentSchema );
