// remingtonGail.js : Mangal Remington GAIL (Unicode) layout + typing engine
//
// Entry format: KeyboardEvent.code -> [normal, shift]

const KEYS = {
  Backquote: ['़', 'द्य'],Digit1: ['1', '।'], Digit2: ['2', '/'], Digit3: ['3', ':'],Digit4: ['4', '*'], Digit5: ['5', '-'], Digit6: ['6', "'"], Digit7: ['7', "'"], Digit8: ['8', "द्ध"], Digit9: ['9', 'त्र'], Digit0: ['0', 'ऋ'],Minus: [';', '.'], Equal: ['ृ', '्'],
    KeyQ: ['ु', 'फ'], KeyW: ['ू', 'ॅ'], KeyE: ['म', 'म्'], KeyR: ['त', 'त्'],KeyT: ['ज', 'ज्'], KeyY: ['ल', 'ल्'], KeyU: ['न', 'न्'], KeyI: ['प', 'प्'],KeyO: ['व', 'व्'], KeyP: ['च', 'च्'], BracketLeft: ['ख्', 'क्ष'], BracketRight: [',', 'द्व'],
    KeyA: ['ं', 'ा'], KeyS: ['े', 'ै'], KeyD: ['क', 'क्'], KeyF: ['ि', 'थ्'], KeyG: ['ह', 'ळ'], KeyH: ['ी', 'भ्'], KeyJ: ['र', 'श्र'], KeyK: ['ा', 'ज्ञ'], KeyL: ['स', 'स्'], Semicolon: ['य', 'रू'], Quote: ['श्', 'ष्'],
    KeyZ: ['्र', 'र्'], KeyX: ['ग', 'ग्'], KeyC: ['ब', 'ब्'], KeyV: ['अ', 'ट'], KeyB: ['इ', 'ठ'], KeyN: ['द', 'छ'], KeyM: ['उ', 'ड'], Comma: ['ए', 'ढ'], Period: ['ण्', 'झ'],
    Backslash: ['(',')'],
    Space: [' ', ' '],
};

function restoreHindi(value) {
  try { return decodeURIComponent(escape(value)); }
  catch (_) { return value; }
}

export function buildLayout() {
  const keys = Object.fromEntries(Object.entries(KEYS).map(([code, pair]) => [
    code, pair.map(value => restoreHindi(value)),
  ]));
  return {
    id: 'remington-gail-mangal-hindi',
    keys,
  };
}

// Keys with no direct key (आ, ओ, औ, ई, ऊ ...) are typed as two keys, e.g.
// अ + ा = आ. These pair rules join them into the single Unicode letter.
// ASSUMPTION: confirm your exam software does the same, or edit/disable.
const COMPOSE_SOURCE = {
  'अा': 'आ',
  'आे': 'ओ',
  'आै': 'औ',
  'ाे': 'ो',
  'ाै': 'ौ',
  'इर्': 'ई',
  'उू': 'ऊ',
  'उफ':'ऊ',
  'क्ा': 'क',
  'ख्ा': 'ख',
  'ग्ा': 'ग',
  'घ्ा': 'घ',
  'ङ्ा': 'ङ',
  'च्ा': 'च',
  'छ्ा': 'छ',
  'ज्ा': 'ज',
  'झ्ा': 'झ',
  'ञ्ा': 'ञ',
  'ट्ा': 'ट',
  'ठ्ा': 'ठ',
  'ड्ा': 'ड',
  'ढ्ा': 'ढ',
  'ण्ा': 'ण',
  'त्ा': 'त',
  'थ्ा': 'थ',
  'द्ा': 'द',
  'ध्ा': 'ध',
  'न्ा': 'न',
  'प्ा': 'प',
  'फ्ा': 'फ',
  'ब्ा': 'ब',
  'भ्ा': 'भ',
  'म्ा': 'म',
  'य्ा': 'य',
  'र्ा': 'र',
  'ल्ा': 'ल',
  'व्ा': 'व',
  'श्ा': 'श',
  'ष्ा': 'ष',
  'स्ा': 'स',
  'ह्ा': 'ह',
  'ळ्ा': 'ळ',
  'क्ष्ा': 'क्ष',
  'त्र्ा': 'त्र',
  'ज्ञ्ा': 'ज्ञ',
  'श्र्ा': 'श्र',
  
  'िक': 'कि',
  'िख': 'खि',
  'िग': 'गि',
  'िघ': 'घि',
  'िङ': 'ङि',
  'िच': 'चि',
  'िछ': 'छि',
  'िज': 'जि',
  'िझ': 'झि',
  'िञ': 'ञि',
  'िट': 'टि',
  'िठ': 'ठि',
  'िड': 'डि',
  'िढ': 'ढि',
  'िण': 'णि',
  'ित': 'ति',
  'िथ': 'थि',
  'िद': 'दि',
  'िध': 'धि',
  'िन': 'नि',
  'िप': 'पि',
  'िफ': 'फि',
  'िब': 'बि',
  'िभ': 'भि',
  'िम': 'मि',
  'िय': 'यि',
  'िर': 'रि',
  'िल': 'लि',
  'िव': 'वि',
  'िश': 'शि',
  'िष': 'षि',
  'िस': 'सि',
  'िह': 'हि',
  'िळ': 'ळि',
  'िक्ष': 'क्षि',
  'ित्र': 'त्रि',
  'िज्ञ': 'ज्ञि',
  'िश्र': 'श्रि'

};

export const COMPOSE = Object.fromEntries(Object.entries(COMPOSE_SOURCE).map(
  ([sequence, result]) => [restoreHindi(sequence), restoreHindi(result)]
));
// र्e this on BOTH the passage word and the typed word before comparing.
// "ड़" can be one code point (U+095C) or ड + ़ (U+0921 U+093C). They look the
// same but are not equal as strings. NFC turns both into the same sequence.
export function normalizeHindi(s = '') {
  return s
    .normalize('NFC')
    .replace(/[\u200B-\u200D\u2060\uFEFF]/g, '')   // zero-width chars
    .replace(/\u00A0/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

// Last syllable: (consonant + halant)* consonant [nukta] [matras]
const LAST_SYLLABLE =
  /((?:[\u0915-\u0939\u0958-\u095F]\u094D)*[\u0915-\u0939\u0958-\u095F]\u093C?[\u093E-\u094C\u0900-\u0903]*)$/;

export function mapKey(layout, e) {
  if (e.metaKey || e.ctrlKey) return null;          // let shortcuts through
  if (e.altKey) return null;                        // Alt codes handled in the typer
  const entry = layout.keys[e.code];
  if (!entry) return null;
  return entry[e.shiftKey ? 1 : 0] ?? null;         // CapsLock is ignored
}

export function append(text, out, rules = COMPOSE) {
  if (text && out) {
    for (const sequence of Object.keys(rules).sort((a, b) => b.length - a.length)) {
      if (!sequence.endsWith(out)) continue;
      const prefix = sequence.slice(0, -out.length);
      if (prefix && text.endsWith(prefix)) {
        return (text.slice(0, -prefix.length) + rules[sequence]).normalize('NFC');
      }
    }
  }
  return (text + out).normalize('NFC');
}

// Stateful typer: wire keyDown/keyUp to your typing box.
// Alt + numpad decimal code point (e.g. Alt+2334 = ञ) works for U+0900-U+097F.
export function createTyper(layout, { compose = true, allowBackspace = true, rephAfter = false } = {}) {
  let text = '';
  let strokes = 0;
  let altBuf = '';
  const history = [];

  const push = out => {
    history.push(text);
    if (rephAfter && out === 'र्') {
      // Kruti Dev habit: letter first, then Shift+Z.
      if (text.endsWith('इ')) {
        text = text.slice(0, -1) + 'ई';           // इ + Z = ई (Kruti Dev "bZ")
      } else {
        // otherwise Z is a reph: move it before the last syllable
        const m = text.match(LAST_SYLLABLE);
        text = m ? text.slice(0, m.index) + out + m[0] : text + out;
      }
    } else {
      text = compose ? append(text, out) : text + out;
    }
    text = text.normalize('NFC');
    strokes++;
  };

  return {
    get text() { return text; },
    get strokes() { return strokes; },
    reset() { text = ''; strokes = 0; altBuf = ''; history.length = 0; },

    // returns true when the event was handled (call preventDefault on true)
    keyDown(e) {
      if (e.key === 'Backspace') {
        if (allowBackspace && history.length) text = history.pop();
        return true;
      }
      if (e.altKey && /^Numpad\d$/.test(e.code)) {
        altBuf += e.code.slice(-1);
        return true;
      }
      const out = mapKey(layout, e);
      if (out == null) return false;
      push(out);
      return true;
    },

    keyUp(e) {
      if (e.code.startsWith('Alt') && altBuf) {
        const n = Number(altBuf);
        altBuf = '';
        if (n >= 2304 && n <= 2431) push(String.fromCodePoint(n));
        return true;
      }
      return false;
    },
  };
}
