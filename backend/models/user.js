import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isBlocked: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    default: "customer",
  },
  profilePicture: {
    type: String,
    default:
      "https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
});

const User = mongoose.model("user", userSchema);
export default User;

//customer
//customer@gmail.com
//Tasheen@1234
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImN1c3RvbWVyQGdtYWlsLmNvbSIsImZpcnN0TmFtZSI6IlRhc2hlZW4iLCJsYXN0TmFtZSI6IkRhcnNoaWthIiwiaXNCbG9ja2VkIjpmYWxzZSwidHlwZSI6ImN1c3RvbWVyIiwicHJvZmlsZVBpY3R1cmUiOiJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUxMTM2NzQ2MTk4OS1mODVhMjFmZGExNjc_cT04MCZ3PTEwMzEmYXV0bz1mb3JtYXQmZml0PWNyb3AmaXhsaWI9cmItNC4xLjAmaXhpZD1NM3d4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OGZBJTNEJTNEIiwiaWF0IjoxNzUxMjI3NTQ2fQ.gKBpeX-Cq4GTqoerO-oPbhPQ9eHpPjRPmOFqgYABjF4

//admin
//admin@gmail.com
//Tasheen@1234
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImZpcnN0TmFtZSI6IlRhc2hlZW4iLCJsYXN0TmFtZSI6IkRhcnNoaWthIiwiaXNCbG9ja2VkIjpmYWxzZSwidHlwZSI6ImFkbWluIiwicHJvZmlsZVBpY3R1cmUiOiJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUxMTM2NzQ2MTk4OS1mODVhMjFmZGExNjc_cT04MCZ3PTEwMzEmYXV0bz1mb3JtYXQmZml0PWNyb3AmaXhsaWI9cmItNC4xLjAmaXhpZD1NM3d4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OGZBJTNEJTNEIiwiaWF0IjoxNzUxMjI2OTg1fQ.1OgoG-Ds55oyGnXz7e_bwsiM8I0trZcBDDGN8SwnfbQ