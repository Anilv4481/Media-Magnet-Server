import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { set } from "mongoose";
import morgan from "morgan";
import { initMongo } from "../config/dbConnect";
import { errorHandler, notFound } from "../middlewares/ErrorHandler";
import YtRoutes from "../routes/YtRoutes";
import ytdl from "ytdl-core";
const configEnv = dotenv.config();
const PORT = process.env.PORT || 4000;

const app = express();
set("strictQuery", false);
// try {
//   initMongo();
// } catch (ex: any) {
//   console.log("MongoDB Connection Fail. ", ex.message);
// }

app.use(cors() as any);
// using morgan here to know which request it passing through apis
app.use(morgan("dev"));
// Increase request size limit to 100MB
app.use(bodyParser.json({ limit: "100mb" }));
app.use(bodyParser.urlencoded({ limit: "100mb", extended: true }));
app.use(express.json());
// using cookieParser
app.use(cookieParser());
// user youtube
app.use("/api/yt", YtRoutes);

// app.post("/api/yt/scrapVideo", async (req, res) => {
//   const { videoLink } = req.body;
//   console.log(videoLink, "videoLink:");
//   try {
//     console.log("our video:", videoLink);
//     const videoStream = ytdl(videoLink, { quality: "highest" });
//     res.setHeader("Content-Type", "video/mp4");
//     res.setHeader("Content-Disposition", 'attachment; filename="video.mp4"');
//     videoStream.pipe(res);
//   } catch (error) {
//     console.error("Error downloading video:", error);
//     res.status(500).json({ error: "Error downloading video" });
//   }
// });

// keep in mind middleware always call after the route
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server Listen Port ${PORT}`);
});
