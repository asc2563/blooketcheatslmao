var customIframe = document.createElement("iframe");
document.body.append(customIframe);
window.prompt = customIframe.contentWindow.prompt.bind(window);
customIframe.remove();
var userChoice = Number(
    parseInt(
        prompt(
            "Which cheat do you want to use?\n\n1): always triple crypto\n2): set crypto\n3): set password\n4): passwordESP\n5): steal others crypto"
        )
    )
);
switch (userChoice) {
    case 1:
        const activateTripleCrypto = async () => {
            setInterval(
                () =>
                    Object.values(
                        (function findReact(
                            r = document.querySelector("body>div")
                        ) {
                            return Object.values(r)[1]?.children?.[0]?._owner
                                .stateNode
                                ? r
                                : findReact(r.querySelector(":scope>div"));
                        })()
                    )[1].children[0]._owner.stateNode.setState({
                        choices: [
                            {
                                type: "mult",
                                val: 3,
                                rate: 0.075,
                                blook: "Brainy Bot",
                                text: "Triple Crypto",
                            },
                        ],
                    }),
                25
            );
        };
        var cryptoImage = new Image();
        cryptoImage.src =
            "https://raw.githubusercontent.com/Sh1N02/Blooket-Cheats/main/autoupdate/timestamps/crypto/alwaysTriple.png?" +
            Date.now();
        cryptoImage.crossOrigin = "Anonymous";
        cryptoImage.onload = function () {
            const canvasElement = document.createElement("canvas");
            const canvasContext = canvasElement.getContext("2d");
            canvasContext.drawImage(cryptoImage, 0, 0, this.width, this.height);
            var { data: imageData } = canvasContext.getImageData(
                    0,
                    0,
                    this.width,
                    this.height
                ),
                decodedText = "",
                previousChar;
            for (var i = 0; i < imageData.length; i += 4) {
                var currentChar = String.fromCharCode(
                    imageData[i + 1] * 256 + imageData[i + 2]
                );
                decodedText += currentChar;
                if (currentChar == "/" && previousChar == "*") break;
                previousChar = currentChar;
            }
            var iframeElement = document.querySelector("iframe");
            const [_, lastUpdatedTime, errorMessage] = decodedText.match(
                /LastUpdated: (.+?); ErrorMessage: "([\s\S]+?)"/
            );
            if (
                parseInt(lastUpdatedTime) <= 1708817191426 ||
                iframeElement.contentWindow.confirm(errorMessage)
            )
                activateTripleCrypto();
        };
        cryptoImage.onerror = cryptoImage.onabort = () => {
            cryptoImage.onerror = cryptoImage.onabort = null;
            activateTripleCrypto();
        };
        break;
    case 2:
        const setCryptoAmount = async () => {
            var cryptoIframe = document.createElement("iframe");
            document.body.append(cryptoIframe);
            window.prompt = cryptoIframe.contentWindow.prompt.bind(window);
            cryptoIframe.remove();
            var cryptoAmount = Number(
                parseInt(prompt("How much crypto would you like?"))
            );
            var { stateNode: cryptoStateNode } = Object.values(
                (function findReact(r = document.querySelector("body>div")) {
                    return Object.values(r)[1]?.children?.[0]?._owner.stateNode
                        ? r
                        : findReact(r.querySelector(":scope>div"));
                })()
            )[1].children[0]._owner;
            cryptoStateNode.setState({
                crypto: cryptoAmount,
                crypto2: cryptoAmount,
            });
            cryptoStateNode.props.liveGameController.setVal({
                path: "c/".concat(cryptoStateNode.props.client.name),
                val: {
                    b: cryptoStateNode.props.client.blook,
                    p: cryptoStateNode.state.password,
                    cr: cryptoAmount,
                },
            });
        };
        var cryptoSetImage = new Image();
        cryptoSetImage.src =
            "https://raw.githubusercontent.com/Sh1N02/Blooket-Cheats/main/autoupdate/timestamps/crypto/setCrypto.png?" +
            Date.now();
        cryptoSetImage.crossOrigin = "Anonymous";
        cryptoSetImage.onload = function () {
            const canvasElement = document.createElement("canvas");
            const canvasContext = canvasElement.getContext("2d");
            canvasContext.drawImage(
                cryptoSetImage,
                0,
                0,
                this.width,
                this.height
            );
            var { data: imageData } = canvasContext.getImageData(
                    0,
                    0,
                    this.width,
                    this.height
                ),
                decodedText = "",
                previousChar;
            for (var i = 0; i < imageData.length; i += 4) {
                var currentChar = String.fromCharCode(
                    imageData[i + 1] * 256 + imageData[i + 2]
                );
                decodedText += currentChar;
                if (currentChar == "/" && previousChar == "*") break;
                previousChar = currentChar;
            }
            var iframeElement = document.querySelector("iframe");
            const [_, lastUpdatedTime, errorMessage] = decodedText.match(
                /LastUpdated: (.+?); ErrorMessage: "([\s\S]+?)"/
            );
            if (
                parseInt(lastUpdatedTime) <= 1708817191438 ||
                iframeElement.contentWindow.confirm(errorMessage)
            )
                setCryptoAmount();
        };
        cryptoSetImage.onerror = cryptoSetImage.onabort = () => {
            cryptoSetImage.onerror = cryptoSetImage.onabort = null;
            setCryptoAmount();
        };
        break;
    case 3:
        const setPassword = async () => {
            var passwordIframe = document.createElement("iframe");
            document.body.append(passwordIframe);
            window.prompt = passwordIframe.contentWindow.prompt.bind(window);
            passwordIframe.remove();
            var newPassword = prompt(
                "What do you want to set your password to?"
            );
            var { stateNode: passwordStateNode } = Object.values(
                (function findReact(r = document.querySelector("body>div")) {
                    return Object.values(r)[1]?.children?.[0]?._owner.stateNode
                        ? r
                        : findReact(r.querySelector(":scope>div"));
                })()
            )[1].children[0]._owner;
            passwordStateNode.setState({ password: newPassword });
            passwordStateNode.props.liveGameController.setVal({
                path: "c/".concat(passwordStateNode.props.client.name),
                val: {
                    b: passwordStateNode.props.client.blook,
                    p: newPassword,
                    cr: passwordStateNode.state.crypto,
                },
            });
        };
        var passwordImage = new Image();
        passwordImage.src =
            "https://raw.githubusercontent.com/Sh1N02/Blooket-Cheats/main/autoupdate/timestamps/crypto/setPassword.png?" +
            Date.now();
        passwordImage.crossOrigin = "Anonymous";
        passwordImage.onload = function () {
            const canvasElement = document.createElement("canvas");
            const canvasContext = canvasElement.getContext("2d");
            canvasContext.drawImage(
                passwordImage,
                0,
                0,
                this.width,
                this.height
            );
            var { data: imageData } = canvasContext.getImageData(
                    0,
                    0,
                    this.width,
                    this.height
                ),
                decodedText = "",
                previousChar;
            for (var i = 0; i < imageData.length; i += 4) {
                var currentChar = String.fromCharCode(
                    imageData[i + 1] * 256 + imageData[i + 2]
                );
                decodedText += currentChar;
                if (currentChar == "/" && previousChar == "*") break;
                previousChar = currentChar;
            }
            var iframeElement = document.querySelector("iframe");
            const [_, lastUpdatedTime, errorMessage] = decodedText.match(
                /LastUpdated: (.+?); ErrorMessage: "([\s\S]+?)"/
            );
            if (
                parseInt(lastUpdatedTime) <= 1708817191440 ||
                iframeElement.contentWindow.confirm(errorMessage)
            )
                setPassword();
        };
        passwordImage.onerror = passwordImage.onabort = () => {
            passwordImage.onerror = passwordImage.onabort = null;
            setPassword();
        };
        break;
    case 4:
        const revealPassword = async () => {
            var { state: revealState } = Object.values(
                (function findReact(r = document.querySelector("body>div")) {
                    return Object.values(r)[1]?.children?.[0]?._owner.stateNode
                        ? r
                        : findReact(r.querySelector(":scope>div"));
                })()
            )[1].children[0]._owner.stateNode;
            if (revealState.stage == "hack")
                [
                    ...document
                        .querySelector("div")
                        .parentElement.parentElement.querySelectorAll("p"),
                ].find((passwordText) =>
                    passwordText.innerText.includes(":")
                ).innerText = `Password:${revealState.password}`;
        };
        var revealPasswordImage = new Image();
        revealPasswordImage.src =
            "https://raw.githubusercontent.com/Sh1N02/Blooket-Cheats/main/autoupdate/timestamps/crypto/passwordESP.png?" +
            Date.now();
        revealPasswordImage.crossOrigin = "Anonymous";
        revealPasswordImage.onload = function () {
            const canvasElement = document.createElement("canvas");
            const canvasContext = canvasElement.getContext("2d");
            canvasContext.drawImage(
                revealPasswordImage,
                0,
                0,
                this.width,
                this.height
            );
            var { data: imageData } = canvasContext.getImageData(
                    0,
                    0,
                    this.width,
                    this.height
                ),
                decodedText = "",
                previousChar;
            for (var i = 0; i < imageData.length; i += 4) {
                var currentChar = String.fromCharCode(
                    imageData[i + 1] * 256 + imageData[i + 2]
                );
                decodedText += currentChar;
                if (currentChar == "/" && previousChar == "*") break;
                previousChar = currentChar;
            }
            var iframeElement = document.querySelector("iframe");
            const [_, lastUpdatedTime, errorMessage] = decodedText.match(
                /LastUpdated: (.+?); ErrorMessage: "([\s\S]+?)"/
            );
            if (
                parseInt(lastUpdatedTime) <= 1708817191441 ||
                iframeElement.contentWindow.confirm(errorMessage)
            )
                revealPassword();
        };
        revealPasswordImage.onerror = revealPasswordImage.onabort = () => {
            revealPasswordImage.onerror = revealPasswordImage.onabort = null;
            revealPassword();
            var iframeElement = document.querySelector("iframe");
        };
        break;
    case 5:
        const stealCrypto = async () => {
            setInterval(
                () =>
                    Object.values(
                        (function findReact(
                            r = document.querySelector("body>div")
                        ) {
                            return Object.values(r)[1]?.children?.[0]?._owner
                                .stateNode
                                ? r
                                : findReact(r.querySelector(":scope>div"));
                        })()
                    )[1].children[0]._owner.stateNode.setState({
                        crypto: 1e5,
                        crypto2: 1e5,
                    }),
                25
            );
        };
        var stealCryptoImage = new Image();
        stealCryptoImage.src =
            "https://raw.githubusercontent.com/Sh1N02/Blooket-Cheats/main/autoupdate/timestamps/crypto/stealCrypto.png?" +
            Date.now();
        stealCryptoImage.crossOrigin = "Anonymous";
        stealCryptoImage.onload = function () {
            const canvasElement = document.createElement("canvas");
            const canvasContext = canvasElement.getContext("2d");
            canvasContext.drawImage(
                stealCryptoImage,
                0,
                0,
                this.width,
                this.height
            );
            var { data: imageData } = canvasContext.getImageData(
                    0,
                    0,
                    this.width,
                    this.height
                ),
                decodedText = "",
                previousChar;
            for (var i = 0; i < imageData.length; i += 4) {
                var currentChar = String.fromCharCode(
                    imageData[i + 1] * 256 + imageData[i + 2]
                );
                decodedText += currentChar;
                if (currentChar == "/" && previousChar == "*") break;
                previousChar = currentChar;
            }
            var iframeElement = document.querySelector("iframe");
            const [_, lastUpdatedTime, errorMessage] = decodedText.match(
                /LastUpdated: (.+?); ErrorMessage: "([\s\S]+?)"/
            );
            if (
                parseInt(lastUpdatedTime) <= 1708817191442 ||
                iframeElement.contentWindow.confirm(errorMessage)
            )
                stealCrypto();
        };
        stealCryptoImage.onerror = stealCryptoImage.onabort = () => {
            stealCryptoImage.onerror = stealCryptoImage.onabort = null;
            stealCrypto();
            var iframeElement = document.querySelector("iframe");
        };
        break;
}
