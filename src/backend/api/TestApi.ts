import { documents } from "../../../test.dto";
import { ITestApi } from "../../domain/api/ITestApi";
import { Mysql } from "../utils/Mysql";
import { ApiBase } from "./ApiBase";

class TestApiClass extends ApiBase implements ITestApi {
    public getDocuments(): Promise<documents[]> {
        const mysql = new Mysql("root", "", "test");
        mysql.connect();
        return mysql.select("select * from documents");
    }
}

export const TestApi = new TestApiClass();
