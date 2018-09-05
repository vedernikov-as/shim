import { documents } from "../../../test.dto";
import { ITestApi } from "../../domain/api/ITestApi";

class TestApiClass implements ITestApi {
    public async getDocuments(): Promise<documents[]> {
        const response = await fetch("/api/test");
        const res = await response.json();
        return res as documents[];
    }
}

export const TestApi = new TestApiClass();
