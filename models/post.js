import { models, model, Schema } from "mongoose";

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category", // "Category" modeline referans
    },
    tags: [String],
    author: {
      type: Schema.Types.ObjectId,
      ref: "User", // "User" modeline referans
    },
  },
  {
    timestamps: true,
  }
);

const Post = models.Post || model("Post", postSchema);

export default Post;
