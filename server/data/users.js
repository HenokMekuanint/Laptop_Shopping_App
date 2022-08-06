import bcrypt from "bcryptjs"
const users = [
    {
      name:"Admin",
      email:"admin@example.com",
      password:bcrypt.hashSync("12345",10),
      isAdmin:true,
    },
    {
      name:"User",
      email:"User@example.com",
      password:bcrypt.hashSync("12345",10),
      isAdmin:true,
    }
  ];
  
  export default users;
  