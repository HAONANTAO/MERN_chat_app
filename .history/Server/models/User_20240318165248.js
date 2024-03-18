import mongoose from "mongoose";
// 在 Mongoose 中，Schema 和 Model 是两个核心的概念，它们分别用于定义数据模型的结构和操作数据库。
// 创建user schema数据类型
const UserSchema = new mongoose.Schema(
  {
    username: { type: String, unique: true },
    password: String,
  },
  // 时间戳
  { timestamps: true },
);

const UserModel = mongoose.model("User");
