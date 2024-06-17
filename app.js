const express = require("express");
const app = express();

async function honkaiInfo(user) {
    const res = await fetch(`htpps://api.mihomo.me/sr_info_parsed/${user}`);
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