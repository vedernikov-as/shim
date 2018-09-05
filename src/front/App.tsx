import * as React from "react";
import { documents } from "../../test.dto";
import { TestApi } from "./api/TestApi";

interface AppState {
    docs: documents[];
}

export class App extends React.Component<{}, AppState> {
    public state: AppState = {
        docs: [],
    };
    public componentDidMount() {
        this.load();
    }

    public render() {
        return (
            <div>
                App
                {this.state.docs.map(doc => (
                    <div key={doc.id}>
                        <div>title: {doc.title}</div>
                        <div>content: {doc.content}</div>
                        <div>date_added: {doc.date_added}</div>
                        <div>group_id: {doc.group_id}</div>
                        <div>group_id2: {doc.group_id2}</div>
                    </div>
                ))}
            </div>
        );
    }

    private async load() {
        const docs = await TestApi.getDocuments();
        this.setState({ docs: docs });
    }
}
