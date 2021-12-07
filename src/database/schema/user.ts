import mongoose, { Schema, Document, PaginateModel, Date } from "mongoose";
import { mongoosePagination } from "ts-mongoose-pagination";

export interface IHistory {
	exchangeTime: number;
	coinSymbol: string;
	balance: number;
}

export interface IUser extends Document {
	name: string;
	email: string;
	password: string;
	profileId: string;
	isActive: boolean;
	balanceHistory: Array<IHistory>;
	createdAt: Date | undefined;
	updatedAt: Date | undefined;
}

const UserSchema: Schema = new Schema({
	name: {
		type: String,
	},
	email: {
		type: String,
	},
	password: {
		type: String,
	},
	profileId: {
		type: String,
		unique: true,
	},
	isActive: Boolean,
	balanceHistory: [
		{
			exchangeTime: Number,
			coinSymbol: String,
			balance: Number,
		},
	],
	createdAt: {
		type: Date,
		default: Date(),
	},
	updatedAt: {
		type: Date,
		default: Date(),
	},
});

UserSchema.plugin(mongoosePagination);
const User: PaginateModel<IUser> = mongoose.model("users", UserSchema, "users");
export default User;
