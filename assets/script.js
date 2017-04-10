var s = '-';
var dictForText = {
	"Ё":"YO",	"Й":"I",	"Ц":"TS",	"У":"U",	"К":"K",	"Е":"E",
	"Н":"N",	"Г":"G",	"Ш":"SH",	"Щ":"SCH",	"З":"Z",	"Х":"H",
	"Ъ":"'",	"ё":"yo",	"й":"i",	"ц":"ts",	"у":"u",	"к":"k",
	"е":"e",	"н":"n",	"г":"g",	"ш":"sh",	"щ":"sch",	"з":"z",
	"х":"h",	"ъ":"'",	"Ф":"F",	"Ы":"I",	"В":"V",	"А":"a",
	"П":"P",	"Р":"R",	"О":"O",	"Л":"L",	"Д":"D",	"Ж":"ZH",
	"Э":"E",	"ф":"f",	"ы":"i",	"в":"v",	"а":"a",	"п":"p",
	"р":"r",	"о":"o",	"л":"l",	"д":"d",	"ж":"zh",	"э":"e",
	"Я":"Ya",	"Ч":"CH",	"С":"S",	"М":"M",	"И":"I",	"Т":"T",
	"Ь":"'",	"Б":"B",	"Ю":"YU",	"я":"ya",	"ч":"ch",	"с":"s",
	"м":"m",	"и":"i",	"т":"t",	"ь":"'",	"б":"b",	"ю":"yu"
};
var dictForUrl = {
	"Ё":"YO",	"Й":"I",	"Ц":"TS",	"У":"U",	"К":"K",	"Е":"E",
	"Н":"N",	"Г":"G",	"Ш":"SH",	"Щ":"SCH",	"З":"Z",	"Х":"H",
	"Ъ":"",		"ё":"yo",	"й":"i",	"ц":"ts",	"у":"u",	"к":"k",
	"е":"e",	"н":"n",	"г":"g",	"ш":"sh",	"щ":"sch",	"з":"z",
	"х":"h",	"ъ":"",		"Ф":"F",	"Ы":"I",	"В":"V",	"А":"a",
	"П":"P",	"Р":"R",	"О":"O",	"Л":"L",	"Д":"D",	"Ж":"ZH",
	"Э":"E",	"ф":"f",	"ы":"i",	"в":"v",	"а":"a",	"п":"p",
	"р":"r",	"о":"o",	"л":"l",	"д":"d",	"ж":"zh",	"э":"e",
	"Я":"Ya",	"Ч":"CH",	"С":"S",	"М":"M",	"И":"I",	"Т":"T",
	"Ь":"",		"Б":"B",	"Ю":"YU",	"я":"ya",	"ч":"ch",	"с":"s",
	"м":"m",	"и":"i",	"т":"t",	"ь":"",		"б":"b",	"ю":"yu",
	
	' ': s,		'_': s,		'`': s,		'~': s,		'!': s,		'@': s,
	'#': s,		'$': s,		'%': s,		'^': s,		'&': s,		'*': s,
	'(': s,		')': s,		'-': s,		'\=': s,	'+': s,		'[': s,
	']': s,		'\\': s,	'|': s,		'/': s,		'.': s,		',': s,
	'{': s,		'}': s,		'\'': s,	'"': s,		';': s,		':': s,
	'?': s, '<': s, '>': s, '№':s
};

/**
 * Производит транслитерациюб строки
 * @param String word
 * @param bool forUrl
 * @returns String
 */
function translitirate(word, forUrl)
{
    f = function (char) { 
        return dictForText[char] || char; 
    };
    
    if (typeof forUrl !== 'undefined') {
        f = function (char) { 
            return dictForUrl[char] || char;
        };
    }
    
    return word.split('').map(f).join("").replace(/s{2,}/, s);
}