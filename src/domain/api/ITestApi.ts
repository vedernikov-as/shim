import { documents } from "../../../test.dto";

export interface ITestApi {
    getDocuments(): Promise<documents[]>;
}
