import mongoose, {Schema, Types, model,} from 'mongoose';

const schema = new Schema({
    
    content: String,

    attachments: [
        {
            public_id: {
                type: String,
                required: true,
            },
            url: {
                type: String,
                required: true,
            },
        },
    ],

    sender : {
        type: Types.ObjectId,
        ref: "User",
        requider: true,
    },
    chat : {
        type: Types.ObjectId,
        ref: "Chat",
        requider: true,
    },
},
{
    timestamps: true,
});

export const Message = mongoose.models.Message || model("Message", schema);