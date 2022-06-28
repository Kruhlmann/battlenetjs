import { Loggable } from "./loggable";

export class Logger implements Loggable {
    private class_identity: string;

    private constructor(class_identity: string) {
        this.class_identity = class_identity;
    }

    private format_message(level: string, message: string): string {
        return `[${level}] [${this.class_identity}] ${message}`;
    }

    public debug(message: string): void {
        console.log(this.format_message("DD", message));
    }

    public info(message: string): void {
        console.log(this.format_message("II", message));
    }

    public warning(message: string): void {
        console.log(this.format_message("WW", message));
    }

    public error(message: string): void {
        console.log(this.format_message("EE", message));
    }

    public static get_logger(parent: { constructor: { name: string } }): Logger {
        return new Logger(parent.constructor.name);
    }
}
