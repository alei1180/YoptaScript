/*! YoptaScript v2.0.0 (https://yopta.space) | Copyright (c) 2016-2021 Yopta.Space project and Contributors | Licensed under the MIT license */(()=>{"use strict";var e={776:function(e,t,o){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.compile=void 0;var r=n(o(326));function a(e,t){void 0===t&&(t="ys");var o="ys"===t?1:0;return r.default.sort((function(e,t){var n=e[o].length;return t[o].length-n})).forEach((function(t){return n=e,r=t[o],a=t[+!o],i=new RegExp(function(e){return e=e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),/^\w+$/.test(e)&&(e="\\b"+e+"\\b"),e}(r),"g"),e=n.replace(i,a);var n,r,a,i})),e}function i(e,t){void 0===t&&(t="ys");var o=/((?:\/\*(?:[^*]|(?:\*+[^*\/]))*\*+\/)|(?:\/\/.*))/g,n="ys_"+(new Date).getTime()+"_",r={},i=(e=e.replace(/\"(?:\\.|[^\"\\])*\"|\'(?:\\.|[^\'\\])*\'/g,(function(e,t){var o=n+t;return r[o]=e,o}))).match(o)||[];for(var l in e=(e=a(e,t)).replace(o,(function(){return i.shift()||""})),r)e=e.replace(l,r[l]);return e}t.compile=i,(window||o.g).yopta=i},607:function(e,t,o){var n=this&&this.__awaiter||function(e,t,o,n){return new(o||(o=Promise))((function(r,a){function i(e){try{s(n.next(e))}catch(e){a(e)}}function l(e){try{s(n.throw(e))}catch(e){a(e)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(i,l)}s((n=n.apply(e,t||[])).next())}))},r=this&&this.__generator||function(e,t){var o,n,r,a,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return a={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function l(a){return function(l){return function(a){if(o)throw new TypeError("Generator is already executing.");for(;i;)try{if(o=1,n&&(r=2&a[0]?n.return:a[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,a[1])).done)return r;switch(n=0,r&&(a=[2&a[0],r.value]),a[0]){case 0:case 1:r=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,n=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(r=i.trys,(r=r.length>0&&r[r.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!r||a[1]>r[0]&&a[1]<r[3])){i.label=a[1];break}if(6===a[0]&&i.label<r[1]){i.label=r[1],r=a;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(a);break}r[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],n=0}finally{o=r=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,l])}}};Object.defineProperty(t,"__esModule",{value:!0});var a=o(776);function i(e){return n(this,void 0,void 0,(function(){var t,o;return r(this,(function(n){switch(n.label){case 0:return null===e.parentNode?[3,3]:(o=e.textContent)?[3,2]:[4,l(e)];case 1:o=n.sent(),n.label=2;case 2:t=o,e.parentNode.removeChild(e),r=a.compile(t,"ys"),(i=document.createElement("script")).innerHTML=r,document.body.appendChild(i),n.label=3;case 3:return[2]}var r,i}))}))}function l(e){return n(this,void 0,void 0,(function(){var t,o;return r(this,(function(n){switch(n.label){case 0:return t=e.getAttribute("src"),o="",null!==t&&t.length?[4,fetch(t,{method:"GET"})]:[3,3];case 1:return[4,n.sent().text()];case 2:o=n.sent(),n.label=3;case 3:return[2,o]}}))}))}document.querySelectorAll('[language="YoptaScript"]').forEach(i),document.querySelectorAll('[type="text/x-yoptascript"]').forEach(i)},326:e=>{e.exports=JSON.parse('[["includes","лучшеНетВлагалищаЧемОчкоТоварища"],["createRadialGradient","намутитьПоКругуМазнюПодливой"],["createLinearGradient","намутитьЧоткуюМазнюПодливой"],["resizeTo","распидораситьОтносительно"],["fromCodePoint","хуйняИзЭтоТуданахНутыпоэл"],["createTextNode","намутитьМалявуГовнодскую"],["enableStyleSheetsForSet","намутитьСтруйкуДляХабара"],["ondragenter","покаДёргалкаНарисовалась"],["ondragenter","покаДергалкаНарисовалась"],["imul","петухПетухаВидитИздалека"],["getElementsByClassName","вычислитьТерпилПоКлассу"],["vlinkColor","когдаОткинулсяПослеЗоны"],["onpointermove","покаХожуТырколйПоРайону"],["getElementsByName","вычислитьТерпилПоИмени"],["onpointerenter","покаСрелкаНарисовалась"],["oninstall","покаХуйСтоитКакКолонна"],["isPointInStroke","естьЛиКуполаНаНаколках"],["getElementsByTagName","вычислитьТерпилПоТегу"],["getElementById","вычислитьЛохаПоНомеру"],["querySelectorAll","хулиТутВсеВыёбываются"],["querySelectorAll","хулиТутВсеВыебываются"],["pointerLockElement","тырколкуНаАнусТерпилы"],["getComputedStyle","нассыМнеВалиоСтруйкой"],["imageSmoothingEnabled","включитьРазмытиеЕбала"],["scrollPathIntoView","колеситьПоДорогеНахуй"],["setLineDash","заебенитьПятнистыйХуй"],["onreadystatechange","опаГотовЙоптЧозанахуй"],["resolve","щащаНамутитьКактоНадо"],["createNodeIterator","намутитьГовнодыратор"],["lastElementChild","последнийПездюкШняги"],["onafterscriptexecute","послеВыполненияЙопты"],["scrollbars","колеситьПоПивларькам"],["resizeBy","распидораситьПоХуйне"],["sizeToContent","ухтыжёптыжбляПодгони"],["sizeToContent","ухтыжептыжбляПодгони"],["fontcolor","говномПоСтенеКрасиво"],["removeHitRegion","избавитьсяОтПроблемы"],["getResponseHeader","дайКепарикПолосатого"],["acosh","агопосинусКупчинский"],["atanh","агопангенсКупчинский"],["createDocumentFragment","намутитьКусокМалявы"],["onselectionchange","покаДваСтулаМахнуть"],["onfullscreenchange","покаЕбальникПоказал"],["ondblclick","какПырнуДваждыНахуй"],["ondragend","покаХарэОчкоДёргать"],["ondragend","покаХарэОчкоДергать"],["oninvalid","гыйбатьИнвалидНахуй"],["onmouseout","покаТырколкаСъебала"],["onmouseover","покаТырколкаПодошла"],["onpointercancel","покаСтрелаТруханула"],["onpopstate","покаИсторияМаляется"],["isDefaultNamespace","деткаТыПростоКосмос"],["codePointAt","хуйняНутыпоэлОткуда"],["isPointInPath","естьЛиКуполаНаГруди"],["XMLHttpRequestEventTarget","запросСоШнягойПоЩам"],["cosh","гопосиносКолпинский"],["tanh","гопангенсКолпинский"],["getOwnPropertyNames","вычислиПогонялаКрыс"],["setPrototypeOf","замутитьПроточелика"],["ondrop","опаМабилкаЁбнулась"],["ondrop","опаМабилкаЕбнулась"],["oninput","покаЭйтыэтоПишибля"],["ontouchmove","опаДвигайОтСюдаЛещ"],["scrollMaxX","колеситьПоГлавЭксу"],["scrollMaxY","колеситьПоГлавУгам"],["compareDocumentPosition","сравниСтатусМалявы"],["substring","спиздитьМеждуСтрок"],["trimRight","вырезатьОчкоСправа"],["fontsize","говномПоСтенеСочно"],["createImageData","намутитьМазнюЙопта"],["setTransform","перекоситьЕбальник"],["parseFloat","шнырятьПоПлавникам"],["dirxml","йбатьБуратиноНахуй"],["readystatechange","готовЙоптЧозанахуй"],["LOG10E","СЛОЖНЫЙ_ГОПОРИФМ10"],["SQRT1_2","сквиртНаПолшишечки"],["asinh","агопинусКупчинский"],["queryCommandEnabled","хулиЧикаДоступная"],["queryCommandSupported","хулиЧикаБезАйфона"],["firstElementChild","первыйПездюкШняги"],["childElementCount","моиШняжныеПездюки"],["onbeforescriptexecute","доВыполненияЙопты"],["ondragover","покаДёрнулПодошла"],["ondragover","покаДернулПодошла"],["onpointerover","покаСтрелаПодошла"],["onpointerout","покаСтрелаСъебала"],["onpointerleave","покаСтрелаСлиняла"],["ontouchstart","опаЩаЛещаПоЩамДам"],["dispatchEvent","послатьНахуйШнягу"],["scrollByPages","колеситьНаМалявах"],["updateCommands","новыйАйфонДляЧики"],["onbeforeunload","покаСемкиКрутятся"],["onhashchange","покаШнягаИзменяет"],["onpagehide","покаКсиваНаМалине"],["hasChildNodes","батяИмеетПездюков"],["insertBefore","вставитьПездюкаДо"],["substr","спиздитьМеждуБукв"],["trimLeft","вырезатьОчкоСлева"],["quadraticCurveTo","криваяЗавелаНахуй"],["resetTransform","поправитьЕбальник"],["parseInt","шнырятьПоКарманам"],["timeout","длительностьСрока"],["loadstart","началТаскатьСемки"],["progress","сколькоСемокДонёс"],["progress","сколькоСемокДонес"],["LOG2E","СЛОЖНЫЙ_ГОПОРИФМ2"],["clz32","поводырь32петухов"],["log1p","чистыйГопорифмПо1"],["sinh","гопинусКолпинский"],["getOwnPropertyDescriptors","вычислиСходкуКрыс"],["getOwnPropertySymbols","выучиАлфавитМразь"],["createTreeWalker","намутитьБуратино"],["getAnimations","вычислитьДвижуху"],["releaseCapture","зафотатьХуякХуяк"],["querySelector","хулиВыёбываешься"],["querySelector","хулиВыебываешься"],["queryCommandState","хулиЧикаОтдыхает"],["contentType","ухтыжёптыжТипчик"],["contentType","ухтыжептыжТипчик"],["alinkColor","петухЗоныКрасиво"],["lastModified","когдаПетухомСтал"],["ondragexit","анусСебеДёрниПёс"],["ondragexit","анусСебеДерниПес"],["ondragleave","покаДергунСлинял"],["onmouseleave","съебалсяИзРайона"],["onpointerdown","покаТыркнулДауна"],["onprogress","покаМатаетсяСрок"],["ontimeupdate","опаНуЭтоКогдаЭто"],["addEventListener","добавитьВертухай"],["setResizable","датьПопидорасить"],["onunload","опаСемкиКрутятся"],["baseURIObject","мразотыНаХатеКрч"],["ownerDocument","главныйАвторитет"],["textContent","ухтыжёптыжМалява"],["textContent","ухтыжептыжМалява"],["contains","яТвойОтецЕбуОвец"],["lastIndexOf","последняяОтсидка"],["toLocaleLowerCase","поРайонуНеКапсом"],["shadowBlur","наняРазмытьЕбало"],["isSafeInteger","этоОхуеннаяХуйня"],["toLocaleString","кПацанамНаРайоне"],["groupEnd","съебатьсяИзБанды"],["reverse","шухильмеМухильме"],["resolveAfter2Seconds","паруСекНеГомосек"],["defineProperties","ващеЧоткиеЧелики"],["getOwnPropertyDescriptor","вычислиЕблоКрысы"],["isSealed","теЧоЕбалоРазбить"],["elementFromPoint","терпилаИзПараши"],["elementsFromPoint","терпилыИзПараши"],["getSelection","сестьНаДваСтула"],["onabort","когдаУронилМыло"],["onkeypress","гыйбатьВмялЛеща"],["onpointerup","покаТыркнулАута"],["ontouchcancel","покаЛещТруханул"],["returnValue","ответитьЗаВалио"],["scrollByLines","колеситьНаЛинии"],["scrollTo","колеситьНахуйНа"],["onpageshow","опаКсивуПоказал"],["lastChild","последнийПездюк"],["nextSibling","следующийПездюк"],["nodeName","погонялоПездюка"],["parentElement","братишкаЭлемент"],["appendChild","заделатьПездюка"],["fillStyle","кончитьСтруйкой"],["miterLimit","скрестимСтруйки"],["addHitRegion","создатьПроблемы"],["createPattern","намутитьТипчика"],["getImageData","чоТутНамалёвано"],["getImageData","чоТутНамалевано"],["profileEnd","вЛичкуПрописали"],["constructor","стрельнутьБычки"],["onwheel","какНаХуюВертел"],["ondragstart","покаДёрнулКмон"],["ondragstart","покаДернулКмон"],["onkeydown","гыйбатьЛещДаун"],["onmousedown","всунулНаРайоне"],["onmousewheel","вертелНаРайоне"],["onseeking","когдаОбоссался"],["onstalled","опаНефартануло"],["screenX","всёЕбалоПоЭксу"],["screenX","всеЕбалоПоЭксу"],["screenY","всёЕбалоПоУгам"],["screenY","всеЕбалоПоУгам"],["scrollX","колеситьПоЭксу"],["scrollY","колеситьПоУгам"],["ondevicelight","покаХуйДлинный"],["onpaint","опаНарисовался"],["nodeType","типичныйПездюк"],["padStart","начальныйПадик"],["toLocaleUpperCase","поРайонуКапсом"],["shadowOffsetX","наняХатаПоЭксу"],["shadowOffsetY","наняХатаПоУгам"],["textAlign","выровнитьБазар"],["textBaseline","поставитьБазар"],["fillRect","обкончатьДоску"],["fillText","обкончатьБуквы"],["MAX_VALUE","ОХУЕННОЕ_ВАЛИО"],["toExponential","наХуекспоненту"],["trace","складЧмошников"],["readyState","готовностьЙопт"],["entries","вычислитьЛохов"],["expm1","топГопспонента"],["fround","мелочьТожеГони"],["ignoreCase","игнорщикЕбаный"],["sticky","петухОпущенный"],["lastIndex","доКонцаОтсидки"],["test","ответыБудутЭээ"],["getPrototypeOf","чоЗаПроточелик"],["captureEvents","зафотатьШняги"],["createEvent","намутитьШнягу"],["createRange","намутитьОпапа"],["createElement","намутитьЛошка"],["createExpression","намутитьБазар"],["execCommand","идиРаботайБля"],["hasFocus","имеетЧёткость"],["hasFocus","имеетЧеткость"],["hasFocus","имеетЧоткость"],["queryCommandIndeterm","хулиЧикаОйВсё"],["queryCommandIndeterm","хулиЧикаОйВсе"],["queryCommandValue","хулиЧикаВалио"],["inputEncoding","эйтыэтоПиздиш"],["scrollingElement","намазиТерпила"],["activeElement","активнаяШняга"],["defaultView","моргалаВыколю"],["ondrag","опаОчкоДёрнул"],["ondrag","опаОчкоДернул"],["onkeyup","гыйбатьЛещАут"],["onloadstart","покаНесуСемки"],["onmouseup","вынулНаРайоне"],["onsuspend","опаПодфартило"],["ontouchend","покаЛещКончил"],["onwaiting","покаМотаюСрок"],["frameElement","кадрОпущенный"],["innerHeight","внутриДлинный"],["outerHeight","вокругДлинные"],["sessionStorage","хабрИзОтсидки"],["postMessage","намутитьКсиву"],["prompt","поясниЗаБазар"],["removeEventListener","урытьВертухая"],["getRootNode","дайБатеГовнод"],["isEqualNode","эквалиоГовнод"],["removeChild","уебатьПездюка"],["localeCompare","сравнитьГовор"],["padEnd","залупныйПадик"],["repeat","непоэлПовтори"],["slice","поделитьСемки"],["startsWith","начатьЗалупку"],["font","говномПоСтене"],["globalAlpha","главныйАльфач"],["clearHitRegions","убитьПроблему"],["measureText","вместитьБазар"],["restore","выздоравливай"],["MAX_SAFE_INTEGER","ЛУЧШИЙ_ГАНДОН"],["MIN_SAFE_INTEGER","ХУЁВЫЙ_ГАНДОН"],["MIN_SAFE_INTEGER","ХУЕВЫЙ_ГАНДОН"],["groupCollapsed","свернутьБанду"],["EventTarget","очкоНаПрицеле"],["reduceRight","редискаПравая"],["SQRT2","двойнойСквирт"],["atan2","агопангенсПо2"],["hypot","вКореньЗыришь"],["RegExp","фильтруйБазар"],["global","глобалкаЙопта"],["assign","тащиВсёНаХату"],["assign","тащиВсеНаХату"],["defineProperty","вотЭтоЗаебись"],["isPrototypeOf","чейПроточелик"],["createAttribute","намутитьЯжку"],["createTouch","намутитьЛеща"],["documentElement","ксиваТерпилы"],["bgColor","охуеннаяЖопа"],["oncancel","покаТруханул"],["onchange","опаЧозанахуй"],["oncontextmenu","какПоЛбуЁбну"],["oncontextmenu","какПоЛбуЕбну"],["onmouseenter","вошёлНаРайон"],["onmouseenter","вошелНаРайон"],["onmousemove","хожуПоРайону"],["onseeked","когдаОбоссал"],["onsubmit","опаХуйВГовне"],["onvolumechange","покаТишеБудь"],["console","красноглазое"],["dialogArguments","тыэтаТавоэта"],["innerWidth","внутриЖирный"],["outerWidth","вокругЖирные"],["pageXOffset","статьяПоЭксу"],["pageYOffset","статьяПоУгам"],["blur","размытьЕбало"],["clearInterval","отсидетьСизо"],["clearTimeout","отсидетьСрок"],["moveTo","нахуйЭтоТуда"],["setInterval","посетитьСизо"],["setTimeout","получитьСрок"],["onload","опаСемкиНесу"],["childNodes","пездюкГовнод"],["firstChild","первыйПездюк"],["nodeValue","валиоПездюка"],["previousSibling","старыйПездюк"],["replaceChild","сделатьАборт"],["replace","пивасПодмени"],["trim","вырезатьОчко"],["currentTransform","этотЕбальник"],["lineCap","выбратьКонец"],["lineDashOffset","пятнистыйХуй"],["lineJoin","формаШишкана"],["strokeStyle","стильНаколок"],["putImageData","намалюйЧоТут"],["rotate","вертетьНаХую"],["strokeText","текстНаколки"],["translate","дисюдаПиксел"],["MIN_VALUE","ХУЁВОЕ_ВАЛИО"],["MIN_VALUE","ХУЕВОЕ_ВАЛИО"],["POSITIVE_INFINITY","ОХУЕТЬ_ДОХУЯ"],["assert","найтиСтукача"],["copyWithin","вынестиГовно"],["forEach","пероПодРебро"],["splice","въебатьГовна"],["log10","гопорифмПо10"],["input","тыЭтоПишибля"],["flags","флагМнеВанус"],["exec","работайМразь"],["hasOwnProperty","соСвоейТемой"],["else","иливжопураз"],["if","вилкойвглаз"],["characterSet","слышТыЧоЁба"],["characterSet","слышТыЧоЕба"],["documentURI","ксиваНаХате"],["domConfig","чёткоДерзко"],["domConfig","четкоДерзко"],["domConfig","чоткоДерзко"],["visibilityState","мутныйСюжет"],["designMode","хуйРисуйМод"],["linkColor","зонаКрасиво"],["referrer","корешСтарый"],["onscroll","покаКолесим"],["onselect","опаДваСтула"],["location","белыйЛебедь"],["sidebar","стенкаЙбать"],["cancelIdleCallback","харэПиздеть"],["maximize","распидорась"],["moveBy","щаТяПодвину"],["Promise","СловоПацана"],["onoffline","покаОффнусь"],["charCodeAt","обаЁбаХуйня"],["charCodeAt","обаЕбаХуйня"],["split","поделитьЯгу"],["italics","понаехавший"],["shadowColor","наняКрасиво"],["getContext","снятьСкальп"],["NEGATIVE_INFINITY","НИХУЯ_ДОХУЯ"],["isFinite","оноКонченое"],["count","которыйСрок"],["timeStamp","началоСрока"],["XMLHttpRequest","запросПоЩам"],["shift","первыйБачок"],["some","нарываешься"],["E","ГОПСПАНЕНТА"],["exp","гопспанента"],["log2","гопорифмПо2"],["await","сидетьНахуй"],["all","пацанСделал"],["race","пацанСказал"],["isExtensible","жратьБудешь"],["seal","сдохниНахуй"],["exports","предъявляет"],["case","аеслинайду"],["let","участковый"],["Abstract","Говнойбать"],["abstract","говнойбать"],["===","чёткоровно"],["===","четкоровно"],["===","чоткоровно"],["importNode","влабазУзел"],["registerElement","зашитьДело"],["domain","домойБлядь"],["oncut","какВысунул"],["onpaste","какВставил"],["onblur","опаНичотка"],["onerror","наПапандос"],["onreset","покаПравим"],["fullScreen","воВсёЕбало"],["fullScreen","воВсеЕбало"],["opener","открывашка"],["performance","сестьНахуй"],["top","КрышаЙбать"],["getAttention","посвистеть"],["matchMedia","феняНаШару"],["openDialog","побазарить"],["scrollBy","колеситьНа"],["ononline","опаТутачки"],["cloneNode","клонГовнод"],["prototype","проточелик"],["fromCharCode","хуйняИзЁба"],["fromCharCode","хуйняИзЕба"],["concat","заебеньВсе"],["toString","поПацански"],["big","большойЁпт"],["big","большойЕпт"],["lineWidth","толщинаХуя"],["bezierCurveTo","кривоНахуй"],["closePath","тупикНахуй"],["getLineDash","сококПятен"],["lineTo","прямоНахуй"],["transform","перекосить"],["timeEnd","конецСрока"],["warn","тыЭтоНуЭто"],["withCredentials","зашкварить"],["abort","уронилМыло"],["load","нестиСемки"],["loadend","семкиДонёс"],["loadend","семкиДонес"],["from","спиздитьИз"],["isArray","этоПомойка"],["findIndex","найдиБомжа"],["map","засратьВсё"],["map","засратьВсе"],["unshift","верниБачок"],["LN10","ГОПОРИФМ10"],["acos","агопосинус"],["atan","агопангенс"],["cbrt","кубоСквирт"],["trunc","верниЧирик"],["multiline","стулБезПик"],["unicode","хуйняНахуй"],["reject","пацанЗабыл"],["watch","смотрюСюда"],["in","чоунастут"],["default","наотыбись"],["new","захуярить"],["yield*","поебалуна"],["try","побратски"],["try","пабратски"],["typeof","чезажижан"],["static","попонятия"],["==","однахуйня"],["===","конкретно"],["writeln","малявагоп"],["readyState","газуемБля"],["oncopy","какВсунул"],["onpause","покаСтопэ"],["onplaying","покаЖивой"],["crypto","пиздишбля"],["devicePixelRatio","типАйфона"],["length","писькомер"],["navigator","главпетух"],["minimize","спидорась"],["baseURI","наХатеТип"],["endsWith","отЗалупки"],["search","семкиЕсть"],["toUpperCase","капсомБля"],["bold","жирныйЁпт"],["bold","жирныйЕпт"],["strike","въебиОчко"],["clearRect","урытьШкаф"],["fill","обкончать"],["save","схоронить"],["EPSILON","ХУЕПСИЛОН"],["toPrecision","кЧёткости"],["toPrecision","кЧеткости"],["toPrecision","кЧоткости"],["upload","заебенить"],["send","всёПиздуй"],["send","всеПиздуй"],["every","пошерстим"],["join","вписаться"],["LN2","ГОПОРИФМ2"],["abs","абсолютли"],["ceil","чирикГони"],["cos","гопосинос"],["floor","бабкиГони"],["round","подрезать"],["tan","гопангенс"],["AsyncFunction","АссоЙопта"],["propertyIsEnumerable","лютаяТема"],["catch","аченетак"],["catch","аченитак"],["catch","ачёнетак"],["this","тырыпыры"],["try","пабрацки"],["while","потрещим"],["import","спиздить"],["protected","подкрыша"],["null","порожняк"],["false","нетрулио"],["++","плюсуюНа"],["--","слилсяНа"],["evaluate","заценить"],["doctype","типКсивы"],["anchors","якоряЁпт"],["anchors","якоряЕпт"],["dir","буратино"],["location","райончик"],["onfocus","опаЧотка"],["onclick","какПырну"],["onclose","ебалоОфф"],["onplay","покаЖиви"],["onsort","опаСидор"],["closed","завалено"],["name","погоняло"],["screen","всёЕбало"],["screen","всеЕбало"],["self","пельмень"],["find","сигиЕсть"],["print","наПечать"],["scroll","колесить"],["onstorage","опаХабар"],["parentNode","братишка"],["normalize","нормандэ"],["indexOf","поТюряге"],["toLowerCase","неКапсом"],["anchor","якорьЁпт"],["anchor","якорьЕпт"],["filter","фильтруй"],["arcTo","прогибНа"],["clip","запретка"],["moveTo","щемитьНа"],["isInteger","этоХуйня"],["isNaN","этоНихуя"],["error","папандос"],["of","сашаГрей"],["Math","Очканавт"],["Math","Очконавт"],["asin","агопинус"],["create","намутить"],["freeze","датьЛеща"],["export","предъявa"],["debugger","логопед"],["finally","тюряжка"],["function*","пиздюли"],["new","гыйбать"],["return","отвечаю"],["yield","поебалу"],["try","хапнуть"],["Const","ЯсенХуй"],["const","ясенХуй"],["Double","Двойные"],["double","двойные"],["Float","Плавник"],["float","плавник"],["implements","силикон"],["Long","Колонна"],["long","колонна"],["package","клеёнка"],["package","клеенка"],["public","ебанное"],["throws","плюнуть"],["false","пиздишь"],["false","нечётко"],["false","нечетко"],["false","нечотко"],["==","эквалио"],["==","блясука"],["===","блябуду"],["=","внатуре"],["charset","слышЁба"],["charset","слышЕба"],["timeline","всяЖиза"],["children","пездюки"],["embeds","мразоты"],["head","залупка"],["height","длинный"],["plugins","выебоны"],["scripts","гыебаты"],["onshow","опаТуса"],["dump","мусорка"],["valueOf","валиоОф"],["small","малорик"],["scale","чётчеНа"],["scale","четчеНа"],["scale","чотчеНа"],["stroke","наколка"],["Array","Помойка"],["keys","отмычки"],["reduce","редиска"],["values","валиоси"],["sin","гопинус"],["source","обоснуй"],["isFrozen","далЛеща"],["unwatch","съебись"],["continue","двигай"],["delete","ёбнуть"],["delete","ебнуть"],["default","пахану"],["default","апохуй"],["switch","естьчо"],["with","хзйопт"],["goto","пиздуй"],["synchronized","вписон"],["volatile","вписос"],["null","нуллио"],["true","трулио"],["<","хуёвей"],["<","хуевей"],[";"," нахуй"],["close","завали"],["open","отрыть"],["write","малява"],["hidden","кроить"],["forms","еблища"],["width","жирный"],["controllers","мусора"],["parent","родаки"],["confirm","канает"],["focus","хуёкус"],["focus","хуекус"],["stop","стопээ"],["raw","полоса"],["charAt","обаЁба"],["charAt","обаЕба"],["match","футбик"],["direction","лесТам"],["arc","прогиб"],["table","таблом"],["PI","ПИЗДЕЦ"],["min","хуйчик"],["pow","гопень"],["sign","сиськи"],["sqrt","сквирт"],["then","атоэто"],["module","братва"],["function","йопта"],["instanceof","шкура"],["Boolean","Пацан"],["boolean","пацан"],["Byte","Семка"],["byte","семка"],["class","клёво"],["class","клево"],["final","бачок"],["Int","Хуйня"],["int","хуйня"],["interface","хуёво"],["interface","хуево"],["Short","Пипин"],["short","пипин"],["NaN","нихуя"],["undefined","неибу"],["true","чётко"],["true","четко"],["true","чотко"],["==","ровно"],[">=","поцик"],["||","иличо"],[">","пизже"],["!","чобля"],["document","ксива"],["clear","урыть"],["body","висяк"],["cookie","семки"],["images","мазни"],["value","валио"],["window","ебало"],["frames","кадры"],["alert","шухер"],["rect","доска"],["toFixed","наПМС"],["group","банда"],["profile","личка"],["pop","попка"],["push","пупок"],["sort","сидор"],["Math","Гопец"],["Math","Ботан"],["Math","Батан"],["max","хуйло"],["Object","Петух"],["global","общак"],["break","харэ"],["void","куку"],["extends","батя"],["native","чорт"],["eval","ебал"],["}","есть"],["==","типа"],["=","сука"],[";"," нах"],[";"," бля"],["links","зоны"],["title","вася"],["URL","хата"],["link","зона"],["ellipse","очко"],["info","инфо"],["time","срок"],["random","шара"],["async","ассо"],["Object","Кент"],["case","лещ"],["catch","гоп"],["do","крч"],["throw","пнх"],["var","гыы"],["Char","Эээ"],["char","эээ"],["Enum","Еээ"],["enum","еээ"],["private","мой"],["super","яга"],["transient","ахз"],["<=","поц"],["&&","ичо"],["history","фон"],["fixed","ПМС"],["log","чмо"],["for","го"],["{","жЫ"]]')}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var a=t[n]={exports:{}};return e[n].call(a.exports,a,a.exports,o),a.exports}o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}();o(607)})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly95b3B0YS8uL3NyYy9jb3JlLnRzIiwid2VicGFjazovL3lvcHRhLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL3lvcHRhL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3lvcHRhL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8veW9wdGEvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbIml0ZXJhdGVUZXh0IiwidGV4dCIsInRvIiwibGFuZ0NvbCIsInNvcnQiLCJhIiwiYiIsImFsIiwibGVuZ3RoIiwiZm9yRWFjaCIsInBhaXIiLCJzdHIiLCJzZWFyY2giLCJyZXBsYWNlbWVudCIsInJlIiwiUmVnRXhwIiwicmVwbGFjZSIsInRlc3QiLCJlc2NhcGVSZWdFeHAiLCJjb21waWxlIiwibGFuZyIsImNvbW1lbnRSZWdFeHAiLCJ0bXBUb2tlbiIsIkRhdGUiLCJnZXRUaW1lIiwiclN0cmluZ0xpdGVyYWxzIiwiY29tbWVudHNBcnJheSIsInZhbCIsInBvcyIsIm5lZWRLZXkiLCJtYXRjaCIsImtleSIsInNoaWZ0Iiwid2luZG93IiwiZyIsInlvcHRhIiwieW9wdGFUb0pzIiwic2NyaXB0Tm9kZSIsInBhcmVudE5vZGUiLCJ0ZXh0Q29udGVudCIsImdldFR4dEZyb21TcmMiLCJ5b3B0YVRleHQiLCJyZW1vdmVDaGlsZCIsImNvbXBpbGVkIiwic2NyaXB0IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiYm9keSIsImFwcGVuZENoaWxkIiwibm9kZSIsInNyYyIsImdldEF0dHJpYnV0ZSIsInJlc3AiLCJmZXRjaCIsIm1ldGhvZCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18iLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJjYWNoZWRNb2R1bGUiLCJ1bmRlZmluZWQiLCJleHBvcnRzIiwibW9kdWxlIiwiX193ZWJwYWNrX21vZHVsZXNfXyIs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eUIsRUFBb0IsTSIsImZpbGUiOiJ5b3B0YS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkaWN0aW9uYXJ5IGZyb20gJy4vZGljdGlvbmFyeS9zb3J0ZWRZb3B0YS5qc29uJztcblxuZnVuY3Rpb24gZXNjYXBlUmVnRXhwKHN0cjogc3RyaW5nKSB7XG4gICAgc3RyID0gc3RyLnJlcGxhY2UoL1stXFwvXFxcXF4kKis/LigpfFtcXF17fV0vZywgJ1xcXFwkJicpO1xuXG4gICAgaWYgKC9eXFx3KyQvLnRlc3Qoc3RyKSkge1xuICAgICAgICBzdHIgPSAnXFxcXGInICsgc3RyICsgJ1xcXFxiJztcbiAgICB9XG5cbiAgICByZXR1cm4gc3RyO1xufVxuXG5mdW5jdGlvbiB5b3B0UmVwbGFjZUFsbChzdHI6IHN0cmluZywgc2VhcmNoOiBzdHJpbmcsIHJlcGxhY2VtZW50OiBzdHJpbmcpIHtcbiAgICBjb25zdCByZSA9IG5ldyBSZWdFeHAoZXNjYXBlUmVnRXhwKHNlYXJjaCksICdnJyk7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKHJlLCByZXBsYWNlbWVudCk7XG59XG5cbi8qKlxuICogQHBhcmFtIHRleHQg0YLQtdC60YHRgiwg0L/QviDQutC+0YLQvtGA0L7QvNGDINGB0LvQtdC00YPQtdGCINC/0YDQvtC50YLQuNGB0YxcbiAqIEBwYXJhbSB0byDRj9C30YvQuiDRgtC10LrRgdGC0LAgKCd5cycgb3IgJ2pzJylcbiAqL1xuZnVuY3Rpb24gaXRlcmF0ZVRleHQodGV4dDogc3RyaW5nLCB0bzogJ2pzJyB8ICd5cycgPSAneXMnKSB7XG4gICAgY29uc3QgbGFuZ0NvbCA9IHRvID09PSAneXMnID8gMSA6IDA7XG4gICAgY29uc3QgZGljayA9IGRpY3Rpb25hcnk7XG4gICAgZGljay5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgIGNvbnN0IGFsID0gYVtsYW5nQ29sXS5sZW5ndGg7XG4gICAgICAgIGNvbnN0IGJsID0gYltsYW5nQ29sXS5sZW5ndGg7XG4gICAgICAgIHJldHVybiBibCAtIGFsO1xuICAgIH0pLmZvckVhY2goXG4gICAgICAgIChwYWlyKSA9PiAodGV4dCA9IHlvcHRSZXBsYWNlQWxsKHRleHQsIHBhaXJbbGFuZ0NvbF0sIHBhaXJbKyFsYW5nQ29sXSkpXG4gICAgKTtcblxuICAgIHJldHVybiB0ZXh0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tcGlsZSh0ZXh0OiBzdHJpbmcsIGxhbmc6ICdqcycgfCAneXMnID0gJ3lzJyk6IHN0cmluZyB7XG4gICAgLyogdGV4dCAtINGC0LXQutGB0YIg0LTQu9GPINGA0LXQv9C70LXQudGB0LBcbiAgICAgKiBsYW5nIC0g0Y/Qt9GL0Log0YLQtdC60YHRgtCwICgneXMnIG9yICdqcycpXG4gICAgICovXG4gICAgaW50ZXJmYWNlIExpdGVyYWxzIHtcbiAgICAgICAgW2tleTogc3RyaW5nXTogc3RyaW5nO1xuICAgIH1cbiAgICBjb25zdCBjb21tZW50UmVnRXhwID0gLygoPzpcXC9cXCooPzpbXipdfCg/OlxcKitbXipcXC9dKSkqXFwqK1xcLyl8KD86XFwvXFwvLiopKS9nO1xuICAgIGNvbnN0IHRtcFRva2VuID0gJ3lzXycgKyBuZXcgRGF0ZSgpLmdldFRpbWUoKSArICdfJztcbiAgICBjb25zdCByU3RyaW5nTGl0ZXJhbHM6IExpdGVyYWxzID0ge307XG4gICAgdGV4dCA9IHRleHQucmVwbGFjZShcbiAgICAgICAgL1xcXCIoPzpcXFxcLnxbXlxcXCJcXFxcXSkqXFxcInxcXCcoPzpcXFxcLnxbXlxcJ1xcXFxdKSpcXCcvZyxcbiAgICAgICAgZnVuY3Rpb24gKHZhbCwgcG9zKSB7XG4gICAgICAgICAgICBjb25zdCBuZWVkS2V5ID0gdG1wVG9rZW4gKyBwb3M7XG4gICAgICAgICAgICByU3RyaW5nTGl0ZXJhbHNbbmVlZEtleV0gPSB2YWw7XG4gICAgICAgICAgICByZXR1cm4gbmVlZEtleTtcbiAgICAgICAgfVxuICAgICk7XG4gICAgY29uc3QgY29tbWVudHNBcnJheSA9IHRleHQubWF0Y2goY29tbWVudFJlZ0V4cCkgfHwgW107XG4gICAgdGV4dCA9IGl0ZXJhdGVUZXh0KHRleHQsIGxhbmcpO1xuICAgIC8vIGNvbWViYWNrIGNvbW1lbnRzXG4gICAgdGV4dCA9IHRleHQucmVwbGFjZShjb21tZW50UmVnRXhwLCAoKSA9PiBjb21tZW50c0FycmF5LnNoaWZ0KCkgfHwgJycpO1xuICAgIC8vIGNvbWViYWNrIHN0cmluZ3NcbiAgICBmb3IgKGNvbnN0IGtleSBpbiByU3RyaW5nTGl0ZXJhbHMpIHtcbiAgICAgICAgdGV4dCA9IHRleHQucmVwbGFjZShrZXksIHJTdHJpbmdMaXRlcmFsc1trZXldKTtcbiAgICB9XG4gICAgcmV0dXJuIHRleHQ7XG59XG5cbi8vIFlvcHRhU2NyaXB0IHRvIGdsb2JhbHNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG5jb25zdCBfZ2xvYmFsID0gKHdpbmRvdyB8fCBnbG9iYWwpIGFzIGFueTtcbl9nbG9iYWwueW9wdGEgPSBjb21waWxlO1xuIiwiaW1wb3J0IHsgY29tcGlsZSB9IGZyb20gJy4vY29yZSc7XG5cbi8v0J/QvtC70YPRh9Cw0LXQvCDQudC+0L/RgtGDINC40Lcg0YHQutGA0LjQv9GC0LBcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tsYW5ndWFnZT1cIllvcHRhU2NyaXB0XCJdJykuZm9yRWFjaCh5b3B0YVRvSnMpO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW3R5cGU9XCJ0ZXh0L3gteW9wdGFzY3JpcHRcIl0nKS5mb3JFYWNoKHlvcHRhVG9Kcyk7XG5cbmFzeW5jIGZ1bmN0aW9uIHlvcHRhVG9KcyhzY3JpcHROb2RlOiBFbGVtZW50KSB7XG4gICAgaWYgKHNjcmlwdE5vZGUucGFyZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgICAvL9Cf0L7Qu9GD0YfQsNC10Lwg0LnQvtC/0YLRgyDQuNC3INGB0LrRgNC40L/RgtCwXG4gICAgICAgIGNvbnN0IHlvcHRhVGV4dDogc3RyaW5nID1cbiAgICAgICAgICAgIHNjcmlwdE5vZGUudGV4dENvbnRlbnQgfHwgKGF3YWl0IGdldFR4dEZyb21TcmMoc2NyaXB0Tm9kZSkpO1xuICAgICAgICAvL9GD0LTQsNC70Y/QtdC8INGB0YLQsNGA0YvQuSDRgdC60YDQuNC/0YJcbiAgICAgICAgc2NyaXB0Tm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHNjcmlwdE5vZGUpO1xuICAgICAgICAvL9GB0L7Qt9C00LDRkdC8INC+0LHRgNCw0LHQvtGC0LDQvdC90YvQuSDRgdC60YDQuNC/0YIg0YEg0LHQu9C10LrQtNC20LXQutC+0Lwg0Lgg0YjQu9GO0YXQsNC80LhcbiAgICAgICAgYWRkU2NyaXB0Tm9kZShjb21waWxlKHlvcHRhVGV4dCwgJ3lzJykpO1xuICAgIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0VHh0RnJvbVNyYyhub2RlOiBFbGVtZW50KSB7XG4gICAgLy/Qn9C+0YjQu9C4INC40YHQutCw0YLRjCDRgdC+0YDRhtGLXG4gICAgY29uc3Qgc3JjID0gbm9kZS5nZXRBdHRyaWJ1dGUoJ3NyYycpO1xuICAgIGxldCByZXNwID0gJyc7XG4gICAgaWYgKHNyYyAhPT0gbnVsbCAmJiBzcmMubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IGZlID0gYXdhaXQgZmV0Y2goc3JjLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICB9KTtcbiAgICAgICAgcmVzcCA9IGF3YWl0IGZlLnRleHQoKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3A7XG59XG5cbmZ1bmN0aW9uIGFkZFNjcmlwdE5vZGUoY29tcGlsZWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgIHNjcmlwdC5pbm5lckhUTUwgPSBjb21waWxlZDtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdCk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oNjA3KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=