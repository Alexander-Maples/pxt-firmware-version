/**
 * Firmware blocks
 */
//% weight=100 color=#008080 icon="" advanced=true
namespace firmware {
    /**
     * Determine the version of system software currently running.
     */
    //% block
    export function deviceFirmwareVersion(): string {
        let buf = output.createBuffer(6)
        brick.internal.getBtnsMM().read(buf)
        let r = ""
        for (let i = 0; i < buf.length; ++i) {
            let c = buf[i]
            if (c == 0) break
            r += String.fromCharCode(c)
        }
        return r
    }

}