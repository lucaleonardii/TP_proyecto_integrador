import { Schema, model } from "mongoose";

const productSchema = new Schema(
  {
    pId: {type: String},
    pName: {
      type: String,
      require: true,
      trim: true,
    },
    pPrice: {
      type: Number,
      require: true,
    },
    pStock: {
      type: Number,
      require: true,
    },
    pBrand: {
      type: String,
      trim: true,
    },
    pCategory: {
      type: String,
      trim: true,
    },
    pShortDesc: {
      type: String,
      trim: true,
      require: true,
    },
    pLongDesc: {
      type: String,
      trim: true,
      require: true,
    },
    pShipping: {
      type: Boolean,
      default: false,
    },
    pMinAge: {
      type: Number,
      require: true,
    },
    pMaxAge: {
      type: Number,
      require: true,
    },
    pPicture: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Product", productSchema);
