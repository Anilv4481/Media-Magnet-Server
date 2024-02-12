import expressAsyncHandler from "express-async-handler";
import { AppRequest, AppResponse } from "../types";
import ytdl from "ytdl-core";
import { VServerUtils } from "../utils/VServerUtils";
import express from "express";

express().use(express.json());
// export const ScrapVideo = expressAsyncHandler(
//   async (req: AppRequest, res: AppResponse): Promise<any> => {
//     const { videoLink } = req.body;
//     console.log(videoLink, "videoLink:");
//     try {
//       console.log("our video:", videoLink);
//       const videoStream = ytdl(videoLink, { quality: "highest" });
//       res.setHeader("Content-Type", "video/mp4");
//       res.setHeader("Content-Disposition", 'attachment; filename="video.mp4"');
//       // return res.json(VServerUtils.resSuccess(videoStream.pipe(res)));
//       console.log(videoStream.pipe(res), "videoStream.pipe(res);");
//       // return videoStream.pipe(res);
//       return res.json(videoStream.pipe(res));
//     } catch (error) {
//       console.error("Error downloading video:", error);
//       res.status(500).json({ error: "Error downloading video" });
//     }
//   }
// );

// export const ScrapVideo = expressAsyncHandler(
//   async (req: AppRequest, res: AppResponse): Promise<any> => {
//     const { videoLink } = req.body;
//     console.log(videoLink, "videoLink:");
//     try {
//       if (!videoLink) {
//         throw new Error("Video link is missing in the request body");
//       }

//       console.log("our video:", videoLink);
//       const videoStream = ytdl(videoLink, { quality: "highest" });

//       // Read the video stream into a buffer
//       const buffers: Buffer[] = [];
//       for await (const chunk of videoStream) {
//         buffers.push(chunk);
//       }
//       const videoBuffer = Buffer.concat(buffers);

//       // Convert the buffer to an ArrayBuffer
//       const arrayBuffer = videoBuffer.buffer.slice(
//         videoBuffer.byteOffset,
//         videoBuffer.byteOffset + videoBuffer.byteLength
//       );

//       // Set response headers
//       res.setHeader("Content-Type", "application/octet-stream");
//       res.setHeader("Content-Disposition", 'attachment; filename="video.mp4"');

//       // Send the ArrayBuffer as the response
//       console.log(arrayBuffer, "arrayBuffer");
//       res.json(arrayBuffer);
//     } catch (error) {
//       console.error("Error downloading video:", error);
//       res.status(500).json({ error: "Error downloading video" });
//     }
//   }
// );

export const ScrapVideo = expressAsyncHandler(
  async (req: AppRequest, res: AppResponse): Promise<any> => {
    const { videoLink } = req.body;
    console.log(videoLink, "videoLink:");
    try {
      console.log("our video:", videoLink);
      const videoStream = ytdl(videoLink, { quality: "highest" });
      res.setHeader("Content-Type", "video/mp4");
      res.setHeader("Content-Disposition", 'attachment; filename="video.mp4"');
      return videoStream.pipe(res);
    } catch (error) {
      console.error("Error downloading video:", error);
      res.status(500).json({ error: "Error downloading video" });
    }
  }
);
