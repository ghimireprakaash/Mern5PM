import User from "../models/User.js";

class UserTableSeeder {
  static async run() {
    let totalUsers = await User.countDocuments();

    if (totalUsers < 1) {
      const user = new User({
        name: "Admin",
        email: "admin@gmail.com",
        password: "admin",
        gender: "Male",
        role: "admin",
      });
      await user.save();
      console.log("Admin is created.");
    }
  }
}

export default UserTableSeeder;
