document.querySelector('.menu-btn').addEventListener('click', function(){ document.querySelector('.main-menu').classList.toggle('show')});

//Fill in static data : all properties
var allProperties = [];
var cities = ['София', 'Пловдив', 'Бургас', 'Варна', 'Стара Загора'];
var propertyTypes = ['Едностаен апартамент', 'Двустаен апартамент', 'Тристаен апартамент', 'Гараж'];
var economicTransactions = ['Продажба', 'Наем'];
var totalProperties = [10, 8, 6, 5, 5];

for (i = 0; i < cities.length; i++) {
    for (j = 0; j < propertyTypes.length; j++) {
        for (k = 0; k < economicTransactions.length; k++) {
            //Different number of properties per city
            var numberOfProperties = totalProperties[i];
            for (n = 0; n < numberOfProperties; n++) {
                var property = {
                    city: cities[i],
                    type: propertyTypes[j],
                    price: economicTransactions[k] === 'Продажба' ? Math.floor(Math.random() * (200000 - 60000) + 60000) : Math.floor(Math.random() * (1000 - 400) + 400),
                    ecnTransType: economicTransactions[k],
                    description: 'Просторен, уютен, добра локация, отлично изложение. Удобен градски транспорт.'
                };
                allProperties.push(property);
            }
        }
    }
}

//Fill in static data: news articles
var headersArticles = [
    'Необходими са технически паспорти за сградите.',
    'Изкуството да сте спокойни вкъщи, или как да изградите модерен дом.',
    'Ръст на предлаганите апартаменти под наем.',
    'Ръстът на цените на жилищата в България е остава висок.',
    'Заилен интерес за покупка на жилище през годината.',
    'Кои са най-предпочитаните имоти в гр. София?',
    'Нови тенденции на пазара на имоти през 2021 г.',
    'Офис сградите са силно засегнати от кризата.',
    'Състоянието на имотния пазар през изминалата 2020 г.',
    'Отчетен е повишен ръст на имоти по курортите',
    'Ръстът при цените на жилищата се забавя.',
    'Хората са теглили повече кредити за покупка на имоти.',
    'Ръст на продажбите на апартаменти в страната през 2020 г.',
    'Програмата за саниране продължава.',
    'Хотелите са най-засегнати от кризата.',
    'Без спад на апартаментите във високия ценови сегмент.',
    'Увеличение в търсенето на къщи извън града.',
    'Българинът инвестира в имоти вместо финансови инструменти.',
    'Ръст в цените на имотите извън София.',
    'Пазарът на имоти през изминалата година бе предизвикателство.'
];

var sentencesArticles = [
    'С новите регулации настъпват промени, изискващи технически паспорти за сградите, показващи тяхната енергийна ефективност. За голяма част от старите сгради такъв липсва.',
    'С навлизането на новите технологии все повече хора модернизират домовете си и ги правят смарт-домове. Домът ви трябва да предоставя релаксираща среда.',
    'Кризата, както и възможностите за работа от вкъщи оставиха много от отдаваните апартаменти в големите градове без наематели. Хората се изнасят от градовете.',
    'Въпреки кризата много хора направиха решителни крачки към закупуване на имот през годината. Някои за лично ползване, някои с цел инвестиции.',
    'Ниските лихви по кредитите и увеличените спестявания на хората са част от причините за продължаващия силен интерес към имотния пазар в България.',
    'Повечето софиянци търсят тристайни жилища, когато купуват за себе си и двустайни, когато целта е отдаване под наем. Локацията също има значение.',
    'Работата от вкъщи пренарежда пазара на бизнес имоти. Множество компании разбират, че не е нужно да наемат много офис площи, след като служителите могат да работят дистанционно.',
    '2020 г. е поредната с ръст на цените на апартаментите и с регистриран ръст на продажбите. Забавяне и лек спад се отчита при офис площите.',
    'След дълги години на стагнация имотит в курортите възвръщат своя блясък. Част от причината са ниските цени, които се запазиха продължително и потенциала за растеж.',
    'Въпреки, че и през 2020 г. цените на имотите отбелязват ръст, този ръст е по-нисък в сравнение с 2019 г. Кризата все пак оказа влияние на пазара на имоти.',
    'Хората отчитат условията при банковите кредити като изгодни и търсят все-голямо финансиране за покупката на желания имот. Хората искат по-големи жилища и с по-добро качество.',
    'Статистиката показва ръст на сключените сделки за продажба на имоти в страната през изминалата година. В първото тримесечие е отбелязан лек спад, който е наваксан и заличен до края на 2020.',
    '2020 донесе ръст на сключените сделки за продажвба на жилищни имоти в страната и лек спад при бизнес имотите. ',
    'Пилотната програма за саниране се оказа успешна. Много хора са доволни от санирането на сградите и правителството реши да отдели повече средства за санирането на голям брой сгради през новия бюджетен период. ',
    '2020 г. донесе много трудности за хотелиерите - локдауна през пролетта, и сегашнията през зимата донесе много загуби на бизнеса. Хората не пътуват.',
    'Имотите във високия ценови сегмент запазват своята атрактивност. Изглежда, че тези имоти са устойчиви на кризи, тъй като локацията и качеството са важни за хората.',
    'Дистанционната работа даде въможност на много хора да избягат извн града за по-дълъг период от време. Това подтикна хората в големите градове да потърсят да закупят имот на село.',
    'Ниските лихви по депозитите накараха много хора да търсят инвестиционна алтернатива. Българинът традиционно инвестира в имоти, вместо на финансовит пазари',
    'През 2020 г. се забелязва известно догонване при цените на жилищата в страната спрямо тези в София. Все още разликата е голяма в полза на столицата.',
    'Пазарът на имоти през 2020 отбеляза, както спадове, така и нови върхове. Несигурността покрай кризата оказаха влияние, но също за мечтаното жилище се оказа се оказа реалност за мнозина.'
];

var articles = [];

for (i = 0; i < 20; i++) {
    var sent = sentencesArticles[i];
    var header = headersArticles[i];
    var tmp = createNewsArticles(header, sent);
    articles.push(tmp);
}

function loadArticlesOnPage() {
    console.log("loading articles");
    //Print elements on page
    root = document.getElementsByClassName("grid")[0];
    root.innerHTML = '';
    for (i = 0; i < articles.length; i++) {
        root.appendChild(articles[i]);
    }
}

function readStore() {
    if (sessionStorage.city != '') {
        //Filter and print elements on page
        tmpArr = filterProperties(allProperties, sessionStorage.city, sessionStorage.propertyType, sessionStorage.ecnTransType);
        tmpElements = document.getElementById('propertyListingContainer');
        tmpElements.innerHTML = '';
        for (i = 0; i < tmpArr.length; i++) {
            tmpElement = createPropertyListElement(tmpArr[i].city, tmpArr[i].type, tmpArr[i].price, tmpArr[i].ecnTransType, tmpArr[i].description, i + 1);
            tmpElements.appendChild(tmpElement);
            delete tmpElement;
        }
    }
    sessionStorage.city = '';
    sessionStorage.ecnTransType = '';
    sessionStorage.propertyType = '';
}

console.log(allProperties);

function store(cty, ecnT) {
    var city = cty;
    var ecnTransType = ecnT;
    sessionStorage.setItem('city', city);
    sessionStorage.setItem('ecnTransType', ecnTransType);
    sessionStorage.setItem('propertyType', 'Двустаен апартамент');
}

function filterProperties(srcArr, city, propType, ecnTransType) {
    arr = [];
    for (i = 0; i < srcArr.length; i++) {
        if (srcArr[i].city === city && srcArr[i].type === propType && srcArr[i].ecnTransType === ecnTransType) {
            arr.push(srcArr[i]);
        }
    }
    return arr;
}

function createNewsArticles(header, paragraph) {
    root = document.createElement('article');
    img = document.createElement('img');
    imgContainer = document.createElement('div');
    img.src = "./src/" + Math.floor(Math.random() * (26 - 1) + 1) + ".jpg";
    div = document.createElement('div');
    div.classList.add("text");
    h3 = document.createElement('h3');
    h3.innerHTML = header;
    p = document.createElement('p');
    p.innerHTML = paragraph;

    div.appendChild(h3);
    div.appendChild(p);
    imgContainer.appendChild(img);
    root.appendChild(imgContainer);
    root.appendChild(div);

    return root;
}

function createPropertyListElement(city, prpType, price, ecnTransType, description, iter) {
    var div1 = document.createElement('div');
    div1.classList.add("info");
    var img = document.createElement('img');
    img.src = "./src/" + Math.floor(Math.random() * (26 - 1) + 1) + ".jpg";
    var div2 = document.createElement('div');
    var h = document.createElement('h2');
    h.innerHTML = iter + ". " + prpType;
    var p1 = document.createElement('p');
    p1.innerHTML = prpType;
    var p2 = document.createElement('p');
    p2.innerHTML = city;
    var p3 = document.createElement('p');
    p3.innerHTML = ecnTransType;
    var p4 = document.createElement('p');
    p4.innerHTML = "Цена: " + price + " лв.";
    var p5 = document.createElement('p');
    p5.innerHTML = description;
    var h3 = document.createElement('h3');
    h3.innerHTML = "Телефон за контакт: 0889 " + Math.floor(100000 + Math.random() * 900000);

    div2.appendChild(h);
    div2.appendChild(p1);
    div2.appendChild(p2);
    div2.appendChild(p3);
    div2.appendChild(p4);
    div2.appendChild(p5);
    div2.appendChild(h3);
    div1.appendChild(img);
    div1.appendChild(div2);

    return div1;
}


function getOption() {
    event.preventDefault();

    var cityElement = document.getElementById("mySelect")[0];
    var city = cityElement.options[cityElement.selectedIndex].text;
    var propertyTypeElement = document.getElementById("mySelect")[1];
    var propertyType = propertyTypeElement.options[propertyTypeElement.selectedIndex].text;

    var path = document.location.pathname.split("/");
    var ecnTransType = path[path.length - 1] === 'sales.html' ? 'Продажба' : 'Наем';


    document.getElementById("selectedCity").innerHTML = "Избрано: " + cityElement.options[cityElement.selectedIndex].text + ", ";
    document.getElementById("selectedPropType").innerHTML = propertyTypeElement.options[propertyTypeElement.selectedIndex].text;

    tmpArr = filterProperties(allProperties, city, propertyType, ecnTransType);

    //Print elements on page
    tmpElements = document.getElementById('propertyListingContainer');
    tmpElements.innerHTML = '';
    for (i = 0; i < tmpArr.length; i++) {
        tmpElement = createPropertyListElement(tmpArr[i].city, tmpArr[i].type, tmpArr[i].price, tmpArr[i].ecnTransType, tmpArr[i].description, i + 1);
        tmpElements.appendChild(tmpElement);
        delete tmpElement;
    }
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function pageLoad() {
	url = document.location.href.split("/");
    page = url[url.length - 1];
    var salesPage = "sales.html";
    var rentsPage = "rents.html";
    var newsPage = "news.html";
    if (page === salesPage || page === newsPage) {
        readStore();
    } else if (page === newsPage) {
        loadArticlesOnPage();
    }
}