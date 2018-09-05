import express, { Request, Response } from "express";
import fs from "fs";
import path from "path";
import { TestApi } from "./api/TestApi";

const app = express();



app.get(/\/([a-z0-9]+\.(js|html|css|map))?$/, (request: Request, response: Response) => {
    const fname = request.path.substring(1);
    const filePath = path.resolve(__dirname, "../../app/", "front", fname || "index.html");
    console.log(request.path);
    if (fs.existsSync(filePath)) {
        response.sendFile(filePath);
    } else {
        response.send("4045");
    }
});
app.get(/\/api\/[a-zA-Z0-9]+/, async (request: Request, response: Response) => {
    const apiName = request.path.substring(5);
    console.log(apiName);
    if (apiName === "test") {
        try {
            const result = await TestApi.getDocuments();
            response.json(result);
        } catch (e) {
            response.json(e);
        }
    } else {
        response.send("1111" + apiName);
    }
});

app.listen(3000, () => {
    console.log("Example app listening on port 3000!");
});
// var express = require('express');
// var app = express();
//
// app.get('/', function (req, res) {
//     res.send('Hello World!');
// });
//
// app.listen(3000, function () {
//     console.log('Example app listening on port 3000!');
// });
//
