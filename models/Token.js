import toJSON from './plugins/toJSON';

const { formToJSON } = require('axios');

const mongoose = require('mongoose');



const tokenSchema = mongoose.Schema(
    {
        token:{
            type:String,
            required: true,
            index:true,
        },
        user:{
            type:mongoose.SchemaTypes.ObjectId,
            ref:'User',
            required:true,
        },
        type:{
            type:String,
            default: true,
            required: "access",
        },
        expires:{
            type:Date,
            required: true,
        },
        blacklisted: {
            type: Boolean,
            default:false,
        },
    },
   { timestamps: true}
);

//addplugin that converts mongoose to json
tokenSchema.plugin(toJSON);

/**
 * @typedef token
 */

const Token = models.Token || mongoose.model('Token', tokenSchema);

export default Token;