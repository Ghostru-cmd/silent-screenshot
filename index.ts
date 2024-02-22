import { execSync } from 'child_process'
import * as path from "node:path";

export default function screenshot(fileName: string) {
    execSync(`${path.join(__dirname, 'screenshot.AppImage')} --file ${fileName}`)
}