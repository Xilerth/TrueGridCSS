const fs = require("fs");
const path = require("path");
items = [];
console.log("Creating file");
console.log(fs);
console.log(path);
for (let i = 1; i <= 12; i++) {
  if (i === 12) {
    items.push(`.tg-grid-${i} {
            grid-template-columns: ${i}fr;
        }`);
  }
  for (let j = 1; j <= 12; j++) {
    if (i + j === 12) {
      console.log(`.tg-grid-${i}-${j}`);
      items.push(`.tg-grid-${i}-${j} {
            grid-template-columns: ${i}fr ${j}fr;
        }`);
    }
    for (let k = 1; k <= 12; k++) {
      if (i + j + k === 12) {
        items.push(`.tg-grid-${i}-${j}-${k} {
                grid-template-columns: ${i}fr ${j}fr ${k}fr;
            }`);
      }
      for (let l = 1; l <= 12; l++) {
        if (i + j + k + l === 12) {
          items.push(`.tg-grid-${i}-${j}-${k}-${l} {
                grid-template-columns: ${i}fr ${j}fr ${k}fr ${l}fr;
            }`);
        }
        for (let m = 1; m <= 12; m++) {
          if (i + j + k + l + m === 12) {
            items.push(`.tg-grid-${i}-${j}-${k}-${l}-${m} {
                grid-template-columns: ${i}fr ${j}fr ${k}fr ${l}fr ${m}fr;
            }`);
          }
          for (let n = 1; n <= 12; n++) {
            if (i + j + k + l + m + n === 12) {
              items.push(`.tg-grid-${i}-${j}-${k}-${l}-${m}-${n} {
                    grid-template-columns: ${i}fr ${j}fr ${k}fr ${l}fr ${m}fr ${n}fr;
                }`);
            }
            for (let o = 1; o <= 12; o++) {
              if (i + j + k + l + m + n + o === 12) {
                items.push(`.tg-grid-${i}-${j}-${k}-${l}-${m}-${n}-${o} {
                        grid-template-columns: ${i}fr ${j}fr ${k}fr ${l}fr ${m}fr ${n}fr ${o}fr;
                    }`);
              }
              for (let p = 1; p <= 12; p++) {
                if (i + j + k + l + m + n + o + p === 12) {
                  items.push(`.tg-grid-${i}-${j}-${k}-${l}-${m}-${n}-${o}-${p} {
                        grid-template-columns: ${i}fr ${j}fr ${k}fr ${l}fr ${m}fr ${n}fr ${o}fr ${p}fr;
                    }`);
                }
                for (let q = 1; q <= 12; q++) {
                  if (i + j + k + l + m + n + o + p + q === 12) {
                    items.push(`.tg-grid-${i}-${j}-${k}-${l}-${m}-${n}-${o}-${p}-${q} {
                            grid-template-columns: ${i}fr ${j}fr ${k}fr ${l}fr ${m}fr ${n}fr ${o}fr ${p}fr ${q}fr;
                        }`);
                  }
                  for (let r = 1; r <= 12; r++) {
                    if (i + j + k + l + m + n + o + p + q + r === 12) {
                      items.push(`.tg-grid-${i}-${j}-${k}-${l}-${m}-${n}-${o}-${p}-${q}-${r} {
                            grid-template-columns: ${i}fr ${j}fr ${k}fr ${l}fr ${m}fr ${n}fr ${o}fr ${p}fr ${q}fr ${r}fr;
                        }`);
                    }
                    for (let s = 1; s <= 12; s++) {
                      if (i + j + k + l + m + n + o + p + q + r + s === 12) {
                        items.push(`.tg-grid-${i}-${j}-${k}-${l}-${m}-${n}-${o}-${p}-${q}-${r}-${s} {
                            grid-template-columns: ${i}fr ${j}fr ${k}fr ${l}fr ${m}fr ${n}fr ${o}fr ${p}fr ${q}fr ${r}fr ${s}fr;
                          }`);
                      }
                      for (let t = 1; t <= 12; t++) {
                        if (
                          i + j + k + l + m + n + o + p + q + r + s + t ===
                          12
                        ) {
                          items.push(`.tg-grid-${i}-${j}-${k}-${l}-${m}-${n}-${o}-${p}-${q}-${r}-${s}-${t} {
                            grid-template-columns: ${i}fr ${j}fr ${k}fr ${l}fr ${m}fr ${n}fr ${o}fr ${p}fr ${q}fr ${r}fr ${s}fr ${t}fr;
                          }`);
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}


const filePath = path.join(__dirname, "grid.css");
fs.writeFileSync(filePath, items.join("\n"));
console.log("File created");