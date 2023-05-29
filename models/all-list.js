import Contact from "./contact.js";
import User from "./user.js";

export default function modelsSync()
{
  User.sync()
  Contact.sync()
}