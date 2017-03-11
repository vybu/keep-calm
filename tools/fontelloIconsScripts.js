const fs = require('fs');

// get sybols from fontello.com customized cards;
// JSON.stringify(Array.from(document.querySelectorAll('.char-editable')).map(i => i.value));


function replaceCodesWithSymbolsInConfig() {

    const symbols = ["←", "↑", "↓", "↔", "↕", "↖", "↗", "↘", "↙", "▲", "▼", "◀", "▶", "➔", "➘", "➙", "➚", "➛", "➜", "➝", "➞", "➟", "➠", "➡", "➢", "➣", "➤", "➥", "➦", "↪", "↩", "↛", "↜", "↝", "↞", "↟", "↠", "↡", "↢", "↣", "↤", "↦", "↥", "↧", "↨", "↫", "↬", "↭", "↮", "↯", "↰", "↱", "↲", "↴", "↳", "↵", "↶", "↷", "↸", "↹", "↺", "↻", "⟲", "⟳", "↼", "↽", "↾", "↿", "⇀", "⇁", "⇂", "⇃", "⇄", "⇅", "⇆", "⇇", "⇐", "⇝", "⇒", "1", "⇔", "⇌", "⇍", "⇏", "⇕", "⇖", "⇗", "⇘", "", "⇙", "⇳", "⇚"];

    try {
        const config = JSON.parse(fs.readFileSync(process.argv[2], 'utf-8'));
        const newSymbolsConf = config.glyphs.map((s, i) => {
            return {
                symbol: symbols[i],
                name: s.css,
                fontFamily: 'fontello'
            };
        });

        fs.writeFileSync('tempIconConf.json', JSON.stringify(newSymbolsConf, 1, 2));

    } catch (e) {
        console.error('Failed', e)
    }
}


replaceCodesWithSymbolsInConfig()