const mongoose = require('mongoose')

const WidgetsSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		type: {
			type: String,
			required: false,
		},
        quantity: {
			type: Number,
			required: false,
		},
        cost: {
			type: String,
			required: false,
		},
        manufacturer: {
			type: String,
			required: false,
		},
        madeAt: {
            type: String,
            required: false,
        },
        notes: {
            type: String,
            required: false,
        },
	},
	{
		timestamps: true,
	}
)

module.exports = mongoose.model('Widgets', WidgetsSchema)