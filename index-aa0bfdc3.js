(function () {
    const e = document.createElement('link').relList;
    if (e && e.supports && e.supports('modulepreload')) return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]')) n(i);
    new MutationObserver((i) => {
        for (const s of i) if (s.type === 'childList') for (const a of s.addedNodes) a.tagName === 'LINK' && a.rel === 'modulepreload' && n(a);
    }).observe(document, { childList: !0, subtree: !0 });
    function t(i) {
        const s = {};
        return (
            i.integrity && (s.integrity = i.integrity),
            i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy),
            i.crossOrigin === 'use-credentials' ? (s.credentials = 'include') : i.crossOrigin === 'anonymous' ? (s.credentials = 'omit') : (s.credentials = 'same-origin'),
            s
        );
    }
    function n(i) {
        if (i.ep) return;
        i.ep = !0;
        const s = t(i);
        fetch(i.href, s);
    }
})();
/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */ const mo = '151',
    Wn = { LEFT: 0, MIDDLE: 1, RIGHT: 2, ROTATE: 0, DOLLY: 1, PAN: 2 },
    qn = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 },
    Tc = 0,
    Bo = 1,
    Ac = 2,
    Sl = 1,
    Cc = 2,
    ki = 3,
    Zt = 0,
    ft = 1,
    Nt = 2,
    yn = 0,
    _i = 1,
    zo = 2,
    Go = 3,
    Vo = 4,
    Pc = 5,
    pi = 100,
    Lc = 101,
    Rc = 102,
    ko = 103,
    Ho = 104,
    Dc = 200,
    Ic = 201,
    Uc = 202,
    Nc = 203,
    bl = 204,
    wl = 205,
    Oc = 206,
    Fc = 207,
    Bc = 208,
    zc = 209,
    Gc = 210,
    Vc = 0,
    kc = 1,
    Hc = 2,
    Qs = 3,
    Wc = 4,
    qc = 5,
    Xc = 6,
    jc = 7,
    go = 0,
    Yc = 1,
    Kc = 2,
    ln = 0,
    Zc = 1,
    $c = 2,
    Jc = 3,
    Qc = 4,
    eu = 5,
    El = 300,
    bi = 301,
    wi = 302,
    eo = 303,
    to = 304,
    es = 306,
    no = 1e3,
    Ot = 1001,
    io = 1002,
    gt = 1003,
    Wo = 1004,
    ms = 1005,
    Pt = 1006,
    tu = 1007,
    Zi = 1008,
    Fn = 1009,
    nu = 1010,
    iu = 1011,
    Tl = 1012,
    ru = 1013,
    Un = 1014,
    Nn = 1015,
    $i = 1016,
    su = 1017,
    ou = 1018,
    xi = 1020,
    au = 1021,
    Ft = 1023,
    lu = 1024,
    cu = 1025,
    On = 1026,
    Ei = 1027,
    uu = 1028,
    fu = 1029,
    hu = 1030,
    du = 1031,
    pu = 1033,
    gs = 33776,
    _s = 33777,
    xs = 33778,
    vs = 33779,
    qo = 35840,
    Xo = 35841,
    jo = 35842,
    Yo = 35843,
    mu = 36196,
    Ko = 37492,
    Zo = 37496,
    $o = 37808,
    Jo = 37809,
    Qo = 37810,
    ea = 37811,
    ta = 37812,
    na = 37813,
    ia = 37814,
    ra = 37815,
    sa = 37816,
    oa = 37817,
    aa = 37818,
    la = 37819,
    ca = 37820,
    ua = 37821,
    ys = 36492,
    gu = 36283,
    fa = 36284,
    ha = 36285,
    da = 36286,
    Bn = 3e3,
    ke = 3001,
    _u = 3200,
    xu = 3201,
    Al = 0,
    vu = 1,
    Xt = 'srgb',
    Ji = 'srgb-linear',
    Cl = 'display-p3',
    Ms = 7680,
    yu = 519,
    pa = 35044,
    ma = '300 es',
    ro = 1035;
class Vn {
    addEventListener(e, t) {
        this._listeners === void 0 && (this._listeners = {});
        const n = this._listeners;
        n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
    }
    hasEventListener(e, t) {
        if (this._listeners === void 0) return !1;
        const n = this._listeners;
        return n[e] !== void 0 && n[e].indexOf(t) !== -1;
    }
    removeEventListener(e, t) {
        if (this._listeners === void 0) return;
        const i = this._listeners[e];
        if (i !== void 0) {
            const s = i.indexOf(t);
            s !== -1 && i.splice(s, 1);
        }
    }
    dispatchEvent(e) {
        if (this._listeners === void 0) return;
        const n = this._listeners[e.type];
        if (n !== void 0) {
            e.target = this;
            const i = n.slice(0);
            for (let s = 0, a = i.length; s < a; s++) i[s].call(this, e);
            e.target = null;
        }
    }
}
const lt = [
    '00',
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '0a',
    '0b',
    '0c',
    '0d',
    '0e',
    '0f',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '1a',
    '1b',
    '1c',
    '1d',
    '1e',
    '1f',
    '20',
    '21',
    '22',
    '23',
    '24',
    '25',
    '26',
    '27',
    '28',
    '29',
    '2a',
    '2b',
    '2c',
    '2d',
    '2e',
    '2f',
    '30',
    '31',
    '32',
    '33',
    '34',
    '35',
    '36',
    '37',
    '38',
    '39',
    '3a',
    '3b',
    '3c',
    '3d',
    '3e',
    '3f',
    '40',
    '41',
    '42',
    '43',
    '44',
    '45',
    '46',
    '47',
    '48',
    '49',
    '4a',
    '4b',
    '4c',
    '4d',
    '4e',
    '4f',
    '50',
    '51',
    '52',
    '53',
    '54',
    '55',
    '56',
    '57',
    '58',
    '59',
    '5a',
    '5b',
    '5c',
    '5d',
    '5e',
    '5f',
    '60',
    '61',
    '62',
    '63',
    '64',
    '65',
    '66',
    '67',
    '68',
    '69',
    '6a',
    '6b',
    '6c',
    '6d',
    '6e',
    '6f',
    '70',
    '71',
    '72',
    '73',
    '74',
    '75',
    '76',
    '77',
    '78',
    '79',
    '7a',
    '7b',
    '7c',
    '7d',
    '7e',
    '7f',
    '80',
    '81',
    '82',
    '83',
    '84',
    '85',
    '86',
    '87',
    '88',
    '89',
    '8a',
    '8b',
    '8c',
    '8d',
    '8e',
    '8f',
    '90',
    '91',
    '92',
    '93',
    '94',
    '95',
    '96',
    '97',
    '98',
    '99',
    '9a',
    '9b',
    '9c',
    '9d',
    '9e',
    '9f',
    'a0',
    'a1',
    'a2',
    'a3',
    'a4',
    'a5',
    'a6',
    'a7',
    'a8',
    'a9',
    'aa',
    'ab',
    'ac',
    'ad',
    'ae',
    'af',
    'b0',
    'b1',
    'b2',
    'b3',
    'b4',
    'b5',
    'b6',
    'b7',
    'b8',
    'b9',
    'ba',
    'bb',
    'bc',
    'bd',
    'be',
    'bf',
    'c0',
    'c1',
    'c2',
    'c3',
    'c4',
    'c5',
    'c6',
    'c7',
    'c8',
    'c9',
    'ca',
    'cb',
    'cc',
    'cd',
    'ce',
    'cf',
    'd0',
    'd1',
    'd2',
    'd3',
    'd4',
    'd5',
    'd6',
    'd7',
    'd8',
    'd9',
    'da',
    'db',
    'dc',
    'dd',
    'de',
    'df',
    'e0',
    'e1',
    'e2',
    'e3',
    'e4',
    'e5',
    'e6',
    'e7',
    'e8',
    'e9',
    'ea',
    'eb',
    'ec',
    'ed',
    'ee',
    'ef',
    'f0',
    'f1',
    'f2',
    'f3',
    'f4',
    'f5',
    'f6',
    'f7',
    'f8',
    'f9',
    'fa',
    'fb',
    'fc',
    'fd',
    'fe',
    'ff',
];
let ga = 1234567;
const Xi = Math.PI / 180,
    Qi = 180 / Math.PI;
function Ai() {
    const r = (Math.random() * 4294967295) | 0,
        e = (Math.random() * 4294967295) | 0,
        t = (Math.random() * 4294967295) | 0,
        n = (Math.random() * 4294967295) | 0;
    return (
        lt[r & 255] +
        lt[(r >> 8) & 255] +
        lt[(r >> 16) & 255] +
        lt[(r >> 24) & 255] +
        '-' +
        lt[e & 255] +
        lt[(e >> 8) & 255] +
        '-' +
        lt[((e >> 16) & 15) | 64] +
        lt[(e >> 24) & 255] +
        '-' +
        lt[(t & 63) | 128] +
        lt[(t >> 8) & 255] +
        '-' +
        lt[(t >> 16) & 255] +
        lt[(t >> 24) & 255] +
        lt[n & 255] +
        lt[(n >> 8) & 255] +
        lt[(n >> 16) & 255] +
        lt[(n >> 24) & 255]
    ).toLowerCase();
}
function rt(r, e, t) {
    return Math.max(e, Math.min(t, r));
}
function _o(r, e) {
    return ((r % e) + e) % e;
}
function Mu(r, e, t, n, i) {
    return n + ((r - e) * (i - n)) / (t - e);
}
function Su(r, e, t) {
    return r !== e ? (t - r) / (e - r) : 0;
}
function ji(r, e, t) {
    return (1 - t) * r + t * e;
}
function bu(r, e, t, n) {
    return ji(r, e, 1 - Math.exp(-t * n));
}
function wu(r, e = 1) {
    return e - Math.abs(_o(r, e * 2) - e);
}
function Eu(r, e, t) {
    return r <= e ? 0 : r >= t ? 1 : ((r = (r - e) / (t - e)), r * r * (3 - 2 * r));
}
function Tu(r, e, t) {
    return r <= e ? 0 : r >= t ? 1 : ((r = (r - e) / (t - e)), r * r * r * (r * (r * 6 - 15) + 10));
}
function Au(r, e) {
    return r + Math.floor(Math.random() * (e - r + 1));
}
function Cu(r, e) {
    return r + Math.random() * (e - r);
}
function Pu(r) {
    return r * (0.5 - Math.random());
}
function Lu(r) {
    r !== void 0 && (ga = r);
    let e = (ga += 1831565813);
    return (e = Math.imul(e ^ (e >>> 15), e | 1)), (e ^= e + Math.imul(e ^ (e >>> 7), e | 61)), ((e ^ (e >>> 14)) >>> 0) / 4294967296;
}
function Ru(r) {
    return r * Xi;
}
function Du(r) {
    return r * Qi;
}
function so(r) {
    return (r & (r - 1)) === 0 && r !== 0;
}
function Iu(r) {
    return Math.pow(2, Math.ceil(Math.log(r) / Math.LN2));
}
function Pl(r) {
    return Math.pow(2, Math.floor(Math.log(r) / Math.LN2));
}
function Uu(r, e, t, n, i) {
    const s = Math.cos,
        a = Math.sin,
        o = s(t / 2),
        c = a(t / 2),
        l = s((e + n) / 2),
        u = a((e + n) / 2),
        f = s((e - n) / 2),
        h = a((e - n) / 2),
        p = s((n - e) / 2),
        g = a((n - e) / 2);
    switch (i) {
        case 'XYX':
            r.set(o * u, c * f, c * h, o * l);
            break;
        case 'YZY':
            r.set(c * h, o * u, c * f, o * l);
            break;
        case 'ZXZ':
            r.set(c * f, c * h, o * u, o * l);
            break;
        case 'XZX':
            r.set(o * u, c * g, c * p, o * l);
            break;
        case 'YXY':
            r.set(c * p, o * u, c * g, o * l);
            break;
        case 'ZYZ':
            r.set(c * g, c * p, o * u, o * l);
            break;
        default:
            console.warn('THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: ' + i);
    }
}
function Hi(r, e) {
    switch (e.constructor) {
        case Float32Array:
            return r;
        case Uint16Array:
            return r / 65535;
        case Uint8Array:
            return r / 255;
        case Int16Array:
            return Math.max(r / 32767, -1);
        case Int8Array:
            return Math.max(r / 127, -1);
        default:
            throw new Error('Invalid component type.');
    }
}
function xt(r, e) {
    switch (e.constructor) {
        case Float32Array:
            return r;
        case Uint16Array:
            return Math.round(r * 65535);
        case Uint8Array:
            return Math.round(r * 255);
        case Int16Array:
            return Math.round(r * 32767);
        case Int8Array:
            return Math.round(r * 127);
        default:
            throw new Error('Invalid component type.');
    }
}
const ts = {
    DEG2RAD: Xi,
    RAD2DEG: Qi,
    generateUUID: Ai,
    clamp: rt,
    euclideanModulo: _o,
    mapLinear: Mu,
    inverseLerp: Su,
    lerp: ji,
    damp: bu,
    pingpong: wu,
    smoothstep: Eu,
    smootherstep: Tu,
    randInt: Au,
    randFloat: Cu,
    randFloatSpread: Pu,
    seededRandom: Lu,
    degToRad: Ru,
    radToDeg: Du,
    isPowerOfTwo: so,
    ceilPowerOfTwo: Iu,
    floorPowerOfTwo: Pl,
    setQuaternionFromProperEuler: Uu,
    normalize: xt,
    denormalize: Hi,
};
class be {
    constructor(e = 0, t = 0) {
        (be.prototype.isVector2 = !0), (this.x = e), (this.y = t);
    }
    get width() {
        return this.x;
    }
    set width(e) {
        this.x = e;
    }
    get height() {
        return this.y;
    }
    set height(e) {
        this.y = e;
    }
    set(e, t) {
        return (this.x = e), (this.y = t), this;
    }
    setScalar(e) {
        return (this.x = e), (this.y = e), this;
    }
    setX(e) {
        return (this.x = e), this;
    }
    setY(e) {
        return (this.y = e), this;
    }
    setComponent(e, t) {
        switch (e) {
            case 0:
                this.x = t;
                break;
            case 1:
                this.y = t;
                break;
            default:
                throw new Error('index is out of range: ' + e);
        }
        return this;
    }
    getComponent(e) {
        switch (e) {
            case 0:
                return this.x;
            case 1:
                return this.y;
            default:
                throw new Error('index is out of range: ' + e);
        }
    }
    clone() {
        return new this.constructor(this.x, this.y);
    }
    copy(e) {
        return (this.x = e.x), (this.y = e.y), this;
    }
    add(e) {
        return (this.x += e.x), (this.y += e.y), this;
    }
    addScalar(e) {
        return (this.x += e), (this.y += e), this;
    }
    addVectors(e, t) {
        return (this.x = e.x + t.x), (this.y = e.y + t.y), this;
    }
    addScaledVector(e, t) {
        return (this.x += e.x * t), (this.y += e.y * t), this;
    }
    sub(e) {
        return (this.x -= e.x), (this.y -= e.y), this;
    }
    subScalar(e) {
        return (this.x -= e), (this.y -= e), this;
    }
    subVectors(e, t) {
        return (this.x = e.x - t.x), (this.y = e.y - t.y), this;
    }
    multiply(e) {
        return (this.x *= e.x), (this.y *= e.y), this;
    }
    multiplyScalar(e) {
        return (this.x *= e), (this.y *= e), this;
    }
    divide(e) {
        return (this.x /= e.x), (this.y /= e.y), this;
    }
    divideScalar(e) {
        return this.multiplyScalar(1 / e);
    }
    applyMatrix3(e) {
        const t = this.x,
            n = this.y,
            i = e.elements;
        return (this.x = i[0] * t + i[3] * n + i[6]), (this.y = i[1] * t + i[4] * n + i[7]), this;
    }
    min(e) {
        return (this.x = Math.min(this.x, e.x)), (this.y = Math.min(this.y, e.y)), this;
    }
    max(e) {
        return (this.x = Math.max(this.x, e.x)), (this.y = Math.max(this.y, e.y)), this;
    }
    clamp(e, t) {
        return (this.x = Math.max(e.x, Math.min(t.x, this.x))), (this.y = Math.max(e.y, Math.min(t.y, this.y))), this;
    }
    clampScalar(e, t) {
        return (this.x = Math.max(e, Math.min(t, this.x))), (this.y = Math.max(e, Math.min(t, this.y))), this;
    }
    clampLength(e, t) {
        const n = this.length();
        return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
    }
    floor() {
        return (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this;
    }
    ceil() {
        return (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this;
    }
    round() {
        return (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this;
    }
    roundToZero() {
        return (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)), (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)), this;
    }
    negate() {
        return (this.x = -this.x), (this.y = -this.y), this;
    }
    dot(e) {
        return this.x * e.x + this.y * e.y;
    }
    cross(e) {
        return this.x * e.y - this.y * e.x;
    }
    lengthSq() {
        return this.x * this.x + this.y * this.y;
    }
    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    manhattanLength() {
        return Math.abs(this.x) + Math.abs(this.y);
    }
    normalize() {
        return this.divideScalar(this.length() || 1);
    }
    angle() {
        return Math.atan2(-this.y, -this.x) + Math.PI;
    }
    angleTo(e) {
        const t = Math.sqrt(this.lengthSq() * e.lengthSq());
        if (t === 0) return Math.PI / 2;
        const n = this.dot(e) / t;
        return Math.acos(rt(n, -1, 1));
    }
    distanceTo(e) {
        return Math.sqrt(this.distanceToSquared(e));
    }
    distanceToSquared(e) {
        const t = this.x - e.x,
            n = this.y - e.y;
        return t * t + n * n;
    }
    manhattanDistanceTo(e) {
        return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
    }
    setLength(e) {
        return this.normalize().multiplyScalar(e);
    }
    lerp(e, t) {
        return (this.x += (e.x - this.x) * t), (this.y += (e.y - this.y) * t), this;
    }
    lerpVectors(e, t, n) {
        return (this.x = e.x + (t.x - e.x) * n), (this.y = e.y + (t.y - e.y) * n), this;
    }
    equals(e) {
        return e.x === this.x && e.y === this.y;
    }
    fromArray(e, t = 0) {
        return (this.x = e[t]), (this.y = e[t + 1]), this;
    }
    toArray(e = [], t = 0) {
        return (e[t] = this.x), (e[t + 1] = this.y), e;
    }
    fromBufferAttribute(e, t) {
        return (this.x = e.getX(t)), (this.y = e.getY(t)), this;
    }
    rotateAround(e, t) {
        const n = Math.cos(t),
            i = Math.sin(t),
            s = this.x - e.x,
            a = this.y - e.y;
        return (this.x = s * n - a * i + e.x), (this.y = s * i + a * n + e.y), this;
    }
    random() {
        return (this.x = Math.random()), (this.y = Math.random()), this;
    }
    *[Symbol.iterator]() {
        yield this.x, yield this.y;
    }
}
class Ue {
    constructor() {
        (Ue.prototype.isMatrix3 = !0), (this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1]);
    }
    set(e, t, n, i, s, a, o, c, l) {
        const u = this.elements;
        return (u[0] = e), (u[1] = i), (u[2] = o), (u[3] = t), (u[4] = s), (u[5] = c), (u[6] = n), (u[7] = a), (u[8] = l), this;
    }
    identity() {
        return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
    }
    copy(e) {
        const t = this.elements,
            n = e.elements;
        return (t[0] = n[0]), (t[1] = n[1]), (t[2] = n[2]), (t[3] = n[3]), (t[4] = n[4]), (t[5] = n[5]), (t[6] = n[6]), (t[7] = n[7]), (t[8] = n[8]), this;
    }
    extractBasis(e, t, n) {
        return e.setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
    }
    setFromMatrix4(e) {
        const t = e.elements;
        return this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]), this;
    }
    multiply(e) {
        return this.multiplyMatrices(this, e);
    }
    premultiply(e) {
        return this.multiplyMatrices(e, this);
    }
    multiplyMatrices(e, t) {
        const n = e.elements,
            i = t.elements,
            s = this.elements,
            a = n[0],
            o = n[3],
            c = n[6],
            l = n[1],
            u = n[4],
            f = n[7],
            h = n[2],
            p = n[5],
            g = n[8],
            _ = i[0],
            m = i[3],
            d = i[6],
            y = i[1],
            x = i[4],
            v = i[7],
            M = i[2],
            b = i[5],
            P = i[8];
        return (
            (s[0] = a * _ + o * y + c * M),
            (s[3] = a * m + o * x + c * b),
            (s[6] = a * d + o * v + c * P),
            (s[1] = l * _ + u * y + f * M),
            (s[4] = l * m + u * x + f * b),
            (s[7] = l * d + u * v + f * P),
            (s[2] = h * _ + p * y + g * M),
            (s[5] = h * m + p * x + g * b),
            (s[8] = h * d + p * v + g * P),
            this
        );
    }
    multiplyScalar(e) {
        const t = this.elements;
        return (t[0] *= e), (t[3] *= e), (t[6] *= e), (t[1] *= e), (t[4] *= e), (t[7] *= e), (t[2] *= e), (t[5] *= e), (t[8] *= e), this;
    }
    determinant() {
        const e = this.elements,
            t = e[0],
            n = e[1],
            i = e[2],
            s = e[3],
            a = e[4],
            o = e[5],
            c = e[6],
            l = e[7],
            u = e[8];
        return t * a * u - t * o * l - n * s * u + n * o * c + i * s * l - i * a * c;
    }
    invert() {
        const e = this.elements,
            t = e[0],
            n = e[1],
            i = e[2],
            s = e[3],
            a = e[4],
            o = e[5],
            c = e[6],
            l = e[7],
            u = e[8],
            f = u * a - o * l,
            h = o * c - u * s,
            p = l * s - a * c,
            g = t * f + n * h + i * p;
        if (g === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
        const _ = 1 / g;
        return (
            (e[0] = f * _),
            (e[1] = (i * l - u * n) * _),
            (e[2] = (o * n - i * a) * _),
            (e[3] = h * _),
            (e[4] = (u * t - i * c) * _),
            (e[5] = (i * s - o * t) * _),
            (e[6] = p * _),
            (e[7] = (n * c - l * t) * _),
            (e[8] = (a * t - n * s) * _),
            this
        );
    }
    transpose() {
        let e;
        const t = this.elements;
        return (e = t[1]), (t[1] = t[3]), (t[3] = e), (e = t[2]), (t[2] = t[6]), (t[6] = e), (e = t[5]), (t[5] = t[7]), (t[7] = e), this;
    }
    getNormalMatrix(e) {
        return this.setFromMatrix4(e).invert().transpose();
    }
    transposeIntoArray(e) {
        const t = this.elements;
        return (e[0] = t[0]), (e[1] = t[3]), (e[2] = t[6]), (e[3] = t[1]), (e[4] = t[4]), (e[5] = t[7]), (e[6] = t[2]), (e[7] = t[5]), (e[8] = t[8]), this;
    }
    setUvTransform(e, t, n, i, s, a, o) {
        const c = Math.cos(s),
            l = Math.sin(s);
        return this.set(n * c, n * l, -n * (c * a + l * o) + a + e, -i * l, i * c, -i * (-l * a + c * o) + o + t, 0, 0, 1), this;
    }
    scale(e, t) {
        return this.premultiply(Ss.makeScale(e, t)), this;
    }
    rotate(e) {
        return this.premultiply(Ss.makeRotation(-e)), this;
    }
    translate(e, t) {
        return this.premultiply(Ss.makeTranslation(e, t)), this;
    }
    makeTranslation(e, t) {
        return this.set(1, 0, e, 0, 1, t, 0, 0, 1), this;
    }
    makeRotation(e) {
        const t = Math.cos(e),
            n = Math.sin(e);
        return this.set(t, -n, 0, n, t, 0, 0, 0, 1), this;
    }
    makeScale(e, t) {
        return this.set(e, 0, 0, 0, t, 0, 0, 0, 1), this;
    }
    equals(e) {
        const t = this.elements,
            n = e.elements;
        for (let i = 0; i < 9; i++) if (t[i] !== n[i]) return !1;
        return !0;
    }
    fromArray(e, t = 0) {
        for (let n = 0; n < 9; n++) this.elements[n] = e[n + t];
        return this;
    }
    toArray(e = [], t = 0) {
        const n = this.elements;
        return (e[t] = n[0]), (e[t + 1] = n[1]), (e[t + 2] = n[2]), (e[t + 3] = n[3]), (e[t + 4] = n[4]), (e[t + 5] = n[5]), (e[t + 6] = n[6]), (e[t + 7] = n[7]), (e[t + 8] = n[8]), e;
    }
    clone() {
        return new this.constructor().fromArray(this.elements);
    }
}
const Ss = new Ue();
function Ll(r) {
    for (let e = r.length - 1; e >= 0; --e) if (r[e] >= 65535) return !0;
    return !1;
}
function er(r) {
    return document.createElementNS('http://www.w3.org/1999/xhtml', r);
}
function vi(r) {
    return r < 0.04045 ? r * 0.0773993808 : Math.pow(r * 0.9478672986 + 0.0521327014, 2.4);
}
function bs(r) {
    return r < 0.0031308 ? r * 12.92 : 1.055 * Math.pow(r, 0.41666) - 0.055;
}
const Nu = new Ue().fromArray([0.8224621, 0.0331941, 0.0170827, 0.177538, 0.9668058, 0.0723974, -1e-7, 1e-7, 0.9105199]),
    Ou = new Ue().fromArray([1.2249401, -0.0420569, -0.0196376, -0.2249404, 1.0420571, -0.0786361, 1e-7, 0, 1.0982735]);
function Fu(r) {
    return r.convertSRGBToLinear().applyMatrix3(Ou);
}
function Bu(r) {
    return r.applyMatrix3(Nu).convertLinearToSRGB();
}
const zu = { [Ji]: (r) => r, [Xt]: (r) => r.convertSRGBToLinear(), [Cl]: Fu },
    Gu = { [Ji]: (r) => r, [Xt]: (r) => r.convertLinearToSRGB(), [Cl]: Bu },
    Mt = {
        enabled: !1,
        get legacyMode() {
            return console.warn('THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150.'), !this.enabled;
        },
        set legacyMode(r) {
            console.warn('THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150.'), (this.enabled = !r);
        },
        get workingColorSpace() {
            return Ji;
        },
        set workingColorSpace(r) {
            console.warn('THREE.ColorManagement: .workingColorSpace is readonly.');
        },
        convert: function (r, e, t) {
            if (this.enabled === !1 || e === t || !e || !t) return r;
            const n = zu[e],
                i = Gu[t];
            if (n === void 0 || i === void 0) throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);
            return i(n(r));
        },
        fromWorkingColorSpace: function (r, e) {
            return this.convert(r, this.workingColorSpace, e);
        },
        toWorkingColorSpace: function (r, e) {
            return this.convert(r, e, this.workingColorSpace);
        },
    };
let Xn;
class Rl {
    static getDataURL(e) {
        if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > 'u') return e.src;
        let t;
        if (e instanceof HTMLCanvasElement) t = e;
        else {
            Xn === void 0 && (Xn = er('canvas')), (Xn.width = e.width), (Xn.height = e.height);
            const n = Xn.getContext('2d');
            e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height), (t = Xn);
        }
        return t.width > 2048 || t.height > 2048
            ? (console.warn('THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons', e), t.toDataURL('image/jpeg', 0.6))
            : t.toDataURL('image/png');
    }
    static sRGBToLinear(e) {
        if (
            (typeof HTMLImageElement < 'u' && e instanceof HTMLImageElement) ||
            (typeof HTMLCanvasElement < 'u' && e instanceof HTMLCanvasElement) ||
            (typeof ImageBitmap < 'u' && e instanceof ImageBitmap)
        ) {
            const t = er('canvas');
            (t.width = e.width), (t.height = e.height);
            const n = t.getContext('2d');
            n.drawImage(e, 0, 0, e.width, e.height);
            const i = n.getImageData(0, 0, e.width, e.height),
                s = i.data;
            for (let a = 0; a < s.length; a++) s[a] = vi(s[a] / 255) * 255;
            return n.putImageData(i, 0, 0), t;
        } else if (e.data) {
            const t = e.data.slice(0);
            for (let n = 0; n < t.length; n++) t instanceof Uint8Array || t instanceof Uint8ClampedArray ? (t[n] = Math.floor(vi(t[n] / 255) * 255)) : (t[n] = vi(t[n]));
            return { data: t, width: e.width, height: e.height };
        } else return console.warn('THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.'), e;
    }
}
class Dl {
    constructor(e = null) {
        (this.isSource = !0), (this.uuid = Ai()), (this.data = e), (this.version = 0);
    }
    set needsUpdate(e) {
        e === !0 && this.version++;
    }
    toJSON(e) {
        const t = e === void 0 || typeof e == 'string';
        if (!t && e.images[this.uuid] !== void 0) return e.images[this.uuid];
        const n = { uuid: this.uuid, url: '' },
            i = this.data;
        if (i !== null) {
            let s;
            if (Array.isArray(i)) {
                s = [];
                for (let a = 0, o = i.length; a < o; a++) i[a].isDataTexture ? s.push(ws(i[a].image)) : s.push(ws(i[a]));
            } else s = ws(i);
            n.url = s;
        }
        return t || (e.images[this.uuid] = n), n;
    }
}
function ws(r) {
    return (typeof HTMLImageElement < 'u' && r instanceof HTMLImageElement) ||
        (typeof HTMLCanvasElement < 'u' && r instanceof HTMLCanvasElement) ||
        (typeof ImageBitmap < 'u' && r instanceof ImageBitmap)
        ? Rl.getDataURL(r)
        : r.data
        ? { data: Array.from(r.data), width: r.width, height: r.height, type: r.data.constructor.name }
        : (console.warn('THREE.Texture: Unable to serialize Texture.'), {});
}
let Vu = 0;
class vt extends Vn {
    constructor(e = vt.DEFAULT_IMAGE, t = vt.DEFAULT_MAPPING, n = Ot, i = Ot, s = Pt, a = Zi, o = Ft, c = Fn, l = vt.DEFAULT_ANISOTROPY, u = Bn) {
        super(),
            (this.isTexture = !0),
            Object.defineProperty(this, 'id', { value: Vu++ }),
            (this.uuid = Ai()),
            (this.name = ''),
            (this.source = new Dl(e)),
            (this.mipmaps = []),
            (this.mapping = t),
            (this.channel = 0),
            (this.wrapS = n),
            (this.wrapT = i),
            (this.magFilter = s),
            (this.minFilter = a),
            (this.anisotropy = l),
            (this.format = o),
            (this.internalFormat = null),
            (this.type = c),
            (this.offset = new be(0, 0)),
            (this.repeat = new be(1, 1)),
            (this.center = new be(0, 0)),
            (this.rotation = 0),
            (this.matrixAutoUpdate = !0),
            (this.matrix = new Ue()),
            (this.generateMipmaps = !0),
            (this.premultiplyAlpha = !1),
            (this.flipY = !0),
            (this.unpackAlignment = 4),
            (this.encoding = u),
            (this.userData = {}),
            (this.version = 0),
            (this.onUpdate = null),
            (this.isRenderTargetTexture = !1),
            (this.needsPMREMUpdate = !1);
    }
    get image() {
        return this.source.data;
    }
    set image(e = null) {
        this.source.data = e;
    }
    updateMatrix() {
        this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
    }
    clone() {
        return new this.constructor().copy(this);
    }
    copy(e) {
        return (
            (this.name = e.name),
            (this.source = e.source),
            (this.mipmaps = e.mipmaps.slice(0)),
            (this.mapping = e.mapping),
            (this.channel = e.channel),
            (this.wrapS = e.wrapS),
            (this.wrapT = e.wrapT),
            (this.magFilter = e.magFilter),
            (this.minFilter = e.minFilter),
            (this.anisotropy = e.anisotropy),
            (this.format = e.format),
            (this.internalFormat = e.internalFormat),
            (this.type = e.type),
            this.offset.copy(e.offset),
            this.repeat.copy(e.repeat),
            this.center.copy(e.center),
            (this.rotation = e.rotation),
            (this.matrixAutoUpdate = e.matrixAutoUpdate),
            this.matrix.copy(e.matrix),
            (this.generateMipmaps = e.generateMipmaps),
            (this.premultiplyAlpha = e.premultiplyAlpha),
            (this.flipY = e.flipY),
            (this.unpackAlignment = e.unpackAlignment),
            (this.encoding = e.encoding),
            (this.userData = JSON.parse(JSON.stringify(e.userData))),
            (this.needsUpdate = !0),
            this
        );
    }
    toJSON(e) {
        const t = e === void 0 || typeof e == 'string';
        if (!t && e.textures[this.uuid] !== void 0) return e.textures[this.uuid];
        const n = {
            metadata: { version: 4.5, type: 'Texture', generator: 'Texture.toJSON' },
            uuid: this.uuid,
            name: this.name,
            image: this.source.toJSON(e).uuid,
            mapping: this.mapping,
            channel: this.channel,
            repeat: [this.repeat.x, this.repeat.y],
            offset: [this.offset.x, this.offset.y],
            center: [this.center.x, this.center.y],
            rotation: this.rotation,
            wrap: [this.wrapS, this.wrapT],
            format: this.format,
            internalFormat: this.internalFormat,
            type: this.type,
            encoding: this.encoding,
            minFilter: this.minFilter,
            magFilter: this.magFilter,
            anisotropy: this.anisotropy,
            flipY: this.flipY,
            generateMipmaps: this.generateMipmaps,
            premultiplyAlpha: this.premultiplyAlpha,
            unpackAlignment: this.unpackAlignment,
        };
        return Object.keys(this.userData).length > 0 && (n.userData = this.userData), t || (e.textures[this.uuid] = n), n;
    }
    dispose() {
        this.dispatchEvent({ type: 'dispose' });
    }
    transformUv(e) {
        if (this.mapping !== El) return e;
        if ((e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1))
            switch (this.wrapS) {
                case no:
                    e.x = e.x - Math.floor(e.x);
                    break;
                case Ot:
                    e.x = e.x < 0 ? 0 : 1;
                    break;
                case io:
                    Math.abs(Math.floor(e.x) % 2) === 1 ? (e.x = Math.ceil(e.x) - e.x) : (e.x = e.x - Math.floor(e.x));
                    break;
            }
        if (e.y < 0 || e.y > 1)
            switch (this.wrapT) {
                case no:
                    e.y = e.y - Math.floor(e.y);
                    break;
                case Ot:
                    e.y = e.y < 0 ? 0 : 1;
                    break;
                case io:
                    Math.abs(Math.floor(e.y) % 2) === 1 ? (e.y = Math.ceil(e.y) - e.y) : (e.y = e.y - Math.floor(e.y));
                    break;
            }
        return this.flipY && (e.y = 1 - e.y), e;
    }
    set needsUpdate(e) {
        e === !0 && (this.version++, (this.source.needsUpdate = !0));
    }
}
vt.DEFAULT_IMAGE = null;
vt.DEFAULT_MAPPING = El;
vt.DEFAULT_ANISOTROPY = 1;
class it {
    constructor(e = 0, t = 0, n = 0, i = 1) {
        (it.prototype.isVector4 = !0), (this.x = e), (this.y = t), (this.z = n), (this.w = i);
    }
    get width() {
        return this.z;
    }
    set width(e) {
        this.z = e;
    }
    get height() {
        return this.w;
    }
    set height(e) {
        this.w = e;
    }
    set(e, t, n, i) {
        return (this.x = e), (this.y = t), (this.z = n), (this.w = i), this;
    }
    setScalar(e) {
        return (this.x = e), (this.y = e), (this.z = e), (this.w = e), this;
    }
    setX(e) {
        return (this.x = e), this;
    }
    setY(e) {
        return (this.y = e), this;
    }
    setZ(e) {
        return (this.z = e), this;
    }
    setW(e) {
        return (this.w = e), this;
    }
    setComponent(e, t) {
        switch (e) {
            case 0:
                this.x = t;
                break;
            case 1:
                this.y = t;
                break;
            case 2:
                this.z = t;
                break;
            case 3:
                this.w = t;
                break;
            default:
                throw new Error('index is out of range: ' + e);
        }
        return this;
    }
    getComponent(e) {
        switch (e) {
            case 0:
                return this.x;
            case 1:
                return this.y;
            case 2:
                return this.z;
            case 3:
                return this.w;
            default:
                throw new Error('index is out of range: ' + e);
        }
    }
    clone() {
        return new this.constructor(this.x, this.y, this.z, this.w);
    }
    copy(e) {
        return (this.x = e.x), (this.y = e.y), (this.z = e.z), (this.w = e.w !== void 0 ? e.w : 1), this;
    }
    add(e) {
        return (this.x += e.x), (this.y += e.y), (this.z += e.z), (this.w += e.w), this;
    }
    addScalar(e) {
        return (this.x += e), (this.y += e), (this.z += e), (this.w += e), this;
    }
    addVectors(e, t) {
        return (this.x = e.x + t.x), (this.y = e.y + t.y), (this.z = e.z + t.z), (this.w = e.w + t.w), this;
    }
    addScaledVector(e, t) {
        return (this.x += e.x * t), (this.y += e.y * t), (this.z += e.z * t), (this.w += e.w * t), this;
    }
    sub(e) {
        return (this.x -= e.x), (this.y -= e.y), (this.z -= e.z), (this.w -= e.w), this;
    }
    subScalar(e) {
        return (this.x -= e), (this.y -= e), (this.z -= e), (this.w -= e), this;
    }
    subVectors(e, t) {
        return (this.x = e.x - t.x), (this.y = e.y - t.y), (this.z = e.z - t.z), (this.w = e.w - t.w), this;
    }
    multiply(e) {
        return (this.x *= e.x), (this.y *= e.y), (this.z *= e.z), (this.w *= e.w), this;
    }
    multiplyScalar(e) {
        return (this.x *= e), (this.y *= e), (this.z *= e), (this.w *= e), this;
    }
    applyMatrix4(e) {
        const t = this.x,
            n = this.y,
            i = this.z,
            s = this.w,
            a = e.elements;
        return (
            (this.x = a[0] * t + a[4] * n + a[8] * i + a[12] * s),
            (this.y = a[1] * t + a[5] * n + a[9] * i + a[13] * s),
            (this.z = a[2] * t + a[6] * n + a[10] * i + a[14] * s),
            (this.w = a[3] * t + a[7] * n + a[11] * i + a[15] * s),
            this
        );
    }
    divideScalar(e) {
        return this.multiplyScalar(1 / e);
    }
    setAxisAngleFromQuaternion(e) {
        this.w = 2 * Math.acos(e.w);
        const t = Math.sqrt(1 - e.w * e.w);
        return t < 1e-4 ? ((this.x = 1), (this.y = 0), (this.z = 0)) : ((this.x = e.x / t), (this.y = e.y / t), (this.z = e.z / t)), this;
    }
    setAxisAngleFromRotationMatrix(e) {
        let t, n, i, s;
        const c = e.elements,
            l = c[0],
            u = c[4],
            f = c[8],
            h = c[1],
            p = c[5],
            g = c[9],
            _ = c[2],
            m = c[6],
            d = c[10];
        if (Math.abs(u - h) < 0.01 && Math.abs(f - _) < 0.01 && Math.abs(g - m) < 0.01) {
            if (Math.abs(u + h) < 0.1 && Math.abs(f + _) < 0.1 && Math.abs(g + m) < 0.1 && Math.abs(l + p + d - 3) < 0.1) return this.set(1, 0, 0, 0), this;
            t = Math.PI;
            const x = (l + 1) / 2,
                v = (p + 1) / 2,
                M = (d + 1) / 2,
                b = (u + h) / 4,
                P = (f + _) / 4,
                A = (g + m) / 4;
            return (
                x > v && x > M
                    ? x < 0.01
                        ? ((n = 0), (i = 0.707106781), (s = 0.707106781))
                        : ((n = Math.sqrt(x)), (i = b / n), (s = P / n))
                    : v > M
                    ? v < 0.01
                        ? ((n = 0.707106781), (i = 0), (s = 0.707106781))
                        : ((i = Math.sqrt(v)), (n = b / i), (s = A / i))
                    : M < 0.01
                    ? ((n = 0.707106781), (i = 0.707106781), (s = 0))
                    : ((s = Math.sqrt(M)), (n = P / s), (i = A / s)),
                this.set(n, i, s, t),
                this
            );
        }
        let y = Math.sqrt((m - g) * (m - g) + (f - _) * (f - _) + (h - u) * (h - u));
        return Math.abs(y) < 0.001 && (y = 1), (this.x = (m - g) / y), (this.y = (f - _) / y), (this.z = (h - u) / y), (this.w = Math.acos((l + p + d - 1) / 2)), this;
    }
    min(e) {
        return (this.x = Math.min(this.x, e.x)), (this.y = Math.min(this.y, e.y)), (this.z = Math.min(this.z, e.z)), (this.w = Math.min(this.w, e.w)), this;
    }
    max(e) {
        return (this.x = Math.max(this.x, e.x)), (this.y = Math.max(this.y, e.y)), (this.z = Math.max(this.z, e.z)), (this.w = Math.max(this.w, e.w)), this;
    }
    clamp(e, t) {
        return (
            (this.x = Math.max(e.x, Math.min(t.x, this.x))),
            (this.y = Math.max(e.y, Math.min(t.y, this.y))),
            (this.z = Math.max(e.z, Math.min(t.z, this.z))),
            (this.w = Math.max(e.w, Math.min(t.w, this.w))),
            this
        );
    }
    clampScalar(e, t) {
        return (this.x = Math.max(e, Math.min(t, this.x))), (this.y = Math.max(e, Math.min(t, this.y))), (this.z = Math.max(e, Math.min(t, this.z))), (this.w = Math.max(e, Math.min(t, this.w))), this;
    }
    clampLength(e, t) {
        const n = this.length();
        return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
    }
    floor() {
        return (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), (this.z = Math.floor(this.z)), (this.w = Math.floor(this.w)), this;
    }
    ceil() {
        return (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), (this.z = Math.ceil(this.z)), (this.w = Math.ceil(this.w)), this;
    }
    round() {
        return (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), (this.z = Math.round(this.z)), (this.w = Math.round(this.w)), this;
    }
    roundToZero() {
        return (
            (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
            (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
            (this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z)),
            (this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w)),
            this
        );
    }
    negate() {
        return (this.x = -this.x), (this.y = -this.y), (this.z = -this.z), (this.w = -this.w), this;
    }
    dot(e) {
        return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
    }
    lengthSq() {
        return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
    }
    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
    }
    manhattanLength() {
        return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
    }
    normalize() {
        return this.divideScalar(this.length() || 1);
    }
    setLength(e) {
        return this.normalize().multiplyScalar(e);
    }
    lerp(e, t) {
        return (this.x += (e.x - this.x) * t), (this.y += (e.y - this.y) * t), (this.z += (e.z - this.z) * t), (this.w += (e.w - this.w) * t), this;
    }
    lerpVectors(e, t, n) {
        return (this.x = e.x + (t.x - e.x) * n), (this.y = e.y + (t.y - e.y) * n), (this.z = e.z + (t.z - e.z) * n), (this.w = e.w + (t.w - e.w) * n), this;
    }
    equals(e) {
        return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
    }
    fromArray(e, t = 0) {
        return (this.x = e[t]), (this.y = e[t + 1]), (this.z = e[t + 2]), (this.w = e[t + 3]), this;
    }
    toArray(e = [], t = 0) {
        return (e[t] = this.x), (e[t + 1] = this.y), (e[t + 2] = this.z), (e[t + 3] = this.w), e;
    }
    fromBufferAttribute(e, t) {
        return (this.x = e.getX(t)), (this.y = e.getY(t)), (this.z = e.getZ(t)), (this.w = e.getW(t)), this;
    }
    random() {
        return (this.x = Math.random()), (this.y = Math.random()), (this.z = Math.random()), (this.w = Math.random()), this;
    }
    *[Symbol.iterator]() {
        yield this.x, yield this.y, yield this.z, yield this.w;
    }
}
class zn extends Vn {
    constructor(e = 1, t = 1, n = {}) {
        super(),
            (this.isWebGLRenderTarget = !0),
            (this.width = e),
            (this.height = t),
            (this.depth = 1),
            (this.scissor = new it(0, 0, e, t)),
            (this.scissorTest = !1),
            (this.viewport = new it(0, 0, e, t));
        const i = { width: e, height: t, depth: 1 };
        (this.texture = new vt(i, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.encoding)),
            (this.texture.isRenderTargetTexture = !0),
            (this.texture.flipY = !1),
            (this.texture.generateMipmaps = n.generateMipmaps !== void 0 ? n.generateMipmaps : !1),
            (this.texture.internalFormat = n.internalFormat !== void 0 ? n.internalFormat : null),
            (this.texture.minFilter = n.minFilter !== void 0 ? n.minFilter : Pt),
            (this.depthBuffer = n.depthBuffer !== void 0 ? n.depthBuffer : !0),
            (this.stencilBuffer = n.stencilBuffer !== void 0 ? n.stencilBuffer : !1),
            (this.depthTexture = n.depthTexture !== void 0 ? n.depthTexture : null),
            (this.samples = n.samples !== void 0 ? n.samples : 0);
    }
    setSize(e, t, n = 1) {
        (this.width !== e || this.height !== t || this.depth !== n) &&
            ((this.width = e), (this.height = t), (this.depth = n), (this.texture.image.width = e), (this.texture.image.height = t), (this.texture.image.depth = n), this.dispose()),
            this.viewport.set(0, 0, e, t),
            this.scissor.set(0, 0, e, t);
    }
    clone() {
        return new this.constructor().copy(this);
    }
    copy(e) {
        (this.width = e.width), (this.height = e.height), (this.depth = e.depth), this.viewport.copy(e.viewport), (this.texture = e.texture.clone()), (this.texture.isRenderTargetTexture = !0);
        const t = Object.assign({}, e.texture.image);
        return (
            (this.texture.source = new Dl(t)),
            (this.depthBuffer = e.depthBuffer),
            (this.stencilBuffer = e.stencilBuffer),
            e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()),
            (this.samples = e.samples),
            this
        );
    }
    dispose() {
        this.dispatchEvent({ type: 'dispose' });
    }
}
class Il extends vt {
    constructor(e = null, t = 1, n = 1, i = 1) {
        super(null),
            (this.isDataArrayTexture = !0),
            (this.image = { data: e, width: t, height: n, depth: i }),
            (this.magFilter = gt),
            (this.minFilter = gt),
            (this.wrapR = Ot),
            (this.generateMipmaps = !1),
            (this.flipY = !1),
            (this.unpackAlignment = 1);
    }
}
class ku extends vt {
    constructor(e = null, t = 1, n = 1, i = 1) {
        super(null),
            (this.isData3DTexture = !0),
            (this.image = { data: e, width: t, height: n, depth: i }),
            (this.magFilter = gt),
            (this.minFilter = gt),
            (this.wrapR = Ot),
            (this.generateMipmaps = !1),
            (this.flipY = !1),
            (this.unpackAlignment = 1);
    }
}
class Gn {
    constructor(e = 0, t = 0, n = 0, i = 1) {
        (this.isQuaternion = !0), (this._x = e), (this._y = t), (this._z = n), (this._w = i);
    }
    static slerpFlat(e, t, n, i, s, a, o) {
        let c = n[i + 0],
            l = n[i + 1],
            u = n[i + 2],
            f = n[i + 3];
        const h = s[a + 0],
            p = s[a + 1],
            g = s[a + 2],
            _ = s[a + 3];
        if (o === 0) {
            (e[t + 0] = c), (e[t + 1] = l), (e[t + 2] = u), (e[t + 3] = f);
            return;
        }
        if (o === 1) {
            (e[t + 0] = h), (e[t + 1] = p), (e[t + 2] = g), (e[t + 3] = _);
            return;
        }
        if (f !== _ || c !== h || l !== p || u !== g) {
            let m = 1 - o;
            const d = c * h + l * p + u * g + f * _,
                y = d >= 0 ? 1 : -1,
                x = 1 - d * d;
            if (x > Number.EPSILON) {
                const M = Math.sqrt(x),
                    b = Math.atan2(M, d * y);
                (m = Math.sin(m * b) / M), (o = Math.sin(o * b) / M);
            }
            const v = o * y;
            if (((c = c * m + h * v), (l = l * m + p * v), (u = u * m + g * v), (f = f * m + _ * v), m === 1 - o)) {
                const M = 1 / Math.sqrt(c * c + l * l + u * u + f * f);
                (c *= M), (l *= M), (u *= M), (f *= M);
            }
        }
        (e[t] = c), (e[t + 1] = l), (e[t + 2] = u), (e[t + 3] = f);
    }
    static multiplyQuaternionsFlat(e, t, n, i, s, a) {
        const o = n[i],
            c = n[i + 1],
            l = n[i + 2],
            u = n[i + 3],
            f = s[a],
            h = s[a + 1],
            p = s[a + 2],
            g = s[a + 3];
        return (e[t] = o * g + u * f + c * p - l * h), (e[t + 1] = c * g + u * h + l * f - o * p), (e[t + 2] = l * g + u * p + o * h - c * f), (e[t + 3] = u * g - o * f - c * h - l * p), e;
    }
    get x() {
        return this._x;
    }
    set x(e) {
        (this._x = e), this._onChangeCallback();
    }
    get y() {
        return this._y;
    }
    set y(e) {
        (this._y = e), this._onChangeCallback();
    }
    get z() {
        return this._z;
    }
    set z(e) {
        (this._z = e), this._onChangeCallback();
    }
    get w() {
        return this._w;
    }
    set w(e) {
        (this._w = e), this._onChangeCallback();
    }
    set(e, t, n, i) {
        return (this._x = e), (this._y = t), (this._z = n), (this._w = i), this._onChangeCallback(), this;
    }
    clone() {
        return new this.constructor(this._x, this._y, this._z, this._w);
    }
    copy(e) {
        return (this._x = e.x), (this._y = e.y), (this._z = e.z), (this._w = e.w), this._onChangeCallback(), this;
    }
    setFromEuler(e, t) {
        const n = e._x,
            i = e._y,
            s = e._z,
            a = e._order,
            o = Math.cos,
            c = Math.sin,
            l = o(n / 2),
            u = o(i / 2),
            f = o(s / 2),
            h = c(n / 2),
            p = c(i / 2),
            g = c(s / 2);
        switch (a) {
            case 'XYZ':
                (this._x = h * u * f + l * p * g), (this._y = l * p * f - h * u * g), (this._z = l * u * g + h * p * f), (this._w = l * u * f - h * p * g);
                break;
            case 'YXZ':
                (this._x = h * u * f + l * p * g), (this._y = l * p * f - h * u * g), (this._z = l * u * g - h * p * f), (this._w = l * u * f + h * p * g);
                break;
            case 'ZXY':
                (this._x = h * u * f - l * p * g), (this._y = l * p * f + h * u * g), (this._z = l * u * g + h * p * f), (this._w = l * u * f - h * p * g);
                break;
            case 'ZYX':
                (this._x = h * u * f - l * p * g), (this._y = l * p * f + h * u * g), (this._z = l * u * g - h * p * f), (this._w = l * u * f + h * p * g);
                break;
            case 'YZX':
                (this._x = h * u * f + l * p * g), (this._y = l * p * f + h * u * g), (this._z = l * u * g - h * p * f), (this._w = l * u * f - h * p * g);
                break;
            case 'XZY':
                (this._x = h * u * f - l * p * g), (this._y = l * p * f - h * u * g), (this._z = l * u * g + h * p * f), (this._w = l * u * f + h * p * g);
                break;
            default:
                console.warn('THREE.Quaternion: .setFromEuler() encountered an unknown order: ' + a);
        }
        return t !== !1 && this._onChangeCallback(), this;
    }
    setFromAxisAngle(e, t) {
        const n = t / 2,
            i = Math.sin(n);
        return (this._x = e.x * i), (this._y = e.y * i), (this._z = e.z * i), (this._w = Math.cos(n)), this._onChangeCallback(), this;
    }
    setFromRotationMatrix(e) {
        const t = e.elements,
            n = t[0],
            i = t[4],
            s = t[8],
            a = t[1],
            o = t[5],
            c = t[9],
            l = t[2],
            u = t[6],
            f = t[10],
            h = n + o + f;
        if (h > 0) {
            const p = 0.5 / Math.sqrt(h + 1);
            (this._w = 0.25 / p), (this._x = (u - c) * p), (this._y = (s - l) * p), (this._z = (a - i) * p);
        } else if (n > o && n > f) {
            const p = 2 * Math.sqrt(1 + n - o - f);
            (this._w = (u - c) / p), (this._x = 0.25 * p), (this._y = (i + a) / p), (this._z = (s + l) / p);
        } else if (o > f) {
            const p = 2 * Math.sqrt(1 + o - n - f);
            (this._w = (s - l) / p), (this._x = (i + a) / p), (this._y = 0.25 * p), (this._z = (c + u) / p);
        } else {
            const p = 2 * Math.sqrt(1 + f - n - o);
            (this._w = (a - i) / p), (this._x = (s + l) / p), (this._y = (c + u) / p), (this._z = 0.25 * p);
        }
        return this._onChangeCallback(), this;
    }
    setFromUnitVectors(e, t) {
        let n = e.dot(t) + 1;
        return (
            n < Number.EPSILON
                ? ((n = 0), Math.abs(e.x) > Math.abs(e.z) ? ((this._x = -e.y), (this._y = e.x), (this._z = 0), (this._w = n)) : ((this._x = 0), (this._y = -e.z), (this._z = e.y), (this._w = n)))
                : ((this._x = e.y * t.z - e.z * t.y), (this._y = e.z * t.x - e.x * t.z), (this._z = e.x * t.y - e.y * t.x), (this._w = n)),
            this.normalize()
        );
    }
    angleTo(e) {
        return 2 * Math.acos(Math.abs(rt(this.dot(e), -1, 1)));
    }
    rotateTowards(e, t) {
        const n = this.angleTo(e);
        if (n === 0) return this;
        const i = Math.min(1, t / n);
        return this.slerp(e, i), this;
    }
    identity() {
        return this.set(0, 0, 0, 1);
    }
    invert() {
        return this.conjugate();
    }
    conjugate() {
        return (this._x *= -1), (this._y *= -1), (this._z *= -1), this._onChangeCallback(), this;
    }
    dot(e) {
        return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
    }
    lengthSq() {
        return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
    }
    length() {
        return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
    }
    normalize() {
        let e = this.length();
        return (
            e === 0 ? ((this._x = 0), (this._y = 0), (this._z = 0), (this._w = 1)) : ((e = 1 / e), (this._x = this._x * e), (this._y = this._y * e), (this._z = this._z * e), (this._w = this._w * e)),
            this._onChangeCallback(),
            this
        );
    }
    multiply(e) {
        return this.multiplyQuaternions(this, e);
    }
    premultiply(e) {
        return this.multiplyQuaternions(e, this);
    }
    multiplyQuaternions(e, t) {
        const n = e._x,
            i = e._y,
            s = e._z,
            a = e._w,
            o = t._x,
            c = t._y,
            l = t._z,
            u = t._w;
        return (
            (this._x = n * u + a * o + i * l - s * c),
            (this._y = i * u + a * c + s * o - n * l),
            (this._z = s * u + a * l + n * c - i * o),
            (this._w = a * u - n * o - i * c - s * l),
            this._onChangeCallback(),
            this
        );
    }
    slerp(e, t) {
        if (t === 0) return this;
        if (t === 1) return this.copy(e);
        const n = this._x,
            i = this._y,
            s = this._z,
            a = this._w;
        let o = a * e._w + n * e._x + i * e._y + s * e._z;
        if ((o < 0 ? ((this._w = -e._w), (this._x = -e._x), (this._y = -e._y), (this._z = -e._z), (o = -o)) : this.copy(e), o >= 1))
            return (this._w = a), (this._x = n), (this._y = i), (this._z = s), this;
        const c = 1 - o * o;
        if (c <= Number.EPSILON) {
            const p = 1 - t;
            return (this._w = p * a + t * this._w), (this._x = p * n + t * this._x), (this._y = p * i + t * this._y), (this._z = p * s + t * this._z), this.normalize(), this._onChangeCallback(), this;
        }
        const l = Math.sqrt(c),
            u = Math.atan2(l, o),
            f = Math.sin((1 - t) * u) / l,
            h = Math.sin(t * u) / l;
        return (this._w = a * f + this._w * h), (this._x = n * f + this._x * h), (this._y = i * f + this._y * h), (this._z = s * f + this._z * h), this._onChangeCallback(), this;
    }
    slerpQuaternions(e, t, n) {
        return this.copy(e).slerp(t, n);
    }
    random() {
        const e = Math.random(),
            t = Math.sqrt(1 - e),
            n = Math.sqrt(e),
            i = 2 * Math.PI * Math.random(),
            s = 2 * Math.PI * Math.random();
        return this.set(t * Math.cos(i), n * Math.sin(s), n * Math.cos(s), t * Math.sin(i));
    }
    equals(e) {
        return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w;
    }
    fromArray(e, t = 0) {
        return (this._x = e[t]), (this._y = e[t + 1]), (this._z = e[t + 2]), (this._w = e[t + 3]), this._onChangeCallback(), this;
    }
    toArray(e = [], t = 0) {
        return (e[t] = this._x), (e[t + 1] = this._y), (e[t + 2] = this._z), (e[t + 3] = this._w), e;
    }
    fromBufferAttribute(e, t) {
        return (this._x = e.getX(t)), (this._y = e.getY(t)), (this._z = e.getZ(t)), (this._w = e.getW(t)), this;
    }
    toJSON() {
        return this.toArray();
    }
    _onChange(e) {
        return (this._onChangeCallback = e), this;
    }
    _onChangeCallback() {}
    *[Symbol.iterator]() {
        yield this._x, yield this._y, yield this._z, yield this._w;
    }
}
class R {
    constructor(e = 0, t = 0, n = 0) {
        (R.prototype.isVector3 = !0), (this.x = e), (this.y = t), (this.z = n);
    }
    set(e, t, n) {
        return n === void 0 && (n = this.z), (this.x = e), (this.y = t), (this.z = n), this;
    }
    setScalar(e) {
        return (this.x = e), (this.y = e), (this.z = e), this;
    }
    setX(e) {
        return (this.x = e), this;
    }
    setY(e) {
        return (this.y = e), this;
    }
    setZ(e) {
        return (this.z = e), this;
    }
    setComponent(e, t) {
        switch (e) {
            case 0:
                this.x = t;
                break;
            case 1:
                this.y = t;
                break;
            case 2:
                this.z = t;
                break;
            default:
                throw new Error('index is out of range: ' + e);
        }
        return this;
    }
    getComponent(e) {
        switch (e) {
            case 0:
                return this.x;
            case 1:
                return this.y;
            case 2:
                return this.z;
            default:
                throw new Error('index is out of range: ' + e);
        }
    }
    clone() {
        return new this.constructor(this.x, this.y, this.z);
    }
    copy(e) {
        return (this.x = e.x), (this.y = e.y), (this.z = e.z), this;
    }
    add(e) {
        return (this.x += e.x), (this.y += e.y), (this.z += e.z), this;
    }
    addScalar(e) {
        return (this.x += e), (this.y += e), (this.z += e), this;
    }
    addVectors(e, t) {
        return (this.x = e.x + t.x), (this.y = e.y + t.y), (this.z = e.z + t.z), this;
    }
    addScaledVector(e, t) {
        return (this.x += e.x * t), (this.y += e.y * t), (this.z += e.z * t), this;
    }
    sub(e) {
        return (this.x -= e.x), (this.y -= e.y), (this.z -= e.z), this;
    }
    subScalar(e) {
        return (this.x -= e), (this.y -= e), (this.z -= e), this;
    }
    subVectors(e, t) {
        return (this.x = e.x - t.x), (this.y = e.y - t.y), (this.z = e.z - t.z), this;
    }
    multiply(e) {
        return (this.x *= e.x), (this.y *= e.y), (this.z *= e.z), this;
    }
    multiplyScalar(e) {
        return (this.x *= e), (this.y *= e), (this.z *= e), this;
    }
    multiplyVectors(e, t) {
        return (this.x = e.x * t.x), (this.y = e.y * t.y), (this.z = e.z * t.z), this;
    }
    applyEuler(e) {
        return this.applyQuaternion(_a.setFromEuler(e));
    }
    applyAxisAngle(e, t) {
        return this.applyQuaternion(_a.setFromAxisAngle(e, t));
    }
    applyMatrix3(e) {
        const t = this.x,
            n = this.y,
            i = this.z,
            s = e.elements;
        return (this.x = s[0] * t + s[3] * n + s[6] * i), (this.y = s[1] * t + s[4] * n + s[7] * i), (this.z = s[2] * t + s[5] * n + s[8] * i), this;
    }
    applyNormalMatrix(e) {
        return this.applyMatrix3(e).normalize();
    }
    applyMatrix4(e) {
        const t = this.x,
            n = this.y,
            i = this.z,
            s = e.elements,
            a = 1 / (s[3] * t + s[7] * n + s[11] * i + s[15]);
        return (this.x = (s[0] * t + s[4] * n + s[8] * i + s[12]) * a), (this.y = (s[1] * t + s[5] * n + s[9] * i + s[13]) * a), (this.z = (s[2] * t + s[6] * n + s[10] * i + s[14]) * a), this;
    }
    applyQuaternion(e) {
        const t = this.x,
            n = this.y,
            i = this.z,
            s = e.x,
            a = e.y,
            o = e.z,
            c = e.w,
            l = c * t + a * i - o * n,
            u = c * n + o * t - s * i,
            f = c * i + s * n - a * t,
            h = -s * t - a * n - o * i;
        return (this.x = l * c + h * -s + u * -o - f * -a), (this.y = u * c + h * -a + f * -s - l * -o), (this.z = f * c + h * -o + l * -a - u * -s), this;
    }
    project(e) {
        return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);
    }
    unproject(e) {
        return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld);
    }
    transformDirection(e) {
        const t = this.x,
            n = this.y,
            i = this.z,
            s = e.elements;
        return (this.x = s[0] * t + s[4] * n + s[8] * i), (this.y = s[1] * t + s[5] * n + s[9] * i), (this.z = s[2] * t + s[6] * n + s[10] * i), this.normalize();
    }
    divide(e) {
        return (this.x /= e.x), (this.y /= e.y), (this.z /= e.z), this;
    }
    divideScalar(e) {
        return this.multiplyScalar(1 / e);
    }
    min(e) {
        return (this.x = Math.min(this.x, e.x)), (this.y = Math.min(this.y, e.y)), (this.z = Math.min(this.z, e.z)), this;
    }
    max(e) {
        return (this.x = Math.max(this.x, e.x)), (this.y = Math.max(this.y, e.y)), (this.z = Math.max(this.z, e.z)), this;
    }
    clamp(e, t) {
        return (this.x = Math.max(e.x, Math.min(t.x, this.x))), (this.y = Math.max(e.y, Math.min(t.y, this.y))), (this.z = Math.max(e.z, Math.min(t.z, this.z))), this;
    }
    clampScalar(e, t) {
        return (this.x = Math.max(e, Math.min(t, this.x))), (this.y = Math.max(e, Math.min(t, this.y))), (this.z = Math.max(e, Math.min(t, this.z))), this;
    }
    clampLength(e, t) {
        const n = this.length();
        return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
    }
    floor() {
        return (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), (this.z = Math.floor(this.z)), this;
    }
    ceil() {
        return (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), (this.z = Math.ceil(this.z)), this;
    }
    round() {
        return (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), (this.z = Math.round(this.z)), this;
    }
    roundToZero() {
        return (
            (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
            (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
            (this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z)),
            this
        );
    }
    negate() {
        return (this.x = -this.x), (this.y = -this.y), (this.z = -this.z), this;
    }
    dot(e) {
        return this.x * e.x + this.y * e.y + this.z * e.z;
    }
    lengthSq() {
        return this.x * this.x + this.y * this.y + this.z * this.z;
    }
    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }
    manhattanLength() {
        return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
    }
    normalize() {
        return this.divideScalar(this.length() || 1);
    }
    setLength(e) {
        return this.normalize().multiplyScalar(e);
    }
    lerp(e, t) {
        return (this.x += (e.x - this.x) * t), (this.y += (e.y - this.y) * t), (this.z += (e.z - this.z) * t), this;
    }
    lerpVectors(e, t, n) {
        return (this.x = e.x + (t.x - e.x) * n), (this.y = e.y + (t.y - e.y) * n), (this.z = e.z + (t.z - e.z) * n), this;
    }
    cross(e) {
        return this.crossVectors(this, e);
    }
    crossVectors(e, t) {
        const n = e.x,
            i = e.y,
            s = e.z,
            a = t.x,
            o = t.y,
            c = t.z;
        return (this.x = i * c - s * o), (this.y = s * a - n * c), (this.z = n * o - i * a), this;
    }
    projectOnVector(e) {
        const t = e.lengthSq();
        if (t === 0) return this.set(0, 0, 0);
        const n = e.dot(this) / t;
        return this.copy(e).multiplyScalar(n);
    }
    projectOnPlane(e) {
        return Es.copy(this).projectOnVector(e), this.sub(Es);
    }
    reflect(e) {
        return this.sub(Es.copy(e).multiplyScalar(2 * this.dot(e)));
    }
    angleTo(e) {
        const t = Math.sqrt(this.lengthSq() * e.lengthSq());
        if (t === 0) return Math.PI / 2;
        const n = this.dot(e) / t;
        return Math.acos(rt(n, -1, 1));
    }
    distanceTo(e) {
        return Math.sqrt(this.distanceToSquared(e));
    }
    distanceToSquared(e) {
        const t = this.x - e.x,
            n = this.y - e.y,
            i = this.z - e.z;
        return t * t + n * n + i * i;
    }
    manhattanDistanceTo(e) {
        return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z);
    }
    setFromSpherical(e) {
        return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
    }
    setFromSphericalCoords(e, t, n) {
        const i = Math.sin(t) * e;
        return (this.x = i * Math.sin(n)), (this.y = Math.cos(t) * e), (this.z = i * Math.cos(n)), this;
    }
    setFromCylindrical(e) {
        return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
    }
    setFromCylindricalCoords(e, t, n) {
        return (this.x = e * Math.sin(t)), (this.y = n), (this.z = e * Math.cos(t)), this;
    }
    setFromMatrixPosition(e) {
        const t = e.elements;
        return (this.x = t[12]), (this.y = t[13]), (this.z = t[14]), this;
    }
    setFromMatrixScale(e) {
        const t = this.setFromMatrixColumn(e, 0).length(),
            n = this.setFromMatrixColumn(e, 1).length(),
            i = this.setFromMatrixColumn(e, 2).length();
        return (this.x = t), (this.y = n), (this.z = i), this;
    }
    setFromMatrixColumn(e, t) {
        return this.fromArray(e.elements, t * 4);
    }
    setFromMatrix3Column(e, t) {
        return this.fromArray(e.elements, t * 3);
    }
    setFromEuler(e) {
        return (this.x = e._x), (this.y = e._y), (this.z = e._z), this;
    }
    setFromColor(e) {
        return (this.x = e.r), (this.y = e.g), (this.z = e.b), this;
    }
    equals(e) {
        return e.x === this.x && e.y === this.y && e.z === this.z;
    }
    fromArray(e, t = 0) {
        return (this.x = e[t]), (this.y = e[t + 1]), (this.z = e[t + 2]), this;
    }
    toArray(e = [], t = 0) {
        return (e[t] = this.x), (e[t + 1] = this.y), (e[t + 2] = this.z), e;
    }
    fromBufferAttribute(e, t) {
        return (this.x = e.getX(t)), (this.y = e.getY(t)), (this.z = e.getZ(t)), this;
    }
    random() {
        return (this.x = Math.random()), (this.y = Math.random()), (this.z = Math.random()), this;
    }
    randomDirection() {
        const e = (Math.random() - 0.5) * 2,
            t = Math.random() * Math.PI * 2,
            n = Math.sqrt(1 - e ** 2);
        return (this.x = n * Math.cos(t)), (this.y = n * Math.sin(t)), (this.z = e), this;
    }
    *[Symbol.iterator]() {
        yield this.x, yield this.y, yield this.z;
    }
}
const Es = new R(),
    _a = new Gn();
class zt {
    constructor(e = new R(1 / 0, 1 / 0, 1 / 0), t = new R(-1 / 0, -1 / 0, -1 / 0)) {
        (this.isBox3 = !0), (this.min = e), (this.max = t);
    }
    set(e, t) {
        return this.min.copy(e), this.max.copy(t), this;
    }
    setFromArray(e) {
        this.makeEmpty();
        for (let t = 0, n = e.length; t < n; t += 3) this.expandByPoint(Qt.fromArray(e, t));
        return this;
    }
    setFromBufferAttribute(e) {
        this.makeEmpty();
        for (let t = 0, n = e.count; t < n; t++) this.expandByPoint(Qt.fromBufferAttribute(e, t));
        return this;
    }
    setFromPoints(e) {
        this.makeEmpty();
        for (let t = 0, n = e.length; t < n; t++) this.expandByPoint(e[t]);
        return this;
    }
    setFromCenterAndSize(e, t) {
        const n = Qt.copy(t).multiplyScalar(0.5);
        return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
    }
    setFromObject(e, t = !1) {
        return this.makeEmpty(), this.expandByObject(e, t);
    }
    clone() {
        return new this.constructor().copy(this);
    }
    copy(e) {
        return this.min.copy(e.min), this.max.copy(e.max), this;
    }
    makeEmpty() {
        return (this.min.x = this.min.y = this.min.z = 1 / 0), (this.max.x = this.max.y = this.max.z = -1 / 0), this;
    }
    isEmpty() {
        return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
    }
    getCenter(e) {
        return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(0.5);
    }
    getSize(e) {
        return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
    }
    expandByPoint(e) {
        return this.min.min(e), this.max.max(e), this;
    }
    expandByVector(e) {
        return this.min.sub(e), this.max.add(e), this;
    }
    expandByScalar(e) {
        return this.min.addScalar(-e), this.max.addScalar(e), this;
    }
    expandByObject(e, t = !1) {
        if ((e.updateWorldMatrix(!1, !1), e.boundingBox !== void 0)) e.boundingBox === null && e.computeBoundingBox(), jn.copy(e.boundingBox), jn.applyMatrix4(e.matrixWorld), this.union(jn);
        else {
            const i = e.geometry;
            if (i !== void 0)
                if (t && i.attributes !== void 0 && i.attributes.position !== void 0) {
                    const s = i.attributes.position;
                    for (let a = 0, o = s.count; a < o; a++) Qt.fromBufferAttribute(s, a).applyMatrix4(e.matrixWorld), this.expandByPoint(Qt);
                } else i.boundingBox === null && i.computeBoundingBox(), jn.copy(i.boundingBox), jn.applyMatrix4(e.matrixWorld), this.union(jn);
        }
        const n = e.children;
        for (let i = 0, s = n.length; i < s; i++) this.expandByObject(n[i], t);
        return this;
    }
    containsPoint(e) {
        return !(e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y || e.z < this.min.z || e.z > this.max.z);
    }
    containsBox(e) {
        return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z;
    }
    getParameter(e, t) {
        return t.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y), (e.z - this.min.z) / (this.max.z - this.min.z));
    }
    intersectsBox(e) {
        return !(e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y || e.max.z < this.min.z || e.min.z > this.max.z);
    }
    intersectsSphere(e) {
        return this.clampPoint(e.center, Qt), Qt.distanceToSquared(e.center) <= e.radius * e.radius;
    }
    intersectsPlane(e) {
        let t, n;
        return (
            e.normal.x > 0 ? ((t = e.normal.x * this.min.x), (n = e.normal.x * this.max.x)) : ((t = e.normal.x * this.max.x), (n = e.normal.x * this.min.x)),
            e.normal.y > 0 ? ((t += e.normal.y * this.min.y), (n += e.normal.y * this.max.y)) : ((t += e.normal.y * this.max.y), (n += e.normal.y * this.min.y)),
            e.normal.z > 0 ? ((t += e.normal.z * this.min.z), (n += e.normal.z * this.max.z)) : ((t += e.normal.z * this.max.z), (n += e.normal.z * this.min.z)),
            t <= -e.constant && n >= -e.constant
        );
    }
    intersectsTriangle(e) {
        if (this.isEmpty()) return !1;
        this.getCenter(Ni), ur.subVectors(this.max, Ni), Yn.subVectors(e.a, Ni), Kn.subVectors(e.b, Ni), Zn.subVectors(e.c, Ni), pn.subVectors(Kn, Yn), mn.subVectors(Zn, Kn), Cn.subVectors(Yn, Zn);
        let t = [0, -pn.z, pn.y, 0, -mn.z, mn.y, 0, -Cn.z, Cn.y, pn.z, 0, -pn.x, mn.z, 0, -mn.x, Cn.z, 0, -Cn.x, -pn.y, pn.x, 0, -mn.y, mn.x, 0, -Cn.y, Cn.x, 0];
        return !Ts(t, Yn, Kn, Zn, ur) || ((t = [1, 0, 0, 0, 1, 0, 0, 0, 1]), !Ts(t, Yn, Kn, Zn, ur)) ? !1 : (fr.crossVectors(pn, mn), (t = [fr.x, fr.y, fr.z]), Ts(t, Yn, Kn, Zn, ur));
    }
    clampPoint(e, t) {
        return t.copy(e).clamp(this.min, this.max);
    }
    distanceToPoint(e) {
        return this.clampPoint(e, Qt).distanceTo(e);
    }
    getBoundingSphere(e) {
        return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center), (e.radius = this.getSize(Qt).length() * 0.5)), e;
    }
    intersect(e) {
        return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
    }
    union(e) {
        return this.min.min(e.min), this.max.max(e.max), this;
    }
    applyMatrix4(e) {
        return this.isEmpty()
            ? this
            : (Jt[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e),
              Jt[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e),
              Jt[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e),
              Jt[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e),
              Jt[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e),
              Jt[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e),
              Jt[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e),
              Jt[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e),
              this.setFromPoints(Jt),
              this);
    }
    translate(e) {
        return this.min.add(e), this.max.add(e), this;
    }
    equals(e) {
        return e.min.equals(this.min) && e.max.equals(this.max);
    }
}
const Jt = [new R(), new R(), new R(), new R(), new R(), new R(), new R(), new R()],
    Qt = new R(),
    jn = new zt(),
    Yn = new R(),
    Kn = new R(),
    Zn = new R(),
    pn = new R(),
    mn = new R(),
    Cn = new R(),
    Ni = new R(),
    ur = new R(),
    fr = new R(),
    Pn = new R();
function Ts(r, e, t, n, i) {
    for (let s = 0, a = r.length - 3; s <= a; s += 3) {
        Pn.fromArray(r, s);
        const o = i.x * Math.abs(Pn.x) + i.y * Math.abs(Pn.y) + i.z * Math.abs(Pn.z),
            c = e.dot(Pn),
            l = t.dot(Pn),
            u = n.dot(Pn);
        if (Math.max(-Math.max(c, l, u), Math.min(c, l, u)) > o) return !1;
    }
    return !0;
}
const Hu = new zt(),
    Oi = new R(),
    As = new R();
class ns {
    constructor(e = new R(), t = -1) {
        (this.center = e), (this.radius = t);
    }
    set(e, t) {
        return this.center.copy(e), (this.radius = t), this;
    }
    setFromPoints(e, t) {
        const n = this.center;
        t !== void 0 ? n.copy(t) : Hu.setFromPoints(e).getCenter(n);
        let i = 0;
        for (let s = 0, a = e.length; s < a; s++) i = Math.max(i, n.distanceToSquared(e[s]));
        return (this.radius = Math.sqrt(i)), this;
    }
    copy(e) {
        return this.center.copy(e.center), (this.radius = e.radius), this;
    }
    isEmpty() {
        return this.radius < 0;
    }
    makeEmpty() {
        return this.center.set(0, 0, 0), (this.radius = -1), this;
    }
    containsPoint(e) {
        return e.distanceToSquared(this.center) <= this.radius * this.radius;
    }
    distanceToPoint(e) {
        return e.distanceTo(this.center) - this.radius;
    }
    intersectsSphere(e) {
        const t = this.radius + e.radius;
        return e.center.distanceToSquared(this.center) <= t * t;
    }
    intersectsBox(e) {
        return e.intersectsSphere(this);
    }
    intersectsPlane(e) {
        return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
    }
    clampPoint(e, t) {
        const n = this.center.distanceToSquared(e);
        return t.copy(e), n > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t;
    }
    getBoundingBox(e) {
        return this.isEmpty() ? (e.makeEmpty(), e) : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
    }
    applyMatrix4(e) {
        return this.center.applyMatrix4(e), (this.radius = this.radius * e.getMaxScaleOnAxis()), this;
    }
    translate(e) {
        return this.center.add(e), this;
    }
    expandByPoint(e) {
        if (this.isEmpty()) return this.center.copy(e), (this.radius = 0), this;
        Oi.subVectors(e, this.center);
        const t = Oi.lengthSq();
        if (t > this.radius * this.radius) {
            const n = Math.sqrt(t),
                i = (n - this.radius) * 0.5;
            this.center.addScaledVector(Oi, i / n), (this.radius += i);
        }
        return this;
    }
    union(e) {
        return e.isEmpty()
            ? this
            : this.isEmpty()
            ? (this.copy(e), this)
            : (this.center.equals(e.center) === !0
                  ? (this.radius = Math.max(this.radius, e.radius))
                  : (As.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(Oi.copy(e.center).add(As)), this.expandByPoint(Oi.copy(e.center).sub(As))),
              this);
    }
    equals(e) {
        return e.center.equals(this.center) && e.radius === this.radius;
    }
    clone() {
        return new this.constructor().copy(this);
    }
}
const en = new R(),
    Cs = new R(),
    hr = new R(),
    gn = new R(),
    Ps = new R(),
    dr = new R(),
    Ls = new R();
class xo {
    constructor(e = new R(), t = new R(0, 0, -1)) {
        (this.origin = e), (this.direction = t);
    }
    set(e, t) {
        return this.origin.copy(e), this.direction.copy(t), this;
    }
    copy(e) {
        return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
    }
    at(e, t) {
        return t.copy(this.origin).addScaledVector(this.direction, e);
    }
    lookAt(e) {
        return this.direction.copy(e).sub(this.origin).normalize(), this;
    }
    recast(e) {
        return this.origin.copy(this.at(e, en)), this;
    }
    closestPointToPoint(e, t) {
        t.subVectors(e, this.origin);
        const n = t.dot(this.direction);
        return n < 0 ? t.copy(this.origin) : t.copy(this.origin).addScaledVector(this.direction, n);
    }
    distanceToPoint(e) {
        return Math.sqrt(this.distanceSqToPoint(e));
    }
    distanceSqToPoint(e) {
        const t = en.subVectors(e, this.origin).dot(this.direction);
        return t < 0 ? this.origin.distanceToSquared(e) : (en.copy(this.origin).addScaledVector(this.direction, t), en.distanceToSquared(e));
    }
    distanceSqToSegment(e, t, n, i) {
        Cs.copy(e).add(t).multiplyScalar(0.5), hr.copy(t).sub(e).normalize(), gn.copy(this.origin).sub(Cs);
        const s = e.distanceTo(t) * 0.5,
            a = -this.direction.dot(hr),
            o = gn.dot(this.direction),
            c = -gn.dot(hr),
            l = gn.lengthSq(),
            u = Math.abs(1 - a * a);
        let f, h, p, g;
        if (u > 0)
            if (((f = a * c - o), (h = a * o - c), (g = s * u), f >= 0))
                if (h >= -g)
                    if (h <= g) {
                        const _ = 1 / u;
                        (f *= _), (h *= _), (p = f * (f + a * h + 2 * o) + h * (a * f + h + 2 * c) + l);
                    } else (h = s), (f = Math.max(0, -(a * h + o))), (p = -f * f + h * (h + 2 * c) + l);
                else (h = -s), (f = Math.max(0, -(a * h + o))), (p = -f * f + h * (h + 2 * c) + l);
            else
                h <= -g
                    ? ((f = Math.max(0, -(-a * s + o))), (h = f > 0 ? -s : Math.min(Math.max(-s, -c), s)), (p = -f * f + h * (h + 2 * c) + l))
                    : h <= g
                    ? ((f = 0), (h = Math.min(Math.max(-s, -c), s)), (p = h * (h + 2 * c) + l))
                    : ((f = Math.max(0, -(a * s + o))), (h = f > 0 ? s : Math.min(Math.max(-s, -c), s)), (p = -f * f + h * (h + 2 * c) + l));
        else (h = a > 0 ? -s : s), (f = Math.max(0, -(a * h + o))), (p = -f * f + h * (h + 2 * c) + l);
        return n && n.copy(this.origin).addScaledVector(this.direction, f), i && i.copy(Cs).addScaledVector(hr, h), p;
    }
    intersectSphere(e, t) {
        en.subVectors(e.center, this.origin);
        const n = en.dot(this.direction),
            i = en.dot(en) - n * n,
            s = e.radius * e.radius;
        if (i > s) return null;
        const a = Math.sqrt(s - i),
            o = n - a,
            c = n + a;
        return c < 0 ? null : o < 0 ? this.at(c, t) : this.at(o, t);
    }
    intersectsSphere(e) {
        return this.distanceSqToPoint(e.center) <= e.radius * e.radius;
    }
    distanceToPlane(e) {
        const t = e.normal.dot(this.direction);
        if (t === 0) return e.distanceToPoint(this.origin) === 0 ? 0 : null;
        const n = -(this.origin.dot(e.normal) + e.constant) / t;
        return n >= 0 ? n : null;
    }
    intersectPlane(e, t) {
        const n = this.distanceToPlane(e);
        return n === null ? null : this.at(n, t);
    }
    intersectsPlane(e) {
        const t = e.distanceToPoint(this.origin);
        return t === 0 || e.normal.dot(this.direction) * t < 0;
    }
    intersectBox(e, t) {
        let n, i, s, a, o, c;
        const l = 1 / this.direction.x,
            u = 1 / this.direction.y,
            f = 1 / this.direction.z,
            h = this.origin;
        return (
            l >= 0 ? ((n = (e.min.x - h.x) * l), (i = (e.max.x - h.x) * l)) : ((n = (e.max.x - h.x) * l), (i = (e.min.x - h.x) * l)),
            u >= 0 ? ((s = (e.min.y - h.y) * u), (a = (e.max.y - h.y) * u)) : ((s = (e.max.y - h.y) * u), (a = (e.min.y - h.y) * u)),
            n > a ||
            s > i ||
            ((s > n || isNaN(n)) && (n = s),
            (a < i || isNaN(i)) && (i = a),
            f >= 0 ? ((o = (e.min.z - h.z) * f), (c = (e.max.z - h.z) * f)) : ((o = (e.max.z - h.z) * f), (c = (e.min.z - h.z) * f)),
            n > c || o > i) ||
            ((o > n || n !== n) && (n = o), (c < i || i !== i) && (i = c), i < 0)
                ? null
                : this.at(n >= 0 ? n : i, t)
        );
    }
    intersectsBox(e) {
        return this.intersectBox(e, en) !== null;
    }
    intersectTriangle(e, t, n, i, s) {
        Ps.subVectors(t, e), dr.subVectors(n, e), Ls.crossVectors(Ps, dr);
        let a = this.direction.dot(Ls),
            o;
        if (a > 0) {
            if (i) return null;
            o = 1;
        } else if (a < 0) (o = -1), (a = -a);
        else return null;
        gn.subVectors(this.origin, e);
        const c = o * this.direction.dot(dr.crossVectors(gn, dr));
        if (c < 0) return null;
        const l = o * this.direction.dot(Ps.cross(gn));
        if (l < 0 || c + l > a) return null;
        const u = -o * gn.dot(Ls);
        return u < 0 ? null : this.at(u / a, s);
    }
    applyMatrix4(e) {
        return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this;
    }
    equals(e) {
        return e.origin.equals(this.origin) && e.direction.equals(this.direction);
    }
    clone() {
        return new this.constructor().copy(this);
    }
}
class He {
    constructor() {
        (He.prototype.isMatrix4 = !0), (this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
    }
    set(e, t, n, i, s, a, o, c, l, u, f, h, p, g, _, m) {
        const d = this.elements;
        return (
            (d[0] = e),
            (d[4] = t),
            (d[8] = n),
            (d[12] = i),
            (d[1] = s),
            (d[5] = a),
            (d[9] = o),
            (d[13] = c),
            (d[2] = l),
            (d[6] = u),
            (d[10] = f),
            (d[14] = h),
            (d[3] = p),
            (d[7] = g),
            (d[11] = _),
            (d[15] = m),
            this
        );
    }
    identity() {
        return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
    }
    clone() {
        return new He().fromArray(this.elements);
    }
    copy(e) {
        const t = this.elements,
            n = e.elements;
        return (
            (t[0] = n[0]),
            (t[1] = n[1]),
            (t[2] = n[2]),
            (t[3] = n[3]),
            (t[4] = n[4]),
            (t[5] = n[5]),
            (t[6] = n[6]),
            (t[7] = n[7]),
            (t[8] = n[8]),
            (t[9] = n[9]),
            (t[10] = n[10]),
            (t[11] = n[11]),
            (t[12] = n[12]),
            (t[13] = n[13]),
            (t[14] = n[14]),
            (t[15] = n[15]),
            this
        );
    }
    copyPosition(e) {
        const t = this.elements,
            n = e.elements;
        return (t[12] = n[12]), (t[13] = n[13]), (t[14] = n[14]), this;
    }
    setFromMatrix3(e) {
        const t = e.elements;
        return this.set(t[0], t[3], t[6], 0, t[1], t[4], t[7], 0, t[2], t[5], t[8], 0, 0, 0, 0, 1), this;
    }
    extractBasis(e, t, n) {
        return e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this;
    }
    makeBasis(e, t, n) {
        return this.set(e.x, t.x, n.x, 0, e.y, t.y, n.y, 0, e.z, t.z, n.z, 0, 0, 0, 0, 1), this;
    }
    extractRotation(e) {
        const t = this.elements,
            n = e.elements,
            i = 1 / $n.setFromMatrixColumn(e, 0).length(),
            s = 1 / $n.setFromMatrixColumn(e, 1).length(),
            a = 1 / $n.setFromMatrixColumn(e, 2).length();
        return (
            (t[0] = n[0] * i),
            (t[1] = n[1] * i),
            (t[2] = n[2] * i),
            (t[3] = 0),
            (t[4] = n[4] * s),
            (t[5] = n[5] * s),
            (t[6] = n[6] * s),
            (t[7] = 0),
            (t[8] = n[8] * a),
            (t[9] = n[9] * a),
            (t[10] = n[10] * a),
            (t[11] = 0),
            (t[12] = 0),
            (t[13] = 0),
            (t[14] = 0),
            (t[15] = 1),
            this
        );
    }
    makeRotationFromEuler(e) {
        const t = this.elements,
            n = e.x,
            i = e.y,
            s = e.z,
            a = Math.cos(n),
            o = Math.sin(n),
            c = Math.cos(i),
            l = Math.sin(i),
            u = Math.cos(s),
            f = Math.sin(s);
        if (e.order === 'XYZ') {
            const h = a * u,
                p = a * f,
                g = o * u,
                _ = o * f;
            (t[0] = c * u), (t[4] = -c * f), (t[8] = l), (t[1] = p + g * l), (t[5] = h - _ * l), (t[9] = -o * c), (t[2] = _ - h * l), (t[6] = g + p * l), (t[10] = a * c);
        } else if (e.order === 'YXZ') {
            const h = c * u,
                p = c * f,
                g = l * u,
                _ = l * f;
            (t[0] = h + _ * o), (t[4] = g * o - p), (t[8] = a * l), (t[1] = a * f), (t[5] = a * u), (t[9] = -o), (t[2] = p * o - g), (t[6] = _ + h * o), (t[10] = a * c);
        } else if (e.order === 'ZXY') {
            const h = c * u,
                p = c * f,
                g = l * u,
                _ = l * f;
            (t[0] = h - _ * o), (t[4] = -a * f), (t[8] = g + p * o), (t[1] = p + g * o), (t[5] = a * u), (t[9] = _ - h * o), (t[2] = -a * l), (t[6] = o), (t[10] = a * c);
        } else if (e.order === 'ZYX') {
            const h = a * u,
                p = a * f,
                g = o * u,
                _ = o * f;
            (t[0] = c * u), (t[4] = g * l - p), (t[8] = h * l + _), (t[1] = c * f), (t[5] = _ * l + h), (t[9] = p * l - g), (t[2] = -l), (t[6] = o * c), (t[10] = a * c);
        } else if (e.order === 'YZX') {
            const h = a * c,
                p = a * l,
                g = o * c,
                _ = o * l;
            (t[0] = c * u), (t[4] = _ - h * f), (t[8] = g * f + p), (t[1] = f), (t[5] = a * u), (t[9] = -o * u), (t[2] = -l * u), (t[6] = p * f + g), (t[10] = h - _ * f);
        } else if (e.order === 'XZY') {
            const h = a * c,
                p = a * l,
                g = o * c,
                _ = o * l;
            (t[0] = c * u), (t[4] = -f), (t[8] = l * u), (t[1] = h * f + _), (t[5] = a * u), (t[9] = p * f - g), (t[2] = g * f - p), (t[6] = o * u), (t[10] = _ * f + h);
        }
        return (t[3] = 0), (t[7] = 0), (t[11] = 0), (t[12] = 0), (t[13] = 0), (t[14] = 0), (t[15] = 1), this;
    }
    makeRotationFromQuaternion(e) {
        return this.compose(Wu, e, qu);
    }
    lookAt(e, t, n) {
        const i = this.elements;
        return (
            St.subVectors(e, t),
            St.lengthSq() === 0 && (St.z = 1),
            St.normalize(),
            _n.crossVectors(n, St),
            _n.lengthSq() === 0 && (Math.abs(n.z) === 1 ? (St.x += 1e-4) : (St.z += 1e-4), St.normalize(), _n.crossVectors(n, St)),
            _n.normalize(),
            pr.crossVectors(St, _n),
            (i[0] = _n.x),
            (i[4] = pr.x),
            (i[8] = St.x),
            (i[1] = _n.y),
            (i[5] = pr.y),
            (i[9] = St.y),
            (i[2] = _n.z),
            (i[6] = pr.z),
            (i[10] = St.z),
            this
        );
    }
    multiply(e) {
        return this.multiplyMatrices(this, e);
    }
    premultiply(e) {
        return this.multiplyMatrices(e, this);
    }
    multiplyMatrices(e, t) {
        const n = e.elements,
            i = t.elements,
            s = this.elements,
            a = n[0],
            o = n[4],
            c = n[8],
            l = n[12],
            u = n[1],
            f = n[5],
            h = n[9],
            p = n[13],
            g = n[2],
            _ = n[6],
            m = n[10],
            d = n[14],
            y = n[3],
            x = n[7],
            v = n[11],
            M = n[15],
            b = i[0],
            P = i[4],
            A = i[8],
            S = i[12],
            E = i[1],
            N = i[5],
            O = i[9],
            D = i[13],
            U = i[2],
            B = i[6],
            $ = i[10],
            Y = i[14],
            k = i[3],
            K = i[7],
            ne = i[11],
            _e = i[15];
        return (
            (s[0] = a * b + o * E + c * U + l * k),
            (s[4] = a * P + o * N + c * B + l * K),
            (s[8] = a * A + o * O + c * $ + l * ne),
            (s[12] = a * S + o * D + c * Y + l * _e),
            (s[1] = u * b + f * E + h * U + p * k),
            (s[5] = u * P + f * N + h * B + p * K),
            (s[9] = u * A + f * O + h * $ + p * ne),
            (s[13] = u * S + f * D + h * Y + p * _e),
            (s[2] = g * b + _ * E + m * U + d * k),
            (s[6] = g * P + _ * N + m * B + d * K),
            (s[10] = g * A + _ * O + m * $ + d * ne),
            (s[14] = g * S + _ * D + m * Y + d * _e),
            (s[3] = y * b + x * E + v * U + M * k),
            (s[7] = y * P + x * N + v * B + M * K),
            (s[11] = y * A + x * O + v * $ + M * ne),
            (s[15] = y * S + x * D + v * Y + M * _e),
            this
        );
    }
    multiplyScalar(e) {
        const t = this.elements;
        return (
            (t[0] *= e),
            (t[4] *= e),
            (t[8] *= e),
            (t[12] *= e),
            (t[1] *= e),
            (t[5] *= e),
            (t[9] *= e),
            (t[13] *= e),
            (t[2] *= e),
            (t[6] *= e),
            (t[10] *= e),
            (t[14] *= e),
            (t[3] *= e),
            (t[7] *= e),
            (t[11] *= e),
            (t[15] *= e),
            this
        );
    }
    determinant() {
        const e = this.elements,
            t = e[0],
            n = e[4],
            i = e[8],
            s = e[12],
            a = e[1],
            o = e[5],
            c = e[9],
            l = e[13],
            u = e[2],
            f = e[6],
            h = e[10],
            p = e[14],
            g = e[3],
            _ = e[7],
            m = e[11],
            d = e[15];
        return (
            g * (+s * c * f - i * l * f - s * o * h + n * l * h + i * o * p - n * c * p) +
            _ * (+t * c * p - t * l * h + s * a * h - i * a * p + i * l * u - s * c * u) +
            m * (+t * l * f - t * o * p - s * a * f + n * a * p + s * o * u - n * l * u) +
            d * (-i * o * u - t * c * f + t * o * h + i * a * f - n * a * h + n * c * u)
        );
    }
    transpose() {
        const e = this.elements;
        let t;
        return (
            (t = e[1]),
            (e[1] = e[4]),
            (e[4] = t),
            (t = e[2]),
            (e[2] = e[8]),
            (e[8] = t),
            (t = e[6]),
            (e[6] = e[9]),
            (e[9] = t),
            (t = e[3]),
            (e[3] = e[12]),
            (e[12] = t),
            (t = e[7]),
            (e[7] = e[13]),
            (e[13] = t),
            (t = e[11]),
            (e[11] = e[14]),
            (e[14] = t),
            this
        );
    }
    setPosition(e, t, n) {
        const i = this.elements;
        return e.isVector3 ? ((i[12] = e.x), (i[13] = e.y), (i[14] = e.z)) : ((i[12] = e), (i[13] = t), (i[14] = n)), this;
    }
    invert() {
        const e = this.elements,
            t = e[0],
            n = e[1],
            i = e[2],
            s = e[3],
            a = e[4],
            o = e[5],
            c = e[6],
            l = e[7],
            u = e[8],
            f = e[9],
            h = e[10],
            p = e[11],
            g = e[12],
            _ = e[13],
            m = e[14],
            d = e[15],
            y = f * m * l - _ * h * l + _ * c * p - o * m * p - f * c * d + o * h * d,
            x = g * h * l - u * m * l - g * c * p + a * m * p + u * c * d - a * h * d,
            v = u * _ * l - g * f * l + g * o * p - a * _ * p - u * o * d + a * f * d,
            M = g * f * c - u * _ * c - g * o * h + a * _ * h + u * o * m - a * f * m,
            b = t * y + n * x + i * v + s * M;
        if (b === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        const P = 1 / b;
        return (
            (e[0] = y * P),
            (e[1] = (_ * h * s - f * m * s - _ * i * p + n * m * p + f * i * d - n * h * d) * P),
            (e[2] = (o * m * s - _ * c * s + _ * i * l - n * m * l - o * i * d + n * c * d) * P),
            (e[3] = (f * c * s - o * h * s - f * i * l + n * h * l + o * i * p - n * c * p) * P),
            (e[4] = x * P),
            (e[5] = (u * m * s - g * h * s + g * i * p - t * m * p - u * i * d + t * h * d) * P),
            (e[6] = (g * c * s - a * m * s - g * i * l + t * m * l + a * i * d - t * c * d) * P),
            (e[7] = (a * h * s - u * c * s + u * i * l - t * h * l - a * i * p + t * c * p) * P),
            (e[8] = v * P),
            (e[9] = (g * f * s - u * _ * s - g * n * p + t * _ * p + u * n * d - t * f * d) * P),
            (e[10] = (a * _ * s - g * o * s + g * n * l - t * _ * l - a * n * d + t * o * d) * P),
            (e[11] = (u * o * s - a * f * s - u * n * l + t * f * l + a * n * p - t * o * p) * P),
            (e[12] = M * P),
            (e[13] = (u * _ * i - g * f * i + g * n * h - t * _ * h - u * n * m + t * f * m) * P),
            (e[14] = (g * o * i - a * _ * i - g * n * c + t * _ * c + a * n * m - t * o * m) * P),
            (e[15] = (a * f * i - u * o * i + u * n * c - t * f * c - a * n * h + t * o * h) * P),
            this
        );
    }
    scale(e) {
        const t = this.elements,
            n = e.x,
            i = e.y,
            s = e.z;
        return (t[0] *= n), (t[4] *= i), (t[8] *= s), (t[1] *= n), (t[5] *= i), (t[9] *= s), (t[2] *= n), (t[6] *= i), (t[10] *= s), (t[3] *= n), (t[7] *= i), (t[11] *= s), this;
    }
    getMaxScaleOnAxis() {
        const e = this.elements,
            t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2],
            n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6],
            i = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
        return Math.sqrt(Math.max(t, n, i));
    }
    makeTranslation(e, t, n) {
        return this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1), this;
    }
    makeRotationX(e) {
        const t = Math.cos(e),
            n = Math.sin(e);
        return this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1), this;
    }
    makeRotationY(e) {
        const t = Math.cos(e),
            n = Math.sin(e);
        return this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1), this;
    }
    makeRotationZ(e) {
        const t = Math.cos(e),
            n = Math.sin(e);
        return this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
    }
    makeRotationAxis(e, t) {
        const n = Math.cos(t),
            i = Math.sin(t),
            s = 1 - n,
            a = e.x,
            o = e.y,
            c = e.z,
            l = s * a,
            u = s * o;
        return this.set(l * a + n, l * o - i * c, l * c + i * o, 0, l * o + i * c, u * o + n, u * c - i * a, 0, l * c - i * o, u * c + i * a, s * c * c + n, 0, 0, 0, 0, 1), this;
    }
    makeScale(e, t, n) {
        return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this;
    }
    makeShear(e, t, n, i, s, a) {
        return this.set(1, n, s, 0, e, 1, a, 0, t, i, 1, 0, 0, 0, 0, 1), this;
    }
    compose(e, t, n) {
        const i = this.elements,
            s = t._x,
            a = t._y,
            o = t._z,
            c = t._w,
            l = s + s,
            u = a + a,
            f = o + o,
            h = s * l,
            p = s * u,
            g = s * f,
            _ = a * u,
            m = a * f,
            d = o * f,
            y = c * l,
            x = c * u,
            v = c * f,
            M = n.x,
            b = n.y,
            P = n.z;
        return (
            (i[0] = (1 - (_ + d)) * M),
            (i[1] = (p + v) * M),
            (i[2] = (g - x) * M),
            (i[3] = 0),
            (i[4] = (p - v) * b),
            (i[5] = (1 - (h + d)) * b),
            (i[6] = (m + y) * b),
            (i[7] = 0),
            (i[8] = (g + x) * P),
            (i[9] = (m - y) * P),
            (i[10] = (1 - (h + _)) * P),
            (i[11] = 0),
            (i[12] = e.x),
            (i[13] = e.y),
            (i[14] = e.z),
            (i[15] = 1),
            this
        );
    }
    decompose(e, t, n) {
        const i = this.elements;
        let s = $n.set(i[0], i[1], i[2]).length();
        const a = $n.set(i[4], i[5], i[6]).length(),
            o = $n.set(i[8], i[9], i[10]).length();
        this.determinant() < 0 && (s = -s), (e.x = i[12]), (e.y = i[13]), (e.z = i[14]), Dt.copy(this);
        const l = 1 / s,
            u = 1 / a,
            f = 1 / o;
        return (
            (Dt.elements[0] *= l),
            (Dt.elements[1] *= l),
            (Dt.elements[2] *= l),
            (Dt.elements[4] *= u),
            (Dt.elements[5] *= u),
            (Dt.elements[6] *= u),
            (Dt.elements[8] *= f),
            (Dt.elements[9] *= f),
            (Dt.elements[10] *= f),
            t.setFromRotationMatrix(Dt),
            (n.x = s),
            (n.y = a),
            (n.z = o),
            this
        );
    }
    makePerspective(e, t, n, i, s, a) {
        const o = this.elements,
            c = (2 * s) / (t - e),
            l = (2 * s) / (n - i),
            u = (t + e) / (t - e),
            f = (n + i) / (n - i),
            h = -(a + s) / (a - s),
            p = (-2 * a * s) / (a - s);
        return (
            (o[0] = c),
            (o[4] = 0),
            (o[8] = u),
            (o[12] = 0),
            (o[1] = 0),
            (o[5] = l),
            (o[9] = f),
            (o[13] = 0),
            (o[2] = 0),
            (o[6] = 0),
            (o[10] = h),
            (o[14] = p),
            (o[3] = 0),
            (o[7] = 0),
            (o[11] = -1),
            (o[15] = 0),
            this
        );
    }
    makeOrthographic(e, t, n, i, s, a) {
        const o = this.elements,
            c = 1 / (t - e),
            l = 1 / (n - i),
            u = 1 / (a - s),
            f = (t + e) * c,
            h = (n + i) * l,
            p = (a + s) * u;
        return (
            (o[0] = 2 * c),
            (o[4] = 0),
            (o[8] = 0),
            (o[12] = -f),
            (o[1] = 0),
            (o[5] = 2 * l),
            (o[9] = 0),
            (o[13] = -h),
            (o[2] = 0),
            (o[6] = 0),
            (o[10] = -2 * u),
            (o[14] = -p),
            (o[3] = 0),
            (o[7] = 0),
            (o[11] = 0),
            (o[15] = 1),
            this
        );
    }
    equals(e) {
        const t = this.elements,
            n = e.elements;
        for (let i = 0; i < 16; i++) if (t[i] !== n[i]) return !1;
        return !0;
    }
    fromArray(e, t = 0) {
        for (let n = 0; n < 16; n++) this.elements[n] = e[n + t];
        return this;
    }
    toArray(e = [], t = 0) {
        const n = this.elements;
        return (
            (e[t] = n[0]),
            (e[t + 1] = n[1]),
            (e[t + 2] = n[2]),
            (e[t + 3] = n[3]),
            (e[t + 4] = n[4]),
            (e[t + 5] = n[5]),
            (e[t + 6] = n[6]),
            (e[t + 7] = n[7]),
            (e[t + 8] = n[8]),
            (e[t + 9] = n[9]),
            (e[t + 10] = n[10]),
            (e[t + 11] = n[11]),
            (e[t + 12] = n[12]),
            (e[t + 13] = n[13]),
            (e[t + 14] = n[14]),
            (e[t + 15] = n[15]),
            e
        );
    }
}
const $n = new R(),
    Dt = new He(),
    Wu = new R(0, 0, 0),
    qu = new R(1, 1, 1),
    _n = new R(),
    pr = new R(),
    St = new R(),
    xa = new He(),
    va = new Gn();
class is {
    constructor(e = 0, t = 0, n = 0, i = is.DEFAULT_ORDER) {
        (this.isEuler = !0), (this._x = e), (this._y = t), (this._z = n), (this._order = i);
    }
    get x() {
        return this._x;
    }
    set x(e) {
        (this._x = e), this._onChangeCallback();
    }
    get y() {
        return this._y;
    }
    set y(e) {
        (this._y = e), this._onChangeCallback();
    }
    get z() {
        return this._z;
    }
    set z(e) {
        (this._z = e), this._onChangeCallback();
    }
    get order() {
        return this._order;
    }
    set order(e) {
        (this._order = e), this._onChangeCallback();
    }
    set(e, t, n, i = this._order) {
        return (this._x = e), (this._y = t), (this._z = n), (this._order = i), this._onChangeCallback(), this;
    }
    clone() {
        return new this.constructor(this._x, this._y, this._z, this._order);
    }
    copy(e) {
        return (this._x = e._x), (this._y = e._y), (this._z = e._z), (this._order = e._order), this._onChangeCallback(), this;
    }
    setFromRotationMatrix(e, t = this._order, n = !0) {
        const i = e.elements,
            s = i[0],
            a = i[4],
            o = i[8],
            c = i[1],
            l = i[5],
            u = i[9],
            f = i[2],
            h = i[6],
            p = i[10];
        switch (t) {
            case 'XYZ':
                (this._y = Math.asin(rt(o, -1, 1))), Math.abs(o) < 0.9999999 ? ((this._x = Math.atan2(-u, p)), (this._z = Math.atan2(-a, s))) : ((this._x = Math.atan2(h, l)), (this._z = 0));
                break;
            case 'YXZ':
                (this._x = Math.asin(-rt(u, -1, 1))), Math.abs(u) < 0.9999999 ? ((this._y = Math.atan2(o, p)), (this._z = Math.atan2(c, l))) : ((this._y = Math.atan2(-f, s)), (this._z = 0));
                break;
            case 'ZXY':
                (this._x = Math.asin(rt(h, -1, 1))), Math.abs(h) < 0.9999999 ? ((this._y = Math.atan2(-f, p)), (this._z = Math.atan2(-a, l))) : ((this._y = 0), (this._z = Math.atan2(c, s)));
                break;
            case 'ZYX':
                (this._y = Math.asin(-rt(f, -1, 1))), Math.abs(f) < 0.9999999 ? ((this._x = Math.atan2(h, p)), (this._z = Math.atan2(c, s))) : ((this._x = 0), (this._z = Math.atan2(-a, l)));
                break;
            case 'YZX':
                (this._z = Math.asin(rt(c, -1, 1))), Math.abs(c) < 0.9999999 ? ((this._x = Math.atan2(-u, l)), (this._y = Math.atan2(-f, s))) : ((this._x = 0), (this._y = Math.atan2(o, p)));
                break;
            case 'XZY':
                (this._z = Math.asin(-rt(a, -1, 1))), Math.abs(a) < 0.9999999 ? ((this._x = Math.atan2(h, l)), (this._y = Math.atan2(o, s))) : ((this._x = Math.atan2(-u, p)), (this._y = 0));
                break;
            default:
                console.warn('THREE.Euler: .setFromRotationMatrix() encountered an unknown order: ' + t);
        }
        return (this._order = t), n === !0 && this._onChangeCallback(), this;
    }
    setFromQuaternion(e, t, n) {
        return xa.makeRotationFromQuaternion(e), this.setFromRotationMatrix(xa, t, n);
    }
    setFromVector3(e, t = this._order) {
        return this.set(e.x, e.y, e.z, t);
    }
    reorder(e) {
        return va.setFromEuler(this), this.setFromQuaternion(va, e);
    }
    equals(e) {
        return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order;
    }
    fromArray(e) {
        return (this._x = e[0]), (this._y = e[1]), (this._z = e[2]), e[3] !== void 0 && (this._order = e[3]), this._onChangeCallback(), this;
    }
    toArray(e = [], t = 0) {
        return (e[t] = this._x), (e[t + 1] = this._y), (e[t + 2] = this._z), (e[t + 3] = this._order), e;
    }
    _onChange(e) {
        return (this._onChangeCallback = e), this;
    }
    _onChangeCallback() {}
    *[Symbol.iterator]() {
        yield this._x, yield this._y, yield this._z, yield this._order;
    }
}
is.DEFAULT_ORDER = 'XYZ';
class vo {
    constructor() {
        this.mask = 1;
    }
    set(e) {
        this.mask = ((1 << e) | 0) >>> 0;
    }
    enable(e) {
        this.mask |= (1 << e) | 0;
    }
    enableAll() {
        this.mask = -1;
    }
    toggle(e) {
        this.mask ^= (1 << e) | 0;
    }
    disable(e) {
        this.mask &= ~((1 << e) | 0);
    }
    disableAll() {
        this.mask = 0;
    }
    test(e) {
        return (this.mask & e.mask) !== 0;
    }
    isEnabled(e) {
        return (this.mask & ((1 << e) | 0)) !== 0;
    }
}
let Xu = 0;
const ya = new R(),
    Jn = new Gn(),
    tn = new He(),
    mr = new R(),
    Fi = new R(),
    ju = new R(),
    Yu = new Gn(),
    Ma = new R(1, 0, 0),
    Sa = new R(0, 1, 0),
    ba = new R(0, 0, 1),
    Ku = { type: 'added' },
    wa = { type: 'removed' };
class ht extends Vn {
    constructor() {
        super(),
            (this.isObject3D = !0),
            Object.defineProperty(this, 'id', { value: Xu++ }),
            (this.uuid = Ai()),
            (this.name = ''),
            (this.type = 'Object3D'),
            (this.parent = null),
            (this.children = []),
            (this.up = ht.DEFAULT_UP.clone());
        const e = new R(),
            t = new is(),
            n = new Gn(),
            i = new R(1, 1, 1);
        function s() {
            n.setFromEuler(t, !1);
        }
        function a() {
            t.setFromQuaternion(n, void 0, !1);
        }
        t._onChange(s),
            n._onChange(a),
            Object.defineProperties(this, {
                position: { configurable: !0, enumerable: !0, value: e },
                rotation: { configurable: !0, enumerable: !0, value: t },
                quaternion: { configurable: !0, enumerable: !0, value: n },
                scale: { configurable: !0, enumerable: !0, value: i },
                modelViewMatrix: { value: new He() },
                normalMatrix: { value: new Ue() },
            }),
            (this.matrix = new He()),
            (this.matrixWorld = new He()),
            (this.matrixAutoUpdate = ht.DEFAULT_MATRIX_AUTO_UPDATE),
            (this.matrixWorldNeedsUpdate = !1),
            (this.matrixWorldAutoUpdate = ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE),
            (this.layers = new vo()),
            (this.visible = !0),
            (this.castShadow = !1),
            (this.receiveShadow = !1),
            (this.frustumCulled = !0),
            (this.renderOrder = 0),
            (this.animations = []),
            (this.userData = {});
    }
    onBeforeRender() {}
    onAfterRender() {}
    applyMatrix4(e) {
        this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e), this.matrix.decompose(this.position, this.quaternion, this.scale);
    }
    applyQuaternion(e) {
        return this.quaternion.premultiply(e), this;
    }
    setRotationFromAxisAngle(e, t) {
        this.quaternion.setFromAxisAngle(e, t);
    }
    setRotationFromEuler(e) {
        this.quaternion.setFromEuler(e, !0);
    }
    setRotationFromMatrix(e) {
        this.quaternion.setFromRotationMatrix(e);
    }
    setRotationFromQuaternion(e) {
        this.quaternion.copy(e);
    }
    rotateOnAxis(e, t) {
        return Jn.setFromAxisAngle(e, t), this.quaternion.multiply(Jn), this;
    }
    rotateOnWorldAxis(e, t) {
        return Jn.setFromAxisAngle(e, t), this.quaternion.premultiply(Jn), this;
    }
    rotateX(e) {
        return this.rotateOnAxis(Ma, e);
    }
    rotateY(e) {
        return this.rotateOnAxis(Sa, e);
    }
    rotateZ(e) {
        return this.rotateOnAxis(ba, e);
    }
    translateOnAxis(e, t) {
        return ya.copy(e).applyQuaternion(this.quaternion), this.position.add(ya.multiplyScalar(t)), this;
    }
    translateX(e) {
        return this.translateOnAxis(Ma, e);
    }
    translateY(e) {
        return this.translateOnAxis(Sa, e);
    }
    translateZ(e) {
        return this.translateOnAxis(ba, e);
    }
    localToWorld(e) {
        return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld);
    }
    worldToLocal(e) {
        return this.updateWorldMatrix(!0, !1), e.applyMatrix4(tn.copy(this.matrixWorld).invert());
    }
    lookAt(e, t, n) {
        e.isVector3 ? mr.copy(e) : mr.set(e, t, n);
        const i = this.parent;
        this.updateWorldMatrix(!0, !1),
            Fi.setFromMatrixPosition(this.matrixWorld),
            this.isCamera || this.isLight ? tn.lookAt(Fi, mr, this.up) : tn.lookAt(mr, Fi, this.up),
            this.quaternion.setFromRotationMatrix(tn),
            i && (tn.extractRotation(i.matrixWorld), Jn.setFromRotationMatrix(tn), this.quaternion.premultiply(Jn.invert()));
    }
    add(e) {
        if (arguments.length > 1) {
            for (let t = 0; t < arguments.length; t++) this.add(arguments[t]);
            return this;
        }
        return e === this
            ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this)
            : (e && e.isObject3D
                  ? (e.parent !== null && e.parent.remove(e), (e.parent = this), this.children.push(e), e.dispatchEvent(Ku))
                  : console.error('THREE.Object3D.add: object not an instance of THREE.Object3D.', e),
              this);
    }
    remove(e) {
        if (arguments.length > 1) {
            for (let n = 0; n < arguments.length; n++) this.remove(arguments[n]);
            return this;
        }
        const t = this.children.indexOf(e);
        return t !== -1 && ((e.parent = null), this.children.splice(t, 1), e.dispatchEvent(wa)), this;
    }
    removeFromParent() {
        const e = this.parent;
        return e !== null && e.remove(this), this;
    }
    clear() {
        for (let e = 0; e < this.children.length; e++) {
            const t = this.children[e];
            (t.parent = null), t.dispatchEvent(wa);
        }
        return (this.children.length = 0), this;
    }
    attach(e) {
        return (
            this.updateWorldMatrix(!0, !1),
            tn.copy(this.matrixWorld).invert(),
            e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), tn.multiply(e.parent.matrixWorld)),
            e.applyMatrix4(tn),
            this.add(e),
            e.updateWorldMatrix(!1, !0),
            this
        );
    }
    getObjectById(e) {
        return this.getObjectByProperty('id', e);
    }
    getObjectByName(e) {
        return this.getObjectByProperty('name', e);
    }
    getObjectByProperty(e, t) {
        if (this[e] === t) return this;
        for (let n = 0, i = this.children.length; n < i; n++) {
            const a = this.children[n].getObjectByProperty(e, t);
            if (a !== void 0) return a;
        }
    }
    getObjectsByProperty(e, t) {
        let n = [];
        this[e] === t && n.push(this);
        for (let i = 0, s = this.children.length; i < s; i++) {
            const a = this.children[i].getObjectsByProperty(e, t);
            a.length > 0 && (n = n.concat(a));
        }
        return n;
    }
    getWorldPosition(e) {
        return this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld);
    }
    getWorldQuaternion(e) {
        return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Fi, e, ju), e;
    }
    getWorldScale(e) {
        return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Fi, Yu, e), e;
    }
    getWorldDirection(e) {
        this.updateWorldMatrix(!0, !1);
        const t = this.matrixWorld.elements;
        return e.set(t[8], t[9], t[10]).normalize();
    }
    raycast() {}
    traverse(e) {
        e(this);
        const t = this.children;
        for (let n = 0, i = t.length; n < i; n++) t[n].traverse(e);
    }
    traverseVisible(e) {
        if (this.visible === !1) return;
        e(this);
        const t = this.children;
        for (let n = 0, i = t.length; n < i; n++) t[n].traverseVisible(e);
    }
    traverseAncestors(e) {
        const t = this.parent;
        t !== null && (e(t), t.traverseAncestors(e));
    }
    updateMatrix() {
        this.matrix.compose(this.position, this.quaternion, this.scale), (this.matrixWorldNeedsUpdate = !0);
    }
    updateMatrixWorld(e) {
        this.matrixAutoUpdate && this.updateMatrix(),
            (this.matrixWorldNeedsUpdate || e) &&
                (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), (this.matrixWorldNeedsUpdate = !1), (e = !0));
        const t = this.children;
        for (let n = 0, i = t.length; n < i; n++) {
            const s = t[n];
            (s.matrixWorldAutoUpdate === !0 || e === !0) && s.updateMatrixWorld(e);
        }
    }
    updateWorldMatrix(e, t) {
        const n = this.parent;
        if (
            (e === !0 && n !== null && n.matrixWorldAutoUpdate === !0 && n.updateWorldMatrix(!0, !1),
            this.matrixAutoUpdate && this.updateMatrix(),
            this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix),
            t === !0)
        ) {
            const i = this.children;
            for (let s = 0, a = i.length; s < a; s++) {
                const o = i[s];
                o.matrixWorldAutoUpdate === !0 && o.updateWorldMatrix(!1, !0);
            }
        }
    }
    toJSON(e) {
        const t = e === void 0 || typeof e == 'string',
            n = {};
        t &&
            ((e = { geometries: {}, materials: {}, textures: {}, images: {}, shapes: {}, skeletons: {}, animations: {}, nodes: {} }),
            (n.metadata = { version: 4.5, type: 'Object', generator: 'Object3D.toJSON' }));
        const i = {};
        (i.uuid = this.uuid),
            (i.type = this.type),
            this.name !== '' && (i.name = this.name),
            this.castShadow === !0 && (i.castShadow = !0),
            this.receiveShadow === !0 && (i.receiveShadow = !0),
            this.visible === !1 && (i.visible = !1),
            this.frustumCulled === !1 && (i.frustumCulled = !1),
            this.renderOrder !== 0 && (i.renderOrder = this.renderOrder),
            Object.keys(this.userData).length > 0 && (i.userData = this.userData),
            (i.layers = this.layers.mask),
            (i.matrix = this.matrix.toArray()),
            (i.up = this.up.toArray()),
            this.matrixAutoUpdate === !1 && (i.matrixAutoUpdate = !1),
            this.isInstancedMesh &&
                ((i.type = 'InstancedMesh'), (i.count = this.count), (i.instanceMatrix = this.instanceMatrix.toJSON()), this.instanceColor !== null && (i.instanceColor = this.instanceColor.toJSON()));
        function s(o, c) {
            return o[c.uuid] === void 0 && (o[c.uuid] = c.toJSON(e)), c.uuid;
        }
        if (this.isScene)
            this.background && (this.background.isColor ? (i.background = this.background.toJSON()) : this.background.isTexture && (i.background = this.background.toJSON(e).uuid)),
                this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (i.environment = this.environment.toJSON(e).uuid);
        else if (this.isMesh || this.isLine || this.isPoints) {
            i.geometry = s(e.geometries, this.geometry);
            const o = this.geometry.parameters;
            if (o !== void 0 && o.shapes !== void 0) {
                const c = o.shapes;
                if (Array.isArray(c))
                    for (let l = 0, u = c.length; l < u; l++) {
                        const f = c[l];
                        s(e.shapes, f);
                    }
                else s(e.shapes, c);
            }
        }
        if (
            (this.isSkinnedMesh &&
                ((i.bindMode = this.bindMode), (i.bindMatrix = this.bindMatrix.toArray()), this.skeleton !== void 0 && (s(e.skeletons, this.skeleton), (i.skeleton = this.skeleton.uuid))),
            this.material !== void 0)
        )
            if (Array.isArray(this.material)) {
                const o = [];
                for (let c = 0, l = this.material.length; c < l; c++) o.push(s(e.materials, this.material[c]));
                i.material = o;
            } else i.material = s(e.materials, this.material);
        if (this.children.length > 0) {
            i.children = [];
            for (let o = 0; o < this.children.length; o++) i.children.push(this.children[o].toJSON(e).object);
        }
        if (this.animations.length > 0) {
            i.animations = [];
            for (let o = 0; o < this.animations.length; o++) {
                const c = this.animations[o];
                i.animations.push(s(e.animations, c));
            }
        }
        if (t) {
            const o = a(e.geometries),
                c = a(e.materials),
                l = a(e.textures),
                u = a(e.images),
                f = a(e.shapes),
                h = a(e.skeletons),
                p = a(e.animations),
                g = a(e.nodes);
            o.length > 0 && (n.geometries = o),
                c.length > 0 && (n.materials = c),
                l.length > 0 && (n.textures = l),
                u.length > 0 && (n.images = u),
                f.length > 0 && (n.shapes = f),
                h.length > 0 && (n.skeletons = h),
                p.length > 0 && (n.animations = p),
                g.length > 0 && (n.nodes = g);
        }
        return (n.object = i), n;
        function a(o) {
            const c = [];
            for (const l in o) {
                const u = o[l];
                delete u.metadata, c.push(u);
            }
            return c;
        }
    }
    clone(e) {
        return new this.constructor().copy(this, e);
    }
    copy(e, t = !0) {
        if (
            ((this.name = e.name),
            this.up.copy(e.up),
            this.position.copy(e.position),
            (this.rotation.order = e.rotation.order),
            this.quaternion.copy(e.quaternion),
            this.scale.copy(e.scale),
            this.matrix.copy(e.matrix),
            this.matrixWorld.copy(e.matrixWorld),
            (this.matrixAutoUpdate = e.matrixAutoUpdate),
            (this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate),
            (this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate),
            (this.layers.mask = e.layers.mask),
            (this.visible = e.visible),
            (this.castShadow = e.castShadow),
            (this.receiveShadow = e.receiveShadow),
            (this.frustumCulled = e.frustumCulled),
            (this.renderOrder = e.renderOrder),
            (this.userData = JSON.parse(JSON.stringify(e.userData))),
            t === !0)
        )
            for (let n = 0; n < e.children.length; n++) {
                const i = e.children[n];
                this.add(i.clone());
            }
        return this;
    }
}
ht.DEFAULT_UP = new R(0, 1, 0);
ht.DEFAULT_MATRIX_AUTO_UPDATE = !0;
ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
const It = new R(),
    nn = new R(),
    Rs = new R(),
    rn = new R(),
    Qn = new R(),
    ei = new R(),
    Ea = new R(),
    Ds = new R(),
    Is = new R(),
    Us = new R();
let gr = !1;
class ut {
    constructor(e = new R(), t = new R(), n = new R()) {
        (this.a = e), (this.b = t), (this.c = n);
    }
    static getNormal(e, t, n, i) {
        i.subVectors(n, t), It.subVectors(e, t), i.cross(It);
        const s = i.lengthSq();
        return s > 0 ? i.multiplyScalar(1 / Math.sqrt(s)) : i.set(0, 0, 0);
    }
    static getBarycoord(e, t, n, i, s) {
        It.subVectors(i, t), nn.subVectors(n, t), Rs.subVectors(e, t);
        const a = It.dot(It),
            o = It.dot(nn),
            c = It.dot(Rs),
            l = nn.dot(nn),
            u = nn.dot(Rs),
            f = a * l - o * o;
        if (f === 0) return s.set(-2, -1, -1);
        const h = 1 / f,
            p = (l * c - o * u) * h,
            g = (a * u - o * c) * h;
        return s.set(1 - p - g, g, p);
    }
    static containsPoint(e, t, n, i) {
        return this.getBarycoord(e, t, n, i, rn), rn.x >= 0 && rn.y >= 0 && rn.x + rn.y <= 1;
    }
    static getUV(e, t, n, i, s, a, o, c) {
        return gr === !1 && (console.warn('THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation().'), (gr = !0)), this.getInterpolation(e, t, n, i, s, a, o, c);
    }
    static getInterpolation(e, t, n, i, s, a, o, c) {
        return this.getBarycoord(e, t, n, i, rn), c.setScalar(0), c.addScaledVector(s, rn.x), c.addScaledVector(a, rn.y), c.addScaledVector(o, rn.z), c;
    }
    static isFrontFacing(e, t, n, i) {
        return It.subVectors(n, t), nn.subVectors(e, t), It.cross(nn).dot(i) < 0;
    }
    set(e, t, n) {
        return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
    }
    setFromPointsAndIndices(e, t, n, i) {
        return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[i]), this;
    }
    setFromAttributeAndIndices(e, t, n, i) {
        return this.a.fromBufferAttribute(e, t), this.b.fromBufferAttribute(e, n), this.c.fromBufferAttribute(e, i), this;
    }
    clone() {
        return new this.constructor().copy(this);
    }
    copy(e) {
        return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
    }
    getArea() {
        return It.subVectors(this.c, this.b), nn.subVectors(this.a, this.b), It.cross(nn).length() * 0.5;
    }
    getMidpoint(e) {
        return e
            .addVectors(this.a, this.b)
            .add(this.c)
            .multiplyScalar(1 / 3);
    }
    getNormal(e) {
        return ut.getNormal(this.a, this.b, this.c, e);
    }
    getPlane(e) {
        return e.setFromCoplanarPoints(this.a, this.b, this.c);
    }
    getBarycoord(e, t) {
        return ut.getBarycoord(e, this.a, this.b, this.c, t);
    }
    getUV(e, t, n, i, s) {
        return gr === !1 && (console.warn('THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation().'), (gr = !0)), ut.getInterpolation(e, this.a, this.b, this.c, t, n, i, s);
    }
    getInterpolation(e, t, n, i, s) {
        return ut.getInterpolation(e, this.a, this.b, this.c, t, n, i, s);
    }
    containsPoint(e) {
        return ut.containsPoint(e, this.a, this.b, this.c);
    }
    isFrontFacing(e) {
        return ut.isFrontFacing(this.a, this.b, this.c, e);
    }
    intersectsBox(e) {
        return e.intersectsTriangle(this);
    }
    closestPointToPoint(e, t) {
        const n = this.a,
            i = this.b,
            s = this.c;
        let a, o;
        Qn.subVectors(i, n), ei.subVectors(s, n), Ds.subVectors(e, n);
        const c = Qn.dot(Ds),
            l = ei.dot(Ds);
        if (c <= 0 && l <= 0) return t.copy(n);
        Is.subVectors(e, i);
        const u = Qn.dot(Is),
            f = ei.dot(Is);
        if (u >= 0 && f <= u) return t.copy(i);
        const h = c * f - u * l;
        if (h <= 0 && c >= 0 && u <= 0) return (a = c / (c - u)), t.copy(n).addScaledVector(Qn, a);
        Us.subVectors(e, s);
        const p = Qn.dot(Us),
            g = ei.dot(Us);
        if (g >= 0 && p <= g) return t.copy(s);
        const _ = p * l - c * g;
        if (_ <= 0 && l >= 0 && g <= 0) return (o = l / (l - g)), t.copy(n).addScaledVector(ei, o);
        const m = u * g - p * f;
        if (m <= 0 && f - u >= 0 && p - g >= 0) return Ea.subVectors(s, i), (o = (f - u) / (f - u + (p - g))), t.copy(i).addScaledVector(Ea, o);
        const d = 1 / (m + _ + h);
        return (a = _ * d), (o = h * d), t.copy(n).addScaledVector(Qn, a).addScaledVector(ei, o);
    }
    equals(e) {
        return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
    }
}
let Zu = 0;
class or extends Vn {
    constructor() {
        super(),
            (this.isMaterial = !0),
            Object.defineProperty(this, 'id', { value: Zu++ }),
            (this.uuid = Ai()),
            (this.name = ''),
            (this.type = 'Material'),
            (this.blending = _i),
            (this.side = Zt),
            (this.vertexColors = !1),
            (this.opacity = 1),
            (this.transparent = !1),
            (this.blendSrc = bl),
            (this.blendDst = wl),
            (this.blendEquation = pi),
            (this.blendSrcAlpha = null),
            (this.blendDstAlpha = null),
            (this.blendEquationAlpha = null),
            (this.depthFunc = Qs),
            (this.depthTest = !0),
            (this.depthWrite = !0),
            (this.stencilWriteMask = 255),
            (this.stencilFunc = yu),
            (this.stencilRef = 0),
            (this.stencilFuncMask = 255),
            (this.stencilFail = Ms),
            (this.stencilZFail = Ms),
            (this.stencilZPass = Ms),
            (this.stencilWrite = !1),
            (this.clippingPlanes = null),
            (this.clipIntersection = !1),
            (this.clipShadows = !1),
            (this.shadowSide = null),
            (this.colorWrite = !0),
            (this.precision = null),
            (this.polygonOffset = !1),
            (this.polygonOffsetFactor = 0),
            (this.polygonOffsetUnits = 0),
            (this.dithering = !1),
            (this.alphaToCoverage = !1),
            (this.premultipliedAlpha = !1),
            (this.forceSinglePass = !1),
            (this.visible = !0),
            (this.toneMapped = !0),
            (this.userData = {}),
            (this.version = 0),
            (this._alphaTest = 0);
    }
    get alphaTest() {
        return this._alphaTest;
    }
    set alphaTest(e) {
        this._alphaTest > 0 != e > 0 && this.version++, (this._alphaTest = e);
    }
    onBuild() {}
    onBeforeRender() {}
    onBeforeCompile() {}
    customProgramCacheKey() {
        return this.onBeforeCompile.toString();
    }
    setValues(e) {
        if (e !== void 0)
            for (const t in e) {
                const n = e[t];
                if (n === void 0) {
                    console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);
                    continue;
                }
                const i = this[t];
                if (i === void 0) {
                    console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);
                    continue;
                }
                i && i.isColor ? i.set(n) : i && i.isVector3 && n && n.isVector3 ? i.copy(n) : (this[t] = n);
            }
    }
    toJSON(e) {
        const t = e === void 0 || typeof e == 'string';
        t && (e = { textures: {}, images: {} });
        const n = { metadata: { version: 4.5, type: 'Material', generator: 'Material.toJSON' } };
        (n.uuid = this.uuid),
            (n.type = this.type),
            this.name !== '' && (n.name = this.name),
            this.color && this.color.isColor && (n.color = this.color.getHex()),
            this.roughness !== void 0 && (n.roughness = this.roughness),
            this.metalness !== void 0 && (n.metalness = this.metalness),
            this.sheen !== void 0 && (n.sheen = this.sheen),
            this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()),
            this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness),
            this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()),
            this.emissiveIntensity && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity),
            this.specular && this.specular.isColor && (n.specular = this.specular.getHex()),
            this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity),
            this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()),
            this.shininess !== void 0 && (n.shininess = this.shininess),
            this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat),
            this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness),
            this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid),
            this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid),
            this.clearcoatNormalMap &&
                this.clearcoatNormalMap.isTexture &&
                ((n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid), (n.clearcoatNormalScale = this.clearcoatNormalScale.toArray())),
            this.iridescence !== void 0 && (n.iridescence = this.iridescence),
            this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR),
            this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange),
            this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid),
            this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid),
            this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid),
            this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid),
            this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid),
            this.lightMap && this.lightMap.isTexture && ((n.lightMap = this.lightMap.toJSON(e).uuid), (n.lightMapIntensity = this.lightMapIntensity)),
            this.aoMap && this.aoMap.isTexture && ((n.aoMap = this.aoMap.toJSON(e).uuid), (n.aoMapIntensity = this.aoMapIntensity)),
            this.bumpMap && this.bumpMap.isTexture && ((n.bumpMap = this.bumpMap.toJSON(e).uuid), (n.bumpScale = this.bumpScale)),
            this.normalMap && this.normalMap.isTexture && ((n.normalMap = this.normalMap.toJSON(e).uuid), (n.normalMapType = this.normalMapType), (n.normalScale = this.normalScale.toArray())),
            this.displacementMap &&
                this.displacementMap.isTexture &&
                ((n.displacementMap = this.displacementMap.toJSON(e).uuid), (n.displacementScale = this.displacementScale), (n.displacementBias = this.displacementBias)),
            this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid),
            this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid),
            this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid),
            this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid),
            this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid),
            this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid),
            this.envMap && this.envMap.isTexture && ((n.envMap = this.envMap.toJSON(e).uuid), this.combine !== void 0 && (n.combine = this.combine)),
            this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity),
            this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity),
            this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio),
            this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid),
            this.transmission !== void 0 && (n.transmission = this.transmission),
            this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid),
            this.thickness !== void 0 && (n.thickness = this.thickness),
            this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid),
            this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance),
            this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()),
            this.size !== void 0 && (n.size = this.size),
            this.shadowSide !== null && (n.shadowSide = this.shadowSide),
            this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation),
            this.blending !== _i && (n.blending = this.blending),
            this.side !== Zt && (n.side = this.side),
            this.vertexColors && (n.vertexColors = !0),
            this.opacity < 1 && (n.opacity = this.opacity),
            this.transparent === !0 && (n.transparent = this.transparent),
            (n.depthFunc = this.depthFunc),
            (n.depthTest = this.depthTest),
            (n.depthWrite = this.depthWrite),
            (n.colorWrite = this.colorWrite),
            (n.stencilWrite = this.stencilWrite),
            (n.stencilWriteMask = this.stencilWriteMask),
            (n.stencilFunc = this.stencilFunc),
            (n.stencilRef = this.stencilRef),
            (n.stencilFuncMask = this.stencilFuncMask),
            (n.stencilFail = this.stencilFail),
            (n.stencilZFail = this.stencilZFail),
            (n.stencilZPass = this.stencilZPass),
            this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation),
            this.polygonOffset === !0 && (n.polygonOffset = !0),
            this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor),
            this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits),
            this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth),
            this.dashSize !== void 0 && (n.dashSize = this.dashSize),
            this.gapSize !== void 0 && (n.gapSize = this.gapSize),
            this.scale !== void 0 && (n.scale = this.scale),
            this.dithering === !0 && (n.dithering = !0),
            this.alphaTest > 0 && (n.alphaTest = this.alphaTest),
            this.alphaToCoverage === !0 && (n.alphaToCoverage = this.alphaToCoverage),
            this.premultipliedAlpha === !0 && (n.premultipliedAlpha = this.premultipliedAlpha),
            this.forceSinglePass === !0 && (n.forceSinglePass = this.forceSinglePass),
            this.wireframe === !0 && (n.wireframe = this.wireframe),
            this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth),
            this.wireframeLinecap !== 'round' && (n.wireframeLinecap = this.wireframeLinecap),
            this.wireframeLinejoin !== 'round' && (n.wireframeLinejoin = this.wireframeLinejoin),
            this.flatShading === !0 && (n.flatShading = this.flatShading),
            this.visible === !1 && (n.visible = !1),
            this.toneMapped === !1 && (n.toneMapped = !1),
            this.fog === !1 && (n.fog = !1),
            Object.keys(this.userData).length > 0 && (n.userData = this.userData);
        function i(s) {
            const a = [];
            for (const o in s) {
                const c = s[o];
                delete c.metadata, a.push(c);
            }
            return a;
        }
        if (t) {
            const s = i(e.textures),
                a = i(e.images);
            s.length > 0 && (n.textures = s), a.length > 0 && (n.images = a);
        }
        return n;
    }
    clone() {
        return new this.constructor().copy(this);
    }
    copy(e) {
        (this.name = e.name),
            (this.blending = e.blending),
            (this.side = e.side),
            (this.vertexColors = e.vertexColors),
            (this.opacity = e.opacity),
            (this.transparent = e.transparent),
            (this.blendSrc = e.blendSrc),
            (this.blendDst = e.blendDst),
            (this.blendEquation = e.blendEquation),
            (this.blendSrcAlpha = e.blendSrcAlpha),
            (this.blendDstAlpha = e.blendDstAlpha),
            (this.blendEquationAlpha = e.blendEquationAlpha),
            (this.depthFunc = e.depthFunc),
            (this.depthTest = e.depthTest),
            (this.depthWrite = e.depthWrite),
            (this.stencilWriteMask = e.stencilWriteMask),
            (this.stencilFunc = e.stencilFunc),
            (this.stencilRef = e.stencilRef),
            (this.stencilFuncMask = e.stencilFuncMask),
            (this.stencilFail = e.stencilFail),
            (this.stencilZFail = e.stencilZFail),
            (this.stencilZPass = e.stencilZPass),
            (this.stencilWrite = e.stencilWrite);
        const t = e.clippingPlanes;
        let n = null;
        if (t !== null) {
            const i = t.length;
            n = new Array(i);
            for (let s = 0; s !== i; ++s) n[s] = t[s].clone();
        }
        return (
            (this.clippingPlanes = n),
            (this.clipIntersection = e.clipIntersection),
            (this.clipShadows = e.clipShadows),
            (this.shadowSide = e.shadowSide),
            (this.colorWrite = e.colorWrite),
            (this.precision = e.precision),
            (this.polygonOffset = e.polygonOffset),
            (this.polygonOffsetFactor = e.polygonOffsetFactor),
            (this.polygonOffsetUnits = e.polygonOffsetUnits),
            (this.dithering = e.dithering),
            (this.alphaTest = e.alphaTest),
            (this.alphaToCoverage = e.alphaToCoverage),
            (this.premultipliedAlpha = e.premultipliedAlpha),
            (this.forceSinglePass = e.forceSinglePass),
            (this.visible = e.visible),
            (this.toneMapped = e.toneMapped),
            (this.userData = JSON.parse(JSON.stringify(e.userData))),
            this
        );
    }
    dispose() {
        this.dispatchEvent({ type: 'dispose' });
    }
    set needsUpdate(e) {
        e === !0 && this.version++;
    }
}
const Ul = {
        aliceblue: 15792383,
        antiquewhite: 16444375,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 15794175,
        beige: 16119260,
        bisque: 16770244,
        black: 0,
        blanchedalmond: 16772045,
        blue: 255,
        blueviolet: 9055202,
        brown: 10824234,
        burlywood: 14596231,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 13789470,
        coral: 16744272,
        cornflowerblue: 6591981,
        cornsilk: 16775388,
        crimson: 14423100,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 12092939,
        darkgray: 11119017,
        darkgreen: 25600,
        darkgrey: 11119017,
        darkkhaki: 12433259,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 16747520,
        darkorchid: 10040012,
        darkred: 9109504,
        darksalmon: 15308410,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 16716947,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 11674146,
        floralwhite: 16775920,
        forestgreen: 2263842,
        fuchsia: 16711935,
        gainsboro: 14474460,
        ghostwhite: 16316671,
        gold: 16766720,
        goldenrod: 14329120,
        gray: 8421504,
        green: 32768,
        greenyellow: 11403055,
        grey: 8421504,
        honeydew: 15794160,
        hotpink: 16738740,
        indianred: 13458524,
        indigo: 4915330,
        ivory: 16777200,
        khaki: 15787660,
        lavender: 15132410,
        lavenderblush: 16773365,
        lawngreen: 8190976,
        lemonchiffon: 16775885,
        lightblue: 11393254,
        lightcoral: 15761536,
        lightcyan: 14745599,
        lightgoldenrodyellow: 16448210,
        lightgray: 13882323,
        lightgreen: 9498256,
        lightgrey: 13882323,
        lightpink: 16758465,
        lightsalmon: 16752762,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 11584734,
        lightyellow: 16777184,
        lime: 65280,
        limegreen: 3329330,
        linen: 16445670,
        magenta: 16711935,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 12211667,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 13047173,
        midnightblue: 1644912,
        mintcream: 16121850,
        mistyrose: 16770273,
        moccasin: 16770229,
        navajowhite: 16768685,
        navy: 128,
        oldlace: 16643558,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 16753920,
        orangered: 16729344,
        orchid: 14315734,
        palegoldenrod: 15657130,
        palegreen: 10025880,
        paleturquoise: 11529966,
        palevioletred: 14381203,
        papayawhip: 16773077,
        peachpuff: 16767673,
        peru: 13468991,
        pink: 16761035,
        plum: 14524637,
        powderblue: 11591910,
        purple: 8388736,
        rebeccapurple: 6697881,
        red: 16711680,
        rosybrown: 12357519,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 16416882,
        sandybrown: 16032864,
        seagreen: 3050327,
        seashell: 16774638,
        sienna: 10506797,
        silver: 12632256,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 16775930,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 13808780,
        teal: 32896,
        thistle: 14204888,
        tomato: 16737095,
        turquoise: 4251856,
        violet: 15631086,
        wheat: 16113331,
        white: 16777215,
        whitesmoke: 16119285,
        yellow: 16776960,
        yellowgreen: 10145074,
    },
    Ut = { h: 0, s: 0, l: 0 },
    _r = { h: 0, s: 0, l: 0 };
function Ns(r, e, t) {
    return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? r + (e - r) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? r + (e - r) * 6 * (2 / 3 - t) : r;
}
class ze {
    constructor(e, t, n) {
        return (this.isColor = !0), (this.r = 1), (this.g = 1), (this.b = 1), t === void 0 && n === void 0 ? this.set(e) : this.setRGB(e, t, n);
    }
    set(e) {
        return e && e.isColor ? this.copy(e) : typeof e == 'number' ? this.setHex(e) : typeof e == 'string' && this.setStyle(e), this;
    }
    setScalar(e) {
        return (this.r = e), (this.g = e), (this.b = e), this;
    }
    setHex(e, t = Xt) {
        return (e = Math.floor(e)), (this.r = ((e >> 16) & 255) / 255), (this.g = ((e >> 8) & 255) / 255), (this.b = (e & 255) / 255), Mt.toWorkingColorSpace(this, t), this;
    }
    setRGB(e, t, n, i = Mt.workingColorSpace) {
        return (this.r = e), (this.g = t), (this.b = n), Mt.toWorkingColorSpace(this, i), this;
    }
    setHSL(e, t, n, i = Mt.workingColorSpace) {
        if (((e = _o(e, 1)), (t = rt(t, 0, 1)), (n = rt(n, 0, 1)), t === 0)) this.r = this.g = this.b = n;
        else {
            const s = n <= 0.5 ? n * (1 + t) : n + t - n * t,
                a = 2 * n - s;
            (this.r = Ns(a, s, e + 1 / 3)), (this.g = Ns(a, s, e)), (this.b = Ns(a, s, e - 1 / 3));
        }
        return Mt.toWorkingColorSpace(this, i), this;
    }
    setStyle(e, t = Xt) {
        function n(s) {
            s !== void 0 && parseFloat(s) < 1 && console.warn('THREE.Color: Alpha component of ' + e + ' will be ignored.');
        }
        let i;
        if ((i = /^(\w+)\(([^\)]*)\)/.exec(e))) {
            let s;
            const a = i[1],
                o = i[2];
            switch (a) {
                case 'rgb':
                case 'rgba':
                    if ((s = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)))
                        return (
                            (this.r = Math.min(255, parseInt(s[1], 10)) / 255),
                            (this.g = Math.min(255, parseInt(s[2], 10)) / 255),
                            (this.b = Math.min(255, parseInt(s[3], 10)) / 255),
                            Mt.toWorkingColorSpace(this, t),
                            n(s[4]),
                            this
                        );
                    if ((s = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)))
                        return (
                            (this.r = Math.min(100, parseInt(s[1], 10)) / 100),
                            (this.g = Math.min(100, parseInt(s[2], 10)) / 100),
                            (this.b = Math.min(100, parseInt(s[3], 10)) / 100),
                            Mt.toWorkingColorSpace(this, t),
                            n(s[4]),
                            this
                        );
                    break;
                case 'hsl':
                case 'hsla':
                    if ((s = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))) {
                        const c = parseFloat(s[1]) / 360,
                            l = parseFloat(s[2]) / 100,
                            u = parseFloat(s[3]) / 100;
                        return n(s[4]), this.setHSL(c, l, u, t);
                    }
                    break;
                default:
                    console.warn('THREE.Color: Unknown color model ' + e);
            }
        } else if ((i = /^\#([A-Fa-f\d]+)$/.exec(e))) {
            const s = i[1],
                a = s.length;
            if (a === 3) return this.setRGB(parseInt(s.charAt(0), 16) / 15, parseInt(s.charAt(1), 16) / 15, parseInt(s.charAt(2), 16) / 15, t);
            if (a === 6) return this.setHex(parseInt(s, 16), t);
            console.warn('THREE.Color: Invalid hex color ' + e);
        } else if (e && e.length > 0) return this.setColorName(e, t);
        return this;
    }
    setColorName(e, t = Xt) {
        const n = Ul[e.toLowerCase()];
        return n !== void 0 ? this.setHex(n, t) : console.warn('THREE.Color: Unknown color ' + e), this;
    }
    clone() {
        return new this.constructor(this.r, this.g, this.b);
    }
    copy(e) {
        return (this.r = e.r), (this.g = e.g), (this.b = e.b), this;
    }
    copySRGBToLinear(e) {
        return (this.r = vi(e.r)), (this.g = vi(e.g)), (this.b = vi(e.b)), this;
    }
    copyLinearToSRGB(e) {
        return (this.r = bs(e.r)), (this.g = bs(e.g)), (this.b = bs(e.b)), this;
    }
    convertSRGBToLinear() {
        return this.copySRGBToLinear(this), this;
    }
    convertLinearToSRGB() {
        return this.copyLinearToSRGB(this), this;
    }
    getHex(e = Xt) {
        return Mt.fromWorkingColorSpace(ct.copy(this), e), (rt(ct.r * 255, 0, 255) << 16) ^ (rt(ct.g * 255, 0, 255) << 8) ^ (rt(ct.b * 255, 0, 255) << 0);
    }
    getHexString(e = Xt) {
        return ('000000' + this.getHex(e).toString(16)).slice(-6);
    }
    getHSL(e, t = Mt.workingColorSpace) {
        Mt.fromWorkingColorSpace(ct.copy(this), t);
        const n = ct.r,
            i = ct.g,
            s = ct.b,
            a = Math.max(n, i, s),
            o = Math.min(n, i, s);
        let c, l;
        const u = (o + a) / 2;
        if (o === a) (c = 0), (l = 0);
        else {
            const f = a - o;
            switch (((l = u <= 0.5 ? f / (a + o) : f / (2 - a - o)), a)) {
                case n:
                    c = (i - s) / f + (i < s ? 6 : 0);
                    break;
                case i:
                    c = (s - n) / f + 2;
                    break;
                case s:
                    c = (n - i) / f + 4;
                    break;
            }
            c /= 6;
        }
        return (e.h = c), (e.s = l), (e.l = u), e;
    }
    getRGB(e, t = Mt.workingColorSpace) {
        return Mt.fromWorkingColorSpace(ct.copy(this), t), (e.r = ct.r), (e.g = ct.g), (e.b = ct.b), e;
    }
    getStyle(e = Xt) {
        Mt.fromWorkingColorSpace(ct.copy(this), e);
        const t = ct.r,
            n = ct.g,
            i = ct.b;
        return e !== Xt ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})` : `rgb(${(t * 255) | 0},${(n * 255) | 0},${(i * 255) | 0})`;
    }
    offsetHSL(e, t, n) {
        return this.getHSL(Ut), (Ut.h += e), (Ut.s += t), (Ut.l += n), this.setHSL(Ut.h, Ut.s, Ut.l), this;
    }
    add(e) {
        return (this.r += e.r), (this.g += e.g), (this.b += e.b), this;
    }
    addColors(e, t) {
        return (this.r = e.r + t.r), (this.g = e.g + t.g), (this.b = e.b + t.b), this;
    }
    addScalar(e) {
        return (this.r += e), (this.g += e), (this.b += e), this;
    }
    sub(e) {
        return (this.r = Math.max(0, this.r - e.r)), (this.g = Math.max(0, this.g - e.g)), (this.b = Math.max(0, this.b - e.b)), this;
    }
    multiply(e) {
        return (this.r *= e.r), (this.g *= e.g), (this.b *= e.b), this;
    }
    multiplyScalar(e) {
        return (this.r *= e), (this.g *= e), (this.b *= e), this;
    }
    lerp(e, t) {
        return (this.r += (e.r - this.r) * t), (this.g += (e.g - this.g) * t), (this.b += (e.b - this.b) * t), this;
    }
    lerpColors(e, t, n) {
        return (this.r = e.r + (t.r - e.r) * n), (this.g = e.g + (t.g - e.g) * n), (this.b = e.b + (t.b - e.b) * n), this;
    }
    lerpHSL(e, t) {
        this.getHSL(Ut), e.getHSL(_r);
        const n = ji(Ut.h, _r.h, t),
            i = ji(Ut.s, _r.s, t),
            s = ji(Ut.l, _r.l, t);
        return this.setHSL(n, i, s), this;
    }
    setFromVector3(e) {
        return (this.r = e.x), (this.g = e.y), (this.b = e.z), this;
    }
    applyMatrix3(e) {
        const t = this.r,
            n = this.g,
            i = this.b,
            s = e.elements;
        return (this.r = s[0] * t + s[3] * n + s[6] * i), (this.g = s[1] * t + s[4] * n + s[7] * i), (this.b = s[2] * t + s[5] * n + s[8] * i), this;
    }
    equals(e) {
        return e.r === this.r && e.g === this.g && e.b === this.b;
    }
    fromArray(e, t = 0) {
        return (this.r = e[t]), (this.g = e[t + 1]), (this.b = e[t + 2]), this;
    }
    toArray(e = [], t = 0) {
        return (e[t] = this.r), (e[t + 1] = this.g), (e[t + 2] = this.b), e;
    }
    fromBufferAttribute(e, t) {
        return (this.r = e.getX(t)), (this.g = e.getY(t)), (this.b = e.getZ(t)), this;
    }
    toJSON() {
        return this.getHex();
    }
    *[Symbol.iterator]() {
        yield this.r, yield this.g, yield this.b;
    }
}
const ct = new ze();
ze.NAMES = Ul;
class yo extends or {
    constructor(e) {
        super(),
            (this.isMeshBasicMaterial = !0),
            (this.type = 'MeshBasicMaterial'),
            (this.color = new ze(16777215)),
            (this.map = null),
            (this.lightMap = null),
            (this.lightMapIntensity = 1),
            (this.aoMap = null),
            (this.aoMapIntensity = 1),
            (this.specularMap = null),
            (this.alphaMap = null),
            (this.envMap = null),
            (this.combine = go),
            (this.reflectivity = 1),
            (this.refractionRatio = 0.98),
            (this.wireframe = !1),
            (this.wireframeLinewidth = 1),
            (this.wireframeLinecap = 'round'),
            (this.wireframeLinejoin = 'round'),
            (this.fog = !0),
            this.setValues(e);
    }
    copy(e) {
        return (
            super.copy(e),
            this.color.copy(e.color),
            (this.map = e.map),
            (this.lightMap = e.lightMap),
            (this.lightMapIntensity = e.lightMapIntensity),
            (this.aoMap = e.aoMap),
            (this.aoMapIntensity = e.aoMapIntensity),
            (this.specularMap = e.specularMap),
            (this.alphaMap = e.alphaMap),
            (this.envMap = e.envMap),
            (this.combine = e.combine),
            (this.reflectivity = e.reflectivity),
            (this.refractionRatio = e.refractionRatio),
            (this.wireframe = e.wireframe),
            (this.wireframeLinewidth = e.wireframeLinewidth),
            (this.wireframeLinecap = e.wireframeLinecap),
            (this.wireframeLinejoin = e.wireframeLinejoin),
            (this.fog = e.fog),
            this
        );
    }
}
const Je = new R(),
    xr = new be();
class Tt {
    constructor(e, t, n = !1) {
        if (Array.isArray(e)) throw new TypeError('THREE.BufferAttribute: array should be a Typed Array.');
        (this.isBufferAttribute = !0),
            (this.name = ''),
            (this.array = e),
            (this.itemSize = t),
            (this.count = e !== void 0 ? e.length / t : 0),
            (this.normalized = n),
            (this.usage = pa),
            (this.updateRange = { offset: 0, count: -1 }),
            (this.version = 0);
    }
    onUploadCallback() {}
    set needsUpdate(e) {
        e === !0 && this.version++;
    }
    setUsage(e) {
        return (this.usage = e), this;
    }
    copy(e) {
        return (
            (this.name = e.name), (this.array = new e.array.constructor(e.array)), (this.itemSize = e.itemSize), (this.count = e.count), (this.normalized = e.normalized), (this.usage = e.usage), this
        );
    }
    copyAt(e, t, n) {
        (e *= this.itemSize), (n *= t.itemSize);
        for (let i = 0, s = this.itemSize; i < s; i++) this.array[e + i] = t.array[n + i];
        return this;
    }
    copyArray(e) {
        return this.array.set(e), this;
    }
    applyMatrix3(e) {
        if (this.itemSize === 2) for (let t = 0, n = this.count; t < n; t++) xr.fromBufferAttribute(this, t), xr.applyMatrix3(e), this.setXY(t, xr.x, xr.y);
        else if (this.itemSize === 3) for (let t = 0, n = this.count; t < n; t++) Je.fromBufferAttribute(this, t), Je.applyMatrix3(e), this.setXYZ(t, Je.x, Je.y, Je.z);
        return this;
    }
    applyMatrix4(e) {
        for (let t = 0, n = this.count; t < n; t++) Je.fromBufferAttribute(this, t), Je.applyMatrix4(e), this.setXYZ(t, Je.x, Je.y, Je.z);
        return this;
    }
    applyNormalMatrix(e) {
        for (let t = 0, n = this.count; t < n; t++) Je.fromBufferAttribute(this, t), Je.applyNormalMatrix(e), this.setXYZ(t, Je.x, Je.y, Je.z);
        return this;
    }
    transformDirection(e) {
        for (let t = 0, n = this.count; t < n; t++) Je.fromBufferAttribute(this, t), Je.transformDirection(e), this.setXYZ(t, Je.x, Je.y, Je.z);
        return this;
    }
    set(e, t = 0) {
        return this.array.set(e, t), this;
    }
    getX(e) {
        let t = this.array[e * this.itemSize];
        return this.normalized && (t = Hi(t, this.array)), t;
    }
    setX(e, t) {
        return this.normalized && (t = xt(t, this.array)), (this.array[e * this.itemSize] = t), this;
    }
    getY(e) {
        let t = this.array[e * this.itemSize + 1];
        return this.normalized && (t = Hi(t, this.array)), t;
    }
    setY(e, t) {
        return this.normalized && (t = xt(t, this.array)), (this.array[e * this.itemSize + 1] = t), this;
    }
    getZ(e) {
        let t = this.array[e * this.itemSize + 2];
        return this.normalized && (t = Hi(t, this.array)), t;
    }
    setZ(e, t) {
        return this.normalized && (t = xt(t, this.array)), (this.array[e * this.itemSize + 2] = t), this;
    }
    getW(e) {
        let t = this.array[e * this.itemSize + 3];
        return this.normalized && (t = Hi(t, this.array)), t;
    }
    setW(e, t) {
        return this.normalized && (t = xt(t, this.array)), (this.array[e * this.itemSize + 3] = t), this;
    }
    setXY(e, t, n) {
        return (e *= this.itemSize), this.normalized && ((t = xt(t, this.array)), (n = xt(n, this.array))), (this.array[e + 0] = t), (this.array[e + 1] = n), this;
    }
    setXYZ(e, t, n, i) {
        return (
            (e *= this.itemSize),
            this.normalized && ((t = xt(t, this.array)), (n = xt(n, this.array)), (i = xt(i, this.array))),
            (this.array[e + 0] = t),
            (this.array[e + 1] = n),
            (this.array[e + 2] = i),
            this
        );
    }
    setXYZW(e, t, n, i, s) {
        return (
            (e *= this.itemSize),
            this.normalized && ((t = xt(t, this.array)), (n = xt(n, this.array)), (i = xt(i, this.array)), (s = xt(s, this.array))),
            (this.array[e + 0] = t),
            (this.array[e + 1] = n),
            (this.array[e + 2] = i),
            (this.array[e + 3] = s),
            this
        );
    }
    onUpload(e) {
        return (this.onUploadCallback = e), this;
    }
    clone() {
        return new this.constructor(this.array, this.itemSize).copy(this);
    }
    toJSON() {
        const e = { itemSize: this.itemSize, type: this.array.constructor.name, array: Array.from(this.array), normalized: this.normalized };
        return (
            this.name !== '' && (e.name = this.name),
            this.usage !== pa && (e.usage = this.usage),
            (this.updateRange.offset !== 0 || this.updateRange.count !== -1) && (e.updateRange = this.updateRange),
            e
        );
    }
    copyColorsArray() {
        console.error('THREE.BufferAttribute: copyColorsArray() was removed in r144.');
    }
    copyVector2sArray() {
        console.error('THREE.BufferAttribute: copyVector2sArray() was removed in r144.');
    }
    copyVector3sArray() {
        console.error('THREE.BufferAttribute: copyVector3sArray() was removed in r144.');
    }
    copyVector4sArray() {
        console.error('THREE.BufferAttribute: copyVector4sArray() was removed in r144.');
    }
}
class Nl extends Tt {
    constructor(e, t, n) {
        super(new Uint16Array(e), t, n);
    }
}
class Ol extends Tt {
    constructor(e, t, n) {
        super(new Uint32Array(e), t, n);
    }
}
class Bt extends Tt {
    constructor(e, t, n) {
        super(new Float32Array(e), t, n);
    }
}
let $u = 0;
const Ct = new He(),
    Os = new ht(),
    ti = new R(),
    bt = new zt(),
    Bi = new zt(),
    nt = new R();
class hn extends Vn {
    constructor() {
        super(),
            (this.isBufferGeometry = !0),
            Object.defineProperty(this, 'id', { value: $u++ }),
            (this.uuid = Ai()),
            (this.name = ''),
            (this.type = 'BufferGeometry'),
            (this.index = null),
            (this.attributes = {}),
            (this.morphAttributes = {}),
            (this.morphTargetsRelative = !1),
            (this.groups = []),
            (this.boundingBox = null),
            (this.boundingSphere = null),
            (this.drawRange = { start: 0, count: 1 / 0 }),
            (this.userData = {});
    }
    getIndex() {
        return this.index;
    }
    setIndex(e) {
        return Array.isArray(e) ? (this.index = new (Ll(e) ? Ol : Nl)(e, 1)) : (this.index = e), this;
    }
    getAttribute(e) {
        return this.attributes[e];
    }
    setAttribute(e, t) {
        return (this.attributes[e] = t), this;
    }
    deleteAttribute(e) {
        return delete this.attributes[e], this;
    }
    hasAttribute(e) {
        return this.attributes[e] !== void 0;
    }
    addGroup(e, t, n = 0) {
        this.groups.push({ start: e, count: t, materialIndex: n });
    }
    clearGroups() {
        this.groups = [];
    }
    setDrawRange(e, t) {
        (this.drawRange.start = e), (this.drawRange.count = t);
    }
    applyMatrix4(e) {
        const t = this.attributes.position;
        t !== void 0 && (t.applyMatrix4(e), (t.needsUpdate = !0));
        const n = this.attributes.normal;
        if (n !== void 0) {
            const s = new Ue().getNormalMatrix(e);
            n.applyNormalMatrix(s), (n.needsUpdate = !0);
        }
        const i = this.attributes.tangent;
        return (
            i !== void 0 && (i.transformDirection(e), (i.needsUpdate = !0)), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this
        );
    }
    applyQuaternion(e) {
        return Ct.makeRotationFromQuaternion(e), this.applyMatrix4(Ct), this;
    }
    rotateX(e) {
        return Ct.makeRotationX(e), this.applyMatrix4(Ct), this;
    }
    rotateY(e) {
        return Ct.makeRotationY(e), this.applyMatrix4(Ct), this;
    }
    rotateZ(e) {
        return Ct.makeRotationZ(e), this.applyMatrix4(Ct), this;
    }
    translate(e, t, n) {
        return Ct.makeTranslation(e, t, n), this.applyMatrix4(Ct), this;
    }
    scale(e, t, n) {
        return Ct.makeScale(e, t, n), this.applyMatrix4(Ct), this;
    }
    lookAt(e) {
        return Os.lookAt(e), Os.updateMatrix(), this.applyMatrix4(Os.matrix), this;
    }
    center() {
        return this.computeBoundingBox(), this.boundingBox.getCenter(ti).negate(), this.translate(ti.x, ti.y, ti.z), this;
    }
    setFromPoints(e) {
        const t = [];
        for (let n = 0, i = e.length; n < i; n++) {
            const s = e[n];
            t.push(s.x, s.y, s.z || 0);
        }
        return this.setAttribute('position', new Bt(t, 3)), this;
    }
    computeBoundingBox() {
        this.boundingBox === null && (this.boundingBox = new zt());
        const e = this.attributes.position,
            t = this.morphAttributes.position;
        if (e && e.isGLBufferAttribute) {
            console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this),
                this.boundingBox.set(new R(-1 / 0, -1 / 0, -1 / 0), new R(1 / 0, 1 / 0, 1 / 0));
            return;
        }
        if (e !== void 0) {
            if ((this.boundingBox.setFromBufferAttribute(e), t))
                for (let n = 0, i = t.length; n < i; n++) {
                    const s = t[n];
                    bt.setFromBufferAttribute(s),
                        this.morphTargetsRelative
                            ? (nt.addVectors(this.boundingBox.min, bt.min), this.boundingBox.expandByPoint(nt), nt.addVectors(this.boundingBox.max, bt.max), this.boundingBox.expandByPoint(nt))
                            : (this.boundingBox.expandByPoint(bt.min), this.boundingBox.expandByPoint(bt.max));
                }
        } else this.boundingBox.makeEmpty();
        (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) &&
            console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
    }
    computeBoundingSphere() {
        this.boundingSphere === null && (this.boundingSphere = new ns());
        const e = this.attributes.position,
            t = this.morphAttributes.position;
        if (e && e.isGLBufferAttribute) {
            console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this),
                this.boundingSphere.set(new R(), 1 / 0);
            return;
        }
        if (e) {
            const n = this.boundingSphere.center;
            if ((bt.setFromBufferAttribute(e), t))
                for (let s = 0, a = t.length; s < a; s++) {
                    const o = t[s];
                    Bi.setFromBufferAttribute(o),
                        this.morphTargetsRelative
                            ? (nt.addVectors(bt.min, Bi.min), bt.expandByPoint(nt), nt.addVectors(bt.max, Bi.max), bt.expandByPoint(nt))
                            : (bt.expandByPoint(Bi.min), bt.expandByPoint(Bi.max));
                }
            bt.getCenter(n);
            let i = 0;
            for (let s = 0, a = e.count; s < a; s++) nt.fromBufferAttribute(e, s), (i = Math.max(i, n.distanceToSquared(nt)));
            if (t)
                for (let s = 0, a = t.length; s < a; s++) {
                    const o = t[s],
                        c = this.morphTargetsRelative;
                    for (let l = 0, u = o.count; l < u; l++) nt.fromBufferAttribute(o, l), c && (ti.fromBufferAttribute(e, l), nt.add(ti)), (i = Math.max(i, n.distanceToSquared(nt)));
                }
            (this.boundingSphere.radius = Math.sqrt(i)),
                isNaN(this.boundingSphere.radius) &&
                    console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
        }
    }
    computeTangents() {
        const e = this.index,
            t = this.attributes;
        if (e === null || t.position === void 0 || t.normal === void 0 || t.uv === void 0) {
            console.error('THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)');
            return;
        }
        const n = e.array,
            i = t.position.array,
            s = t.normal.array,
            a = t.uv.array,
            o = i.length / 3;
        this.hasAttribute('tangent') === !1 && this.setAttribute('tangent', new Tt(new Float32Array(4 * o), 4));
        const c = this.getAttribute('tangent').array,
            l = [],
            u = [];
        for (let E = 0; E < o; E++) (l[E] = new R()), (u[E] = new R());
        const f = new R(),
            h = new R(),
            p = new R(),
            g = new be(),
            _ = new be(),
            m = new be(),
            d = new R(),
            y = new R();
        function x(E, N, O) {
            f.fromArray(i, E * 3), h.fromArray(i, N * 3), p.fromArray(i, O * 3), g.fromArray(a, E * 2), _.fromArray(a, N * 2), m.fromArray(a, O * 2), h.sub(f), p.sub(f), _.sub(g), m.sub(g);
            const D = 1 / (_.x * m.y - m.x * _.y);
            isFinite(D) &&
                (d.copy(h).multiplyScalar(m.y).addScaledVector(p, -_.y).multiplyScalar(D),
                y.copy(p).multiplyScalar(_.x).addScaledVector(h, -m.x).multiplyScalar(D),
                l[E].add(d),
                l[N].add(d),
                l[O].add(d),
                u[E].add(y),
                u[N].add(y),
                u[O].add(y));
        }
        let v = this.groups;
        v.length === 0 && (v = [{ start: 0, count: n.length }]);
        for (let E = 0, N = v.length; E < N; ++E) {
            const O = v[E],
                D = O.start,
                U = O.count;
            for (let B = D, $ = D + U; B < $; B += 3) x(n[B + 0], n[B + 1], n[B + 2]);
        }
        const M = new R(),
            b = new R(),
            P = new R(),
            A = new R();
        function S(E) {
            P.fromArray(s, E * 3), A.copy(P);
            const N = l[E];
            M.copy(N), M.sub(P.multiplyScalar(P.dot(N))).normalize(), b.crossVectors(A, N);
            const D = b.dot(u[E]) < 0 ? -1 : 1;
            (c[E * 4] = M.x), (c[E * 4 + 1] = M.y), (c[E * 4 + 2] = M.z), (c[E * 4 + 3] = D);
        }
        for (let E = 0, N = v.length; E < N; ++E) {
            const O = v[E],
                D = O.start,
                U = O.count;
            for (let B = D, $ = D + U; B < $; B += 3) S(n[B + 0]), S(n[B + 1]), S(n[B + 2]);
        }
    }
    computeVertexNormals() {
        const e = this.index,
            t = this.getAttribute('position');
        if (t !== void 0) {
            let n = this.getAttribute('normal');
            if (n === void 0) (n = new Tt(new Float32Array(t.count * 3), 3)), this.setAttribute('normal', n);
            else for (let h = 0, p = n.count; h < p; h++) n.setXYZ(h, 0, 0, 0);
            const i = new R(),
                s = new R(),
                a = new R(),
                o = new R(),
                c = new R(),
                l = new R(),
                u = new R(),
                f = new R();
            if (e)
                for (let h = 0, p = e.count; h < p; h += 3) {
                    const g = e.getX(h + 0),
                        _ = e.getX(h + 1),
                        m = e.getX(h + 2);
                    i.fromBufferAttribute(t, g),
                        s.fromBufferAttribute(t, _),
                        a.fromBufferAttribute(t, m),
                        u.subVectors(a, s),
                        f.subVectors(i, s),
                        u.cross(f),
                        o.fromBufferAttribute(n, g),
                        c.fromBufferAttribute(n, _),
                        l.fromBufferAttribute(n, m),
                        o.add(u),
                        c.add(u),
                        l.add(u),
                        n.setXYZ(g, o.x, o.y, o.z),
                        n.setXYZ(_, c.x, c.y, c.z),
                        n.setXYZ(m, l.x, l.y, l.z);
                }
            else
                for (let h = 0, p = t.count; h < p; h += 3)
                    i.fromBufferAttribute(t, h + 0),
                        s.fromBufferAttribute(t, h + 1),
                        a.fromBufferAttribute(t, h + 2),
                        u.subVectors(a, s),
                        f.subVectors(i, s),
                        u.cross(f),
                        n.setXYZ(h + 0, u.x, u.y, u.z),
                        n.setXYZ(h + 1, u.x, u.y, u.z),
                        n.setXYZ(h + 2, u.x, u.y, u.z);
            this.normalizeNormals(), (n.needsUpdate = !0);
        }
    }
    merge() {
        return console.error('THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead.'), this;
    }
    normalizeNormals() {
        const e = this.attributes.normal;
        for (let t = 0, n = e.count; t < n; t++) nt.fromBufferAttribute(e, t), nt.normalize(), e.setXYZ(t, nt.x, nt.y, nt.z);
    }
    toNonIndexed() {
        function e(o, c) {
            const l = o.array,
                u = o.itemSize,
                f = o.normalized,
                h = new l.constructor(c.length * u);
            let p = 0,
                g = 0;
            for (let _ = 0, m = c.length; _ < m; _++) {
                o.isInterleavedBufferAttribute ? (p = c[_] * o.data.stride + o.offset) : (p = c[_] * u);
                for (let d = 0; d < u; d++) h[g++] = l[p++];
            }
            return new Tt(h, u, f);
        }
        if (this.index === null) return console.warn('THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.'), this;
        const t = new hn(),
            n = this.index.array,
            i = this.attributes;
        for (const o in i) {
            const c = i[o],
                l = e(c, n);
            t.setAttribute(o, l);
        }
        const s = this.morphAttributes;
        for (const o in s) {
            const c = [],
                l = s[o];
            for (let u = 0, f = l.length; u < f; u++) {
                const h = l[u],
                    p = e(h, n);
                c.push(p);
            }
            t.morphAttributes[o] = c;
        }
        t.morphTargetsRelative = this.morphTargetsRelative;
        const a = this.groups;
        for (let o = 0, c = a.length; o < c; o++) {
            const l = a[o];
            t.addGroup(l.start, l.count, l.materialIndex);
        }
        return t;
    }
    toJSON() {
        const e = { metadata: { version: 4.5, type: 'BufferGeometry', generator: 'BufferGeometry.toJSON' } };
        if (((e.uuid = this.uuid), (e.type = this.type), this.name !== '' && (e.name = this.name), Object.keys(this.userData).length > 0 && (e.userData = this.userData), this.parameters !== void 0)) {
            const c = this.parameters;
            for (const l in c) c[l] !== void 0 && (e[l] = c[l]);
            return e;
        }
        e.data = { attributes: {} };
        const t = this.index;
        t !== null && (e.data.index = { type: t.array.constructor.name, array: Array.prototype.slice.call(t.array) });
        const n = this.attributes;
        for (const c in n) {
            const l = n[c];
            e.data.attributes[c] = l.toJSON(e.data);
        }
        const i = {};
        let s = !1;
        for (const c in this.morphAttributes) {
            const l = this.morphAttributes[c],
                u = [];
            for (let f = 0, h = l.length; f < h; f++) {
                const p = l[f];
                u.push(p.toJSON(e.data));
            }
            u.length > 0 && ((i[c] = u), (s = !0));
        }
        s && ((e.data.morphAttributes = i), (e.data.morphTargetsRelative = this.morphTargetsRelative));
        const a = this.groups;
        a.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(a)));
        const o = this.boundingSphere;
        return o !== null && (e.data.boundingSphere = { center: o.center.toArray(), radius: o.radius }), e;
    }
    clone() {
        return new this.constructor().copy(this);
    }
    copy(e) {
        (this.index = null), (this.attributes = {}), (this.morphAttributes = {}), (this.groups = []), (this.boundingBox = null), (this.boundingSphere = null);
        const t = {};
        this.name = e.name;
        const n = e.index;
        n !== null && this.setIndex(n.clone(t));
        const i = e.attributes;
        for (const l in i) {
            const u = i[l];
            this.setAttribute(l, u.clone(t));
        }
        const s = e.morphAttributes;
        for (const l in s) {
            const u = [],
                f = s[l];
            for (let h = 0, p = f.length; h < p; h++) u.push(f[h].clone(t));
            this.morphAttributes[l] = u;
        }
        this.morphTargetsRelative = e.morphTargetsRelative;
        const a = e.groups;
        for (let l = 0, u = a.length; l < u; l++) {
            const f = a[l];
            this.addGroup(f.start, f.count, f.materialIndex);
        }
        const o = e.boundingBox;
        o !== null && (this.boundingBox = o.clone());
        const c = e.boundingSphere;
        return c !== null && (this.boundingSphere = c.clone()), (this.drawRange.start = e.drawRange.start), (this.drawRange.count = e.drawRange.count), (this.userData = e.userData), this;
    }
    dispose() {
        this.dispatchEvent({ type: 'dispose' });
    }
}
const Ta = new He(),
    Vt = new xo(),
    vr = new ns(),
    Aa = new R(),
    ni = new R(),
    ii = new R(),
    ri = new R(),
    Fs = new R(),
    yr = new R(),
    Mr = new be(),
    Sr = new be(),
    br = new be(),
    Ca = new R(),
    Pa = new R(),
    La = new R(),
    wr = new R(),
    Er = new R();
class Et extends ht {
    constructor(e = new hn(), t = new yo()) {
        super(), (this.isMesh = !0), (this.type = 'Mesh'), (this.geometry = e), (this.material = t), this.updateMorphTargets();
    }
    copy(e, t) {
        return (
            super.copy(e, t),
            e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()),
            e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)),
            (this.material = e.material),
            (this.geometry = e.geometry),
            this
        );
    }
    updateMorphTargets() {
        const t = this.geometry.morphAttributes,
            n = Object.keys(t);
        if (n.length > 0) {
            const i = t[n[0]];
            if (i !== void 0) {
                (this.morphTargetInfluences = []), (this.morphTargetDictionary = {});
                for (let s = 0, a = i.length; s < a; s++) {
                    const o = i[s].name || String(s);
                    this.morphTargetInfluences.push(0), (this.morphTargetDictionary[o] = s);
                }
            }
        }
    }
    getVertexPosition(e, t) {
        const n = this.geometry,
            i = n.attributes.position,
            s = n.morphAttributes.position,
            a = n.morphTargetsRelative;
        t.fromBufferAttribute(i, e);
        const o = this.morphTargetInfluences;
        if (s && o) {
            yr.set(0, 0, 0);
            for (let c = 0, l = s.length; c < l; c++) {
                const u = o[c],
                    f = s[c];
                u !== 0 && (Fs.fromBufferAttribute(f, e), a ? yr.addScaledVector(Fs, u) : yr.addScaledVector(Fs.sub(t), u));
            }
            t.add(yr);
        }
        return this.isSkinnedMesh && this.applyBoneTransform(e, t), t;
    }
    raycast(e, t) {
        const n = this.geometry,
            i = this.material,
            s = this.matrixWorld;
        if (
            i === void 0 ||
            (n.boundingSphere === null && n.computeBoundingSphere(),
            vr.copy(n.boundingSphere),
            vr.applyMatrix4(s),
            Vt.copy(e.ray).recast(e.near),
            vr.containsPoint(Vt.origin) === !1 && (Vt.intersectSphere(vr, Aa) === null || Vt.origin.distanceToSquared(Aa) > (e.far - e.near) ** 2)) ||
            (Ta.copy(s).invert(), Vt.copy(e.ray).applyMatrix4(Ta), n.boundingBox !== null && Vt.intersectsBox(n.boundingBox) === !1)
        )
            return;
        let a;
        const o = n.index,
            c = n.attributes.position,
            l = n.attributes.uv,
            u = n.attributes.uv2,
            f = n.attributes.normal,
            h = n.groups,
            p = n.drawRange;
        if (o !== null)
            if (Array.isArray(i))
                for (let g = 0, _ = h.length; g < _; g++) {
                    const m = h[g],
                        d = i[m.materialIndex],
                        y = Math.max(m.start, p.start),
                        x = Math.min(o.count, Math.min(m.start + m.count, p.start + p.count));
                    for (let v = y, M = x; v < M; v += 3) {
                        const b = o.getX(v),
                            P = o.getX(v + 1),
                            A = o.getX(v + 2);
                        (a = Tr(this, d, e, Vt, l, u, f, b, P, A)), a && ((a.faceIndex = Math.floor(v / 3)), (a.face.materialIndex = m.materialIndex), t.push(a));
                    }
                }
            else {
                const g = Math.max(0, p.start),
                    _ = Math.min(o.count, p.start + p.count);
                for (let m = g, d = _; m < d; m += 3) {
                    const y = o.getX(m),
                        x = o.getX(m + 1),
                        v = o.getX(m + 2);
                    (a = Tr(this, i, e, Vt, l, u, f, y, x, v)), a && ((a.faceIndex = Math.floor(m / 3)), t.push(a));
                }
            }
        else if (c !== void 0)
            if (Array.isArray(i))
                for (let g = 0, _ = h.length; g < _; g++) {
                    const m = h[g],
                        d = i[m.materialIndex],
                        y = Math.max(m.start, p.start),
                        x = Math.min(c.count, Math.min(m.start + m.count, p.start + p.count));
                    for (let v = y, M = x; v < M; v += 3) {
                        const b = v,
                            P = v + 1,
                            A = v + 2;
                        (a = Tr(this, d, e, Vt, l, u, f, b, P, A)), a && ((a.faceIndex = Math.floor(v / 3)), (a.face.materialIndex = m.materialIndex), t.push(a));
                    }
                }
            else {
                const g = Math.max(0, p.start),
                    _ = Math.min(c.count, p.start + p.count);
                for (let m = g, d = _; m < d; m += 3) {
                    const y = m,
                        x = m + 1,
                        v = m + 2;
                    (a = Tr(this, i, e, Vt, l, u, f, y, x, v)), a && ((a.faceIndex = Math.floor(m / 3)), t.push(a));
                }
            }
    }
}
function Ju(r, e, t, n, i, s, a, o) {
    let c;
    if ((e.side === ft ? (c = n.intersectTriangle(a, s, i, !0, o)) : (c = n.intersectTriangle(i, s, a, e.side === Zt, o)), c === null)) return null;
    Er.copy(o), Er.applyMatrix4(r.matrixWorld);
    const l = t.ray.origin.distanceTo(Er);
    return l < t.near || l > t.far ? null : { distance: l, point: Er.clone(), object: r };
}
function Tr(r, e, t, n, i, s, a, o, c, l) {
    r.getVertexPosition(o, ni), r.getVertexPosition(c, ii), r.getVertexPosition(l, ri);
    const u = Ju(r, e, t, n, ni, ii, ri, wr);
    if (u) {
        i && (Mr.fromBufferAttribute(i, o), Sr.fromBufferAttribute(i, c), br.fromBufferAttribute(i, l), (u.uv = ut.getInterpolation(wr, ni, ii, ri, Mr, Sr, br, new be()))),
            s && (Mr.fromBufferAttribute(s, o), Sr.fromBufferAttribute(s, c), br.fromBufferAttribute(s, l), (u.uv2 = ut.getInterpolation(wr, ni, ii, ri, Mr, Sr, br, new be()))),
            a &&
                (Ca.fromBufferAttribute(a, o),
                Pa.fromBufferAttribute(a, c),
                La.fromBufferAttribute(a, l),
                (u.normal = ut.getInterpolation(wr, ni, ii, ri, Ca, Pa, La, new R())),
                u.normal.dot(n.direction) > 0 && u.normal.multiplyScalar(-1));
        const f = { a: o, b: c, c: l, normal: new R(), materialIndex: 0 };
        ut.getNormal(ni, ii, ri, f.normal), (u.face = f);
    }
    return u;
}
class Ci extends hn {
    constructor(e = 1, t = 1, n = 1, i = 1, s = 1, a = 1) {
        super(), (this.type = 'BoxGeometry'), (this.parameters = { width: e, height: t, depth: n, widthSegments: i, heightSegments: s, depthSegments: a });
        const o = this;
        (i = Math.floor(i)), (s = Math.floor(s)), (a = Math.floor(a));
        const c = [],
            l = [],
            u = [],
            f = [];
        let h = 0,
            p = 0;
        g('z', 'y', 'x', -1, -1, n, t, e, a, s, 0),
            g('z', 'y', 'x', 1, -1, n, t, -e, a, s, 1),
            g('x', 'z', 'y', 1, 1, e, n, t, i, a, 2),
            g('x', 'z', 'y', 1, -1, e, n, -t, i, a, 3),
            g('x', 'y', 'z', 1, -1, e, t, n, i, s, 4),
            g('x', 'y', 'z', -1, -1, e, t, -n, i, s, 5),
            this.setIndex(c),
            this.setAttribute('position', new Bt(l, 3)),
            this.setAttribute('normal', new Bt(u, 3)),
            this.setAttribute('uv', new Bt(f, 2));
        function g(_, m, d, y, x, v, M, b, P, A, S) {
            const E = v / P,
                N = M / A,
                O = v / 2,
                D = M / 2,
                U = b / 2,
                B = P + 1,
                $ = A + 1;
            let Y = 0,
                k = 0;
            const K = new R();
            for (let ne = 0; ne < $; ne++) {
                const _e = ne * N - D;
                for (let ce = 0; ce < B; ce++) {
                    const W = ce * E - O;
                    (K[_] = W * y),
                        (K[m] = _e * x),
                        (K[d] = U),
                        l.push(K.x, K.y, K.z),
                        (K[_] = 0),
                        (K[m] = 0),
                        (K[d] = b > 0 ? 1 : -1),
                        u.push(K.x, K.y, K.z),
                        f.push(ce / P),
                        f.push(1 - ne / A),
                        (Y += 1);
                }
            }
            for (let ne = 0; ne < A; ne++)
                for (let _e = 0; _e < P; _e++) {
                    const ce = h + _e + B * ne,
                        W = h + _e + B * (ne + 1),
                        J = h + (_e + 1) + B * (ne + 1),
                        ie = h + (_e + 1) + B * ne;
                    c.push(ce, W, ie), c.push(W, J, ie), (k += 6);
                }
            o.addGroup(p, k, S), (p += k), (h += Y);
        }
    }
    copy(e) {
        return super.copy(e), (this.parameters = Object.assign({}, e.parameters)), this;
    }
    static fromJSON(e) {
        return new Ci(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments);
    }
}
function Ti(r) {
    const e = {};
    for (const t in r) {
        e[t] = {};
        for (const n in r[t]) {
            const i = r[t][n];
            i && (i.isColor || i.isMatrix3 || i.isMatrix4 || i.isVector2 || i.isVector3 || i.isVector4 || i.isTexture || i.isQuaternion)
                ? i.isRenderTargetTexture
                    ? (console.warn('UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().'), (e[t][n] = null))
                    : (e[t][n] = i.clone())
                : Array.isArray(i)
                ? (e[t][n] = i.slice())
                : (e[t][n] = i);
        }
    }
    return e;
}
function mt(r) {
    const e = {};
    for (let t = 0; t < r.length; t++) {
        const n = Ti(r[t]);
        for (const i in n) e[i] = n[i];
    }
    return e;
}
function Qu(r) {
    const e = [];
    for (let t = 0; t < r.length; t++) e.push(r[t].clone());
    return e;
}
function Fl(r) {
    return r.getRenderTarget() === null && r.outputEncoding === ke ? Xt : Ji;
}
const Bl = { clone: Ti, merge: mt };
var ef = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,
    tf = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class bn extends or {
    constructor(e) {
        super(),
            (this.isShaderMaterial = !0),
            (this.type = 'ShaderMaterial'),
            (this.defines = {}),
            (this.uniforms = {}),
            (this.uniformsGroups = []),
            (this.vertexShader = ef),
            (this.fragmentShader = tf),
            (this.linewidth = 1),
            (this.wireframe = !1),
            (this.wireframeLinewidth = 1),
            (this.fog = !1),
            (this.lights = !1),
            (this.clipping = !1),
            (this.forceSinglePass = !0),
            (this.extensions = { derivatives: !1, fragDepth: !1, drawBuffers: !1, shaderTextureLOD: !1 }),
            (this.defaultAttributeValues = { color: [1, 1, 1], uv: [0, 0], uv2: [0, 0] }),
            (this.index0AttributeName = void 0),
            (this.uniformsNeedUpdate = !1),
            (this.glslVersion = null),
            e !== void 0 && this.setValues(e);
    }
    copy(e) {
        return (
            super.copy(e),
            (this.fragmentShader = e.fragmentShader),
            (this.vertexShader = e.vertexShader),
            (this.uniforms = Ti(e.uniforms)),
            (this.uniformsGroups = Qu(e.uniformsGroups)),
            (this.defines = Object.assign({}, e.defines)),
            (this.wireframe = e.wireframe),
            (this.wireframeLinewidth = e.wireframeLinewidth),
            (this.fog = e.fog),
            (this.lights = e.lights),
            (this.clipping = e.clipping),
            (this.extensions = Object.assign({}, e.extensions)),
            (this.glslVersion = e.glslVersion),
            this
        );
    }
    toJSON(e) {
        const t = super.toJSON(e);
        (t.glslVersion = this.glslVersion), (t.uniforms = {});
        for (const i in this.uniforms) {
            const a = this.uniforms[i].value;
            a && a.isTexture
                ? (t.uniforms[i] = { type: 't', value: a.toJSON(e).uuid })
                : a && a.isColor
                ? (t.uniforms[i] = { type: 'c', value: a.getHex() })
                : a && a.isVector2
                ? (t.uniforms[i] = { type: 'v2', value: a.toArray() })
                : a && a.isVector3
                ? (t.uniforms[i] = { type: 'v3', value: a.toArray() })
                : a && a.isVector4
                ? (t.uniforms[i] = { type: 'v4', value: a.toArray() })
                : a && a.isMatrix3
                ? (t.uniforms[i] = { type: 'm3', value: a.toArray() })
                : a && a.isMatrix4
                ? (t.uniforms[i] = { type: 'm4', value: a.toArray() })
                : (t.uniforms[i] = { value: a });
        }
        Object.keys(this.defines).length > 0 && (t.defines = this.defines), (t.vertexShader = this.vertexShader), (t.fragmentShader = this.fragmentShader);
        const n = {};
        for (const i in this.extensions) this.extensions[i] === !0 && (n[i] = !0);
        return Object.keys(n).length > 0 && (t.extensions = n), t;
    }
}
class zl extends ht {
    constructor() {
        super(), (this.isCamera = !0), (this.type = 'Camera'), (this.matrixWorldInverse = new He()), (this.projectionMatrix = new He()), (this.projectionMatrixInverse = new He());
    }
    copy(e, t) {
        return super.copy(e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this;
    }
    getWorldDirection(e) {
        this.updateWorldMatrix(!0, !1);
        const t = this.matrixWorld.elements;
        return e.set(-t[8], -t[9], -t[10]).normalize();
    }
    updateMatrixWorld(e) {
        super.updateMatrixWorld(e), this.matrixWorldInverse.copy(this.matrixWorld).invert();
    }
    updateWorldMatrix(e, t) {
        super.updateWorldMatrix(e, t), this.matrixWorldInverse.copy(this.matrixWorld).invert();
    }
    clone() {
        return new this.constructor().copy(this);
    }
}
class Lt extends zl {
    constructor(e = 50, t = 1, n = 0.1, i = 2e3) {
        super(),
            (this.isPerspectiveCamera = !0),
            (this.type = 'PerspectiveCamera'),
            (this.fov = e),
            (this.zoom = 1),
            (this.near = n),
            (this.far = i),
            (this.focus = 10),
            (this.aspect = t),
            (this.view = null),
            (this.filmGauge = 35),
            (this.filmOffset = 0),
            this.updateProjectionMatrix();
    }
    copy(e, t) {
        return (
            super.copy(e, t),
            (this.fov = e.fov),
            (this.zoom = e.zoom),
            (this.near = e.near),
            (this.far = e.far),
            (this.focus = e.focus),
            (this.aspect = e.aspect),
            (this.view = e.view === null ? null : Object.assign({}, e.view)),
            (this.filmGauge = e.filmGauge),
            (this.filmOffset = e.filmOffset),
            this
        );
    }
    setFocalLength(e) {
        const t = (0.5 * this.getFilmHeight()) / e;
        (this.fov = Qi * 2 * Math.atan(t)), this.updateProjectionMatrix();
    }
    getFocalLength() {
        const e = Math.tan(Xi * 0.5 * this.fov);
        return (0.5 * this.getFilmHeight()) / e;
    }
    getEffectiveFOV() {
        return Qi * 2 * Math.atan(Math.tan(Xi * 0.5 * this.fov) / this.zoom);
    }
    getFilmWidth() {
        return this.filmGauge * Math.min(this.aspect, 1);
    }
    getFilmHeight() {
        return this.filmGauge / Math.max(this.aspect, 1);
    }
    setViewOffset(e, t, n, i, s, a) {
        (this.aspect = e / t),
            this.view === null && (this.view = { enabled: !0, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }),
            (this.view.enabled = !0),
            (this.view.fullWidth = e),
            (this.view.fullHeight = t),
            (this.view.offsetX = n),
            (this.view.offsetY = i),
            (this.view.width = s),
            (this.view.height = a),
            this.updateProjectionMatrix();
    }
    clearViewOffset() {
        this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
    }
    updateProjectionMatrix() {
        const e = this.near;
        let t = (e * Math.tan(Xi * 0.5 * this.fov)) / this.zoom,
            n = 2 * t,
            i = this.aspect * n,
            s = -0.5 * i;
        const a = this.view;
        if (this.view !== null && this.view.enabled) {
            const c = a.fullWidth,
                l = a.fullHeight;
            (s += (a.offsetX * i) / c), (t -= (a.offsetY * n) / l), (i *= a.width / c), (n *= a.height / l);
        }
        const o = this.filmOffset;
        o !== 0 && (s += (e * o) / this.getFilmWidth()), this.projectionMatrix.makePerspective(s, s + i, t, t - n, e, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
    }
    toJSON(e) {
        const t = super.toJSON(e);
        return (
            (t.object.fov = this.fov),
            (t.object.zoom = this.zoom),
            (t.object.near = this.near),
            (t.object.far = this.far),
            (t.object.focus = this.focus),
            (t.object.aspect = this.aspect),
            this.view !== null && (t.object.view = Object.assign({}, this.view)),
            (t.object.filmGauge = this.filmGauge),
            (t.object.filmOffset = this.filmOffset),
            t
        );
    }
}
const si = -90,
    oi = 1;
class nf extends ht {
    constructor(e, t, n) {
        super(), (this.type = 'CubeCamera'), (this.renderTarget = n);
        const i = new Lt(si, oi, e, t);
        (i.layers = this.layers), i.up.set(0, 1, 0), i.lookAt(1, 0, 0), this.add(i);
        const s = new Lt(si, oi, e, t);
        (s.layers = this.layers), s.up.set(0, 1, 0), s.lookAt(-1, 0, 0), this.add(s);
        const a = new Lt(si, oi, e, t);
        (a.layers = this.layers), a.up.set(0, 0, -1), a.lookAt(0, 1, 0), this.add(a);
        const o = new Lt(si, oi, e, t);
        (o.layers = this.layers), o.up.set(0, 0, 1), o.lookAt(0, -1, 0), this.add(o);
        const c = new Lt(si, oi, e, t);
        (c.layers = this.layers), c.up.set(0, 1, 0), c.lookAt(0, 0, 1), this.add(c);
        const l = new Lt(si, oi, e, t);
        (l.layers = this.layers), l.up.set(0, 1, 0), l.lookAt(0, 0, -1), this.add(l);
    }
    update(e, t) {
        this.parent === null && this.updateMatrixWorld();
        const n = this.renderTarget,
            [i, s, a, o, c, l] = this.children,
            u = e.getRenderTarget(),
            f = e.toneMapping,
            h = e.xr.enabled;
        (e.toneMapping = ln), (e.xr.enabled = !1);
        const p = n.texture.generateMipmaps;
        (n.texture.generateMipmaps = !1),
            e.setRenderTarget(n, 0),
            e.render(t, i),
            e.setRenderTarget(n, 1),
            e.render(t, s),
            e.setRenderTarget(n, 2),
            e.render(t, a),
            e.setRenderTarget(n, 3),
            e.render(t, o),
            e.setRenderTarget(n, 4),
            e.render(t, c),
            (n.texture.generateMipmaps = p),
            e.setRenderTarget(n, 5),
            e.render(t, l),
            e.setRenderTarget(u),
            (e.toneMapping = f),
            (e.xr.enabled = h),
            (n.texture.needsPMREMUpdate = !0);
    }
}
class Gl extends vt {
    constructor(e, t, n, i, s, a, o, c, l, u) {
        (e = e !== void 0 ? e : []), (t = t !== void 0 ? t : bi), super(e, t, n, i, s, a, o, c, l, u), (this.isCubeTexture = !0), (this.flipY = !1);
    }
    get images() {
        return this.image;
    }
    set images(e) {
        this.image = e;
    }
}
class rf extends zn {
    constructor(e = 1, t = {}) {
        super(e, e, t), (this.isWebGLCubeRenderTarget = !0);
        const n = { width: e, height: e, depth: 1 },
            i = [n, n, n, n, n, n];
        (this.texture = new Gl(i, t.mapping, t.wrapS, t.wrapT, t.magFilter, t.minFilter, t.format, t.type, t.anisotropy, t.encoding)),
            (this.texture.isRenderTargetTexture = !0),
            (this.texture.generateMipmaps = t.generateMipmaps !== void 0 ? t.generateMipmaps : !1),
            (this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : Pt);
    }
    fromEquirectangularTexture(e, t) {
        (this.texture.type = t.type),
            (this.texture.encoding = t.encoding),
            (this.texture.generateMipmaps = t.generateMipmaps),
            (this.texture.minFilter = t.minFilter),
            (this.texture.magFilter = t.magFilter);
        const n = {
                uniforms: { tEquirect: { value: null } },
                vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,
                fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`,
            },
            i = new Ci(5, 5, 5),
            s = new bn({ name: 'CubemapFromEquirect', uniforms: Ti(n.uniforms), vertexShader: n.vertexShader, fragmentShader: n.fragmentShader, side: ft, blending: yn });
        s.uniforms.tEquirect.value = t;
        const a = new Et(i, s),
            o = t.minFilter;
        return t.minFilter === Zi && (t.minFilter = Pt), new nf(1, 10, this).update(e, a), (t.minFilter = o), a.geometry.dispose(), a.material.dispose(), this;
    }
    clear(e, t, n, i) {
        const s = e.getRenderTarget();
        for (let a = 0; a < 6; a++) e.setRenderTarget(this, a), e.clear(t, n, i);
        e.setRenderTarget(s);
    }
}
const Bs = new R(),
    sf = new R(),
    of = new Ue();
class an {
    constructor(e = new R(1, 0, 0), t = 0) {
        (this.isPlane = !0), (this.normal = e), (this.constant = t);
    }
    set(e, t) {
        return this.normal.copy(e), (this.constant = t), this;
    }
    setComponents(e, t, n, i) {
        return this.normal.set(e, t, n), (this.constant = i), this;
    }
    setFromNormalAndCoplanarPoint(e, t) {
        return this.normal.copy(e), (this.constant = -t.dot(this.normal)), this;
    }
    setFromCoplanarPoints(e, t, n) {
        const i = Bs.subVectors(n, t).cross(sf.subVectors(e, t)).normalize();
        return this.setFromNormalAndCoplanarPoint(i, e), this;
    }
    copy(e) {
        return this.normal.copy(e.normal), (this.constant = e.constant), this;
    }
    normalize() {
        const e = 1 / this.normal.length();
        return this.normal.multiplyScalar(e), (this.constant *= e), this;
    }
    negate() {
        return (this.constant *= -1), this.normal.negate(), this;
    }
    distanceToPoint(e) {
        return this.normal.dot(e) + this.constant;
    }
    distanceToSphere(e) {
        return this.distanceToPoint(e.center) - e.radius;
    }
    projectPoint(e, t) {
        return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e));
    }
    intersectLine(e, t) {
        const n = e.delta(Bs),
            i = this.normal.dot(n);
        if (i === 0) return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
        const s = -(e.start.dot(this.normal) + this.constant) / i;
        return s < 0 || s > 1 ? null : t.copy(e.start).addScaledVector(n, s);
    }
    intersectsLine(e) {
        const t = this.distanceToPoint(e.start),
            n = this.distanceToPoint(e.end);
        return (t < 0 && n > 0) || (n < 0 && t > 0);
    }
    intersectsBox(e) {
        return e.intersectsPlane(this);
    }
    intersectsSphere(e) {
        return e.intersectsPlane(this);
    }
    coplanarPoint(e) {
        return e.copy(this.normal).multiplyScalar(-this.constant);
    }
    applyMatrix4(e, t) {
        const n = t || of.getNormalMatrix(e),
            i = this.coplanarPoint(Bs).applyMatrix4(e),
            s = this.normal.applyMatrix3(n).normalize();
        return (this.constant = -i.dot(s)), this;
    }
    translate(e) {
        return (this.constant -= e.dot(this.normal)), this;
    }
    equals(e) {
        return e.normal.equals(this.normal) && e.constant === this.constant;
    }
    clone() {
        return new this.constructor().copy(this);
    }
}
const Ln = new ns(),
    Ar = new R();
class Mo {
    constructor(e = new an(), t = new an(), n = new an(), i = new an(), s = new an(), a = new an()) {
        this.planes = [e, t, n, i, s, a];
    }
    set(e, t, n, i, s, a) {
        const o = this.planes;
        return o[0].copy(e), o[1].copy(t), o[2].copy(n), o[3].copy(i), o[4].copy(s), o[5].copy(a), this;
    }
    copy(e) {
        const t = this.planes;
        for (let n = 0; n < 6; n++) t[n].copy(e.planes[n]);
        return this;
    }
    setFromProjectionMatrix(e) {
        const t = this.planes,
            n = e.elements,
            i = n[0],
            s = n[1],
            a = n[2],
            o = n[3],
            c = n[4],
            l = n[5],
            u = n[6],
            f = n[7],
            h = n[8],
            p = n[9],
            g = n[10],
            _ = n[11],
            m = n[12],
            d = n[13],
            y = n[14],
            x = n[15];
        return (
            t[0].setComponents(o - i, f - c, _ - h, x - m).normalize(),
            t[1].setComponents(o + i, f + c, _ + h, x + m).normalize(),
            t[2].setComponents(o + s, f + l, _ + p, x + d).normalize(),
            t[3].setComponents(o - s, f - l, _ - p, x - d).normalize(),
            t[4].setComponents(o - a, f - u, _ - g, x - y).normalize(),
            t[5].setComponents(o + a, f + u, _ + g, x + y).normalize(),
            this
        );
    }
    intersectsObject(e) {
        if (e.boundingSphere !== void 0) e.boundingSphere === null && e.computeBoundingSphere(), Ln.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
        else {
            const t = e.geometry;
            t.boundingSphere === null && t.computeBoundingSphere(), Ln.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
        }
        return this.intersectsSphere(Ln);
    }
    intersectsSprite(e) {
        return Ln.center.set(0, 0, 0), (Ln.radius = 0.7071067811865476), Ln.applyMatrix4(e.matrixWorld), this.intersectsSphere(Ln);
    }
    intersectsSphere(e) {
        const t = this.planes,
            n = e.center,
            i = -e.radius;
        for (let s = 0; s < 6; s++) if (t[s].distanceToPoint(n) < i) return !1;
        return !0;
    }
    intersectsBox(e) {
        const t = this.planes;
        for (let n = 0; n < 6; n++) {
            const i = t[n];
            if (((Ar.x = i.normal.x > 0 ? e.max.x : e.min.x), (Ar.y = i.normal.y > 0 ? e.max.y : e.min.y), (Ar.z = i.normal.z > 0 ? e.max.z : e.min.z), i.distanceToPoint(Ar) < 0)) return !1;
        }
        return !0;
    }
    containsPoint(e) {
        const t = this.planes;
        for (let n = 0; n < 6; n++) if (t[n].distanceToPoint(e) < 0) return !1;
        return !0;
    }
    clone() {
        return new this.constructor().copy(this);
    }
}
function Vl() {
    let r = null,
        e = !1,
        t = null,
        n = null;
    function i(s, a) {
        t(s, a), (n = r.requestAnimationFrame(i));
    }
    return {
        start: function () {
            e !== !0 && t !== null && ((n = r.requestAnimationFrame(i)), (e = !0));
        },
        stop: function () {
            r.cancelAnimationFrame(n), (e = !1);
        },
        setAnimationLoop: function (s) {
            t = s;
        },
        setContext: function (s) {
            r = s;
        },
    };
}
function af(r, e) {
    const t = e.isWebGL2,
        n = new WeakMap();
    function i(l, u) {
        const f = l.array,
            h = l.usage,
            p = r.createBuffer();
        r.bindBuffer(u, p), r.bufferData(u, f, h), l.onUploadCallback();
        let g;
        if (f instanceof Float32Array) g = 5126;
        else if (f instanceof Uint16Array)
            if (l.isFloat16BufferAttribute)
                if (t) g = 5131;
                else throw new Error('THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.');
            else g = 5123;
        else if (f instanceof Int16Array) g = 5122;
        else if (f instanceof Uint32Array) g = 5125;
        else if (f instanceof Int32Array) g = 5124;
        else if (f instanceof Int8Array) g = 5120;
        else if (f instanceof Uint8Array) g = 5121;
        else if (f instanceof Uint8ClampedArray) g = 5121;
        else throw new Error('THREE.WebGLAttributes: Unsupported buffer data format: ' + f);
        return { buffer: p, type: g, bytesPerElement: f.BYTES_PER_ELEMENT, version: l.version };
    }
    function s(l, u, f) {
        const h = u.array,
            p = u.updateRange;
        r.bindBuffer(f, l),
            p.count === -1
                ? r.bufferSubData(f, 0, h)
                : (t ? r.bufferSubData(f, p.offset * h.BYTES_PER_ELEMENT, h, p.offset, p.count) : r.bufferSubData(f, p.offset * h.BYTES_PER_ELEMENT, h.subarray(p.offset, p.offset + p.count)),
                  (p.count = -1)),
            u.onUploadCallback();
    }
    function a(l) {
        return l.isInterleavedBufferAttribute && (l = l.data), n.get(l);
    }
    function o(l) {
        l.isInterleavedBufferAttribute && (l = l.data);
        const u = n.get(l);
        u && (r.deleteBuffer(u.buffer), n.delete(l));
    }
    function c(l, u) {
        if (l.isGLBufferAttribute) {
            const h = n.get(l);
            (!h || h.version < l.version) && n.set(l, { buffer: l.buffer, type: l.type, bytesPerElement: l.elementSize, version: l.version });
            return;
        }
        l.isInterleavedBufferAttribute && (l = l.data);
        const f = n.get(l);
        f === void 0 ? n.set(l, i(l, u)) : f.version < l.version && (s(f.buffer, l, u), (f.version = l.version));
    }
    return { get: a, remove: o, update: c };
}
class rs extends hn {
    constructor(e = 1, t = 1, n = 1, i = 1) {
        super(), (this.type = 'PlaneGeometry'), (this.parameters = { width: e, height: t, widthSegments: n, heightSegments: i });
        const s = e / 2,
            a = t / 2,
            o = Math.floor(n),
            c = Math.floor(i),
            l = o + 1,
            u = c + 1,
            f = e / o,
            h = t / c,
            p = [],
            g = [],
            _ = [],
            m = [];
        for (let d = 0; d < u; d++) {
            const y = d * h - a;
            for (let x = 0; x < l; x++) {
                const v = x * f - s;
                g.push(v, -y, 0), _.push(0, 0, 1), m.push(x / o), m.push(1 - d / c);
            }
        }
        for (let d = 0; d < c; d++)
            for (let y = 0; y < o; y++) {
                const x = y + l * d,
                    v = y + l * (d + 1),
                    M = y + 1 + l * (d + 1),
                    b = y + 1 + l * d;
                p.push(x, v, b), p.push(v, M, b);
            }
        this.setIndex(p), this.setAttribute('position', new Bt(g, 3)), this.setAttribute('normal', new Bt(_, 3)), this.setAttribute('uv', new Bt(m, 2));
    }
    copy(e) {
        return super.copy(e), (this.parameters = Object.assign({}, e.parameters)), this;
    }
    static fromJSON(e) {
        return new rs(e.width, e.height, e.widthSegments, e.heightSegments);
    }
}
var lf = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,
    cf = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
    uf = `#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,
    ff = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,
    hf = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,
    df = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,
    pf = 'vec3 transformed = vec3( position );',
    mf = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,
    gf = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,
    _f = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,
    xf = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,
    vf = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,
    yf = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,
    Mf = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,
    Sf = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,
    bf = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,
    wf = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,
    Ef = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,
    Tf = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,
    Af = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,
    Cf = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,
    Pf = `vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,
    Lf = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,
    Rf = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,
    Df = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,
    If = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,
    Uf = 'gl_FragColor = linearToOutputTexel( gl_FragColor );',
    Nf = `vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,
    Of = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,
    Ff = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,
    Bf = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,
    zf = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,
    Gf = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,
    Vf = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,
    kf = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`,
    Hf = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,
    Wf = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,
    qf = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,
    Xf = `#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,
    jf = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,
    Yf = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,
    Kf = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,
    Zf = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,
    $f = `#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,
    Jf = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,
    Qf = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,
    eh = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,
    th = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,
    nh = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif`,
    ih = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,
    rh = `
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,
    sh = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,
    oh = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,
    ah = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,
    lh = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,
    ch = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,
    uh = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,
    fh = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,
    hh = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`,
    dh = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,
    ph = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
    mh = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,
    gh = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,
    _h = `#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,
    xh = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,
    vh = `#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,
    yh = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,
    Mh = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#ifdef USE_NORMALMAP_TANGENTSPACE
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,
    Sh = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,
    bh = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
    wh = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
    Eh = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,
    Th = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,
    Ah = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,
    Ch = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,
    Ph = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,
    Lh = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,
    Rh = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,
    Dh = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,
    Ih = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,
    Uh = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,
    Nh = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,
    Oh = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,
    Fh = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,
    Bh = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,
    zh = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,
    Gh = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,
    Vh = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,
    kh = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,
    Hh = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,
    Wh = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,
    qh = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,
    Xh = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,
    jh = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,
    Yh = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,
    Kh = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,
    Zh = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,
    $h = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,
    Jh = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, vec2 fullSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		
		vec2 lodFudge = pow( 1.95, lod ) / fullSize;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec2 fullSize = vec2( textureSize( sampler, 0 ) );
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), fullSize, floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), fullSize, ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,
    Qh = `#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,
    ed = `#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_UV2
	attribute vec2 uv2;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,
    td = `#ifdef USE_UV
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,
    nd = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const id = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,
    rd = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,
    sd = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
    od = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,
    ad = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
    ld = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,
    cd = `#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,
    ud = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,
    fd = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,
    hd = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,
    dd = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,
    pd = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,
    md = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
    gd = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
    _d = `#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,
    xd = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
    vd = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
    yd = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
    Md = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,
    Sd = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
    bd = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,
    wd = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,
    Ed = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
    Td = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
    Ad = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,
    Cd = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
    Pd = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
    Ld = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
    Rd = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,
    Dd = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
    Id = `#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
    Ud = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,
    Nd = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
    Od = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,
    Pe = {
        alphamap_fragment: lf,
        alphamap_pars_fragment: cf,
        alphatest_fragment: uf,
        alphatest_pars_fragment: ff,
        aomap_fragment: hf,
        aomap_pars_fragment: df,
        begin_vertex: pf,
        beginnormal_vertex: mf,
        bsdfs: gf,
        iridescence_fragment: _f,
        bumpmap_pars_fragment: xf,
        clipping_planes_fragment: vf,
        clipping_planes_pars_fragment: yf,
        clipping_planes_pars_vertex: Mf,
        clipping_planes_vertex: Sf,
        color_fragment: bf,
        color_pars_fragment: wf,
        color_pars_vertex: Ef,
        color_vertex: Tf,
        common: Af,
        cube_uv_reflection_fragment: Cf,
        defaultnormal_vertex: Pf,
        displacementmap_pars_vertex: Lf,
        displacementmap_vertex: Rf,
        emissivemap_fragment: Df,
        emissivemap_pars_fragment: If,
        encodings_fragment: Uf,
        encodings_pars_fragment: Nf,
        envmap_fragment: Of,
        envmap_common_pars_fragment: Ff,
        envmap_pars_fragment: Bf,
        envmap_pars_vertex: zf,
        envmap_physical_pars_fragment: $f,
        envmap_vertex: Gf,
        fog_vertex: Vf,
        fog_pars_vertex: kf,
        fog_fragment: Hf,
        fog_pars_fragment: Wf,
        gradientmap_pars_fragment: qf,
        lightmap_fragment: Xf,
        lightmap_pars_fragment: jf,
        lights_lambert_fragment: Yf,
        lights_lambert_pars_fragment: Kf,
        lights_pars_begin: Zf,
        lights_toon_fragment: Jf,
        lights_toon_pars_fragment: Qf,
        lights_phong_fragment: eh,
        lights_phong_pars_fragment: th,
        lights_physical_fragment: nh,
        lights_physical_pars_fragment: ih,
        lights_fragment_begin: rh,
        lights_fragment_maps: sh,
        lights_fragment_end: oh,
        logdepthbuf_fragment: ah,
        logdepthbuf_pars_fragment: lh,
        logdepthbuf_pars_vertex: ch,
        logdepthbuf_vertex: uh,
        map_fragment: fh,
        map_pars_fragment: hh,
        map_particle_fragment: dh,
        map_particle_pars_fragment: ph,
        metalnessmap_fragment: mh,
        metalnessmap_pars_fragment: gh,
        morphcolor_vertex: _h,
        morphnormal_vertex: xh,
        morphtarget_pars_vertex: vh,
        morphtarget_vertex: yh,
        normal_fragment_begin: Mh,
        normal_fragment_maps: Sh,
        normal_pars_fragment: bh,
        normal_pars_vertex: wh,
        normal_vertex: Eh,
        normalmap_pars_fragment: Th,
        clearcoat_normal_fragment_begin: Ah,
        clearcoat_normal_fragment_maps: Ch,
        clearcoat_pars_fragment: Ph,
        iridescence_pars_fragment: Lh,
        output_fragment: Rh,
        packing: Dh,
        premultiplied_alpha_fragment: Ih,
        project_vertex: Uh,
        dithering_fragment: Nh,
        dithering_pars_fragment: Oh,
        roughnessmap_fragment: Fh,
        roughnessmap_pars_fragment: Bh,
        shadowmap_pars_fragment: zh,
        shadowmap_pars_vertex: Gh,
        shadowmap_vertex: Vh,
        shadowmask_pars_fragment: kh,
        skinbase_vertex: Hh,
        skinning_pars_vertex: Wh,
        skinning_vertex: qh,
        skinnormal_vertex: Xh,
        specularmap_fragment: jh,
        specularmap_pars_fragment: Yh,
        tonemapping_fragment: Kh,
        tonemapping_pars_fragment: Zh,
        transmission_fragment: $h,
        transmission_pars_fragment: Jh,
        uv_pars_fragment: Qh,
        uv_pars_vertex: ed,
        uv_vertex: td,
        worldpos_vertex: nd,
        background_vert: id,
        background_frag: rd,
        backgroundCube_vert: sd,
        backgroundCube_frag: od,
        cube_vert: ad,
        cube_frag: ld,
        depth_vert: cd,
        depth_frag: ud,
        distanceRGBA_vert: fd,
        distanceRGBA_frag: hd,
        equirect_vert: dd,
        equirect_frag: pd,
        linedashed_vert: md,
        linedashed_frag: gd,
        meshbasic_vert: _d,
        meshbasic_frag: xd,
        meshlambert_vert: vd,
        meshlambert_frag: yd,
        meshmatcap_vert: Md,
        meshmatcap_frag: Sd,
        meshnormal_vert: bd,
        meshnormal_frag: wd,
        meshphong_vert: Ed,
        meshphong_frag: Td,
        meshphysical_vert: Ad,
        meshphysical_frag: Cd,
        meshtoon_vert: Pd,
        meshtoon_frag: Ld,
        points_vert: Rd,
        points_frag: Dd,
        shadow_vert: Id,
        shadow_frag: Ud,
        sprite_vert: Nd,
        sprite_frag: Od,
    },
    se = {
        common: {
            diffuse: { value: new ze(16777215) },
            opacity: { value: 1 },
            map: { value: null },
            mapTransform: { value: new Ue() },
            alphaMap: { value: null },
            alphaMapTransform: { value: new Ue() },
            alphaTest: { value: 0 },
        },
        specularmap: { specularMap: { value: null }, specularMapTransform: { value: new Ue() } },
        envmap: { envMap: { value: null }, flipEnvMap: { value: -1 }, reflectivity: { value: 1 }, ior: { value: 1.5 }, refractionRatio: { value: 0.98 } },
        aomap: { aoMap: { value: null }, aoMapIntensity: { value: 1 }, aoMapTransform: { value: new Ue() } },
        lightmap: { lightMap: { value: null }, lightMapIntensity: { value: 1 }, lightMapTransform: { value: new Ue() } },
        bumpmap: { bumpMap: { value: null }, bumpMapTransform: { value: new Ue() }, bumpScale: { value: 1 } },
        normalmap: { normalMap: { value: null }, normalMapTransform: { value: new Ue() }, normalScale: { value: new be(1, 1) } },
        displacementmap: { displacementMap: { value: null }, displacementMapTransform: { value: new Ue() }, displacementScale: { value: 1 }, displacementBias: { value: 0 } },
        emissivemap: { emissiveMap: { value: null }, emissiveMapTransform: { value: new Ue() } },
        metalnessmap: { metalnessMap: { value: null }, metalnessMapTransform: { value: new Ue() } },
        roughnessmap: { roughnessMap: { value: null }, roughnessMapTransform: { value: new Ue() } },
        gradientmap: { gradientMap: { value: null } },
        fog: { fogDensity: { value: 25e-5 }, fogNear: { value: 1 }, fogFar: { value: 2e3 }, fogColor: { value: new ze(16777215) } },
        lights: {
            ambientLightColor: { value: [] },
            lightProbe: { value: [] },
            directionalLights: { value: [], properties: { direction: {}, color: {} } },
            directionalLightShadows: { value: [], properties: { shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } },
            directionalShadowMap: { value: [] },
            directionalShadowMatrix: { value: [] },
            spotLights: { value: [], properties: { color: {}, position: {}, direction: {}, distance: {}, coneCos: {}, penumbraCos: {}, decay: {} } },
            spotLightShadows: { value: [], properties: { shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } },
            spotLightMap: { value: [] },
            spotShadowMap: { value: [] },
            spotLightMatrix: { value: [] },
            pointLights: { value: [], properties: { color: {}, position: {}, decay: {}, distance: {} } },
            pointLightShadows: { value: [], properties: { shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {}, shadowCameraNear: {}, shadowCameraFar: {} } },
            pointShadowMap: { value: [] },
            pointShadowMatrix: { value: [] },
            hemisphereLights: { value: [], properties: { direction: {}, skyColor: {}, groundColor: {} } },
            rectAreaLights: { value: [], properties: { color: {}, position: {}, width: {}, height: {} } },
            ltc_1: { value: null },
            ltc_2: { value: null },
        },
        points: {
            diffuse: { value: new ze(16777215) },
            opacity: { value: 1 },
            size: { value: 1 },
            scale: { value: 1 },
            map: { value: null },
            alphaMap: { value: null },
            alphaTest: { value: 0 },
            uvTransform: { value: new Ue() },
        },
        sprite: {
            diffuse: { value: new ze(16777215) },
            opacity: { value: 1 },
            center: { value: new be(0.5, 0.5) },
            rotation: { value: 0 },
            map: { value: null },
            mapTransform: { value: new Ue() },
            alphaMap: { value: null },
            alphaTest: { value: 0 },
        },
    },
    jt = {
        basic: { uniforms: mt([se.common, se.specularmap, se.envmap, se.aomap, se.lightmap, se.fog]), vertexShader: Pe.meshbasic_vert, fragmentShader: Pe.meshbasic_frag },
        lambert: {
            uniforms: mt([
                se.common,
                se.specularmap,
                se.envmap,
                se.aomap,
                se.lightmap,
                se.emissivemap,
                se.bumpmap,
                se.normalmap,
                se.displacementmap,
                se.fog,
                se.lights,
                { emissive: { value: new ze(0) } },
            ]),
            vertexShader: Pe.meshlambert_vert,
            fragmentShader: Pe.meshlambert_frag,
        },
        phong: {
            uniforms: mt([
                se.common,
                se.specularmap,
                se.envmap,
                se.aomap,
                se.lightmap,
                se.emissivemap,
                se.bumpmap,
                se.normalmap,
                se.displacementmap,
                se.fog,
                se.lights,
                { emissive: { value: new ze(0) }, specular: { value: new ze(1118481) }, shininess: { value: 30 } },
            ]),
            vertexShader: Pe.meshphong_vert,
            fragmentShader: Pe.meshphong_frag,
        },
        standard: {
            uniforms: mt([
                se.common,
                se.envmap,
                se.aomap,
                se.lightmap,
                se.emissivemap,
                se.bumpmap,
                se.normalmap,
                se.displacementmap,
                se.roughnessmap,
                se.metalnessmap,
                se.fog,
                se.lights,
                { emissive: { value: new ze(0) }, roughness: { value: 1 }, metalness: { value: 0 }, envMapIntensity: { value: 1 } },
            ]),
            vertexShader: Pe.meshphysical_vert,
            fragmentShader: Pe.meshphysical_frag,
        },
        toon: {
            uniforms: mt([se.common, se.aomap, se.lightmap, se.emissivemap, se.bumpmap, se.normalmap, se.displacementmap, se.gradientmap, se.fog, se.lights, { emissive: { value: new ze(0) } }]),
            vertexShader: Pe.meshtoon_vert,
            fragmentShader: Pe.meshtoon_frag,
        },
        matcap: { uniforms: mt([se.common, se.bumpmap, se.normalmap, se.displacementmap, se.fog, { matcap: { value: null } }]), vertexShader: Pe.meshmatcap_vert, fragmentShader: Pe.meshmatcap_frag },
        points: { uniforms: mt([se.points, se.fog]), vertexShader: Pe.points_vert, fragmentShader: Pe.points_frag },
        dashed: { uniforms: mt([se.common, se.fog, { scale: { value: 1 }, dashSize: { value: 1 }, totalSize: { value: 2 } }]), vertexShader: Pe.linedashed_vert, fragmentShader: Pe.linedashed_frag },
        depth: { uniforms: mt([se.common, se.displacementmap]), vertexShader: Pe.depth_vert, fragmentShader: Pe.depth_frag },
        normal: { uniforms: mt([se.common, se.bumpmap, se.normalmap, se.displacementmap, { opacity: { value: 1 } }]), vertexShader: Pe.meshnormal_vert, fragmentShader: Pe.meshnormal_frag },
        sprite: { uniforms: mt([se.sprite, se.fog]), vertexShader: Pe.sprite_vert, fragmentShader: Pe.sprite_frag },
        background: { uniforms: { uvTransform: { value: new Ue() }, t2D: { value: null }, backgroundIntensity: { value: 1 } }, vertexShader: Pe.background_vert, fragmentShader: Pe.background_frag },
        backgroundCube: {
            uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 }, backgroundBlurriness: { value: 0 }, backgroundIntensity: { value: 1 } },
            vertexShader: Pe.backgroundCube_vert,
            fragmentShader: Pe.backgroundCube_frag,
        },
        cube: { uniforms: { tCube: { value: null }, tFlip: { value: -1 }, opacity: { value: 1 } }, vertexShader: Pe.cube_vert, fragmentShader: Pe.cube_frag },
        equirect: { uniforms: { tEquirect: { value: null } }, vertexShader: Pe.equirect_vert, fragmentShader: Pe.equirect_frag },
        distanceRGBA: {
            uniforms: mt([se.common, se.displacementmap, { referencePosition: { value: new R() }, nearDistance: { value: 1 }, farDistance: { value: 1e3 } }]),
            vertexShader: Pe.distanceRGBA_vert,
            fragmentShader: Pe.distanceRGBA_frag,
        },
        shadow: { uniforms: mt([se.lights, se.fog, { color: { value: new ze(0) }, opacity: { value: 1 } }]), vertexShader: Pe.shadow_vert, fragmentShader: Pe.shadow_frag },
    };
jt.physical = {
    uniforms: mt([
        jt.standard.uniforms,
        {
            clearcoat: { value: 0 },
            clearcoatMap: { value: null },
            clearcoatMapTransform: { value: new Ue() },
            clearcoatNormalMap: { value: null },
            clearcoatNormalMapTransform: { value: new Ue() },
            clearcoatNormalScale: { value: new be(1, 1) },
            clearcoatRoughness: { value: 0 },
            clearcoatRoughnessMap: { value: null },
            clearcoatRoughnessMapTransform: { value: new Ue() },
            iridescence: { value: 0 },
            iridescenceMap: { value: null },
            iridescenceMapTransform: { value: new Ue() },
            iridescenceIOR: { value: 1.3 },
            iridescenceThicknessMinimum: { value: 100 },
            iridescenceThicknessMaximum: { value: 400 },
            iridescenceThicknessMap: { value: null },
            iridescenceThicknessMapTransform: { value: new Ue() },
            sheen: { value: 0 },
            sheenColor: { value: new ze(0) },
            sheenColorMap: { value: null },
            sheenColorMapTransform: { value: new Ue() },
            sheenRoughness: { value: 1 },
            sheenRoughnessMap: { value: null },
            sheenRoughnessMapTransform: { value: new Ue() },
            transmission: { value: 0 },
            transmissionMap: { value: null },
            transmissionMapTransform: { value: new Ue() },
            transmissionSamplerSize: { value: new be() },
            transmissionSamplerMap: { value: null },
            thickness: { value: 0 },
            thicknessMap: { value: null },
            thicknessMapTransform: { value: new Ue() },
            attenuationDistance: { value: 0 },
            attenuationColor: { value: new ze(0) },
            specularColor: { value: new ze(1, 1, 1) },
            specularColorMap: { value: null },
            specularColorMapTransform: { value: new Ue() },
            specularIntensity: { value: 1 },
            specularIntensityMap: { value: null },
            specularIntensityMapTransform: { value: new Ue() },
        },
    ]),
    vertexShader: Pe.meshphysical_vert,
    fragmentShader: Pe.meshphysical_frag,
};
const Cr = { r: 0, b: 0, g: 0 };
function Fd(r, e, t, n, i, s, a) {
    const o = new ze(0);
    let c = s === !0 ? 0 : 1,
        l,
        u,
        f = null,
        h = 0,
        p = null;
    function g(m, d) {
        let y = !1,
            x = d.isScene === !0 ? d.background : null;
        x && x.isTexture && (x = (d.backgroundBlurriness > 0 ? t : e).get(x));
        const v = r.xr,
            M = v.getSession && v.getSession();
        M && M.environmentBlendMode === 'additive' && (x = null),
            x === null ? _(o, c) : x && x.isColor && (_(x, 1), (y = !0)),
            (r.autoClear || y) && r.clear(r.autoClearColor, r.autoClearDepth, r.autoClearStencil),
            x && (x.isCubeTexture || x.mapping === es)
                ? (u === void 0 &&
                      ((u = new Et(
                          new Ci(1, 1, 1),
                          new bn({
                              name: 'BackgroundCubeMaterial',
                              uniforms: Ti(jt.backgroundCube.uniforms),
                              vertexShader: jt.backgroundCube.vertexShader,
                              fragmentShader: jt.backgroundCube.fragmentShader,
                              side: ft,
                              depthTest: !1,
                              depthWrite: !1,
                              fog: !1,
                          }),
                      )),
                      u.geometry.deleteAttribute('normal'),
                      u.geometry.deleteAttribute('uv'),
                      (u.onBeforeRender = function (b, P, A) {
                          this.matrixWorld.copyPosition(A.matrixWorld);
                      }),
                      Object.defineProperty(u.material, 'envMap', {
                          get: function () {
                              return this.uniforms.envMap.value;
                          },
                      }),
                      i.update(u)),
                  (u.material.uniforms.envMap.value = x),
                  (u.material.uniforms.flipEnvMap.value = x.isCubeTexture && x.isRenderTargetTexture === !1 ? -1 : 1),
                  (u.material.uniforms.backgroundBlurriness.value = d.backgroundBlurriness),
                  (u.material.uniforms.backgroundIntensity.value = d.backgroundIntensity),
                  (u.material.toneMapped = x.encoding !== ke),
                  (f !== x || h !== x.version || p !== r.toneMapping) && ((u.material.needsUpdate = !0), (f = x), (h = x.version), (p = r.toneMapping)),
                  u.layers.enableAll(),
                  m.unshift(u, u.geometry, u.material, 0, 0, null))
                : x &&
                  x.isTexture &&
                  (l === void 0 &&
                      ((l = new Et(
                          new rs(2, 2),
                          new bn({
                              name: 'BackgroundMaterial',
                              uniforms: Ti(jt.background.uniforms),
                              vertexShader: jt.background.vertexShader,
                              fragmentShader: jt.background.fragmentShader,
                              side: Zt,
                              depthTest: !1,
                              depthWrite: !1,
                              fog: !1,
                          }),
                      )),
                      l.geometry.deleteAttribute('normal'),
                      Object.defineProperty(l.material, 'map', {
                          get: function () {
                              return this.uniforms.t2D.value;
                          },
                      }),
                      i.update(l)),
                  (l.material.uniforms.t2D.value = x),
                  (l.material.uniforms.backgroundIntensity.value = d.backgroundIntensity),
                  (l.material.toneMapped = x.encoding !== ke),
                  x.matrixAutoUpdate === !0 && x.updateMatrix(),
                  l.material.uniforms.uvTransform.value.copy(x.matrix),
                  (f !== x || h !== x.version || p !== r.toneMapping) && ((l.material.needsUpdate = !0), (f = x), (h = x.version), (p = r.toneMapping)),
                  l.layers.enableAll(),
                  m.unshift(l, l.geometry, l.material, 0, 0, null));
    }
    function _(m, d) {
        m.getRGB(Cr, Fl(r)), n.buffers.color.setClear(Cr.r, Cr.g, Cr.b, d, a);
    }
    return {
        getClearColor: function () {
            return o;
        },
        setClearColor: function (m, d = 1) {
            o.set(m), (c = d), _(o, c);
        },
        getClearAlpha: function () {
            return c;
        },
        setClearAlpha: function (m) {
            (c = m), _(o, c);
        },
        render: g,
    };
}
function Bd(r, e, t, n) {
    const i = r.getParameter(34921),
        s = n.isWebGL2 ? null : e.get('OES_vertex_array_object'),
        a = n.isWebGL2 || s !== null,
        o = {},
        c = m(null);
    let l = c,
        u = !1;
    function f(U, B, $, Y, k) {
        let K = !1;
        if (a) {
            const ne = _(Y, $, B);
            l !== ne && ((l = ne), p(l.object)), (K = d(U, Y, $, k)), K && y(U, Y, $, k);
        } else {
            const ne = B.wireframe === !0;
            (l.geometry !== Y.id || l.program !== $.id || l.wireframe !== ne) && ((l.geometry = Y.id), (l.program = $.id), (l.wireframe = ne), (K = !0));
        }
        k !== null && t.update(k, 34963), (K || u) && ((u = !1), A(U, B, $, Y), k !== null && r.bindBuffer(34963, t.get(k).buffer));
    }
    function h() {
        return n.isWebGL2 ? r.createVertexArray() : s.createVertexArrayOES();
    }
    function p(U) {
        return n.isWebGL2 ? r.bindVertexArray(U) : s.bindVertexArrayOES(U);
    }
    function g(U) {
        return n.isWebGL2 ? r.deleteVertexArray(U) : s.deleteVertexArrayOES(U);
    }
    function _(U, B, $) {
        const Y = $.wireframe === !0;
        let k = o[U.id];
        k === void 0 && ((k = {}), (o[U.id] = k));
        let K = k[B.id];
        K === void 0 && ((K = {}), (k[B.id] = K));
        let ne = K[Y];
        return ne === void 0 && ((ne = m(h())), (K[Y] = ne)), ne;
    }
    function m(U) {
        const B = [],
            $ = [],
            Y = [];
        for (let k = 0; k < i; k++) (B[k] = 0), ($[k] = 0), (Y[k] = 0);
        return { geometry: null, program: null, wireframe: !1, newAttributes: B, enabledAttributes: $, attributeDivisors: Y, object: U, attributes: {}, index: null };
    }
    function d(U, B, $, Y) {
        const k = l.attributes,
            K = B.attributes;
        let ne = 0;
        const _e = $.getAttributes();
        for (const ce in _e)
            if (_e[ce].location >= 0) {
                const J = k[ce];
                let ie = K[ce];
                if (
                    (ie === void 0 && (ce === 'instanceMatrix' && U.instanceMatrix && (ie = U.instanceMatrix), ce === 'instanceColor' && U.instanceColor && (ie = U.instanceColor)),
                    J === void 0 || J.attribute !== ie || (ie && J.data !== ie.data))
                )
                    return !0;
                ne++;
            }
        return l.attributesNum !== ne || l.index !== Y;
    }
    function y(U, B, $, Y) {
        const k = {},
            K = B.attributes;
        let ne = 0;
        const _e = $.getAttributes();
        for (const ce in _e)
            if (_e[ce].location >= 0) {
                let J = K[ce];
                J === void 0 && (ce === 'instanceMatrix' && U.instanceMatrix && (J = U.instanceMatrix), ce === 'instanceColor' && U.instanceColor && (J = U.instanceColor));
                const ie = {};
                (ie.attribute = J), J && J.data && (ie.data = J.data), (k[ce] = ie), ne++;
            }
        (l.attributes = k), (l.attributesNum = ne), (l.index = Y);
    }
    function x() {
        const U = l.newAttributes;
        for (let B = 0, $ = U.length; B < $; B++) U[B] = 0;
    }
    function v(U) {
        M(U, 0);
    }
    function M(U, B) {
        const $ = l.newAttributes,
            Y = l.enabledAttributes,
            k = l.attributeDivisors;
        ($[U] = 1),
            Y[U] === 0 && (r.enableVertexAttribArray(U), (Y[U] = 1)),
            k[U] !== B && ((n.isWebGL2 ? r : e.get('ANGLE_instanced_arrays'))[n.isWebGL2 ? 'vertexAttribDivisor' : 'vertexAttribDivisorANGLE'](U, B), (k[U] = B));
    }
    function b() {
        const U = l.newAttributes,
            B = l.enabledAttributes;
        for (let $ = 0, Y = B.length; $ < Y; $++) B[$] !== U[$] && (r.disableVertexAttribArray($), (B[$] = 0));
    }
    function P(U, B, $, Y, k, K) {
        n.isWebGL2 === !0 && ($ === 5124 || $ === 5125) ? r.vertexAttribIPointer(U, B, $, k, K) : r.vertexAttribPointer(U, B, $, Y, k, K);
    }
    function A(U, B, $, Y) {
        if (n.isWebGL2 === !1 && (U.isInstancedMesh || Y.isInstancedBufferGeometry) && e.get('ANGLE_instanced_arrays') === null) return;
        x();
        const k = Y.attributes,
            K = $.getAttributes(),
            ne = B.defaultAttributeValues;
        for (const _e in K) {
            const ce = K[_e];
            if (ce.location >= 0) {
                let W = k[_e];
                if ((W === void 0 && (_e === 'instanceMatrix' && U.instanceMatrix && (W = U.instanceMatrix), _e === 'instanceColor' && U.instanceColor && (W = U.instanceColor)), W !== void 0)) {
                    const J = W.normalized,
                        ie = W.itemSize,
                        oe = t.get(W);
                    if (oe === void 0) continue;
                    const V = oe.buffer,
                        Me = oe.type,
                        xe = oe.bytesPerElement;
                    if (W.isInterleavedBufferAttribute) {
                        const re = W.data,
                            ye = re.stride,
                            Fe = W.offset;
                        if (re.isInstancedInterleavedBuffer) {
                            for (let me = 0; me < ce.locationSize; me++) M(ce.location + me, re.meshPerAttribute);
                            U.isInstancedMesh !== !0 && Y._maxInstanceCount === void 0 && (Y._maxInstanceCount = re.meshPerAttribute * re.count);
                        } else for (let me = 0; me < ce.locationSize; me++) v(ce.location + me);
                        r.bindBuffer(34962, V);
                        for (let me = 0; me < ce.locationSize; me++) P(ce.location + me, ie / ce.locationSize, Me, J, ye * xe, (Fe + (ie / ce.locationSize) * me) * xe);
                    } else {
                        if (W.isInstancedBufferAttribute) {
                            for (let re = 0; re < ce.locationSize; re++) M(ce.location + re, W.meshPerAttribute);
                            U.isInstancedMesh !== !0 && Y._maxInstanceCount === void 0 && (Y._maxInstanceCount = W.meshPerAttribute * W.count);
                        } else for (let re = 0; re < ce.locationSize; re++) v(ce.location + re);
                        r.bindBuffer(34962, V);
                        for (let re = 0; re < ce.locationSize; re++) P(ce.location + re, ie / ce.locationSize, Me, J, ie * xe, (ie / ce.locationSize) * re * xe);
                    }
                } else if (ne !== void 0) {
                    const J = ne[_e];
                    if (J !== void 0)
                        switch (J.length) {
                            case 2:
                                r.vertexAttrib2fv(ce.location, J);
                                break;
                            case 3:
                                r.vertexAttrib3fv(ce.location, J);
                                break;
                            case 4:
                                r.vertexAttrib4fv(ce.location, J);
                                break;
                            default:
                                r.vertexAttrib1fv(ce.location, J);
                        }
                }
            }
        }
        b();
    }
    function S() {
        O();
        for (const U in o) {
            const B = o[U];
            for (const $ in B) {
                const Y = B[$];
                for (const k in Y) g(Y[k].object), delete Y[k];
                delete B[$];
            }
            delete o[U];
        }
    }
    function E(U) {
        if (o[U.id] === void 0) return;
        const B = o[U.id];
        for (const $ in B) {
            const Y = B[$];
            for (const k in Y) g(Y[k].object), delete Y[k];
            delete B[$];
        }
        delete o[U.id];
    }
    function N(U) {
        for (const B in o) {
            const $ = o[B];
            if ($[U.id] === void 0) continue;
            const Y = $[U.id];
            for (const k in Y) g(Y[k].object), delete Y[k];
            delete $[U.id];
        }
    }
    function O() {
        D(), (u = !0), l !== c && ((l = c), p(l.object));
    }
    function D() {
        (c.geometry = null), (c.program = null), (c.wireframe = !1);
    }
    return { setup: f, reset: O, resetDefaultState: D, dispose: S, releaseStatesOfGeometry: E, releaseStatesOfProgram: N, initAttributes: x, enableAttribute: v, disableUnusedAttributes: b };
}
function zd(r, e, t, n) {
    const i = n.isWebGL2;
    let s;
    function a(l) {
        s = l;
    }
    function o(l, u) {
        r.drawArrays(s, l, u), t.update(u, s, 1);
    }
    function c(l, u, f) {
        if (f === 0) return;
        let h, p;
        if (i) (h = r), (p = 'drawArraysInstanced');
        else if (((h = e.get('ANGLE_instanced_arrays')), (p = 'drawArraysInstancedANGLE'), h === null)) {
            console.error('THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.');
            return;
        }
        h[p](s, l, u, f), t.update(u, s, f);
    }
    (this.setMode = a), (this.render = o), (this.renderInstances = c);
}
function Gd(r, e, t) {
    let n;
    function i() {
        if (n !== void 0) return n;
        if (e.has('EXT_texture_filter_anisotropic') === !0) {
            const P = e.get('EXT_texture_filter_anisotropic');
            n = r.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
        } else n = 0;
        return n;
    }
    function s(P) {
        if (P === 'highp') {
            if (r.getShaderPrecisionFormat(35633, 36338).precision > 0 && r.getShaderPrecisionFormat(35632, 36338).precision > 0) return 'highp';
            P = 'mediump';
        }
        return P === 'mediump' && r.getShaderPrecisionFormat(35633, 36337).precision > 0 && r.getShaderPrecisionFormat(35632, 36337).precision > 0 ? 'mediump' : 'lowp';
    }
    const a = typeof WebGL2RenderingContext < 'u' && r.constructor.name === 'WebGL2RenderingContext';
    let o = t.precision !== void 0 ? t.precision : 'highp';
    const c = s(o);
    c !== o && (console.warn('THREE.WebGLRenderer:', o, 'not supported, using', c, 'instead.'), (o = c));
    const l = a || e.has('WEBGL_draw_buffers'),
        u = t.logarithmicDepthBuffer === !0,
        f = r.getParameter(34930),
        h = r.getParameter(35660),
        p = r.getParameter(3379),
        g = r.getParameter(34076),
        _ = r.getParameter(34921),
        m = r.getParameter(36347),
        d = r.getParameter(36348),
        y = r.getParameter(36349),
        x = h > 0,
        v = a || e.has('OES_texture_float'),
        M = x && v,
        b = a ? r.getParameter(36183) : 0;
    return {
        isWebGL2: a,
        drawBuffers: l,
        getMaxAnisotropy: i,
        getMaxPrecision: s,
        precision: o,
        logarithmicDepthBuffer: u,
        maxTextures: f,
        maxVertexTextures: h,
        maxTextureSize: p,
        maxCubemapSize: g,
        maxAttributes: _,
        maxVertexUniforms: m,
        maxVaryings: d,
        maxFragmentUniforms: y,
        vertexTextures: x,
        floatFragmentTextures: v,
        floatVertexTextures: M,
        maxSamples: b,
    };
}
function Vd(r) {
    const e = this;
    let t = null,
        n = 0,
        i = !1,
        s = !1;
    const a = new an(),
        o = new Ue(),
        c = { value: null, needsUpdate: !1 };
    (this.uniform = c),
        (this.numPlanes = 0),
        (this.numIntersection = 0),
        (this.init = function (f, h) {
            const p = f.length !== 0 || h || n !== 0 || i;
            return (i = h), (n = f.length), p;
        }),
        (this.beginShadows = function () {
            (s = !0), u(null);
        }),
        (this.endShadows = function () {
            s = !1;
        }),
        (this.setGlobalState = function (f, h) {
            t = u(f, h, 0);
        }),
        (this.setState = function (f, h, p) {
            const g = f.clippingPlanes,
                _ = f.clipIntersection,
                m = f.clipShadows,
                d = r.get(f);
            if (!i || g === null || g.length === 0 || (s && !m)) s ? u(null) : l();
            else {
                const y = s ? 0 : n,
                    x = y * 4;
                let v = d.clippingState || null;
                (c.value = v), (v = u(g, h, x, p));
                for (let M = 0; M !== x; ++M) v[M] = t[M];
                (d.clippingState = v), (this.numIntersection = _ ? this.numPlanes : 0), (this.numPlanes += y);
            }
        });
    function l() {
        c.value !== t && ((c.value = t), (c.needsUpdate = n > 0)), (e.numPlanes = n), (e.numIntersection = 0);
    }
    function u(f, h, p, g) {
        const _ = f !== null ? f.length : 0;
        let m = null;
        if (_ !== 0) {
            if (((m = c.value), g !== !0 || m === null)) {
                const d = p + _ * 4,
                    y = h.matrixWorldInverse;
                o.getNormalMatrix(y), (m === null || m.length < d) && (m = new Float32Array(d));
                for (let x = 0, v = p; x !== _; ++x, v += 4) a.copy(f[x]).applyMatrix4(y, o), a.normal.toArray(m, v), (m[v + 3] = a.constant);
            }
            (c.value = m), (c.needsUpdate = !0);
        }
        return (e.numPlanes = _), (e.numIntersection = 0), m;
    }
}
function kd(r) {
    let e = new WeakMap();
    function t(a, o) {
        return o === eo ? (a.mapping = bi) : o === to && (a.mapping = wi), a;
    }
    function n(a) {
        if (a && a.isTexture && a.isRenderTargetTexture === !1) {
            const o = a.mapping;
            if (o === eo || o === to)
                if (e.has(a)) {
                    const c = e.get(a).texture;
                    return t(c, a.mapping);
                } else {
                    const c = a.image;
                    if (c && c.height > 0) {
                        const l = new rf(c.height / 2);
                        return l.fromEquirectangularTexture(r, a), e.set(a, l), a.addEventListener('dispose', i), t(l.texture, a.mapping);
                    } else return null;
                }
        }
        return a;
    }
    function i(a) {
        const o = a.target;
        o.removeEventListener('dispose', i);
        const c = e.get(o);
        c !== void 0 && (e.delete(o), c.dispose());
    }
    function s() {
        e = new WeakMap();
    }
    return { get: n, dispose: s };
}
class kl extends zl {
    constructor(e = -1, t = 1, n = 1, i = -1, s = 0.1, a = 2e3) {
        super(),
            (this.isOrthographicCamera = !0),
            (this.type = 'OrthographicCamera'),
            (this.zoom = 1),
            (this.view = null),
            (this.left = e),
            (this.right = t),
            (this.top = n),
            (this.bottom = i),
            (this.near = s),
            (this.far = a),
            this.updateProjectionMatrix();
    }
    copy(e, t) {
        return (
            super.copy(e, t),
            (this.left = e.left),
            (this.right = e.right),
            (this.top = e.top),
            (this.bottom = e.bottom),
            (this.near = e.near),
            (this.far = e.far),
            (this.zoom = e.zoom),
            (this.view = e.view === null ? null : Object.assign({}, e.view)),
            this
        );
    }
    setViewOffset(e, t, n, i, s, a) {
        this.view === null && (this.view = { enabled: !0, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }),
            (this.view.enabled = !0),
            (this.view.fullWidth = e),
            (this.view.fullHeight = t),
            (this.view.offsetX = n),
            (this.view.offsetY = i),
            (this.view.width = s),
            (this.view.height = a),
            this.updateProjectionMatrix();
    }
    clearViewOffset() {
        this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
    }
    updateProjectionMatrix() {
        const e = (this.right - this.left) / (2 * this.zoom),
            t = (this.top - this.bottom) / (2 * this.zoom),
            n = (this.right + this.left) / 2,
            i = (this.top + this.bottom) / 2;
        let s = n - e,
            a = n + e,
            o = i + t,
            c = i - t;
        if (this.view !== null && this.view.enabled) {
            const l = (this.right - this.left) / this.view.fullWidth / this.zoom,
                u = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
            (s += l * this.view.offsetX), (a = s + l * this.view.width), (o -= u * this.view.offsetY), (c = o - u * this.view.height);
        }
        this.projectionMatrix.makeOrthographic(s, a, o, c, this.near, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
    }
    toJSON(e) {
        const t = super.toJSON(e);
        return (
            (t.object.zoom = this.zoom),
            (t.object.left = this.left),
            (t.object.right = this.right),
            (t.object.top = this.top),
            (t.object.bottom = this.bottom),
            (t.object.near = this.near),
            (t.object.far = this.far),
            this.view !== null && (t.object.view = Object.assign({}, this.view)),
            t
        );
    }
}
const mi = 4,
    Ra = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582],
    In = 20,
    zs = new kl(),
    Da = new ze();
let Gs = null;
const Dn = (1 + Math.sqrt(5)) / 2,
    ai = 1 / Dn,
    Ia = [new R(1, 1, 1), new R(-1, 1, 1), new R(1, 1, -1), new R(-1, 1, -1), new R(0, Dn, ai), new R(0, Dn, -ai), new R(ai, 0, Dn), new R(-ai, 0, Dn), new R(Dn, ai, 0), new R(-Dn, ai, 0)];
class Ua {
    constructor(e) {
        (this._renderer = e),
            (this._pingPongRenderTarget = null),
            (this._lodMax = 0),
            (this._cubeSize = 0),
            (this._lodPlanes = []),
            (this._sizeLods = []),
            (this._sigmas = []),
            (this._blurMaterial = null),
            (this._cubemapMaterial = null),
            (this._equirectMaterial = null),
            this._compileMaterial(this._blurMaterial);
    }
    fromScene(e, t = 0, n = 0.1, i = 100) {
        (Gs = this._renderer.getRenderTarget()), this._setSize(256);
        const s = this._allocateTargets();
        return (s.depthBuffer = !0), this._sceneToCubeUV(e, n, i, s), t > 0 && this._blur(s, 0, 0, t), this._applyPMREM(s), this._cleanup(s), s;
    }
    fromEquirectangular(e, t = null) {
        return this._fromTexture(e, t);
    }
    fromCubemap(e, t = null) {
        return this._fromTexture(e, t);
    }
    compileCubemapShader() {
        this._cubemapMaterial === null && ((this._cubemapMaterial = Fa()), this._compileMaterial(this._cubemapMaterial));
    }
    compileEquirectangularShader() {
        this._equirectMaterial === null && ((this._equirectMaterial = Oa()), this._compileMaterial(this._equirectMaterial));
    }
    dispose() {
        this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose();
    }
    _setSize(e) {
        (this._lodMax = Math.floor(Math.log2(e))), (this._cubeSize = Math.pow(2, this._lodMax));
    }
    _dispose() {
        this._blurMaterial !== null && this._blurMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
        for (let e = 0; e < this._lodPlanes.length; e++) this._lodPlanes[e].dispose();
    }
    _cleanup(e) {
        this._renderer.setRenderTarget(Gs), (e.scissorTest = !1), Pr(e, 0, 0, e.width, e.height);
    }
    _fromTexture(e, t) {
        e.mapping === bi || e.mapping === wi ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4),
            (Gs = this._renderer.getRenderTarget());
        const n = t || this._allocateTargets();
        return this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n;
    }
    _allocateTargets() {
        const e = 3 * Math.max(this._cubeSize, 112),
            t = 4 * this._cubeSize,
            n = { magFilter: Pt, minFilter: Pt, generateMipmaps: !1, type: $i, format: Ft, encoding: Bn, depthBuffer: !1 },
            i = Na(e, t, n);
        if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) {
            this._pingPongRenderTarget !== null && this._dispose(), (this._pingPongRenderTarget = Na(e, t, n));
            const { _lodMax: s } = this;
            ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = Hd(s)), (this._blurMaterial = Wd(s, e, t));
        }
        return i;
    }
    _compileMaterial(e) {
        const t = new Et(this._lodPlanes[0], e);
        this._renderer.compile(t, zs);
    }
    _sceneToCubeUV(e, t, n, i) {
        const o = new Lt(90, 1, t, n),
            c = [1, -1, 1, 1, 1, 1],
            l = [1, 1, 1, -1, -1, -1],
            u = this._renderer,
            f = u.autoClear,
            h = u.toneMapping;
        u.getClearColor(Da), (u.toneMapping = ln), (u.autoClear = !1);
        const p = new yo({ name: 'PMREM.Background', side: ft, depthWrite: !1, depthTest: !1 }),
            g = new Et(new Ci(), p);
        let _ = !1;
        const m = e.background;
        m ? m.isColor && (p.color.copy(m), (e.background = null), (_ = !0)) : (p.color.copy(Da), (_ = !0));
        for (let d = 0; d < 6; d++) {
            const y = d % 3;
            y === 0 ? (o.up.set(0, c[d], 0), o.lookAt(l[d], 0, 0)) : y === 1 ? (o.up.set(0, 0, c[d]), o.lookAt(0, l[d], 0)) : (o.up.set(0, c[d], 0), o.lookAt(0, 0, l[d]));
            const x = this._cubeSize;
            Pr(i, y * x, d > 2 ? x : 0, x, x), u.setRenderTarget(i), _ && u.render(g, o), u.render(e, o);
        }
        g.geometry.dispose(), g.material.dispose(), (u.toneMapping = h), (u.autoClear = f), (e.background = m);
    }
    _textureToCubeUV(e, t) {
        const n = this._renderer,
            i = e.mapping === bi || e.mapping === wi;
        i
            ? (this._cubemapMaterial === null && (this._cubemapMaterial = Fa()), (this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1))
            : this._equirectMaterial === null && (this._equirectMaterial = Oa());
        const s = i ? this._cubemapMaterial : this._equirectMaterial,
            a = new Et(this._lodPlanes[0], s),
            o = s.uniforms;
        o.envMap.value = e;
        const c = this._cubeSize;
        Pr(t, 0, 0, 3 * c, 2 * c), n.setRenderTarget(t), n.render(a, zs);
    }
    _applyPMREM(e) {
        const t = this._renderer,
            n = t.autoClear;
        t.autoClear = !1;
        for (let i = 1; i < this._lodPlanes.length; i++) {
            const s = Math.sqrt(this._sigmas[i] * this._sigmas[i] - this._sigmas[i - 1] * this._sigmas[i - 1]),
                a = Ia[(i - 1) % Ia.length];
            this._blur(e, i - 1, i, s, a);
        }
        t.autoClear = n;
    }
    _blur(e, t, n, i, s) {
        const a = this._pingPongRenderTarget;
        this._halfBlur(e, a, t, n, i, 'latitudinal', s), this._halfBlur(a, e, n, n, i, 'longitudinal', s);
    }
    _halfBlur(e, t, n, i, s, a, o) {
        const c = this._renderer,
            l = this._blurMaterial;
        a !== 'latitudinal' && a !== 'longitudinal' && console.error('blur direction must be either latitudinal or longitudinal!');
        const u = 3,
            f = new Et(this._lodPlanes[i], l),
            h = l.uniforms,
            p = this._sizeLods[n] - 1,
            g = isFinite(s) ? Math.PI / (2 * p) : (2 * Math.PI) / (2 * In - 1),
            _ = s / g,
            m = isFinite(s) ? 1 + Math.floor(u * _) : In;
        m > In && console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${In}`);
        const d = [];
        let y = 0;
        for (let P = 0; P < In; ++P) {
            const A = P / _,
                S = Math.exp((-A * A) / 2);
            d.push(S), P === 0 ? (y += S) : P < m && (y += 2 * S);
        }
        for (let P = 0; P < d.length; P++) d[P] = d[P] / y;
        (h.envMap.value = e.texture), (h.samples.value = m), (h.weights.value = d), (h.latitudinal.value = a === 'latitudinal'), o && (h.poleAxis.value = o);
        const { _lodMax: x } = this;
        (h.dTheta.value = g), (h.mipInt.value = x - n);
        const v = this._sizeLods[i],
            M = 3 * v * (i > x - mi ? i - x + mi : 0),
            b = 4 * (this._cubeSize - v);
        Pr(t, M, b, 3 * v, 2 * v), c.setRenderTarget(t), c.render(f, zs);
    }
}
function Hd(r) {
    const e = [],
        t = [],
        n = [];
    let i = r;
    const s = r - mi + 1 + Ra.length;
    for (let a = 0; a < s; a++) {
        const o = Math.pow(2, i);
        t.push(o);
        let c = 1 / o;
        a > r - mi ? (c = Ra[a - r + mi - 1]) : a === 0 && (c = 0), n.push(c);
        const l = 1 / (o - 2),
            u = -l,
            f = 1 + l,
            h = [u, u, f, u, f, f, u, u, f, f, u, f],
            p = 6,
            g = 6,
            _ = 3,
            m = 2,
            d = 1,
            y = new Float32Array(_ * g * p),
            x = new Float32Array(m * g * p),
            v = new Float32Array(d * g * p);
        for (let b = 0; b < p; b++) {
            const P = ((b % 3) * 2) / 3 - 1,
                A = b > 2 ? 0 : -1,
                S = [P, A, 0, P + 2 / 3, A, 0, P + 2 / 3, A + 1, 0, P, A, 0, P + 2 / 3, A + 1, 0, P, A + 1, 0];
            y.set(S, _ * g * b), x.set(h, m * g * b);
            const E = [b, b, b, b, b, b];
            v.set(E, d * g * b);
        }
        const M = new hn();
        M.setAttribute('position', new Tt(y, _)), M.setAttribute('uv', new Tt(x, m)), M.setAttribute('faceIndex', new Tt(v, d)), e.push(M), i > mi && i--;
    }
    return { lodPlanes: e, sizeLods: t, sigmas: n };
}
function Na(r, e, t) {
    const n = new zn(r, e, t);
    return (n.texture.mapping = es), (n.texture.name = 'PMREM.cubeUv'), (n.scissorTest = !0), n;
}
function Pr(r, e, t, n, i) {
    r.viewport.set(e, t, n, i), r.scissor.set(e, t, n, i);
}
function Wd(r, e, t) {
    const n = new Float32Array(In),
        i = new R(0, 1, 0);
    return new bn({
        name: 'SphericalGaussianBlur',
        defines: { n: In, CUBEUV_TEXEL_WIDTH: 1 / e, CUBEUV_TEXEL_HEIGHT: 1 / t, CUBEUV_MAX_MIP: `${r}.0` },
        uniforms: { envMap: { value: null }, samples: { value: 1 }, weights: { value: n }, latitudinal: { value: !1 }, dTheta: { value: 0 }, mipInt: { value: 0 }, poleAxis: { value: i } },
        vertexShader: So(),
        fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,
        blending: yn,
        depthTest: !1,
        depthWrite: !1,
    });
}
function Oa() {
    return new bn({
        name: 'EquirectangularToCubeUV',
        uniforms: { envMap: { value: null } },
        vertexShader: So(),
        fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,
        blending: yn,
        depthTest: !1,
        depthWrite: !1,
    });
}
function Fa() {
    return new bn({
        name: 'CubemapToCubeUV',
        uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } },
        vertexShader: So(),
        fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,
        blending: yn,
        depthTest: !1,
        depthWrite: !1,
    });
}
function So() {
    return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`;
}
function qd(r) {
    let e = new WeakMap(),
        t = null;
    function n(o) {
        if (o && o.isTexture) {
            const c = o.mapping,
                l = c === eo || c === to,
                u = c === bi || c === wi;
            if (l || u)
                if (o.isRenderTargetTexture && o.needsPMREMUpdate === !0) {
                    o.needsPMREMUpdate = !1;
                    let f = e.get(o);
                    return t === null && (t = new Ua(r)), (f = l ? t.fromEquirectangular(o, f) : t.fromCubemap(o, f)), e.set(o, f), f.texture;
                } else {
                    if (e.has(o)) return e.get(o).texture;
                    {
                        const f = o.image;
                        if ((l && f && f.height > 0) || (u && f && i(f))) {
                            t === null && (t = new Ua(r));
                            const h = l ? t.fromEquirectangular(o) : t.fromCubemap(o);
                            return e.set(o, h), o.addEventListener('dispose', s), h.texture;
                        } else return null;
                    }
                }
        }
        return o;
    }
    function i(o) {
        let c = 0;
        const l = 6;
        for (let u = 0; u < l; u++) o[u] !== void 0 && c++;
        return c === l;
    }
    function s(o) {
        const c = o.target;
        c.removeEventListener('dispose', s);
        const l = e.get(c);
        l !== void 0 && (e.delete(c), l.dispose());
    }
    function a() {
        (e = new WeakMap()), t !== null && (t.dispose(), (t = null));
    }
    return { get: n, dispose: a };
}
function Xd(r) {
    const e = {};
    function t(n) {
        if (e[n] !== void 0) return e[n];
        let i;
        switch (n) {
            case 'WEBGL_depth_texture':
                i = r.getExtension('WEBGL_depth_texture') || r.getExtension('MOZ_WEBGL_depth_texture') || r.getExtension('WEBKIT_WEBGL_depth_texture');
                break;
            case 'EXT_texture_filter_anisotropic':
                i = r.getExtension('EXT_texture_filter_anisotropic') || r.getExtension('MOZ_EXT_texture_filter_anisotropic') || r.getExtension('WEBKIT_EXT_texture_filter_anisotropic');
                break;
            case 'WEBGL_compressed_texture_s3tc':
                i = r.getExtension('WEBGL_compressed_texture_s3tc') || r.getExtension('MOZ_WEBGL_compressed_texture_s3tc') || r.getExtension('WEBKIT_WEBGL_compressed_texture_s3tc');
                break;
            case 'WEBGL_compressed_texture_pvrtc':
                i = r.getExtension('WEBGL_compressed_texture_pvrtc') || r.getExtension('WEBKIT_WEBGL_compressed_texture_pvrtc');
                break;
            default:
                i = r.getExtension(n);
        }
        return (e[n] = i), i;
    }
    return {
        has: function (n) {
            return t(n) !== null;
        },
        init: function (n) {
            n.isWebGL2
                ? t('EXT_color_buffer_float')
                : (t('WEBGL_depth_texture'),
                  t('OES_texture_float'),
                  t('OES_texture_half_float'),
                  t('OES_texture_half_float_linear'),
                  t('OES_standard_derivatives'),
                  t('OES_element_index_uint'),
                  t('OES_vertex_array_object'),
                  t('ANGLE_instanced_arrays')),
                t('OES_texture_float_linear'),
                t('EXT_color_buffer_half_float'),
                t('WEBGL_multisampled_render_to_texture');
        },
        get: function (n) {
            const i = t(n);
            return i === null && console.warn('THREE.WebGLRenderer: ' + n + ' extension not supported.'), i;
        },
    };
}
function jd(r, e, t, n) {
    const i = {},
        s = new WeakMap();
    function a(f) {
        const h = f.target;
        h.index !== null && e.remove(h.index);
        for (const g in h.attributes) e.remove(h.attributes[g]);
        h.removeEventListener('dispose', a), delete i[h.id];
        const p = s.get(h);
        p && (e.remove(p), s.delete(h)), n.releaseStatesOfGeometry(h), h.isInstancedBufferGeometry === !0 && delete h._maxInstanceCount, t.memory.geometries--;
    }
    function o(f, h) {
        return i[h.id] === !0 || (h.addEventListener('dispose', a), (i[h.id] = !0), t.memory.geometries++), h;
    }
    function c(f) {
        const h = f.attributes;
        for (const g in h) e.update(h[g], 34962);
        const p = f.morphAttributes;
        for (const g in p) {
            const _ = p[g];
            for (let m = 0, d = _.length; m < d; m++) e.update(_[m], 34962);
        }
    }
    function l(f) {
        const h = [],
            p = f.index,
            g = f.attributes.position;
        let _ = 0;
        if (p !== null) {
            const y = p.array;
            _ = p.version;
            for (let x = 0, v = y.length; x < v; x += 3) {
                const M = y[x + 0],
                    b = y[x + 1],
                    P = y[x + 2];
                h.push(M, b, b, P, P, M);
            }
        } else {
            const y = g.array;
            _ = g.version;
            for (let x = 0, v = y.length / 3 - 1; x < v; x += 3) {
                const M = x + 0,
                    b = x + 1,
                    P = x + 2;
                h.push(M, b, b, P, P, M);
            }
        }
        const m = new (Ll(h) ? Ol : Nl)(h, 1);
        m.version = _;
        const d = s.get(f);
        d && e.remove(d), s.set(f, m);
    }
    function u(f) {
        const h = s.get(f);
        if (h) {
            const p = f.index;
            p !== null && h.version < p.version && l(f);
        } else l(f);
        return s.get(f);
    }
    return { get: o, update: c, getWireframeAttribute: u };
}
function Yd(r, e, t, n) {
    const i = n.isWebGL2;
    let s;
    function a(h) {
        s = h;
    }
    let o, c;
    function l(h) {
        (o = h.type), (c = h.bytesPerElement);
    }
    function u(h, p) {
        r.drawElements(s, p, o, h * c), t.update(p, s, 1);
    }
    function f(h, p, g) {
        if (g === 0) return;
        let _, m;
        if (i) (_ = r), (m = 'drawElementsInstanced');
        else if (((_ = e.get('ANGLE_instanced_arrays')), (m = 'drawElementsInstancedANGLE'), _ === null)) {
            console.error('THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.');
            return;
        }
        _[m](s, p, o, h * c, g), t.update(p, s, g);
    }
    (this.setMode = a), (this.setIndex = l), (this.render = u), (this.renderInstances = f);
}
function Kd(r) {
    const e = { geometries: 0, textures: 0 },
        t = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
    function n(s, a, o) {
        switch ((t.calls++, a)) {
            case 4:
                t.triangles += o * (s / 3);
                break;
            case 1:
                t.lines += o * (s / 2);
                break;
            case 3:
                t.lines += o * (s - 1);
                break;
            case 2:
                t.lines += o * s;
                break;
            case 0:
                t.points += o * s;
                break;
            default:
                console.error('THREE.WebGLInfo: Unknown draw mode:', a);
                break;
        }
    }
    function i() {
        t.frame++, (t.calls = 0), (t.triangles = 0), (t.points = 0), (t.lines = 0);
    }
    return { memory: e, render: t, programs: null, autoReset: !0, reset: i, update: n };
}
function Zd(r, e) {
    return r[0] - e[0];
}
function $d(r, e) {
    return Math.abs(e[1]) - Math.abs(r[1]);
}
function Jd(r, e, t) {
    const n = {},
        i = new Float32Array(8),
        s = new WeakMap(),
        a = new it(),
        o = [];
    for (let l = 0; l < 8; l++) o[l] = [l, 0];
    function c(l, u, f) {
        const h = l.morphTargetInfluences;
        if (e.isWebGL2 === !0) {
            const p = u.morphAttributes.position || u.morphAttributes.normal || u.morphAttributes.color,
                g = p !== void 0 ? p.length : 0;
            let _ = s.get(u);
            if (_ === void 0 || _.count !== g) {
                let U = function () {
                    O.dispose(), s.delete(u), u.removeEventListener('dispose', U);
                };
                _ !== void 0 && _.texture.dispose();
                const y = u.morphAttributes.position !== void 0,
                    x = u.morphAttributes.normal !== void 0,
                    v = u.morphAttributes.color !== void 0,
                    M = u.morphAttributes.position || [],
                    b = u.morphAttributes.normal || [],
                    P = u.morphAttributes.color || [];
                let A = 0;
                y === !0 && (A = 1), x === !0 && (A = 2), v === !0 && (A = 3);
                let S = u.attributes.position.count * A,
                    E = 1;
                S > e.maxTextureSize && ((E = Math.ceil(S / e.maxTextureSize)), (S = e.maxTextureSize));
                const N = new Float32Array(S * E * 4 * g),
                    O = new Il(N, S, E, g);
                (O.type = Nn), (O.needsUpdate = !0);
                const D = A * 4;
                for (let B = 0; B < g; B++) {
                    const $ = M[B],
                        Y = b[B],
                        k = P[B],
                        K = S * E * 4 * B;
                    for (let ne = 0; ne < $.count; ne++) {
                        const _e = ne * D;
                        y === !0 && (a.fromBufferAttribute($, ne), (N[K + _e + 0] = a.x), (N[K + _e + 1] = a.y), (N[K + _e + 2] = a.z), (N[K + _e + 3] = 0)),
                            x === !0 && (a.fromBufferAttribute(Y, ne), (N[K + _e + 4] = a.x), (N[K + _e + 5] = a.y), (N[K + _e + 6] = a.z), (N[K + _e + 7] = 0)),
                            v === !0 && (a.fromBufferAttribute(k, ne), (N[K + _e + 8] = a.x), (N[K + _e + 9] = a.y), (N[K + _e + 10] = a.z), (N[K + _e + 11] = k.itemSize === 4 ? a.w : 1));
                    }
                }
                (_ = { count: g, texture: O, size: new be(S, E) }), s.set(u, _), u.addEventListener('dispose', U);
            }
            let m = 0;
            for (let y = 0; y < h.length; y++) m += h[y];
            const d = u.morphTargetsRelative ? 1 : 1 - m;
            f.getUniforms().setValue(r, 'morphTargetBaseInfluence', d),
                f.getUniforms().setValue(r, 'morphTargetInfluences', h),
                f.getUniforms().setValue(r, 'morphTargetsTexture', _.texture, t),
                f.getUniforms().setValue(r, 'morphTargetsTextureSize', _.size);
        } else {
            const p = h === void 0 ? 0 : h.length;
            let g = n[u.id];
            if (g === void 0 || g.length !== p) {
                g = [];
                for (let x = 0; x < p; x++) g[x] = [x, 0];
                n[u.id] = g;
            }
            for (let x = 0; x < p; x++) {
                const v = g[x];
                (v[0] = x), (v[1] = h[x]);
            }
            g.sort($d);
            for (let x = 0; x < 8; x++) x < p && g[x][1] ? ((o[x][0] = g[x][0]), (o[x][1] = g[x][1])) : ((o[x][0] = Number.MAX_SAFE_INTEGER), (o[x][1] = 0));
            o.sort(Zd);
            const _ = u.morphAttributes.position,
                m = u.morphAttributes.normal;
            let d = 0;
            for (let x = 0; x < 8; x++) {
                const v = o[x],
                    M = v[0],
                    b = v[1];
                M !== Number.MAX_SAFE_INTEGER && b
                    ? (_ && u.getAttribute('morphTarget' + x) !== _[M] && u.setAttribute('morphTarget' + x, _[M]),
                      m && u.getAttribute('morphNormal' + x) !== m[M] && u.setAttribute('morphNormal' + x, m[M]),
                      (i[x] = b),
                      (d += b))
                    : (_ && u.hasAttribute('morphTarget' + x) === !0 && u.deleteAttribute('morphTarget' + x),
                      m && u.hasAttribute('morphNormal' + x) === !0 && u.deleteAttribute('morphNormal' + x),
                      (i[x] = 0));
            }
            const y = u.morphTargetsRelative ? 1 : 1 - d;
            f.getUniforms().setValue(r, 'morphTargetBaseInfluence', y), f.getUniforms().setValue(r, 'morphTargetInfluences', i);
        }
    }
    return { update: c };
}
function Qd(r, e, t, n) {
    let i = new WeakMap();
    function s(c) {
        const l = n.render.frame,
            u = c.geometry,
            f = e.get(c, u);
        return (
            i.get(f) !== l && (e.update(f), i.set(f, l)),
            c.isInstancedMesh &&
                (c.hasEventListener('dispose', o) === !1 && c.addEventListener('dispose', o), t.update(c.instanceMatrix, 34962), c.instanceColor !== null && t.update(c.instanceColor, 34962)),
            f
        );
    }
    function a() {
        i = new WeakMap();
    }
    function o(c) {
        const l = c.target;
        l.removeEventListener('dispose', o), t.remove(l.instanceMatrix), l.instanceColor !== null && t.remove(l.instanceColor);
    }
    return { update: s, dispose: a };
}
const Hl = new vt(),
    Wl = new Il(),
    ql = new ku(),
    Xl = new Gl(),
    Ba = [],
    za = [],
    Ga = new Float32Array(16),
    Va = new Float32Array(9),
    ka = new Float32Array(4);
function Pi(r, e, t) {
    const n = r[0];
    if (n <= 0 || n > 0) return r;
    const i = e * t;
    let s = Ba[i];
    if ((s === void 0 && ((s = new Float32Array(i)), (Ba[i] = s)), e !== 0)) {
        n.toArray(s, 0);
        for (let a = 1, o = 0; a !== e; ++a) (o += t), r[a].toArray(s, o);
    }
    return s;
}
function Qe(r, e) {
    if (r.length !== e.length) return !1;
    for (let t = 0, n = r.length; t < n; t++) if (r[t] !== e[t]) return !1;
    return !0;
}
function et(r, e) {
    for (let t = 0, n = e.length; t < n; t++) r[t] = e[t];
}
function ss(r, e) {
    let t = za[e];
    t === void 0 && ((t = new Int32Array(e)), (za[e] = t));
    for (let n = 0; n !== e; ++n) t[n] = r.allocateTextureUnit();
    return t;
}
function ep(r, e) {
    const t = this.cache;
    t[0] !== e && (r.uniform1f(this.addr, e), (t[0] = e));
}
function tp(r, e) {
    const t = this.cache;
    if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y) && (r.uniform2f(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
    else {
        if (Qe(t, e)) return;
        r.uniform2fv(this.addr, e), et(t, e);
    }
}
function np(r, e) {
    const t = this.cache;
    if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (r.uniform3f(this.addr, e.x, e.y, e.z), (t[0] = e.x), (t[1] = e.y), (t[2] = e.z));
    else if (e.r !== void 0) (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (r.uniform3f(this.addr, e.r, e.g, e.b), (t[0] = e.r), (t[1] = e.g), (t[2] = e.b));
    else {
        if (Qe(t, e)) return;
        r.uniform3fv(this.addr, e), et(t, e);
    }
}
function ip(r, e) {
    const t = this.cache;
    if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (r.uniform4f(this.addr, e.x, e.y, e.z, e.w), (t[0] = e.x), (t[1] = e.y), (t[2] = e.z), (t[3] = e.w));
    else {
        if (Qe(t, e)) return;
        r.uniform4fv(this.addr, e), et(t, e);
    }
}
function rp(r, e) {
    const t = this.cache,
        n = e.elements;
    if (n === void 0) {
        if (Qe(t, e)) return;
        r.uniformMatrix2fv(this.addr, !1, e), et(t, e);
    } else {
        if (Qe(t, n)) return;
        ka.set(n), r.uniformMatrix2fv(this.addr, !1, ka), et(t, n);
    }
}
function sp(r, e) {
    const t = this.cache,
        n = e.elements;
    if (n === void 0) {
        if (Qe(t, e)) return;
        r.uniformMatrix3fv(this.addr, !1, e), et(t, e);
    } else {
        if (Qe(t, n)) return;
        Va.set(n), r.uniformMatrix3fv(this.addr, !1, Va), et(t, n);
    }
}
function op(r, e) {
    const t = this.cache,
        n = e.elements;
    if (n === void 0) {
        if (Qe(t, e)) return;
        r.uniformMatrix4fv(this.addr, !1, e), et(t, e);
    } else {
        if (Qe(t, n)) return;
        Ga.set(n), r.uniformMatrix4fv(this.addr, !1, Ga), et(t, n);
    }
}
function ap(r, e) {
    const t = this.cache;
    t[0] !== e && (r.uniform1i(this.addr, e), (t[0] = e));
}
function lp(r, e) {
    const t = this.cache;
    if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y) && (r.uniform2i(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
    else {
        if (Qe(t, e)) return;
        r.uniform2iv(this.addr, e), et(t, e);
    }
}
function cp(r, e) {
    const t = this.cache;
    if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (r.uniform3i(this.addr, e.x, e.y, e.z), (t[0] = e.x), (t[1] = e.y), (t[2] = e.z));
    else {
        if (Qe(t, e)) return;
        r.uniform3iv(this.addr, e), et(t, e);
    }
}
function up(r, e) {
    const t = this.cache;
    if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (r.uniform4i(this.addr, e.x, e.y, e.z, e.w), (t[0] = e.x), (t[1] = e.y), (t[2] = e.z), (t[3] = e.w));
    else {
        if (Qe(t, e)) return;
        r.uniform4iv(this.addr, e), et(t, e);
    }
}
function fp(r, e) {
    const t = this.cache;
    t[0] !== e && (r.uniform1ui(this.addr, e), (t[0] = e));
}
function hp(r, e) {
    const t = this.cache;
    if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y) && (r.uniform2ui(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
    else {
        if (Qe(t, e)) return;
        r.uniform2uiv(this.addr, e), et(t, e);
    }
}
function dp(r, e) {
    const t = this.cache;
    if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (r.uniform3ui(this.addr, e.x, e.y, e.z), (t[0] = e.x), (t[1] = e.y), (t[2] = e.z));
    else {
        if (Qe(t, e)) return;
        r.uniform3uiv(this.addr, e), et(t, e);
    }
}
function pp(r, e) {
    const t = this.cache;
    if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (r.uniform4ui(this.addr, e.x, e.y, e.z, e.w), (t[0] = e.x), (t[1] = e.y), (t[2] = e.z), (t[3] = e.w));
    else {
        if (Qe(t, e)) return;
        r.uniform4uiv(this.addr, e), et(t, e);
    }
}
function mp(r, e, t) {
    const n = this.cache,
        i = t.allocateTextureUnit();
    n[0] !== i && (r.uniform1i(this.addr, i), (n[0] = i)), t.setTexture2D(e || Hl, i);
}
function gp(r, e, t) {
    const n = this.cache,
        i = t.allocateTextureUnit();
    n[0] !== i && (r.uniform1i(this.addr, i), (n[0] = i)), t.setTexture3D(e || ql, i);
}
function _p(r, e, t) {
    const n = this.cache,
        i = t.allocateTextureUnit();
    n[0] !== i && (r.uniform1i(this.addr, i), (n[0] = i)), t.setTextureCube(e || Xl, i);
}
function xp(r, e, t) {
    const n = this.cache,
        i = t.allocateTextureUnit();
    n[0] !== i && (r.uniform1i(this.addr, i), (n[0] = i)), t.setTexture2DArray(e || Wl, i);
}
function vp(r) {
    switch (r) {
        case 5126:
            return ep;
        case 35664:
            return tp;
        case 35665:
            return np;
        case 35666:
            return ip;
        case 35674:
            return rp;
        case 35675:
            return sp;
        case 35676:
            return op;
        case 5124:
        case 35670:
            return ap;
        case 35667:
        case 35671:
            return lp;
        case 35668:
        case 35672:
            return cp;
        case 35669:
        case 35673:
            return up;
        case 5125:
            return fp;
        case 36294:
            return hp;
        case 36295:
            return dp;
        case 36296:
            return pp;
        case 35678:
        case 36198:
        case 36298:
        case 36306:
        case 35682:
            return mp;
        case 35679:
        case 36299:
        case 36307:
            return gp;
        case 35680:
        case 36300:
        case 36308:
        case 36293:
            return _p;
        case 36289:
        case 36303:
        case 36311:
        case 36292:
            return xp;
    }
}
function yp(r, e) {
    r.uniform1fv(this.addr, e);
}
function Mp(r, e) {
    const t = Pi(e, this.size, 2);
    r.uniform2fv(this.addr, t);
}
function Sp(r, e) {
    const t = Pi(e, this.size, 3);
    r.uniform3fv(this.addr, t);
}
function bp(r, e) {
    const t = Pi(e, this.size, 4);
    r.uniform4fv(this.addr, t);
}
function wp(r, e) {
    const t = Pi(e, this.size, 4);
    r.uniformMatrix2fv(this.addr, !1, t);
}
function Ep(r, e) {
    const t = Pi(e, this.size, 9);
    r.uniformMatrix3fv(this.addr, !1, t);
}
function Tp(r, e) {
    const t = Pi(e, this.size, 16);
    r.uniformMatrix4fv(this.addr, !1, t);
}
function Ap(r, e) {
    r.uniform1iv(this.addr, e);
}
function Cp(r, e) {
    r.uniform2iv(this.addr, e);
}
function Pp(r, e) {
    r.uniform3iv(this.addr, e);
}
function Lp(r, e) {
    r.uniform4iv(this.addr, e);
}
function Rp(r, e) {
    r.uniform1uiv(this.addr, e);
}
function Dp(r, e) {
    r.uniform2uiv(this.addr, e);
}
function Ip(r, e) {
    r.uniform3uiv(this.addr, e);
}
function Up(r, e) {
    r.uniform4uiv(this.addr, e);
}
function Np(r, e, t) {
    const n = this.cache,
        i = e.length,
        s = ss(t, i);
    Qe(n, s) || (r.uniform1iv(this.addr, s), et(n, s));
    for (let a = 0; a !== i; ++a) t.setTexture2D(e[a] || Hl, s[a]);
}
function Op(r, e, t) {
    const n = this.cache,
        i = e.length,
        s = ss(t, i);
    Qe(n, s) || (r.uniform1iv(this.addr, s), et(n, s));
    for (let a = 0; a !== i; ++a) t.setTexture3D(e[a] || ql, s[a]);
}
function Fp(r, e, t) {
    const n = this.cache,
        i = e.length,
        s = ss(t, i);
    Qe(n, s) || (r.uniform1iv(this.addr, s), et(n, s));
    for (let a = 0; a !== i; ++a) t.setTextureCube(e[a] || Xl, s[a]);
}
function Bp(r, e, t) {
    const n = this.cache,
        i = e.length,
        s = ss(t, i);
    Qe(n, s) || (r.uniform1iv(this.addr, s), et(n, s));
    for (let a = 0; a !== i; ++a) t.setTexture2DArray(e[a] || Wl, s[a]);
}
function zp(r) {
    switch (r) {
        case 5126:
            return yp;
        case 35664:
            return Mp;
        case 35665:
            return Sp;
        case 35666:
            return bp;
        case 35674:
            return wp;
        case 35675:
            return Ep;
        case 35676:
            return Tp;
        case 5124:
        case 35670:
            return Ap;
        case 35667:
        case 35671:
            return Cp;
        case 35668:
        case 35672:
            return Pp;
        case 35669:
        case 35673:
            return Lp;
        case 5125:
            return Rp;
        case 36294:
            return Dp;
        case 36295:
            return Ip;
        case 36296:
            return Up;
        case 35678:
        case 36198:
        case 36298:
        case 36306:
        case 35682:
            return Np;
        case 35679:
        case 36299:
        case 36307:
            return Op;
        case 35680:
        case 36300:
        case 36308:
        case 36293:
            return Fp;
        case 36289:
        case 36303:
        case 36311:
        case 36292:
            return Bp;
    }
}
class Gp {
    constructor(e, t, n) {
        (this.id = e), (this.addr = n), (this.cache = []), (this.setValue = vp(t.type));
    }
}
class Vp {
    constructor(e, t, n) {
        (this.id = e), (this.addr = n), (this.cache = []), (this.size = t.size), (this.setValue = zp(t.type));
    }
}
class kp {
    constructor(e) {
        (this.id = e), (this.seq = []), (this.map = {});
    }
    setValue(e, t, n) {
        const i = this.seq;
        for (let s = 0, a = i.length; s !== a; ++s) {
            const o = i[s];
            o.setValue(e, t[o.id], n);
        }
    }
}
const Vs = /(\w+)(\])?(\[|\.)?/g;
function Ha(r, e) {
    r.seq.push(e), (r.map[e.id] = e);
}
function Hp(r, e, t) {
    const n = r.name,
        i = n.length;
    for (Vs.lastIndex = 0; ; ) {
        const s = Vs.exec(n),
            a = Vs.lastIndex;
        let o = s[1];
        const c = s[2] === ']',
            l = s[3];
        if ((c && (o = o | 0), l === void 0 || (l === '[' && a + 2 === i))) {
            Ha(t, l === void 0 ? new Gp(o, r, e) : new Vp(o, r, e));
            break;
        } else {
            let f = t.map[o];
            f === void 0 && ((f = new kp(o)), Ha(t, f)), (t = f);
        }
    }
}
class kr {
    constructor(e, t) {
        (this.seq = []), (this.map = {});
        const n = e.getProgramParameter(t, 35718);
        for (let i = 0; i < n; ++i) {
            const s = e.getActiveUniform(t, i),
                a = e.getUniformLocation(t, s.name);
            Hp(s, a, this);
        }
    }
    setValue(e, t, n, i) {
        const s = this.map[t];
        s !== void 0 && s.setValue(e, n, i);
    }
    setOptional(e, t, n) {
        const i = t[n];
        i !== void 0 && this.setValue(e, n, i);
    }
    static upload(e, t, n, i) {
        for (let s = 0, a = t.length; s !== a; ++s) {
            const o = t[s],
                c = n[o.id];
            c.needsUpdate !== !1 && o.setValue(e, c.value, i);
        }
    }
    static seqWithValue(e, t) {
        const n = [];
        for (let i = 0, s = e.length; i !== s; ++i) {
            const a = e[i];
            a.id in t && n.push(a);
        }
        return n;
    }
}
function Wa(r, e, t) {
    const n = r.createShader(e);
    return r.shaderSource(n, t), r.compileShader(n), n;
}
let Wp = 0;
function qp(r, e) {
    const t = r.split(`
`),
        n = [],
        i = Math.max(e - 6, 0),
        s = Math.min(e + 6, t.length);
    for (let a = i; a < s; a++) {
        const o = a + 1;
        n.push(`${o === e ? '>' : ' '} ${o}: ${t[a]}`);
    }
    return n.join(`
`);
}
function Xp(r) {
    switch (r) {
        case Bn:
            return ['Linear', '( value )'];
        case ke:
            return ['sRGB', '( value )'];
        default:
            return console.warn('THREE.WebGLProgram: Unsupported encoding:', r), ['Linear', '( value )'];
    }
}
function qa(r, e, t) {
    const n = r.getShaderParameter(e, 35713),
        i = r.getShaderInfoLog(e).trim();
    if (n && i === '') return '';
    const s = /ERROR: 0:(\d+)/.exec(i);
    if (s) {
        const a = parseInt(s[1]);
        return (
            t.toUpperCase() +
            `

` +
            i +
            `

` +
            qp(r.getShaderSource(e), a)
        );
    } else return i;
}
function jp(r, e) {
    const t = Xp(e);
    return 'vec4 ' + r + '( vec4 value ) { return LinearTo' + t[0] + t[1] + '; }';
}
function Yp(r, e) {
    let t;
    switch (e) {
        case Zc:
            t = 'Linear';
            break;
        case $c:
            t = 'Reinhard';
            break;
        case Jc:
            t = 'OptimizedCineon';
            break;
        case Qc:
            t = 'ACESFilmic';
            break;
        case eu:
            t = 'Custom';
            break;
        default:
            console.warn('THREE.WebGLProgram: Unsupported toneMapping:', e), (t = 'Linear');
    }
    return 'vec3 ' + r + '( vec3 color ) { return ' + t + 'ToneMapping( color ); }';
}
function Kp(r) {
    return [
        r.extensionDerivatives || r.envMapCubeUVHeight || r.bumpMap || r.normalMapTangentSpace || r.clearcoatNormalMap || r.flatShading || r.shaderID === 'physical'
            ? '#extension GL_OES_standard_derivatives : enable'
            : '',
        (r.extensionFragDepth || r.logarithmicDepthBuffer) && r.rendererExtensionFragDepth ? '#extension GL_EXT_frag_depth : enable' : '',
        r.extensionDrawBuffers && r.rendererExtensionDrawBuffers ? '#extension GL_EXT_draw_buffers : require' : '',
        (r.extensionShaderTextureLOD || r.envMap || r.transmission) && r.rendererExtensionShaderTextureLod ? '#extension GL_EXT_shader_texture_lod : enable' : '',
    ].filter(Wi).join(`
`);
}
function Zp(r) {
    const e = [];
    for (const t in r) {
        const n = r[t];
        n !== !1 && e.push('#define ' + t + ' ' + n);
    }
    return e.join(`
`);
}
function $p(r, e) {
    const t = {},
        n = r.getProgramParameter(e, 35721);
    for (let i = 0; i < n; i++) {
        const s = r.getActiveAttrib(e, i),
            a = s.name;
        let o = 1;
        s.type === 35674 && (o = 2), s.type === 35675 && (o = 3), s.type === 35676 && (o = 4), (t[a] = { type: s.type, location: r.getAttribLocation(e, a), locationSize: o });
    }
    return t;
}
function Wi(r) {
    return r !== '';
}
function Xa(r, e) {
    const t = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
    return r
        .replace(/NUM_DIR_LIGHTS/g, e.numDirLights)
        .replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights)
        .replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps)
        .replace(/NUM_SPOT_LIGHT_COORDS/g, t)
        .replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights)
        .replace(/NUM_POINT_LIGHTS/g, e.numPointLights)
        .replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights)
        .replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows)
        .replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps)
        .replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows)
        .replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function ja(r, e) {
    return r.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
}
const Jp = /^[ \t]*#include +<([\w\d./]+)>/gm;
function oo(r) {
    return r.replace(Jp, Qp);
}
function Qp(r, e) {
    const t = Pe[e];
    if (t === void 0) throw new Error('Can not resolve #include <' + e + '>');
    return oo(t);
}
const em = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function Ya(r) {
    return r.replace(em, tm);
}
function tm(r, e, t, n) {
    let i = '';
    for (let s = parseInt(e); s < parseInt(t); s++) i += n.replace(/\[\s*i\s*\]/g, '[ ' + s + ' ]').replace(/UNROLLED_LOOP_INDEX/g, s);
    return i;
}
function Ka(r) {
    let e =
        'precision ' +
        r.precision +
        ` float;
precision ` +
        r.precision +
        ' int;';
    return (
        r.precision === 'highp'
            ? (e += `
#define HIGH_PRECISION`)
            : r.precision === 'mediump'
            ? (e += `
#define MEDIUM_PRECISION`)
            : r.precision === 'lowp' &&
              (e += `
#define LOW_PRECISION`),
        e
    );
}
function nm(r) {
    let e = 'SHADOWMAP_TYPE_BASIC';
    return r.shadowMapType === Sl ? (e = 'SHADOWMAP_TYPE_PCF') : r.shadowMapType === Cc ? (e = 'SHADOWMAP_TYPE_PCF_SOFT') : r.shadowMapType === ki && (e = 'SHADOWMAP_TYPE_VSM'), e;
}
function im(r) {
    let e = 'ENVMAP_TYPE_CUBE';
    if (r.envMap)
        switch (r.envMapMode) {
            case bi:
            case wi:
                e = 'ENVMAP_TYPE_CUBE';
                break;
            case es:
                e = 'ENVMAP_TYPE_CUBE_UV';
                break;
        }
    return e;
}
function rm(r) {
    let e = 'ENVMAP_MODE_REFLECTION';
    if (r.envMap)
        switch (r.envMapMode) {
            case wi:
                e = 'ENVMAP_MODE_REFRACTION';
                break;
        }
    return e;
}
function sm(r) {
    let e = 'ENVMAP_BLENDING_NONE';
    if (r.envMap)
        switch (r.combine) {
            case go:
                e = 'ENVMAP_BLENDING_MULTIPLY';
                break;
            case Yc:
                e = 'ENVMAP_BLENDING_MIX';
                break;
            case Kc:
                e = 'ENVMAP_BLENDING_ADD';
                break;
        }
    return e;
}
function om(r) {
    const e = r.envMapCubeUVHeight;
    if (e === null) return null;
    const t = Math.log2(e) - 2,
        n = 1 / e;
    return { texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 7 * 16)), texelHeight: n, maxMip: t };
}
function am(r, e, t, n) {
    const i = r.getContext(),
        s = t.defines;
    let a = t.vertexShader,
        o = t.fragmentShader;
    const c = nm(t),
        l = im(t),
        u = rm(t),
        f = sm(t),
        h = om(t),
        p = t.isWebGL2 ? '' : Kp(t),
        g = Zp(s),
        _ = i.createProgram();
    let m,
        d,
        y = t.glslVersion
            ? '#version ' +
              t.glslVersion +
              `
`
            : '';
    t.isRawShaderMaterial
        ? ((m = [g].filter(Wi).join(`
`)),
          m.length > 0 &&
              (m += `
`),
          (d = [p, g].filter(Wi).join(`
`)),
          d.length > 0 &&
              (d += `
`))
        : ((m = [
              Ka(t),
              '#define SHADER_NAME ' + t.shaderName,
              g,
              t.instancing ? '#define USE_INSTANCING' : '',
              t.instancingColor ? '#define USE_INSTANCING_COLOR' : '',
              t.useFog && t.fog ? '#define USE_FOG' : '',
              t.useFog && t.fogExp2 ? '#define FOG_EXP2' : '',
              t.map ? '#define USE_MAP' : '',
              t.envMap ? '#define USE_ENVMAP' : '',
              t.envMap ? '#define ' + u : '',
              t.lightMap ? '#define USE_LIGHTMAP' : '',
              t.aoMap ? '#define USE_AOMAP' : '',
              t.bumpMap ? '#define USE_BUMPMAP' : '',
              t.normalMap ? '#define USE_NORMALMAP' : '',
              t.normalMapObjectSpace ? '#define USE_NORMALMAP_OBJECTSPACE' : '',
              t.normalMapTangentSpace ? '#define USE_NORMALMAP_TANGENTSPACE' : '',
              t.displacementMap ? '#define USE_DISPLACEMENTMAP' : '',
              t.emissiveMap ? '#define USE_EMISSIVEMAP' : '',
              t.clearcoatMap ? '#define USE_CLEARCOATMAP' : '',
              t.clearcoatRoughnessMap ? '#define USE_CLEARCOAT_ROUGHNESSMAP' : '',
              t.clearcoatNormalMap ? '#define USE_CLEARCOAT_NORMALMAP' : '',
              t.iridescenceMap ? '#define USE_IRIDESCENCEMAP' : '',
              t.iridescenceThicknessMap ? '#define USE_IRIDESCENCE_THICKNESSMAP' : '',
              t.specularMap ? '#define USE_SPECULARMAP' : '',
              t.specularColorMap ? '#define USE_SPECULAR_COLORMAP' : '',
              t.specularIntensityMap ? '#define USE_SPECULAR_INTENSITYMAP' : '',
              t.roughnessMap ? '#define USE_ROUGHNESSMAP' : '',
              t.metalnessMap ? '#define USE_METALNESSMAP' : '',
              t.alphaMap ? '#define USE_ALPHAMAP' : '',
              t.transmission ? '#define USE_TRANSMISSION' : '',
              t.transmissionMap ? '#define USE_TRANSMISSIONMAP' : '',
              t.thicknessMap ? '#define USE_THICKNESSMAP' : '',
              t.sheenColorMap ? '#define USE_SHEEN_COLORMAP' : '',
              t.sheenRoughnessMap ? '#define USE_SHEEN_ROUGHNESSMAP' : '',
              t.mapUv ? '#define MAP_UV ' + t.mapUv : '',
              t.alphaMapUv ? '#define ALPHAMAP_UV ' + t.alphaMapUv : '',
              t.lightMapUv ? '#define LIGHTMAP_UV ' + t.lightMapUv : '',
              t.aoMapUv ? '#define AOMAP_UV ' + t.aoMapUv : '',
              t.emissiveMapUv ? '#define EMISSIVEMAP_UV ' + t.emissiveMapUv : '',
              t.bumpMapUv ? '#define BUMPMAP_UV ' + t.bumpMapUv : '',
              t.normalMapUv ? '#define NORMALMAP_UV ' + t.normalMapUv : '',
              t.displacementMapUv ? '#define DISPLACEMENTMAP_UV ' + t.displacementMapUv : '',
              t.metalnessMapUv ? '#define METALNESSMAP_UV ' + t.metalnessMapUv : '',
              t.roughnessMapUv ? '#define ROUGHNESSMAP_UV ' + t.roughnessMapUv : '',
              t.clearcoatMapUv ? '#define CLEARCOATMAP_UV ' + t.clearcoatMapUv : '',
              t.clearcoatNormalMapUv ? '#define CLEARCOAT_NORMALMAP_UV ' + t.clearcoatNormalMapUv : '',
              t.clearcoatRoughnessMapUv ? '#define CLEARCOAT_ROUGHNESSMAP_UV ' + t.clearcoatRoughnessMapUv : '',
              t.iridescenceMapUv ? '#define IRIDESCENCEMAP_UV ' + t.iridescenceMapUv : '',
              t.iridescenceThicknessMapUv ? '#define IRIDESCENCE_THICKNESSMAP_UV ' + t.iridescenceThicknessMapUv : '',
              t.sheenColorMapUv ? '#define SHEEN_COLORMAP_UV ' + t.sheenColorMapUv : '',
              t.sheenRoughnessMapUv ? '#define SHEEN_ROUGHNESSMAP_UV ' + t.sheenRoughnessMapUv : '',
              t.specularMapUv ? '#define SPECULARMAP_UV ' + t.specularMapUv : '',
              t.specularColorMapUv ? '#define SPECULAR_COLORMAP_UV ' + t.specularColorMapUv : '',
              t.specularIntensityMapUv ? '#define SPECULAR_INTENSITYMAP_UV ' + t.specularIntensityMapUv : '',
              t.transmissionMapUv ? '#define TRANSMISSIONMAP_UV ' + t.transmissionMapUv : '',
              t.thicknessMapUv ? '#define THICKNESSMAP_UV ' + t.thicknessMapUv : '',
              t.vertexTangents ? '#define USE_TANGENT' : '',
              t.vertexColors ? '#define USE_COLOR' : '',
              t.vertexAlphas ? '#define USE_COLOR_ALPHA' : '',
              t.vertexUvs2 ? '#define USE_UV2' : '',
              t.pointsUvs ? '#define USE_POINTS_UV' : '',
              t.flatShading ? '#define FLAT_SHADED' : '',
              t.skinning ? '#define USE_SKINNING' : '',
              t.morphTargets ? '#define USE_MORPHTARGETS' : '',
              t.morphNormals && t.flatShading === !1 ? '#define USE_MORPHNORMALS' : '',
              t.morphColors && t.isWebGL2 ? '#define USE_MORPHCOLORS' : '',
              t.morphTargetsCount > 0 && t.isWebGL2 ? '#define MORPHTARGETS_TEXTURE' : '',
              t.morphTargetsCount > 0 && t.isWebGL2 ? '#define MORPHTARGETS_TEXTURE_STRIDE ' + t.morphTextureStride : '',
              t.morphTargetsCount > 0 && t.isWebGL2 ? '#define MORPHTARGETS_COUNT ' + t.morphTargetsCount : '',
              t.doubleSided ? '#define DOUBLE_SIDED' : '',
              t.flipSided ? '#define FLIP_SIDED' : '',
              t.shadowMapEnabled ? '#define USE_SHADOWMAP' : '',
              t.shadowMapEnabled ? '#define ' + c : '',
              t.sizeAttenuation ? '#define USE_SIZEATTENUATION' : '',
              t.logarithmicDepthBuffer ? '#define USE_LOGDEPTHBUF' : '',
              t.logarithmicDepthBuffer && t.rendererExtensionFragDepth ? '#define USE_LOGDEPTHBUF_EXT' : '',
              'uniform mat4 modelMatrix;',
              'uniform mat4 modelViewMatrix;',
              'uniform mat4 projectionMatrix;',
              'uniform mat4 viewMatrix;',
              'uniform mat3 normalMatrix;',
              'uniform vec3 cameraPosition;',
              'uniform bool isOrthographic;',
              '#ifdef USE_INSTANCING',
              '	attribute mat4 instanceMatrix;',
              '#endif',
              '#ifdef USE_INSTANCING_COLOR',
              '	attribute vec3 instanceColor;',
              '#endif',
              'attribute vec3 position;',
              'attribute vec3 normal;',
              'attribute vec2 uv;',
              '#ifdef USE_TANGENT',
              '	attribute vec4 tangent;',
              '#endif',
              '#if defined( USE_COLOR_ALPHA )',
              '	attribute vec4 color;',
              '#elif defined( USE_COLOR )',
              '	attribute vec3 color;',
              '#endif',
              '#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )',
              '	attribute vec3 morphTarget0;',
              '	attribute vec3 morphTarget1;',
              '	attribute vec3 morphTarget2;',
              '	attribute vec3 morphTarget3;',
              '	#ifdef USE_MORPHNORMALS',
              '		attribute vec3 morphNormal0;',
              '		attribute vec3 morphNormal1;',
              '		attribute vec3 morphNormal2;',
              '		attribute vec3 morphNormal3;',
              '	#else',
              '		attribute vec3 morphTarget4;',
              '		attribute vec3 morphTarget5;',
              '		attribute vec3 morphTarget6;',
              '		attribute vec3 morphTarget7;',
              '	#endif',
              '#endif',
              '#ifdef USE_SKINNING',
              '	attribute vec4 skinIndex;',
              '	attribute vec4 skinWeight;',
              '#endif',
              `
`,
          ].filter(Wi).join(`
`)),
          (d = [
              p,
              Ka(t),
              '#define SHADER_NAME ' + t.shaderName,
              g,
              t.useFog && t.fog ? '#define USE_FOG' : '',
              t.useFog && t.fogExp2 ? '#define FOG_EXP2' : '',
              t.map ? '#define USE_MAP' : '',
              t.matcap ? '#define USE_MATCAP' : '',
              t.envMap ? '#define USE_ENVMAP' : '',
              t.envMap ? '#define ' + l : '',
              t.envMap ? '#define ' + u : '',
              t.envMap ? '#define ' + f : '',
              h ? '#define CUBEUV_TEXEL_WIDTH ' + h.texelWidth : '',
              h ? '#define CUBEUV_TEXEL_HEIGHT ' + h.texelHeight : '',
              h ? '#define CUBEUV_MAX_MIP ' + h.maxMip + '.0' : '',
              t.lightMap ? '#define USE_LIGHTMAP' : '',
              t.aoMap ? '#define USE_AOMAP' : '',
              t.bumpMap ? '#define USE_BUMPMAP' : '',
              t.normalMap ? '#define USE_NORMALMAP' : '',
              t.normalMapObjectSpace ? '#define USE_NORMALMAP_OBJECTSPACE' : '',
              t.normalMapTangentSpace ? '#define USE_NORMALMAP_TANGENTSPACE' : '',
              t.emissiveMap ? '#define USE_EMISSIVEMAP' : '',
              t.clearcoat ? '#define USE_CLEARCOAT' : '',
              t.clearcoatMap ? '#define USE_CLEARCOATMAP' : '',
              t.clearcoatRoughnessMap ? '#define USE_CLEARCOAT_ROUGHNESSMAP' : '',
              t.clearcoatNormalMap ? '#define USE_CLEARCOAT_NORMALMAP' : '',
              t.iridescence ? '#define USE_IRIDESCENCE' : '',
              t.iridescenceMap ? '#define USE_IRIDESCENCEMAP' : '',
              t.iridescenceThicknessMap ? '#define USE_IRIDESCENCE_THICKNESSMAP' : '',
              t.specularMap ? '#define USE_SPECULARMAP' : '',
              t.specularColorMap ? '#define USE_SPECULAR_COLORMAP' : '',
              t.specularIntensityMap ? '#define USE_SPECULAR_INTENSITYMAP' : '',
              t.roughnessMap ? '#define USE_ROUGHNESSMAP' : '',
              t.metalnessMap ? '#define USE_METALNESSMAP' : '',
              t.alphaMap ? '#define USE_ALPHAMAP' : '',
              t.alphaTest ? '#define USE_ALPHATEST' : '',
              t.sheen ? '#define USE_SHEEN' : '',
              t.sheenColorMap ? '#define USE_SHEEN_COLORMAP' : '',
              t.sheenRoughnessMap ? '#define USE_SHEEN_ROUGHNESSMAP' : '',
              t.transmission ? '#define USE_TRANSMISSION' : '',
              t.transmissionMap ? '#define USE_TRANSMISSIONMAP' : '',
              t.thicknessMap ? '#define USE_THICKNESSMAP' : '',
              t.decodeVideoTexture ? '#define DECODE_VIDEO_TEXTURE' : '',
              t.vertexTangents ? '#define USE_TANGENT' : '',
              t.vertexColors || t.instancingColor ? '#define USE_COLOR' : '',
              t.vertexAlphas ? '#define USE_COLOR_ALPHA' : '',
              t.vertexUvs2 ? '#define USE_UV2' : '',
              t.pointsUvs ? '#define USE_POINTS_UV' : '',
              t.gradientMap ? '#define USE_GRADIENTMAP' : '',
              t.flatShading ? '#define FLAT_SHADED' : '',
              t.doubleSided ? '#define DOUBLE_SIDED' : '',
              t.flipSided ? '#define FLIP_SIDED' : '',
              t.shadowMapEnabled ? '#define USE_SHADOWMAP' : '',
              t.shadowMapEnabled ? '#define ' + c : '',
              t.premultipliedAlpha ? '#define PREMULTIPLIED_ALPHA' : '',
              t.useLegacyLights ? '#define LEGACY_LIGHTS' : '',
              t.logarithmicDepthBuffer ? '#define USE_LOGDEPTHBUF' : '',
              t.logarithmicDepthBuffer && t.rendererExtensionFragDepth ? '#define USE_LOGDEPTHBUF_EXT' : '',
              'uniform mat4 viewMatrix;',
              'uniform vec3 cameraPosition;',
              'uniform bool isOrthographic;',
              t.toneMapping !== ln ? '#define TONE_MAPPING' : '',
              t.toneMapping !== ln ? Pe.tonemapping_pars_fragment : '',
              t.toneMapping !== ln ? Yp('toneMapping', t.toneMapping) : '',
              t.dithering ? '#define DITHERING' : '',
              t.opaque ? '#define OPAQUE' : '',
              Pe.encodings_pars_fragment,
              jp('linearToOutputTexel', t.outputEncoding),
              t.useDepthPacking ? '#define DEPTH_PACKING ' + t.depthPacking : '',
              `
`,
          ].filter(Wi).join(`
`))),
        (a = oo(a)),
        (a = Xa(a, t)),
        (a = ja(a, t)),
        (o = oo(o)),
        (o = Xa(o, t)),
        (o = ja(o, t)),
        (a = Ya(a)),
        (o = Ya(o)),
        t.isWebGL2 &&
            t.isRawShaderMaterial !== !0 &&
            ((y = `#version 300 es
`),
            (m =
                ['precision mediump sampler2DArray;', '#define attribute in', '#define varying out', '#define texture2D texture'].join(`
`) +
                `
` +
                m),
            (d =
                [
                    '#define varying in',
                    t.glslVersion === ma ? '' : 'layout(location = 0) out highp vec4 pc_fragColor;',
                    t.glslVersion === ma ? '' : '#define gl_FragColor pc_fragColor',
                    '#define gl_FragDepthEXT gl_FragDepth',
                    '#define texture2D texture',
                    '#define textureCube texture',
                    '#define texture2DProj textureProj',
                    '#define texture2DLodEXT textureLod',
                    '#define texture2DProjLodEXT textureProjLod',
                    '#define textureCubeLodEXT textureLod',
                    '#define texture2DGradEXT textureGrad',
                    '#define texture2DProjGradEXT textureProjGrad',
                    '#define textureCubeGradEXT textureGrad',
                ].join(`
`) +
                `
` +
                d));
    const x = y + m + a,
        v = y + d + o,
        M = Wa(i, 35633, x),
        b = Wa(i, 35632, v);
    if (
        (i.attachShader(_, M),
        i.attachShader(_, b),
        t.index0AttributeName !== void 0 ? i.bindAttribLocation(_, 0, t.index0AttributeName) : t.morphTargets === !0 && i.bindAttribLocation(_, 0, 'position'),
        i.linkProgram(_),
        r.debug.checkShaderErrors)
    ) {
        const S = i.getProgramInfoLog(_).trim(),
            E = i.getShaderInfoLog(M).trim(),
            N = i.getShaderInfoLog(b).trim();
        let O = !0,
            D = !0;
        if (i.getProgramParameter(_, 35714) === !1)
            if (((O = !1), typeof r.debug.onShaderError == 'function')) r.debug.onShaderError(i, _, M, b);
            else {
                const U = qa(i, M, 'vertex'),
                    B = qa(i, b, 'fragment');
                console.error(
                    'THREE.WebGLProgram: Shader Error ' +
                        i.getError() +
                        ' - VALIDATE_STATUS ' +
                        i.getProgramParameter(_, 35715) +
                        `

Program Info Log: ` +
                        S +
                        `
` +
                        U +
                        `
` +
                        B,
                );
            }
        else S !== '' ? console.warn('THREE.WebGLProgram: Program Info Log:', S) : (E === '' || N === '') && (D = !1);
        D && (this.diagnostics = { runnable: O, programLog: S, vertexShader: { log: E, prefix: m }, fragmentShader: { log: N, prefix: d } });
    }
    i.deleteShader(M), i.deleteShader(b);
    let P;
    this.getUniforms = function () {
        return P === void 0 && (P = new kr(i, _)), P;
    };
    let A;
    return (
        (this.getAttributes = function () {
            return A === void 0 && (A = $p(i, _)), A;
        }),
        (this.destroy = function () {
            n.releaseStatesOfProgram(this), i.deleteProgram(_), (this.program = void 0);
        }),
        (this.name = t.shaderName),
        (this.id = Wp++),
        (this.cacheKey = e),
        (this.usedTimes = 1),
        (this.program = _),
        (this.vertexShader = M),
        (this.fragmentShader = b),
        this
    );
}
let lm = 0;
class cm {
    constructor() {
        (this.shaderCache = new Map()), (this.materialCache = new Map());
    }
    update(e) {
        const t = e.vertexShader,
            n = e.fragmentShader,
            i = this._getShaderStage(t),
            s = this._getShaderStage(n),
            a = this._getShaderCacheForMaterial(e);
        return a.has(i) === !1 && (a.add(i), i.usedTimes++), a.has(s) === !1 && (a.add(s), s.usedTimes++), this;
    }
    remove(e) {
        const t = this.materialCache.get(e);
        for (const n of t) n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code);
        return this.materialCache.delete(e), this;
    }
    getVertexShaderID(e) {
        return this._getShaderStage(e.vertexShader).id;
    }
    getFragmentShaderID(e) {
        return this._getShaderStage(e.fragmentShader).id;
    }
    dispose() {
        this.shaderCache.clear(), this.materialCache.clear();
    }
    _getShaderCacheForMaterial(e) {
        const t = this.materialCache;
        let n = t.get(e);
        return n === void 0 && ((n = new Set()), t.set(e, n)), n;
    }
    _getShaderStage(e) {
        const t = this.shaderCache;
        let n = t.get(e);
        return n === void 0 && ((n = new um(e)), t.set(e, n)), n;
    }
}
class um {
    constructor(e) {
        (this.id = lm++), (this.code = e), (this.usedTimes = 0);
    }
}
function fm(r, e, t, n, i, s, a) {
    const o = new vo(),
        c = new cm(),
        l = [],
        u = i.isWebGL2,
        f = i.logarithmicDepthBuffer,
        h = i.vertexTextures;
    let p = i.precision;
    const g = {
        MeshDepthMaterial: 'depth',
        MeshDistanceMaterial: 'distanceRGBA',
        MeshNormalMaterial: 'normal',
        MeshBasicMaterial: 'basic',
        MeshLambertMaterial: 'lambert',
        MeshPhongMaterial: 'phong',
        MeshToonMaterial: 'toon',
        MeshStandardMaterial: 'physical',
        MeshPhysicalMaterial: 'physical',
        MeshMatcapMaterial: 'matcap',
        LineBasicMaterial: 'basic',
        LineDashedMaterial: 'dashed',
        PointsMaterial: 'points',
        ShadowMaterial: 'shadow',
        SpriteMaterial: 'sprite',
    };
    function _(S) {
        return S === 1 ? 'uv2' : 'uv';
    }
    function m(S, E, N, O, D) {
        const U = O.fog,
            B = D.geometry,
            $ = S.isMeshStandardMaterial ? O.environment : null,
            Y = (S.isMeshStandardMaterial ? t : e).get(S.envMap || $),
            k = Y && Y.mapping === es ? Y.image.height : null,
            K = g[S.type];
        S.precision !== null && ((p = i.getMaxPrecision(S.precision)), p !== S.precision && console.warn('THREE.WebGLProgram.getParameters:', S.precision, 'not supported, using', p, 'instead.'));
        const ne = B.morphAttributes.position || B.morphAttributes.normal || B.morphAttributes.color,
            _e = ne !== void 0 ? ne.length : 0;
        let ce = 0;
        B.morphAttributes.position !== void 0 && (ce = 1), B.morphAttributes.normal !== void 0 && (ce = 2), B.morphAttributes.color !== void 0 && (ce = 3);
        let W, J, ie, oe;
        if (K) {
            const fe = jt[K];
            (W = fe.vertexShader), (J = fe.fragmentShader);
        } else (W = S.vertexShader), (J = S.fragmentShader), c.update(S), (ie = c.getVertexShaderID(S)), (oe = c.getFragmentShaderID(S));
        const V = r.getRenderTarget(),
            Me = D.isInstancedMesh === !0,
            xe = !!S.map,
            re = !!S.matcap,
            ye = !!Y,
            Fe = !!S.aoMap,
            me = !!S.lightMap,
            Ae = !!S.bumpMap,
            Xe = !!S.normalMap,
            We = !!S.displacementMap,
            Ze = !!S.emissiveMap,
            je = !!S.metalnessMap,
            Oe = !!S.roughnessMap,
            Ge = S.clearcoat > 0,
            ot = S.iridescence > 0,
            C = S.sheen > 0,
            w = S.transmission > 0,
            H = Ge && !!S.clearcoatMap,
            Q = Ge && !!S.clearcoatNormalMap,
            te = Ge && !!S.clearcoatRoughnessMap,
            ae = ot && !!S.iridescenceMap,
            L = ot && !!S.iridescenceThicknessMap,
            Z = C && !!S.sheenColorMap,
            G = C && !!S.sheenRoughnessMap,
            le = !!S.specularMap,
            he = !!S.specularColorMap,
            pe = !!S.specularIntensityMap,
            ue = w && !!S.transmissionMap,
            de = w && !!S.thicknessMap,
            we = !!S.gradientMap,
            Le = !!S.alphaMap,
            Ye = S.alphaTest > 0,
            I = !!S.extensions,
            X = !!B.attributes.uv2;
        return {
            isWebGL2: u,
            shaderID: K,
            shaderName: S.type,
            vertexShader: W,
            fragmentShader: J,
            defines: S.defines,
            customVertexShaderID: ie,
            customFragmentShaderID: oe,
            isRawShaderMaterial: S.isRawShaderMaterial === !0,
            glslVersion: S.glslVersion,
            precision: p,
            instancing: Me,
            instancingColor: Me && D.instanceColor !== null,
            supportsVertexTextures: h,
            outputEncoding: V === null ? r.outputEncoding : V.isXRRenderTarget === !0 ? V.texture.encoding : Bn,
            map: xe,
            matcap: re,
            envMap: ye,
            envMapMode: ye && Y.mapping,
            envMapCubeUVHeight: k,
            aoMap: Fe,
            lightMap: me,
            bumpMap: Ae,
            normalMap: Xe,
            displacementMap: h && We,
            emissiveMap: Ze,
            normalMapObjectSpace: Xe && S.normalMapType === vu,
            normalMapTangentSpace: Xe && S.normalMapType === Al,
            decodeVideoTexture: xe && S.map.isVideoTexture === !0 && S.map.encoding === ke,
            metalnessMap: je,
            roughnessMap: Oe,
            clearcoat: Ge,
            clearcoatMap: H,
            clearcoatNormalMap: Q,
            clearcoatRoughnessMap: te,
            iridescence: ot,
            iridescenceMap: ae,
            iridescenceThicknessMap: L,
            sheen: C,
            sheenColorMap: Z,
            sheenRoughnessMap: G,
            specularMap: le,
            specularColorMap: he,
            specularIntensityMap: pe,
            transmission: w,
            transmissionMap: ue,
            thicknessMap: de,
            gradientMap: we,
            opaque: S.transparent === !1 && S.blending === _i,
            alphaMap: Le,
            alphaTest: Ye,
            combine: S.combine,
            mapUv: xe && _(S.map.channel),
            aoMapUv: Fe && _(S.aoMap.channel),
            lightMapUv: me && _(S.lightMap.channel),
            bumpMapUv: Ae && _(S.bumpMap.channel),
            normalMapUv: Xe && _(S.normalMap.channel),
            displacementMapUv: We && _(S.displacementMap.channel),
            emissiveMapUv: Ze && _(S.emissiveMap.channel),
            metalnessMapUv: je && _(S.metalnessMap.channel),
            roughnessMapUv: Oe && _(S.roughnessMap.channel),
            clearcoatMapUv: H && _(S.clearcoatMap.channel),
            clearcoatNormalMapUv: Q && _(S.clearcoatNormalMap.channel),
            clearcoatRoughnessMapUv: te && _(S.clearcoatRoughnessMap.channel),
            iridescenceMapUv: ae && _(S.iridescenceMap.channel),
            iridescenceThicknessMapUv: L && _(S.iridescenceThicknessMap.channel),
            sheenColorMapUv: Z && _(S.sheenColorMap.channel),
            sheenRoughnessMapUv: G && _(S.sheenRoughnessMap.channel),
            specularMapUv: le && _(S.specularMap.channel),
            specularColorMapUv: he && _(S.specularColorMap.channel),
            specularIntensityMapUv: pe && _(S.specularIntensityMap.channel),
            transmissionMapUv: ue && _(S.transmissionMap.channel),
            thicknessMapUv: de && _(S.thicknessMap.channel),
            alphaMapUv: Le && _(S.alphaMap.channel),
            vertexTangents: Xe && !!B.attributes.tangent,
            vertexColors: S.vertexColors,
            vertexAlphas: S.vertexColors === !0 && !!B.attributes.color && B.attributes.color.itemSize === 4,
            vertexUvs2: X,
            pointsUvs: D.isPoints === !0 && !!B.attributes.uv && (xe || Le),
            fog: !!U,
            useFog: S.fog === !0,
            fogExp2: U && U.isFogExp2,
            flatShading: S.flatShading === !0,
            sizeAttenuation: S.sizeAttenuation === !0,
            logarithmicDepthBuffer: f,
            skinning: D.isSkinnedMesh === !0,
            morphTargets: B.morphAttributes.position !== void 0,
            morphNormals: B.morphAttributes.normal !== void 0,
            morphColors: B.morphAttributes.color !== void 0,
            morphTargetsCount: _e,
            morphTextureStride: ce,
            numDirLights: E.directional.length,
            numPointLights: E.point.length,
            numSpotLights: E.spot.length,
            numSpotLightMaps: E.spotLightMap.length,
            numRectAreaLights: E.rectArea.length,
            numHemiLights: E.hemi.length,
            numDirLightShadows: E.directionalShadowMap.length,
            numPointLightShadows: E.pointShadowMap.length,
            numSpotLightShadows: E.spotShadowMap.length,
            numSpotLightShadowsWithMaps: E.numSpotLightShadowsWithMaps,
            numClippingPlanes: a.numPlanes,
            numClipIntersection: a.numIntersection,
            dithering: S.dithering,
            shadowMapEnabled: r.shadowMap.enabled && N.length > 0,
            shadowMapType: r.shadowMap.type,
            toneMapping: S.toneMapped ? r.toneMapping : ln,
            useLegacyLights: r.useLegacyLights,
            premultipliedAlpha: S.premultipliedAlpha,
            doubleSided: S.side === Nt,
            flipSided: S.side === ft,
            useDepthPacking: S.depthPacking >= 0,
            depthPacking: S.depthPacking || 0,
            index0AttributeName: S.index0AttributeName,
            extensionDerivatives: I && S.extensions.derivatives === !0,
            extensionFragDepth: I && S.extensions.fragDepth === !0,
            extensionDrawBuffers: I && S.extensions.drawBuffers === !0,
            extensionShaderTextureLOD: I && S.extensions.shaderTextureLOD === !0,
            rendererExtensionFragDepth: u || n.has('EXT_frag_depth'),
            rendererExtensionDrawBuffers: u || n.has('WEBGL_draw_buffers'),
            rendererExtensionShaderTextureLod: u || n.has('EXT_shader_texture_lod'),
            customProgramCacheKey: S.customProgramCacheKey(),
        };
    }
    function d(S) {
        const E = [];
        if ((S.shaderID ? E.push(S.shaderID) : (E.push(S.customVertexShaderID), E.push(S.customFragmentShaderID)), S.defines !== void 0)) for (const N in S.defines) E.push(N), E.push(S.defines[N]);
        return S.isRawShaderMaterial === !1 && (y(E, S), x(E, S), E.push(r.outputEncoding)), E.push(S.customProgramCacheKey), E.join();
    }
    function y(S, E) {
        S.push(E.precision),
            S.push(E.outputEncoding),
            S.push(E.envMapMode),
            S.push(E.envMapCubeUVHeight),
            S.push(E.mapUv),
            S.push(E.alphaMapUv),
            S.push(E.lightMapUv),
            S.push(E.aoMapUv),
            S.push(E.bumpMapUv),
            S.push(E.normalMapUv),
            S.push(E.displacementMapUv),
            S.push(E.emissiveMapUv),
            S.push(E.metalnessMapUv),
            S.push(E.roughnessMapUv),
            S.push(E.clearcoatMapUv),
            S.push(E.clearcoatNormalMapUv),
            S.push(E.clearcoatRoughnessMapUv),
            S.push(E.iridescenceMapUv),
            S.push(E.iridescenceThicknessMapUv),
            S.push(E.sheenColorMapUv),
            S.push(E.sheenRoughnessMapUv),
            S.push(E.specularMapUv),
            S.push(E.specularColorMapUv),
            S.push(E.specularIntensityMapUv),
            S.push(E.transmissionMapUv),
            S.push(E.thicknessMapUv),
            S.push(E.combine),
            S.push(E.fogExp2),
            S.push(E.sizeAttenuation),
            S.push(E.morphTargetsCount),
            S.push(E.morphAttributeCount),
            S.push(E.numDirLights),
            S.push(E.numPointLights),
            S.push(E.numSpotLights),
            S.push(E.numSpotLightMaps),
            S.push(E.numHemiLights),
            S.push(E.numRectAreaLights),
            S.push(E.numDirLightShadows),
            S.push(E.numPointLightShadows),
            S.push(E.numSpotLightShadows),
            S.push(E.numSpotLightShadowsWithMaps),
            S.push(E.shadowMapType),
            S.push(E.toneMapping),
            S.push(E.numClippingPlanes),
            S.push(E.numClipIntersection),
            S.push(E.depthPacking);
    }
    function x(S, E) {
        o.disableAll(),
            E.isWebGL2 && o.enable(0),
            E.supportsVertexTextures && o.enable(1),
            E.instancing && o.enable(2),
            E.instancingColor && o.enable(3),
            E.matcap && o.enable(4),
            E.envMap && o.enable(5),
            E.normalMapObjectSpace && o.enable(6),
            E.normalMapTangentSpace && o.enable(7),
            E.clearcoat && o.enable(8),
            E.iridescence && o.enable(9),
            E.alphaTest && o.enable(10),
            E.vertexColors && o.enable(11),
            E.vertexAlphas && o.enable(12),
            E.vertexUvs2 && o.enable(13),
            E.vertexTangents && o.enable(14),
            S.push(o.mask),
            o.disableAll(),
            E.fog && o.enable(0),
            E.useFog && o.enable(1),
            E.flatShading && o.enable(2),
            E.logarithmicDepthBuffer && o.enable(3),
            E.skinning && o.enable(4),
            E.morphTargets && o.enable(5),
            E.morphNormals && o.enable(6),
            E.morphColors && o.enable(7),
            E.premultipliedAlpha && o.enable(8),
            E.shadowMapEnabled && o.enable(9),
            E.useLegacyLights && o.enable(10),
            E.doubleSided && o.enable(11),
            E.flipSided && o.enable(12),
            E.useDepthPacking && o.enable(13),
            E.dithering && o.enable(14),
            E.transmission && o.enable(15),
            E.sheen && o.enable(16),
            E.decodeVideoTexture && o.enable(17),
            E.opaque && o.enable(18),
            E.pointsUvs && o.enable(19),
            S.push(o.mask);
    }
    function v(S) {
        const E = g[S.type];
        let N;
        if (E) {
            const O = jt[E];
            N = Bl.clone(O.uniforms);
        } else N = S.uniforms;
        return N;
    }
    function M(S, E) {
        let N;
        for (let O = 0, D = l.length; O < D; O++) {
            const U = l[O];
            if (U.cacheKey === E) {
                (N = U), ++N.usedTimes;
                break;
            }
        }
        return N === void 0 && ((N = new am(r, E, S, s)), l.push(N)), N;
    }
    function b(S) {
        if (--S.usedTimes === 0) {
            const E = l.indexOf(S);
            (l[E] = l[l.length - 1]), l.pop(), S.destroy();
        }
    }
    function P(S) {
        c.remove(S);
    }
    function A() {
        c.dispose();
    }
    return { getParameters: m, getProgramCacheKey: d, getUniforms: v, acquireProgram: M, releaseProgram: b, releaseShaderCache: P, programs: l, dispose: A };
}
function hm() {
    let r = new WeakMap();
    function e(s) {
        let a = r.get(s);
        return a === void 0 && ((a = {}), r.set(s, a)), a;
    }
    function t(s) {
        r.delete(s);
    }
    function n(s, a, o) {
        r.get(s)[a] = o;
    }
    function i() {
        r = new WeakMap();
    }
    return { get: e, remove: t, update: n, dispose: i };
}
function dm(r, e) {
    return r.groupOrder !== e.groupOrder
        ? r.groupOrder - e.groupOrder
        : r.renderOrder !== e.renderOrder
        ? r.renderOrder - e.renderOrder
        : r.material.id !== e.material.id
        ? r.material.id - e.material.id
        : r.z !== e.z
        ? r.z - e.z
        : r.id - e.id;
}
function Za(r, e) {
    return r.groupOrder !== e.groupOrder ? r.groupOrder - e.groupOrder : r.renderOrder !== e.renderOrder ? r.renderOrder - e.renderOrder : r.z !== e.z ? e.z - r.z : r.id - e.id;
}
function $a() {
    const r = [];
    let e = 0;
    const t = [],
        n = [],
        i = [];
    function s() {
        (e = 0), (t.length = 0), (n.length = 0), (i.length = 0);
    }
    function a(f, h, p, g, _, m) {
        let d = r[e];
        return (
            d === void 0
                ? ((d = { id: f.id, object: f, geometry: h, material: p, groupOrder: g, renderOrder: f.renderOrder, z: _, group: m }), (r[e] = d))
                : ((d.id = f.id), (d.object = f), (d.geometry = h), (d.material = p), (d.groupOrder = g), (d.renderOrder = f.renderOrder), (d.z = _), (d.group = m)),
            e++,
            d
        );
    }
    function o(f, h, p, g, _, m) {
        const d = a(f, h, p, g, _, m);
        p.transmission > 0 ? n.push(d) : p.transparent === !0 ? i.push(d) : t.push(d);
    }
    function c(f, h, p, g, _, m) {
        const d = a(f, h, p, g, _, m);
        p.transmission > 0 ? n.unshift(d) : p.transparent === !0 ? i.unshift(d) : t.unshift(d);
    }
    function l(f, h) {
        t.length > 1 && t.sort(f || dm), n.length > 1 && n.sort(h || Za), i.length > 1 && i.sort(h || Za);
    }
    function u() {
        for (let f = e, h = r.length; f < h; f++) {
            const p = r[f];
            if (p.id === null) break;
            (p.id = null), (p.object = null), (p.geometry = null), (p.material = null), (p.group = null);
        }
    }
    return { opaque: t, transmissive: n, transparent: i, init: s, push: o, unshift: c, finish: u, sort: l };
}
function pm() {
    let r = new WeakMap();
    function e(n, i) {
        const s = r.get(n);
        let a;
        return s === void 0 ? ((a = new $a()), r.set(n, [a])) : i >= s.length ? ((a = new $a()), s.push(a)) : (a = s[i]), a;
    }
    function t() {
        r = new WeakMap();
    }
    return { get: e, dispose: t };
}
function mm() {
    const r = {};
    return {
        get: function (e) {
            if (r[e.id] !== void 0) return r[e.id];
            let t;
            switch (e.type) {
                case 'DirectionalLight':
                    t = { direction: new R(), color: new ze() };
                    break;
                case 'SpotLight':
                    t = { position: new R(), direction: new R(), color: new ze(), distance: 0, coneCos: 0, penumbraCos: 0, decay: 0 };
                    break;
                case 'PointLight':
                    t = { position: new R(), color: new ze(), distance: 0, decay: 0 };
                    break;
                case 'HemisphereLight':
                    t = { direction: new R(), skyColor: new ze(), groundColor: new ze() };
                    break;
                case 'RectAreaLight':
                    t = { color: new ze(), position: new R(), halfWidth: new R(), halfHeight: new R() };
                    break;
            }
            return (r[e.id] = t), t;
        },
    };
}
function gm() {
    const r = {};
    return {
        get: function (e) {
            if (r[e.id] !== void 0) return r[e.id];
            let t;
            switch (e.type) {
                case 'DirectionalLight':
                    t = { shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new be() };
                    break;
                case 'SpotLight':
                    t = { shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new be() };
                    break;
                case 'PointLight':
                    t = { shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new be(), shadowCameraNear: 1, shadowCameraFar: 1e3 };
                    break;
            }
            return (r[e.id] = t), t;
        },
    };
}
let _m = 0;
function xm(r, e) {
    return (e.castShadow ? 2 : 0) - (r.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (r.map ? 1 : 0);
}
function vm(r, e) {
    const t = new mm(),
        n = gm(),
        i = {
            version: 0,
            hash: { directionalLength: -1, pointLength: -1, spotLength: -1, rectAreaLength: -1, hemiLength: -1, numDirectionalShadows: -1, numPointShadows: -1, numSpotShadows: -1, numSpotMaps: -1 },
            ambient: [0, 0, 0],
            probe: [],
            directional: [],
            directionalShadow: [],
            directionalShadowMap: [],
            directionalShadowMatrix: [],
            spot: [],
            spotLightMap: [],
            spotShadow: [],
            spotShadowMap: [],
            spotLightMatrix: [],
            rectArea: [],
            rectAreaLTC1: null,
            rectAreaLTC2: null,
            point: [],
            pointShadow: [],
            pointShadowMap: [],
            pointShadowMatrix: [],
            hemi: [],
            numSpotLightShadowsWithMaps: 0,
        };
    for (let u = 0; u < 9; u++) i.probe.push(new R());
    const s = new R(),
        a = new He(),
        o = new He();
    function c(u, f) {
        let h = 0,
            p = 0,
            g = 0;
        for (let N = 0; N < 9; N++) i.probe[N].set(0, 0, 0);
        let _ = 0,
            m = 0,
            d = 0,
            y = 0,
            x = 0,
            v = 0,
            M = 0,
            b = 0,
            P = 0,
            A = 0;
        u.sort(xm);
        const S = f === !0 ? Math.PI : 1;
        for (let N = 0, O = u.length; N < O; N++) {
            const D = u[N],
                U = D.color,
                B = D.intensity,
                $ = D.distance,
                Y = D.shadow && D.shadow.map ? D.shadow.map.texture : null;
            if (D.isAmbientLight) (h += U.r * B * S), (p += U.g * B * S), (g += U.b * B * S);
            else if (D.isLightProbe) for (let k = 0; k < 9; k++) i.probe[k].addScaledVector(D.sh.coefficients[k], B);
            else if (D.isDirectionalLight) {
                const k = t.get(D);
                if ((k.color.copy(D.color).multiplyScalar(D.intensity * S), D.castShadow)) {
                    const K = D.shadow,
                        ne = n.get(D);
                    (ne.shadowBias = K.bias),
                        (ne.shadowNormalBias = K.normalBias),
                        (ne.shadowRadius = K.radius),
                        (ne.shadowMapSize = K.mapSize),
                        (i.directionalShadow[_] = ne),
                        (i.directionalShadowMap[_] = Y),
                        (i.directionalShadowMatrix[_] = D.shadow.matrix),
                        v++;
                }
                (i.directional[_] = k), _++;
            } else if (D.isSpotLight) {
                const k = t.get(D);
                k.position.setFromMatrixPosition(D.matrixWorld),
                    k.color.copy(U).multiplyScalar(B * S),
                    (k.distance = $),
                    (k.coneCos = Math.cos(D.angle)),
                    (k.penumbraCos = Math.cos(D.angle * (1 - D.penumbra))),
                    (k.decay = D.decay),
                    (i.spot[d] = k);
                const K = D.shadow;
                if ((D.map && ((i.spotLightMap[P] = D.map), P++, K.updateMatrices(D), D.castShadow && A++), (i.spotLightMatrix[d] = K.matrix), D.castShadow)) {
                    const ne = n.get(D);
                    (ne.shadowBias = K.bias), (ne.shadowNormalBias = K.normalBias), (ne.shadowRadius = K.radius), (ne.shadowMapSize = K.mapSize), (i.spotShadow[d] = ne), (i.spotShadowMap[d] = Y), b++;
                }
                d++;
            } else if (D.isRectAreaLight) {
                const k = t.get(D);
                k.color.copy(U).multiplyScalar(B), k.halfWidth.set(D.width * 0.5, 0, 0), k.halfHeight.set(0, D.height * 0.5, 0), (i.rectArea[y] = k), y++;
            } else if (D.isPointLight) {
                const k = t.get(D);
                if ((k.color.copy(D.color).multiplyScalar(D.intensity * S), (k.distance = D.distance), (k.decay = D.decay), D.castShadow)) {
                    const K = D.shadow,
                        ne = n.get(D);
                    (ne.shadowBias = K.bias),
                        (ne.shadowNormalBias = K.normalBias),
                        (ne.shadowRadius = K.radius),
                        (ne.shadowMapSize = K.mapSize),
                        (ne.shadowCameraNear = K.camera.near),
                        (ne.shadowCameraFar = K.camera.far),
                        (i.pointShadow[m] = ne),
                        (i.pointShadowMap[m] = Y),
                        (i.pointShadowMatrix[m] = D.shadow.matrix),
                        M++;
                }
                (i.point[m] = k), m++;
            } else if (D.isHemisphereLight) {
                const k = t.get(D);
                k.skyColor.copy(D.color).multiplyScalar(B * S), k.groundColor.copy(D.groundColor).multiplyScalar(B * S), (i.hemi[x] = k), x++;
            }
        }
        y > 0 &&
            (e.isWebGL2 || r.has('OES_texture_float_linear') === !0
                ? ((i.rectAreaLTC1 = se.LTC_FLOAT_1), (i.rectAreaLTC2 = se.LTC_FLOAT_2))
                : r.has('OES_texture_half_float_linear') === !0
                ? ((i.rectAreaLTC1 = se.LTC_HALF_1), (i.rectAreaLTC2 = se.LTC_HALF_2))
                : console.error('THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.')),
            (i.ambient[0] = h),
            (i.ambient[1] = p),
            (i.ambient[2] = g);
        const E = i.hash;
        (E.directionalLength !== _ ||
            E.pointLength !== m ||
            E.spotLength !== d ||
            E.rectAreaLength !== y ||
            E.hemiLength !== x ||
            E.numDirectionalShadows !== v ||
            E.numPointShadows !== M ||
            E.numSpotShadows !== b ||
            E.numSpotMaps !== P) &&
            ((i.directional.length = _),
            (i.spot.length = d),
            (i.rectArea.length = y),
            (i.point.length = m),
            (i.hemi.length = x),
            (i.directionalShadow.length = v),
            (i.directionalShadowMap.length = v),
            (i.pointShadow.length = M),
            (i.pointShadowMap.length = M),
            (i.spotShadow.length = b),
            (i.spotShadowMap.length = b),
            (i.directionalShadowMatrix.length = v),
            (i.pointShadowMatrix.length = M),
            (i.spotLightMatrix.length = b + P - A),
            (i.spotLightMap.length = P),
            (i.numSpotLightShadowsWithMaps = A),
            (E.directionalLength = _),
            (E.pointLength = m),
            (E.spotLength = d),
            (E.rectAreaLength = y),
            (E.hemiLength = x),
            (E.numDirectionalShadows = v),
            (E.numPointShadows = M),
            (E.numSpotShadows = b),
            (E.numSpotMaps = P),
            (i.version = _m++));
    }
    function l(u, f) {
        let h = 0,
            p = 0,
            g = 0,
            _ = 0,
            m = 0;
        const d = f.matrixWorldInverse;
        for (let y = 0, x = u.length; y < x; y++) {
            const v = u[y];
            if (v.isDirectionalLight) {
                const M = i.directional[h];
                M.direction.setFromMatrixPosition(v.matrixWorld), s.setFromMatrixPosition(v.target.matrixWorld), M.direction.sub(s), M.direction.transformDirection(d), h++;
            } else if (v.isSpotLight) {
                const M = i.spot[g];
                M.position.setFromMatrixPosition(v.matrixWorld),
                    M.position.applyMatrix4(d),
                    M.direction.setFromMatrixPosition(v.matrixWorld),
                    s.setFromMatrixPosition(v.target.matrixWorld),
                    M.direction.sub(s),
                    M.direction.transformDirection(d),
                    g++;
            } else if (v.isRectAreaLight) {
                const M = i.rectArea[_];
                M.position.setFromMatrixPosition(v.matrixWorld),
                    M.position.applyMatrix4(d),
                    o.identity(),
                    a.copy(v.matrixWorld),
                    a.premultiply(d),
                    o.extractRotation(a),
                    M.halfWidth.set(v.width * 0.5, 0, 0),
                    M.halfHeight.set(0, v.height * 0.5, 0),
                    M.halfWidth.applyMatrix4(o),
                    M.halfHeight.applyMatrix4(o),
                    _++;
            } else if (v.isPointLight) {
                const M = i.point[p];
                M.position.setFromMatrixPosition(v.matrixWorld), M.position.applyMatrix4(d), p++;
            } else if (v.isHemisphereLight) {
                const M = i.hemi[m];
                M.direction.setFromMatrixPosition(v.matrixWorld), M.direction.transformDirection(d), m++;
            }
        }
    }
    return { setup: c, setupView: l, state: i };
}
function Ja(r, e) {
    const t = new vm(r, e),
        n = [],
        i = [];
    function s() {
        (n.length = 0), (i.length = 0);
    }
    function a(f) {
        n.push(f);
    }
    function o(f) {
        i.push(f);
    }
    function c(f) {
        t.setup(n, f);
    }
    function l(f) {
        t.setupView(n, f);
    }
    return { init: s, state: { lightsArray: n, shadowsArray: i, lights: t }, setupLights: c, setupLightsView: l, pushLight: a, pushShadow: o };
}
function ym(r, e) {
    let t = new WeakMap();
    function n(s, a = 0) {
        const o = t.get(s);
        let c;
        return o === void 0 ? ((c = new Ja(r, e)), t.set(s, [c])) : a >= o.length ? ((c = new Ja(r, e)), o.push(c)) : (c = o[a]), c;
    }
    function i() {
        t = new WeakMap();
    }
    return { get: n, dispose: i };
}
class Mm extends or {
    constructor(e) {
        super(),
            (this.isMeshDepthMaterial = !0),
            (this.type = 'MeshDepthMaterial'),
            (this.depthPacking = _u),
            (this.map = null),
            (this.alphaMap = null),
            (this.displacementMap = null),
            (this.displacementScale = 1),
            (this.displacementBias = 0),
            (this.wireframe = !1),
            (this.wireframeLinewidth = 1),
            this.setValues(e);
    }
    copy(e) {
        return (
            super.copy(e),
            (this.depthPacking = e.depthPacking),
            (this.map = e.map),
            (this.alphaMap = e.alphaMap),
            (this.displacementMap = e.displacementMap),
            (this.displacementScale = e.displacementScale),
            (this.displacementBias = e.displacementBias),
            (this.wireframe = e.wireframe),
            (this.wireframeLinewidth = e.wireframeLinewidth),
            this
        );
    }
}
class Sm extends or {
    constructor(e) {
        super(),
            (this.isMeshDistanceMaterial = !0),
            (this.type = 'MeshDistanceMaterial'),
            (this.map = null),
            (this.alphaMap = null),
            (this.displacementMap = null),
            (this.displacementScale = 1),
            (this.displacementBias = 0),
            this.setValues(e);
    }
    copy(e) {
        return (
            super.copy(e),
            (this.map = e.map),
            (this.alphaMap = e.alphaMap),
            (this.displacementMap = e.displacementMap),
            (this.displacementScale = e.displacementScale),
            (this.displacementBias = e.displacementBias),
            this
        );
    }
}
const bm = `void main() {
	gl_Position = vec4( position, 1.0 );
}`,
    wm = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
function Em(r, e, t) {
    let n = new Mo();
    const i = new be(),
        s = new be(),
        a = new it(),
        o = new Mm({ depthPacking: xu }),
        c = new Sm(),
        l = {},
        u = t.maxTextureSize,
        f = { [Zt]: ft, [ft]: Zt, [Nt]: Nt },
        h = new bn({ defines: { VSM_SAMPLES: 8 }, uniforms: { shadow_pass: { value: null }, resolution: { value: new be() }, radius: { value: 4 } }, vertexShader: bm, fragmentShader: wm }),
        p = h.clone();
    p.defines.HORIZONTAL_PASS = 1;
    const g = new hn();
    g.setAttribute('position', new Tt(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3));
    const _ = new Et(g, h),
        m = this;
    (this.enabled = !1),
        (this.autoUpdate = !0),
        (this.needsUpdate = !1),
        (this.type = Sl),
        (this.render = function (v, M, b) {
            if (m.enabled === !1 || (m.autoUpdate === !1 && m.needsUpdate === !1) || v.length === 0) return;
            const P = r.getRenderTarget(),
                A = r.getActiveCubeFace(),
                S = r.getActiveMipmapLevel(),
                E = r.state;
            E.setBlending(yn), E.buffers.color.setClear(1, 1, 1, 1), E.buffers.depth.setTest(!0), E.setScissorTest(!1);
            for (let N = 0, O = v.length; N < O; N++) {
                const D = v[N],
                    U = D.shadow;
                if (U === void 0) {
                    console.warn('THREE.WebGLShadowMap:', D, 'has no shadow.');
                    continue;
                }
                if (U.autoUpdate === !1 && U.needsUpdate === !1) continue;
                i.copy(U.mapSize);
                const B = U.getFrameExtents();
                if (
                    (i.multiply(B),
                    s.copy(U.mapSize),
                    (i.x > u || i.y > u) &&
                        (i.x > u && ((s.x = Math.floor(u / B.x)), (i.x = s.x * B.x), (U.mapSize.x = s.x)), i.y > u && ((s.y = Math.floor(u / B.y)), (i.y = s.y * B.y), (U.mapSize.y = s.y))),
                    U.map === null)
                ) {
                    const Y = this.type !== ki ? { minFilter: gt, magFilter: gt } : {};
                    (U.map = new zn(i.x, i.y, Y)), (U.map.texture.name = D.name + '.shadowMap'), U.camera.updateProjectionMatrix();
                }
                r.setRenderTarget(U.map), r.clear();
                const $ = U.getViewportCount();
                for (let Y = 0; Y < $; Y++) {
                    const k = U.getViewport(Y);
                    a.set(s.x * k.x, s.y * k.y, s.x * k.z, s.y * k.w), E.viewport(a), U.updateMatrices(D, Y), (n = U.getFrustum()), x(M, b, U.camera, D, this.type);
                }
                U.isPointLightShadow !== !0 && this.type === ki && d(U, b), (U.needsUpdate = !1);
            }
            (m.needsUpdate = !1), r.setRenderTarget(P, A, S);
        });
    function d(v, M) {
        const b = e.update(_);
        h.defines.VSM_SAMPLES !== v.blurSamples && ((h.defines.VSM_SAMPLES = v.blurSamples), (p.defines.VSM_SAMPLES = v.blurSamples), (h.needsUpdate = !0), (p.needsUpdate = !0)),
            v.mapPass === null && (v.mapPass = new zn(i.x, i.y)),
            (h.uniforms.shadow_pass.value = v.map.texture),
            (h.uniforms.resolution.value = v.mapSize),
            (h.uniforms.radius.value = v.radius),
            r.setRenderTarget(v.mapPass),
            r.clear(),
            r.renderBufferDirect(M, null, b, h, _, null),
            (p.uniforms.shadow_pass.value = v.mapPass.texture),
            (p.uniforms.resolution.value = v.mapSize),
            (p.uniforms.radius.value = v.radius),
            r.setRenderTarget(v.map),
            r.clear(),
            r.renderBufferDirect(M, null, b, p, _, null);
    }
    function y(v, M, b, P) {
        let A = null;
        const S = b.isPointLight === !0 ? v.customDistanceMaterial : v.customDepthMaterial;
        if (S !== void 0) A = S;
        else if (
            ((A = b.isPointLight === !0 ? c : o),
            (r.localClippingEnabled && M.clipShadows === !0 && Array.isArray(M.clippingPlanes) && M.clippingPlanes.length !== 0) ||
                (M.displacementMap && M.displacementScale !== 0) ||
                (M.alphaMap && M.alphaTest > 0) ||
                (M.map && M.alphaTest > 0))
        ) {
            const E = A.uuid,
                N = M.uuid;
            let O = l[E];
            O === void 0 && ((O = {}), (l[E] = O));
            let D = O[N];
            D === void 0 && ((D = A.clone()), (O[N] = D)), (A = D);
        }
        if (
            ((A.visible = M.visible),
            (A.wireframe = M.wireframe),
            P === ki ? (A.side = M.shadowSide !== null ? M.shadowSide : M.side) : (A.side = M.shadowSide !== null ? M.shadowSide : f[M.side]),
            (A.alphaMap = M.alphaMap),
            (A.alphaTest = M.alphaTest),
            (A.map = M.map),
            (A.clipShadows = M.clipShadows),
            (A.clippingPlanes = M.clippingPlanes),
            (A.clipIntersection = M.clipIntersection),
            (A.displacementMap = M.displacementMap),
            (A.displacementScale = M.displacementScale),
            (A.displacementBias = M.displacementBias),
            (A.wireframeLinewidth = M.wireframeLinewidth),
            (A.linewidth = M.linewidth),
            b.isPointLight === !0 && A.isMeshDistanceMaterial === !0)
        ) {
            const E = r.properties.get(A);
            E.light = b;
        }
        return A;
    }
    function x(v, M, b, P, A) {
        if (v.visible === !1) return;
        if (v.layers.test(M.layers) && (v.isMesh || v.isLine || v.isPoints) && (v.castShadow || (v.receiveShadow && A === ki)) && (!v.frustumCulled || n.intersectsObject(v))) {
            v.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse, v.matrixWorld);
            const N = e.update(v),
                O = v.material;
            if (Array.isArray(O)) {
                const D = N.groups;
                for (let U = 0, B = D.length; U < B; U++) {
                    const $ = D[U],
                        Y = O[$.materialIndex];
                    if (Y && Y.visible) {
                        const k = y(v, Y, P, A);
                        r.renderBufferDirect(b, null, N, k, v, $);
                    }
                }
            } else if (O.visible) {
                const D = y(v, O, P, A);
                r.renderBufferDirect(b, null, N, D, v, null);
            }
        }
        const E = v.children;
        for (let N = 0, O = E.length; N < O; N++) x(E[N], M, b, P, A);
    }
}
function Tm(r, e, t) {
    const n = t.isWebGL2;
    function i() {
        let I = !1;
        const X = new it();
        let ee = null;
        const fe = new it(0, 0, 0, 0);
        return {
            setMask: function (ge) {
                ee !== ge && !I && (r.colorMask(ge, ge, ge, ge), (ee = ge));
            },
            setLocked: function (ge) {
                I = ge;
            },
            setClear: function (ge, Ve, qe, at, dn) {
                dn === !0 && ((ge *= at), (Ve *= at), (qe *= at)), X.set(ge, Ve, qe, at), fe.equals(X) === !1 && (r.clearColor(ge, Ve, qe, at), fe.copy(X));
            },
            reset: function () {
                (I = !1), (ee = null), fe.set(-1, 0, 0, 0);
            },
        };
    }
    function s() {
        let I = !1,
            X = null,
            ee = null,
            fe = null;
        return {
            setTest: function (ge) {
                ge ? V(2929) : Me(2929);
            },
            setMask: function (ge) {
                X !== ge && !I && (r.depthMask(ge), (X = ge));
            },
            setFunc: function (ge) {
                if (ee !== ge) {
                    switch (ge) {
                        case Vc:
                            r.depthFunc(512);
                            break;
                        case kc:
                            r.depthFunc(519);
                            break;
                        case Hc:
                            r.depthFunc(513);
                            break;
                        case Qs:
                            r.depthFunc(515);
                            break;
                        case Wc:
                            r.depthFunc(514);
                            break;
                        case qc:
                            r.depthFunc(518);
                            break;
                        case Xc:
                            r.depthFunc(516);
                            break;
                        case jc:
                            r.depthFunc(517);
                            break;
                        default:
                            r.depthFunc(515);
                    }
                    ee = ge;
                }
            },
            setLocked: function (ge) {
                I = ge;
            },
            setClear: function (ge) {
                fe !== ge && (r.clearDepth(ge), (fe = ge));
            },
            reset: function () {
                (I = !1), (X = null), (ee = null), (fe = null);
            },
        };
    }
    function a() {
        let I = !1,
            X = null,
            ee = null,
            fe = null,
            ge = null,
            Ve = null,
            qe = null,
            at = null,
            dn = null;
        return {
            setTest: function (Ke) {
                I || (Ke ? V(2960) : Me(2960));
            },
            setMask: function (Ke) {
                X !== Ke && !I && (r.stencilMask(Ke), (X = Ke));
            },
            setFunc: function (Ke, At, Gt) {
                (ee !== Ke || fe !== At || ge !== Gt) && (r.stencilFunc(Ke, At, Gt), (ee = Ke), (fe = At), (ge = Gt));
            },
            setOp: function (Ke, At, Gt) {
                (Ve !== Ke || qe !== At || at !== Gt) && (r.stencilOp(Ke, At, Gt), (Ve = Ke), (qe = At), (at = Gt));
            },
            setLocked: function (Ke) {
                I = Ke;
            },
            setClear: function (Ke) {
                dn !== Ke && (r.clearStencil(Ke), (dn = Ke));
            },
            reset: function () {
                (I = !1), (X = null), (ee = null), (fe = null), (ge = null), (Ve = null), (qe = null), (at = null), (dn = null);
            },
        };
    }
    const o = new i(),
        c = new s(),
        l = new a(),
        u = new WeakMap(),
        f = new WeakMap();
    let h = {},
        p = {},
        g = new WeakMap(),
        _ = [],
        m = null,
        d = !1,
        y = null,
        x = null,
        v = null,
        M = null,
        b = null,
        P = null,
        A = null,
        S = !1,
        E = null,
        N = null,
        O = null,
        D = null,
        U = null;
    const B = r.getParameter(35661);
    let $ = !1,
        Y = 0;
    const k = r.getParameter(7938);
    k.indexOf('WebGL') !== -1 ? ((Y = parseFloat(/^WebGL (\d)/.exec(k)[1])), ($ = Y >= 1)) : k.indexOf('OpenGL ES') !== -1 && ((Y = parseFloat(/^OpenGL ES (\d)/.exec(k)[1])), ($ = Y >= 2));
    let K = null,
        ne = {};
    const _e = r.getParameter(3088),
        ce = r.getParameter(2978),
        W = new it().fromArray(_e),
        J = new it().fromArray(ce);
    function ie(I, X, ee) {
        const fe = new Uint8Array(4),
            ge = r.createTexture();
        r.bindTexture(I, ge), r.texParameteri(I, 10241, 9728), r.texParameteri(I, 10240, 9728);
        for (let Ve = 0; Ve < ee; Ve++) r.texImage2D(X + Ve, 0, 6408, 1, 1, 0, 6408, 5121, fe);
        return ge;
    }
    const oe = {};
    (oe[3553] = ie(3553, 3553, 1)), (oe[34067] = ie(34067, 34069, 6)), o.setClear(0, 0, 0, 1), c.setClear(1), l.setClear(0), V(2929), c.setFunc(Qs), We(!1), Ze(Bo), V(2884), Ae(yn);
    function V(I) {
        h[I] !== !0 && (r.enable(I), (h[I] = !0));
    }
    function Me(I) {
        h[I] !== !1 && (r.disable(I), (h[I] = !1));
    }
    function xe(I, X) {
        return p[I] !== X ? (r.bindFramebuffer(I, X), (p[I] = X), n && (I === 36009 && (p[36160] = X), I === 36160 && (p[36009] = X)), !0) : !1;
    }
    function re(I, X) {
        let ee = _,
            fe = !1;
        if (I)
            if (((ee = g.get(X)), ee === void 0 && ((ee = []), g.set(X, ee)), I.isWebGLMultipleRenderTargets)) {
                const ge = I.texture;
                if (ee.length !== ge.length || ee[0] !== 36064) {
                    for (let Ve = 0, qe = ge.length; Ve < qe; Ve++) ee[Ve] = 36064 + Ve;
                    (ee.length = ge.length), (fe = !0);
                }
            } else ee[0] !== 36064 && ((ee[0] = 36064), (fe = !0));
        else ee[0] !== 1029 && ((ee[0] = 1029), (fe = !0));
        fe && (t.isWebGL2 ? r.drawBuffers(ee) : e.get('WEBGL_draw_buffers').drawBuffersWEBGL(ee));
    }
    function ye(I) {
        return m !== I ? (r.useProgram(I), (m = I), !0) : !1;
    }
    const Fe = { [pi]: 32774, [Lc]: 32778, [Rc]: 32779 };
    if (n) (Fe[ko] = 32775), (Fe[Ho] = 32776);
    else {
        const I = e.get('EXT_blend_minmax');
        I !== null && ((Fe[ko] = I.MIN_EXT), (Fe[Ho] = I.MAX_EXT));
    }
    const me = { [Dc]: 0, [Ic]: 1, [Uc]: 768, [bl]: 770, [Gc]: 776, [Bc]: 774, [Oc]: 772, [Nc]: 769, [wl]: 771, [zc]: 775, [Fc]: 773 };
    function Ae(I, X, ee, fe, ge, Ve, qe, at) {
        if (I === yn) {
            d === !0 && (Me(3042), (d = !1));
            return;
        }
        if ((d === !1 && (V(3042), (d = !0)), I !== Pc)) {
            if (I !== y || at !== S) {
                if (((x !== pi || b !== pi) && (r.blendEquation(32774), (x = pi), (b = pi)), at))
                    switch (I) {
                        case _i:
                            r.blendFuncSeparate(1, 771, 1, 771);
                            break;
                        case zo:
                            r.blendFunc(1, 1);
                            break;
                        case Go:
                            r.blendFuncSeparate(0, 769, 0, 1);
                            break;
                        case Vo:
                            r.blendFuncSeparate(0, 768, 0, 770);
                            break;
                        default:
                            console.error('THREE.WebGLState: Invalid blending: ', I);
                            break;
                    }
                else
                    switch (I) {
                        case _i:
                            r.blendFuncSeparate(770, 771, 1, 771);
                            break;
                        case zo:
                            r.blendFunc(770, 1);
                            break;
                        case Go:
                            r.blendFuncSeparate(0, 769, 0, 1);
                            break;
                        case Vo:
                            r.blendFunc(0, 768);
                            break;
                        default:
                            console.error('THREE.WebGLState: Invalid blending: ', I);
                            break;
                    }
                (v = null), (M = null), (P = null), (A = null), (y = I), (S = at);
            }
            return;
        }
        (ge = ge || X),
            (Ve = Ve || ee),
            (qe = qe || fe),
            (X !== x || ge !== b) && (r.blendEquationSeparate(Fe[X], Fe[ge]), (x = X), (b = ge)),
            (ee !== v || fe !== M || Ve !== P || qe !== A) && (r.blendFuncSeparate(me[ee], me[fe], me[Ve], me[qe]), (v = ee), (M = fe), (P = Ve), (A = qe)),
            (y = I),
            (S = !1);
    }
    function Xe(I, X) {
        I.side === Nt ? Me(2884) : V(2884);
        let ee = I.side === ft;
        X && (ee = !ee),
            We(ee),
            I.blending === _i && I.transparent === !1 ? Ae(yn) : Ae(I.blending, I.blendEquation, I.blendSrc, I.blendDst, I.blendEquationAlpha, I.blendSrcAlpha, I.blendDstAlpha, I.premultipliedAlpha),
            c.setFunc(I.depthFunc),
            c.setTest(I.depthTest),
            c.setMask(I.depthWrite),
            o.setMask(I.colorWrite);
        const fe = I.stencilWrite;
        l.setTest(fe),
            fe && (l.setMask(I.stencilWriteMask), l.setFunc(I.stencilFunc, I.stencilRef, I.stencilFuncMask), l.setOp(I.stencilFail, I.stencilZFail, I.stencilZPass)),
            Oe(I.polygonOffset, I.polygonOffsetFactor, I.polygonOffsetUnits),
            I.alphaToCoverage === !0 ? V(32926) : Me(32926);
    }
    function We(I) {
        E !== I && (I ? r.frontFace(2304) : r.frontFace(2305), (E = I));
    }
    function Ze(I) {
        I !== Tc ? (V(2884), I !== N && (I === Bo ? r.cullFace(1029) : I === Ac ? r.cullFace(1028) : r.cullFace(1032))) : Me(2884), (N = I);
    }
    function je(I) {
        I !== O && ($ && r.lineWidth(I), (O = I));
    }
    function Oe(I, X, ee) {
        I ? (V(32823), (D !== X || U !== ee) && (r.polygonOffset(X, ee), (D = X), (U = ee))) : Me(32823);
    }
    function Ge(I) {
        I ? V(3089) : Me(3089);
    }
    function ot(I) {
        I === void 0 && (I = 33984 + B - 1), K !== I && (r.activeTexture(I), (K = I));
    }
    function C(I, X, ee) {
        ee === void 0 && (K === null ? (ee = 33984 + B - 1) : (ee = K));
        let fe = ne[ee];
        fe === void 0 && ((fe = { type: void 0, texture: void 0 }), (ne[ee] = fe)),
            (fe.type !== I || fe.texture !== X) && (K !== ee && (r.activeTexture(ee), (K = ee)), r.bindTexture(I, X || oe[I]), (fe.type = I), (fe.texture = X));
    }
    function w() {
        const I = ne[K];
        I !== void 0 && I.type !== void 0 && (r.bindTexture(I.type, null), (I.type = void 0), (I.texture = void 0));
    }
    function H() {
        try {
            r.compressedTexImage2D.apply(r, arguments);
        } catch (I) {
            console.error('THREE.WebGLState:', I);
        }
    }
    function Q() {
        try {
            r.compressedTexImage3D.apply(r, arguments);
        } catch (I) {
            console.error('THREE.WebGLState:', I);
        }
    }
    function te() {
        try {
            r.texSubImage2D.apply(r, arguments);
        } catch (I) {
            console.error('THREE.WebGLState:', I);
        }
    }
    function ae() {
        try {
            r.texSubImage3D.apply(r, arguments);
        } catch (I) {
            console.error('THREE.WebGLState:', I);
        }
    }
    function L() {
        try {
            r.compressedTexSubImage2D.apply(r, arguments);
        } catch (I) {
            console.error('THREE.WebGLState:', I);
        }
    }
    function Z() {
        try {
            r.compressedTexSubImage3D.apply(r, arguments);
        } catch (I) {
            console.error('THREE.WebGLState:', I);
        }
    }
    function G() {
        try {
            r.texStorage2D.apply(r, arguments);
        } catch (I) {
            console.error('THREE.WebGLState:', I);
        }
    }
    function le() {
        try {
            r.texStorage3D.apply(r, arguments);
        } catch (I) {
            console.error('THREE.WebGLState:', I);
        }
    }
    function he() {
        try {
            r.texImage2D.apply(r, arguments);
        } catch (I) {
            console.error('THREE.WebGLState:', I);
        }
    }
    function pe() {
        try {
            r.texImage3D.apply(r, arguments);
        } catch (I) {
            console.error('THREE.WebGLState:', I);
        }
    }
    function ue(I) {
        W.equals(I) === !1 && (r.scissor(I.x, I.y, I.z, I.w), W.copy(I));
    }
    function de(I) {
        J.equals(I) === !1 && (r.viewport(I.x, I.y, I.z, I.w), J.copy(I));
    }
    function we(I, X) {
        let ee = f.get(X);
        ee === void 0 && ((ee = new WeakMap()), f.set(X, ee));
        let fe = ee.get(I);
        fe === void 0 && ((fe = r.getUniformBlockIndex(X, I.name)), ee.set(I, fe));
    }
    function Le(I, X) {
        const fe = f.get(X).get(I);
        u.get(X) !== fe && (r.uniformBlockBinding(X, fe, I.__bindingPointIndex), u.set(X, fe));
    }
    function Ye() {
        r.disable(3042),
            r.disable(2884),
            r.disable(2929),
            r.disable(32823),
            r.disable(3089),
            r.disable(2960),
            r.disable(32926),
            r.blendEquation(32774),
            r.blendFunc(1, 0),
            r.blendFuncSeparate(1, 0, 1, 0),
            r.colorMask(!0, !0, !0, !0),
            r.clearColor(0, 0, 0, 0),
            r.depthMask(!0),
            r.depthFunc(513),
            r.clearDepth(1),
            r.stencilMask(4294967295),
            r.stencilFunc(519, 0, 4294967295),
            r.stencilOp(7680, 7680, 7680),
            r.clearStencil(0),
            r.cullFace(1029),
            r.frontFace(2305),
            r.polygonOffset(0, 0),
            r.activeTexture(33984),
            r.bindFramebuffer(36160, null),
            n === !0 && (r.bindFramebuffer(36009, null), r.bindFramebuffer(36008, null)),
            r.useProgram(null),
            r.lineWidth(1),
            r.scissor(0, 0, r.canvas.width, r.canvas.height),
            r.viewport(0, 0, r.canvas.width, r.canvas.height),
            (h = {}),
            (K = null),
            (ne = {}),
            (p = {}),
            (g = new WeakMap()),
            (_ = []),
            (m = null),
            (d = !1),
            (y = null),
            (x = null),
            (v = null),
            (M = null),
            (b = null),
            (P = null),
            (A = null),
            (S = !1),
            (E = null),
            (N = null),
            (O = null),
            (D = null),
            (U = null),
            W.set(0, 0, r.canvas.width, r.canvas.height),
            J.set(0, 0, r.canvas.width, r.canvas.height),
            o.reset(),
            c.reset(),
            l.reset();
    }
    return {
        buffers: { color: o, depth: c, stencil: l },
        enable: V,
        disable: Me,
        bindFramebuffer: xe,
        drawBuffers: re,
        useProgram: ye,
        setBlending: Ae,
        setMaterial: Xe,
        setFlipSided: We,
        setCullFace: Ze,
        setLineWidth: je,
        setPolygonOffset: Oe,
        setScissorTest: Ge,
        activeTexture: ot,
        bindTexture: C,
        unbindTexture: w,
        compressedTexImage2D: H,
        compressedTexImage3D: Q,
        texImage2D: he,
        texImage3D: pe,
        updateUBOMapping: we,
        uniformBlockBinding: Le,
        texStorage2D: G,
        texStorage3D: le,
        texSubImage2D: te,
        texSubImage3D: ae,
        compressedTexSubImage2D: L,
        compressedTexSubImage3D: Z,
        scissor: ue,
        viewport: de,
        reset: Ye,
    };
}
function Am(r, e, t, n, i, s, a) {
    const o = i.isWebGL2,
        c = i.maxTextures,
        l = i.maxCubemapSize,
        u = i.maxTextureSize,
        f = i.maxSamples,
        h = e.has('WEBGL_multisampled_render_to_texture') ? e.get('WEBGL_multisampled_render_to_texture') : null,
        p = typeof navigator > 'u' ? !1 : /OculusBrowser/g.test(navigator.userAgent),
        g = new WeakMap();
    let _;
    const m = new WeakMap();
    let d = !1;
    try {
        d = typeof OffscreenCanvas < 'u' && new OffscreenCanvas(1, 1).getContext('2d') !== null;
    } catch {}
    function y(C, w) {
        return d ? new OffscreenCanvas(C, w) : er('canvas');
    }
    function x(C, w, H, Q) {
        let te = 1;
        if (((C.width > Q || C.height > Q) && (te = Q / Math.max(C.width, C.height)), te < 1 || w === !0))
            if (
                (typeof HTMLImageElement < 'u' && C instanceof HTMLImageElement) ||
                (typeof HTMLCanvasElement < 'u' && C instanceof HTMLCanvasElement) ||
                (typeof ImageBitmap < 'u' && C instanceof ImageBitmap)
            ) {
                const ae = w ? Pl : Math.floor,
                    L = ae(te * C.width),
                    Z = ae(te * C.height);
                _ === void 0 && (_ = y(L, Z));
                const G = H ? y(L, Z) : _;
                return (
                    (G.width = L),
                    (G.height = Z),
                    G.getContext('2d').drawImage(C, 0, 0, L, Z),
                    console.warn('THREE.WebGLRenderer: Texture has been resized from (' + C.width + 'x' + C.height + ') to (' + L + 'x' + Z + ').'),
                    G
                );
            } else return 'data' in C && console.warn('THREE.WebGLRenderer: Image in DataTexture is too big (' + C.width + 'x' + C.height + ').'), C;
        return C;
    }
    function v(C) {
        return so(C.width) && so(C.height);
    }
    function M(C) {
        return o ? !1 : C.wrapS !== Ot || C.wrapT !== Ot || (C.minFilter !== gt && C.minFilter !== Pt);
    }
    function b(C, w) {
        return C.generateMipmaps && w && C.minFilter !== gt && C.minFilter !== Pt;
    }
    function P(C) {
        r.generateMipmap(C);
    }
    function A(C, w, H, Q, te = !1) {
        if (o === !1) return w;
        if (C !== null) {
            if (r[C] !== void 0) return r[C];
            console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + C + "'");
        }
        let ae = w;
        return (
            w === 6403 && (H === 5126 && (ae = 33326), H === 5131 && (ae = 33325), H === 5121 && (ae = 33321)),
            w === 33319 && (H === 5126 && (ae = 33328), H === 5131 && (ae = 33327), H === 5121 && (ae = 33323)),
            w === 6408 &&
                (H === 5126 && (ae = 34836), H === 5131 && (ae = 34842), H === 5121 && (ae = Q === ke && te === !1 ? 35907 : 32856), H === 32819 && (ae = 32854), H === 32820 && (ae = 32855)),
            (ae === 33325 || ae === 33326 || ae === 33327 || ae === 33328 || ae === 34842 || ae === 34836) && e.get('EXT_color_buffer_float'),
            ae
        );
    }
    function S(C, w, H) {
        return b(C, H) === !0 || (C.isFramebufferTexture && C.minFilter !== gt && C.minFilter !== Pt)
            ? Math.log2(Math.max(w.width, w.height)) + 1
            : C.mipmaps !== void 0 && C.mipmaps.length > 0
            ? C.mipmaps.length
            : C.isCompressedTexture && Array.isArray(C.image)
            ? w.mipmaps.length
            : 1;
    }
    function E(C) {
        return C === gt || C === Wo || C === ms ? 9728 : 9729;
    }
    function N(C) {
        const w = C.target;
        w.removeEventListener('dispose', N), D(w), w.isVideoTexture && g.delete(w);
    }
    function O(C) {
        const w = C.target;
        w.removeEventListener('dispose', O), B(w);
    }
    function D(C) {
        const w = n.get(C);
        if (w.__webglInit === void 0) return;
        const H = C.source,
            Q = m.get(H);
        if (Q) {
            const te = Q[w.__cacheKey];
            te.usedTimes--, te.usedTimes === 0 && U(C), Object.keys(Q).length === 0 && m.delete(H);
        }
        n.remove(C);
    }
    function U(C) {
        const w = n.get(C);
        r.deleteTexture(w.__webglTexture);
        const H = C.source,
            Q = m.get(H);
        delete Q[w.__cacheKey], a.memory.textures--;
    }
    function B(C) {
        const w = C.texture,
            H = n.get(C),
            Q = n.get(w);
        if ((Q.__webglTexture !== void 0 && (r.deleteTexture(Q.__webglTexture), a.memory.textures--), C.depthTexture && C.depthTexture.dispose(), C.isWebGLCubeRenderTarget))
            for (let te = 0; te < 6; te++) r.deleteFramebuffer(H.__webglFramebuffer[te]), H.__webglDepthbuffer && r.deleteRenderbuffer(H.__webglDepthbuffer[te]);
        else {
            if (
                (r.deleteFramebuffer(H.__webglFramebuffer),
                H.__webglDepthbuffer && r.deleteRenderbuffer(H.__webglDepthbuffer),
                H.__webglMultisampledFramebuffer && r.deleteFramebuffer(H.__webglMultisampledFramebuffer),
                H.__webglColorRenderbuffer)
            )
                for (let te = 0; te < H.__webglColorRenderbuffer.length; te++) H.__webglColorRenderbuffer[te] && r.deleteRenderbuffer(H.__webglColorRenderbuffer[te]);
            H.__webglDepthRenderbuffer && r.deleteRenderbuffer(H.__webglDepthRenderbuffer);
        }
        if (C.isWebGLMultipleRenderTargets)
            for (let te = 0, ae = w.length; te < ae; te++) {
                const L = n.get(w[te]);
                L.__webglTexture && (r.deleteTexture(L.__webglTexture), a.memory.textures--), n.remove(w[te]);
            }
        n.remove(w), n.remove(C);
    }
    let $ = 0;
    function Y() {
        $ = 0;
    }
    function k() {
        const C = $;
        return C >= c && console.warn('THREE.WebGLTextures: Trying to use ' + C + ' texture units while this GPU supports only ' + c), ($ += 1), C;
    }
    function K(C) {
        const w = [];
        return (
            w.push(C.wrapS),
            w.push(C.wrapT),
            w.push(C.wrapR || 0),
            w.push(C.magFilter),
            w.push(C.minFilter),
            w.push(C.anisotropy),
            w.push(C.internalFormat),
            w.push(C.format),
            w.push(C.type),
            w.push(C.generateMipmaps),
            w.push(C.premultiplyAlpha),
            w.push(C.flipY),
            w.push(C.unpackAlignment),
            w.push(C.encoding),
            w.join()
        );
    }
    function ne(C, w) {
        const H = n.get(C);
        if ((C.isVideoTexture && Ge(C), C.isRenderTargetTexture === !1 && C.version > 0 && H.__version !== C.version)) {
            const Q = C.image;
            if (Q === null) console.warn('THREE.WebGLRenderer: Texture marked for update but no image data found.');
            else if (Q.complete === !1) console.warn('THREE.WebGLRenderer: Texture marked for update but image is incomplete');
            else {
                Me(H, C, w);
                return;
            }
        }
        t.bindTexture(3553, H.__webglTexture, 33984 + w);
    }
    function _e(C, w) {
        const H = n.get(C);
        if (C.version > 0 && H.__version !== C.version) {
            Me(H, C, w);
            return;
        }
        t.bindTexture(35866, H.__webglTexture, 33984 + w);
    }
    function ce(C, w) {
        const H = n.get(C);
        if (C.version > 0 && H.__version !== C.version) {
            Me(H, C, w);
            return;
        }
        t.bindTexture(32879, H.__webglTexture, 33984 + w);
    }
    function W(C, w) {
        const H = n.get(C);
        if (C.version > 0 && H.__version !== C.version) {
            xe(H, C, w);
            return;
        }
        t.bindTexture(34067, H.__webglTexture, 33984 + w);
    }
    const J = { [no]: 10497, [Ot]: 33071, [io]: 33648 },
        ie = { [gt]: 9728, [Wo]: 9984, [ms]: 9986, [Pt]: 9729, [tu]: 9985, [Zi]: 9987 };
    function oe(C, w, H) {
        if (
            (H
                ? (r.texParameteri(C, 10242, J[w.wrapS]),
                  r.texParameteri(C, 10243, J[w.wrapT]),
                  (C === 32879 || C === 35866) && r.texParameteri(C, 32882, J[w.wrapR]),
                  r.texParameteri(C, 10240, ie[w.magFilter]),
                  r.texParameteri(C, 10241, ie[w.minFilter]))
                : (r.texParameteri(C, 10242, 33071),
                  r.texParameteri(C, 10243, 33071),
                  (C === 32879 || C === 35866) && r.texParameteri(C, 32882, 33071),
                  (w.wrapS !== Ot || w.wrapT !== Ot) && console.warn('THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping.'),
                  r.texParameteri(C, 10240, E(w.magFilter)),
                  r.texParameteri(C, 10241, E(w.minFilter)),
                  w.minFilter !== gt &&
                      w.minFilter !== Pt &&
                      console.warn('THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.')),
            e.has('EXT_texture_filter_anisotropic') === !0)
        ) {
            const Q = e.get('EXT_texture_filter_anisotropic');
            if (
                w.magFilter === gt ||
                (w.minFilter !== ms && w.minFilter !== Zi) ||
                (w.type === Nn && e.has('OES_texture_float_linear') === !1) ||
                (o === !1 && w.type === $i && e.has('OES_texture_half_float_linear') === !1)
            )
                return;
            (w.anisotropy > 1 || n.get(w).__currentAnisotropy) &&
                (r.texParameterf(C, Q.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(w.anisotropy, i.getMaxAnisotropy())), (n.get(w).__currentAnisotropy = w.anisotropy));
        }
    }
    function V(C, w) {
        let H = !1;
        C.__webglInit === void 0 && ((C.__webglInit = !0), w.addEventListener('dispose', N));
        const Q = w.source;
        let te = m.get(Q);
        te === void 0 && ((te = {}), m.set(Q, te));
        const ae = K(w);
        if (ae !== C.__cacheKey) {
            te[ae] === void 0 && ((te[ae] = { texture: r.createTexture(), usedTimes: 0 }), a.memory.textures++, (H = !0)), te[ae].usedTimes++;
            const L = te[C.__cacheKey];
            L !== void 0 && (te[C.__cacheKey].usedTimes--, L.usedTimes === 0 && U(w)), (C.__cacheKey = ae), (C.__webglTexture = te[ae].texture);
        }
        return H;
    }
    function Me(C, w, H) {
        let Q = 3553;
        (w.isDataArrayTexture || w.isCompressedArrayTexture) && (Q = 35866), w.isData3DTexture && (Q = 32879);
        const te = V(C, w),
            ae = w.source;
        t.bindTexture(Q, C.__webglTexture, 33984 + H);
        const L = n.get(ae);
        if (ae.version !== L.__version || te === !0) {
            t.activeTexture(33984 + H), r.pixelStorei(37440, w.flipY), r.pixelStorei(37441, w.premultiplyAlpha), r.pixelStorei(3317, w.unpackAlignment), r.pixelStorei(37443, 0);
            const Z = M(w) && v(w.image) === !1;
            let G = x(w.image, Z, !1, u);
            G = ot(w, G);
            const le = v(G) || o,
                he = s.convert(w.format, w.encoding);
            let pe = s.convert(w.type),
                ue = A(w.internalFormat, he, pe, w.encoding, w.isVideoTexture);
            oe(Q, w, le);
            let de;
            const we = w.mipmaps,
                Le = o && w.isVideoTexture !== !0,
                Ye = L.__version === void 0 || te === !0,
                I = S(w, G, le);
            if (w.isDepthTexture)
                (ue = 6402),
                    o
                        ? w.type === Nn
                            ? (ue = 36012)
                            : w.type === Un
                            ? (ue = 33190)
                            : w.type === xi
                            ? (ue = 35056)
                            : (ue = 33189)
                        : w.type === Nn && console.error('WebGLRenderer: Floating point depth texture requires WebGL2.'),
                    w.format === On &&
                        ue === 6402 &&
                        w.type !== Tl &&
                        w.type !== Un &&
                        (console.warn('THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture.'), (w.type = Un), (pe = s.convert(w.type))),
                    w.format === Ei &&
                        ue === 6402 &&
                        ((ue = 34041), w.type !== xi && (console.warn('THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture.'), (w.type = xi), (pe = s.convert(w.type)))),
                    Ye && (Le ? t.texStorage2D(3553, 1, ue, G.width, G.height) : t.texImage2D(3553, 0, ue, G.width, G.height, 0, he, pe, null));
            else if (w.isDataTexture)
                if (we.length > 0 && le) {
                    Le && Ye && t.texStorage2D(3553, I, ue, we[0].width, we[0].height);
                    for (let X = 0, ee = we.length; X < ee; X++)
                        (de = we[X]), Le ? t.texSubImage2D(3553, X, 0, 0, de.width, de.height, he, pe, de.data) : t.texImage2D(3553, X, ue, de.width, de.height, 0, he, pe, de.data);
                    w.generateMipmaps = !1;
                } else
                    Le
                        ? (Ye && t.texStorage2D(3553, I, ue, G.width, G.height), t.texSubImage2D(3553, 0, 0, 0, G.width, G.height, he, pe, G.data))
                        : t.texImage2D(3553, 0, ue, G.width, G.height, 0, he, pe, G.data);
            else if (w.isCompressedTexture)
                if (w.isCompressedArrayTexture) {
                    Le && Ye && t.texStorage3D(35866, I, ue, we[0].width, we[0].height, G.depth);
                    for (let X = 0, ee = we.length; X < ee; X++)
                        (de = we[X]),
                            w.format !== Ft
                                ? he !== null
                                    ? Le
                                        ? t.compressedTexSubImage3D(35866, X, 0, 0, 0, de.width, de.height, G.depth, he, de.data, 0, 0)
                                        : t.compressedTexImage3D(35866, X, ue, de.width, de.height, G.depth, 0, de.data, 0, 0)
                                    : console.warn('THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()')
                                : Le
                                ? t.texSubImage3D(35866, X, 0, 0, 0, de.width, de.height, G.depth, he, pe, de.data)
                                : t.texImage3D(35866, X, ue, de.width, de.height, G.depth, 0, he, pe, de.data);
                } else {
                    Le && Ye && t.texStorage2D(3553, I, ue, we[0].width, we[0].height);
                    for (let X = 0, ee = we.length; X < ee; X++)
                        (de = we[X]),
                            w.format !== Ft
                                ? he !== null
                                    ? Le
                                        ? t.compressedTexSubImage2D(3553, X, 0, 0, de.width, de.height, he, de.data)
                                        : t.compressedTexImage2D(3553, X, ue, de.width, de.height, 0, de.data)
                                    : console.warn('THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()')
                                : Le
                                ? t.texSubImage2D(3553, X, 0, 0, de.width, de.height, he, pe, de.data)
                                : t.texImage2D(3553, X, ue, de.width, de.height, 0, he, pe, de.data);
                }
            else if (w.isDataArrayTexture)
                Le
                    ? (Ye && t.texStorage3D(35866, I, ue, G.width, G.height, G.depth), t.texSubImage3D(35866, 0, 0, 0, 0, G.width, G.height, G.depth, he, pe, G.data))
                    : t.texImage3D(35866, 0, ue, G.width, G.height, G.depth, 0, he, pe, G.data);
            else if (w.isData3DTexture)
                Le
                    ? (Ye && t.texStorage3D(32879, I, ue, G.width, G.height, G.depth), t.texSubImage3D(32879, 0, 0, 0, 0, G.width, G.height, G.depth, he, pe, G.data))
                    : t.texImage3D(32879, 0, ue, G.width, G.height, G.depth, 0, he, pe, G.data);
            else if (w.isFramebufferTexture) {
                if (Ye)
                    if (Le) t.texStorage2D(3553, I, ue, G.width, G.height);
                    else {
                        let X = G.width,
                            ee = G.height;
                        for (let fe = 0; fe < I; fe++) t.texImage2D(3553, fe, ue, X, ee, 0, he, pe, null), (X >>= 1), (ee >>= 1);
                    }
            } else if (we.length > 0 && le) {
                Le && Ye && t.texStorage2D(3553, I, ue, we[0].width, we[0].height);
                for (let X = 0, ee = we.length; X < ee; X++) (de = we[X]), Le ? t.texSubImage2D(3553, X, 0, 0, he, pe, de) : t.texImage2D(3553, X, ue, he, pe, de);
                w.generateMipmaps = !1;
            } else Le ? (Ye && t.texStorage2D(3553, I, ue, G.width, G.height), t.texSubImage2D(3553, 0, 0, 0, he, pe, G)) : t.texImage2D(3553, 0, ue, he, pe, G);
            b(w, le) && P(Q), (L.__version = ae.version), w.onUpdate && w.onUpdate(w);
        }
        C.__version = w.version;
    }
    function xe(C, w, H) {
        if (w.image.length !== 6) return;
        const Q = V(C, w),
            te = w.source;
        t.bindTexture(34067, C.__webglTexture, 33984 + H);
        const ae = n.get(te);
        if (te.version !== ae.__version || Q === !0) {
            t.activeTexture(33984 + H), r.pixelStorei(37440, w.flipY), r.pixelStorei(37441, w.premultiplyAlpha), r.pixelStorei(3317, w.unpackAlignment), r.pixelStorei(37443, 0);
            const L = w.isCompressedTexture || w.image[0].isCompressedTexture,
                Z = w.image[0] && w.image[0].isDataTexture,
                G = [];
            for (let X = 0; X < 6; X++) !L && !Z ? (G[X] = x(w.image[X], !1, !0, l)) : (G[X] = Z ? w.image[X].image : w.image[X]), (G[X] = ot(w, G[X]));
            const le = G[0],
                he = v(le) || o,
                pe = s.convert(w.format, w.encoding),
                ue = s.convert(w.type),
                de = A(w.internalFormat, pe, ue, w.encoding),
                we = o && w.isVideoTexture !== !0,
                Le = ae.__version === void 0 || Q === !0;
            let Ye = S(w, le, he);
            oe(34067, w, he);
            let I;
            if (L) {
                we && Le && t.texStorage2D(34067, Ye, de, le.width, le.height);
                for (let X = 0; X < 6; X++) {
                    I = G[X].mipmaps;
                    for (let ee = 0; ee < I.length; ee++) {
                        const fe = I[ee];
                        w.format !== Ft
                            ? pe !== null
                                ? we
                                    ? t.compressedTexSubImage2D(34069 + X, ee, 0, 0, fe.width, fe.height, pe, fe.data)
                                    : t.compressedTexImage2D(34069 + X, ee, de, fe.width, fe.height, 0, fe.data)
                                : console.warn('THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()')
                            : we
                            ? t.texSubImage2D(34069 + X, ee, 0, 0, fe.width, fe.height, pe, ue, fe.data)
                            : t.texImage2D(34069 + X, ee, de, fe.width, fe.height, 0, pe, ue, fe.data);
                    }
                }
            } else {
                (I = w.mipmaps), we && Le && (I.length > 0 && Ye++, t.texStorage2D(34067, Ye, de, G[0].width, G[0].height));
                for (let X = 0; X < 6; X++)
                    if (Z) {
                        we ? t.texSubImage2D(34069 + X, 0, 0, 0, G[X].width, G[X].height, pe, ue, G[X].data) : t.texImage2D(34069 + X, 0, de, G[X].width, G[X].height, 0, pe, ue, G[X].data);
                        for (let ee = 0; ee < I.length; ee++) {
                            const ge = I[ee].image[X].image;
                            we ? t.texSubImage2D(34069 + X, ee + 1, 0, 0, ge.width, ge.height, pe, ue, ge.data) : t.texImage2D(34069 + X, ee + 1, de, ge.width, ge.height, 0, pe, ue, ge.data);
                        }
                    } else {
                        we ? t.texSubImage2D(34069 + X, 0, 0, 0, pe, ue, G[X]) : t.texImage2D(34069 + X, 0, de, pe, ue, G[X]);
                        for (let ee = 0; ee < I.length; ee++) {
                            const fe = I[ee];
                            we ? t.texSubImage2D(34069 + X, ee + 1, 0, 0, pe, ue, fe.image[X]) : t.texImage2D(34069 + X, ee + 1, de, pe, ue, fe.image[X]);
                        }
                    }
            }
            b(w, he) && P(34067), (ae.__version = te.version), w.onUpdate && w.onUpdate(w);
        }
        C.__version = w.version;
    }
    function re(C, w, H, Q, te) {
        const ae = s.convert(H.format, H.encoding),
            L = s.convert(H.type),
            Z = A(H.internalFormat, ae, L, H.encoding);
        n.get(w).__hasExternalTextures ||
            (te === 32879 || te === 35866 ? t.texImage3D(te, 0, Z, w.width, w.height, w.depth, 0, ae, L, null) : t.texImage2D(te, 0, Z, w.width, w.height, 0, ae, L, null)),
            t.bindFramebuffer(36160, C),
            Oe(w)
                ? h.framebufferTexture2DMultisampleEXT(36160, Q, te, n.get(H).__webglTexture, 0, je(w))
                : (te === 3553 || (te >= 34069 && te <= 34074)) && r.framebufferTexture2D(36160, Q, te, n.get(H).__webglTexture, 0),
            t.bindFramebuffer(36160, null);
    }
    function ye(C, w, H) {
        if ((r.bindRenderbuffer(36161, C), w.depthBuffer && !w.stencilBuffer)) {
            let Q = 33189;
            if (H || Oe(w)) {
                const te = w.depthTexture;
                te && te.isDepthTexture && (te.type === Nn ? (Q = 36012) : te.type === Un && (Q = 33190));
                const ae = je(w);
                Oe(w) ? h.renderbufferStorageMultisampleEXT(36161, ae, Q, w.width, w.height) : r.renderbufferStorageMultisample(36161, ae, Q, w.width, w.height);
            } else r.renderbufferStorage(36161, Q, w.width, w.height);
            r.framebufferRenderbuffer(36160, 36096, 36161, C);
        } else if (w.depthBuffer && w.stencilBuffer) {
            const Q = je(w);
            H && Oe(w) === !1
                ? r.renderbufferStorageMultisample(36161, Q, 35056, w.width, w.height)
                : Oe(w)
                ? h.renderbufferStorageMultisampleEXT(36161, Q, 35056, w.width, w.height)
                : r.renderbufferStorage(36161, 34041, w.width, w.height),
                r.framebufferRenderbuffer(36160, 33306, 36161, C);
        } else {
            const Q = w.isWebGLMultipleRenderTargets === !0 ? w.texture : [w.texture];
            for (let te = 0; te < Q.length; te++) {
                const ae = Q[te],
                    L = s.convert(ae.format, ae.encoding),
                    Z = s.convert(ae.type),
                    G = A(ae.internalFormat, L, Z, ae.encoding),
                    le = je(w);
                H && Oe(w) === !1
                    ? r.renderbufferStorageMultisample(36161, le, G, w.width, w.height)
                    : Oe(w)
                    ? h.renderbufferStorageMultisampleEXT(36161, le, G, w.width, w.height)
                    : r.renderbufferStorage(36161, G, w.width, w.height);
            }
        }
        r.bindRenderbuffer(36161, null);
    }
    function Fe(C, w) {
        if (w && w.isWebGLCubeRenderTarget) throw new Error('Depth Texture with cube render targets is not supported');
        if ((t.bindFramebuffer(36160, C), !(w.depthTexture && w.depthTexture.isDepthTexture))) throw new Error('renderTarget.depthTexture must be an instance of THREE.DepthTexture');
        (!n.get(w.depthTexture).__webglTexture || w.depthTexture.image.width !== w.width || w.depthTexture.image.height !== w.height) &&
            ((w.depthTexture.image.width = w.width), (w.depthTexture.image.height = w.height), (w.depthTexture.needsUpdate = !0)),
            ne(w.depthTexture, 0);
        const Q = n.get(w.depthTexture).__webglTexture,
            te = je(w);
        if (w.depthTexture.format === On) Oe(w) ? h.framebufferTexture2DMultisampleEXT(36160, 36096, 3553, Q, 0, te) : r.framebufferTexture2D(36160, 36096, 3553, Q, 0);
        else if (w.depthTexture.format === Ei) Oe(w) ? h.framebufferTexture2DMultisampleEXT(36160, 33306, 3553, Q, 0, te) : r.framebufferTexture2D(36160, 33306, 3553, Q, 0);
        else throw new Error('Unknown depthTexture format');
    }
    function me(C) {
        const w = n.get(C),
            H = C.isWebGLCubeRenderTarget === !0;
        if (C.depthTexture && !w.__autoAllocateDepthBuffer) {
            if (H) throw new Error('target.depthTexture not supported in Cube render targets');
            Fe(w.__webglFramebuffer, C);
        } else if (H) {
            w.__webglDepthbuffer = [];
            for (let Q = 0; Q < 6; Q++) t.bindFramebuffer(36160, w.__webglFramebuffer[Q]), (w.__webglDepthbuffer[Q] = r.createRenderbuffer()), ye(w.__webglDepthbuffer[Q], C, !1);
        } else t.bindFramebuffer(36160, w.__webglFramebuffer), (w.__webglDepthbuffer = r.createRenderbuffer()), ye(w.__webglDepthbuffer, C, !1);
        t.bindFramebuffer(36160, null);
    }
    function Ae(C, w, H) {
        const Q = n.get(C);
        w !== void 0 && re(Q.__webglFramebuffer, C, C.texture, 36064, 3553), H !== void 0 && me(C);
    }
    function Xe(C) {
        const w = C.texture,
            H = n.get(C),
            Q = n.get(w);
        C.addEventListener('dispose', O),
            C.isWebGLMultipleRenderTargets !== !0 && (Q.__webglTexture === void 0 && (Q.__webglTexture = r.createTexture()), (Q.__version = w.version), a.memory.textures++);
        const te = C.isWebGLCubeRenderTarget === !0,
            ae = C.isWebGLMultipleRenderTargets === !0,
            L = v(C) || o;
        if (te) {
            H.__webglFramebuffer = [];
            for (let Z = 0; Z < 6; Z++) H.__webglFramebuffer[Z] = r.createFramebuffer();
        } else {
            if (((H.__webglFramebuffer = r.createFramebuffer()), ae))
                if (i.drawBuffers) {
                    const Z = C.texture;
                    for (let G = 0, le = Z.length; G < le; G++) {
                        const he = n.get(Z[G]);
                        he.__webglTexture === void 0 && ((he.__webglTexture = r.createTexture()), a.memory.textures++);
                    }
                } else console.warn('THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.');
            if (o && C.samples > 0 && Oe(C) === !1) {
                const Z = ae ? w : [w];
                (H.__webglMultisampledFramebuffer = r.createFramebuffer()), (H.__webglColorRenderbuffer = []), t.bindFramebuffer(36160, H.__webglMultisampledFramebuffer);
                for (let G = 0; G < Z.length; G++) {
                    const le = Z[G];
                    (H.__webglColorRenderbuffer[G] = r.createRenderbuffer()), r.bindRenderbuffer(36161, H.__webglColorRenderbuffer[G]);
                    const he = s.convert(le.format, le.encoding),
                        pe = s.convert(le.type),
                        ue = A(le.internalFormat, he, pe, le.encoding, C.isXRRenderTarget === !0),
                        de = je(C);
                    r.renderbufferStorageMultisample(36161, de, ue, C.width, C.height), r.framebufferRenderbuffer(36160, 36064 + G, 36161, H.__webglColorRenderbuffer[G]);
                }
                r.bindRenderbuffer(36161, null), C.depthBuffer && ((H.__webglDepthRenderbuffer = r.createRenderbuffer()), ye(H.__webglDepthRenderbuffer, C, !0)), t.bindFramebuffer(36160, null);
            }
        }
        if (te) {
            t.bindTexture(34067, Q.__webglTexture), oe(34067, w, L);
            for (let Z = 0; Z < 6; Z++) re(H.__webglFramebuffer[Z], C, w, 36064, 34069 + Z);
            b(w, L) && P(34067), t.unbindTexture();
        } else if (ae) {
            const Z = C.texture;
            for (let G = 0, le = Z.length; G < le; G++) {
                const he = Z[G],
                    pe = n.get(he);
                t.bindTexture(3553, pe.__webglTexture), oe(3553, he, L), re(H.__webglFramebuffer, C, he, 36064 + G, 3553), b(he, L) && P(3553);
            }
            t.unbindTexture();
        } else {
            let Z = 3553;
            (C.isWebGL3DRenderTarget || C.isWebGLArrayRenderTarget) &&
                (o ? (Z = C.isWebGL3DRenderTarget ? 32879 : 35866) : console.error('THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.')),
                t.bindTexture(Z, Q.__webglTexture),
                oe(Z, w, L),
                re(H.__webglFramebuffer, C, w, 36064, Z),
                b(w, L) && P(Z),
                t.unbindTexture();
        }
        C.depthBuffer && me(C);
    }
    function We(C) {
        const w = v(C) || o,
            H = C.isWebGLMultipleRenderTargets === !0 ? C.texture : [C.texture];
        for (let Q = 0, te = H.length; Q < te; Q++) {
            const ae = H[Q];
            if (b(ae, w)) {
                const L = C.isWebGLCubeRenderTarget ? 34067 : 3553,
                    Z = n.get(ae).__webglTexture;
                t.bindTexture(L, Z), P(L), t.unbindTexture();
            }
        }
    }
    function Ze(C) {
        if (o && C.samples > 0 && Oe(C) === !1) {
            const w = C.isWebGLMultipleRenderTargets ? C.texture : [C.texture],
                H = C.width,
                Q = C.height;
            let te = 16384;
            const ae = [],
                L = C.stencilBuffer ? 33306 : 36096,
                Z = n.get(C),
                G = C.isWebGLMultipleRenderTargets === !0;
            if (G)
                for (let le = 0; le < w.length; le++)
                    t.bindFramebuffer(36160, Z.__webglMultisampledFramebuffer),
                        r.framebufferRenderbuffer(36160, 36064 + le, 36161, null),
                        t.bindFramebuffer(36160, Z.__webglFramebuffer),
                        r.framebufferTexture2D(36009, 36064 + le, 3553, null, 0);
            t.bindFramebuffer(36008, Z.__webglMultisampledFramebuffer), t.bindFramebuffer(36009, Z.__webglFramebuffer);
            for (let le = 0; le < w.length; le++) {
                ae.push(36064 + le), C.depthBuffer && ae.push(L);
                const he = Z.__ignoreDepthValues !== void 0 ? Z.__ignoreDepthValues : !1;
                if (
                    (he === !1 && (C.depthBuffer && (te |= 256), C.stencilBuffer && (te |= 1024)),
                    G && r.framebufferRenderbuffer(36008, 36064, 36161, Z.__webglColorRenderbuffer[le]),
                    he === !0 && (r.invalidateFramebuffer(36008, [L]), r.invalidateFramebuffer(36009, [L])),
                    G)
                ) {
                    const pe = n.get(w[le]).__webglTexture;
                    r.framebufferTexture2D(36009, 36064, 3553, pe, 0);
                }
                r.blitFramebuffer(0, 0, H, Q, 0, 0, H, Q, te, 9728), p && r.invalidateFramebuffer(36008, ae);
            }
            if ((t.bindFramebuffer(36008, null), t.bindFramebuffer(36009, null), G))
                for (let le = 0; le < w.length; le++) {
                    t.bindFramebuffer(36160, Z.__webglMultisampledFramebuffer), r.framebufferRenderbuffer(36160, 36064 + le, 36161, Z.__webglColorRenderbuffer[le]);
                    const he = n.get(w[le]).__webglTexture;
                    t.bindFramebuffer(36160, Z.__webglFramebuffer), r.framebufferTexture2D(36009, 36064 + le, 3553, he, 0);
                }
            t.bindFramebuffer(36009, Z.__webglMultisampledFramebuffer);
        }
    }
    function je(C) {
        return Math.min(f, C.samples);
    }
    function Oe(C) {
        const w = n.get(C);
        return o && C.samples > 0 && e.has('WEBGL_multisampled_render_to_texture') === !0 && w.__useRenderToTexture !== !1;
    }
    function Ge(C) {
        const w = a.render.frame;
        g.get(C) !== w && (g.set(C, w), C.update());
    }
    function ot(C, w) {
        const H = C.encoding,
            Q = C.format,
            te = C.type;
        return (
            C.isCompressedTexture === !0 ||
                C.isVideoTexture === !0 ||
                C.format === ro ||
                (H !== Bn &&
                    (H === ke
                        ? o === !1
                            ? e.has('EXT_sRGB') === !0 && Q === Ft
                                ? ((C.format = ro), (C.minFilter = Pt), (C.generateMipmaps = !1))
                                : (w = Rl.sRGBToLinear(w))
                            : (Q !== Ft || te !== Fn) && console.warn('THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.')
                        : console.error('THREE.WebGLTextures: Unsupported texture encoding:', H))),
            w
        );
    }
    (this.allocateTextureUnit = k),
        (this.resetTextureUnits = Y),
        (this.setTexture2D = ne),
        (this.setTexture2DArray = _e),
        (this.setTexture3D = ce),
        (this.setTextureCube = W),
        (this.rebindTextures = Ae),
        (this.setupRenderTarget = Xe),
        (this.updateRenderTargetMipmap = We),
        (this.updateMultisampleRenderTarget = Ze),
        (this.setupDepthRenderbuffer = me),
        (this.setupFrameBufferTexture = re),
        (this.useMultisampledRTT = Oe);
}
function Cm(r, e, t) {
    const n = t.isWebGL2;
    function i(s, a = null) {
        let o;
        if (s === Fn) return 5121;
        if (s === su) return 32819;
        if (s === ou) return 32820;
        if (s === nu) return 5120;
        if (s === iu) return 5122;
        if (s === Tl) return 5123;
        if (s === ru) return 5124;
        if (s === Un) return 5125;
        if (s === Nn) return 5126;
        if (s === $i) return n ? 5131 : ((o = e.get('OES_texture_half_float')), o !== null ? o.HALF_FLOAT_OES : null);
        if (s === au) return 6406;
        if (s === Ft) return 6408;
        if (s === lu) return 6409;
        if (s === cu) return 6410;
        if (s === On) return 6402;
        if (s === Ei) return 34041;
        if (s === ro) return (o = e.get('EXT_sRGB')), o !== null ? o.SRGB_ALPHA_EXT : null;
        if (s === uu) return 6403;
        if (s === fu) return 36244;
        if (s === hu) return 33319;
        if (s === du) return 33320;
        if (s === pu) return 36249;
        if (s === gs || s === _s || s === xs || s === vs)
            if (a === ke)
                if (((o = e.get('WEBGL_compressed_texture_s3tc_srgb')), o !== null)) {
                    if (s === gs) return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;
                    if (s === _s) return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
                    if (s === xs) return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
                    if (s === vs) return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
                } else return null;
            else if (((o = e.get('WEBGL_compressed_texture_s3tc')), o !== null)) {
                if (s === gs) return o.COMPRESSED_RGB_S3TC_DXT1_EXT;
                if (s === _s) return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;
                if (s === xs) return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;
                if (s === vs) return o.COMPRESSED_RGBA_S3TC_DXT5_EXT;
            } else return null;
        if (s === qo || s === Xo || s === jo || s === Yo)
            if (((o = e.get('WEBGL_compressed_texture_pvrtc')), o !== null)) {
                if (s === qo) return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
                if (s === Xo) return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
                if (s === jo) return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
                if (s === Yo) return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
            } else return null;
        if (s === mu) return (o = e.get('WEBGL_compressed_texture_etc1')), o !== null ? o.COMPRESSED_RGB_ETC1_WEBGL : null;
        if (s === Ko || s === Zo)
            if (((o = e.get('WEBGL_compressed_texture_etc')), o !== null)) {
                if (s === Ko) return a === ke ? o.COMPRESSED_SRGB8_ETC2 : o.COMPRESSED_RGB8_ETC2;
                if (s === Zo) return a === ke ? o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : o.COMPRESSED_RGBA8_ETC2_EAC;
            } else return null;
        if (s === $o || s === Jo || s === Qo || s === ea || s === ta || s === na || s === ia || s === ra || s === sa || s === oa || s === aa || s === la || s === ca || s === ua)
            if (((o = e.get('WEBGL_compressed_texture_astc')), o !== null)) {
                if (s === $o) return a === ke ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : o.COMPRESSED_RGBA_ASTC_4x4_KHR;
                if (s === Jo) return a === ke ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : o.COMPRESSED_RGBA_ASTC_5x4_KHR;
                if (s === Qo) return a === ke ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : o.COMPRESSED_RGBA_ASTC_5x5_KHR;
                if (s === ea) return a === ke ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : o.COMPRESSED_RGBA_ASTC_6x5_KHR;
                if (s === ta) return a === ke ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : o.COMPRESSED_RGBA_ASTC_6x6_KHR;
                if (s === na) return a === ke ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : o.COMPRESSED_RGBA_ASTC_8x5_KHR;
                if (s === ia) return a === ke ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : o.COMPRESSED_RGBA_ASTC_8x6_KHR;
                if (s === ra) return a === ke ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : o.COMPRESSED_RGBA_ASTC_8x8_KHR;
                if (s === sa) return a === ke ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : o.COMPRESSED_RGBA_ASTC_10x5_KHR;
                if (s === oa) return a === ke ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : o.COMPRESSED_RGBA_ASTC_10x6_KHR;
                if (s === aa) return a === ke ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : o.COMPRESSED_RGBA_ASTC_10x8_KHR;
                if (s === la) return a === ke ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : o.COMPRESSED_RGBA_ASTC_10x10_KHR;
                if (s === ca) return a === ke ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : o.COMPRESSED_RGBA_ASTC_12x10_KHR;
                if (s === ua) return a === ke ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : o.COMPRESSED_RGBA_ASTC_12x12_KHR;
            } else return null;
        if (s === ys)
            if (((o = e.get('EXT_texture_compression_bptc')), o !== null)) {
                if (s === ys) return a === ke ? o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : o.COMPRESSED_RGBA_BPTC_UNORM_EXT;
            } else return null;
        if (s === gu || s === fa || s === ha || s === da)
            if (((o = e.get('EXT_texture_compression_rgtc')), o !== null)) {
                if (s === ys) return o.COMPRESSED_RED_RGTC1_EXT;
                if (s === fa) return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;
                if (s === ha) return o.COMPRESSED_RED_GREEN_RGTC2_EXT;
                if (s === da) return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
            } else return null;
        return s === xi ? (n ? 34042 : ((o = e.get('WEBGL_depth_texture')), o !== null ? o.UNSIGNED_INT_24_8_WEBGL : null)) : r[s] !== void 0 ? r[s] : null;
    }
    return { convert: i };
}
class Pm extends Lt {
    constructor(e = []) {
        super(), (this.isArrayCamera = !0), (this.cameras = e);
    }
}
class Lr extends ht {
    constructor() {
        super(), (this.isGroup = !0), (this.type = 'Group');
    }
}
const Lm = { type: 'move' };
class ks {
    constructor() {
        (this._targetRay = null), (this._grip = null), (this._hand = null);
    }
    getHandSpace() {
        return (
            this._hand === null && ((this._hand = new Lr()), (this._hand.matrixAutoUpdate = !1), (this._hand.visible = !1), (this._hand.joints = {}), (this._hand.inputState = { pinching: !1 })),
            this._hand
        );
    }
    getTargetRaySpace() {
        return (
            this._targetRay === null &&
                ((this._targetRay = new Lr()),
                (this._targetRay.matrixAutoUpdate = !1),
                (this._targetRay.visible = !1),
                (this._targetRay.hasLinearVelocity = !1),
                (this._targetRay.linearVelocity = new R()),
                (this._targetRay.hasAngularVelocity = !1),
                (this._targetRay.angularVelocity = new R())),
            this._targetRay
        );
    }
    getGripSpace() {
        return (
            this._grip === null &&
                ((this._grip = new Lr()),
                (this._grip.matrixAutoUpdate = !1),
                (this._grip.visible = !1),
                (this._grip.hasLinearVelocity = !1),
                (this._grip.linearVelocity = new R()),
                (this._grip.hasAngularVelocity = !1),
                (this._grip.angularVelocity = new R())),
            this._grip
        );
    }
    dispatchEvent(e) {
        return this._targetRay !== null && this._targetRay.dispatchEvent(e), this._grip !== null && this._grip.dispatchEvent(e), this._hand !== null && this._hand.dispatchEvent(e), this;
    }
    connect(e) {
        if (e && e.hand) {
            const t = this._hand;
            if (t) for (const n of e.hand.values()) this._getHandJoint(t, n);
        }
        return this.dispatchEvent({ type: 'connected', data: e }), this;
    }
    disconnect(e) {
        return (
            this.dispatchEvent({ type: 'disconnected', data: e }),
            this._targetRay !== null && (this._targetRay.visible = !1),
            this._grip !== null && (this._grip.visible = !1),
            this._hand !== null && (this._hand.visible = !1),
            this
        );
    }
    update(e, t, n) {
        let i = null,
            s = null,
            a = null;
        const o = this._targetRay,
            c = this._grip,
            l = this._hand;
        if (e && t.session.visibilityState !== 'visible-blurred') {
            if (l && e.hand) {
                a = !0;
                for (const _ of e.hand.values()) {
                    const m = t.getJointPose(_, n),
                        d = this._getHandJoint(l, _);
                    m !== null && (d.matrix.fromArray(m.transform.matrix), d.matrix.decompose(d.position, d.rotation, d.scale), (d.jointRadius = m.radius)), (d.visible = m !== null);
                }
                const u = l.joints['index-finger-tip'],
                    f = l.joints['thumb-tip'],
                    h = u.position.distanceTo(f.position),
                    p = 0.02,
                    g = 0.005;
                l.inputState.pinching && h > p + g
                    ? ((l.inputState.pinching = !1), this.dispatchEvent({ type: 'pinchend', handedness: e.handedness, target: this }))
                    : !l.inputState.pinching && h <= p - g && ((l.inputState.pinching = !0), this.dispatchEvent({ type: 'pinchstart', handedness: e.handedness, target: this }));
            } else
                c !== null &&
                    e.gripSpace &&
                    ((s = t.getPose(e.gripSpace, n)),
                    s !== null &&
                        (c.matrix.fromArray(s.transform.matrix),
                        c.matrix.decompose(c.position, c.rotation, c.scale),
                        s.linearVelocity ? ((c.hasLinearVelocity = !0), c.linearVelocity.copy(s.linearVelocity)) : (c.hasLinearVelocity = !1),
                        s.angularVelocity ? ((c.hasAngularVelocity = !0), c.angularVelocity.copy(s.angularVelocity)) : (c.hasAngularVelocity = !1)));
            o !== null &&
                ((i = t.getPose(e.targetRaySpace, n)),
                i === null && s !== null && (i = s),
                i !== null &&
                    (o.matrix.fromArray(i.transform.matrix),
                    o.matrix.decompose(o.position, o.rotation, o.scale),
                    i.linearVelocity ? ((o.hasLinearVelocity = !0), o.linearVelocity.copy(i.linearVelocity)) : (o.hasLinearVelocity = !1),
                    i.angularVelocity ? ((o.hasAngularVelocity = !0), o.angularVelocity.copy(i.angularVelocity)) : (o.hasAngularVelocity = !1),
                    this.dispatchEvent(Lm)));
        }
        return o !== null && (o.visible = i !== null), c !== null && (c.visible = s !== null), l !== null && (l.visible = a !== null), this;
    }
    _getHandJoint(e, t) {
        if (e.joints[t.jointName] === void 0) {
            const n = new Lr();
            (n.matrixAutoUpdate = !1), (n.visible = !1), (e.joints[t.jointName] = n), e.add(n);
        }
        return e.joints[t.jointName];
    }
}
class Rm extends vt {
    constructor(e, t, n, i, s, a, o, c, l, u) {
        if (((u = u !== void 0 ? u : On), u !== On && u !== Ei)) throw new Error('DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat');
        n === void 0 && u === On && (n = Un),
            n === void 0 && u === Ei && (n = xi),
            super(null, i, s, a, o, c, u, n, l),
            (this.isDepthTexture = !0),
            (this.image = { width: e, height: t }),
            (this.magFilter = o !== void 0 ? o : gt),
            (this.minFilter = c !== void 0 ? c : gt),
            (this.flipY = !1),
            (this.generateMipmaps = !1);
    }
}
class Dm extends Vn {
    constructor(e, t) {
        super();
        const n = this;
        let i = null,
            s = 1,
            a = null,
            o = 'local-floor',
            c = 1,
            l = null,
            u = null,
            f = null,
            h = null,
            p = null,
            g = null;
        const _ = t.getContextAttributes();
        let m = null,
            d = null;
        const y = [],
            x = [],
            v = new Set(),
            M = new Map(),
            b = new Lt();
        b.layers.enable(1), (b.viewport = new it());
        const P = new Lt();
        P.layers.enable(2), (P.viewport = new it());
        const A = [b, P],
            S = new Pm();
        S.layers.enable(1), S.layers.enable(2);
        let E = null,
            N = null;
        (this.cameraAutoUpdate = !0),
            (this.enabled = !1),
            (this.isPresenting = !1),
            (this.getController = function (W) {
                let J = y[W];
                return J === void 0 && ((J = new ks()), (y[W] = J)), J.getTargetRaySpace();
            }),
            (this.getControllerGrip = function (W) {
                let J = y[W];
                return J === void 0 && ((J = new ks()), (y[W] = J)), J.getGripSpace();
            }),
            (this.getHand = function (W) {
                let J = y[W];
                return J === void 0 && ((J = new ks()), (y[W] = J)), J.getHandSpace();
            });
        function O(W) {
            const J = x.indexOf(W.inputSource);
            if (J === -1) return;
            const ie = y[J];
            ie !== void 0 && ie.dispatchEvent({ type: W.type, data: W.inputSource });
        }
        function D() {
            i.removeEventListener('select', O),
                i.removeEventListener('selectstart', O),
                i.removeEventListener('selectend', O),
                i.removeEventListener('squeeze', O),
                i.removeEventListener('squeezestart', O),
                i.removeEventListener('squeezeend', O),
                i.removeEventListener('end', D),
                i.removeEventListener('inputsourceschange', U);
            for (let W = 0; W < y.length; W++) {
                const J = x[W];
                J !== null && ((x[W] = null), y[W].disconnect(J));
            }
            (E = null), (N = null), e.setRenderTarget(m), (p = null), (h = null), (f = null), (i = null), (d = null), ce.stop(), (n.isPresenting = !1), n.dispatchEvent({ type: 'sessionend' });
        }
        (this.setFramebufferScaleFactor = function (W) {
            (s = W), n.isPresenting === !0 && console.warn('THREE.WebXRManager: Cannot change framebuffer scale while presenting.');
        }),
            (this.setReferenceSpaceType = function (W) {
                (o = W), n.isPresenting === !0 && console.warn('THREE.WebXRManager: Cannot change reference space type while presenting.');
            }),
            (this.getReferenceSpace = function () {
                return l || a;
            }),
            (this.setReferenceSpace = function (W) {
                l = W;
            }),
            (this.getBaseLayer = function () {
                return h !== null ? h : p;
            }),
            (this.getBinding = function () {
                return f;
            }),
            (this.getFrame = function () {
                return g;
            }),
            (this.getSession = function () {
                return i;
            }),
            (this.setSession = async function (W) {
                if (((i = W), i !== null)) {
                    if (
                        ((m = e.getRenderTarget()),
                        i.addEventListener('select', O),
                        i.addEventListener('selectstart', O),
                        i.addEventListener('selectend', O),
                        i.addEventListener('squeeze', O),
                        i.addEventListener('squeezestart', O),
                        i.addEventListener('squeezeend', O),
                        i.addEventListener('end', D),
                        i.addEventListener('inputsourceschange', U),
                        _.xrCompatible !== !0 && (await t.makeXRCompatible()),
                        i.renderState.layers === void 0 || e.capabilities.isWebGL2 === !1)
                    ) {
                        const J = { antialias: i.renderState.layers === void 0 ? _.antialias : !0, alpha: _.alpha, depth: _.depth, stencil: _.stencil, framebufferScaleFactor: s };
                        (p = new XRWebGLLayer(i, t, J)),
                            i.updateRenderState({ baseLayer: p }),
                            (d = new zn(p.framebufferWidth, p.framebufferHeight, { format: Ft, type: Fn, encoding: e.outputEncoding, stencilBuffer: _.stencil }));
                    } else {
                        let J = null,
                            ie = null,
                            oe = null;
                        _.depth && ((oe = _.stencil ? 35056 : 33190), (J = _.stencil ? Ei : On), (ie = _.stencil ? xi : Un));
                        const V = { colorFormat: 32856, depthFormat: oe, scaleFactor: s };
                        (f = new XRWebGLBinding(i, t)),
                            (h = f.createProjectionLayer(V)),
                            i.updateRenderState({ layers: [h] }),
                            (d = new zn(h.textureWidth, h.textureHeight, {
                                format: Ft,
                                type: Fn,
                                depthTexture: new Rm(h.textureWidth, h.textureHeight, ie, void 0, void 0, void 0, void 0, void 0, void 0, J),
                                stencilBuffer: _.stencil,
                                encoding: e.outputEncoding,
                                samples: _.antialias ? 4 : 0,
                            }));
                        const Me = e.properties.get(d);
                        Me.__ignoreDepthValues = h.ignoreDepthValues;
                    }
                    (d.isXRRenderTarget = !0),
                        this.setFoveation(c),
                        (l = null),
                        (a = await i.requestReferenceSpace(o)),
                        ce.setContext(i),
                        ce.start(),
                        (n.isPresenting = !0),
                        n.dispatchEvent({ type: 'sessionstart' });
                }
            });
        function U(W) {
            for (let J = 0; J < W.removed.length; J++) {
                const ie = W.removed[J],
                    oe = x.indexOf(ie);
                oe >= 0 && ((x[oe] = null), y[oe].disconnect(ie));
            }
            for (let J = 0; J < W.added.length; J++) {
                const ie = W.added[J];
                let oe = x.indexOf(ie);
                if (oe === -1) {
                    for (let Me = 0; Me < y.length; Me++)
                        if (Me >= x.length) {
                            x.push(ie), (oe = Me);
                            break;
                        } else if (x[Me] === null) {
                            (x[Me] = ie), (oe = Me);
                            break;
                        }
                    if (oe === -1) break;
                }
                const V = y[oe];
                V && V.connect(ie);
            }
        }
        const B = new R(),
            $ = new R();
        function Y(W, J, ie) {
            B.setFromMatrixPosition(J.matrixWorld), $.setFromMatrixPosition(ie.matrixWorld);
            const oe = B.distanceTo($),
                V = J.projectionMatrix.elements,
                Me = ie.projectionMatrix.elements,
                xe = V[14] / (V[10] - 1),
                re = V[14] / (V[10] + 1),
                ye = (V[9] + 1) / V[5],
                Fe = (V[9] - 1) / V[5],
                me = (V[8] - 1) / V[0],
                Ae = (Me[8] + 1) / Me[0],
                Xe = xe * me,
                We = xe * Ae,
                Ze = oe / (-me + Ae),
                je = Ze * -me;
            J.matrixWorld.decompose(W.position, W.quaternion, W.scale),
                W.translateX(je),
                W.translateZ(Ze),
                W.matrixWorld.compose(W.position, W.quaternion, W.scale),
                W.matrixWorldInverse.copy(W.matrixWorld).invert();
            const Oe = xe + Ze,
                Ge = re + Ze,
                ot = Xe - je,
                C = We + (oe - je),
                w = ((ye * re) / Ge) * Oe,
                H = ((Fe * re) / Ge) * Oe;
            W.projectionMatrix.makePerspective(ot, C, w, H, Oe, Ge), W.projectionMatrixInverse.copy(W.projectionMatrix).invert();
        }
        function k(W, J) {
            J === null ? W.matrixWorld.copy(W.matrix) : W.matrixWorld.multiplyMatrices(J.matrixWorld, W.matrix), W.matrixWorldInverse.copy(W.matrixWorld).invert();
        }
        this.updateCamera = function (W) {
            if (i === null) return;
            (S.near = P.near = b.near = W.near),
                (S.far = P.far = b.far = W.far),
                (E !== S.near || N !== S.far) && (i.updateRenderState({ depthNear: S.near, depthFar: S.far }), (E = S.near), (N = S.far));
            const J = W.parent,
                ie = S.cameras;
            k(S, J);
            for (let oe = 0; oe < ie.length; oe++) k(ie[oe], J);
            ie.length === 2 ? Y(S, b, P) : S.projectionMatrix.copy(b.projectionMatrix), K(W, S, J);
        };
        function K(W, J, ie) {
            ie === null ? W.matrix.copy(J.matrixWorld) : (W.matrix.copy(ie.matrixWorld), W.matrix.invert(), W.matrix.multiply(J.matrixWorld)),
                W.matrix.decompose(W.position, W.quaternion, W.scale),
                W.updateMatrixWorld(!0);
            const oe = W.children;
            for (let V = 0, Me = oe.length; V < Me; V++) oe[V].updateMatrixWorld(!0);
            W.projectionMatrix.copy(J.projectionMatrix),
                W.projectionMatrixInverse.copy(J.projectionMatrixInverse),
                W.isPerspectiveCamera && ((W.fov = Qi * 2 * Math.atan(1 / W.projectionMatrix.elements[5])), (W.zoom = 1));
        }
        (this.getCamera = function () {
            return S;
        }),
            (this.getFoveation = function () {
                if (!(h === null && p === null)) return c;
            }),
            (this.setFoveation = function (W) {
                (c = W), h !== null && (h.fixedFoveation = W), p !== null && p.fixedFoveation !== void 0 && (p.fixedFoveation = W);
            }),
            (this.getPlanes = function () {
                return v;
            });
        let ne = null;
        function _e(W, J) {
            if (((u = J.getViewerPose(l || a)), (g = J), u !== null)) {
                const ie = u.views;
                p !== null && (e.setRenderTargetFramebuffer(d, p.framebuffer), e.setRenderTarget(d));
                let oe = !1;
                ie.length !== S.cameras.length && ((S.cameras.length = 0), (oe = !0));
                for (let V = 0; V < ie.length; V++) {
                    const Me = ie[V];
                    let xe = null;
                    if (p !== null) xe = p.getViewport(Me);
                    else {
                        const ye = f.getViewSubImage(h, Me);
                        (xe = ye.viewport), V === 0 && (e.setRenderTargetTextures(d, ye.colorTexture, h.ignoreDepthValues ? void 0 : ye.depthStencilTexture), e.setRenderTarget(d));
                    }
                    let re = A[V];
                    re === void 0 && ((re = new Lt()), re.layers.enable(V), (re.viewport = new it()), (A[V] = re)),
                        re.matrix.fromArray(Me.transform.matrix),
                        re.matrix.decompose(re.position, re.quaternion, re.scale),
                        re.projectionMatrix.fromArray(Me.projectionMatrix),
                        re.projectionMatrixInverse.copy(re.projectionMatrix).invert(),
                        re.viewport.set(xe.x, xe.y, xe.width, xe.height),
                        V === 0 && (S.matrix.copy(re.matrix), S.matrix.decompose(S.position, S.quaternion, S.scale)),
                        oe === !0 && S.cameras.push(re);
                }
            }
            for (let ie = 0; ie < y.length; ie++) {
                const oe = x[ie],
                    V = y[ie];
                oe !== null && V !== void 0 && V.update(oe, J, l || a);
            }
            if ((ne && ne(W, J), J.detectedPlanes)) {
                n.dispatchEvent({ type: 'planesdetected', data: J.detectedPlanes });
                let ie = null;
                for (const oe of v) J.detectedPlanes.has(oe) || (ie === null && (ie = []), ie.push(oe));
                if (ie !== null) for (const oe of ie) v.delete(oe), M.delete(oe), n.dispatchEvent({ type: 'planeremoved', data: oe });
                for (const oe of J.detectedPlanes)
                    if (!v.has(oe)) v.add(oe), M.set(oe, J.lastChangedTime), n.dispatchEvent({ type: 'planeadded', data: oe });
                    else {
                        const V = M.get(oe);
                        oe.lastChangedTime > V && (M.set(oe, oe.lastChangedTime), n.dispatchEvent({ type: 'planechanged', data: oe }));
                    }
            }
            g = null;
        }
        const ce = new Vl();
        ce.setAnimationLoop(_e),
            (this.setAnimationLoop = function (W) {
                ne = W;
            }),
            (this.dispose = function () {});
    }
}
function Im(r, e) {
    function t(m, d) {
        m.matrixAutoUpdate === !0 && m.updateMatrix(), d.value.copy(m.matrix);
    }
    function n(m, d) {
        d.color.getRGB(m.fogColor.value, Fl(r)), d.isFog ? ((m.fogNear.value = d.near), (m.fogFar.value = d.far)) : d.isFogExp2 && (m.fogDensity.value = d.density);
    }
    function i(m, d, y, x, v) {
        d.isMeshBasicMaterial || d.isMeshLambertMaterial
            ? s(m, d)
            : d.isMeshToonMaterial
            ? (s(m, d), f(m, d))
            : d.isMeshPhongMaterial
            ? (s(m, d), u(m, d))
            : d.isMeshStandardMaterial
            ? (s(m, d), h(m, d), d.isMeshPhysicalMaterial && p(m, d, v))
            : d.isMeshMatcapMaterial
            ? (s(m, d), g(m, d))
            : d.isMeshDepthMaterial
            ? s(m, d)
            : d.isMeshDistanceMaterial
            ? (s(m, d), _(m, d))
            : d.isMeshNormalMaterial
            ? s(m, d)
            : d.isLineBasicMaterial
            ? (a(m, d), d.isLineDashedMaterial && o(m, d))
            : d.isPointsMaterial
            ? c(m, d, y, x)
            : d.isSpriteMaterial
            ? l(m, d)
            : d.isShadowMaterial
            ? (m.color.value.copy(d.color), (m.opacity.value = d.opacity))
            : d.isShaderMaterial && (d.uniformsNeedUpdate = !1);
    }
    function s(m, d) {
        (m.opacity.value = d.opacity),
            d.color && m.diffuse.value.copy(d.color),
            d.emissive && m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),
            d.map && ((m.map.value = d.map), t(d.map, m.mapTransform)),
            d.alphaMap && ((m.alphaMap.value = d.alphaMap), t(d.alphaMap, m.alphaMapTransform)),
            d.bumpMap && ((m.bumpMap.value = d.bumpMap), t(d.bumpMap, m.bumpMapTransform), (m.bumpScale.value = d.bumpScale), d.side === ft && (m.bumpScale.value *= -1)),
            d.normalMap && ((m.normalMap.value = d.normalMap), t(d.normalMap, m.normalMapTransform), m.normalScale.value.copy(d.normalScale), d.side === ft && m.normalScale.value.negate()),
            d.displacementMap &&
                ((m.displacementMap.value = d.displacementMap),
                t(d.displacementMap, m.displacementMapTransform),
                (m.displacementScale.value = d.displacementScale),
                (m.displacementBias.value = d.displacementBias)),
            d.emissiveMap && ((m.emissiveMap.value = d.emissiveMap), t(d.emissiveMap, m.emissiveMapTransform)),
            d.specularMap && ((m.specularMap.value = d.specularMap), t(d.specularMap, m.specularMapTransform)),
            d.alphaTest > 0 && (m.alphaTest.value = d.alphaTest);
        const y = e.get(d).envMap;
        if (
            (y &&
                ((m.envMap.value = y),
                (m.flipEnvMap.value = y.isCubeTexture && y.isRenderTargetTexture === !1 ? -1 : 1),
                (m.reflectivity.value = d.reflectivity),
                (m.ior.value = d.ior),
                (m.refractionRatio.value = d.refractionRatio)),
            d.lightMap)
        ) {
            m.lightMap.value = d.lightMap;
            const x = r.useLegacyLights === !0 ? Math.PI : 1;
            (m.lightMapIntensity.value = d.lightMapIntensity * x), t(d.lightMap, m.lightMapTransform);
        }
        d.aoMap && ((m.aoMap.value = d.aoMap), (m.aoMapIntensity.value = d.aoMapIntensity), t(d.aoMap, m.aoMapTransform));
    }
    function a(m, d) {
        m.diffuse.value.copy(d.color), (m.opacity.value = d.opacity), d.map && ((m.map.value = d.map), t(d.map, m.mapTransform));
    }
    function o(m, d) {
        (m.dashSize.value = d.dashSize), (m.totalSize.value = d.dashSize + d.gapSize), (m.scale.value = d.scale);
    }
    function c(m, d, y, x) {
        m.diffuse.value.copy(d.color),
            (m.opacity.value = d.opacity),
            (m.size.value = d.size * y),
            (m.scale.value = x * 0.5),
            d.map && ((m.map.value = d.map), t(d.map, m.uvTransform)),
            d.alphaMap && (m.alphaMap.value = d.alphaMap),
            d.alphaTest > 0 && (m.alphaTest.value = d.alphaTest);
    }
    function l(m, d) {
        m.diffuse.value.copy(d.color),
            (m.opacity.value = d.opacity),
            (m.rotation.value = d.rotation),
            d.map && ((m.map.value = d.map), t(d.map, m.mapTransform)),
            d.alphaMap && (m.alphaMap.value = d.alphaMap),
            d.alphaTest > 0 && (m.alphaTest.value = d.alphaTest);
    }
    function u(m, d) {
        m.specular.value.copy(d.specular), (m.shininess.value = Math.max(d.shininess, 1e-4));
    }
    function f(m, d) {
        d.gradientMap && (m.gradientMap.value = d.gradientMap);
    }
    function h(m, d) {
        (m.metalness.value = d.metalness),
            d.metalnessMap && ((m.metalnessMap.value = d.metalnessMap), t(d.metalnessMap, m.metalnessMapTransform)),
            (m.roughness.value = d.roughness),
            d.roughnessMap && ((m.roughnessMap.value = d.roughnessMap), t(d.roughnessMap, m.roughnessMapTransform)),
            e.get(d).envMap && (m.envMapIntensity.value = d.envMapIntensity);
    }
    function p(m, d, y) {
        (m.ior.value = d.ior),
            d.sheen > 0 &&
                (m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),
                (m.sheenRoughness.value = d.sheenRoughness),
                d.sheenColorMap && ((m.sheenColorMap.value = d.sheenColorMap), t(d.sheenColorMap, m.sheenColorMapTransform)),
                d.sheenRoughnessMap && ((m.sheenRoughnessMap.value = d.sheenRoughnessMap), t(d.sheenRoughnessMap, m.sheenRoughnessMapTransform))),
            d.clearcoat > 0 &&
                ((m.clearcoat.value = d.clearcoat),
                (m.clearcoatRoughness.value = d.clearcoatRoughness),
                d.clearcoatMap && ((m.clearcoatMap.value = d.clearcoatMap), t(d.clearcoatMap, m.clearcoatMapTransform)),
                d.clearcoatRoughnessMap && ((m.clearcoatRoughnessMap.value = d.clearcoatRoughnessMap), t(d.clearcoatRoughnessMap, m.clearcoatRoughnessMapTransform)),
                d.clearcoatNormalMap &&
                    ((m.clearcoatNormalMap.value = d.clearcoatNormalMap),
                    t(d.clearcoatNormalMap, m.clearcoatNormalMapTransform),
                    m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),
                    d.side === ft && m.clearcoatNormalScale.value.negate())),
            d.iridescence > 0 &&
                ((m.iridescence.value = d.iridescence),
                (m.iridescenceIOR.value = d.iridescenceIOR),
                (m.iridescenceThicknessMinimum.value = d.iridescenceThicknessRange[0]),
                (m.iridescenceThicknessMaximum.value = d.iridescenceThicknessRange[1]),
                d.iridescenceMap && ((m.iridescenceMap.value = d.iridescenceMap), t(d.iridescenceMap, m.iridescenceMapTransform)),
                d.iridescenceThicknessMap && ((m.iridescenceThicknessMap.value = d.iridescenceThicknessMap), t(d.iridescenceThicknessMap, m.iridescenceThicknessMapTransform))),
            d.transmission > 0 &&
                ((m.transmission.value = d.transmission),
                (m.transmissionSamplerMap.value = y.texture),
                m.transmissionSamplerSize.value.set(y.width, y.height),
                d.transmissionMap && ((m.transmissionMap.value = d.transmissionMap), t(d.transmissionMap, m.transmissionMapTransform)),
                (m.thickness.value = d.thickness),
                d.thicknessMap && ((m.thicknessMap.value = d.thicknessMap), t(d.thicknessMap, m.thicknessMapTransform)),
                (m.attenuationDistance.value = d.attenuationDistance),
                m.attenuationColor.value.copy(d.attenuationColor)),
            (m.specularIntensity.value = d.specularIntensity),
            m.specularColor.value.copy(d.specularColor),
            d.specularColorMap && ((m.specularColorMap.value = d.specularColorMap), t(d.specularColorMap, m.specularColorMapTransform)),
            d.specularIntensityMap && ((m.specularIntensityMap.value = d.specularIntensityMap), t(d.specularIntensityMap, m.specularIntensityMapTransform));
    }
    function g(m, d) {
        d.matcap && (m.matcap.value = d.matcap);
    }
    function _(m, d) {
        const y = e.get(d).light;
        m.referencePosition.value.setFromMatrixPosition(y.matrixWorld), (m.nearDistance.value = y.shadow.camera.near), (m.farDistance.value = y.shadow.camera.far);
    }
    return { refreshFogUniforms: n, refreshMaterialUniforms: i };
}
function Um(r, e, t, n) {
    let i = {},
        s = {},
        a = [];
    const o = t.isWebGL2 ? r.getParameter(35375) : 0;
    function c(y, x) {
        const v = x.program;
        n.uniformBlockBinding(y, v);
    }
    function l(y, x) {
        let v = i[y.id];
        v === void 0 && (g(y), (v = u(y)), (i[y.id] = v), y.addEventListener('dispose', m));
        const M = x.program;
        n.updateUBOMapping(y, M);
        const b = e.render.frame;
        s[y.id] !== b && (h(y), (s[y.id] = b));
    }
    function u(y) {
        const x = f();
        y.__bindingPointIndex = x;
        const v = r.createBuffer(),
            M = y.__size,
            b = y.usage;
        return r.bindBuffer(35345, v), r.bufferData(35345, M, b), r.bindBuffer(35345, null), r.bindBufferBase(35345, x, v), v;
    }
    function f() {
        for (let y = 0; y < o; y++) if (a.indexOf(y) === -1) return a.push(y), y;
        return console.error('THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.'), 0;
    }
    function h(y) {
        const x = i[y.id],
            v = y.uniforms,
            M = y.__cache;
        r.bindBuffer(35345, x);
        for (let b = 0, P = v.length; b < P; b++) {
            const A = v[b];
            if (p(A, b, M) === !0) {
                const S = A.__offset,
                    E = Array.isArray(A.value) ? A.value : [A.value];
                let N = 0;
                for (let O = 0; O < E.length; O++) {
                    const D = E[O],
                        U = _(D);
                    typeof D == 'number'
                        ? ((A.__data[0] = D), r.bufferSubData(35345, S + N, A.__data))
                        : D.isMatrix3
                        ? ((A.__data[0] = D.elements[0]),
                          (A.__data[1] = D.elements[1]),
                          (A.__data[2] = D.elements[2]),
                          (A.__data[3] = D.elements[0]),
                          (A.__data[4] = D.elements[3]),
                          (A.__data[5] = D.elements[4]),
                          (A.__data[6] = D.elements[5]),
                          (A.__data[7] = D.elements[0]),
                          (A.__data[8] = D.elements[6]),
                          (A.__data[9] = D.elements[7]),
                          (A.__data[10] = D.elements[8]),
                          (A.__data[11] = D.elements[0]))
                        : (D.toArray(A.__data, N), (N += U.storage / Float32Array.BYTES_PER_ELEMENT));
                }
                r.bufferSubData(35345, S, A.__data);
            }
        }
        r.bindBuffer(35345, null);
    }
    function p(y, x, v) {
        const M = y.value;
        if (v[x] === void 0) {
            if (typeof M == 'number') v[x] = M;
            else {
                const b = Array.isArray(M) ? M : [M],
                    P = [];
                for (let A = 0; A < b.length; A++) P.push(b[A].clone());
                v[x] = P;
            }
            return !0;
        } else if (typeof M == 'number') {
            if (v[x] !== M) return (v[x] = M), !0;
        } else {
            const b = Array.isArray(v[x]) ? v[x] : [v[x]],
                P = Array.isArray(M) ? M : [M];
            for (let A = 0; A < b.length; A++) {
                const S = b[A];
                if (S.equals(P[A]) === !1) return S.copy(P[A]), !0;
            }
        }
        return !1;
    }
    function g(y) {
        const x = y.uniforms;
        let v = 0;
        const M = 16;
        let b = 0;
        for (let P = 0, A = x.length; P < A; P++) {
            const S = x[P],
                E = { boundary: 0, storage: 0 },
                N = Array.isArray(S.value) ? S.value : [S.value];
            for (let O = 0, D = N.length; O < D; O++) {
                const U = N[O],
                    B = _(U);
                (E.boundary += B.boundary), (E.storage += B.storage);
            }
            if (((S.__data = new Float32Array(E.storage / Float32Array.BYTES_PER_ELEMENT)), (S.__offset = v), P > 0)) {
                b = v % M;
                const O = M - b;
                b !== 0 && O - E.boundary < 0 && ((v += M - b), (S.__offset = v));
            }
            v += E.storage;
        }
        return (b = v % M), b > 0 && (v += M - b), (y.__size = v), (y.__cache = {}), this;
    }
    function _(y) {
        const x = { boundary: 0, storage: 0 };
        return (
            typeof y == 'number'
                ? ((x.boundary = 4), (x.storage = 4))
                : y.isVector2
                ? ((x.boundary = 8), (x.storage = 8))
                : y.isVector3 || y.isColor
                ? ((x.boundary = 16), (x.storage = 12))
                : y.isVector4
                ? ((x.boundary = 16), (x.storage = 16))
                : y.isMatrix3
                ? ((x.boundary = 48), (x.storage = 48))
                : y.isMatrix4
                ? ((x.boundary = 64), (x.storage = 64))
                : y.isTexture
                ? console.warn('THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.')
                : console.warn('THREE.WebGLRenderer: Unsupported uniform value type.', y),
            x
        );
    }
    function m(y) {
        const x = y.target;
        x.removeEventListener('dispose', m);
        const v = a.indexOf(x.__bindingPointIndex);
        a.splice(v, 1), r.deleteBuffer(i[x.id]), delete i[x.id], delete s[x.id];
    }
    function d() {
        for (const y in i) r.deleteBuffer(i[y]);
        (a = []), (i = {}), (s = {});
    }
    return { bind: c, update: l, dispose: d };
}
function Nm() {
    const r = er('canvas');
    return (r.style.display = 'block'), r;
}
class jl {
    constructor(e = {}) {
        const {
            canvas: t = Nm(),
            context: n = null,
            depth: i = !0,
            stencil: s = !0,
            alpha: a = !1,
            antialias: o = !1,
            premultipliedAlpha: c = !0,
            preserveDrawingBuffer: l = !1,
            powerPreference: u = 'default',
            failIfMajorPerformanceCaveat: f = !1,
        } = e;
        this.isWebGLRenderer = !0;
        let h;
        n !== null ? (h = n.getContextAttributes().alpha) : (h = a);
        let p = null,
            g = null;
        const _ = [],
            m = [];
        (this.domElement = t),
            (this.debug = { checkShaderErrors: !0, onShaderError: null }),
            (this.autoClear = !0),
            (this.autoClearColor = !0),
            (this.autoClearDepth = !0),
            (this.autoClearStencil = !0),
            (this.sortObjects = !0),
            (this.clippingPlanes = []),
            (this.localClippingEnabled = !1),
            (this.outputEncoding = Bn),
            (this.useLegacyLights = !0),
            (this.toneMapping = ln),
            (this.toneMappingExposure = 1);
        const d = this;
        let y = !1,
            x = 0,
            v = 0,
            M = null,
            b = -1,
            P = null;
        const A = new it(),
            S = new it();
        let E = null,
            N = t.width,
            O = t.height,
            D = 1,
            U = null,
            B = null;
        const $ = new it(0, 0, N, O),
            Y = new it(0, 0, N, O);
        let k = !1;
        const K = new Mo();
        let ne = !1,
            _e = !1,
            ce = null;
        const W = new He(),
            J = new R(),
            ie = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 };
        function oe() {
            return M === null ? D : 1;
        }
        let V = n;
        function Me(T, z) {
            for (let q = 0; q < T.length; q++) {
                const F = T[q],
                    j = t.getContext(F, z);
                if (j !== null) return j;
            }
            return null;
        }
        try {
            const T = { alpha: !0, depth: i, stencil: s, antialias: o, premultipliedAlpha: c, preserveDrawingBuffer: l, powerPreference: u, failIfMajorPerformanceCaveat: f };
            if (
                ('setAttribute' in t && t.setAttribute('data-engine', `three.js r${mo}`),
                t.addEventListener('webglcontextlost', de, !1),
                t.addEventListener('webglcontextrestored', we, !1),
                t.addEventListener('webglcontextcreationerror', Le, !1),
                V === null)
            ) {
                const z = ['webgl2', 'webgl', 'experimental-webgl'];
                if ((d.isWebGL1Renderer === !0 && z.shift(), (V = Me(z, T)), V === null))
                    throw Me(z) ? new Error('Error creating WebGL context with your selected attributes.') : new Error('Error creating WebGL context.');
            }
            V.getShaderPrecisionFormat === void 0 &&
                (V.getShaderPrecisionFormat = function () {
                    return { rangeMin: 1, rangeMax: 1, precision: 1 };
                });
        } catch (T) {
            throw (console.error('THREE.WebGLRenderer: ' + T.message), T);
        }
        let xe, re, ye, Fe, me, Ae, Xe, We, Ze, je, Oe, Ge, ot, C, w, H, Q, te, ae, L, Z, G, le, he;
        function pe() {
            (xe = new Xd(V)),
                (re = new Gd(V, xe, e)),
                xe.init(re),
                (G = new Cm(V, xe, re)),
                (ye = new Tm(V, xe, re)),
                (Fe = new Kd()),
                (me = new hm()),
                (Ae = new Am(V, xe, ye, me, re, G, Fe)),
                (Xe = new kd(d)),
                (We = new qd(d)),
                (Ze = new af(V, re)),
                (le = new Bd(V, xe, Ze, re)),
                (je = new jd(V, Ze, Fe, le)),
                (Oe = new Qd(V, je, Ze, Fe)),
                (ae = new Jd(V, re, Ae)),
                (H = new Vd(me)),
                (Ge = new fm(d, Xe, We, xe, re, le, H)),
                (ot = new Im(d, me)),
                (C = new pm()),
                (w = new ym(xe, re)),
                (te = new Fd(d, Xe, We, ye, Oe, h, c)),
                (Q = new Em(d, Oe, re)),
                (he = new Um(V, Fe, re, ye)),
                (L = new zd(V, xe, Fe, re)),
                (Z = new Yd(V, xe, Fe, re)),
                (Fe.programs = Ge.programs),
                (d.capabilities = re),
                (d.extensions = xe),
                (d.properties = me),
                (d.renderLists = C),
                (d.shadowMap = Q),
                (d.state = ye),
                (d.info = Fe);
        }
        pe();
        const ue = new Dm(d, V);
        (this.xr = ue),
            (this.getContext = function () {
                return V;
            }),
            (this.getContextAttributes = function () {
                return V.getContextAttributes();
            }),
            (this.forceContextLoss = function () {
                const T = xe.get('WEBGL_lose_context');
                T && T.loseContext();
            }),
            (this.forceContextRestore = function () {
                const T = xe.get('WEBGL_lose_context');
                T && T.restoreContext();
            }),
            (this.getPixelRatio = function () {
                return D;
            }),
            (this.setPixelRatio = function (T) {
                T !== void 0 && ((D = T), this.setSize(N, O, !1));
            }),
            (this.getSize = function (T) {
                return T.set(N, O);
            }),
            (this.setSize = function (T, z, q = !0) {
                if (ue.isPresenting) {
                    console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
                    return;
                }
                (N = T), (O = z), (t.width = Math.floor(T * D)), (t.height = Math.floor(z * D)), q === !0 && ((t.style.width = T + 'px'), (t.style.height = z + 'px')), this.setViewport(0, 0, T, z);
            }),
            (this.getDrawingBufferSize = function (T) {
                return T.set(N * D, O * D).floor();
            }),
            (this.setDrawingBufferSize = function (T, z, q) {
                (N = T), (O = z), (D = q), (t.width = Math.floor(T * q)), (t.height = Math.floor(z * q)), this.setViewport(0, 0, T, z);
            }),
            (this.getCurrentViewport = function (T) {
                return T.copy(A);
            }),
            (this.getViewport = function (T) {
                return T.copy($);
            }),
            (this.setViewport = function (T, z, q, F) {
                T.isVector4 ? $.set(T.x, T.y, T.z, T.w) : $.set(T, z, q, F), ye.viewport(A.copy($).multiplyScalar(D).floor());
            }),
            (this.getScissor = function (T) {
                return T.copy(Y);
            }),
            (this.setScissor = function (T, z, q, F) {
                T.isVector4 ? Y.set(T.x, T.y, T.z, T.w) : Y.set(T, z, q, F), ye.scissor(S.copy(Y).multiplyScalar(D).floor());
            }),
            (this.getScissorTest = function () {
                return k;
            }),
            (this.setScissorTest = function (T) {
                ye.setScissorTest((k = T));
            }),
            (this.setOpaqueSort = function (T) {
                U = T;
            }),
            (this.setTransparentSort = function (T) {
                B = T;
            }),
            (this.getClearColor = function (T) {
                return T.copy(te.getClearColor());
            }),
            (this.setClearColor = function () {
                te.setClearColor.apply(te, arguments);
            }),
            (this.getClearAlpha = function () {
                return te.getClearAlpha();
            }),
            (this.setClearAlpha = function () {
                te.setClearAlpha.apply(te, arguments);
            }),
            (this.clear = function (T = !0, z = !0, q = !0) {
                let F = 0;
                T && (F |= 16384), z && (F |= 256), q && (F |= 1024), V.clear(F);
            }),
            (this.clearColor = function () {
                this.clear(!0, !1, !1);
            }),
            (this.clearDepth = function () {
                this.clear(!1, !0, !1);
            }),
            (this.clearStencil = function () {
                this.clear(!1, !1, !0);
            }),
            (this.dispose = function () {
                t.removeEventListener('webglcontextlost', de, !1),
                    t.removeEventListener('webglcontextrestored', we, !1),
                    t.removeEventListener('webglcontextcreationerror', Le, !1),
                    C.dispose(),
                    w.dispose(),
                    me.dispose(),
                    Xe.dispose(),
                    We.dispose(),
                    Oe.dispose(),
                    le.dispose(),
                    he.dispose(),
                    Ge.dispose(),
                    ue.dispose(),
                    ue.removeEventListener('sessionstart', ge),
                    ue.removeEventListener('sessionend', Ve),
                    ce && (ce.dispose(), (ce = null)),
                    qe.stop();
            });
        function de(T) {
            T.preventDefault(), console.log('THREE.WebGLRenderer: Context Lost.'), (y = !0);
        }
        function we() {
            console.log('THREE.WebGLRenderer: Context Restored.'), (y = !1);
            const T = Fe.autoReset,
                z = Q.enabled,
                q = Q.autoUpdate,
                F = Q.needsUpdate,
                j = Q.type;
            pe(), (Fe.autoReset = T), (Q.enabled = z), (Q.autoUpdate = q), (Q.needsUpdate = F), (Q.type = j);
        }
        function Le(T) {
            console.error('THREE.WebGLRenderer: A WebGL context could not be created. Reason: ', T.statusMessage);
        }
        function Ye(T) {
            const z = T.target;
            z.removeEventListener('dispose', Ye), I(z);
        }
        function I(T) {
            X(T), me.remove(T);
        }
        function X(T) {
            const z = me.get(T).programs;
            z !== void 0 &&
                (z.forEach(function (q) {
                    Ge.releaseProgram(q);
                }),
                T.isShaderMaterial && Ge.releaseShaderCache(T));
        }
        (this.renderBufferDirect = function (T, z, q, F, j, ve) {
            z === null && (z = ie);
            const Se = j.isMesh && j.matrixWorld.determinant() < 0,
                Ee = Sc(T, z, q, F, j);
            ye.setMaterial(F, Se);
            let Ce = q.index,
                Re = 1;
            F.wireframe === !0 && ((Ce = je.getWireframeAttribute(q)), (Re = 2));
            const De = q.drawRange,
                Ie = q.attributes.position;
            let Be = De.start * Re,
                dt = (De.start + De.count) * Re;
            ve !== null && ((Be = Math.max(Be, ve.start * Re)), (dt = Math.min(dt, (ve.start + ve.count) * Re))),
                Ce !== null ? ((Be = Math.max(Be, 0)), (dt = Math.min(dt, Ce.count))) : Ie != null && ((Be = Math.max(Be, 0)), (dt = Math.min(dt, Ie.count)));
            const Rt = dt - Be;
            if (Rt < 0 || Rt === 1 / 0) return;
            le.setup(j, F, Ee, q, Ce);
            let En,
                $e = L;
            if ((Ce !== null && ((En = Ze.get(Ce)), ($e = Z), $e.setIndex(En)), j.isMesh)) F.wireframe === !0 ? (ye.setLineWidth(F.wireframeLinewidth * oe()), $e.setMode(1)) : $e.setMode(4);
            else if (j.isLine) {
                let Ne = F.linewidth;
                Ne === void 0 && (Ne = 1), ye.setLineWidth(Ne * oe()), j.isLineSegments ? $e.setMode(1) : j.isLineLoop ? $e.setMode(2) : $e.setMode(3);
            } else j.isPoints ? $e.setMode(0) : j.isSprite && $e.setMode(4);
            if (j.isInstancedMesh) $e.renderInstances(Be, Rt, j.count);
            else if (q.isInstancedBufferGeometry) {
                const Ne = q._maxInstanceCount !== void 0 ? q._maxInstanceCount : 1 / 0,
                    fs = Math.min(q.instanceCount, Ne);
                $e.renderInstances(Be, Rt, fs);
            } else $e.render(Be, Rt);
        }),
            (this.compile = function (T, z) {
                function q(F, j, ve) {
                    F.transparent === !0 && F.side === Nt && F.forceSinglePass === !1
                        ? ((F.side = ft), (F.needsUpdate = !0), cr(F, j, ve), (F.side = Zt), (F.needsUpdate = !0), cr(F, j, ve), (F.side = Nt))
                        : cr(F, j, ve);
                }
                (g = w.get(T)),
                    g.init(),
                    m.push(g),
                    T.traverseVisible(function (F) {
                        F.isLight && F.layers.test(z.layers) && (g.pushLight(F), F.castShadow && g.pushShadow(F));
                    }),
                    g.setupLights(d.useLegacyLights),
                    T.traverse(function (F) {
                        const j = F.material;
                        if (j)
                            if (Array.isArray(j))
                                for (let ve = 0; ve < j.length; ve++) {
                                    const Se = j[ve];
                                    q(Se, T, F);
                                }
                            else q(j, T, F);
                    }),
                    m.pop(),
                    (g = null);
            });
        let ee = null;
        function fe(T) {
            ee && ee(T);
        }
        function ge() {
            qe.stop();
        }
        function Ve() {
            qe.start();
        }
        const qe = new Vl();
        qe.setAnimationLoop(fe),
            typeof self < 'u' && qe.setContext(self),
            (this.setAnimationLoop = function (T) {
                (ee = T), ue.setAnimationLoop(T), T === null ? qe.stop() : qe.start();
            }),
            ue.addEventListener('sessionstart', ge),
            ue.addEventListener('sessionend', Ve),
            (this.render = function (T, z) {
                if (z !== void 0 && z.isCamera !== !0) {
                    console.error('THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.');
                    return;
                }
                if (y === !0) return;
                T.matrixWorldAutoUpdate === !0 && T.updateMatrixWorld(),
                    z.parent === null && z.matrixWorldAutoUpdate === !0 && z.updateMatrixWorld(),
                    ue.enabled === !0 && ue.isPresenting === !0 && (ue.cameraAutoUpdate === !0 && ue.updateCamera(z), (z = ue.getCamera())),
                    T.isScene === !0 && T.onBeforeRender(d, T, z, M),
                    (g = w.get(T, m.length)),
                    g.init(),
                    m.push(g),
                    W.multiplyMatrices(z.projectionMatrix, z.matrixWorldInverse),
                    K.setFromProjectionMatrix(W),
                    (_e = this.localClippingEnabled),
                    (ne = H.init(this.clippingPlanes, _e)),
                    (p = C.get(T, _.length)),
                    p.init(),
                    _.push(p),
                    at(T, z, 0, d.sortObjects),
                    p.finish(),
                    d.sortObjects === !0 && p.sort(U, B),
                    ne === !0 && H.beginShadows();
                const q = g.state.shadowsArray;
                if ((Q.render(q, T, z), ne === !0 && H.endShadows(), this.info.autoReset === !0 && this.info.reset(), te.render(p, T), g.setupLights(d.useLegacyLights), z.isArrayCamera)) {
                    const F = z.cameras;
                    for (let j = 0, ve = F.length; j < ve; j++) {
                        const Se = F[j];
                        dn(p, T, Se, Se.viewport);
                    }
                } else dn(p, T, z);
                M !== null && (Ae.updateMultisampleRenderTarget(M), Ae.updateRenderTargetMipmap(M)),
                    T.isScene === !0 && T.onAfterRender(d, T, z),
                    le.resetDefaultState(),
                    (b = -1),
                    (P = null),
                    m.pop(),
                    m.length > 0 ? (g = m[m.length - 1]) : (g = null),
                    _.pop(),
                    _.length > 0 ? (p = _[_.length - 1]) : (p = null);
            });
        function at(T, z, q, F) {
            if (T.visible === !1) return;
            if (T.layers.test(z.layers)) {
                if (T.isGroup) q = T.renderOrder;
                else if (T.isLOD) T.autoUpdate === !0 && T.update(z);
                else if (T.isLight) g.pushLight(T), T.castShadow && g.pushShadow(T);
                else if (T.isSprite) {
                    if (!T.frustumCulled || K.intersectsSprite(T)) {
                        F && J.setFromMatrixPosition(T.matrixWorld).applyMatrix4(W);
                        const Se = Oe.update(T),
                            Ee = T.material;
                        Ee.visible && p.push(T, Se, Ee, q, J.z, null);
                    }
                } else if (
                    (T.isMesh || T.isLine || T.isPoints) &&
                    (T.isSkinnedMesh && T.skeleton.frame !== Fe.render.frame && (T.skeleton.update(), (T.skeleton.frame = Fe.render.frame)), !T.frustumCulled || K.intersectsObject(T))
                ) {
                    F && J.setFromMatrixPosition(T.matrixWorld).applyMatrix4(W);
                    const Se = Oe.update(T),
                        Ee = T.material;
                    if (Array.isArray(Ee)) {
                        const Ce = Se.groups;
                        for (let Re = 0, De = Ce.length; Re < De; Re++) {
                            const Ie = Ce[Re],
                                Be = Ee[Ie.materialIndex];
                            Be && Be.visible && p.push(T, Se, Be, q, J.z, Ie);
                        }
                    } else Ee.visible && p.push(T, Se, Ee, q, J.z, null);
                }
            }
            const ve = T.children;
            for (let Se = 0, Ee = ve.length; Se < Ee; Se++) at(ve[Se], z, q, F);
        }
        function dn(T, z, q, F) {
            const j = T.opaque,
                ve = T.transmissive,
                Se = T.transparent;
            g.setupLightsView(q),
                ne === !0 && H.setGlobalState(d.clippingPlanes, q),
                ve.length > 0 && Ke(j, ve, z, q),
                F && ye.viewport(A.copy(F)),
                j.length > 0 && At(j, z, q),
                ve.length > 0 && At(ve, z, q),
                Se.length > 0 && At(Se, z, q),
                ye.buffers.depth.setTest(!0),
                ye.buffers.depth.setMask(!0),
                ye.buffers.color.setMask(!0),
                ye.setPolygonOffset(!1);
        }
        function Ke(T, z, q, F) {
            if (ce === null) {
                const Ee = re.isWebGL2;
                ce = new zn(1024, 1024, { generateMipmaps: !0, type: xe.has('EXT_color_buffer_half_float') ? $i : Fn, minFilter: Zi, samples: Ee && o === !0 ? 4 : 0 });
            }
            const j = d.getRenderTarget();
            d.setRenderTarget(ce), d.clear();
            const ve = d.toneMapping;
            (d.toneMapping = ln), At(T, q, F), Ae.updateMultisampleRenderTarget(ce), Ae.updateRenderTargetMipmap(ce);
            let Se = !1;
            for (let Ee = 0, Ce = z.length; Ee < Ce; Ee++) {
                const Re = z[Ee],
                    De = Re.object,
                    Ie = Re.geometry,
                    Be = Re.material,
                    dt = Re.group;
                if (Be.side === Nt && De.layers.test(F.layers)) {
                    const Rt = Be.side;
                    (Be.side = ft), (Be.needsUpdate = !0), Gt(De, q, F, Ie, Be, dt), (Be.side = Rt), (Be.needsUpdate = !0), (Se = !0);
                }
            }
            Se === !0 && (Ae.updateMultisampleRenderTarget(ce), Ae.updateRenderTargetMipmap(ce)), d.setRenderTarget(j), (d.toneMapping = ve);
        }
        function At(T, z, q) {
            const F = z.isScene === !0 ? z.overrideMaterial : null;
            for (let j = 0, ve = T.length; j < ve; j++) {
                const Se = T[j],
                    Ee = Se.object,
                    Ce = Se.geometry,
                    Re = F === null ? Se.material : F,
                    De = Se.group;
                Ee.layers.test(q.layers) && Gt(Ee, z, q, Ce, Re, De);
            }
        }
        function Gt(T, z, q, F, j, ve) {
            T.onBeforeRender(d, z, q, F, j, ve),
                T.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse, T.matrixWorld),
                T.normalMatrix.getNormalMatrix(T.modelViewMatrix),
                j.onBeforeRender(d, z, q, F, T, ve),
                j.transparent === !0 && j.side === Nt && j.forceSinglePass === !1
                    ? ((j.side = ft), (j.needsUpdate = !0), d.renderBufferDirect(q, z, F, j, T, ve), (j.side = Zt), (j.needsUpdate = !0), d.renderBufferDirect(q, z, F, j, T, ve), (j.side = Nt))
                    : d.renderBufferDirect(q, z, F, j, T, ve),
                T.onAfterRender(d, z, q, F, j, ve);
        }
        function cr(T, z, q) {
            z.isScene !== !0 && (z = ie);
            const F = me.get(T),
                j = g.state.lights,
                ve = g.state.shadowsArray,
                Se = j.state.version,
                Ee = Ge.getParameters(T, j.state, ve, z, q),
                Ce = Ge.getProgramCacheKey(Ee);
            let Re = F.programs;
            (F.environment = T.isMeshStandardMaterial ? z.environment : null),
                (F.fog = z.fog),
                (F.envMap = (T.isMeshStandardMaterial ? We : Xe).get(T.envMap || F.environment)),
                Re === void 0 && (T.addEventListener('dispose', Ye), (Re = new Map()), (F.programs = Re));
            let De = Re.get(Ce);
            if (De !== void 0) {
                if (F.currentProgram === De && F.lightsStateVersion === Se) return No(T, Ee), De;
            } else (Ee.uniforms = Ge.getUniforms(T)), T.onBuild(q, Ee, d), T.onBeforeCompile(Ee, d), (De = Ge.acquireProgram(Ee, Ce)), Re.set(Ce, De), (F.uniforms = Ee.uniforms);
            const Ie = F.uniforms;
            ((!T.isShaderMaterial && !T.isRawShaderMaterial) || T.clipping === !0) && (Ie.clippingPlanes = H.uniform),
                No(T, Ee),
                (F.needsLights = wc(T)),
                (F.lightsStateVersion = Se),
                F.needsLights &&
                    ((Ie.ambientLightColor.value = j.state.ambient),
                    (Ie.lightProbe.value = j.state.probe),
                    (Ie.directionalLights.value = j.state.directional),
                    (Ie.directionalLightShadows.value = j.state.directionalShadow),
                    (Ie.spotLights.value = j.state.spot),
                    (Ie.spotLightShadows.value = j.state.spotShadow),
                    (Ie.rectAreaLights.value = j.state.rectArea),
                    (Ie.ltc_1.value = j.state.rectAreaLTC1),
                    (Ie.ltc_2.value = j.state.rectAreaLTC2),
                    (Ie.pointLights.value = j.state.point),
                    (Ie.pointLightShadows.value = j.state.pointShadow),
                    (Ie.hemisphereLights.value = j.state.hemi),
                    (Ie.directionalShadowMap.value = j.state.directionalShadowMap),
                    (Ie.directionalShadowMatrix.value = j.state.directionalShadowMatrix),
                    (Ie.spotShadowMap.value = j.state.spotShadowMap),
                    (Ie.spotLightMatrix.value = j.state.spotLightMatrix),
                    (Ie.spotLightMap.value = j.state.spotLightMap),
                    (Ie.pointShadowMap.value = j.state.pointShadowMap),
                    (Ie.pointShadowMatrix.value = j.state.pointShadowMatrix));
            const Be = De.getUniforms(),
                dt = kr.seqWithValue(Be.seq, Ie);
            return (F.currentProgram = De), (F.uniformsList = dt), De;
        }
        function No(T, z) {
            const q = me.get(T);
            (q.outputEncoding = z.outputEncoding),
                (q.instancing = z.instancing),
                (q.skinning = z.skinning),
                (q.morphTargets = z.morphTargets),
                (q.morphNormals = z.morphNormals),
                (q.morphColors = z.morphColors),
                (q.morphTargetsCount = z.morphTargetsCount),
                (q.numClippingPlanes = z.numClippingPlanes),
                (q.numIntersection = z.numClipIntersection),
                (q.vertexAlphas = z.vertexAlphas),
                (q.vertexTangents = z.vertexTangents),
                (q.toneMapping = z.toneMapping);
        }
        function Sc(T, z, q, F, j) {
            z.isScene !== !0 && (z = ie), Ae.resetTextureUnits();
            const ve = z.fog,
                Se = F.isMeshStandardMaterial ? z.environment : null,
                Ee = M === null ? d.outputEncoding : M.isXRRenderTarget === !0 ? M.texture.encoding : Bn,
                Ce = (F.isMeshStandardMaterial ? We : Xe).get(F.envMap || Se),
                Re = F.vertexColors === !0 && !!q.attributes.color && q.attributes.color.itemSize === 4,
                De = !!F.normalMap && !!q.attributes.tangent,
                Ie = !!q.morphAttributes.position,
                Be = !!q.morphAttributes.normal,
                dt = !!q.morphAttributes.color,
                Rt = F.toneMapped ? d.toneMapping : ln,
                En = q.morphAttributes.position || q.morphAttributes.normal || q.morphAttributes.color,
                $e = En !== void 0 ? En.length : 0,
                Ne = me.get(F),
                fs = g.state.lights;
            if (ne === !0 && (_e === !0 || T !== P)) {
                const yt = T === P && F.id === b;
                H.setState(F, T, yt);
            }
            let tt = !1;
            F.version === Ne.__version
                ? ((Ne.needsLights && Ne.lightsStateVersion !== fs.state.version) ||
                      Ne.outputEncoding !== Ee ||
                      (j.isInstancedMesh && Ne.instancing === !1) ||
                      (!j.isInstancedMesh && Ne.instancing === !0) ||
                      (j.isSkinnedMesh && Ne.skinning === !1) ||
                      (!j.isSkinnedMesh && Ne.skinning === !0) ||
                      Ne.envMap !== Ce ||
                      (F.fog === !0 && Ne.fog !== ve) ||
                      (Ne.numClippingPlanes !== void 0 && (Ne.numClippingPlanes !== H.numPlanes || Ne.numIntersection !== H.numIntersection)) ||
                      Ne.vertexAlphas !== Re ||
                      Ne.vertexTangents !== De ||
                      Ne.morphTargets !== Ie ||
                      Ne.morphNormals !== Be ||
                      Ne.morphColors !== dt ||
                      Ne.toneMapping !== Rt ||
                      (re.isWebGL2 === !0 && Ne.morphTargetsCount !== $e)) &&
                  (tt = !0)
                : ((tt = !0), (Ne.__version = F.version));
            let Tn = Ne.currentProgram;
            tt === !0 && (Tn = cr(F, z, j));
            let Oo = !1,
                Ui = !1,
                hs = !1;
            const pt = Tn.getUniforms(),
                An = Ne.uniforms;
            if ((ye.useProgram(Tn.program) && ((Oo = !0), (Ui = !0), (hs = !0)), F.id !== b && ((b = F.id), (Ui = !0)), Oo || P !== T)) {
                if (
                    (pt.setValue(V, 'projectionMatrix', T.projectionMatrix),
                    re.logarithmicDepthBuffer && pt.setValue(V, 'logDepthBufFC', 2 / (Math.log(T.far + 1) / Math.LN2)),
                    P !== T && ((P = T), (Ui = !0), (hs = !0)),
                    F.isShaderMaterial || F.isMeshPhongMaterial || F.isMeshToonMaterial || F.isMeshStandardMaterial || F.envMap)
                ) {
                    const yt = pt.map.cameraPosition;
                    yt !== void 0 && yt.setValue(V, J.setFromMatrixPosition(T.matrixWorld));
                }
                (F.isMeshPhongMaterial || F.isMeshToonMaterial || F.isMeshLambertMaterial || F.isMeshBasicMaterial || F.isMeshStandardMaterial || F.isShaderMaterial) &&
                    pt.setValue(V, 'isOrthographic', T.isOrthographicCamera === !0),
                    (F.isMeshPhongMaterial ||
                        F.isMeshToonMaterial ||
                        F.isMeshLambertMaterial ||
                        F.isMeshBasicMaterial ||
                        F.isMeshStandardMaterial ||
                        F.isShaderMaterial ||
                        F.isShadowMaterial ||
                        j.isSkinnedMesh) &&
                        pt.setValue(V, 'viewMatrix', T.matrixWorldInverse);
            }
            if (j.isSkinnedMesh) {
                pt.setOptional(V, j, 'bindMatrix'), pt.setOptional(V, j, 'bindMatrixInverse');
                const yt = j.skeleton;
                yt &&
                    (re.floatVertexTextures
                        ? (yt.boneTexture === null && yt.computeBoneTexture(), pt.setValue(V, 'boneTexture', yt.boneTexture, Ae), pt.setValue(V, 'boneTextureSize', yt.boneTextureSize))
                        : console.warn('THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required.'));
            }
            const ds = q.morphAttributes;
            if (
                ((ds.position !== void 0 || ds.normal !== void 0 || (ds.color !== void 0 && re.isWebGL2 === !0)) && ae.update(j, q, Tn),
                (Ui || Ne.receiveShadow !== j.receiveShadow) && ((Ne.receiveShadow = j.receiveShadow), pt.setValue(V, 'receiveShadow', j.receiveShadow)),
                F.isMeshGouraudMaterial && F.envMap !== null && ((An.envMap.value = Ce), (An.flipEnvMap.value = Ce.isCubeTexture && Ce.isRenderTargetTexture === !1 ? -1 : 1)),
                Ui &&
                    (pt.setValue(V, 'toneMappingExposure', d.toneMappingExposure),
                    Ne.needsLights && bc(An, hs),
                    ve && F.fog === !0 && ot.refreshFogUniforms(An, ve),
                    ot.refreshMaterialUniforms(An, F, D, O, ce),
                    kr.upload(V, Ne.uniformsList, An, Ae)),
                F.isShaderMaterial && F.uniformsNeedUpdate === !0 && (kr.upload(V, Ne.uniformsList, An, Ae), (F.uniformsNeedUpdate = !1)),
                F.isSpriteMaterial && pt.setValue(V, 'center', j.center),
                pt.setValue(V, 'modelViewMatrix', j.modelViewMatrix),
                pt.setValue(V, 'normalMatrix', j.normalMatrix),
                pt.setValue(V, 'modelMatrix', j.matrixWorld),
                F.isShaderMaterial || F.isRawShaderMaterial)
            ) {
                const yt = F.uniformsGroups;
                for (let ps = 0, Ec = yt.length; ps < Ec; ps++)
                    if (re.isWebGL2) {
                        const Fo = yt[ps];
                        he.update(Fo, Tn), he.bind(Fo, Tn);
                    } else console.warn('THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.');
            }
            return Tn;
        }
        function bc(T, z) {
            (T.ambientLightColor.needsUpdate = z),
                (T.lightProbe.needsUpdate = z),
                (T.directionalLights.needsUpdate = z),
                (T.directionalLightShadows.needsUpdate = z),
                (T.pointLights.needsUpdate = z),
                (T.pointLightShadows.needsUpdate = z),
                (T.spotLights.needsUpdate = z),
                (T.spotLightShadows.needsUpdate = z),
                (T.rectAreaLights.needsUpdate = z),
                (T.hemisphereLights.needsUpdate = z);
        }
        function wc(T) {
            return T.isMeshLambertMaterial || T.isMeshToonMaterial || T.isMeshPhongMaterial || T.isMeshStandardMaterial || T.isShadowMaterial || (T.isShaderMaterial && T.lights === !0);
        }
        (this.getActiveCubeFace = function () {
            return x;
        }),
            (this.getActiveMipmapLevel = function () {
                return v;
            }),
            (this.getRenderTarget = function () {
                return M;
            }),
            (this.setRenderTargetTextures = function (T, z, q) {
                (me.get(T.texture).__webglTexture = z), (me.get(T.depthTexture).__webglTexture = q);
                const F = me.get(T);
                (F.__hasExternalTextures = !0),
                    F.__hasExternalTextures &&
                        ((F.__autoAllocateDepthBuffer = q === void 0),
                        F.__autoAllocateDepthBuffer ||
                            (xe.has('WEBGL_multisampled_render_to_texture') === !0 &&
                                (console.warn('THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided'), (F.__useRenderToTexture = !1))));
            }),
            (this.setRenderTargetFramebuffer = function (T, z) {
                const q = me.get(T);
                (q.__webglFramebuffer = z), (q.__useDefaultFramebuffer = z === void 0);
            }),
            (this.setRenderTarget = function (T, z = 0, q = 0) {
                (M = T), (x = z), (v = q);
                let F = !0,
                    j = null,
                    ve = !1,
                    Se = !1;
                if (T) {
                    const Ce = me.get(T);
                    Ce.__useDefaultFramebuffer !== void 0
                        ? (ye.bindFramebuffer(36160, null), (F = !1))
                        : Ce.__webglFramebuffer === void 0
                        ? Ae.setupRenderTarget(T)
                        : Ce.__hasExternalTextures && Ae.rebindTextures(T, me.get(T.texture).__webglTexture, me.get(T.depthTexture).__webglTexture);
                    const Re = T.texture;
                    (Re.isData3DTexture || Re.isDataArrayTexture || Re.isCompressedArrayTexture) && (Se = !0);
                    const De = me.get(T).__webglFramebuffer;
                    T.isWebGLCubeRenderTarget ? ((j = De[z]), (ve = !0)) : re.isWebGL2 && T.samples > 0 && Ae.useMultisampledRTT(T) === !1 ? (j = me.get(T).__webglMultisampledFramebuffer) : (j = De),
                        A.copy(T.viewport),
                        S.copy(T.scissor),
                        (E = T.scissorTest);
                } else A.copy($).multiplyScalar(D).floor(), S.copy(Y).multiplyScalar(D).floor(), (E = k);
                if ((ye.bindFramebuffer(36160, j) && re.drawBuffers && F && ye.drawBuffers(T, j), ye.viewport(A), ye.scissor(S), ye.setScissorTest(E), ve)) {
                    const Ce = me.get(T.texture);
                    V.framebufferTexture2D(36160, 36064, 34069 + z, Ce.__webglTexture, q);
                } else if (Se) {
                    const Ce = me.get(T.texture),
                        Re = z || 0;
                    V.framebufferTextureLayer(36160, 36064, Ce.__webglTexture, q || 0, Re);
                }
                b = -1;
            }),
            (this.readRenderTargetPixels = function (T, z, q, F, j, ve, Se) {
                if (!(T && T.isWebGLRenderTarget)) {
                    console.error('THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.');
                    return;
                }
                let Ee = me.get(T).__webglFramebuffer;
                if ((T.isWebGLCubeRenderTarget && Se !== void 0 && (Ee = Ee[Se]), Ee)) {
                    ye.bindFramebuffer(36160, Ee);
                    try {
                        const Ce = T.texture,
                            Re = Ce.format,
                            De = Ce.type;
                        if (Re !== Ft && G.convert(Re) !== V.getParameter(35739)) {
                            console.error('THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.');
                            return;
                        }
                        const Ie = De === $i && (xe.has('EXT_color_buffer_half_float') || (re.isWebGL2 && xe.has('EXT_color_buffer_float')));
                        if (De !== Fn && G.convert(De) !== V.getParameter(35738) && !(De === Nn && (re.isWebGL2 || xe.has('OES_texture_float') || xe.has('WEBGL_color_buffer_float'))) && !Ie) {
                            console.error('THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.');
                            return;
                        }
                        z >= 0 && z <= T.width - F && q >= 0 && q <= T.height - j && V.readPixels(z, q, F, j, G.convert(Re), G.convert(De), ve);
                    } finally {
                        const Ce = M !== null ? me.get(M).__webglFramebuffer : null;
                        ye.bindFramebuffer(36160, Ce);
                    }
                }
            }),
            (this.copyFramebufferToTexture = function (T, z, q = 0) {
                const F = Math.pow(2, -q),
                    j = Math.floor(z.image.width * F),
                    ve = Math.floor(z.image.height * F);
                Ae.setTexture2D(z, 0), V.copyTexSubImage2D(3553, q, 0, 0, T.x, T.y, j, ve), ye.unbindTexture();
            }),
            (this.copyTextureToTexture = function (T, z, q, F = 0) {
                const j = z.image.width,
                    ve = z.image.height,
                    Se = G.convert(q.format),
                    Ee = G.convert(q.type);
                Ae.setTexture2D(q, 0),
                    V.pixelStorei(37440, q.flipY),
                    V.pixelStorei(37441, q.premultiplyAlpha),
                    V.pixelStorei(3317, q.unpackAlignment),
                    z.isDataTexture
                        ? V.texSubImage2D(3553, F, T.x, T.y, j, ve, Se, Ee, z.image.data)
                        : z.isCompressedTexture
                        ? V.compressedTexSubImage2D(3553, F, T.x, T.y, z.mipmaps[0].width, z.mipmaps[0].height, Se, z.mipmaps[0].data)
                        : V.texSubImage2D(3553, F, T.x, T.y, Se, Ee, z.image),
                    F === 0 && q.generateMipmaps && V.generateMipmap(3553),
                    ye.unbindTexture();
            }),
            (this.copyTextureToTexture3D = function (T, z, q, F, j = 0) {
                if (d.isWebGL1Renderer) {
                    console.warn('THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.');
                    return;
                }
                const ve = T.max.x - T.min.x + 1,
                    Se = T.max.y - T.min.y + 1,
                    Ee = T.max.z - T.min.z + 1,
                    Ce = G.convert(F.format),
                    Re = G.convert(F.type);
                let De;
                if (F.isData3DTexture) Ae.setTexture3D(F, 0), (De = 32879);
                else if (F.isDataArrayTexture) Ae.setTexture2DArray(F, 0), (De = 35866);
                else {
                    console.warn('THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.');
                    return;
                }
                V.pixelStorei(37440, F.flipY), V.pixelStorei(37441, F.premultiplyAlpha), V.pixelStorei(3317, F.unpackAlignment);
                const Ie = V.getParameter(3314),
                    Be = V.getParameter(32878),
                    dt = V.getParameter(3316),
                    Rt = V.getParameter(3315),
                    En = V.getParameter(32877),
                    $e = q.isCompressedTexture ? q.mipmaps[0] : q.image;
                V.pixelStorei(3314, $e.width),
                    V.pixelStorei(32878, $e.height),
                    V.pixelStorei(3316, T.min.x),
                    V.pixelStorei(3315, T.min.y),
                    V.pixelStorei(32877, T.min.z),
                    q.isDataTexture || q.isData3DTexture
                        ? V.texSubImage3D(De, j, z.x, z.y, z.z, ve, Se, Ee, Ce, Re, $e.data)
                        : q.isCompressedArrayTexture
                        ? (console.warn('THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture.'),
                          V.compressedTexSubImage3D(De, j, z.x, z.y, z.z, ve, Se, Ee, Ce, $e.data))
                        : V.texSubImage3D(De, j, z.x, z.y, z.z, ve, Se, Ee, Ce, Re, $e),
                    V.pixelStorei(3314, Ie),
                    V.pixelStorei(32878, Be),
                    V.pixelStorei(3316, dt),
                    V.pixelStorei(3315, Rt),
                    V.pixelStorei(32877, En),
                    j === 0 && F.generateMipmaps && V.generateMipmap(De),
                    ye.unbindTexture();
            }),
            (this.initTexture = function (T) {
                T.isCubeTexture
                    ? Ae.setTextureCube(T, 0)
                    : T.isData3DTexture
                    ? Ae.setTexture3D(T, 0)
                    : T.isDataArrayTexture || T.isCompressedArrayTexture
                    ? Ae.setTexture2DArray(T, 0)
                    : Ae.setTexture2D(T, 0),
                    ye.unbindTexture();
            }),
            (this.resetState = function () {
                (x = 0), (v = 0), (M = null), ye.reset(), le.reset();
            }),
            typeof __THREE_DEVTOOLS__ < 'u' && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent('observe', { detail: this }));
    }
    get physicallyCorrectLights() {
        return console.warn('THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead.'), !this.useLegacyLights;
    }
    set physicallyCorrectLights(e) {
        console.warn('THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead.'), (this.useLegacyLights = !e);
    }
}
class Om extends jl {}
Om.prototype.isWebGL1Renderer = !0;
class Fm extends ht {
    constructor() {
        super(),
            (this.isScene = !0),
            (this.type = 'Scene'),
            (this.background = null),
            (this.environment = null),
            (this.fog = null),
            (this.backgroundBlurriness = 0),
            (this.backgroundIntensity = 1),
            (this.overrideMaterial = null),
            typeof __THREE_DEVTOOLS__ < 'u' && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent('observe', { detail: this }));
    }
    copy(e, t) {
        return (
            super.copy(e, t),
            e.background !== null && (this.background = e.background.clone()),
            e.environment !== null && (this.environment = e.environment.clone()),
            e.fog !== null && (this.fog = e.fog.clone()),
            (this.backgroundBlurriness = e.backgroundBlurriness),
            (this.backgroundIntensity = e.backgroundIntensity),
            e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()),
            (this.matrixAutoUpdate = e.matrixAutoUpdate),
            this
        );
    }
    toJSON(e) {
        const t = super.toJSON(e);
        return (
            this.fog !== null && (t.object.fog = this.fog.toJSON()),
            this.backgroundBlurriness > 0 && (t.object.backgroundBlurriness = this.backgroundBlurriness),
            this.backgroundIntensity !== 1 && (t.object.backgroundIntensity = this.backgroundIntensity),
            t
        );
    }
    get autoUpdate() {
        return console.warn('THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144.'), this.matrixWorldAutoUpdate;
    }
    set autoUpdate(e) {
        console.warn('THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144.'), (this.matrixWorldAutoUpdate = e);
    }
}
class os extends hn {
    constructor(e = 1, t = 1, n = 1, i = 32, s = 1, a = !1, o = 0, c = Math.PI * 2) {
        super(), (this.type = 'CylinderGeometry'), (this.parameters = { radiusTop: e, radiusBottom: t, height: n, radialSegments: i, heightSegments: s, openEnded: a, thetaStart: o, thetaLength: c });
        const l = this;
        (i = Math.floor(i)), (s = Math.floor(s));
        const u = [],
            f = [],
            h = [],
            p = [];
        let g = 0;
        const _ = [],
            m = n / 2;
        let d = 0;
        y(),
            a === !1 && (e > 0 && x(!0), t > 0 && x(!1)),
            this.setIndex(u),
            this.setAttribute('position', new Bt(f, 3)),
            this.setAttribute('normal', new Bt(h, 3)),
            this.setAttribute('uv', new Bt(p, 2));
        function y() {
            const v = new R(),
                M = new R();
            let b = 0;
            const P = (t - e) / n;
            for (let A = 0; A <= s; A++) {
                const S = [],
                    E = A / s,
                    N = E * (t - e) + e;
                for (let O = 0; O <= i; O++) {
                    const D = O / i,
                        U = D * c + o,
                        B = Math.sin(U),
                        $ = Math.cos(U);
                    (M.x = N * B), (M.y = -E * n + m), (M.z = N * $), f.push(M.x, M.y, M.z), v.set(B, P, $).normalize(), h.push(v.x, v.y, v.z), p.push(D, 1 - E), S.push(g++);
                }
                _.push(S);
            }
            for (let A = 0; A < i; A++)
                for (let S = 0; S < s; S++) {
                    const E = _[S][A],
                        N = _[S + 1][A],
                        O = _[S + 1][A + 1],
                        D = _[S][A + 1];
                    u.push(E, N, D), u.push(N, O, D), (b += 6);
                }
            l.addGroup(d, b, 0), (d += b);
        }
        function x(v) {
            const M = g,
                b = new be(),
                P = new R();
            let A = 0;
            const S = v === !0 ? e : t,
                E = v === !0 ? 1 : -1;
            for (let O = 1; O <= i; O++) f.push(0, m * E, 0), h.push(0, E, 0), p.push(0.5, 0.5), g++;
            const N = g;
            for (let O = 0; O <= i; O++) {
                const U = (O / i) * c + o,
                    B = Math.cos(U),
                    $ = Math.sin(U);
                (P.x = S * $), (P.y = m * E), (P.z = S * B), f.push(P.x, P.y, P.z), h.push(0, E, 0), (b.x = B * 0.5 + 0.5), (b.y = $ * 0.5 * E + 0.5), p.push(b.x, b.y), g++;
            }
            for (let O = 0; O < i; O++) {
                const D = M + O,
                    U = N + O;
                v === !0 ? u.push(U, U + 1, D) : u.push(U + 1, U, D), (A += 3);
            }
            l.addGroup(d, A, v === !0 ? 1 : 2), (d += A);
        }
    }
    copy(e) {
        return super.copy(e), (this.parameters = Object.assign({}, e.parameters)), this;
    }
    static fromJSON(e) {
        return new os(e.radiusTop, e.radiusBottom, e.height, e.radialSegments, e.heightSegments, e.openEnded, e.thetaStart, e.thetaLength);
    }
}
class bo extends os {
    constructor(e = 1, t = 1, n = 32, i = 1, s = !1, a = 0, o = Math.PI * 2) {
        super(0, e, t, n, i, s, a, o), (this.type = 'ConeGeometry'), (this.parameters = { radius: e, height: t, radialSegments: n, heightSegments: i, openEnded: s, thetaStart: a, thetaLength: o });
    }
    static fromJSON(e) {
        return new bo(e.radius, e.height, e.radialSegments, e.heightSegments, e.openEnded, e.thetaStart, e.thetaLength);
    }
}
class Bm extends or {
    constructor(e) {
        super(),
            (this.isMeshLambertMaterial = !0),
            (this.type = 'MeshLambertMaterial'),
            (this.color = new ze(16777215)),
            (this.map = null),
            (this.lightMap = null),
            (this.lightMapIntensity = 1),
            (this.aoMap = null),
            (this.aoMapIntensity = 1),
            (this.emissive = new ze(0)),
            (this.emissiveIntensity = 1),
            (this.emissiveMap = null),
            (this.bumpMap = null),
            (this.bumpScale = 1),
            (this.normalMap = null),
            (this.normalMapType = Al),
            (this.normalScale = new be(1, 1)),
            (this.displacementMap = null),
            (this.displacementScale = 1),
            (this.displacementBias = 0),
            (this.specularMap = null),
            (this.alphaMap = null),
            (this.envMap = null),
            (this.combine = go),
            (this.reflectivity = 1),
            (this.refractionRatio = 0.98),
            (this.wireframe = !1),
            (this.wireframeLinewidth = 1),
            (this.wireframeLinecap = 'round'),
            (this.wireframeLinejoin = 'round'),
            (this.flatShading = !1),
            (this.fog = !0),
            this.setValues(e);
    }
    copy(e) {
        return (
            super.copy(e),
            this.color.copy(e.color),
            (this.map = e.map),
            (this.lightMap = e.lightMap),
            (this.lightMapIntensity = e.lightMapIntensity),
            (this.aoMap = e.aoMap),
            (this.aoMapIntensity = e.aoMapIntensity),
            this.emissive.copy(e.emissive),
            (this.emissiveMap = e.emissiveMap),
            (this.emissiveIntensity = e.emissiveIntensity),
            (this.bumpMap = e.bumpMap),
            (this.bumpScale = e.bumpScale),
            (this.normalMap = e.normalMap),
            (this.normalMapType = e.normalMapType),
            this.normalScale.copy(e.normalScale),
            (this.displacementMap = e.displacementMap),
            (this.displacementScale = e.displacementScale),
            (this.displacementBias = e.displacementBias),
            (this.specularMap = e.specularMap),
            (this.alphaMap = e.alphaMap),
            (this.envMap = e.envMap),
            (this.combine = e.combine),
            (this.reflectivity = e.reflectivity),
            (this.refractionRatio = e.refractionRatio),
            (this.wireframe = e.wireframe),
            (this.wireframeLinewidth = e.wireframeLinewidth),
            (this.wireframeLinecap = e.wireframeLinecap),
            (this.wireframeLinejoin = e.wireframeLinejoin),
            (this.flatShading = e.flatShading),
            (this.fog = e.fog),
            this
        );
    }
}
const qr = {
    enabled: !1,
    files: {},
    add: function (r, e) {
        this.enabled !== !1 && (this.files[r] = e);
    },
    get: function (r) {
        if (this.enabled !== !1) return this.files[r];
    },
    remove: function (r) {
        delete this.files[r];
    },
    clear: function () {
        this.files = {};
    },
};
class zm {
    constructor(e, t, n) {
        const i = this;
        let s = !1,
            a = 0,
            o = 0,
            c;
        const l = [];
        (this.onStart = void 0),
            (this.onLoad = e),
            (this.onProgress = t),
            (this.onError = n),
            (this.itemStart = function (u) {
                o++, s === !1 && i.onStart !== void 0 && i.onStart(u, a, o), (s = !0);
            }),
            (this.itemEnd = function (u) {
                a++, i.onProgress !== void 0 && i.onProgress(u, a, o), a === o && ((s = !1), i.onLoad !== void 0 && i.onLoad());
            }),
            (this.itemError = function (u) {
                i.onError !== void 0 && i.onError(u);
            }),
            (this.resolveURL = function (u) {
                return c ? c(u) : u;
            }),
            (this.setURLModifier = function (u) {
                return (c = u), this;
            }),
            (this.addHandler = function (u, f) {
                return l.push(u, f), this;
            }),
            (this.removeHandler = function (u) {
                const f = l.indexOf(u);
                return f !== -1 && l.splice(f, 2), this;
            }),
            (this.getHandler = function (u) {
                for (let f = 0, h = l.length; f < h; f += 2) {
                    const p = l[f],
                        g = l[f + 1];
                    if ((p.global && (p.lastIndex = 0), p.test(u))) return g;
                }
                return null;
            });
    }
}
const Gm = new zm();
class wo {
    constructor(e) {
        (this.manager = e !== void 0 ? e : Gm), (this.crossOrigin = 'anonymous'), (this.withCredentials = !1), (this.path = ''), (this.resourcePath = ''), (this.requestHeader = {});
    }
    load() {}
    loadAsync(e, t) {
        const n = this;
        return new Promise(function (i, s) {
            n.load(e, i, t, s);
        });
    }
    parse() {}
    setCrossOrigin(e) {
        return (this.crossOrigin = e), this;
    }
    setWithCredentials(e) {
        return (this.withCredentials = e), this;
    }
    setPath(e) {
        return (this.path = e), this;
    }
    setResourcePath(e) {
        return (this.resourcePath = e), this;
    }
    setRequestHeader(e) {
        return (this.requestHeader = e), this;
    }
}
const sn = {};
class Vm extends Error {
    constructor(e, t) {
        super(e), (this.response = t);
    }
}
class km extends wo {
    constructor(e) {
        super(e);
    }
    load(e, t, n, i) {
        e === void 0 && (e = ''), this.path !== void 0 && (e = this.path + e), (e = this.manager.resolveURL(e));
        const s = qr.get(e);
        if (s !== void 0)
            return (
                this.manager.itemStart(e),
                setTimeout(() => {
                    t && t(s), this.manager.itemEnd(e);
                }, 0),
                s
            );
        if (sn[e] !== void 0) {
            sn[e].push({ onLoad: t, onProgress: n, onError: i });
            return;
        }
        (sn[e] = []), sn[e].push({ onLoad: t, onProgress: n, onError: i });
        const a = new Request(e, { headers: new Headers(this.requestHeader), credentials: this.withCredentials ? 'include' : 'same-origin' }),
            o = this.mimeType,
            c = this.responseType;
        fetch(a)
            .then((l) => {
                if (l.status === 200 || l.status === 0) {
                    if ((l.status === 0 && console.warn('THREE.FileLoader: HTTP Status 0 received.'), typeof ReadableStream > 'u' || l.body === void 0 || l.body.getReader === void 0)) return l;
                    const u = sn[e],
                        f = l.body.getReader(),
                        h = l.headers.get('Content-Length') || l.headers.get('X-File-Size'),
                        p = h ? parseInt(h) : 0,
                        g = p !== 0;
                    let _ = 0;
                    const m = new ReadableStream({
                        start(d) {
                            y();
                            function y() {
                                f.read().then(({ done: x, value: v }) => {
                                    if (x) d.close();
                                    else {
                                        _ += v.byteLength;
                                        const M = new ProgressEvent('progress', { lengthComputable: g, loaded: _, total: p });
                                        for (let b = 0, P = u.length; b < P; b++) {
                                            const A = u[b];
                                            A.onProgress && A.onProgress(M);
                                        }
                                        d.enqueue(v), y();
                                    }
                                });
                            }
                        },
                    });
                    return new Response(m);
                } else throw new Vm(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`, l);
            })
            .then((l) => {
                switch (c) {
                    case 'arraybuffer':
                        return l.arrayBuffer();
                    case 'blob':
                        return l.blob();
                    case 'document':
                        return l.text().then((u) => new DOMParser().parseFromString(u, o));
                    case 'json':
                        return l.json();
                    default:
                        if (o === void 0) return l.text();
                        {
                            const f = /charset="?([^;"\s]*)"?/i.exec(o),
                                h = f && f[1] ? f[1].toLowerCase() : void 0,
                                p = new TextDecoder(h);
                            return l.arrayBuffer().then((g) => p.decode(g));
                        }
                }
            })
            .then((l) => {
                qr.add(e, l);
                const u = sn[e];
                delete sn[e];
                for (let f = 0, h = u.length; f < h; f++) {
                    const p = u[f];
                    p.onLoad && p.onLoad(l);
                }
            })
            .catch((l) => {
                const u = sn[e];
                if (u === void 0) throw (this.manager.itemError(e), l);
                delete sn[e];
                for (let f = 0, h = u.length; f < h; f++) {
                    const p = u[f];
                    p.onError && p.onError(l);
                }
                this.manager.itemError(e);
            })
            .finally(() => {
                this.manager.itemEnd(e);
            }),
            this.manager.itemStart(e);
    }
    setResponseType(e) {
        return (this.responseType = e), this;
    }
    setMimeType(e) {
        return (this.mimeType = e), this;
    }
}
class Hm extends wo {
    constructor(e) {
        super(e);
    }
    load(e, t, n, i) {
        this.path !== void 0 && (e = this.path + e), (e = this.manager.resolveURL(e));
        const s = this,
            a = qr.get(e);
        if (a !== void 0)
            return (
                s.manager.itemStart(e),
                setTimeout(function () {
                    t && t(a), s.manager.itemEnd(e);
                }, 0),
                a
            );
        const o = er('img');
        function c() {
            u(), qr.add(e, this), t && t(this), s.manager.itemEnd(e);
        }
        function l(f) {
            u(), i && i(f), s.manager.itemError(e), s.manager.itemEnd(e);
        }
        function u() {
            o.removeEventListener('load', c, !1), o.removeEventListener('error', l, !1);
        }
        return (
            o.addEventListener('load', c, !1),
            o.addEventListener('error', l, !1),
            e.slice(0, 5) !== 'data:' && this.crossOrigin !== void 0 && (o.crossOrigin = this.crossOrigin),
            s.manager.itemStart(e),
            (o.src = e),
            o
        );
    }
}
class Wm extends wo {
    constructor(e) {
        super(e);
    }
    load(e, t, n, i) {
        const s = new vt(),
            a = new Hm(this.manager);
        return (
            a.setCrossOrigin(this.crossOrigin),
            a.setPath(this.path),
            a.load(
                e,
                function (o) {
                    (s.image = o), (s.needsUpdate = !0), t !== void 0 && t(s);
                },
                n,
                i,
            ),
            s
        );
    }
}
class Yl extends ht {
    constructor(e, t = 1) {
        super(), (this.isLight = !0), (this.type = 'Light'), (this.color = new ze(e)), (this.intensity = t);
    }
    dispose() {}
    copy(e, t) {
        return super.copy(e, t), this.color.copy(e.color), (this.intensity = e.intensity), this;
    }
    toJSON(e) {
        const t = super.toJSON(e);
        return (
            (t.object.color = this.color.getHex()),
            (t.object.intensity = this.intensity),
            this.groundColor !== void 0 && (t.object.groundColor = this.groundColor.getHex()),
            this.distance !== void 0 && (t.object.distance = this.distance),
            this.angle !== void 0 && (t.object.angle = this.angle),
            this.decay !== void 0 && (t.object.decay = this.decay),
            this.penumbra !== void 0 && (t.object.penumbra = this.penumbra),
            this.shadow !== void 0 && (t.object.shadow = this.shadow.toJSON()),
            t
        );
    }
}
const Hs = new He(),
    Qa = new R(),
    el = new R();
class qm {
    constructor(e) {
        (this.camera = e),
            (this.bias = 0),
            (this.normalBias = 0),
            (this.radius = 1),
            (this.blurSamples = 8),
            (this.mapSize = new be(512, 512)),
            (this.map = null),
            (this.mapPass = null),
            (this.matrix = new He()),
            (this.autoUpdate = !0),
            (this.needsUpdate = !1),
            (this._frustum = new Mo()),
            (this._frameExtents = new be(1, 1)),
            (this._viewportCount = 1),
            (this._viewports = [new it(0, 0, 1, 1)]);
    }
    getViewportCount() {
        return this._viewportCount;
    }
    getFrustum() {
        return this._frustum;
    }
    updateMatrices(e) {
        const t = this.camera,
            n = this.matrix;
        Qa.setFromMatrixPosition(e.matrixWorld),
            t.position.copy(Qa),
            el.setFromMatrixPosition(e.target.matrixWorld),
            t.lookAt(el),
            t.updateMatrixWorld(),
            Hs.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse),
            this._frustum.setFromProjectionMatrix(Hs),
            n.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1),
            n.multiply(Hs);
    }
    getViewport(e) {
        return this._viewports[e];
    }
    getFrameExtents() {
        return this._frameExtents;
    }
    dispose() {
        this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
    }
    copy(e) {
        return (this.camera = e.camera.clone()), (this.bias = e.bias), (this.radius = e.radius), this.mapSize.copy(e.mapSize), this;
    }
    clone() {
        return new this.constructor().copy(this);
    }
    toJSON() {
        const e = {};
        return (
            this.bias !== 0 && (e.bias = this.bias),
            this.normalBias !== 0 && (e.normalBias = this.normalBias),
            this.radius !== 1 && (e.radius = this.radius),
            (this.mapSize.x !== 512 || this.mapSize.y !== 512) && (e.mapSize = this.mapSize.toArray()),
            (e.camera = this.camera.toJSON(!1).object),
            delete e.camera.matrix,
            e
        );
    }
}
class Xm extends qm {
    constructor() {
        super(new kl(-5, 5, 5, -5, 0.5, 500)), (this.isDirectionalLightShadow = !0);
    }
}
class jm extends Yl {
    constructor(e, t) {
        super(e, t), (this.isDirectionalLight = !0), (this.type = 'DirectionalLight'), this.position.copy(ht.DEFAULT_UP), this.updateMatrix(), (this.target = new ht()), (this.shadow = new Xm());
    }
    dispose() {
        this.shadow.dispose();
    }
    copy(e) {
        return super.copy(e), (this.target = e.target.clone()), (this.shadow = e.shadow.clone()), this;
    }
}
class Ym extends Yl {
    constructor(e, t) {
        super(e, t), (this.isAmbientLight = !0), (this.type = 'AmbientLight');
    }
}
class Km {
    constructor(e, t, n = 0, i = 1 / 0) {
        (this.ray = new xo(e, t)),
            (this.near = n),
            (this.far = i),
            (this.camera = null),
            (this.layers = new vo()),
            (this.params = { Mesh: {}, Line: { threshold: 1 }, LOD: {}, Points: { threshold: 1 }, Sprite: {} });
    }
    set(e, t) {
        this.ray.set(e, t);
    }
    setFromCamera(e, t) {
        t.isPerspectiveCamera
            ? (this.ray.origin.setFromMatrixPosition(t.matrixWorld), this.ray.direction.set(e.x, e.y, 0.5).unproject(t).sub(this.ray.origin).normalize(), (this.camera = t))
            : t.isOrthographicCamera
            ? (this.ray.origin.set(e.x, e.y, (t.near + t.far) / (t.near - t.far)).unproject(t), this.ray.direction.set(0, 0, -1).transformDirection(t.matrixWorld), (this.camera = t))
            : console.error('THREE.Raycaster: Unsupported camera type: ' + t.type);
    }
    intersectObject(e, t = !0, n = []) {
        return ao(e, this, n, t), n.sort(tl), n;
    }
    intersectObjects(e, t = !0, n = []) {
        for (let i = 0, s = e.length; i < s; i++) ao(e[i], this, n, t);
        return n.sort(tl), n;
    }
}
function tl(r, e) {
    return r.distance - e.distance;
}
function ao(r, e, t, n) {
    if ((r.layers.test(e.layers) && r.raycast(e, t), n === !0)) {
        const i = r.children;
        for (let s = 0, a = i.length; s < a; s++) ao(i[s], e, t, !0);
    }
}
class nl {
    constructor(e = 1, t = 0, n = 0) {
        return (this.radius = e), (this.phi = t), (this.theta = n), this;
    }
    set(e, t, n) {
        return (this.radius = e), (this.phi = t), (this.theta = n), this;
    }
    copy(e) {
        return (this.radius = e.radius), (this.phi = e.phi), (this.theta = e.theta), this;
    }
    makeSafe() {
        return (this.phi = Math.max(1e-6, Math.min(Math.PI - 1e-6, this.phi))), this;
    }
    setFromVector3(e) {
        return this.setFromCartesianCoords(e.x, e.y, e.z);
    }
    setFromCartesianCoords(e, t, n) {
        return (
            (this.radius = Math.sqrt(e * e + t * t + n * n)),
            this.radius === 0 ? ((this.theta = 0), (this.phi = 0)) : ((this.theta = Math.atan2(e, n)), (this.phi = Math.acos(rt(t / this.radius, -1, 1)))),
            this
        );
    }
    clone() {
        return new this.constructor().copy(this);
    }
}
const il = new R(),
    Rr = new R();
class cn {
    constructor(e = new R(), t = new R()) {
        (this.start = e), (this.end = t);
    }
    set(e, t) {
        return this.start.copy(e), this.end.copy(t), this;
    }
    copy(e) {
        return this.start.copy(e.start), this.end.copy(e.end), this;
    }
    getCenter(e) {
        return e.addVectors(this.start, this.end).multiplyScalar(0.5);
    }
    delta(e) {
        return e.subVectors(this.end, this.start);
    }
    distanceSq() {
        return this.start.distanceToSquared(this.end);
    }
    distance() {
        return this.start.distanceTo(this.end);
    }
    at(e, t) {
        return this.delta(t).multiplyScalar(e).add(this.start);
    }
    closestPointToPointParameter(e, t) {
        il.subVectors(e, this.start), Rr.subVectors(this.end, this.start);
        const n = Rr.dot(Rr);
        let s = Rr.dot(il) / n;
        return t && (s = rt(s, 0, 1)), s;
    }
    closestPointToPoint(e, t, n) {
        const i = this.closestPointToPointParameter(e, t);
        return this.delta(n).multiplyScalar(i).add(this.start);
    }
    applyMatrix4(e) {
        return this.start.applyMatrix4(e), this.end.applyMatrix4(e), this;
    }
    equals(e) {
        return e.start.equals(this.start) && e.end.equals(this.end);
    }
    clone() {
        return new this.constructor().copy(this);
    }
}
typeof __THREE_DEVTOOLS__ < 'u' && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent('register', { detail: { revision: mo } }));
typeof window < 'u' && (window.__THREE__ ? console.warn('WARNING: Multiple instances of Three.js being imported.') : (window.__THREE__ = mo));
const rl = { type: 'change' },
    Ws = { type: 'start' },
    sl = { type: 'end' };
class Zm extends Vn {
    constructor(e, t) {
        super(),
            (this.object = e),
            (this.domElement = t),
            (this.domElement.style.touchAction = 'none'),
            (this.enabled = !0),
            (this.target = new R()),
            (this.minDistance = 0),
            (this.maxDistance = 1 / 0),
            (this.minZoom = 0),
            (this.maxZoom = 1 / 0),
            (this.minPolarAngle = 0),
            (this.maxPolarAngle = Math.PI),
            (this.minAzimuthAngle = -1 / 0),
            (this.maxAzimuthAngle = 1 / 0),
            (this.enableDamping = !1),
            (this.dampingFactor = 0.05),
            (this.enableZoom = !0),
            (this.zoomSpeed = 1),
            (this.enableRotate = !0),
            (this.rotateSpeed = 1),
            (this.enablePan = !0),
            (this.panSpeed = 1),
            (this.screenSpacePanning = !0),
            (this.keyPanSpeed = 7),
            (this.autoRotate = !1),
            (this.autoRotateSpeed = 2),
            (this.keys = { LEFT: 'ArrowLeft', UP: 'ArrowUp', RIGHT: 'ArrowRight', BOTTOM: 'ArrowDown' }),
            (this.mouseButtons = { LEFT: Wn.ROTATE, MIDDLE: Wn.DOLLY, RIGHT: Wn.PAN }),
            (this.touches = { ONE: qn.ROTATE, TWO: qn.DOLLY_PAN }),
            (this.target0 = this.target.clone()),
            (this.position0 = this.object.position.clone()),
            (this.zoom0 = this.object.zoom),
            (this._domElementKeyEvents = null),
            (this.getPolarAngle = function () {
                return o.phi;
            }),
            (this.getAzimuthalAngle = function () {
                return o.theta;
            }),
            (this.getDistance = function () {
                return this.object.position.distanceTo(this.target);
            }),
            (this.listenToKeyEvents = function (L) {
                L.addEventListener('keydown', Ge), (this._domElementKeyEvents = L);
            }),
            (this.stopListenToKeyEvents = function () {
                this._domElementKeyEvents.removeEventListener('keydown', Ge), (this._domElementKeyEvents = null);
            }),
            (this.saveState = function () {
                n.target0.copy(n.target), n.position0.copy(n.object.position), (n.zoom0 = n.object.zoom);
            }),
            (this.reset = function () {
                n.target.copy(n.target0), n.object.position.copy(n.position0), (n.object.zoom = n.zoom0), n.object.updateProjectionMatrix(), n.dispatchEvent(rl), n.update(), (s = i.NONE);
            }),
            (this.update = (function () {
                const L = new R(),
                    Z = new Gn().setFromUnitVectors(e.up, new R(0, 1, 0)),
                    G = Z.clone().invert(),
                    le = new R(),
                    he = new Gn(),
                    pe = 2 * Math.PI;
                return function () {
                    const de = n.object.position;
                    L.copy(de).sub(n.target),
                        L.applyQuaternion(Z),
                        o.setFromVector3(L),
                        n.autoRotate && s === i.NONE && S(P()),
                        n.enableDamping ? ((o.theta += c.theta * n.dampingFactor), (o.phi += c.phi * n.dampingFactor)) : ((o.theta += c.theta), (o.phi += c.phi));
                    let we = n.minAzimuthAngle,
                        Le = n.maxAzimuthAngle;
                    return (
                        isFinite(we) &&
                            isFinite(Le) &&
                            (we < -Math.PI ? (we += pe) : we > Math.PI && (we -= pe),
                            Le < -Math.PI ? (Le += pe) : Le > Math.PI && (Le -= pe),
                            we <= Le ? (o.theta = Math.max(we, Math.min(Le, o.theta))) : (o.theta = o.theta > (we + Le) / 2 ? Math.max(we, o.theta) : Math.min(Le, o.theta))),
                        (o.phi = Math.max(n.minPolarAngle, Math.min(n.maxPolarAngle, o.phi))),
                        o.makeSafe(),
                        (o.radius *= l),
                        (o.radius = Math.max(n.minDistance, Math.min(n.maxDistance, o.radius))),
                        n.enableDamping === !0 ? n.target.addScaledVector(u, n.dampingFactor) : n.target.add(u),
                        L.setFromSpherical(o),
                        L.applyQuaternion(G),
                        de.copy(n.target).add(L),
                        n.object.lookAt(n.target),
                        n.enableDamping === !0 ? ((c.theta *= 1 - n.dampingFactor), (c.phi *= 1 - n.dampingFactor), u.multiplyScalar(1 - n.dampingFactor)) : (c.set(0, 0, 0), u.set(0, 0, 0)),
                        (l = 1),
                        f || le.distanceToSquared(n.object.position) > a || 8 * (1 - he.dot(n.object.quaternion)) > a
                            ? (n.dispatchEvent(rl), le.copy(n.object.position), he.copy(n.object.quaternion), (f = !1), !0)
                            : !1
                    );
                };
            })()),
            (this.dispose = function () {
                n.domElement.removeEventListener('contextmenu', w),
                    n.domElement.removeEventListener('pointerdown', Ae),
                    n.domElement.removeEventListener('pointercancel', We),
                    n.domElement.removeEventListener('wheel', Oe),
                    n.domElement.removeEventListener('pointermove', Xe),
                    n.domElement.removeEventListener('pointerup', We),
                    n._domElementKeyEvents !== null && (n._domElementKeyEvents.removeEventListener('keydown', Ge), (n._domElementKeyEvents = null));
            });
        const n = this,
            i = { NONE: -1, ROTATE: 0, DOLLY: 1, PAN: 2, TOUCH_ROTATE: 3, TOUCH_PAN: 4, TOUCH_DOLLY_PAN: 5, TOUCH_DOLLY_ROTATE: 6 };
        let s = i.NONE;
        const a = 1e-6,
            o = new nl(),
            c = new nl();
        let l = 1;
        const u = new R();
        let f = !1;
        const h = new be(),
            p = new be(),
            g = new be(),
            _ = new be(),
            m = new be(),
            d = new be(),
            y = new be(),
            x = new be(),
            v = new be(),
            M = [],
            b = {};
        function P() {
            return ((2 * Math.PI) / 60 / 60) * n.autoRotateSpeed;
        }
        function A() {
            return Math.pow(0.95, n.zoomSpeed);
        }
        function S(L) {
            c.theta -= L;
        }
        function E(L) {
            c.phi -= L;
        }
        const N = (function () {
                const L = new R();
                return function (G, le) {
                    L.setFromMatrixColumn(le, 0), L.multiplyScalar(-G), u.add(L);
                };
            })(),
            O = (function () {
                const L = new R();
                return function (G, le) {
                    n.screenSpacePanning === !0 ? L.setFromMatrixColumn(le, 1) : (L.setFromMatrixColumn(le, 0), L.crossVectors(n.object.up, L)), L.multiplyScalar(G), u.add(L);
                };
            })(),
            D = (function () {
                const L = new R();
                return function (G, le) {
                    const he = n.domElement;
                    if (n.object.isPerspectiveCamera) {
                        const pe = n.object.position;
                        L.copy(pe).sub(n.target);
                        let ue = L.length();
                        (ue *= Math.tan(((n.object.fov / 2) * Math.PI) / 180)), N((2 * G * ue) / he.clientHeight, n.object.matrix), O((2 * le * ue) / he.clientHeight, n.object.matrix);
                    } else
                        n.object.isOrthographicCamera
                            ? (N((G * (n.object.right - n.object.left)) / n.object.zoom / he.clientWidth, n.object.matrix),
                              O((le * (n.object.top - n.object.bottom)) / n.object.zoom / he.clientHeight, n.object.matrix))
                            : (console.warn('WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.'), (n.enablePan = !1));
                };
            })();
        function U(L) {
            n.object.isPerspectiveCamera
                ? (l /= L)
                : n.object.isOrthographicCamera
                ? ((n.object.zoom = Math.max(n.minZoom, Math.min(n.maxZoom, n.object.zoom * L))), n.object.updateProjectionMatrix(), (f = !0))
                : (console.warn('WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.'), (n.enableZoom = !1));
        }
        function B(L) {
            n.object.isPerspectiveCamera
                ? (l *= L)
                : n.object.isOrthographicCamera
                ? ((n.object.zoom = Math.max(n.minZoom, Math.min(n.maxZoom, n.object.zoom / L))), n.object.updateProjectionMatrix(), (f = !0))
                : (console.warn('WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.'), (n.enableZoom = !1));
        }
        function $(L) {
            h.set(L.clientX, L.clientY);
        }
        function Y(L) {
            y.set(L.clientX, L.clientY);
        }
        function k(L) {
            _.set(L.clientX, L.clientY);
        }
        function K(L) {
            p.set(L.clientX, L.clientY), g.subVectors(p, h).multiplyScalar(n.rotateSpeed);
            const Z = n.domElement;
            S((2 * Math.PI * g.x) / Z.clientHeight), E((2 * Math.PI * g.y) / Z.clientHeight), h.copy(p), n.update();
        }
        function ne(L) {
            x.set(L.clientX, L.clientY), v.subVectors(x, y), v.y > 0 ? U(A()) : v.y < 0 && B(A()), y.copy(x), n.update();
        }
        function _e(L) {
            m.set(L.clientX, L.clientY), d.subVectors(m, _).multiplyScalar(n.panSpeed), D(d.x, d.y), _.copy(m), n.update();
        }
        function ce(L) {
            L.deltaY < 0 ? B(A()) : L.deltaY > 0 && U(A()), n.update();
        }
        function W(L) {
            let Z = !1;
            switch (L.code) {
                case n.keys.UP:
                    L.ctrlKey || L.metaKey || L.shiftKey ? E((2 * Math.PI * n.rotateSpeed) / n.domElement.clientHeight) : D(0, n.keyPanSpeed), (Z = !0);
                    break;
                case n.keys.BOTTOM:
                    L.ctrlKey || L.metaKey || L.shiftKey ? E((-2 * Math.PI * n.rotateSpeed) / n.domElement.clientHeight) : D(0, -n.keyPanSpeed), (Z = !0);
                    break;
                case n.keys.LEFT:
                    L.ctrlKey || L.metaKey || L.shiftKey ? S((2 * Math.PI * n.rotateSpeed) / n.domElement.clientHeight) : D(n.keyPanSpeed, 0), (Z = !0);
                    break;
                case n.keys.RIGHT:
                    L.ctrlKey || L.metaKey || L.shiftKey ? S((-2 * Math.PI * n.rotateSpeed) / n.domElement.clientHeight) : D(-n.keyPanSpeed, 0), (Z = !0);
                    break;
            }
            Z && (L.preventDefault(), n.update());
        }
        function J() {
            if (M.length === 1) h.set(M[0].pageX, M[0].pageY);
            else {
                const L = 0.5 * (M[0].pageX + M[1].pageX),
                    Z = 0.5 * (M[0].pageY + M[1].pageY);
                h.set(L, Z);
            }
        }
        function ie() {
            if (M.length === 1) _.set(M[0].pageX, M[0].pageY);
            else {
                const L = 0.5 * (M[0].pageX + M[1].pageX),
                    Z = 0.5 * (M[0].pageY + M[1].pageY);
                _.set(L, Z);
            }
        }
        function oe() {
            const L = M[0].pageX - M[1].pageX,
                Z = M[0].pageY - M[1].pageY,
                G = Math.sqrt(L * L + Z * Z);
            y.set(0, G);
        }
        function V() {
            n.enableZoom && oe(), n.enablePan && ie();
        }
        function Me() {
            n.enableZoom && oe(), n.enableRotate && J();
        }
        function xe(L) {
            if (M.length == 1) p.set(L.pageX, L.pageY);
            else {
                const G = ae(L),
                    le = 0.5 * (L.pageX + G.x),
                    he = 0.5 * (L.pageY + G.y);
                p.set(le, he);
            }
            g.subVectors(p, h).multiplyScalar(n.rotateSpeed);
            const Z = n.domElement;
            S((2 * Math.PI * g.x) / Z.clientHeight), E((2 * Math.PI * g.y) / Z.clientHeight), h.copy(p);
        }
        function re(L) {
            if (M.length === 1) m.set(L.pageX, L.pageY);
            else {
                const Z = ae(L),
                    G = 0.5 * (L.pageX + Z.x),
                    le = 0.5 * (L.pageY + Z.y);
                m.set(G, le);
            }
            d.subVectors(m, _).multiplyScalar(n.panSpeed), D(d.x, d.y), _.copy(m);
        }
        function ye(L) {
            const Z = ae(L),
                G = L.pageX - Z.x,
                le = L.pageY - Z.y,
                he = Math.sqrt(G * G + le * le);
            x.set(0, he), v.set(0, Math.pow(x.y / y.y, n.zoomSpeed)), U(v.y), y.copy(x);
        }
        function Fe(L) {
            n.enableZoom && ye(L), n.enablePan && re(L);
        }
        function me(L) {
            n.enableZoom && ye(L), n.enableRotate && xe(L);
        }
        function Ae(L) {
            n.enabled !== !1 &&
                (M.length === 0 && (n.domElement.setPointerCapture(L.pointerId), n.domElement.addEventListener('pointermove', Xe), n.domElement.addEventListener('pointerup', We)),
                H(L),
                L.pointerType === 'touch' ? ot(L) : Ze(L));
        }
        function Xe(L) {
            n.enabled !== !1 && (L.pointerType === 'touch' ? C(L) : je(L));
        }
        function We(L) {
            Q(L),
                M.length === 0 && (n.domElement.releasePointerCapture(L.pointerId), n.domElement.removeEventListener('pointermove', Xe), n.domElement.removeEventListener('pointerup', We)),
                n.dispatchEvent(sl),
                (s = i.NONE);
        }
        function Ze(L) {
            let Z;
            switch (L.button) {
                case 0:
                    Z = n.mouseButtons.LEFT;
                    break;
                case 1:
                    Z = n.mouseButtons.MIDDLE;
                    break;
                case 2:
                    Z = n.mouseButtons.RIGHT;
                    break;
                default:
                    Z = -1;
            }
            switch (Z) {
                case Wn.DOLLY:
                    if (n.enableZoom === !1) return;
                    Y(L), (s = i.DOLLY);
                    break;
                case Wn.ROTATE:
                    if (L.ctrlKey || L.metaKey || L.shiftKey) {
                        if (n.enablePan === !1) return;
                        k(L), (s = i.PAN);
                    } else {
                        if (n.enableRotate === !1) return;
                        $(L), (s = i.ROTATE);
                    }
                    break;
                case Wn.PAN:
                    if (L.ctrlKey || L.metaKey || L.shiftKey) {
                        if (n.enableRotate === !1) return;
                        $(L), (s = i.ROTATE);
                    } else {
                        if (n.enablePan === !1) return;
                        k(L), (s = i.PAN);
                    }
                    break;
                default:
                    s = i.NONE;
            }
            s !== i.NONE && n.dispatchEvent(Ws);
        }
        function je(L) {
            switch (s) {
                case i.ROTATE:
                    if (n.enableRotate === !1) return;
                    K(L);
                    break;
                case i.DOLLY:
                    if (n.enableZoom === !1) return;
                    ne(L);
                    break;
                case i.PAN:
                    if (n.enablePan === !1) return;
                    _e(L);
                    break;
            }
        }
        function Oe(L) {
            n.enabled === !1 || n.enableZoom === !1 || s !== i.NONE || (L.preventDefault(), n.dispatchEvent(Ws), ce(L), n.dispatchEvent(sl));
        }
        function Ge(L) {
            n.enabled === !1 || n.enablePan === !1 || W(L);
        }
        function ot(L) {
            switch ((te(L), M.length)) {
                case 1:
                    switch (n.touches.ONE) {
                        case qn.ROTATE:
                            if (n.enableRotate === !1) return;
                            J(), (s = i.TOUCH_ROTATE);
                            break;
                        case qn.PAN:
                            if (n.enablePan === !1) return;
                            ie(), (s = i.TOUCH_PAN);
                            break;
                        default:
                            s = i.NONE;
                    }
                    break;
                case 2:
                    switch (n.touches.TWO) {
                        case qn.DOLLY_PAN:
                            if (n.enableZoom === !1 && n.enablePan === !1) return;
                            V(), (s = i.TOUCH_DOLLY_PAN);
                            break;
                        case qn.DOLLY_ROTATE:
                            if (n.enableZoom === !1 && n.enableRotate === !1) return;
                            Me(), (s = i.TOUCH_DOLLY_ROTATE);
                            break;
                        default:
                            s = i.NONE;
                    }
                    break;
                default:
                    s = i.NONE;
            }
            s !== i.NONE && n.dispatchEvent(Ws);
        }
        function C(L) {
            switch ((te(L), s)) {
                case i.TOUCH_ROTATE:
                    if (n.enableRotate === !1) return;
                    xe(L), n.update();
                    break;
                case i.TOUCH_PAN:
                    if (n.enablePan === !1) return;
                    re(L), n.update();
                    break;
                case i.TOUCH_DOLLY_PAN:
                    if (n.enableZoom === !1 && n.enablePan === !1) return;
                    Fe(L), n.update();
                    break;
                case i.TOUCH_DOLLY_ROTATE:
                    if (n.enableZoom === !1 && n.enableRotate === !1) return;
                    me(L), n.update();
                    break;
                default:
                    s = i.NONE;
            }
        }
        function w(L) {
            n.enabled !== !1 && L.preventDefault();
        }
        function H(L) {
            M.push(L);
        }
        function Q(L) {
            delete b[L.pointerId];
            for (let Z = 0; Z < M.length; Z++)
                if (M[Z].pointerId == L.pointerId) {
                    M.splice(Z, 1);
                    return;
                }
        }
        function te(L) {
            let Z = b[L.pointerId];
            Z === void 0 && ((Z = new be()), (b[L.pointerId] = Z)), Z.set(L.pageX, L.pageY);
        }
        function ae(L) {
            const Z = L.pointerId === M[0].pointerId ? M[1] : M[0];
            return b[Z.pointerId];
        }
        n.domElement.addEventListener('contextmenu', w),
            n.domElement.addEventListener('pointerdown', Ae),
            n.domElement.addEventListener('pointercancel', We),
            n.domElement.addEventListener('wheel', Oe, { passive: !1 }),
            this.update();
    }
}
function $m(r, e = !1) {
    const t = r[0].index !== null,
        n = new Set(Object.keys(r[0].attributes)),
        i = new Set(Object.keys(r[0].morphAttributes)),
        s = {},
        a = {},
        o = r[0].morphTargetsRelative,
        c = new hn();
    let l = 0;
    for (let u = 0; u < r.length; ++u) {
        const f = r[u];
        let h = 0;
        if (t !== (f.index !== null))
            return (
                console.error(
                    'THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index ' +
                        u +
                        '. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.',
                ),
                null
            );
        for (const p in f.attributes) {
            if (!n.has(p))
                return (
                    console.error(
                        'THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index ' +
                            u +
                            '. All geometries must have compatible attributes; make sure "' +
                            p +
                            '" attribute exists among all geometries, or in none of them.',
                    ),
                    null
                );
            s[p] === void 0 && (s[p] = []), s[p].push(f.attributes[p]), h++;
        }
        if (h !== n.size)
            return console.error('THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index ' + u + '. Make sure all geometries have the same number of attributes.'), null;
        if (o !== f.morphTargetsRelative)
            return console.error('THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index ' + u + '. .morphTargetsRelative must be consistent throughout all geometries.'), null;
        for (const p in f.morphAttributes) {
            if (!i.has(p))
                return console.error('THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index ' + u + '.  .morphAttributes must be consistent throughout all geometries.'), null;
            a[p] === void 0 && (a[p] = []), a[p].push(f.morphAttributes[p]);
        }
        if (e) {
            let p;
            if (t) p = f.index.count;
            else if (f.attributes.position !== void 0) p = f.attributes.position.count;
            else return console.error('THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index ' + u + '. The geometry must have either an index or a position attribute'), null;
            c.addGroup(l, p, u), (l += p);
        }
    }
    if (t) {
        let u = 0;
        const f = [];
        for (let h = 0; h < r.length; ++h) {
            const p = r[h].index;
            for (let g = 0; g < p.count; ++g) f.push(p.getX(g) + u);
            u += r[h].attributes.position.count;
        }
        c.setIndex(f);
    }
    for (const u in s) {
        const f = ol(s[u]);
        if (!f) return console.error('THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the ' + u + ' attribute.'), null;
        c.setAttribute(u, f);
    }
    for (const u in a) {
        const f = a[u][0].length;
        if (f === 0) break;
        (c.morphAttributes = c.morphAttributes || {}), (c.morphAttributes[u] = []);
        for (let h = 0; h < f; ++h) {
            const p = [];
            for (let _ = 0; _ < a[u].length; ++_) p.push(a[u][_][h]);
            const g = ol(p);
            if (!g) return console.error('THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the ' + u + ' morphAttribute.'), null;
            c.morphAttributes[u].push(g);
        }
    }
    return c;
}
function ol(r) {
    let e,
        t,
        n,
        i = -1,
        s = 0;
    for (let l = 0; l < r.length; ++l) {
        const u = r[l];
        if (u.isInterleavedBufferAttribute) return console.error('THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported.'), null;
        if ((e === void 0 && (e = u.array.constructor), e !== u.array.constructor))
            return console.error('THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.'), null;
        if ((t === void 0 && (t = u.itemSize), t !== u.itemSize))
            return console.error('THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.'), null;
        if ((n === void 0 && (n = u.normalized), n !== u.normalized))
            return console.error('THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.'), null;
        if ((i === -1 && (i = u.gpuType), i !== u.gpuType))
            return console.error('THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.'), null;
        s += u.array.length;
    }
    const a = new e(s);
    let o = 0;
    for (let l = 0; l < r.length; ++l) a.set(r[l].array, o), (o += r[l].array.length);
    const c = new Tt(a, t, n);
    return i !== void 0 && (c.gpuType = i), c;
}
class as extends Et {
    constructor() {
        const e = as.SkyShader,
            t = new bn({ name: 'SkyShader', fragmentShader: e.fragmentShader, vertexShader: e.vertexShader, uniforms: Bl.clone(e.uniforms), side: ft, depthWrite: !1 });
        super(new Ci(1, 1, 1), t), (this.isSky = !0);
    }
}
as.SkyShader = {
    uniforms: { turbidity: { value: 2 }, rayleigh: { value: 1 }, mieCoefficient: { value: 0.005 }, mieDirectionalG: { value: 0.8 }, sunPosition: { value: new R() }, up: { value: new R(0, 1, 0) } },
    vertexShader: `
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;
		uniform vec3 up;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calcuation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( dot( vSunDirection, up ) );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorbtion + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,
    fragmentShader: `
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform vec3 up;

		const vec3 cameraPos = vec3( 0.0, 0.0, 0.0 );

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPos );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, dot( up, direction ) ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );
			L0 += ( vSunE * 19000.0 * Fex ) * sundisk;

			vec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

			vec3 retColor = pow( texColor, vec3( 1.0 / ( 1.2 + ( 1.2 * vSunfade ) ) ) );

			gl_FragColor = vec4( retColor, 1.0 );

			#include <tonemapping_fragment>
			#include <encodings_fragment>

		}`,
};
const Kl = 0,
    Jm = 1,
    Qm = 2,
    al = 2,
    qs = 1.25,
    ll = 1,
    Hr = 6 * 4 + 4 + 4,
    lo = 65535,
    eg = Math.pow(2, -24);
class Dr {
    constructor() {}
}
function Kt(r, e, t) {
    return (t.min.x = e[r]), (t.min.y = e[r + 1]), (t.min.z = e[r + 2]), (t.max.x = e[r + 3]), (t.max.y = e[r + 4]), (t.max.z = e[r + 5]), t;
}
function tg(r) {
    (r[0] = r[1] = r[2] = 1 / 0), (r[3] = r[4] = r[5] = -1 / 0);
}
function cl(r) {
    let e = -1,
        t = -1 / 0;
    for (let n = 0; n < 3; n++) {
        const i = r[n + 3] - r[n];
        i > t && ((t = i), (e = n));
    }
    return e;
}
function ul(r, e) {
    e.set(r);
}
function fl(r, e, t) {
    let n, i;
    for (let s = 0; s < 3; s++) {
        const a = s + 3;
        (n = r[s]), (i = e[s]), (t[s] = n < i ? n : i), (n = r[a]), (i = e[a]), (t[a] = n > i ? n : i);
    }
}
function Ir(r, e, t) {
    for (let n = 0; n < 3; n++) {
        const i = e[r + 2 * n],
            s = e[r + 2 * n + 1],
            a = i - s,
            o = i + s;
        a < t[n] && (t[n] = a), o > t[n + 3] && (t[n + 3] = o);
    }
}
function zi(r) {
    const e = r[3] - r[0],
        t = r[4] - r[1],
        n = r[5] - r[2];
    return 2 * (e * t + t * n + n * e);
}
function ng(r, e) {
    if (!r.index) {
        const t = r.attributes.position.count,
            n = e.useSharedArrayBuffer ? SharedArrayBuffer : ArrayBuffer;
        let i;
        t > 65535 ? (i = new Uint32Array(new n(4 * t))) : (i = new Uint16Array(new n(2 * t))), r.setIndex(new Tt(i, 1));
        for (let s = 0; s < t; s++) i[s] = s;
    }
}
function ig(r) {
    if (!r.groups || !r.groups.length) return [{ offset: 0, count: r.index.count / 3 }];
    const e = [],
        t = new Set();
    for (const i of r.groups) t.add(i.start), t.add(i.start + i.count);
    const n = Array.from(t.values()).sort((i, s) => i - s);
    for (let i = 0; i < n.length - 1; i++) {
        const s = n[i],
            a = n[i + 1];
        e.push({ offset: s / 3, count: (a - s) / 3 });
    }
    return e;
}
function Xs(r, e, t, n, i = null) {
    let s = 1 / 0,
        a = 1 / 0,
        o = 1 / 0,
        c = -1 / 0,
        l = -1 / 0,
        u = -1 / 0,
        f = 1 / 0,
        h = 1 / 0,
        p = 1 / 0,
        g = -1 / 0,
        _ = -1 / 0,
        m = -1 / 0;
    const d = i !== null;
    for (let y = e * 6, x = (e + t) * 6; y < x; y += 6) {
        const v = r[y + 0],
            M = r[y + 1],
            b = v - M,
            P = v + M;
        b < s && (s = b), P > c && (c = P), d && v < f && (f = v), d && v > g && (g = v);
        const A = r[y + 2],
            S = r[y + 3],
            E = A - S,
            N = A + S;
        E < a && (a = E), N > l && (l = N), d && A < h && (h = A), d && A > _ && (_ = A);
        const O = r[y + 4],
            D = r[y + 5],
            U = O - D,
            B = O + D;
        U < o && (o = U), B > u && (u = B), d && O < p && (p = O), d && O > m && (m = O);
    }
    (n[0] = s), (n[1] = a), (n[2] = o), (n[3] = c), (n[4] = l), (n[5] = u), d && ((i[0] = f), (i[1] = h), (i[2] = p), (i[3] = g), (i[4] = _), (i[5] = m));
}
function rg(r, e, t, n) {
    let i = 1 / 0,
        s = 1 / 0,
        a = 1 / 0,
        o = -1 / 0,
        c = -1 / 0,
        l = -1 / 0;
    for (let u = e * 6, f = (e + t) * 6; u < f; u += 6) {
        const h = r[u + 0];
        h < i && (i = h), h > o && (o = h);
        const p = r[u + 2];
        p < s && (s = p), p > c && (c = p);
        const g = r[u + 4];
        g < a && (a = g), g > l && (l = g);
    }
    (n[0] = i), (n[1] = s), (n[2] = a), (n[3] = o), (n[4] = c), (n[5] = l);
}
function sg(r, e, t, n, i) {
    let s = t,
        a = t + n - 1;
    const o = i.pos,
        c = i.axis * 2;
    for (;;) {
        for (; s <= a && e[s * 6 + c] < o; ) s++;
        for (; s <= a && e[a * 6 + c] >= o; ) a--;
        if (s < a) {
            for (let l = 0; l < 3; l++) {
                let u = r[s * 3 + l];
                (r[s * 3 + l] = r[a * 3 + l]), (r[a * 3 + l] = u);
                let f = e[s * 6 + l * 2 + 0];
                (e[s * 6 + l * 2 + 0] = e[a * 6 + l * 2 + 0]), (e[a * 6 + l * 2 + 0] = f);
                let h = e[s * 6 + l * 2 + 1];
                (e[s * 6 + l * 2 + 1] = e[a * 6 + l * 2 + 1]), (e[a * 6 + l * 2 + 1] = h);
            }
            s++, a--;
        } else return s;
    }
}
const on = 32,
    og = (r, e) => r.candidate - e.candidate,
    xn = new Array(on).fill().map(() => ({ count: 0, bounds: new Float32Array(6), rightCacheBounds: new Float32Array(6), leftCacheBounds: new Float32Array(6), candidate: 0 })),
    Ur = new Float32Array(6);
function ag(r, e, t, n, i, s) {
    let a = -1,
        o = 0;
    if (s === Kl) (a = cl(e)), a !== -1 && (o = (e[a] + e[a + 3]) / 2);
    else if (s === Jm) (a = cl(r)), a !== -1 && (o = lg(t, n, i, a));
    else if (s === Qm) {
        const c = zi(r);
        let l = qs * i;
        const u = n * 6,
            f = (n + i) * 6;
        for (let h = 0; h < 3; h++) {
            const p = e[h],
                m = (e[h + 3] - p) / on;
            if (i < on / 4) {
                const d = [...xn];
                d.length = i;
                let y = 0;
                for (let v = u; v < f; v += 6, y++) {
                    const M = d[y];
                    (M.candidate = t[v + 2 * h]), (M.count = 0);
                    const { bounds: b, leftCacheBounds: P, rightCacheBounds: A } = M;
                    for (let S = 0; S < 3; S++) (A[S] = 1 / 0), (A[S + 3] = -1 / 0), (P[S] = 1 / 0), (P[S + 3] = -1 / 0), (b[S] = 1 / 0), (b[S + 3] = -1 / 0);
                    Ir(v, t, b);
                }
                d.sort(og);
                let x = i;
                for (let v = 0; v < x; v++) {
                    const M = d[v];
                    for (; v + 1 < x && d[v + 1].candidate === M.candidate; ) d.splice(v + 1, 1), x--;
                }
                for (let v = u; v < f; v += 6) {
                    const M = t[v + 2 * h];
                    for (let b = 0; b < x; b++) {
                        const P = d[b];
                        M >= P.candidate ? Ir(v, t, P.rightCacheBounds) : (Ir(v, t, P.leftCacheBounds), P.count++);
                    }
                }
                for (let v = 0; v < x; v++) {
                    const M = d[v],
                        b = M.count,
                        P = i - M.count,
                        A = M.leftCacheBounds,
                        S = M.rightCacheBounds;
                    let E = 0;
                    b !== 0 && (E = zi(A) / c);
                    let N = 0;
                    P !== 0 && (N = zi(S) / c);
                    const O = ll + qs * (E * b + N * P);
                    O < l && ((a = h), (l = O), (o = M.candidate));
                }
            } else {
                for (let x = 0; x < on; x++) {
                    const v = xn[x];
                    (v.count = 0), (v.candidate = p + m + x * m);
                    const M = v.bounds;
                    for (let b = 0; b < 3; b++) (M[b] = 1 / 0), (M[b + 3] = -1 / 0);
                }
                for (let x = u; x < f; x += 6) {
                    let b = ~~((t[x + 2 * h] - p) / m);
                    b >= on && (b = on - 1);
                    const P = xn[b];
                    P.count++, Ir(x, t, P.bounds);
                }
                const d = xn[on - 1];
                ul(d.bounds, d.rightCacheBounds);
                for (let x = on - 2; x >= 0; x--) {
                    const v = xn[x],
                        M = xn[x + 1];
                    fl(v.bounds, M.rightCacheBounds, v.rightCacheBounds);
                }
                let y = 0;
                for (let x = 0; x < on - 1; x++) {
                    const v = xn[x],
                        M = v.count,
                        b = v.bounds,
                        A = xn[x + 1].rightCacheBounds;
                    M !== 0 && (y === 0 ? ul(b, Ur) : fl(b, Ur, Ur)), (y += M);
                    let S = 0,
                        E = 0;
                    y !== 0 && (S = zi(Ur) / c);
                    const N = i - y;
                    N !== 0 && (E = zi(A) / c);
                    const O = ll + qs * (S * y + E * N);
                    O < l && ((a = h), (l = O), (o = v.candidate));
                }
            }
        }
    } else console.warn(`MeshBVH: Invalid build strategy value ${s} used.`);
    return { axis: a, pos: o };
}
function lg(r, e, t, n) {
    let i = 0;
    for (let s = e, a = e + t; s < a; s++) i += r[s * 6 + n * 2];
    return i / t;
}
function cg(r, e) {
    tg(e);
    const t = r.attributes.position,
        n = r.index.array,
        i = n.length / 3,
        s = new Float32Array(i * 6),
        a = t.normalized,
        o = t.array,
        c = t.offset || 0;
    let l = 3;
    t.isInterleavedBufferAttribute && (l = t.data.stride);
    const u = ['getX', 'getY', 'getZ'];
    for (let f = 0; f < i; f++) {
        const h = f * 3,
            p = f * 6;
        let g, _, m;
        a ? ((g = n[h + 0]), (_ = n[h + 1]), (m = n[h + 2])) : ((g = n[h + 0] * l + c), (_ = n[h + 1] * l + c), (m = n[h + 2] * l + c));
        for (let d = 0; d < 3; d++) {
            let y, x, v;
            a ? ((y = t[u[d]](g)), (x = t[u[d]](_)), (v = t[u[d]](m))) : ((y = o[g + d]), (x = o[_ + d]), (v = o[m + d]));
            let M = y;
            x < M && (M = x), v < M && (M = v);
            let b = y;
            x > b && (b = x), v > b && (b = v);
            const P = (b - M) / 2,
                A = d * 2;
            (s[p + A + 0] = M + P), (s[p + A + 1] = P + (Math.abs(M) + P) * eg), M < e[d] && (e[d] = M), b > e[d + 3] && (e[d + 3] = b);
        }
    }
    return s;
}
function ug(r, e) {
    function t(d) {
        h && h(d / p);
    }
    function n(d, y, x, v = null, M = 0) {
        if ((!g && M >= c && ((g = !0), l && (console.warn(`MeshBVH: Max depth of ${c} reached when generating BVH. Consider increasing maxDepth.`), console.warn(r))), x <= u || M >= c))
            return t(y + x), (d.offset = y), (d.count = x), d;
        const b = ag(d.boundingData, v, a, y, x, f);
        if (b.axis === -1) return t(y + x), (d.offset = y), (d.count = x), d;
        const P = sg(o, a, y, x, b);
        if (P === y || P === y + x) t(y + x), (d.offset = y), (d.count = x);
        else {
            d.splitAxis = b.axis;
            const A = new Dr(),
                S = y,
                E = P - y;
            (d.left = A), (A.boundingData = new Float32Array(6)), Xs(a, S, E, A.boundingData, s), n(A, S, E, s, M + 1);
            const N = new Dr(),
                O = P,
                D = x - E;
            (d.right = N), (N.boundingData = new Float32Array(6)), Xs(a, O, D, N.boundingData, s), n(N, O, D, s, M + 1);
        }
        return d;
    }
    ng(r, e);
    const i = new Float32Array(6),
        s = new Float32Array(6),
        a = cg(r, i),
        o = r.index.array,
        c = e.maxDepth,
        l = e.verbose,
        u = e.maxLeafTris,
        f = e.strategy,
        h = e.onProgress,
        p = r.index.count / 3;
    let g = !1;
    const _ = [],
        m = ig(r);
    if (m.length === 1) {
        const d = m[0],
            y = new Dr();
        (y.boundingData = i), rg(a, d.offset, d.count, s), n(y, d.offset, d.count, s), _.push(y);
    } else
        for (let d of m) {
            const y = new Dr();
            (y.boundingData = new Float32Array(6)), Xs(a, d.offset, d.count, y.boundingData, s), n(y, d.offset, d.count, s), _.push(y);
        }
    return _;
}
function fg(r, e) {
    const t = ug(r, e);
    let n, i, s;
    const a = [],
        o = e.useSharedArrayBuffer ? SharedArrayBuffer : ArrayBuffer;
    for (let u = 0; u < t.length; u++) {
        const f = t[u];
        let h = c(f);
        const p = new o(Hr * h);
        (n = new Float32Array(p)), (i = new Uint32Array(p)), (s = new Uint16Array(p)), l(0, f), a.push(p);
    }
    return a;
    function c(u) {
        return u.count ? 1 : 1 + c(u.left) + c(u.right);
    }
    function l(u, f) {
        const h = u / 4,
            p = u / 2,
            g = !!f.count,
            _ = f.boundingData;
        for (let m = 0; m < 6; m++) n[h + m] = _[m];
        if (g) {
            const m = f.offset,
                d = f.count;
            return (i[h + 6] = m), (s[p + 14] = d), (s[p + 15] = lo), u + Hr;
        } else {
            const m = f.left,
                d = f.right,
                y = f.splitAxis;
            let x;
            if (((x = l(u + Hr, m)), x / 4 > Math.pow(2, 32))) throw new Error('MeshBVH: Cannot store child pointer greater than 32 bits.');
            return (i[h + 6] = x / 4), (x = l(x, d)), (i[h + 7] = y), x;
        }
    }
}
class un {
    constructor() {
        (this.min = 1 / 0), (this.max = -1 / 0);
    }
    setFromPointsField(e, t) {
        let n = 1 / 0,
            i = -1 / 0;
        for (let s = 0, a = e.length; s < a; s++) {
            const c = e[s][t];
            (n = c < n ? c : n), (i = c > i ? c : i);
        }
        (this.min = n), (this.max = i);
    }
    setFromPoints(e, t) {
        let n = 1 / 0,
            i = -1 / 0;
        for (let s = 0, a = t.length; s < a; s++) {
            const o = t[s],
                c = e.dot(o);
            (n = c < n ? c : n), (i = c > i ? c : i);
        }
        (this.min = n), (this.max = i);
    }
    isSeparated(e) {
        return this.min > e.max || e.min > this.max;
    }
}
un.prototype.setFromBox = (function () {
    const r = new R();
    return function (t, n) {
        const i = n.min,
            s = n.max;
        let a = 1 / 0,
            o = -1 / 0;
        for (let c = 0; c <= 1; c++)
            for (let l = 0; l <= 1; l++)
                for (let u = 0; u <= 1; u++) {
                    (r.x = i.x * c + s.x * (1 - c)), (r.y = i.y * l + s.y * (1 - l)), (r.z = i.z * u + s.z * (1 - u));
                    const f = t.dot(r);
                    (a = Math.min(f, a)), (o = Math.max(f, o));
                }
        (this.min = a), (this.max = o);
    };
})();
const hg = (function () {
        const r = new R(),
            e = new R(),
            t = new R();
        return function (i, s, a) {
            const o = i.start,
                c = r,
                l = s.start,
                u = e;
            t.subVectors(o, l), r.subVectors(i.end, i.start), e.subVectors(s.end, s.start);
            const f = t.dot(u),
                h = u.dot(c),
                p = u.dot(u),
                g = t.dot(c),
                m = c.dot(c) * p - h * h;
            let d, y;
            m !== 0 ? (d = (f * h - g * p) / m) : (d = 0), (y = (f + d * h) / p), (a.x = d), (a.y = y);
        };
    })(),
    Eo = (function () {
        const r = new be(),
            e = new R(),
            t = new R();
        return function (i, s, a, o) {
            hg(i, s, r);
            let c = r.x,
                l = r.y;
            if (c >= 0 && c <= 1 && l >= 0 && l <= 1) {
                i.at(c, a), s.at(l, o);
                return;
            } else if (c >= 0 && c <= 1) {
                l < 0 ? s.at(0, o) : s.at(1, o), i.closestPointToPoint(o, !0, a);
                return;
            } else if (l >= 0 && l <= 1) {
                c < 0 ? i.at(0, a) : i.at(1, a), s.closestPointToPoint(a, !0, o);
                return;
            } else {
                let u;
                c < 0 ? (u = i.start) : (u = i.end);
                let f;
                l < 0 ? (f = s.start) : (f = s.end);
                const h = e,
                    p = t;
                if ((i.closestPointToPoint(f, !0, e), s.closestPointToPoint(u, !0, t), h.distanceToSquared(f) <= p.distanceToSquared(u))) {
                    a.copy(h), o.copy(f);
                    return;
                } else {
                    a.copy(u), o.copy(p);
                    return;
                }
            }
        };
    })(),
    dg = (function () {
        const r = new R(),
            e = new R(),
            t = new an(),
            n = new cn();
        return function (s, a) {
            const { radius: o, center: c } = s,
                { a: l, b: u, c: f } = a;
            if (
                ((n.start = l),
                (n.end = u),
                n.closestPointToPoint(c, !0, r).distanceTo(c) <= o ||
                    ((n.start = l), (n.end = f), n.closestPointToPoint(c, !0, r).distanceTo(c) <= o) ||
                    ((n.start = u), (n.end = f), n.closestPointToPoint(c, !0, r).distanceTo(c) <= o))
            )
                return !0;
            const _ = a.getPlane(t);
            if (Math.abs(_.distanceToPoint(c)) <= o) {
                const d = _.projectPoint(c, e);
                if (a.containsPoint(d)) return !0;
            }
            return !1;
        };
    })(),
    pg = 1e-15;
function li(r) {
    return Math.abs(r) < pg;
}
class fn extends ut {
    constructor(...e) {
        super(...e),
            (this.isExtendedTriangle = !0),
            (this.satAxes = new Array(4).fill().map(() => new R())),
            (this.satBounds = new Array(4).fill().map(() => new un())),
            (this.points = [this.a, this.b, this.c]),
            (this.sphere = new ns()),
            (this.plane = new an()),
            (this.needsUpdate = !0);
    }
    intersectsSphere(e) {
        return dg(e, this);
    }
    update() {
        const e = this.a,
            t = this.b,
            n = this.c,
            i = this.points,
            s = this.satAxes,
            a = this.satBounds,
            o = s[0],
            c = a[0];
        this.getNormal(o), c.setFromPoints(o, i);
        const l = s[1],
            u = a[1];
        l.subVectors(e, t), u.setFromPoints(l, i);
        const f = s[2],
            h = a[2];
        f.subVectors(t, n), h.setFromPoints(f, i);
        const p = s[3],
            g = a[3];
        p.subVectors(n, e), g.setFromPoints(p, i), this.sphere.setFromPoints(this.points), this.plane.setFromNormalAndCoplanarPoint(o, e), (this.needsUpdate = !1);
    }
}
fn.prototype.closestPointToSegment = (function () {
    const r = new R(),
        e = new R(),
        t = new cn();
    return function (i, s = null, a = null) {
        const { start: o, end: c } = i,
            l = this.points;
        let u,
            f = 1 / 0;
        for (let h = 0; h < 3; h++) {
            const p = (h + 1) % 3;
            t.start.copy(l[h]), t.end.copy(l[p]), Eo(t, i, r, e), (u = r.distanceToSquared(e)), u < f && ((f = u), s && s.copy(r), a && a.copy(e));
        }
        return (
            this.closestPointToPoint(o, r),
            (u = o.distanceToSquared(r)),
            u < f && ((f = u), s && s.copy(r), a && a.copy(o)),
            this.closestPointToPoint(c, r),
            (u = c.distanceToSquared(r)),
            u < f && ((f = u), s && s.copy(r), a && a.copy(c)),
            Math.sqrt(f)
        );
    };
})();
fn.prototype.intersectsTriangle = (function () {
    const r = new fn(),
        e = new Array(3),
        t = new Array(3),
        n = new un(),
        i = new un(),
        s = new R(),
        a = new R(),
        o = new R(),
        c = new R(),
        l = new cn(),
        u = new cn(),
        f = new cn();
    return function (p, g = null, _ = !1) {
        this.needsUpdate && this.update(), p.isExtendedTriangle ? p.needsUpdate && p.update() : (r.copy(p), r.update(), (p = r));
        const m = this.plane,
            d = p.plane;
        if (Math.abs(m.normal.dot(d.normal)) > 1 - 1e-10) {
            const y = this.satBounds,
                x = this.satAxes;
            (t[0] = p.a), (t[1] = p.b), (t[2] = p.c);
            for (let b = 0; b < 4; b++) {
                const P = y[b],
                    A = x[b];
                if ((n.setFromPoints(A, t), P.isSeparated(n))) return !1;
            }
            const v = p.satBounds,
                M = p.satAxes;
            (e[0] = this.a), (e[1] = this.b), (e[2] = this.c);
            for (let b = 0; b < 4; b++) {
                const P = v[b],
                    A = M[b];
                if ((n.setFromPoints(A, e), P.isSeparated(n))) return !1;
            }
            for (let b = 0; b < 4; b++) {
                const P = x[b];
                for (let A = 0; A < 4; A++) {
                    const S = M[A];
                    if ((s.crossVectors(P, S), n.setFromPoints(s, e), i.setFromPoints(s, t), n.isSeparated(i))) return !1;
                }
            }
            return (
                g &&
                    (_ || console.warn('ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0.'),
                    g.start.set(0, 0, 0),
                    g.end.set(0, 0, 0)),
                !0
            );
        } else {
            const y = this.points;
            let x = !1,
                v = 0;
            for (let U = 0; U < 3; U++) {
                const B = y[U],
                    $ = y[(U + 1) % 3];
                l.start.copy(B), l.end.copy($), l.delta(a);
                const Y = x ? u.start : u.end,
                    k = li(d.distanceToPoint(B));
                if (li(d.normal.dot(a)) && k) {
                    u.copy(l), (v = 2);
                    break;
                }
                const K = d.intersectLine(l, Y);
                if ((!K && k && Y.copy(B), (K || k) && !li(Y.distanceTo($)))) {
                    if ((v++, x)) break;
                    x = !0;
                }
            }
            if (v === 1 && p.containsPoint(u.end)) return g && (g.start.copy(u.end), g.end.copy(u.end)), !0;
            if (v !== 2) return !1;
            const M = p.points;
            let b = !1,
                P = 0;
            for (let U = 0; U < 3; U++) {
                const B = M[U],
                    $ = M[(U + 1) % 3];
                l.start.copy(B), l.end.copy($), l.delta(o);
                const Y = b ? f.start : f.end,
                    k = li(m.distanceToPoint(B));
                if (li(m.normal.dot(o)) && k) {
                    f.copy(l), (P = 2);
                    break;
                }
                const K = m.intersectLine(l, Y);
                if ((!K && k && Y.copy(B), (K || k) && !li(Y.distanceTo($)))) {
                    if ((P++, b)) break;
                    b = !0;
                }
            }
            if (P === 1 && this.containsPoint(f.end)) return g && (g.start.copy(f.end), g.end.copy(f.end)), !0;
            if (P !== 2) return !1;
            if ((u.delta(a), f.delta(o), a.dot(o) < 0)) {
                let U = f.start;
                (f.start = f.end), (f.end = U);
            }
            const A = u.start.dot(a),
                S = u.end.dot(a),
                E = f.start.dot(a),
                N = f.end.dot(a),
                O = S < E,
                D = A < N;
            return A !== N && E !== S && O === D
                ? !1
                : (g &&
                      (c.subVectors(u.start, f.start), c.dot(a) > 0 ? g.start.copy(u.start) : g.start.copy(f.start), c.subVectors(u.end, f.end), c.dot(a) < 0 ? g.end.copy(u.end) : g.end.copy(f.end)),
                  !0);
        }
    };
})();
fn.prototype.distanceToPoint = (function () {
    const r = new R();
    return function (t) {
        return this.closestPointToPoint(t, r), t.distanceTo(r);
    };
})();
fn.prototype.distanceToTriangle = (function () {
    const r = new R(),
        e = new R(),
        t = ['a', 'b', 'c'],
        n = new cn(),
        i = new cn();
    return function (a, o = null, c = null) {
        const l = o || c ? n : null;
        if (this.intersectsTriangle(a, l)) return (o || c) && (o && l.getCenter(o), c && l.getCenter(c)), 0;
        let u = 1 / 0;
        for (let f = 0; f < 3; f++) {
            let h;
            const p = t[f],
                g = a[p];
            this.closestPointToPoint(g, r), (h = g.distanceToSquared(r)), h < u && ((u = h), o && o.copy(r), c && c.copy(g));
            const _ = this[p];
            a.closestPointToPoint(_, r), (h = _.distanceToSquared(r)), h < u && ((u = h), o && o.copy(_), c && c.copy(r));
        }
        for (let f = 0; f < 3; f++) {
            const h = t[f],
                p = t[(f + 1) % 3];
            n.set(this[h], this[p]);
            for (let g = 0; g < 3; g++) {
                const _ = t[g],
                    m = t[(g + 1) % 3];
                i.set(a[_], a[m]), Eo(n, i, r, e);
                const d = r.distanceToSquared(e);
                d < u && ((u = d), o && o.copy(r), c && c.copy(e));
            }
        }
        return Math.sqrt(u);
    };
})();
class $t {
    constructor(e, t, n) {
        (this.isOrientedBox = !0),
            (this.min = new R()),
            (this.max = new R()),
            (this.matrix = new He()),
            (this.invMatrix = new He()),
            (this.points = new Array(8).fill().map(() => new R())),
            (this.satAxes = new Array(3).fill().map(() => new R())),
            (this.satBounds = new Array(3).fill().map(() => new un())),
            (this.alignedSatBounds = new Array(3).fill().map(() => new un())),
            (this.needsUpdate = !1),
            e && this.min.copy(e),
            t && this.max.copy(t),
            n && this.matrix.copy(n);
    }
    set(e, t, n) {
        this.min.copy(e), this.max.copy(t), this.matrix.copy(n), (this.needsUpdate = !0);
    }
    copy(e) {
        this.min.copy(e.min), this.max.copy(e.max), this.matrix.copy(e.matrix), (this.needsUpdate = !0);
    }
}
$t.prototype.update = (function () {
    return function () {
        const e = this.matrix,
            t = this.min,
            n = this.max,
            i = this.points;
        for (let l = 0; l <= 1; l++)
            for (let u = 0; u <= 1; u++)
                for (let f = 0; f <= 1; f++) {
                    const h = (1 * l) | (2 * u) | (4 * f),
                        p = i[h];
                    (p.x = l ? n.x : t.x), (p.y = u ? n.y : t.y), (p.z = f ? n.z : t.z), p.applyMatrix4(e);
                }
        const s = this.satBounds,
            a = this.satAxes,
            o = i[0];
        for (let l = 0; l < 3; l++) {
            const u = a[l],
                f = s[l],
                h = 1 << l,
                p = i[h];
            u.subVectors(o, p), f.setFromPoints(u, i);
        }
        const c = this.alignedSatBounds;
        c[0].setFromPointsField(i, 'x'), c[1].setFromPointsField(i, 'y'), c[2].setFromPointsField(i, 'z'), this.invMatrix.copy(this.matrix).invert(), (this.needsUpdate = !1);
    };
})();
$t.prototype.intersectsBox = (function () {
    const r = new un();
    return function (t) {
        this.needsUpdate && this.update();
        const n = t.min,
            i = t.max,
            s = this.satBounds,
            a = this.satAxes,
            o = this.alignedSatBounds;
        if (((r.min = n.x), (r.max = i.x), o[0].isSeparated(r) || ((r.min = n.y), (r.max = i.y), o[1].isSeparated(r)) || ((r.min = n.z), (r.max = i.z), o[2].isSeparated(r)))) return !1;
        for (let c = 0; c < 3; c++) {
            const l = a[c],
                u = s[c];
            if ((r.setFromBox(l, t), u.isSeparated(r))) return !1;
        }
        return !0;
    };
})();
$t.prototype.intersectsTriangle = (function () {
    const r = new fn(),
        e = new Array(3),
        t = new un(),
        n = new un(),
        i = new R();
    return function (a) {
        this.needsUpdate && this.update(), a.isExtendedTriangle ? a.needsUpdate && a.update() : (r.copy(a), r.update(), (a = r));
        const o = this.satBounds,
            c = this.satAxes;
        (e[0] = a.a), (e[1] = a.b), (e[2] = a.c);
        for (let h = 0; h < 3; h++) {
            const p = o[h],
                g = c[h];
            if ((t.setFromPoints(g, e), p.isSeparated(t))) return !1;
        }
        const l = a.satBounds,
            u = a.satAxes,
            f = this.points;
        for (let h = 0; h < 3; h++) {
            const p = l[h],
                g = u[h];
            if ((t.setFromPoints(g, f), p.isSeparated(t))) return !1;
        }
        for (let h = 0; h < 3; h++) {
            const p = c[h];
            for (let g = 0; g < 4; g++) {
                const _ = u[g];
                if ((i.crossVectors(p, _), t.setFromPoints(i, e), n.setFromPoints(i, f), t.isSeparated(n))) return !1;
            }
        }
        return !0;
    };
})();
$t.prototype.closestPointToPoint = (function () {
    return function (e, t) {
        return this.needsUpdate && this.update(), t.copy(e).applyMatrix4(this.invMatrix).clamp(this.min, this.max).applyMatrix4(this.matrix), t;
    };
})();
$t.prototype.distanceToPoint = (function () {
    const r = new R();
    return function (t) {
        return this.closestPointToPoint(t, r), t.distanceTo(r);
    };
})();
$t.prototype.distanceToBox = (function () {
    const r = ['x', 'y', 'z'],
        e = new Array(12).fill().map(() => new cn()),
        t = new Array(12).fill().map(() => new cn()),
        n = new R(),
        i = new R();
    return function (a, o = 0, c = null, l = null) {
        if ((this.needsUpdate && this.update(), this.intersectsBox(a)))
            return (c || l) && (a.getCenter(i), this.closestPointToPoint(i, n), a.closestPointToPoint(n, i), c && c.copy(n), l && l.copy(i)), 0;
        const u = o * o,
            f = a.min,
            h = a.max,
            p = this.points;
        let g = 1 / 0;
        for (let m = 0; m < 8; m++) {
            const d = p[m];
            i.copy(d).clamp(f, h);
            const y = d.distanceToSquared(i);
            if (y < g && ((g = y), c && c.copy(d), l && l.copy(i), y < u)) return Math.sqrt(y);
        }
        let _ = 0;
        for (let m = 0; m < 3; m++)
            for (let d = 0; d <= 1; d++)
                for (let y = 0; y <= 1; y++) {
                    const x = (m + 1) % 3,
                        v = (m + 2) % 3,
                        M = (d << x) | (y << v),
                        b = (1 << m) | (d << x) | (y << v),
                        P = p[M],
                        A = p[b];
                    e[_].set(P, A);
                    const E = r[m],
                        N = r[x],
                        O = r[v],
                        D = t[_],
                        U = D.start,
                        B = D.end;
                    (U[E] = f[E]), (U[N] = d ? f[N] : h[N]), (U[O] = y ? f[O] : h[N]), (B[E] = h[E]), (B[N] = d ? f[N] : h[N]), (B[O] = y ? f[O] : h[N]), _++;
                }
        for (let m = 0; m <= 1; m++)
            for (let d = 0; d <= 1; d++)
                for (let y = 0; y <= 1; y++) {
                    (i.x = m ? h.x : f.x), (i.y = d ? h.y : f.y), (i.z = y ? h.z : f.z), this.closestPointToPoint(i, n);
                    const x = i.distanceToSquared(n);
                    if (x < g && ((g = x), c && c.copy(n), l && l.copy(i), x < u)) return Math.sqrt(x);
                }
        for (let m = 0; m < 12; m++) {
            const d = e[m];
            for (let y = 0; y < 12; y++) {
                const x = t[y];
                Eo(d, x, n, i);
                const v = n.distanceToSquared(i);
                if (v < g && ((g = v), c && c.copy(n), l && l.copy(i), v < u)) return Math.sqrt(v);
            }
        }
        return Math.sqrt(g);
    };
})();
const ci = new R(),
    ui = new R(),
    fi = new R(),
    Nr = new be(),
    Or = new be(),
    Fr = new be(),
    hl = new R(),
    dl = new R(),
    pl = new R(),
    Br = new R();
function mg(r, e, t, n, i, s) {
    let a;
    return s === ft ? (a = r.intersectTriangle(n, t, e, !0, i)) : (a = r.intersectTriangle(e, t, n, s !== Nt, i)), a === null ? null : { distance: r.origin.distanceTo(i), point: i.clone() };
}
function gg(r, e, t, n, i, s, a, o, c) {
    ci.fromBufferAttribute(e, s), ui.fromBufferAttribute(e, a), fi.fromBufferAttribute(e, o);
    const l = mg(r, ci, ui, fi, Br, c);
    if (l) {
        n && (Nr.fromBufferAttribute(n, s), Or.fromBufferAttribute(n, a), Fr.fromBufferAttribute(n, o), (l.uv = ut.getInterpolation(Br, ci, ui, fi, Nr, Or, Fr, new be()))),
            i && (Nr.fromBufferAttribute(i, s), Or.fromBufferAttribute(i, a), Fr.fromBufferAttribute(i, o), (l.uv1 = ut.getInterpolation(Br, ci, ui, fi, Nr, Or, Fr, new be()))),
            t &&
                (hl.fromBufferAttribute(t, s),
                dl.fromBufferAttribute(t, a),
                pl.fromBufferAttribute(t, o),
                (l.normal = ut.getInterpolation(Br, ci, ui, fi, hl, dl, pl, new R())),
                l.normal.dot(r.direction) > 0 && l.normal.multiplyScalar(-1));
        const u = { a: s, b: a, c: o, normal: new R(), materialIndex: 0 };
        ut.getNormal(ci, ui, fi, u.normal), (l.face = u), (l.faceIndex = s);
    }
    return l;
}
function Zl(r, e, t, n, i) {
    const s = n * 3,
        a = r.index.getX(s),
        o = r.index.getX(s + 1),
        c = r.index.getX(s + 2),
        { position: l, normal: u, uv: f, uv1: h } = r.attributes,
        p = gg(t, l, u, f, h, a, o, c, e);
    return p ? ((p.faceIndex = n), i && i.push(p), p) : null;
}
function _g(r, e, t, n, i, s) {
    for (let a = n, o = n + i; a < o; a++) Zl(r, e, t, a, s);
}
function xg(r, e, t, n, i) {
    let s = 1 / 0,
        a = null;
    for (let o = n, c = n + i; o < c; o++) {
        const l = Zl(r, e, t, o);
        l && l.distance < s && ((a = l), (s = l.distance));
    }
    return a;
}
function ml(r, e, t) {
    return r === null || (r.point.applyMatrix4(e.matrixWorld), (r.distance = r.point.distanceTo(t.ray.origin)), (r.object = e), r.distance < t.near || r.distance > t.far) ? null : r;
}
function Yt(r, e, t, n) {
    const i = r.a,
        s = r.b,
        a = r.c;
    let o = e,
        c = e + 1,
        l = e + 2;
    t && ((o = t.getX(e)), (c = t.getX(e + 1)), (l = t.getX(e + 2))),
        (i.x = n.getX(o)),
        (i.y = n.getY(o)),
        (i.z = n.getZ(o)),
        (s.x = n.getX(c)),
        (s.y = n.getY(c)),
        (s.z = n.getZ(c)),
        (a.x = n.getX(l)),
        (a.y = n.getY(l)),
        (a.z = n.getZ(l));
}
function gl(r, e, t, n, i, s, a) {
    const o = t.index,
        c = t.attributes.position;
    for (let l = r, u = e + r; l < u; l++) if ((Yt(a, l * 3, o, c), (a.needsUpdate = !0), n(a, l, i, s))) return !0;
    return !1;
}
class $l {
    constructor(e) {
        (this._getNewPrimitive = e), (this._primitives = []);
    }
    getPrimitive() {
        const e = this._primitives;
        return e.length === 0 ? this._getNewPrimitive() : e.pop();
    }
    releasePrimitive(e) {
        this._primitives.push(e);
    }
}
function vn(r, e) {
    return e[r + 15] === 65535;
}
function yi(r, e) {
    return e[r + 6];
}
function tr(r, e) {
    return e[r + 14];
}
function nr(r) {
    return r + 8;
}
function ir(r, e) {
    return e[r + 6];
}
function vg(r, e) {
    return e[r + 7];
}
const gi = new zt(),
    Xr = new R(),
    yg = ['x', 'y', 'z'];
function co(r, e, t, n, i) {
    let s = r * 2,
        a = Li,
        o = Mn,
        c = Sn;
    if (vn(s, o)) {
        const u = yi(r, c),
            f = tr(s, o);
        _g(e, t, n, u, f, i);
    } else {
        const u = nr(r);
        jr(u, a, n, Xr) && co(u, e, t, n, i);
        const f = ir(r, c);
        jr(f, a, n, Xr) && co(f, e, t, n, i);
    }
}
function uo(r, e, t, n) {
    let i = r * 2,
        s = Li,
        a = Mn,
        o = Sn;
    if (vn(i, a)) {
        const l = yi(r, o),
            u = tr(i, a);
        return xg(e, t, n, l, u);
    } else {
        const l = vg(r, o),
            u = yg[l],
            h = n.direction[u] >= 0;
        let p, g;
        h ? ((p = nr(r)), (g = ir(r, o))) : ((p = ir(r, o)), (g = nr(r)));
        const m = jr(p, s, n, Xr) ? uo(p, e, t, n) : null;
        if (m) {
            const x = m.point[u];
            if (h ? x <= s[g + l] : x >= s[g + l + 3]) return m;
        }
        const y = jr(g, s, n, Xr) ? uo(g, e, t, n) : null;
        return m && y ? (m.distance <= y.distance ? m : y) : m || y || null;
    }
}
const Mg = (function () {
        let r, e;
        const t = [],
            n = new $l(() => new zt());
        return function (...a) {
            (r = n.getPrimitive()), (e = n.getPrimitive()), t.push(r, e);
            const o = i(...a);
            n.releasePrimitive(r), n.releasePrimitive(e), t.pop(), t.pop();
            const c = t.length;
            return c > 0 && ((e = t[c - 1]), (r = t[c - 2])), o;
        };
        function i(s, a, o, c, l = null, u = 0, f = 0) {
            function h(x) {
                let v = x * 2,
                    M = Mn,
                    b = Sn;
                for (; !vn(v, M); ) (x = nr(x)), (v = x * 2);
                return yi(x, b);
            }
            function p(x) {
                let v = x * 2,
                    M = Mn,
                    b = Sn;
                for (; !vn(v, M); ) (x = ir(x, b)), (v = x * 2);
                return yi(x, b) + tr(v, M);
            }
            let g = s * 2,
                _ = Li,
                m = Mn,
                d = Sn;
            if (vn(g, m)) {
                const x = yi(s, d),
                    v = tr(g, m);
                return Kt(s, _, r), c(x, v, !1, f, u + s, r);
            } else {
                const x = nr(s),
                    v = ir(s, d);
                let M = x,
                    b = v,
                    P,
                    A,
                    S,
                    E;
                if (l && ((S = r), (E = e), Kt(M, _, S), Kt(b, _, E), (P = l(S)), (A = l(E)), A < P)) {
                    (M = v), (b = x);
                    const Y = P;
                    (P = A), (A = Y), (S = E);
                }
                S || ((S = r), Kt(M, _, S));
                const N = vn(M * 2, m),
                    O = o(S, N, P, f + 1, u + M);
                let D;
                if (O === al) {
                    const Y = h(M),
                        K = p(M) - Y;
                    D = c(Y, K, !0, f + 1, u + M, S);
                } else D = O && i(M, a, o, c, l, u, f + 1);
                if (D) return !0;
                (E = e), Kt(b, _, E);
                const U = vn(b * 2, m),
                    B = o(E, U, A, f + 1, u + b);
                let $;
                if (B === al) {
                    const Y = h(b),
                        K = p(b) - Y;
                    $ = c(Y, K, !0, f + 1, u + b, E);
                } else $ = B && i(b, a, o, c, l, u, f + 1);
                return !!$;
            }
        }
    })(),
    Sg = (function () {
        const r = new fn(),
            e = new fn(),
            t = new He(),
            n = new $t(),
            i = new $t();
        return function s(a, o, c, l, u = null) {
            let f = a * 2,
                h = Li,
                p = Mn,
                g = Sn;
            if ((u === null && (c.boundingBox || c.computeBoundingBox(), n.set(c.boundingBox.min, c.boundingBox.max, l), (u = n)), vn(f, p))) {
                const m = o,
                    d = m.index,
                    y = m.attributes.position,
                    x = c.index,
                    v = c.attributes.position,
                    M = yi(a, g),
                    b = tr(f, p);
                if ((t.copy(l).invert(), c.boundsTree))
                    return (
                        Kt(a, h, i),
                        i.matrix.copy(t),
                        (i.needsUpdate = !0),
                        c.boundsTree.shapecast({
                            intersectsBounds: (A) => i.intersectsBox(A),
                            intersectsTriangle: (A) => {
                                A.a.applyMatrix4(l), A.b.applyMatrix4(l), A.c.applyMatrix4(l), (A.needsUpdate = !0);
                                for (let S = M * 3, E = (b + M) * 3; S < E; S += 3) if ((Yt(e, S, d, y), (e.needsUpdate = !0), A.intersectsTriangle(e))) return !0;
                                return !1;
                            },
                        })
                    );
                for (let P = M * 3, A = b + M * 3; P < A; P += 3) {
                    Yt(r, P, d, y), r.a.applyMatrix4(t), r.b.applyMatrix4(t), r.c.applyMatrix4(t), (r.needsUpdate = !0);
                    for (let S = 0, E = x.count; S < E; S += 3) if ((Yt(e, S, x, v), (e.needsUpdate = !0), r.intersectsTriangle(e))) return !0;
                }
            } else {
                const m = a + 8,
                    d = g[a + 6];
                return Kt(m, h, gi), !!((u.intersectsBox(gi) && s(m, o, c, l, u)) || (Kt(d, h, gi), u.intersectsBox(gi) && s(d, o, c, l, u)));
            }
        };
    })();
function jr(r, e, t, n) {
    return Kt(r, e, gi), t.intersectBox(gi, n);
}
const fo = [];
let Wr, Li, Mn, Sn;
function qi(r) {
    Wr && fo.push(Wr), (Wr = r), (Li = new Float32Array(r)), (Mn = new Uint16Array(r)), (Sn = new Uint32Array(r));
}
function zr() {
    (Wr = null), (Li = null), (Mn = null), (Sn = null), fo.length && qi(fo.pop());
}
const js = Symbol('skip tree generation'),
    Ys = new zt(),
    Ks = new zt(),
    hi = new He(),
    Rn = new $t(),
    Gi = new $t(),
    Vi = new R(),
    Gr = new R(),
    bg = new R(),
    wg = new R(),
    Eg = new R(),
    _l = new zt(),
    kt = new $l(() => new fn());
class Yi {
    static serialize(e, t = {}) {
        if (t.isBufferGeometry)
            return (
                console.warn('MeshBVH.serialize: The arguments for the function have changed. See documentation for new signature.'),
                Yi.serialize(arguments[0], { cloneBuffers: arguments[2] === void 0 ? !0 : arguments[2] })
            );
        t = { cloneBuffers: !0, ...t };
        const n = e.geometry,
            i = e._roots,
            s = n.getIndex();
        let a;
        return t.cloneBuffers ? (a = { roots: i.map((o) => o.slice()), index: s.array.slice() }) : (a = { roots: i, index: s.array }), a;
    }
    static deserialize(e, t, n = {}) {
        if (typeof n == 'boolean')
            return (
                console.warn('MeshBVH.deserialize: The arguments for the function have changed. See documentation for new signature.'),
                Yi.deserialize(arguments[0], arguments[1], { setIndex: arguments[2] === void 0 ? !0 : arguments[2] })
            );
        n = { setIndex: !0, ...n };
        const { index: i, roots: s } = e,
            a = new Yi(t, { ...n, [js]: !0 });
        if (((a._roots = s), n.setIndex)) {
            const o = t.getIndex();
            if (o === null) {
                const c = new Tt(e.index, 1, !1);
                t.setIndex(c);
            } else o.array !== i && (o.array.set(i), (o.needsUpdate = !0));
        }
        return a;
    }
    constructor(e, t = {}) {
        if (e.isBufferGeometry) {
            if (e.index && e.index.isInterleavedBufferAttribute) throw new Error('MeshBVH: InterleavedBufferAttribute is not supported for the index attribute.');
        } else throw new Error('MeshBVH: Only BufferGeometries are supported.');
        if (
            ((t = Object.assign({ strategy: Kl, maxDepth: 40, maxLeafTris: 10, verbose: !0, useSharedArrayBuffer: !1, setBoundingBox: !0, onProgress: null, [js]: !1 }, t)),
            t.useSharedArrayBuffer && typeof SharedArrayBuffer > 'u')
        )
            throw new Error('MeshBVH: SharedArrayBuffer is not available.');
        (this._roots = null), t[js] || ((this._roots = fg(e, t)), !e.boundingBox && t.setBoundingBox && (e.boundingBox = this.getBoundingBox(new zt()))), (this.geometry = e);
    }
    refit(e = null) {
        e && Array.isArray(e) && (e = new Set(e));
        const t = this.geometry,
            n = t.index.array,
            i = t.attributes.position;
        let s,
            a,
            o,
            c,
            l = 0;
        const u = this._roots;
        for (let h = 0, p = u.length; h < p; h++) (s = u[h]), (a = new Uint32Array(s)), (o = new Uint16Array(s)), (c = new Float32Array(s)), f(0, l), (l += s.byteLength);
        function f(h, p, g = !1) {
            const _ = h * 2;
            if (o[_ + 15] === lo) {
                const d = a[h + 6],
                    y = o[_ + 14];
                let x = 1 / 0,
                    v = 1 / 0,
                    M = 1 / 0,
                    b = -1 / 0,
                    P = -1 / 0,
                    A = -1 / 0;
                for (let S = 3 * d, E = 3 * (d + y); S < E; S++) {
                    const N = n[S],
                        O = i.getX(N),
                        D = i.getY(N),
                        U = i.getZ(N);
                    O < x && (x = O), O > b && (b = O), D < v && (v = D), D > P && (P = D), U < M && (M = U), U > A && (A = U);
                }
                return c[h + 0] !== x || c[h + 1] !== v || c[h + 2] !== M || c[h + 3] !== b || c[h + 4] !== P || c[h + 5] !== A
                    ? ((c[h + 0] = x), (c[h + 1] = v), (c[h + 2] = M), (c[h + 3] = b), (c[h + 4] = P), (c[h + 5] = A), !0)
                    : !1;
            } else {
                const d = h + 8,
                    y = a[h + 6],
                    x = d + p,
                    v = y + p;
                let M = g,
                    b = !1,
                    P = !1;
                e ? M || ((b = e.has(x)), (P = e.has(v)), (M = !b && !P)) : ((b = !0), (P = !0));
                const A = M || b,
                    S = M || P;
                let E = !1;
                A && (E = f(d, p, M));
                let N = !1;
                S && (N = f(y, p, M));
                const O = E || N;
                if (O)
                    for (let D = 0; D < 3; D++) {
                        const U = d + D,
                            B = y + D,
                            $ = c[U],
                            Y = c[U + 3],
                            k = c[B],
                            K = c[B + 3];
                        (c[h + D] = $ < k ? $ : k), (c[h + D + 3] = Y > K ? Y : K);
                    }
                return O;
            }
        }
    }
    traverse(e, t = 0) {
        const n = this._roots[t],
            i = new Uint32Array(n),
            s = new Uint16Array(n);
        a(0);
        function a(o, c = 0) {
            const l = o * 2,
                u = s[l + 15] === lo;
            if (u) {
                const f = i[o + 6],
                    h = s[l + 14];
                e(c, u, new Float32Array(n, o * 4, 6), f, h);
            } else {
                const f = o + Hr / 4,
                    h = i[o + 6],
                    p = i[o + 7];
                e(c, u, new Float32Array(n, o * 4, 6), p) || (a(f, c + 1), a(h, c + 1));
            }
        }
    }
    raycast(e, t = Zt) {
        const n = this._roots,
            i = this.geometry,
            s = [],
            a = t.isMaterial,
            o = Array.isArray(t),
            c = i.groups,
            l = a ? t.side : t;
        for (let u = 0, f = n.length; u < f; u++) {
            const h = o ? t[c[u].materialIndex].side : l,
                p = s.length;
            if ((qi(n[u]), co(0, i, h, e, s), zr(), o)) {
                const g = c[u].materialIndex;
                for (let _ = p, m = s.length; _ < m; _++) s[_].face.materialIndex = g;
            }
        }
        return s;
    }
    raycastFirst(e, t = Zt) {
        const n = this._roots,
            i = this.geometry,
            s = t.isMaterial,
            a = Array.isArray(t);
        let o = null;
        const c = i.groups,
            l = s ? t.side : t;
        for (let u = 0, f = n.length; u < f; u++) {
            const h = a ? t[c[u].materialIndex].side : l;
            qi(n[u]);
            const p = uo(0, i, h, e);
            zr(), p != null && (o == null || p.distance < o.distance) && ((o = p), a && (p.face.materialIndex = c[u].materialIndex));
        }
        return o;
    }
    intersectsGeometry(e, t) {
        const n = this.geometry;
        let i = !1;
        for (const s of this._roots) if ((qi(s), (i = Sg(0, n, e, t)), zr(), i)) break;
        return i;
    }
    shapecast(e, t, n) {
        const i = this.geometry;
        if (e instanceof Function) {
            if (t) {
                const h = t;
                t = (p, g, _, m) => {
                    const d = g * 3;
                    return h(p, d, d + 1, d + 2, _, m);
                };
            }
            (e = { boundsTraverseOrder: n, intersectsBounds: e, intersectsTriangle: t, intersectsRange: null }),
                console.warn('MeshBVH: Shapecast function signature has changed and now takes an object of callbacks as a second argument. See docs for new signature.');
        }
        const s = kt.getPrimitive();
        let { boundsTraverseOrder: a, intersectsBounds: o, intersectsRange: c, intersectsTriangle: l } = e;
        if (c && l) {
            const h = c;
            c = (p, g, _, m, d) => (h(p, g, _, m, d) ? !0 : gl(p, g, i, l, _, m, s));
        } else c || (l ? (c = (h, p, g, _) => gl(h, p, i, l, g, _, s)) : (c = (h, p, g) => g));
        let u = !1,
            f = 0;
        for (const h of this._roots) {
            if ((qi(h), (u = Mg(0, i, o, c, a, f)), zr(), u)) break;
            f += h.byteLength;
        }
        return kt.releasePrimitive(s), u;
    }
    bvhcast(e, t, n) {
        let { intersectsRanges: i, intersectsTriangles: s } = n;
        const a = this.geometry.index,
            o = this.geometry.attributes.position,
            c = e.geometry.index,
            l = e.geometry.attributes.position;
        hi.copy(t).invert();
        const u = kt.getPrimitive(),
            f = kt.getPrimitive();
        if (s) {
            let p = function (g, _, m, d, y, x, v, M) {
                for (let b = m, P = m + d; b < P; b++) {
                    Yt(f, b * 3, c, l), f.a.applyMatrix4(t), f.b.applyMatrix4(t), f.c.applyMatrix4(t), (f.needsUpdate = !0);
                    for (let A = g, S = g + _; A < S; A++) if ((Yt(u, A * 3, a, o), (u.needsUpdate = !0), s(u, f, A, b, y, x, v, M))) return !0;
                }
                return !1;
            };
            if (i) {
                const g = i;
                i = function (_, m, d, y, x, v, M, b) {
                    return g(_, m, d, y, x, v, M, b) ? !0 : p(_, m, d, y, x, v, M, b);
                };
            } else i = p;
        }
        e.getBoundingBox(Ks), Ks.applyMatrix4(t);
        const h = this.shapecast({
            intersectsBounds: (p) => Ks.intersectsBox(p),
            intersectsRange: (p, g, _, m, d, y) => (
                Ys.copy(y), Ys.applyMatrix4(hi), e.shapecast({ intersectsBounds: (x) => Ys.intersectsBox(x), intersectsRange: (x, v, M, b, P) => i(p, g, x, v, m, d, b, P) })
            ),
        });
        return kt.releasePrimitive(u), kt.releasePrimitive(f), h;
    }
    intersectsBox(e, t) {
        return Rn.set(e.min, e.max, t), (Rn.needsUpdate = !0), this.shapecast({ intersectsBounds: (n) => Rn.intersectsBox(n), intersectsTriangle: (n) => Rn.intersectsTriangle(n) });
    }
    intersectsSphere(e) {
        return this.shapecast({ intersectsBounds: (t) => e.intersectsBox(t), intersectsTriangle: (t) => t.intersectsSphere(e) });
    }
    closestPointToGeometry(e, t, n = {}, i = {}, s = 0, a = 1 / 0) {
        e.boundingBox || e.computeBoundingBox(), Rn.set(e.boundingBox.min, e.boundingBox.max, t), (Rn.needsUpdate = !0);
        const o = this.geometry,
            c = o.attributes.position,
            l = o.index,
            u = e.attributes.position,
            f = e.index,
            h = kt.getPrimitive(),
            p = kt.getPrimitive();
        let g = Gr,
            _ = bg,
            m = null,
            d = null;
        i && ((m = wg), (d = Eg));
        let y = 1 / 0,
            x = null,
            v = null;
        return (
            hi.copy(t).invert(),
            Gi.matrix.copy(hi),
            this.shapecast({
                boundsTraverseOrder: (M) => Rn.distanceToBox(M),
                intersectsBounds: (M, b, P) => (P < y && P < a ? (b && (Gi.min.copy(M.min), Gi.max.copy(M.max), (Gi.needsUpdate = !0)), !0) : !1),
                intersectsRange: (M, b) => {
                    if (e.boundsTree)
                        return e.boundsTree.shapecast({
                            boundsTraverseOrder: (P) => Gi.distanceToBox(P),
                            intersectsBounds: (P, A, S) => S < y && S < a,
                            intersectsRange: (P, A) => {
                                for (let S = P * 3, E = (P + A) * 3; S < E; S += 3) {
                                    Yt(p, S, f, u), p.a.applyMatrix4(t), p.b.applyMatrix4(t), p.c.applyMatrix4(t), (p.needsUpdate = !0);
                                    for (let N = M * 3, O = (M + b) * 3; N < O; N += 3) {
                                        Yt(h, N, l, c), (h.needsUpdate = !0);
                                        const D = h.distanceToTriangle(p, g, m);
                                        if ((D < y && (_.copy(g), d && d.copy(m), (y = D), (x = N / 3), (v = S / 3)), D < s)) return !0;
                                    }
                                }
                            },
                        });
                    {
                        const P = f ? f.count : u.count;
                        for (let A = 0, S = P; A < S; A += 3) {
                            Yt(p, A, f, u), p.a.applyMatrix4(t), p.b.applyMatrix4(t), p.c.applyMatrix4(t), (p.needsUpdate = !0);
                            for (let E = M * 3, N = (M + b) * 3; E < N; E += 3) {
                                Yt(h, E, l, c), (h.needsUpdate = !0);
                                const O = h.distanceToTriangle(p, g, m);
                                if ((O < y && (_.copy(g), d && d.copy(m), (y = O), (x = E / 3), (v = A / 3)), O < s)) return !0;
                            }
                        }
                    }
                },
            }),
            kt.releasePrimitive(h),
            kt.releasePrimitive(p),
            y === 1 / 0
                ? null
                : (n.point ? n.point.copy(_) : (n.point = _.clone()),
                  (n.distance = y),
                  (n.faceIndex = x),
                  i && (i.point ? i.point.copy(d) : (i.point = d.clone()), i.point.applyMatrix4(hi), _.applyMatrix4(hi), (i.distance = _.sub(i.point).length()), (i.faceIndex = v)),
                  n)
        );
    }
    closestPointToPoint(e, t = {}, n = 0, i = 1 / 0) {
        const s = n * n,
            a = i * i;
        let o = 1 / 0,
            c = null;
        if (
            (this.shapecast({
                boundsTraverseOrder: (u) => (Vi.copy(e).clamp(u.min, u.max), Vi.distanceToSquared(e)),
                intersectsBounds: (u, f, h) => h < o && h < a,
                intersectsTriangle: (u, f) => {
                    u.closestPointToPoint(e, Vi);
                    const h = e.distanceToSquared(Vi);
                    return h < o && (Gr.copy(Vi), (o = h), (c = f)), h < s;
                },
            }),
            o === 1 / 0)
        )
            return null;
        const l = Math.sqrt(o);
        return t.point ? t.point.copy(Gr) : (t.point = Gr.clone()), (t.distance = l), (t.faceIndex = c), t;
    }
    getBoundingBox(e) {
        return (
            e.makeEmpty(),
            this._roots.forEach((n) => {
                Kt(0, new Float32Array(n), _l), e.union(_l);
            }),
            e
        );
    }
}
const Zs = new xo(),
    xl = new He(),
    Tg = Et.prototype.raycast;
function Ag(r, e) {
    if (this.geometry.boundsTree) {
        if (this.material === void 0) return;
        xl.copy(this.matrixWorld).invert(), Zs.copy(r.ray).applyMatrix4(xl);
        const t = this.geometry.boundsTree;
        if (r.firstHitOnly === !0) {
            const n = ml(t.raycastFirst(Zs, this.material), this, r);
            n && e.push(n);
        } else {
            const n = t.raycast(Zs, this.material);
            for (let i = 0, s = n.length; i < s; i++) {
                const a = ml(n[i], this, r);
                a && e.push(a);
            }
        }
    } else Tg.call(this, r, e);
}
function st(r) {
    return (e, ...t) => Cg(r, e, t);
}
function Ri(r, e) {
    return st(Jl(r, e).get);
}
const { apply: Cg, construct: j0, defineProperty: Y0, get: K0, getOwnPropertyDescriptor: Jl, getPrototypeOf: To, has: Z0, ownKeys: Pg, set: $0, setPrototypeOf: J0 } = Reflect,
    { iterator: ar, species: Q0, toStringTag: Lg, for: e_ } = Symbol,
    Rg = Object,
    { create: Ao, defineProperty: Dg, freeze: t_, is: n_ } = Rg,
    Ig = Array,
    Ug = Ig.prototype,
    Ql = Ug[ar],
    Ng = st(Ql),
    ec = ArrayBuffer,
    Og = ec.prototype;
Ri(Og, 'byteLength');
const vl = typeof SharedArrayBuffer < 'u' ? SharedArrayBuffer : null;
vl && Ri(vl.prototype, 'byteLength');
const tc = To(Uint8Array);
tc.from;
const _t = tc.prototype;
_t[ar];
st(_t.keys);
st(_t.values);
st(_t.entries);
st(_t.set);
st(_t.reverse);
st(_t.fill);
st(_t.copyWithin);
st(_t.sort);
st(_t.slice);
st(_t.subarray);
Ri(_t, 'buffer');
Ri(_t, 'byteOffset');
Ri(_t, 'length');
Ri(_t, Lg);
const Di = Uint32Array,
    Fg = Float32Array,
    rr = To([][ar]()),
    nc = st(rr.next),
    Bg = st((function* () {})().next),
    zg = To(rr),
    Gg = DataView.prototype,
    Vg = st(Gg.getUint16),
    Co = WeakMap,
    ic = Co.prototype,
    rc = st(ic.get),
    kg = st(ic.set),
    sc = new Co(),
    Hg = Ao(null, {
        next: {
            value: function () {
                const e = rc(sc, this);
                return nc(e);
            },
        },
        [ar]: {
            value: function () {
                return this;
            },
        },
    });
function Wg(r) {
    if (r[ar] === Ql && rr.next === nc) return r;
    const e = Ao(Hg);
    return kg(sc, e, Ng(r)), e;
}
const qg = new Co(),
    Xg = Ao(zg, {
        next: {
            value: function () {
                const e = rc(qg, this);
                return Bg(e);
            },
            writable: !0,
            configurable: !0,
        },
    });
for (const r of Pg(rr)) r !== 'next' && Dg(Xg, r, Jl(rr, r));
const oc = new ec(4),
    jg = new Fg(oc),
    Yg = new Di(oc),
    Ht = new Di(512),
    Wt = new Di(512);
for (let r = 0; r < 256; ++r) {
    const e = r - 127;
    e < -27
        ? ((Ht[r] = 0), (Ht[r | 256] = 32768), (Wt[r] = 24), (Wt[r | 256] = 24))
        : e < -14
        ? ((Ht[r] = 1024 >> (-e - 14)), (Ht[r | 256] = (1024 >> (-e - 14)) | 32768), (Wt[r] = -e - 1), (Wt[r | 256] = -e - 1))
        : e <= 15
        ? ((Ht[r] = (e + 15) << 10), (Ht[r | 256] = ((e + 15) << 10) | 32768), (Wt[r] = 13), (Wt[r | 256] = 13))
        : e < 128
        ? ((Ht[r] = 31744), (Ht[r | 256] = 64512), (Wt[r] = 24), (Wt[r | 256] = 24))
        : ((Ht[r] = 31744), (Ht[r | 256] = 64512), (Wt[r] = 13), (Wt[r | 256] = 13));
}
const Po = new Di(2048),
    Ii = new Di(64),
    ac = new Di(64);
for (let r = 1; r < 1024; ++r) {
    let e = r << 13,
        t = 0;
    for (; !(e & 8388608); ) (e <<= 1), (t -= 8388608);
    (e &= -8388609), (t += 947912704), (Po[r] = e | t);
}
for (let r = 1024; r < 2048; ++r) Po[r] = 939524096 + ((r - 1024) << 13);
for (let r = 1; r < 31; ++r) Ii[r] = r << 23;
Ii[31] = 1199570944;
Ii[32] = 2147483648;
for (let r = 33; r < 63; ++r) Ii[r] = 2147483648 + ((r - 32) << 23);
Ii[63] = 3347054592;
for (let r = 1; r < 64; ++r) r !== 32 && (ac[r] = 1024);
function Kg(r) {
    const e = r >> 10;
    return (Yg[0] = Po[ac[e] + (r & 1023)] + Ii[e]), jg[0];
}
function lc(r, e, ...t) {
    return Kg(Vg(r, e, ...Wg(t)));
}
var Mi = {},
    Zg = {
        get exports() {
            return Mi;
        },
        set exports(r) {
            Mi = r;
        },
    };
function cc(r, e, t) {
    const n = (t && t.debug) || !1;
    n && console.log('[xml-utils] getting ' + e + ' in ' + r);
    const i = typeof r == 'object' ? r.outer : r,
        s = i.slice(0, i.indexOf('>') + 1),
        a = ['"', "'"];
    for (let o = 0; o < a.length; o++) {
        const c = a[o],
            l = e + '\\=' + c + '([^' + c + ']*)' + c;
        n && console.log('[xml-utils] pattern:', l);
        const f = new RegExp(l).exec(s);
        if ((n && console.log('[xml-utils] match:', f), f)) return f[1];
    }
}
Zg.exports = cc;
Mi.default = cc;
var Yr = {},
    $g = {
        get exports() {
            return Yr;
        },
        set exports(r) {
            Yr = r;
        },
    },
    Kr = {},
    Jg = {
        get exports() {
            return Kr;
        },
        set exports(r) {
            Kr = r;
        },
    },
    Zr = {},
    Qg = {
        get exports() {
            return Zr;
        },
        set exports(r) {
            Zr = r;
        },
    };
function uc(r, e, t) {
    const i = new RegExp(e).exec(r.slice(t));
    return i ? t + i.index : -1;
}
Qg.exports = uc;
Zr.default = uc;
var $r = {},
    e0 = {
        get exports() {
            return $r;
        },
        set exports(r) {
            $r = r;
        },
    };
function fc(r, e, t) {
    const i = new RegExp(e).exec(r.slice(t));
    return i ? t + i.index + i[0].length - 1 : -1;
}
e0.exports = fc;
$r.default = fc;
var Jr = {},
    t0 = {
        get exports() {
            return Jr;
        },
        set exports(r) {
            Jr = r;
        },
    };
function hc(r, e) {
    const t = new RegExp(e, 'g'),
        n = r.match(t);
    return n ? n.length : 0;
}
t0.exports = hc;
Jr.default = hc;
const n0 = Zr,
    $s = $r,
    yl = Jr;
function dc(r, e, t) {
    const n = (t && t.debug) || !1,
        i = !(t && typeof t.nested === !1),
        s = (t && t.startIndex) || 0;
    n && console.log('[xml-utils] starting findTagByName with', e, ' and ', t);
    const a = n0(
        r,
        `<${e}[ 
>/]`,
        s,
    );
    if ((n && console.log('[xml-utils] start:', a), a === -1)) return;
    const o = r.slice(a + e.length);
    let c = $s(o, '^[^<]*[ /]>', 0);
    const l = c !== -1 && o[c - 1] === '/';
    if ((n && console.log('[xml-utils] selfClosing:', l), l === !1))
        if (i) {
            let p = 0,
                g = 1,
                _ = 0;
            for (; (c = $s(o, '[ /]' + e + '>', p)) !== -1; ) {
                const m = o.substring(p, c + 1);
                if (
                    ((g += yl(
                        m,
                        '<' +
                            e +
                            `[ 
	>]`,
                    )),
                    (_ += yl(m, '</' + e + '>')),
                    _ >= g)
                )
                    break;
                p = c;
            }
        } else c = $s(o, '[ /]' + e + '>', 0);
    const u = a + e.length + c + 1;
    if ((n && console.log('[xml-utils] end:', u), u === -1)) return;
    const f = r.slice(a, u);
    let h;
    return l ? (h = null) : (h = f.slice(f.indexOf('>') + 1, f.lastIndexOf('<'))), { inner: h, outer: f, start: a, end: u };
}
Jg.exports = dc;
Kr.default = dc;
const i0 = Kr;
function pc(r, e, t) {
    const n = [],
        i = (t && t.debug) || !1,
        s = t && typeof t.nested == 'boolean' ? t.nested : !0;
    let a = (t && t.startIndex) || 0,
        o;
    for (; (o = i0(r, e, { debug: i, startIndex: a })); ) s ? (a = o.start + 1 + e.length) : (a = o.end), n.push(o);
    return i && console.log('findTagsByName found', n.length, 'tags'), n;
}
$g.exports = pc;
Yr.default = pc;
const Ki = {
        315: 'Artist',
        258: 'BitsPerSample',
        265: 'CellLength',
        264: 'CellWidth',
        320: 'ColorMap',
        259: 'Compression',
        33432: 'Copyright',
        306: 'DateTime',
        338: 'ExtraSamples',
        266: 'FillOrder',
        289: 'FreeByteCounts',
        288: 'FreeOffsets',
        291: 'GrayResponseCurve',
        290: 'GrayResponseUnit',
        316: 'HostComputer',
        270: 'ImageDescription',
        257: 'ImageLength',
        256: 'ImageWidth',
        271: 'Make',
        281: 'MaxSampleValue',
        280: 'MinSampleValue',
        272: 'Model',
        254: 'NewSubfileType',
        274: 'Orientation',
        262: 'PhotometricInterpretation',
        284: 'PlanarConfiguration',
        296: 'ResolutionUnit',
        278: 'RowsPerStrip',
        277: 'SamplesPerPixel',
        305: 'Software',
        279: 'StripByteCounts',
        273: 'StripOffsets',
        255: 'SubfileType',
        263: 'Threshholding',
        282: 'XResolution',
        283: 'YResolution',
        326: 'BadFaxLines',
        327: 'CleanFaxData',
        343: 'ClipPath',
        328: 'ConsecutiveBadFaxLines',
        433: 'Decode',
        434: 'DefaultImageColor',
        269: 'DocumentName',
        336: 'DotRange',
        321: 'HalftoneHints',
        346: 'Indexed',
        347: 'JPEGTables',
        285: 'PageName',
        297: 'PageNumber',
        317: 'Predictor',
        319: 'PrimaryChromaticities',
        532: 'ReferenceBlackWhite',
        339: 'SampleFormat',
        340: 'SMinSampleValue',
        341: 'SMaxSampleValue',
        559: 'StripRowCounts',
        330: 'SubIFDs',
        292: 'T4Options',
        293: 'T6Options',
        325: 'TileByteCounts',
        323: 'TileLength',
        324: 'TileOffsets',
        322: 'TileWidth',
        301: 'TransferFunction',
        318: 'WhitePoint',
        344: 'XClipPathUnits',
        286: 'XPosition',
        529: 'YCbCrCoefficients',
        531: 'YCbCrPositioning',
        530: 'YCbCrSubSampling',
        345: 'YClipPathUnits',
        287: 'YPosition',
        37378: 'ApertureValue',
        40961: 'ColorSpace',
        36868: 'DateTimeDigitized',
        36867: 'DateTimeOriginal',
        34665: 'Exif IFD',
        36864: 'ExifVersion',
        33434: 'ExposureTime',
        41728: 'FileSource',
        37385: 'Flash',
        40960: 'FlashpixVersion',
        33437: 'FNumber',
        42016: 'ImageUniqueID',
        37384: 'LightSource',
        37500: 'MakerNote',
        37377: 'ShutterSpeedValue',
        37510: 'UserComment',
        33723: 'IPTC',
        34675: 'ICC Profile',
        700: 'XMP',
        42112: 'GDAL_METADATA',
        42113: 'GDAL_NODATA',
        34377: 'Photoshop',
        33550: 'ModelPixelScale',
        33922: 'ModelTiepoint',
        34264: 'ModelTransformation',
        34735: 'GeoKeyDirectory',
        34736: 'GeoDoubleParams',
        34737: 'GeoAsciiParams',
        50674: 'LercParameters',
    },
    qt = {};
for (const r in Ki) Ki.hasOwnProperty(r) && (qt[Ki[r]] = parseInt(r, 10));
const r0 = [qt.BitsPerSample, qt.ExtraSamples, qt.SampleFormat, qt.StripByteCounts, qt.StripOffsets, qt.StripRowCounts, qt.TileByteCounts, qt.TileOffsets, qt.SubIFDs],
    Js = {
        1: 'BYTE',
        2: 'ASCII',
        3: 'SHORT',
        4: 'LONG',
        5: 'RATIONAL',
        6: 'SBYTE',
        7: 'UNDEFINED',
        8: 'SSHORT',
        9: 'SLONG',
        10: 'SRATIONAL',
        11: 'FLOAT',
        12: 'DOUBLE',
        13: 'IFD',
        16: 'LONG8',
        17: 'SLONG8',
        18: 'IFD8',
    },
    Te = {};
for (const r in Js) Js.hasOwnProperty(r) && (Te[Js[r]] = parseInt(r, 10));
const wt = { WhiteIsZero: 0, BlackIsZero: 1, RGB: 2, Palette: 3, TransparencyMask: 4, CMYK: 5, YCbCr: 6, CIELab: 8, ICCLab: 9 },
    s0 = { Unspecified: 0, Assocalpha: 1, Unassalpha: 2 },
    i_ = { Version: 0, AddCompression: 1 },
    r_ = { None: 0, Deflate: 1 },
    o0 = {
        1024: 'GTModelTypeGeoKey',
        1025: 'GTRasterTypeGeoKey',
        1026: 'GTCitationGeoKey',
        2048: 'GeographicTypeGeoKey',
        2049: 'GeogCitationGeoKey',
        2050: 'GeogGeodeticDatumGeoKey',
        2051: 'GeogPrimeMeridianGeoKey',
        2052: 'GeogLinearUnitsGeoKey',
        2053: 'GeogLinearUnitSizeGeoKey',
        2054: 'GeogAngularUnitsGeoKey',
        2055: 'GeogAngularUnitSizeGeoKey',
        2056: 'GeogEllipsoidGeoKey',
        2057: 'GeogSemiMajorAxisGeoKey',
        2058: 'GeogSemiMinorAxisGeoKey',
        2059: 'GeogInvFlatteningGeoKey',
        2060: 'GeogAzimuthUnitsGeoKey',
        2061: 'GeogPrimeMeridianLongGeoKey',
        2062: 'GeogTOWGS84GeoKey',
        3072: 'ProjectedCSTypeGeoKey',
        3073: 'PCSCitationGeoKey',
        3074: 'ProjectionGeoKey',
        3075: 'ProjCoordTransGeoKey',
        3076: 'ProjLinearUnitsGeoKey',
        3077: 'ProjLinearUnitSizeGeoKey',
        3078: 'ProjStdParallel1GeoKey',
        3079: 'ProjStdParallel2GeoKey',
        3080: 'ProjNatOriginLongGeoKey',
        3081: 'ProjNatOriginLatGeoKey',
        3082: 'ProjFalseEastingGeoKey',
        3083: 'ProjFalseNorthingGeoKey',
        3084: 'ProjFalseOriginLongGeoKey',
        3085: 'ProjFalseOriginLatGeoKey',
        3086: 'ProjFalseOriginEastingGeoKey',
        3087: 'ProjFalseOriginNorthingGeoKey',
        3088: 'ProjCenterLongGeoKey',
        3089: 'ProjCenterLatGeoKey',
        3090: 'ProjCenterEastingGeoKey',
        3091: 'ProjCenterNorthingGeoKey',
        3092: 'ProjScaleAtNatOriginGeoKey',
        3093: 'ProjScaleAtCenterGeoKey',
        3094: 'ProjAzimuthAngleGeoKey',
        3095: 'ProjStraightVertPoleLongGeoKey',
        3096: 'ProjRectifiedGridAngleGeoKey',
        4096: 'VerticalCSTypeGeoKey',
        4097: 'VerticalCitationGeoKey',
        4098: 'VerticalDatumGeoKey',
        4099: 'VerticalUnitsGeoKey',
    };
function a0(r, e) {
    const { width: t, height: n } = r,
        i = new Uint8Array(t * n * 3);
    let s;
    for (let a = 0, o = 0; a < r.length; ++a, o += 3) (s = 256 - (r[a] / e) * 256), (i[o] = s), (i[o + 1] = s), (i[o + 2] = s);
    return i;
}
function l0(r, e) {
    const { width: t, height: n } = r,
        i = new Uint8Array(t * n * 3);
    let s;
    for (let a = 0, o = 0; a < r.length; ++a, o += 3) (s = (r[a] / e) * 256), (i[o] = s), (i[o + 1] = s), (i[o + 2] = s);
    return i;
}
function c0(r, e) {
    const { width: t, height: n } = r,
        i = new Uint8Array(t * n * 3),
        s = e.length / 3,
        a = (e.length / 3) * 2;
    for (let o = 0, c = 0; o < r.length; ++o, c += 3) {
        const l = r[o];
        (i[c] = (e[l] / 65536) * 256), (i[c + 1] = (e[l + s] / 65536) * 256), (i[c + 2] = (e[l + a] / 65536) * 256);
    }
    return i;
}
function u0(r) {
    const { width: e, height: t } = r,
        n = new Uint8Array(e * t * 3);
    for (let i = 0, s = 0; i < r.length; i += 4, s += 3) {
        const a = r[i],
            o = r[i + 1],
            c = r[i + 2],
            l = r[i + 3];
        (n[s] = 255 * ((255 - a) / 256) * ((255 - l) / 256)), (n[s + 1] = 255 * ((255 - o) / 256) * ((255 - l) / 256)), (n[s + 2] = 255 * ((255 - c) / 256) * ((255 - l) / 256));
    }
    return n;
}
function f0(r) {
    const { width: e, height: t } = r,
        n = new Uint8ClampedArray(e * t * 3);
    for (let i = 0, s = 0; i < r.length; i += 3, s += 3) {
        const a = r[i],
            o = r[i + 1],
            c = r[i + 2];
        (n[s] = a + 1.402 * (c - 128)), (n[s + 1] = a - 0.34414 * (o - 128) - 0.71414 * (c - 128)), (n[s + 2] = a + 1.772 * (o - 128));
    }
    return n;
}
const h0 = 0.95047,
    d0 = 1,
    p0 = 1.08883;
function m0(r) {
    const { width: e, height: t } = r,
        n = new Uint8Array(e * t * 3);
    for (let i = 0, s = 0; i < r.length; i += 3, s += 3) {
        const a = r[i + 0],
            o = (r[i + 1] << 24) >> 24,
            c = (r[i + 2] << 24) >> 24;
        let l = (a + 16) / 116,
            u = o / 500 + l,
            f = l - c / 200,
            h,
            p,
            g;
        (u = h0 * (u * u * u > 0.008856 ? u * u * u : (u - 16 / 116) / 7.787)),
            (l = d0 * (l * l * l > 0.008856 ? l * l * l : (l - 16 / 116) / 7.787)),
            (f = p0 * (f * f * f > 0.008856 ? f * f * f : (f - 16 / 116) / 7.787)),
            (h = u * 3.2406 + l * -1.5372 + f * -0.4986),
            (p = u * -0.9689 + l * 1.8758 + f * 0.0415),
            (g = u * 0.0557 + l * -0.204 + f * 1.057),
            (h = h > 0.0031308 ? 1.055 * h ** (1 / 2.4) - 0.055 : 12.92 * h),
            (p = p > 0.0031308 ? 1.055 * p ** (1 / 2.4) - 0.055 : 12.92 * p),
            (g = g > 0.0031308 ? 1.055 * g ** (1 / 2.4) - 0.055 : 12.92 * g),
            (n[s] = Math.max(0, Math.min(1, h)) * 255),
            (n[s + 1] = Math.max(0, Math.min(1, p)) * 255),
            (n[s + 2] = Math.max(0, Math.min(1, g)) * 255);
    }
    return n;
}
const g0 = 'modulepreload',
    _0 = function (r) {
        return '/' + r;
    },
    Ml = {},
    kn = function (e, t, n) {
        if (!t || t.length === 0) return e();
        const i = document.getElementsByTagName('link');
        return Promise.all(
            t.map((s) => {
                if (((s = _0(s)), s in Ml)) return;
                Ml[s] = !0;
                const a = s.endsWith('.css'),
                    o = a ? '[rel="stylesheet"]' : '';
                if (!!n)
                    for (let u = i.length - 1; u >= 0; u--) {
                        const f = i[u];
                        if (f.href === s && (!a || f.rel === 'stylesheet')) return;
                    }
                else if (document.querySelector(`link[href="${s}"]${o}`)) return;
                const l = document.createElement('link');
                if (((l.rel = a ? 'stylesheet' : g0), a || ((l.as = 'script'), (l.crossOrigin = '')), (l.href = s), document.head.appendChild(l), a))
                    return new Promise((u, f) => {
                        l.addEventListener('load', u), l.addEventListener('error', () => f(new Error(`Unable to preload CSS for ${s}`)));
                    });
            }),
        ).then(() => e());
    },
    mc = new Map();
function wn(r, e) {
    Array.isArray(r) || (r = [r]), r.forEach((t) => mc.set(t, e));
}
async function x0(r) {
    const e = mc.get(r.Compression);
    if (!e) throw new Error(`Unknown compression method identifier: ${r.Compression}`);
    const t = await e();
    return new t(r);
}
wn([void 0, 1], () => kn(() => import('./raw-7a0fe838.js'), ['assets/raw-7a0fe838.js', 'assets/basedecoder-3573ccae.js']).then((r) => r.default));
wn(5, () => kn(() => import('./lzw-901d9363.js'), ['assets/lzw-901d9363.js', 'assets/basedecoder-3573ccae.js']).then((r) => r.default));
wn(6, () => {
    throw new Error('old style JPEG compression is not supported.');
});
wn(7, () => kn(() => import('./jpeg-2f15dd85.js'), ['assets/jpeg-2f15dd85.js', 'assets/basedecoder-3573ccae.js']).then((r) => r.default));
wn([8, 32946], () => kn(() => import('./deflate-29fb883b.js'), ['assets/deflate-29fb883b.js', 'assets/pako.esm-bae9e474.js', 'assets/basedecoder-3573ccae.js']).then((r) => r.default));
wn(32773, () => kn(() => import('./packbits-90020365.js'), ['assets/packbits-90020365.js', 'assets/basedecoder-3573ccae.js']).then((r) => r.default));
wn(34887, () => kn(() => import('./lerc-6dfb8275.js'), ['assets/lerc-6dfb8275.js', 'assets/pako.esm-bae9e474.js', 'assets/basedecoder-3573ccae.js']).then((r) => r.default));
wn(50001, () => kn(() => import('./webimage-aa764004.js'), ['assets/webimage-aa764004.js', 'assets/basedecoder-3573ccae.js']).then((r) => r.default));
function ls(r, e, t, n = 1) {
    return new (Object.getPrototypeOf(r).constructor)(e * t * n);
}
function v0(r, e, t, n, i) {
    const s = e / n,
        a = t / i;
    return r.map((o) => {
        const c = ls(o, n, i);
        for (let l = 0; l < i; ++l) {
            const u = Math.min(Math.round(a * l), t - 1);
            for (let f = 0; f < n; ++f) {
                const h = Math.min(Math.round(s * f), e - 1),
                    p = o[u * e + h];
                c[l * n + f] = p;
            }
        }
        return c;
    });
}
function Si(r, e, t) {
    return (1 - t) * r + t * e;
}
function y0(r, e, t, n, i) {
    const s = e / n,
        a = t / i;
    return r.map((o) => {
        const c = ls(o, n, i);
        for (let l = 0; l < i; ++l) {
            const u = a * l,
                f = Math.floor(u),
                h = Math.min(Math.ceil(u), t - 1);
            for (let p = 0; p < n; ++p) {
                const g = s * p,
                    _ = g % 1,
                    m = Math.floor(g),
                    d = Math.min(Math.ceil(g), e - 1),
                    y = o[f * e + m],
                    x = o[f * e + d],
                    v = o[h * e + m],
                    M = o[h * e + d],
                    b = Si(Si(y, x, _), Si(v, M, _), u % 1);
                c[l * n + p] = b;
            }
        }
        return c;
    });
}
function M0(r, e, t, n, i, s = 'nearest') {
    switch (s.toLowerCase()) {
        case 'nearest':
            return v0(r, e, t, n, i);
        case 'bilinear':
        case 'linear':
            return y0(r, e, t, n, i);
        default:
            throw new Error(`Unsupported resampling method: '${s}'`);
    }
}
function S0(r, e, t, n, i, s) {
    const a = e / n,
        o = t / i,
        c = ls(r, n, i, s);
    for (let l = 0; l < i; ++l) {
        const u = Math.min(Math.round(o * l), t - 1);
        for (let f = 0; f < n; ++f) {
            const h = Math.min(Math.round(a * f), e - 1);
            for (let p = 0; p < s; ++p) {
                const g = r[u * e * s + h * s + p];
                c[l * n * s + f * s + p] = g;
            }
        }
    }
    return c;
}
function b0(r, e, t, n, i, s) {
    const a = e / n,
        o = t / i,
        c = ls(r, n, i, s);
    for (let l = 0; l < i; ++l) {
        const u = o * l,
            f = Math.floor(u),
            h = Math.min(Math.ceil(u), t - 1);
        for (let p = 0; p < n; ++p) {
            const g = a * p,
                _ = g % 1,
                m = Math.floor(g),
                d = Math.min(Math.ceil(g), e - 1);
            for (let y = 0; y < s; ++y) {
                const x = r[f * e * s + m * s + y],
                    v = r[f * e * s + d * s + y],
                    M = r[h * e * s + m * s + y],
                    b = r[h * e * s + d * s + y],
                    P = Si(Si(x, v, _), Si(M, b, _), u % 1);
                c[l * n * s + p * s + y] = P;
            }
        }
    }
    return c;
}
function w0(r, e, t, n, i, s, a = 'nearest') {
    switch (a.toLowerCase()) {
        case 'nearest':
            return S0(r, e, t, n, i, s);
        case 'bilinear':
        case 'linear':
            return b0(r, e, t, n, i, s);
        default:
            throw new Error(`Unsupported resampling method: '${a}'`);
    }
}
function E0(r, e, t) {
    let n = 0;
    for (let i = e; i < t; ++i) n += r[i];
    return n;
}
function ho(r, e, t) {
    switch (r) {
        case 1:
            if (e <= 8) return new Uint8Array(t);
            if (e <= 16) return new Uint16Array(t);
            if (e <= 32) return new Uint32Array(t);
            break;
        case 2:
            if (e === 8) return new Int8Array(t);
            if (e === 16) return new Int16Array(t);
            if (e === 32) return new Int32Array(t);
            break;
        case 3:
            switch (e) {
                case 16:
                case 32:
                    return new Float32Array(t);
                case 64:
                    return new Float64Array(t);
            }
            break;
    }
    throw Error('Unsupported data format/bitsPerSample');
}
function T0(r, e) {
    return (r === 1 || r === 2) && e <= 32 && e % 8 === 0 ? !1 : !(r === 3 && (e === 16 || e === 32 || e === 64));
}
function A0(r, e, t, n, i, s, a) {
    const o = new DataView(r),
        c = t === 2 ? a * s : a * s * n,
        l = t === 2 ? 1 : n,
        u = ho(e, i, c),
        f = parseInt('1'.repeat(i), 2);
    if (e === 1) {
        let h;
        t === 1 ? (h = n * i) : (h = i);
        let p = s * h;
        p & 7 && (p = (p + 7) & -8);
        for (let g = 0; g < a; ++g) {
            const _ = g * p;
            for (let m = 0; m < s; ++m) {
                const d = _ + m * l * i;
                for (let y = 0; y < l; ++y) {
                    const x = d + y * i,
                        v = (g * s + m) * l + y,
                        M = Math.floor(x / 8),
                        b = x % 8;
                    if (b + i <= 8) u[v] = (o.getUint8(M) >> (8 - i - b)) & f;
                    else if (b + i <= 16) u[v] = (o.getUint16(M) >> (16 - i - b)) & f;
                    else if (b + i <= 24) {
                        const P = (o.getUint16(M) << 8) | o.getUint8(M + 2);
                        u[v] = (P >> (24 - i - b)) & f;
                    } else u[v] = (o.getUint32(M) >> (32 - i - b)) & f;
                }
            }
        }
    }
    return u.buffer;
}
class C0 {
    constructor(e, t, n, i, s, a) {
        (this.fileDirectory = e), (this.geoKeys = t), (this.dataView = n), (this.littleEndian = i), (this.tiles = s ? {} : null), (this.isTiled = !e.StripOffsets);
        const o = e.PlanarConfiguration;
        if (((this.planarConfiguration = typeof o > 'u' ? 1 : o), this.planarConfiguration !== 1 && this.planarConfiguration !== 2)) throw new Error('Invalid planar configuration.');
        this.source = a;
    }
    getFileDirectory() {
        return this.fileDirectory;
    }
    getGeoKeys() {
        return this.geoKeys;
    }
    getWidth() {
        return this.fileDirectory.ImageWidth;
    }
    getHeight() {
        return this.fileDirectory.ImageLength;
    }
    getSamplesPerPixel() {
        return typeof this.fileDirectory.SamplesPerPixel < 'u' ? this.fileDirectory.SamplesPerPixel : 1;
    }
    getTileWidth() {
        return this.isTiled ? this.fileDirectory.TileWidth : this.getWidth();
    }
    getTileHeight() {
        return this.isTiled ? this.fileDirectory.TileLength : typeof this.fileDirectory.RowsPerStrip < 'u' ? Math.min(this.fileDirectory.RowsPerStrip, this.getHeight()) : this.getHeight();
    }
    getBlockWidth() {
        return this.getTileWidth();
    }
    getBlockHeight(e) {
        return this.isTiled || (e + 1) * this.getTileHeight() <= this.getHeight() ? this.getTileHeight() : this.getHeight() - e * this.getTileHeight();
    }
    getBytesPerPixel() {
        let e = 0;
        for (let t = 0; t < this.fileDirectory.BitsPerSample.length; ++t) e += this.getSampleByteSize(t);
        return e;
    }
    getSampleByteSize(e) {
        if (e >= this.fileDirectory.BitsPerSample.length) throw new RangeError(`Sample index ${e} is out of range.`);
        return Math.ceil(this.fileDirectory.BitsPerSample[e] / 8);
    }
    getReaderForSample(e) {
        const t = this.fileDirectory.SampleFormat ? this.fileDirectory.SampleFormat[e] : 1,
            n = this.fileDirectory.BitsPerSample[e];
        switch (t) {
            case 1:
                if (n <= 8) return DataView.prototype.getUint8;
                if (n <= 16) return DataView.prototype.getUint16;
                if (n <= 32) return DataView.prototype.getUint32;
                break;
            case 2:
                if (n <= 8) return DataView.prototype.getInt8;
                if (n <= 16) return DataView.prototype.getInt16;
                if (n <= 32) return DataView.prototype.getInt32;
                break;
            case 3:
                switch (n) {
                    case 16:
                        return function (i, s) {
                            return lc(this, i, s);
                        };
                    case 32:
                        return DataView.prototype.getFloat32;
                    case 64:
                        return DataView.prototype.getFloat64;
                }
                break;
        }
        throw Error('Unsupported data format/bitsPerSample');
    }
    getSampleFormat(e = 0) {
        return this.fileDirectory.SampleFormat ? this.fileDirectory.SampleFormat[e] : 1;
    }
    getBitsPerSample(e = 0) {
        return this.fileDirectory.BitsPerSample[e];
    }
    getArrayForSample(e, t) {
        const n = this.getSampleFormat(e),
            i = this.getBitsPerSample(e);
        return ho(n, i, t);
    }
    async getTileOrStrip(e, t, n, i, s) {
        const a = Math.ceil(this.getWidth() / this.getTileWidth()),
            o = Math.ceil(this.getHeight() / this.getTileHeight());
        let c;
        const { tiles: l } = this;
        this.planarConfiguration === 1 ? (c = t * a + e) : this.planarConfiguration === 2 && (c = n * a * o + t * a + e);
        let u, f;
        this.isTiled ? ((u = this.fileDirectory.TileOffsets[c]), (f = this.fileDirectory.TileByteCounts[c])) : ((u = this.fileDirectory.StripOffsets[c]), (f = this.fileDirectory.StripByteCounts[c]));
        const h = (await this.source.fetch([{ offset: u, length: f }], s))[0];
        let p;
        return (
            l === null || !l[c]
                ? ((p = (async () => {
                      let g = await i.decode(this.fileDirectory, h);
                      const _ = this.getSampleFormat(),
                          m = this.getBitsPerSample();
                      return T0(_, m) && (g = A0(g, _, this.planarConfiguration, this.getSamplesPerPixel(), m, this.getTileWidth(), this.getBlockHeight(t))), g;
                  })()),
                  l !== null && (l[c] = p))
                : (p = l[c]),
            { x: e, y: t, sample: n, data: await p }
        );
    }
    async _readRaster(e, t, n, i, s, a, o, c, l) {
        const u = this.getTileWidth(),
            f = this.getTileHeight(),
            h = this.getWidth(),
            p = this.getHeight(),
            g = Math.max(Math.floor(e[0] / u), 0),
            _ = Math.min(Math.ceil(e[2] / u), Math.ceil(h / u)),
            m = Math.max(Math.floor(e[1] / f), 0),
            d = Math.min(Math.ceil(e[3] / f), Math.ceil(p / f)),
            y = e[2] - e[0];
        let x = this.getBytesPerPixel();
        const v = [],
            M = [];
        for (let A = 0; A < t.length; ++A) this.planarConfiguration === 1 ? v.push(E0(this.fileDirectory.BitsPerSample, 0, t[A]) / 8) : v.push(0), M.push(this.getReaderForSample(t[A]));
        const b = [],
            { littleEndian: P } = this;
        for (let A = m; A < d; ++A)
            for (let S = g; S < _; ++S)
                for (let E = 0; E < t.length; ++E) {
                    const N = E,
                        O = t[E];
                    this.planarConfiguration === 2 && (x = this.getSampleByteSize(E));
                    const D = this.getTileOrStrip(S, A, O, s, l).then((U) => {
                        const B = U.data,
                            $ = new DataView(B),
                            Y = this.getBlockHeight(U.y),
                            k = U.y * f,
                            K = U.x * u,
                            ne = k + Y,
                            _e = (U.x + 1) * u,
                            ce = M[N],
                            W = Math.min(Y, Y - (ne - e[3]), p - k),
                            J = Math.min(u, u - (_e - e[2]), h - K);
                        for (let ie = Math.max(0, e[1] - k); ie < W; ++ie)
                            for (let oe = Math.max(0, e[0] - K); oe < J; ++oe) {
                                const V = (ie * u + oe) * x,
                                    Me = ce.call($, V + v[N], P);
                                let xe;
                                i ? ((xe = (ie + k - e[1]) * y * t.length + (oe + K - e[0]) * t.length + N), (n[xe] = Me)) : ((xe = (ie + k - e[1]) * y + oe + K - e[0]), (n[N][xe] = Me));
                            }
                    });
                    b.push(D);
                }
        if ((await Promise.all(b), (a && e[2] - e[0] !== a) || (o && e[3] - e[1] !== o))) {
            let A;
            return i ? (A = w0(n, e[2] - e[0], e[3] - e[1], a, o, t.length, c)) : (A = M0(n, e[2] - e[0], e[3] - e[1], a, o, c)), (A.width = a), (A.height = o), A;
        }
        return (n.width = a || e[2] - e[0]), (n.height = o || e[3] - e[1]), n;
    }
    async readRasters({ window: e, samples: t = [], interleave: n, pool: i = null, width: s, height: a, resampleMethod: o, fillValue: c, signal: l } = {}) {
        const u = e || [0, 0, this.getWidth(), this.getHeight()];
        if (u[0] > u[2] || u[1] > u[3]) throw new Error('Invalid subsets');
        const f = u[2] - u[0],
            h = u[3] - u[1],
            p = f * h,
            g = this.getSamplesPerPixel();
        if (!t || !t.length) for (let y = 0; y < g; ++y) t.push(y);
        else for (let y = 0; y < t.length; ++y) if (t[y] >= g) return Promise.reject(new RangeError(`Invalid sample index '${t[y]}'.`));
        let _;
        if (n) {
            const y = this.fileDirectory.SampleFormat ? Math.max.apply(null, this.fileDirectory.SampleFormat) : 1,
                x = Math.max.apply(null, this.fileDirectory.BitsPerSample);
            (_ = ho(y, x, p * t.length)), c && _.fill(c);
        } else {
            _ = [];
            for (let y = 0; y < t.length; ++y) {
                const x = this.getArrayForSample(t[y], p);
                Array.isArray(c) && y < c.length ? x.fill(c[y]) : c && !Array.isArray(c) && x.fill(c), _.push(x);
            }
        }
        const m = i || (await x0(this.fileDirectory));
        return await this._readRaster(u, t, _, n, m, s, a, o, l);
    }
    async readRGB({ window: e, interleave: t = !0, pool: n = null, width: i, height: s, resampleMethod: a, enableAlpha: o = !1, signal: c } = {}) {
        const l = e || [0, 0, this.getWidth(), this.getHeight()];
        if (l[0] > l[2] || l[1] > l[3]) throw new Error('Invalid subsets');
        const u = this.fileDirectory.PhotometricInterpretation;
        if (u === wt.RGB) {
            let d = [0, 1, 2];
            if (this.fileDirectory.ExtraSamples !== s0.Unspecified && o) {
                d = [];
                for (let y = 0; y < this.fileDirectory.BitsPerSample.length; y += 1) d.push(y);
            }
            return this.readRasters({ window: e, interleave: t, samples: d, pool: n, width: i, height: s, resampleMethod: a, signal: c });
        }
        let f;
        switch (u) {
            case wt.WhiteIsZero:
            case wt.BlackIsZero:
            case wt.Palette:
                f = [0];
                break;
            case wt.CMYK:
                f = [0, 1, 2, 3];
                break;
            case wt.YCbCr:
            case wt.CIELab:
                f = [0, 1, 2];
                break;
            default:
                throw new Error('Invalid or unsupported photometric interpretation.');
        }
        const h = { window: l, interleave: !0, samples: f, pool: n, width: i, height: s, resampleMethod: a, signal: c },
            { fileDirectory: p } = this,
            g = await this.readRasters(h),
            _ = 2 ** this.fileDirectory.BitsPerSample[0];
        let m;
        switch (u) {
            case wt.WhiteIsZero:
                m = a0(g, _);
                break;
            case wt.BlackIsZero:
                m = l0(g, _);
                break;
            case wt.Palette:
                m = c0(g, p.ColorMap);
                break;
            case wt.CMYK:
                m = u0(g);
                break;
            case wt.YCbCr:
                m = f0(g);
                break;
            case wt.CIELab:
                m = m0(g);
                break;
            default:
                throw new Error('Unsupported photometric interpretation.');
        }
        if (!t) {
            const d = new Uint8Array(m.length / 3),
                y = new Uint8Array(m.length / 3),
                x = new Uint8Array(m.length / 3);
            for (let v = 0, M = 0; v < m.length; v += 3, ++M) (d[M] = m[v]), (y[M] = m[v + 1]), (x[M] = m[v + 2]);
            m = [d, y, x];
        }
        return (m.width = g.width), (m.height = g.height), m;
    }
    getTiePoints() {
        if (!this.fileDirectory.ModelTiepoint) return [];
        const e = [];
        for (let t = 0; t < this.fileDirectory.ModelTiepoint.length; t += 6)
            e.push({
                i: this.fileDirectory.ModelTiepoint[t],
                j: this.fileDirectory.ModelTiepoint[t + 1],
                k: this.fileDirectory.ModelTiepoint[t + 2],
                x: this.fileDirectory.ModelTiepoint[t + 3],
                y: this.fileDirectory.ModelTiepoint[t + 4],
                z: this.fileDirectory.ModelTiepoint[t + 5],
            });
        return e;
    }
    getGDALMetadata(e = null) {
        const t = {};
        if (!this.fileDirectory.GDAL_METADATA) return null;
        const n = this.fileDirectory.GDAL_METADATA;
        let i = Yr(n, 'Item');
        e === null ? (i = i.filter((s) => Mi(s, 'sample') === void 0)) : (i = i.filter((s) => Number(Mi(s, 'sample')) === e));
        for (let s = 0; s < i.length; ++s) {
            const a = i[s];
            t[Mi(a, 'name')] = a.inner;
        }
        return t;
    }
    getGDALNoData() {
        if (!this.fileDirectory.GDAL_NODATA) return null;
        const e = this.fileDirectory.GDAL_NODATA;
        return Number(e.substring(0, e.length - 1));
    }
    getOrigin() {
        const e = this.fileDirectory.ModelTiepoint,
            t = this.fileDirectory.ModelTransformation;
        if (e && e.length === 6) return [e[3], e[4], e[5]];
        if (t) return [t[3], t[7], t[11]];
        throw new Error('The image does not have an affine transformation.');
    }
    getResolution(e = null) {
        const t = this.fileDirectory.ModelPixelScale,
            n = this.fileDirectory.ModelTransformation;
        if (t) return [t[0], -t[1], t[2]];
        if (n) return [n[0], n[5], n[10]];
        if (e) {
            const [i, s, a] = e.getResolution();
            return [(i * e.getWidth()) / this.getWidth(), (s * e.getHeight()) / this.getHeight(), (a * e.getWidth()) / this.getWidth()];
        }
        throw new Error('The image does not have an affine transformation.');
    }
    pixelIsArea() {
        return this.geoKeys.GTRasterTypeGeoKey === 1;
    }
    getBoundingBox() {
        const e = this.getOrigin(),
            t = this.getResolution(),
            n = e[0],
            i = e[1],
            s = n + t[0] * this.getWidth(),
            a = i + t[1] * this.getHeight();
        return [Math.min(n, s), Math.min(i, a), Math.max(n, s), Math.max(i, a)];
    }
}
const P0 = C0;
class L0 {
    constructor(e) {
        this._dataView = new DataView(e);
    }
    get buffer() {
        return this._dataView.buffer;
    }
    getUint64(e, t) {
        const n = this.getUint32(e, t),
            i = this.getUint32(e + 4, t);
        let s;
        if (t) {
            if (((s = n + 2 ** 32 * i), !Number.isSafeInteger(s)))
                throw new Error(`${s} exceeds MAX_SAFE_INTEGER. Precision may be lost. Please report if you get this message to https://github.com/geotiffjs/geotiff.js/issues`);
            return s;
        }
        if (((s = 2 ** 32 * n + i), !Number.isSafeInteger(s)))
            throw new Error(`${s} exceeds MAX_SAFE_INTEGER. Precision may be lost. Please report if you get this message to https://github.com/geotiffjs/geotiff.js/issues`);
        return s;
    }
    getInt64(e, t) {
        let n = 0;
        const i = (this._dataView.getUint8(e + (t ? 7 : 0)) & 128) > 0;
        let s = !0;
        for (let a = 0; a < 8; a++) {
            let o = this._dataView.getUint8(e + (t ? a : 7 - a));
            i && (s ? o !== 0 && ((o = ~(o - 1) & 255), (s = !1)) : (o = ~o & 255)), (n += o * 256 ** a);
        }
        return i && (n = -n), n;
    }
    getUint8(e, t) {
        return this._dataView.getUint8(e, t);
    }
    getInt8(e, t) {
        return this._dataView.getInt8(e, t);
    }
    getUint16(e, t) {
        return this._dataView.getUint16(e, t);
    }
    getInt16(e, t) {
        return this._dataView.getInt16(e, t);
    }
    getUint32(e, t) {
        return this._dataView.getUint32(e, t);
    }
    getInt32(e, t) {
        return this._dataView.getInt32(e, t);
    }
    getFloat16(e, t) {
        return lc(this._dataView, e, t);
    }
    getFloat32(e, t) {
        return this._dataView.getFloat32(e, t);
    }
    getFloat64(e, t) {
        return this._dataView.getFloat64(e, t);
    }
}
class R0 {
    constructor(e, t, n, i) {
        (this._dataView = new DataView(e)), (this._sliceOffset = t), (this._littleEndian = n), (this._bigTiff = i);
    }
    get sliceOffset() {
        return this._sliceOffset;
    }
    get sliceTop() {
        return this._sliceOffset + this.buffer.byteLength;
    }
    get littleEndian() {
        return this._littleEndian;
    }
    get bigTiff() {
        return this._bigTiff;
    }
    get buffer() {
        return this._dataView.buffer;
    }
    covers(e, t) {
        return this.sliceOffset <= e && this.sliceTop >= e + t;
    }
    readUint8(e) {
        return this._dataView.getUint8(e - this._sliceOffset, this._littleEndian);
    }
    readInt8(e) {
        return this._dataView.getInt8(e - this._sliceOffset, this._littleEndian);
    }
    readUint16(e) {
        return this._dataView.getUint16(e - this._sliceOffset, this._littleEndian);
    }
    readInt16(e) {
        return this._dataView.getInt16(e - this._sliceOffset, this._littleEndian);
    }
    readUint32(e) {
        return this._dataView.getUint32(e - this._sliceOffset, this._littleEndian);
    }
    readInt32(e) {
        return this._dataView.getInt32(e - this._sliceOffset, this._littleEndian);
    }
    readFloat32(e) {
        return this._dataView.getFloat32(e - this._sliceOffset, this._littleEndian);
    }
    readFloat64(e) {
        return this._dataView.getFloat64(e - this._sliceOffset, this._littleEndian);
    }
    readUint64(e) {
        const t = this.readUint32(e),
            n = this.readUint32(e + 4);
        let i;
        if (this._littleEndian) {
            if (((i = t + 2 ** 32 * n), !Number.isSafeInteger(i)))
                throw new Error(`${i} exceeds MAX_SAFE_INTEGER. Precision may be lost. Please report if you get this message to https://github.com/geotiffjs/geotiff.js/issues`);
            return i;
        }
        if (((i = 2 ** 32 * t + n), !Number.isSafeInteger(i)))
            throw new Error(`${i} exceeds MAX_SAFE_INTEGER. Precision may be lost. Please report if you get this message to https://github.com/geotiffjs/geotiff.js/issues`);
        return i;
    }
    readInt64(e) {
        let t = 0;
        const n = (this._dataView.getUint8(e + (this._littleEndian ? 7 : 0)) & 128) > 0;
        let i = !0;
        for (let s = 0; s < 8; s++) {
            let a = this._dataView.getUint8(e + (this._littleEndian ? s : 7 - s));
            n && (i ? a !== 0 && ((a = ~(a - 1) & 255), (i = !1)) : (a = ~a & 255)), (t += a * 256 ** s);
        }
        return n && (t = -t), t;
    }
    readOffset(e) {
        return this._bigTiff ? this.readUint64(e) : this.readUint32(e);
    }
}
class D0 {
    async fetch(e, t = void 0) {
        return Promise.all(e.map((n) => this.fetchSlice(n, t)));
    }
    async fetchSlice(e) {
        throw new Error(`fetching of slice ${e} not possible, not implemented`);
    }
    get fileSize() {
        return null;
    }
    async close() {}
}
class Lo extends Error {
    constructor(e) {
        super(e), Error.captureStackTrace && Error.captureStackTrace(this, Lo), (this.name = 'AbortError');
    }
}
class I0 extends D0 {
    constructor(e) {
        super(), (this.arrayBuffer = e);
    }
    fetchSlice(e, t) {
        if (t && t.aborted) throw new Lo('Request aborted');
        return this.arrayBuffer.slice(e.offset, e.offset + e.length);
    }
}
function U0(r) {
    return new I0(r);
}
function po(r) {
    switch (r) {
        case Te.BYTE:
        case Te.ASCII:
        case Te.SBYTE:
        case Te.UNDEFINED:
            return 1;
        case Te.SHORT:
        case Te.SSHORT:
            return 2;
        case Te.LONG:
        case Te.SLONG:
        case Te.FLOAT:
        case Te.IFD:
            return 4;
        case Te.RATIONAL:
        case Te.SRATIONAL:
        case Te.DOUBLE:
        case Te.LONG8:
        case Te.SLONG8:
        case Te.IFD8:
            return 8;
        default:
            throw new RangeError(`Invalid field type: ${r}`);
    }
}
function N0(r) {
    const e = r.GeoKeyDirectory;
    if (!e) return null;
    const t = {};
    for (let n = 4; n <= e[3] * 4; n += 4) {
        const i = o0[e[n]],
            s = e[n + 1] ? Ki[e[n + 1]] : null,
            a = e[n + 2],
            o = e[n + 3];
        let c = null;
        if (!s) c = o;
        else {
            if (((c = r[s]), typeof c > 'u' || c === null)) throw new Error(`Could not get value of geoKey '${i}'.`);
            typeof c == 'string' ? (c = c.substring(o, o + a - 1)) : c.subarray && ((c = c.subarray(o, o + a)), a === 1 && (c = c[0]));
        }
        t[i] = c;
    }
    return t;
}
function di(r, e, t, n) {
    let i = null,
        s = null;
    const a = po(e);
    switch (e) {
        case Te.BYTE:
        case Te.ASCII:
        case Te.UNDEFINED:
            (i = new Uint8Array(t)), (s = r.readUint8);
            break;
        case Te.SBYTE:
            (i = new Int8Array(t)), (s = r.readInt8);
            break;
        case Te.SHORT:
            (i = new Uint16Array(t)), (s = r.readUint16);
            break;
        case Te.SSHORT:
            (i = new Int16Array(t)), (s = r.readInt16);
            break;
        case Te.LONG:
        case Te.IFD:
            (i = new Uint32Array(t)), (s = r.readUint32);
            break;
        case Te.SLONG:
            (i = new Int32Array(t)), (s = r.readInt32);
            break;
        case Te.LONG8:
        case Te.IFD8:
            (i = new Array(t)), (s = r.readUint64);
            break;
        case Te.SLONG8:
            (i = new Array(t)), (s = r.readInt64);
            break;
        case Te.RATIONAL:
            (i = new Uint32Array(t * 2)), (s = r.readUint32);
            break;
        case Te.SRATIONAL:
            (i = new Int32Array(t * 2)), (s = r.readInt32);
            break;
        case Te.FLOAT:
            (i = new Float32Array(t)), (s = r.readFloat32);
            break;
        case Te.DOUBLE:
            (i = new Float64Array(t)), (s = r.readFloat64);
            break;
        default:
            throw new RangeError(`Invalid field type: ${e}`);
    }
    if (e === Te.RATIONAL || e === Te.SRATIONAL) for (let o = 0; o < t; o += 2) (i[o] = s.call(r, n + o * a)), (i[o + 1] = s.call(r, n + (o * a + 4)));
    else for (let o = 0; o < t; ++o) i[o] = s.call(r, n + o * a);
    return e === Te.ASCII ? new TextDecoder('utf-8').decode(i) : i;
}
class O0 {
    constructor(e, t, n) {
        (this.fileDirectory = e), (this.geoKeyDirectory = t), (this.nextIFDByteOffset = n);
    }
}
class Vr extends Error {
    constructor(e) {
        super(`No image at index ${e}`), (this.index = e);
    }
}
class F0 {
    async readRasters(e = {}) {
        const { window: t, width: n, height: i } = e;
        let { resX: s, resY: a, bbox: o } = e;
        const c = await this.getImage();
        let l = c;
        const u = await this.getImageCount(),
            f = c.getBoundingBox();
        if (t && o) throw new Error('Both "bbox" and "window" passed.');
        if (n || i) {
            if (t) {
                const [g, _] = c.getOrigin(),
                    [m, d] = c.getResolution();
                o = [g + t[0] * m, _ + t[1] * d, g + t[2] * m, _ + t[3] * d];
            }
            const p = o || f;
            if (n) {
                if (s) throw new Error('Both width and resX passed');
                s = (p[2] - p[0]) / n;
            }
            if (i) {
                if (a) throw new Error('Both width and resY passed');
                a = (p[3] - p[1]) / i;
            }
        }
        if (s || a) {
            const p = [];
            for (let g = 0; g < u; ++g) {
                const _ = await this.getImage(g),
                    { SubfileType: m, NewSubfileType: d } = _.fileDirectory;
                (g === 0 || m === 2 || d & 1) && p.push(_);
            }
            p.sort((g, _) => g.getWidth() - _.getWidth());
            for (let g = 0; g < p.length; ++g) {
                const _ = p[g],
                    m = (f[2] - f[0]) / _.getWidth(),
                    d = (f[3] - f[1]) / _.getHeight();
                if (((l = _), (s && s > m) || (a && a > d))) break;
            }
        }
        let h = t;
        if (o) {
            const [p, g] = c.getOrigin(),
                [_, m] = l.getResolution(c);
            (h = [Math.round((o[0] - p) / _), Math.round((o[1] - g) / m), Math.round((o[2] - p) / _), Math.round((o[3] - g) / m)]),
                (h = [Math.min(h[0], h[2]), Math.min(h[1], h[3]), Math.max(h[0], h[2]), Math.max(h[1], h[3])]);
        }
        return l.readRasters({ ...e, window: h });
    }
}
class Ro extends F0 {
    constructor(e, t, n, i, s = {}) {
        super(), (this.source = e), (this.littleEndian = t), (this.bigTiff = n), (this.firstIFDOffset = i), (this.cache = s.cache || !1), (this.ifdRequests = []), (this.ghostValues = null);
    }
    async getSlice(e, t) {
        const n = this.bigTiff ? 4048 : 1024;
        return new R0((await this.source.fetch([{ offset: e, length: typeof t < 'u' ? t : n }]))[0], e, this.littleEndian, this.bigTiff);
    }
    async parseFileDirectoryAt(e) {
        const t = this.bigTiff ? 20 : 12,
            n = this.bigTiff ? 8 : 2;
        let i = await this.getSlice(e);
        const s = this.bigTiff ? i.readUint64(e) : i.readUint16(e),
            a = s * t + (this.bigTiff ? 16 : 6);
        i.covers(e, a) || (i = await this.getSlice(e, a));
        const o = {};
        let c = e + (this.bigTiff ? 8 : 2);
        for (let f = 0; f < s; c += t, ++f) {
            const h = i.readUint16(c),
                p = i.readUint16(c + 2),
                g = this.bigTiff ? i.readUint64(c + 4) : i.readUint32(c + 4);
            let _, m;
            const d = po(p),
                y = c + (this.bigTiff ? 12 : 8);
            if (d * g <= (this.bigTiff ? 8 : 4)) _ = di(i, p, g, y);
            else {
                const x = i.readOffset(y),
                    v = po(p) * g;
                if (i.covers(x, v)) _ = di(i, p, g, x);
                else {
                    const M = await this.getSlice(x, v);
                    _ = di(M, p, g, x);
                }
            }
            g === 1 && r0.indexOf(h) === -1 && !(p === Te.RATIONAL || p === Te.SRATIONAL) ? (m = _[0]) : (m = _), (o[Ki[h]] = m);
        }
        const l = N0(o),
            u = i.readOffset(e + n + t * s);
        return new O0(o, l, u);
    }
    async requestIFD(e) {
        if (this.ifdRequests[e]) return this.ifdRequests[e];
        if (e === 0) return (this.ifdRequests[e] = this.parseFileDirectoryAt(this.firstIFDOffset)), this.ifdRequests[e];
        if (!this.ifdRequests[e - 1])
            try {
                this.ifdRequests[e - 1] = this.requestIFD(e - 1);
            } catch (t) {
                throw t instanceof Vr ? new Vr(e) : t;
            }
        return (
            (this.ifdRequests[e] = (async () => {
                const t = await this.ifdRequests[e - 1];
                if (t.nextIFDByteOffset === 0) throw new Vr(e);
                return this.parseFileDirectoryAt(t.nextIFDByteOffset);
            })()),
            this.ifdRequests[e]
        );
    }
    async getImage(e = 0) {
        const t = await this.requestIFD(e);
        return new P0(t.fileDirectory, t.geoKeyDirectory, this.dataView, this.littleEndian, this.cache, this.source);
    }
    async getImageCount() {
        let e = 0,
            t = !0;
        for (; t; )
            try {
                await this.requestIFD(e), ++e;
            } catch (n) {
                if (n instanceof Vr) t = !1;
                else throw n;
            }
        return e;
    }
    async getGhostValues() {
        const e = this.bigTiff ? 16 : 8;
        if (this.ghostValues) return this.ghostValues;
        const t = 'GDAL_STRUCTURAL_METADATA_SIZE=',
            n = t.length + 100;
        let i = await this.getSlice(e, n);
        if (t === di(i, Te.ASCII, t.length, e)) {
            const a = di(i, Te.ASCII, n, e).split(`
`)[0],
                o = Number(a.split('=')[1].split(' ')[0]) + a.length;
            o > n && (i = await this.getSlice(e, o));
            const c = di(i, Te.ASCII, o, e);
            (this.ghostValues = {}),
                c
                    .split(
                        `
`,
                    )
                    .filter((l) => l.length > 0)
                    .map((l) => l.split('='))
                    .forEach(([l, u]) => {
                        this.ghostValues[l] = u;
                    });
        }
        return this.ghostValues;
    }
    static async fromSource(e, t, n) {
        const i = (await e.fetch([{ offset: 0, length: 1024 }], n))[0],
            s = new L0(i),
            a = s.getUint16(0, 0);
        let o;
        if (a === 18761) o = !0;
        else if (a === 19789) o = !1;
        else throw new TypeError('Invalid byte order value.');
        const c = s.getUint16(2, o);
        let l;
        if (c === 42) l = !1;
        else if (c === 43) {
            if (((l = !0), s.getUint16(4, o) !== 8)) throw new Error('Unsupported offset byte-size.');
        } else throw new TypeError('Invalid magic number.');
        const u = l ? s.getUint64(8, o) : s.getUint32(4, o);
        return new Ro(e, o, l, u, t);
    }
    close() {
        return typeof this.source.close == 'function' ? this.source.close() : !1;
    }
}
async function B0(r, e) {
    return Ro.fromSource(U0(r), e);
}
Et.prototype.raycast = Ag;
const Qr = { width: window.innerWidth, height: window.innerHeight },
    gc = document.querySelector('.webgl'),
    Hn = new Fm(),
    cs = new jm(16777215, 1);
cs.position.set(0, 1e3, 0);
cs.target.position.set(0, 0, 0);
Hn.add(cs);
Hn.add(cs.target);
const z0 = new Ym(16777215, 0.5);
Hn.add(z0);
const sr = new Lt(75, Qr.width / Qr.height, 0.1, 1e4),
    Do = 1500,
    _c = ts.degToRad(-62),
    Io = ts.degToRad(65),
    G0 = Do * Math.sin(Io) * Math.cos(_c),
    V0 = Do * Math.cos(Io),
    k0 = Do * Math.sin(Io) * Math.sin(_c);
sr.position.set(G0, V0, k0);
const xc = new Zm(sr, gc);
xc.enableDamping = !0;
const Uo = new as();
Uo.scale.setScalar(45e4);
Hn.add(Uo);
const lr = Uo.material.uniforms;
lr.turbidity.value = 10;
lr.rayleigh.value = 3;
lr.mieCoefficient.value = 0.005;
lr.mieDirectionalG.value = 0.7;
const vc = { inclination: 0.49, azimuth: -32.4, elevation: 2 },
    yc = new R(),
    H0 = ts.degToRad(90 - vc.elevation),
    W0 = ts.degToRad(vc.azimuth);
yc.setFromSphericalCoords(1, H0, W0);
lr.sunPosition.value.copy(yc);
const q0 = (r, e, t) => {
        const n = new Km();
        n.firstHitOnly = !0;
        const i = new km(),
            s = [];
        i.load(
            'treetop.json',
            (a) => {
                JSON.parse(a).forEach((l) => {
                    const u = [l.X - e[0], l.Y - e[1]],
                        f = l.ID,
                        h = l.H - l.Cl,
                        p = l.D / 2,
                        g = l.Cl,
                        _ = l.Bl,
                        m = new os(p, p, h, 6),
                        d = new bo(_, g, 6),
                        y = new R(u[0], -1, -u[1]),
                        x = new R(u[0], t, -u[1]);
                    n.set(x, y.sub(x).normalize());
                    let v;
                    switch (f) {
                        case 1:
                            v = 'rgb(74, 230, 77)';
                            break;
                        case 2:
                            v = 'rgb(0, 122, 6)';
                            break;
                        case 3:
                            v = 'rgb(33, 164, 114)';
                            break;
                    }
                    [
                        { geometry: m, defaultY: 0, height: h / 2, color: 'rgb(232, 132, 1)' },
                        { geometry: d, defaultY: 0, height: g / 2 + h, color: v },
                    ].forEach((b) => {
                        const P = n.intersectObject(r);
                        P.length > 0 ? b.geometry.translate(u[0], P[0].point.y + b.height, -u[1]) : b.geometry.translate(u[0], b.defaultY, -u[1]);
                        const A = new ze(b.color),
                            S = Array.from({ length: b.geometry.getAttribute('position').count }).flatMap(() => [A.r, A.g, A.b]);
                        b.geometry.setAttribute('color', new Bt(S, 3)), s.push(b.geometry);
                    });
                });
                const o = new Bm({ transparent: !0, vertexColors: !0 }),
                    c = new Et($m(s), o);
                (c.castShadow = !0), (c.name = 'treeSphere'), Hn.add(c);
            },
            (a) => {
                console.error(a);
            },
        );
    },
    X0 = async () => {
        const t = await (await fetch('dem_5m.tif')).arrayBuffer(),
            i = await (await B0(t)).getImage(),
            s = await i.readRasters(),
            a = await i.getFileDirectory().ModelPixelScale,
            o = a[0],
            c = a[1],
            l = i.getWidth(),
            u = i.getHeight(),
            [f, h] = i.getOrigin(),
            p = f + (l / 2) * o,
            g = h - (u / 2) * c,
            _ = [p, g],
            m = i.getFileDirectory().ModelPixelScale[0],
            d = i.getFileDirectory().ModelPixelScale[1],
            y = new Wm().load('microtopographic.webp'),
            x = new yo({ side: Nt, map: y }),
            v = new rs(l * m, u * d, l - 1, u - 1);
        v.rotateX(-Math.PI / 2);
        const M = new Et(v, x),
            b = v.attributes.position.array,
            P = s[0],
            A = P.reduce((O, D) => Math.min(O, D), 1 / 0),
            E = P.reduce((O, D) => Math.max(O, D), -1 / 0) - A;
        let N = 0;
        P.forEach((O, D) => {
            (b[N + 1] = O), (N += 3);
        }),
            (v.boundsTree = new Yi(v)),
            (v.name = 'dem'),
            (M.position.y = -A),
            Hn.add(M),
            q0(M, _, E);
    };
X0().catch((r) => {
    console.error('Error loading raster data:', r);
});
const us = new jl({ canvas: gc });
us.setSize(Qr.width, Qr.height);
us.setPixelRatio(Math.min(window.devicePixelRatio, 2));
const Mc = () => {
    requestAnimationFrame(Mc), xc.update(), us.render(Hn, sr);
};
Mc();
window.addEventListener(
    'resize',
    () => {
        (sr.aspect = window.innerWidth / window.innerHeight), sr.updateProjectionMatrix(), us.setSize(window.innerWidth, window.innerHeight);
    },
    !1,
);
export { i_ as L, r_ as a };
