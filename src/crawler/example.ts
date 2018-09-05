import { create } from "phantom";

(async () => {
    // console.log(await fetch('http://e1.ru'));
    // const instance = await create(undefined, {
    //     phantomPath: undefined,
    //     shimPath: undefined,
    //     logger: {
    //         info: () => console.log(JSON.stringify(arguments, undefined, 4)),
    //         debug: () => console.log(JSON.stringify(arguments, undefined, 4)),
    //         error: () => console.log(JSON.stringify(arguments, undefined, 4)),
    //         warn: () => console.log(JSON.stringify(arguments, undefined, 4)),
    //     },
    //     logLevel: "debug",
    // });
    const instance = await create();
    await instance.exit();
    // const page = await instance.createPage();
    // await page.on("onResourceRequested", requestData => {
    //     console.info("Requesting", requestData.url);
    // });
    //
    // // @ts-ignore
    // const status = await page.open("https://stackoverflow.com/");
    // const content = await page.property("content");
    // console.log(content);
    //
    // await instance.exit();
})();
