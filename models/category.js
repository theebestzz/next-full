import { models, model, Schema } from "mongoose";

const categorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: String,
  },
  {
    timestamps: true,
  }
);

const Category = models.Category || model("Category", categorySchema);

export default Category;
