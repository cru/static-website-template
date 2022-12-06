import { buildConfig } from "payload/config";
import Announcements from "./collections/Announcements";
import Media from "./collections/Media";
import Partners from "./collections/Partners";
import People from "./collections/People";
import Users from "./collections/Users";

export default buildConfig({
  serverURL: process.env.PAYLOAD_URL || "http://localhost:3000",
  admin: {
    user: Users.slug,
  },
  collections: [Users, Announcements, People, Partners, Media],
});
