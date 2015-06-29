function TextGenerator() {

var ProductType = new Array(' TW70 ', ' M313D ', ' M316D ', ' M318D ', ' M322D ', ' TW85 ', ' TW110 ');
var ProductManufacturer = new Array(' Terex ', ' Caterpillar ');
var Manufacturer = 7489;


for(var counter = 0; counter <= 4; counter++) {

var checker = Math.floor(Math.random() * ProductType.length);

if(checker == 0 || checker == 6 || checker == 5)
 {
   Manufacturer = ProductManufacturer[0];
 }
 else {
   Manufacturer = ProductManufacturer[1];
 }

var Text1 = new Array(
    'Ein Kompakter Mobilbagger mit seitlich verstellbarem Ausleger für das Arbeiten unter beengten Platzverhältnissen aus dem Hause ' + Manufacturer + '. '
  , 'Die seitlich verstellbaren Ausleger erleichtern das Arbeiten unter beengten Platzverhältnissen für den kompakten Mobibagger aus dem Hause ' + Manufacturer + '. '
  , 'Der kompakte Mobilbagger aus dem Hause ' + Manufacturer + ' ist für Arbeiten auf engen Platzverhältnissen durch seine seitlich verstellbaren Ausleger perfekt geeignet. '
  , 'Bei engen Platzverhältnissen ist der kompakte Mobilbagger von ' + Manufacturer + ' durch seine seitlich verstellbaren Ausleger perfekt geeignet. '
  ,  Manufacturer + ' bietet mit seinem kompakten Mobilbagger eine Baumaschine, die unter beengten Platzverhältnissen dank der seitlich verstellbaren Ausleger perfekt einsetzbar ist. ');

var Text2 = new Array(
    'Der kompakte Mobilbagger' + ProductType[checker] + 'von ' + Manufacturer + ' bietet starke Grableistungen und hohe Flexibilität. '
  , 'Starke Grableistung und hohe Flexibilität sind wichtige Eigenschaften des Mobilbagger ' + ProductType[checker] + ' von ' + Manufacturer + '. '
  , 'Wichtige Eigenschaften des Mobibagger ' + ProductType[checker] + ' von ' + Manufacturer + ' sind die hohe Flexibilität und die starke Grableistung'
  , 'Die hohe Flexibilität des Mobilbagger ' + ProductType[checker] + ' von ' + Manufacturer + ' gewinnt durch die starke Grableistung noch an Bedeutung. '
  , 'Eigenschaften wie eine hohe Flexibilität und eine starbe Grableistung machen den Mobilbagger ' + ProductType[checker] + ' von ' + Manufacturer + ' zum kompakten Alleskönner. ');

var Text3 = new Array(
    'So kann der Fahrer auch unter anspruchvollsten Bedingungen produktiv und profitabel arbeiten.'
  , 'Auch unter anspruchsvollsten Bedingungen kann der Fahrer produktiv und profitabel arbeiten. '
  , 'Das profitable und produktive Arbeiten ist dem Fahrer selbst unter anspruchsvollsten Bedingungen möglich. '
  , 'Der Fahrer kann stets produktiv und profitabel arbeiten, selbst unter anspruchsvollsten Bedingungen. '
  , 'Das Arbeiten ist selbst unter anspruchsvollsten Bedingungen stets profitabel und produktiv. ');

var Text4 = new Array('Zudem überzeugt der Mobilbagger ' + ProductType[checker] + ' durch eine hohe Wirtschaftlichkeit und wartungsarmen Betrieb. '
  , 'Hohe Wirtschaftlichkeit zeichnet den Mobilbagger ' + ProductType[checker] + ' genauso aus wie der wartungsarme Betrieb. '
  , 'Der Mobilbagger ' + ProductType[checker] + ' überzeugt durch einen wartungsarmen Betrieb und hohe Wirtschaftlichkeit '
  , 'Wartungsarmer Betrieb und hohe Wirtschaftlichkeit zeichnen den Mobilbagger ' + ProductType[checker] + ' aus. '
  , 'Der Mobilbagger ' + ProductType[checker] + ' muss nur sehr wenig repariert werden und man spart dadurch Geld. ');

var Text5 = new Array('Durch die hohe Standsicherheit kann der ' + Manufacturer + ' ' + ProductType[checker] + ' nicht umfallen. '
  , 'Der ' + Manufacturer + ' ' + ProductType[checker] + ' kann durch eine hohe Standsicherheit nicht umfallen. '
  , 'Das Umfallen ist dem ' + ProductType[checker] + ' von ' + Manufacturer + ' durch seine hohe Standsicherheit nicht möglich. '
  , 'Die hohe Standsicherheit macht es unmöglich, dass der ' + ProductType[checker] + ' von ' + Manufacturer + ' umfällt. '
  , 'Dem ' + Manufacturer + ' ' + ProductType[checker] + ' ist das Umfallen aufgrund einer hohen Standsicherheit nicht möglich. ');

document.write("<h3> Textvariante "+ counter +" </h3> <p> <p>");

var Producttext = Text1[Math.floor(Math.random() * Text1.length)] + Text2[Math.floor(Math.random() * Text2.length)] + Text3[Math.floor(Math.random() * Text3.length)] + Text4[Math.floor(Math.random() * Text4.length)] + Text5[Math.floor(Math.random() * Text5.length)];
document.write(Producttext);
}

}
