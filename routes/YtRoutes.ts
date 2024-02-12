import express from "express";
import { ScrapVideo } from "../controller/YtCtrl";
import ytdl from "ytdl-core";

const router = express.Router();

router.post("/scrapVideo", ScrapVideo);

// router.post("/api/download", async (req, res) => {
//     const { videoLink } = req.body;
//     console.log(videoLink, "videoLink:");
//     try {
//       console.log("our video:", videoLink);
//       const videoStream = ytdl(videoLink, { quality: "highest" });
//       res.setHeader("Content-Type", "video/mp4");
//       res.setHeader("Content-Disposition", 'attachment; filename="video.mp4"');
//       videoStream.pipe(res);
//     } catch (error) {
//       console.error("Error downloading video:", error);
//       res.status(500).json({ error: "Error downloading video" });
//     }
//   });

export = router;
