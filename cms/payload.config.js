import { buildConfig } from "payload/config";
import Announcements from "./collections/Announcements";
import Posts from "./collections/Posts";
import Users from "./collections/Users";

export default buildConfig({
  serverURL: process.env.PAYLOAD_URL || "http://localhost:3000",
  admin: {
    user: Users.slug,
  },
  collections: [Announcements, Posts, Users],
});
