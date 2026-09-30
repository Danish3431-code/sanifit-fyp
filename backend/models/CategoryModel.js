const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String }, // No default value here
  image: { type: String, default: "/images/tablets-category.png" },
  attrs: [{ key: { type: String }, value: [{ type: String }] }],
});

// Pre-save middleware to set the description
categorySchema.pre("save", function (next) {
  if (this.isModified("name") || this.isNew) {
    this.description =
      this.name +
      " -  Browse our collection of beautifully crafted items that will add flare to your home.";
  }
  next();
});

categorySchema.index({ description: 1 });

const Category = mongoose.model("Category", categorySchema);
module.exports = Category;
