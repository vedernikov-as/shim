import { MysqlError } from "mysql";
import * as MySql from "mysql";

export class Mysql {
    private inst: MySql.Connection;
    constructor(
        readonly username: string,
        readonly password: string,
        readonly database: string,
        readonly host: string = "127.0.0.1"
    ) {}
    public connect() {
        console.log(
            JSON.stringify({
                host: this.host,
                user: this.username,
                password: this.password,
                database: this.database,
            })
        );
        this.inst = MySql.createConnection({
            host: this.host,
            user: this.username,
            password: this.password,
            database: this.database,
        });
    }

    public select(sql: string): Promise<any> {
        return new Promise((resolve, reject) => {
            this.inst.query(sql, (err: MysqlError, result) => {
                if (err) {
                    reject(err.sqlMessage);
                }
                resolve(result);
            });
        });
    }
}
