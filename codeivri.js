/**
 * עברית.js - ספריית JavaScript בעברית
 * מאפשרת כתיבת קוד JavaScript בעברית
 * גרסה 1.0.0
 * רישיון MIT
 * codeivri.js By Yogev Avitan
 */

(function(window) {
    // מיפוי של מילות מפתח בעברית למקבילות באנגלית
    const מילוןפקודות = {
      // פונקציות ומשתנים
      'פונקציה': 'function',
      'החזר': 'return',
      'אם': 'if',
      'אחרת': 'else',
      'אחרתאם': 'else if',
      'כלעוד': 'while',
      'עבור': 'for',
      'עשה': 'do',
      'קבוע': 'const',
      'משתנה': 'let',
      'כאשר': 'switch',
      'מקרה': 'case',
      'שבור': 'break',
      'ברירתמחדל': 'default',
      'נסה': 'try',
      'תפוס': 'catch',
      'לבסוף': 'finally',
      'זרוק': 'throw',
      'חדש': 'new',
      'מחלקה': 'class',
      'ממשק': 'interface',
      'מורחב': 'extends',
      'ממש': 'implements',
      'ייצוא': 'export',
      'ייבוא': 'import',
      'מ': 'from',
      'זה': 'this',
      'סופר': 'super',
      'סטטי': 'static',
      'פרטי': 'private',
      'מוגן': 'protected',
      'ציבורי': 'public',
      'ביטול': 'void',
      'של': 'of',
      'צומת': 'yield',
      'ממשיך': 'continue',
      'ממתין': 'await',
      'אסינכרוני': 'async',
      'בצע': 'eval',
      
      // פונקציות מערכת נפוצות
      'הגדר': (name, value) => window[name] = value,
      'הדפס': console.log,
      'שגיאה': console.error,
      'אזהרה': console.warn,
      'נקהמסוף': console.clear,
      'מדודזמן': console.time,
      'סייםמדידתזמן': console.timeEnd,
      'התראה': alert,
      'אישור': confirm,
      'קלט': prompt,
      'פרסזמן': parseInt,
      'פרסצף': parseFloat,
      'ישנאן': isNaN,
      'סטמספר': Number,
      'סטמחרוזת': String,
      'סטבוליאני': Boolean,
      'פענחJSON': JSON.parse,
      'המרלJSON': JSON.stringify,
      'קבעפסקזמן': setTimeout,
      'קבעמרווחזמן': setInterval,
      'בטלפסקזמן': clearTimeout,
      'בטלמרווחזמן': clearInterval,
      
      // אובייקטים ומערכים
      'מערך': Array,
      'אובייקט': Object,
      'מחרוזת': String,
      'מספר': Number,
      'בוליאני': Boolean,
      'תאריך': Date,
      'מפה': Map,
      'סט': Set,
      'פרומיס': Promise,
      'רגקס': RegExp,
      'שגיאה': Error,
      'סימבול': Symbol,
      'מתמטיקה': Math,
      
      // מתודות מערך נפוצות
      'מפה': (arr, func) => arr.map(func),
      'סנן': (arr, func) => arr.filter(func),
      'לכלאחד': (arr, func) => arr.forEach(func),
      'הפחת': (arr, func, initial) => arr.reduce(func, initial),
      'מצא': (arr, func) => arr.find(func),
      'מצאאינדקס': (arr, func) => arr.findIndex(func),
      'בדוקהאםכולם': (arr, func) => arr.every(func),
      'בדוקהאםקיים': (arr, func) => arr.some(func),
      'חבר': (arr, separator) => arr.join(separator || ''),
      'הוסף': (arr, ...items) => { arr.push(...items); return arr; },
      'הסר': (arr) => arr.pop(),
      'הוסףבהתחלה': (arr, ...items) => { arr.unshift(...items); return arr; },
      'הסרמההתחלה': (arr) => arr.shift(),
      'חתוך': (arr, start, end) => arr.slice(start, end),
      'הכנס': (arr, start, deleteCount, ...items) => arr.splice(start, deleteCount, ...items),
      'מייןמערך': (arr, compareFunc) => arr.sort(compareFunc),
      'הפוךמערך': (arr) => arr.reverse(),
      'כלול': (arr, item) => arr.includes(item),
      'אורך': (arr) => arr.length,
      
      // מתודות מחרוזת נפוצות
      'פצל': (str, separator) => str.split(separator || ''),
      'החלף': (str, search, replacement) => str.replace(search, replacement),
      'לאותיותקטנות': (str) => str.toLowerCase(),
      'לאותיותגדולות': (str) => str.toUpperCase(),
      'חתוךמחרוזת': (str, start, end) => str.substring(start, end),
      'כולל': (str, search) => str.includes(search),
      'מתחילב': (str, search) => str.startsWith(search),
      'מסתייםב': (str, search) => str.endsWith(search),
      'קצץ': (str) => str.trim(),
      'קצץמימין': (str) => str.trimEnd(),
      'קצץמשמאל': (str) => str.trimStart(),
      'חזור': (str, count) => str.repeat(count),
      'רווח': (str, maxLength) => str.padEnd(maxLength),
      'רווחבהתחלה': (str, maxLength) => str.padStart(maxLength),
      
      // DOM אובייקטים ופונקציות
      'מסמך': document,
      'חלון': window,
      'גוף': document.body,
      'ראש': document.head,
      'מיקום': location,
      'היסטוריה': history,
      
      // DOM מניפולציה
      'קבלאלמנטלפיזיהוי': (id) => document.getElementById(id),
      'קבלאלמנטיםלפיתגית': (tag) => document.getElementsByTagName(tag),
      'קבלאלמנטיםלפימחלקה': (className) => document.getElementsByClassName(className),
      'קבלאלמנטלפיבורר': (selector) => document.querySelector(selector),
      'קבלאלמנטיםלפיבורר': (selector) => document.querySelectorAll(selector),
      'צוראלמנט': (tagName) => document.createElement(tagName),
      'צורטקסט': (text) => document.createTextNode(text),
      'הוסףילד': (parent, child) => parent.appendChild(child),
      'הסרילד': (parent, child) => parent.removeChild(child),
      'החלףילד': (parent, newChild, oldChild) => parent.replaceChild(newChild, oldChild),
      'הכנסלפני': (parent, newNode, referenceNode) => parent.insertBefore(newNode, referenceNode),
      'קבלתוכן': (element) => element.innerHTML,
      'הגדרתוכן': (element, html) => { element.innerHTML = html; },
      'קבלערךטקסט': (element) => element.textContent,
      'הגדרערךטקסט': (element, text) => { element.textContent = text; },
      'קבלערך': (element) => element.value,
      'הגדרערך': (element, value) => { element.value = value; },
      'הוסףמחלקה': (element, className) => element.classList.add(className),
      'הסרמחלקה': (element, className) => element.classList.remove(className),
      'החלףמחלקה': (element, className) => element.classList.toggle(className),
      'הכלמחלקה': (element, className) => element.classList.contains(className),
      'הוסףמאזין': (element, event, handler) => element.addEventListener(event, handler),
      'הסרמאזין': (element, event, handler) => element.removeEventListener(event, handler),
      'שלחטופס': (form) => form.submit(),
      'אפסטופס': (form) => form.reset(),
      'מנעברירתמחדל': (event) => event.preventDefault(),
      'עצורהתפשטות': (event) => event.stopPropagation(),
      
      // בקשות HTTP
      'שלחבקשה': fetch,
      'המרלטקסט': (response) => response.text(),
      'המרלJSON': (response) => response.json(),
      
      // ערכים קבועים
      'אמת': true,
      'שקר': false,
      'ריק': null,
      'לאמוגדר': undefined,
      'אינסוף': Infinity,
      'לאמספר': NaN,
      
      // מתמטיקה
      'מתמטיקה': Math,
      'עיגול': Math.round,
      'תקרה': Math.ceil,
      'רצפה': Math.floor,
      'מקסימום': Math.max,
      'מינימום': Math.min,
      'אקראי': () => Math.random(),
      'סכום': Math.abs,
      'שורש': Math.sqrt,
      'חזקה': Math.pow,
      'סינוס': Math.sin,
      'קוסינוס': Math.cos,
      'טנגנס': Math.tan,
      'לוג': Math.log,
      'לוגבסיס10': Math.log10,
      'פאי': Math.PI,
      'אי': Math.E,
    };
  
    // הוספת כל הפונקציות והמשתנים לאובייקט גלובלי
    for (const [hebrewKey, englishValue] of Object.entries(מילוןפקודות)) {
      window[hebrewKey] = englishValue;
    }
  
    // הגדרת אובייקט ייעודי לעברית
    window.עברית = מילוןפקודות;
    
    console.log('ספריית עברית.js נטענה בהצלחה!');
  })(window);