import mongoose from "mongoose";

// 创建user schema数据类型
const UserSchema = new mongoose.Schema(
  {
    username: {type:Stir},
    password: String ,
  },
  // 时间戳
  { timestamps: true },
);
