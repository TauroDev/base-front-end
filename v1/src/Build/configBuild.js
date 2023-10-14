import fs from "fs-extra";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import Config from "../Constant/Config.json" assert { type: "json" };
import Params from "../Constant/Params.json" assert { type: "json" };
const args = process.argv.slice(2);
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const baseRute = resolve(__dirname, "..");

const tmpObject = {...Config}
if(args[0] == 'dev') {
    tmpObject.isProd = false
    tmpObject.Api = Params.Apis.Dev
} else {
    tmpObject.isProd = false;
    tmpObject.Api = Params.Apis.Prod
}


const newConfig = JSON.stringify(tmpObject)
fs.writeFileSync(`${baseRute}/Constant/Config.json`, newConfig);