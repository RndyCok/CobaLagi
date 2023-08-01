require("dotenv").config();

let gg = process.env.MODS;
if (!gg) {
  gg = "6283897011555";   // You can replace this number with yours //
}


global.owner = gg.split(",");
global.mongodb = process.env.MONGODB || "mongodb+srv://randygans071:OnIvyYi1c94z6REa@cluster0.dnauwrh.mongodb.net/?retryWrites=true&w=majority";
global.sessionId = process.env.SESSION_ID || "ok";
global.prefa = process.env.PREFIX || ".";
global.tenorApiKey = process.env.TENOR_API_KEY || "AIzaSyCyouca1_KKy4W_MG1xsPzuku5oa8W358c";
global.packname = process.env.PACKNAME || `Kmalas-Md`;
global.author = process.env.AUTHOR || "by: Rndy";
global.port = process.env.PORT || "10000";
global.openAiAPI = process.env.OPENAI_API || "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";
global.owner = gg.split(",");

module.exports = {
  mongodb: global.mongodb,
};
