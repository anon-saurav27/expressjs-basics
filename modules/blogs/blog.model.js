const { Schema, model } = require("mongoose");

const blogSchema = new Schema(
  {
    author: String,
    title: { type: String, unique: true, required: true },
    slug: String,
    status: Array,
    content: String,
    // pictureUrl:
    updatedAt: { type: Date, default: Date.now },
    pages: Number,
  },
  { timestamps: true }
);

module.exports = new model("Blog", blogSchema);
