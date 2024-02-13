import { execSync } from 'child_process'

export default function screenshot(fileName: string) {
    execSync(`./screenshot.AppImage --file ${fileName}`)
}