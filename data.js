// Samflyer — airport and airline reference data (offline).
// Airports: IATA|Name|City|Country code|lat|lon|IANA time zone
window.SF_AIRPORTS_RAW = `
LHR|Heathrow|London|GB|51.4700|-0.4543|Europe/London
LGW|Gatwick|London|GB|51.1537|-0.1821|Europe/London
STN|Stansted|London|GB|51.8860|0.2389|Europe/London
LTN|Luton|London|GB|51.8747|-0.3683|Europe/London
LCY|London City|London|GB|51.5048|0.0495|Europe/London
SEN|Southend|London|GB|51.5703|0.6933|Europe/London
BHX|Birmingham|Birmingham|GB|52.4539|-1.7480|Europe/London
MAN|Manchester|Manchester|GB|53.3537|-2.2750|Europe/London
EDI|Edinburgh|Edinburgh|GB|55.9500|-3.3725|Europe/London
GLA|Glasgow|Glasgow|GB|55.8719|-4.4331|Europe/London
BRS|Bristol|Bristol|GB|51.3827|-2.7191|Europe/London
EMA|East Midlands|Nottingham|GB|52.8311|-1.3281|Europe/London
LPL|Liverpool|Liverpool|GB|53.3336|-2.8497|Europe/London
NCL|Newcastle|Newcastle|GB|55.0375|-1.6917|Europe/London
LBA|Leeds Bradford|Leeds|GB|53.8659|-1.6606|Europe/London
BFS|Belfast International|Belfast|GB|54.6575|-6.2158|Europe/London
BHD|Belfast City|Belfast|GB|54.6181|-5.8725|Europe/London
ABZ|Aberdeen|Aberdeen|GB|57.2019|-2.1978|Europe/London
CWL|Cardiff|Cardiff|GB|51.3967|-3.3433|Europe/London
SOU|Southampton|Southampton|GB|50.9503|-1.3568|Europe/London
EXT|Exeter|Exeter|GB|50.7344|-3.4139|Europe/London
DUB|Dublin|Dublin|IE|53.4213|-6.2701|Europe/Dublin
ORK|Cork|Cork|IE|51.8413|-8.4911|Europe/Dublin
SNN|Shannon|Shannon|IE|52.7020|-8.9248|Europe/Dublin
CDG|Charles de Gaulle|Paris|FR|49.0097|2.5479|Europe/Paris
ORY|Orly|Paris|FR|48.7262|2.3652|Europe/Paris
BVA|Beauvais|Paris|FR|49.4544|2.1128|Europe/Paris
NCE|Nice Côte d'Azur|Nice|FR|43.6584|7.2159|Europe/Paris
LYS|Lyon Saint-Exupéry|Lyon|FR|45.7256|5.0811|Europe/Paris
MRS|Marseille Provence|Marseille|FR|43.4393|5.2214|Europe/Paris
TLS|Toulouse-Blagnac|Toulouse|FR|43.6291|1.3638|Europe/Paris
BOD|Bordeaux-Mérignac|Bordeaux|FR|44.8283|-0.7156|Europe/Paris
BSL|EuroAirport|Basel|FR|47.5896|7.5299|Europe/Paris
AMS|Schiphol|Amsterdam|NL|52.3105|4.7683|Europe/Amsterdam
EIN|Eindhoven|Eindhoven|NL|51.4501|5.3745|Europe/Amsterdam
BRU|Brussels|Brussels|BE|50.9014|4.4844|Europe/Brussels
CRL|Charleroi|Brussels|BE|50.4592|4.4538|Europe/Brussels
LUX|Luxembourg|Luxembourg|LU|49.6233|6.2044|Europe/Luxembourg
FRA|Frankfurt|Frankfurt|DE|50.0379|8.5622|Europe/Berlin
MUC|Munich|Munich|DE|48.3538|11.7861|Europe/Berlin
BER|Berlin Brandenburg|Berlin|DE|52.3667|13.5033|Europe/Berlin
DUS|Düsseldorf|Düsseldorf|DE|51.2895|6.7668|Europe/Berlin
HAM|Hamburg|Hamburg|DE|53.6304|9.9882|Europe/Berlin
CGN|Cologne Bonn|Cologne|DE|50.8659|7.1427|Europe/Berlin
STR|Stuttgart|Stuttgart|DE|48.6899|9.2220|Europe/Berlin
ZRH|Zurich|Zurich|CH|47.4582|8.5555|Europe/Zurich
GVA|Geneva|Geneva|CH|46.2381|6.1090|Europe/Zurich
VIE|Vienna|Vienna|AT|48.1103|16.5697|Europe/Vienna
FCO|Fiumicino|Rome|IT|41.8003|12.2389|Europe/Rome
CIA|Ciampino|Rome|IT|41.7994|12.5949|Europe/Rome
MXP|Malpensa|Milan|IT|45.6306|8.7281|Europe/Rome
LIN|Linate|Milan|IT|45.4451|9.2767|Europe/Rome
BGY|Bergamo|Milan|IT|45.6739|9.7042|Europe/Rome
VCE|Marco Polo|Venice|IT|45.5053|12.3519|Europe/Rome
NAP|Naples|Naples|IT|40.8860|14.2908|Europe/Rome
BLQ|Bologna|Bologna|IT|44.5354|11.2887|Europe/Rome
PSA|Pisa|Pisa|IT|43.6839|10.3927|Europe/Rome
FLR|Florence|Florence|IT|43.8100|11.2051|Europe/Rome
CTA|Catania|Catania|IT|37.4668|15.0664|Europe/Rome
PMO|Palermo|Palermo|IT|38.1760|13.0910|Europe/Rome
MAD|Barajas|Madrid|ES|40.4983|-3.5676|Europe/Madrid
BCN|El Prat|Barcelona|ES|41.2974|2.0833|Europe/Madrid
AGP|Málaga|Málaga|ES|36.6749|-4.4991|Europe/Madrid
ALC|Alicante|Alicante|ES|38.2822|-0.5582|Europe/Madrid
PMI|Palma|Mallorca|ES|39.5517|2.7388|Europe/Madrid
IBZ|Ibiza|Ibiza|ES|38.8729|1.3731|Europe/Madrid
VLC|Valencia|Valencia|ES|39.4893|-0.4816|Europe/Madrid
SVQ|Seville|Seville|ES|37.4180|-5.8931|Europe/Madrid
BIO|Bilbao|Bilbao|ES|43.3011|-2.9106|Europe/Madrid
TFS|Tenerife South|Tenerife|ES|28.0445|-16.5725|Atlantic/Canary
LPA|Gran Canaria|Gran Canaria|ES|27.9319|-15.3866|Atlantic/Canary
ACE|Lanzarote|Lanzarote|ES|28.9455|-13.6052|Atlantic/Canary
FUE|Fuerteventura|Fuerteventura|ES|28.4527|-13.8638|Atlantic/Canary
LIS|Humberto Delgado|Lisbon|PT|38.7742|-9.1342|Europe/Lisbon
OPO|Porto|Porto|PT|41.2481|-8.6814|Europe/Lisbon
FAO|Faro|Faro|PT|37.0144|-7.9659|Europe/Lisbon
FNC|Madeira|Funchal|PT|32.6979|-16.7745|Atlantic/Madeira
CPH|Copenhagen|Copenhagen|DK|55.6180|12.6560|Europe/Copenhagen
ARN|Arlanda|Stockholm|SE|59.6519|17.9186|Europe/Stockholm
OSL|Gardermoen|Oslo|NO|60.1976|11.1004|Europe/Oslo
HEL|Helsinki|Helsinki|FI|60.3172|24.9633|Europe/Helsinki
KEF|Keflavík|Reykjavík|IS|63.9850|-22.6056|Atlantic/Reykjavik
WAW|Chopin|Warsaw|PL|52.1657|20.9671|Europe/Warsaw
KRK|Kraków|Kraków|PL|50.0777|19.7848|Europe/Warsaw
PRG|Václav Havel|Prague|CZ|50.1008|14.2600|Europe/Prague
BUD|Budapest|Budapest|HU|47.4298|19.2611|Europe/Budapest
OTP|Henri Coandă|Bucharest|RO|44.5711|26.0850|Europe/Bucharest
SOF|Sofia|Sofia|BG|42.6967|23.4114|Europe/Sofia
BEG|Nikola Tesla|Belgrade|RS|44.8184|20.3091|Europe/Belgrade
ZAG|Zagreb|Zagreb|HR|45.7429|16.0688|Europe/Zagreb
SPU|Split|Split|HR|43.5389|16.2980|Europe/Zagreb
DBV|Dubrovnik|Dubrovnik|HR|42.5614|18.2682|Europe/Zagreb
LJU|Ljubljana|Ljubljana|SI|46.2237|14.4576|Europe/Ljubljana
RIX|Riga|Riga|LV|56.9236|23.9711|Europe/Riga
VNO|Vilnius|Vilnius|LT|54.6341|25.2858|Europe/Vilnius
TLL|Tallinn|Tallinn|EE|59.4133|24.8328|Europe/Tallinn
ATH|Athens|Athens|GR|37.9364|23.9445|Europe/Athens
SKG|Thessaloniki|Thessaloniki|GR|40.5197|22.9709|Europe/Athens
HER|Heraklion|Crete|GR|35.3397|25.1803|Europe/Athens
RHO|Rhodes|Rhodes|GR|36.4054|28.0862|Europe/Athens
CFU|Corfu|Corfu|GR|39.6019|19.9117|Europe/Athens
JTR|Santorini|Santorini|GR|36.3992|25.4793|Europe/Athens
JMK|Mykonos|Mykonos|GR|37.4351|25.3481|Europe/Athens
LCA|Larnaca|Larnaca|CY|34.8751|33.6249|Asia/Nicosia
PFO|Paphos|Paphos|CY|34.7180|32.4857|Asia/Nicosia
MLA|Malta|Malta|MT|35.8575|14.4775|Europe/Malta
IST|Istanbul|Istanbul|TR|41.2753|28.7519|Europe/Istanbul
SAW|Sabiha Gökçen|Istanbul|TR|40.8986|29.3092|Europe/Istanbul
ESB|Esenboğa|Ankara|TR|40.1281|32.9951|Europe/Istanbul
ADB|Adnan Menderes|İzmir|TR|38.2924|27.1570|Europe/Istanbul
AYT|Antalya|Antalya|TR|36.8987|30.8005|Europe/Istanbul
DLM|Dalaman|Dalaman|TR|36.7131|28.7925|Europe/Istanbul
BJV|Milas-Bodrum|Bodrum|TR|37.2506|27.6643|Europe/Istanbul
TZX|Trabzon|Trabzon|TR|40.9951|39.7897|Europe/Istanbul
BEY|Rafic Hariri|Beirut|LB|33.8209|35.4884|Asia/Beirut
AMM|Queen Alia|Amman|JO|31.7226|35.9932|Asia/Amman
TLV|Ben Gurion|Tel Aviv|IL|32.0114|34.8867|Asia/Jerusalem
CAI|Cairo|Cairo|EG|30.1219|31.4056|Africa/Cairo
HRG|Hurghada|Hurghada|EG|27.1783|33.7994|Africa/Cairo
SSH|Sharm el-Sheikh|Sharm el-Sheikh|EG|27.9773|34.3950|Africa/Cairo
DXB|Dubai International|Dubai|AE|25.2532|55.3657|Asia/Dubai
DWC|Al Maktoum|Dubai|AE|24.8960|55.1614|Asia/Dubai
AUH|Zayed International|Abu Dhabi|AE|24.4330|54.6511|Asia/Dubai
SHJ|Sharjah|Sharjah|AE|25.3286|55.5172|Asia/Dubai
DOH|Hamad|Doha|QA|25.2731|51.6081|Asia/Qatar
BAH|Bahrain|Bahrain|BH|26.2708|50.6336|Asia/Bahrain
KWI|Kuwait|Kuwait City|KW|29.2266|47.9689|Asia/Kuwait
RUH|King Khalid|Riyadh|SA|24.9576|46.6988|Asia/Riyadh
JED|King Abdulaziz|Jeddah|SA|21.6796|39.1565|Asia/Riyadh
DMM|King Fahd|Dammam|SA|26.4712|49.7979|Asia/Riyadh
MCT|Muscat|Muscat|OM|23.5933|58.2844|Asia/Muscat
BGW|Baghdad|Baghdad|IQ|33.2625|44.2346|Asia/Baghdad
EBL|Erbil|Erbil|IQ|36.2376|43.9632|Asia/Baghdad
DAM|Damascus|Damascus|SY|33.4115|36.5156|Asia/Damascus
IKA|Imam Khomeini|Tehran|IR|35.4161|51.1522|Asia/Tehran
CMN|Mohammed V|Casablanca|MA|33.3675|-7.5900|Africa/Casablanca
RAK|Menara|Marrakesh|MA|31.6069|-8.0363|Africa/Casablanca
TUN|Tunis-Carthage|Tunis|TN|36.8510|10.2272|Africa/Tunis
ALG|Houari Boumediene|Algiers|DZ|36.6910|3.2154|Africa/Algiers
ADD|Bole|Addis Ababa|ET|8.9779|38.7993|Africa/Addis_Ababa
NBO|Jomo Kenyatta|Nairobi|KE|-1.3192|36.9278|Africa/Nairobi
JNB|O. R. Tambo|Johannesburg|ZA|-26.1392|28.2460|Africa/Johannesburg
CPT|Cape Town|Cape Town|ZA|-33.9715|18.6021|Africa/Johannesburg
LOS|Murtala Muhammed|Lagos|NG|6.5774|3.3212|Africa/Lagos
ACC|Kotoka|Accra|GH|5.6052|-0.1668|Africa/Accra
DEL|Indira Gandhi|Delhi|IN|28.5562|77.1000|Asia/Kolkata
BOM|Chhatrapati Shivaji|Mumbai|IN|19.0896|72.8656|Asia/Kolkata
BLR|Kempegowda|Bengaluru|IN|13.1986|77.7066|Asia/Kolkata
KHI|Jinnah|Karachi|PK|24.9065|67.1608|Asia/Karachi
LHE|Allama Iqbal|Lahore|PK|31.5216|74.4036|Asia/Karachi
ISB|Islamabad|Islamabad|PK|33.5491|72.8257|Asia/Karachi
DAC|Shahjalal|Dhaka|BD|23.8433|90.3978|Asia/Dhaka
CMB|Bandaranaike|Colombo|LK|7.1808|79.8841|Asia/Colombo
MLE|Velana|Malé|MV|4.1918|73.5291|Indian/Maldives
SIN|Changi|Singapore|SG|1.3644|103.9915|Asia/Singapore
KUL|Kuala Lumpur|Kuala Lumpur|MY|2.7456|101.7099|Asia/Kuala_Lumpur
BKK|Suvarnabhumi|Bangkok|TH|13.6900|100.7501|Asia/Bangkok
HKT|Phuket|Phuket|TH|8.1132|98.3169|Asia/Bangkok
HKG|Hong Kong|Hong Kong|HK|22.3080|113.9185|Asia/Hong_Kong
PEK|Capital|Beijing|CN|40.0799|116.6031|Asia/Shanghai
PVG|Pudong|Shanghai|CN|31.1443|121.8083|Asia/Shanghai
ICN|Incheon|Seoul|KR|37.4602|126.4407|Asia/Seoul
NRT|Narita|Tokyo|JP|35.7720|140.3929|Asia/Tokyo
HND|Haneda|Tokyo|JP|35.5494|139.7798|Asia/Tokyo
TPE|Taoyuan|Taipei|TW|25.0797|121.2342|Asia/Taipei
MNL|Ninoy Aquino|Manila|PH|14.5086|121.0194|Asia/Manila
CGK|Soekarno-Hatta|Jakarta|ID|-6.1256|106.6559|Asia/Jakarta
DPS|Ngurah Rai|Bali|ID|-8.7482|115.1675|Asia/Makassar
SYD|Kingsford Smith|Sydney|AU|-33.9399|151.1753|Australia/Sydney
MEL|Tullamarine|Melbourne|AU|-37.6690|144.8410|Australia/Melbourne
PER|Perth|Perth|AU|-31.9385|115.9672|Australia/Perth
AKL|Auckland|Auckland|NZ|-37.0082|174.7850|Pacific/Auckland
JFK|John F. Kennedy|New York|US|40.6413|-73.7781|America/New_York
EWR|Newark|New York|US|40.6895|-74.1745|America/New_York
BOS|Logan|Boston|US|42.3656|-71.0096|America/New_York
IAD|Dulles|Washington|US|38.9531|-77.4565|America/New_York
MIA|Miami|Miami|US|25.7959|-80.2870|America/New_York
MCO|Orlando|Orlando|US|28.4312|-81.3081|America/New_York
ATL|Hartsfield-Jackson|Atlanta|US|33.6407|-84.4277|America/New_York
ORD|O'Hare|Chicago|US|41.9742|-87.9073|America/Chicago
DFW|Dallas Fort Worth|Dallas|US|32.8998|-97.0403|America/Chicago
IAH|George Bush|Houston|US|29.9902|-95.3368|America/Chicago
DEN|Denver|Denver|US|39.8561|-104.6737|America/Denver
LAX|Los Angeles|Los Angeles|US|33.9416|-118.4085|America/Los_Angeles
SFO|San Francisco|San Francisco|US|37.6213|-122.3790|America/Los_Angeles
SEA|Seattle-Tacoma|Seattle|US|47.4502|-122.3088|America/Los_Angeles
LAS|Harry Reid|Las Vegas|US|36.0840|-115.1537|America/Los_Angeles
YYZ|Pearson|Toronto|CA|43.6777|-79.6248|America/Toronto
YUL|Trudeau|Montréal|CA|45.4706|-73.7408|America/Toronto
YOW|Ottawa|Ottawa|CA|45.3225|-75.6692|America/Toronto
YVR|Vancouver|Vancouver|CA|49.1967|-123.1815|America/Vancouver
YYC|Calgary|Calgary|CA|51.1215|-114.0076|America/Edmonton
YHZ|Halifax Stanfield|Halifax|CA|44.8808|-63.5086|America/Halifax
MEX|Benito Juárez|Mexico City|MX|19.4363|-99.0721|America/Mexico_City
CUN|Cancún|Cancún|MX|21.0365|-86.8771|America/Cancun
GRU|Guarulhos|São Paulo|BR|-23.4356|-46.4731|America/Sao_Paulo
EZE|Ezeiza|Buenos Aires|AR|-34.8222|-58.5358|America/Argentina/Buenos_Aires
BOG|El Dorado|Bogotá|CO|4.7016|-74.1469|America/Bogota
`;

// Airline IATA codes -> names
window.SF_AIRLINES = {
  PC: 'Pegasus', TK: 'Turkish Airlines', VF: 'AJet', XQ: 'SunExpress', ME: 'Middle East Airlines',
  BA: 'British Airways', VS: 'Virgin Atlantic', FR: 'Ryanair', U2: 'easyJet', W6: 'Wizz Air', W9: 'Wizz Air UK',
  LS: 'Jet2', BY: 'TUI', LM: 'Loganair', EI: 'Aer Lingus', EK: 'Emirates', QR: 'Qatar Airways', EY: 'Etihad',
  FZ: 'flydubai', G9: 'Air Arabia', LH: 'Lufthansa', AF: 'Air France', KL: 'KLM', IB: 'Iberia', VY: 'Vueling',
  TP: 'TAP Air Portugal', AZ: 'ITA Airways', LX: 'Swiss', OS: 'Austrian', SN: 'Brussels Airlines', SK: 'SAS',
  AY: 'Finnair', A3: 'Aegean', RJ: 'Royal Jordanian', MS: 'EgyptAir', SV: 'Saudia', XY: 'flynas', GF: 'Gulf Air',
  WY: 'Oman Air', KU: 'Kuwait Airways', AT: 'Royal Air Maroc', ET: 'Ethiopian Airlines', LO: 'LOT', OK: 'Czech Airlines',
  RO: 'TAROM', JU: 'Air Serbia', DY: 'Norwegian', D8: 'Norwegian', HV: 'Transavia', TO: 'Transavia France',
  EW: 'Eurowings', DE: 'Condor', AA: 'American Airlines', DL: 'Delta', UA: 'United', AC: 'Air Canada', WS: 'WestJet',
  SQ: 'Singapore Airlines', CX: 'Cathay Pacific', QF: 'Qantas', AI: 'Air India', PK: 'PIA', UL: 'SriLankan'
};
