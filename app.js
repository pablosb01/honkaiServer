const express = require("express");
const app = express();
const cors = require('cors')

app.use(cors())

async function honkaiInfo(user) {
    const res = await fetch(`https://api.mihomo.me/sr_info_parsed/${user}?lang=es`);
    const data = await res.json();
    return data;
}

app.get("/honkai/:user", async (req, res) => {
    const { user } = req.params;
    try {
        const info = await honkaiInfo(user)
        res.send(info);
    } catch (error) {
        res.send(error);
    }
});

app.listen(3000, () => console.log('running'))

/* async function honkaiInfo(user, lang) {
    const res = await fetch(`https://api.mihomo.me/sr_info_parsed/${user}?lang=${lang}`);
    const data = await res.json();
    return data;
}

app.get("/honkai/:user/:lang", async (req, res) => {
    const { user, lang } = req.params;
    try {
        const info = await honkaiInfo(user, lang)
        res.send(info);
    } catch (error) {
        res.send(error);
    }
});

app.listen(3000, () => console.log('running')) */
