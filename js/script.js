function saveResult(k, s, t) {
    const r = JSON.parse(localStorage.getItem('results') || '{}');
    r[k] = {
        score: s,
        total: t,
        percent: Math.round(s / t * 100),
        ts: Date.now()
    };
    localStorage.setItem('results', JSON.stringify(r));
}

function getResults() {
    return JSON.parse(localStorage.getItem('results') || '{}');
}

function averagePercent() {
    const r = getResults();
    const v = Object.values(r).map(x => x.percent);
    if (!v.length) return 0;
    return Math.round(v.reduce((a, b) => a + b, 0) / v.length);
}
