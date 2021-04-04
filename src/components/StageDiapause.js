import React, { Component } from 'react';
import MaterialTable from 'material-table'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
class StageDiapause extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      region: 'austria'.toUpperCase(),
      to: new Date(),
      from: new Date(),
      degreeDayFrom: '',
      degreeDayTo: '',
      stages: [],
      accumulatedDegreeDay: 0,
      accumulatedDegreeDayGraphData: [],
      apiResponse: [],
      stagesForAllDatesInRange: [],
      dayLengthData: [{"dayLength":8.409520542618013,"day":1},{"dayLength":8.425268557015377,"day":2},{"dayLength":8.442473421351627,"day":3},{"dayLength":8.461116295668912,"day":4},{"dayLength":8.481176963757877,"day":5},{"dayLength":8.502633912210415,"day":6},{"dayLength":8.525464412869612,"day":7},{"dayLength":8.549644608057129,"day":8},{"dayLength":8.5751495979585,"day":9},{"dayLength":8.6019535295541,"day":10},{"dayLength":8.63002968649734,"day":11},{"dayLength":8.65935057936141,"day":12},{"dayLength":8.689888035700921,"day":13},{"dayLength":8.721613289404427,"day":14},{"dayLength":8.754497068847312,"day":15},{"dayLength":8.788509683391235,"day":16},{"dayLength":8.823621107815304,"day":17},{"dayLength":8.859801064304905,"day":18},{"dayLength":8.897019101665943,"day":19},{"dayLength":8.935244671474258,"day":20},{"dayLength":8.974447200912014,"day":21},{"dayLength":9.014596162083974,"day":22},{"dayLength":9.055661137646622,"day":23},{"dayLength":9.097611882621418,"day":24},{"dayLength":9.14041838230007,"day":25},{"dayLength":9.184050906183847,"day":26},{"dayLength":9.228480057930964,"day":27},{"dayLength":9.273676821315307,"day":28},{"dayLength":9.31961260222656,"day":29},{"dayLength":9.366259266765683,"day":30},{"dayLength":9.41358917551113,"day":31},{"dayLength":9.461575214049773,"day":32},{"dayLength":9.510190819882634,"day":33},{"dayLength":9.559410005829085,"day":34},{"dayLength":9.609207380064438,"day":35},{"dayLength":9.659558162934875,"day":36},{"dayLength":9.710438200700489,"day":37},{"dayLength":9.761823976362324,"day":38},{"dayLength":9.81369261773245,"day":39},{"dayLength":9.866021902907802,"day":40},{"dayLength":9.918790263308656,"day":41},{"dayLength":9.971976784441624,"day":42},{"dayLength":10.025561204544783,"day":43},{"dayLength":10.079523911269465,"day":44},{"dayLength":10.133845936549188,"day":45},{"dayLength":10.188508949801566,"day":46},{"dayLength":10.24349524960378,"day":47},{"dayLength":10.298787753976445,"day":48},{"dayLength":10.354369989404647,"day":49},{"dayLength":10.410226078718608,"day":50},{"dayLength":10.46634072794987,"day":51},{"dayLength":10.522699212272354,"day":52},{"dayLength":10.579287361130866,"day":53},{"dayLength":10.63609154265312,"day":54},{"dayLength":10.693098647434704,"day":55},{"dayLength":10.750296071779958,"day":56},{"dayLength":10.807671700475517,"day":57},{"dayLength":10.86521388916703,"day":58},{"dayLength":10.92291144640384,"day":59},{"dayLength":10.980753615410467,"day":60},{"dayLength":11.038730055638622,"day":61},{"dayLength":11.09683082414796,"day":62},{"dayLength":11.155046356859136,"day":63},{"dayLength":11.21336744971792,"day":64},{"dayLength":11.271785239804718,"day":65},{"dayLength":11.330291186419895,"day":66},{"dayLength":11.388877052171242,"day":67},{"dayLength":11.447534884086467,"day":68},{"dayLength":11.50625699477025,"day":69},{"dayLength":11.565035943622314,"day":70},{"dayLength":11.623864518130102,"day":71},{"dayLength":11.682735715247171,"day":72},{"dayLength":11.741642722865949,"day":73},{"dayLength":11.800578901391471,"day":74},{"dayLength":11.859537765420761,"day":75},{"dayLength":11.91851296553084,"day":76},{"dayLength":11.977498270176902,"day":77},{"dayLength":12.036487547700833,"day":78},{"dayLength":12.095474748449256,"day":79},{"dayLength":12.154453886999267,"day":80},{"dayLength":12.213419024489419,"day":81},{"dayLength":12.272364251052833,"day":82},{"dayLength":12.331283668349059,"day":83},{"dayLength":12.390171372190977,"day":84},{"dayLength":12.449021435263079,"day":85},{"dayLength":12.507827889927505,"day":86},{"dayLength":12.566584711114503,"day":87},{"dayLength":12.625285799294424,"day":88},{"dayLength":12.68392496352889,"day":89},{"dayLength":12.742495904599538,"day":90},{"dayLength":12.80099219821363,"day":91},{"dayLength":12.859407278286819,"day":92},{"dayLength":12.917734420304624,"day":93},{"dayLength":12.975966724765378,"day":94},{"dayLength":13.034097100709092,"day":95},{"dayLength":13.092118249338183,"day":96},{"dayLength":13.150022647737915,"day":97},{"dayLength":13.207802532706326,"day":98},{"dayLength":13.265449884705609,"day":99},{"dayLength":13.322956411949137,"day":100},{"dayLength":13.38031353464085,"day":101},{"dayLength":13.437512369386292,"day":102},{"dayLength":13.494543713797395,"day":103},{"dayLength":13.551398031316037,"day":104},{"dayLength":13.608065436284532,"day":105},{"dayLength":13.66453567929441,"day":106},{"dayLength":13.720798132848289,"day":107},{"dayLength":13.776841777373216,"day":108},{"dayLength":13.832655187627466,"day":109},{"dayLength":13.888226519546686,"day":110},{"dayLength":13.943543497579096,"day":111},{"dayLength":13.998593402563632,"day":112},{"dayLength":14.053363060208802,"day":113},{"dayLength":14.107838830234432,"day":114},{"dayLength":14.16200659624247,"day":115},{"dayLength":14.215851756387373,"day":116},{"dayLength":14.269359214920627,"day":117},{"dayLength":14.32251337468825,"day":118},{"dayLength":14.375298130663946,"day":119},{"dayLength":14.42769686460459,"day":120},{"dayLength":14.479692440918287,"day":121},{"dayLength":14.531267203838706,"day":122},{"dayLength":14.582402976002445,"day":123},{"dayLength":14.63308105852889,"day":124},{"dayLength":14.68328223270432,"day":125},{"dayLength":14.732986763373612,"day":126},{"dayLength":14.78217440414415,"day":127},{"dayLength":14.830824404506808,"day":128},{"dayLength":14.878915518978612,"day":129},{"dayLength":14.926426018370297,"day":130},{"dayLength":14.973333703279897,"day":131},{"dayLength":15.019615919910065,"day":132},{"dayLength":15.06524957830248,"day":133},{"dayLength":15.110211173076928,"day":134},{"dayLength":15.154476806755683,"day":135},{"dayLength":15.198022215745302,"day":136},{"dayLength":15.240822799038073,"day":137},{"dayLength":15.282853649683906,"day":138},{"dayLength":15.324089589070333,"day":139},{"dayLength":15.364505204033698,"day":140},{"dayLength":15.404074886808264,"day":141},{"dayLength":15.442772877802094,"day":142},{"dayLength":15.48057331116902,"day":143},{"dayLength":15.517450263125113,"day":144},{"dayLength":15.553377802935556,"day":145},{"dayLength":15.58833004647419,"day":146},{"dayLength":15.622281212233219,"day":147},{"dayLength":15.655205679634708,"day":148},{"dayLength":15.687078049469298,"day":149},{"dayLength":15.717873206260478,"day":150},{"dayLength":15.747566382326125,"day":151},{"dayLength":15.776133223282034,"day":152},{"dayLength":15.80354985470631,"day":153},{"dayLength":15.829792949658303,"day":154},{"dayLength":15.854839796722066,"day":155},{"dayLength":15.878668368222574,"day":156},{"dayLength":15.90125738824328,"day":157},{"dayLength":15.922586400056842,"day":158},{"dayLength":15.942635832566928,"day":159},{"dayLength":15.961387065348928,"day":160},{"dayLength":15.978822491870924,"day":161},{"dayLength":15.994925580474023,"day":162},{"dayLength":16.009680932693474,"day":163},{"dayLength":16.023074338508735,"day":164},{"dayLength":16.035092828122284,"day":165},{"dayLength":16.045724719883417,"day":166},{"dayLength":16.05495966399432,"day":167},{"dayLength":16.062788681661566,"day":168},{"dayLength":16.06920419938632,"day":169},{"dayLength":16.07420007812092,"day":170},{"dayLength":16.07777163705737,"day":171},{"dayLength":16.079915671854724,"day":172},{"dayLength":16.080630467156162,"day":173},{"dayLength":16.07991580329281,"day":174},{"dayLength":16.077772957118803,"day":175},{"dayLength":16.074204696970565,"day":176},{"dayLength":16.06921527179168,"day":177},{"dayLength":16.062810394512756,"day":178},{"dayLength":16.054997219822088,"day":179},{"dayLength":16.045784316507877,"day":180},{"dayLength":16.03518163459467,"day":181},{"dayLength":16.023200467535936,"day":182},{"dayLength":16.00985340975997,"day":183},{"dayLength":15.995154309897947,"day":184},{"dayLength":15.979118220049982,"day":185},{"dayLength":15.961761341467533,"day":186},{"dayLength":15.943100967048482,"day":187},{"dayLength":15.923155421054009,"day":188},{"dayLength":15.901943996464782,"day":189},{"dayLength":15.879486890397402,"day":190},{"dayLength":15.855805138001163,"day":191},{"dayLength":15.830920545249853,"day":192},{"dayLength":15.804855621034264,"day":193},{"dayLength":15.777633508948073,"day":194},{"dayLength":15.749277919143852,"day":195},{"dayLength":15.719813060617005,"day":196},{"dayLength":15.689263574254117,"day":197},{"dayLength":15.657654466958961,"day":198},{"dayLength":15.625011047144657,"day":199},{"dayLength":15.591358861854403,"day":200},{"dayLength":15.556723635746772,"day":201},{"dayLength":15.521131212154359,"day":202},{"dayLength":15.484607496397777,"day":203},{"dayLength":15.447178401510275,"day":204},{"dayLength":15.408869796502191,"day":205},{"dayLength":15.369707457269424,"day":206},{"dayLength":15.329717020225834,"day":207},{"dayLength":15.288923938716797,"day":208},{"dayLength":15.247353442249604,"day":209},{"dayLength":15.205030498556448,"day":210},{"dayLength":15.161979778487332,"day":211},{"dayLength":15.118225623713533,"day":212},{"dayLength":15.073792017206983,"day":213},{"dayLength":15.028702556447552,"day":214},{"dayLength":14.98298042929821,"day":215},{"dayLength":14.936648392477762,"day":216},{"dayLength":14.889728752551976,"day":217},{"dayLength":14.842243349356545,"day":218},{"dayLength":14.794213541759298,"day":219},{"dayLength":14.745660195664263,"day":220},{"dayLength":14.696603674156668,"day":221},{"dayLength":14.64706382968544,"day":222},{"dayLength":14.597059998178256,"day":223},{"dayLength":14.546610994983702,"day":224},{"dayLength":14.495735112535174,"day":225},{"dayLength":14.444450119632286,"day":226},{"dayLength":14.392773262236936,"day":227},{"dayLength":14.340721265683529,"day":228},{"dayLength":14.288310338205221,"day":229},{"dayLength":14.235556175681321,"day":230},{"dayLength":14.18247396751411,"day":231},{"dayLength":14.129078403547096,"day":232},{"dayLength":14.075383681940474,"day":233},{"dayLength":14.021403517923606,"day":234},{"dayLength":13.96715115334838,"day":235},{"dayLength":13.912639366971549,"day":236},{"dayLength":13.857880485398292,"day":237},{"dayLength":13.802886394623526,"day":238},{"dayLength":13.747668552111593,"day":239},{"dayLength":13.69223799935915,"day":240},{"dayLength":13.636605374890094,"day":241},{"dayLength":13.580780927635338,"day":242},{"dayLength":13.524774530654094,"day":243},{"dayLength":13.468595695157044,"day":244},{"dayLength":13.412253584795371,"day":245},{"dayLength":13.355757030183113,"day":246},{"dayLength":13.299114543623556,"day":247},{"dayLength":13.242334334013584,"day":248},{"dayLength":13.185424321902891,"day":249},{"dayLength":13.128392154687793,"day":250},{"dayLength":13.071245221922126,"day":251},{"dayLength":13.013990670730175,"day":252},{"dayLength":12.956635421308995,"day":253},{"dayLength":12.899186182509741,"day":254},{"dayLength":12.841649467489617,"day":255},{"dayLength":12.784031609428062,"day":256},{"dayLength":12.726338777302487,"day":257},{"dayLength":12.668576991720556,"day":258},{"dayLength":12.610752140807431,"day":259},{"dayLength":12.552869996147821,"day":260},{"dayLength":12.494936228783747,"day":261},{"dayLength":12.436956425270141,"day":262},{"dayLength":12.378936103791153,"day":263},{"dayLength":12.320880730341,"day":264},{"dayLength":12.26279573497365,"day":265},{"dayLength":12.204686528126308,"day":266},{"dayLength":12.146558517021917,"day":267},{"dayLength":12.088417122156216,"day":268},{"dayLength":12.030267793874888,"day":269},{"dayLength":11.972116029046417,"day":270},{"dayLength":11.913967387835907,"day":271},{"dayLength":11.855827510584964,"day":272},{"dayLength":11.797702134802071,"day":273},{"dayLength":11.73959711226739,"day":274},{"dayLength":11.681518426254977,"day":275},{"dayLength":11.623472208874551,"day":276},{"dayLength":11.565464758533682,"day":277},{"dayLength":11.507502557520038,"day":278},{"dayLength":11.449592289701746,"day":279},{"dayLength":11.39174085834226,"day":280},{"dayLength":11.333955404024175,"day":281},{"dayLength":11.276243322674347,"day":282},{"dayLength":11.218612283680326,"day":283},{"dayLength":11.161070248085549,"day":284},{"dayLength":11.103625486847932,"day":285},{"dayLength":11.046286599143539,"day":286},{"dayLength":10.98906253069359,"day":287},{"dayLength":10.931962592089706,"day":288},{"dayLength":10.87499647708838,"day":289},{"dayLength":10.818174280841637,"day":290},{"dayLength":10.761506518026541,"day":291},{"dayLength":10.70500414083166,"day":292},{"dayLength":10.648678556753667,"day":293},{"dayLength":10.592541646152224,"day":294},{"dayLength":10.536605779505852,"day":295},{"dayLength":10.480883834306008,"day":296},{"dayLength":10.425389211520597,"day":297},{"dayLength":10.370135851552197,"day":298},{"dayLength":10.31513824960999,"day":299},{"dayLength":10.260411470408018,"day":300},{"dayLength":10.205971162095784,"day":301},{"dayLength":10.151833569320702,"day":302},{"dayLength":10.098015545315096,"day":303},{"dayLength":10.044534562893954,"day":304},{"dayLength":9.991408724242977,"day":305},{"dayLength":9.938656769370064,"day":306},{"dayLength":9.886298083087231,"day":307},{"dayLength":9.83435270038408,"day":308},{"dayLength":9.782841310048488,"day":309},{"dayLength":9.731785256385315,"day":310},{"dayLength":9.681206538879694,"day":311},{"dayLength":9.631127809647943,"day":312},{"dayLength":9.581572368516696,"day":313},{"dayLength":9.532564155569327,"day":314},{"dayLength":9.484127740998485,"day":315},{"dayLength":9.436288312104736,"day":316},{"dayLength":9.38907165728399,"day":317},{"dayLength":9.342504146850729,"day":318},{"dayLength":9.296612710550413,"day":319},{"dayLength":9.251424811622636,"day":320},{"dayLength":9.206968417287257,"day":321},{"dayLength":9.163271965538332,"day":322},{"dayLength":9.12036432814619,"day":323},{"dayLength":9.078274769785677,"day":324},{"dayLength":9.037032903229107,"day":325},{"dayLength":8.99666864056569,"day":326},{"dayLength":8.957212140434983,"day":327},{"dayLength":8.918693751290553,"day":328},{"dayLength":8.881143950741047,"day":329},{"dayLength":8.844593281049576,"day":330},{"dayLength":8.80907228090811,"day":331},{"dayLength":8.774611413641486,"day":332},{"dayLength":8.741240992035202,"day":333},{"dayLength":8.708991100022155,"day":334},{"dayLength":8.677891511505226,"day":335},{"dayLength":8.647971606634822,"day":336},{"dayLength":8.619260285902522,"day":337},{"dayLength":8.591785882453133,"day":338},{"dayLength":8.565576073057107,"day":339},{"dayLength":8.540657788222987,"day":340},{"dayLength":8.517057121963868,"day":341},{"dayLength":8.49479924176307,"day":342},{"dayLength":8.47390829931062,"day":343},{"dayLength":8.454407342603634,"day":344},{"dayLength":8.436318230019438,"day":345},{"dayLength":8.4196615469795,"day":346},{"dayLength":8.404456525824802,"day":347},{"dayLength":8.390720969518288,"day":348},{"dayLength":8.37847117977765,"day":349},{"dayLength":8.367721890221453,"day":350},{"dayLength":8.358486205083429,"day":351},{"dayLength":8.350775544014217,"day":352},{"dayLength":8.344599593446533,"day":353},{"dayLength":8.339966264949823,"day":354},{"dayLength":8.336881660943915,"day":355},{"dayLength":8.335350048079384,"day":356},{"dayLength":8.33537383852528,"day":357},{"dayLength":8.336953579334773,"day":358},{"dayLength":8.340087949985817,"day":359},{"dayLength":8.344773768119357,"day":360},{"dayLength":8.35100600342269,"day":361},{"dayLength":8.358777799531154,"day":362},{"dayLength":8.368080503749336,"day":363},{"dayLength":8.378903704323752,"day":364},{"dayLength":8.391235274934125,"day":365}
 ],
 diapauseDataset: []
    };
  }

  
  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  calculateAccumulatedDegreeDay = (event) => {
    this.setState({[event.target.name]: event.target.value});
    // this.setState({accumulatedDegreeDayGraphData: []});
    var from = this.state.degreeDayFrom;
    var to = this.state.degreeDayTo;
    if(from !== '') {
      from = from.replace('-', '').replace('-', '');
      from = parseInt(from)
    }
    if(to !== '') {
      to = to.replace('-', '').replace('-', '');
      to = parseInt(to)
    }
    // oldTMin1 oldTMin2 oldTMin3 Cuttent
    var oldTMin1 = 0.3;
    var oldTMin2 = 0.3;
    var oldTMin3 = 0.3;
    if(from !== '' && to !== '') {
      var accumulatedResult = 0;
      var tempAccumulationGraphData = []
      this.state.apiResponse.map(item => {
        if(item.date >= from && item.date <= to) {
          if(oldTMin1 <= 0.2 && oldTMin2<=0.2 && oldTMin3<=0.3) {
            accumulatedResult = 0;
          }
          else {
            if(item.tMax<32)
             {
               accumulatedResult += item.degreeDay;
              }
          }
          oldTMin1 = oldTMin2;
          oldTMin2 = oldTMin3;
          oldTMin3 = item.tMin;
          accumulatedResult += item.degreeDay;
          tempAccumulationGraphData.push({
            accumulationData: accumulatedResult,
            date: item.date,
            tMin: item.tMin,
            tMax: item.tMax,
            day: this.calculateDayOfYear(item.date)
          });
        }
        return accumulatedResult;
      });
      this.setState({accumulatedDegreeDay: accumulatedResult});
      this.setState({accumulatedDegreeDayGraphData: tempAccumulationGraphData})
      var tempDiapauseData = []
      var tempStageData = [];
      tempAccumulationGraphData.map(item => {
        tempDiapauseData.push({
          date: item.date,
          day: item.day,
          accumulationData: item.accumulationData,
          tMax: item.tMax,
          tMin: item.tMin,
          tMean: (item.tMax + item.tMin) /2,
          diapauseData: this.calculateDiapause(item),
          dayLength: this.state.dayLengthData[item.day-1].dayLength
        });
        tempStageData.push({
          date: item.date,
          accumulationData: item.accumulationData,
          stages:  this.calaculateStages(item.accumulationData)
        })
      })
      this.setState({diapauseDataset: tempDiapauseData})
      var stagesForAccumulatedDegreeDay = this.calaculateStages(accumulatedResult);
      this.setState({stages: stagesForAccumulatedDegreeDay})
      this.setState({stagesForAllDatesInRange: tempStageData})
    }
    event.preventDefault();
  }

  calaculateStages = (accumulatedResult) => {
    var resultantStages = [];
    if(accumulatedResult>=121 && accumulatedResult<=198) {
      resultantStages.push("GENERATION_1_PUPA_INITIATION");
    }
    if(accumulatedResult>=199 && accumulatedResult<=292) {
      resultantStages.push("GENERATION_1_PUPA_50%");
    }
    if(accumulatedResult>=293 && accumulatedResult<=315) {
      resultantStages.push("GENERATION_1_PUPA_95%");
    }
    if(accumulatedResult>=216 && accumulatedResult<=315) {
      resultantStages.push("GENERATION_1_ADULT_MOTH_INITIATION");
    }
    if(accumulatedResult>=316 && accumulatedResult<=403) {
      resultantStages.push("GENERATION_1_ADULT_MOTH_50%");
    }
    if(accumulatedResult>=404 && accumulatedResult<=481) {
      resultantStages.push("GENERATION_1_ADULT_MOTH_95%");
    }
    if(accumulatedResult>=288 && accumulatedResult<=392) {
      resultantStages.push("GENERATION_1_FLIGHT_AND_MATING_INITIATION");
    }
    if(accumulatedResult>=393 && accumulatedResult<=481) {
      resultantStages.push("GENERATION_1_FLIGHT_AND_MATING_50%");
    }
    if(accumulatedResult>=482 && accumulatedResult<=531) {
      resultantStages.push("GENERATION_1_FLIGHT_AND_MATING_95%");
    }
    if(accumulatedResult>=321 && accumulatedResult<=453) {
      resultantStages.push("GENERATION_1_EGG_LAYING_INITIATION");
    }
    if(accumulatedResult>=454 && accumulatedResult<=531) {
      resultantStages.push("GENERATION_1_EGG_LAYING_50%");
    }
    if(accumulatedResult>=532 && accumulatedResult<=588) {
      resultantStages.push("GENERATION_1_EGG_LAYING_95%");
    }
    if(accumulatedResult>=388 && accumulatedResult<=515) {
      resultantStages.push("GENERATION_1_1ST_INSTAR_INITIATION");
    }
    if(accumulatedResult>=516 && accumulatedResult<=587) {
      resultantStages.push("GENERATION_1_1ST_INSTAR_50%");
    }
    if(accumulatedResult>=588 && accumulatedResult<=598) {
      resultantStages.push("GENERATION_1_1ST_INSTAR_95%");
    }
    if(accumulatedResult>=447 && accumulatedResult<=598) {
      resultantStages.push("GENERATION_1_2ND_INSTAR_INITIATION");
    }
    if(accumulatedResult>=599 && accumulatedResult<=653) {
      resultantStages.push("GENERATION_1_2ND_INSTAR_50%");
    }
    if(accumulatedResult>=654 && accumulatedResult<=676) {
      resultantStages.push("GENERATION_1_2ND_INSTAR_95%");
    }
    if(accumulatedResult>=512 && accumulatedResult<=676) {
      resultantStages.push("GENERATION_1_3RD_INSTAR_INITIATION");
    }
    if(accumulatedResult>=677 && accumulatedResult<=731) {
      resultantStages.push("GENERATION_1_3RD_INSTAR_50%");
    }
    if(accumulatedResult>=732 && accumulatedResult<=753) {
      resultantStages.push("GENERATION_1_2ND_INSTAR_95%");
    }
    if(accumulatedResult>=585 && accumulatedResult<=753) {
      resultantStages.push("GENERATION_1_4TH_INSTAR_INITIATION");
    }
    if(accumulatedResult>=754 && accumulatedResult<=809) {
      resultantStages.push("GENERATION_1_4TH_INSTAR_50%");
    }
    if(accumulatedResult>=810 && accumulatedResult<=826) {
      resultantStages.push("GENERATION_1_4TH_INSTAR_95%");
    }
    if(accumulatedResult>=710 && accumulatedResult<=826) {
      resultantStages.push("GENERATION_1_5TH_INSTAR_INITIATION");
    }
    if(accumulatedResult>=827 && accumulatedResult<=881) {
      resultantStages.push("GENERATION_1_5TH_INSTAR_50%");
    }
    if(accumulatedResult>=882 && accumulatedResult<=942) {
      resultantStages.push("GENERATION_1_5TH_INSTAR_95%");
    }


    
    if(accumulatedResult>=782 && accumulatedResult<=881) {
      resultantStages.push("GENERATION_2_PUPA_INITIATION");
    }
    if(accumulatedResult>=882 && accumulatedResult<=942) {
      resultantStages.push("GENERATION_2_PUPA_50%");
    }
    if(accumulatedResult>=943 && accumulatedResult<=970) {
      resultantStages.push("GENERATION_2_PUPA_95%");
    }
    if(accumulatedResult>=882 && accumulatedResult<=970) {
      resultantStages.push("GENERATION_2_ADULT_MOTH_INITIATION");
    }
    if(accumulatedResult>=971 && accumulatedResult<=1059) {
      resultantStages.push("GENERATION_2_ADULT_MOTH_50%");
    }
    if(accumulatedResult>=1060 && accumulatedResult<=1065) {
      resultantStages.push("GENERATION_2_ADULT_MOTH_95%");
    }
    if(accumulatedResult>=904 && accumulatedResult<=1065) {
      resultantStages.push("GENERATION_2_FLIGHT_AND_MATING_INITIATION");
    }
    if(accumulatedResult>=1066 && accumulatedResult<=1198) {
      resultantStages.push("GENERATION_2_FLIGHT_AND_MATING_50%");
    }
    if(accumulatedResult>=1199 && accumulatedResult<=1292) {
      resultantStages.push("GENERATION_2_FLIGHT_AND_MATING_95%");
    }
    if(accumulatedResult>=949 && accumulatedResult<=1153) {
      resultantStages.push("GENERATION_2_EGG_LAYING_INITIATION");
    }
    if(accumulatedResult>=1154 && accumulatedResult<=1292) {
      resultantStages.push("GENERATION_2_EGG_LAYING_50%");
    }
    if(accumulatedResult>=1293 && accumulatedResult<=1365) {
      resultantStages.push("GENERATION_2_EGG_LAYING_95%");
    }
    if(accumulatedResult>=1050 && accumulatedResult<=1231) {
      resultantStages.push("GENERATION_2_1ST_INSTAR_INITIATION");
    }
    if(accumulatedResult>=1232 && accumulatedResult<=1365) {
      resultantStages.push("GENERATION_2_1ST_INSTAR_50%");
    }
    if(accumulatedResult>=1366 && accumulatedResult<=1420) {
      resultantStages.push("GENERATION_2_1ST_INSTAR_95%");
    }
    if(accumulatedResult>=1109 && accumulatedResult<=1298) {
      resultantStages.push("GENERATION_2_2ND_INSTAR_INITIATION");
    }
    if(accumulatedResult>=1299 && accumulatedResult<=1420) {
      resultantStages.push("GENERATION_2_2ND_INSTAR_50%");
    }
    if(accumulatedResult>=1421 && accumulatedResult<=1492) {
      resultantStages.push("GENERATION_2_2ND_INSTAR_95%");
    }
    if(accumulatedResult>=1174 && accumulatedResult<=1370) {
      resultantStages.push("GENERATION_2_3RD_INSTAR_INITIATION");
    }
    if(accumulatedResult>=1371 && accumulatedResult<=1492) {
      resultantStages.push("GENERATION_2_3RD_INSTAR_50%");
    }
    if(accumulatedResult>=1493 && accumulatedResult<=1559) {
      resultantStages.push("GENERATION_2_3RD_INSTAR_95%");
    }
    if(accumulatedResult>=1247 && accumulatedResult<=1442) {
      resultantStages.push("GENERATION_2_4TH_INSTAR_INITIATION");
    }
    if(accumulatedResult>=1443 && accumulatedResult<=1559) {
      resultantStages.push("GENERATION_2_4TH_INSTAR_50%");
    }
    if(accumulatedResult>=1560 && accumulatedResult<=1609) {
      resultantStages.push("GENERATION_2_4TH_INSTAR_95%");
    }
    if(accumulatedResult>=1372 && accumulatedResult<=1609) {
      resultantStages.push("GENERATION_2_5TH_INSTAR_INITIATION");
    }
    if(accumulatedResult>=1610 && accumulatedResult<=1926) {
      resultantStages.push("GENERATION_2_5TH_INSTAR_50%");
    }
    if(accumulatedResult>=1927 && accumulatedResult<=1930) {
      resultantStages.push("GENERATION_2_5TH_INSTAR_95%");
    }
    return resultantStages;
  }

  calculateDiapause = (item) => {
    let tmean =(item.tMax + item.tMin)/2;
    let dayLength = this.state.dayLengthData[item.day -1].dayLength;
    let latitude = 47.5162;
    let diapause = (-384) + (30.8*dayLength) + (2.33*tmean) + (5.11 * latitude);
    return diapause;
  }
  calculateDayOfYear = (date) => {
    let year = date / 10000;
    let month = (date /100)%100;
    let day = date %100;
  
    if(year %4 === 0 && year%100 !== 0) {
      // leap year
      if(month === 2 && day === 29) {
        day = 28;
      }
    }
    let carryForwardDays = 0;
    if(month === 1) {
      carryForwardDays = 0;
    }
    if(month === 2) {
      carryForwardDays = 31;
    }
    if(month === 3) {
      carryForwardDays = 59;
    }
    if(month === 4) {
      carryForwardDays = 90;
    }
    if(month === 5) {
      carryForwardDays = 120;
    }
    if(month === 6) {
      carryForwardDays = 151;
    }
    if(month === 7) {
      carryForwardDays = 181;
    }
    if(month === 8) {
      carryForwardDays = 212;
    }
    if(month === 8) {
      carryForwardDays = 243;
    }
    if(month === 10) {
      carryForwardDays = 273;
    }
    if(month === 11) {
      carryForwardDays = 304;
    }
    if(month === 12) {
      carryForwardDays = 344;
    }
    let dayOfYear = carryForwardDays + day;
    return dayOfYear;
  }

  handleSubmit = (event) => {


    fetch('http://localhost:8080/api/v1/degreeDay/get', {
        method: 'POST',
        // We convert the React state to JSON and send it as the POST body
        // body: JSON.stringify(this.state),
        body: JSON.stringify({
          from: this.state.from,
          to: this.state.to,
          region: this.state.region
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function(response) {
        console.log(response)
        
        return response.json();
      }).then(body => {
        body.sort(function(a, b) {
          return a.date - b.date;
        });
        this.setState({
          apiResponse: body
        });


      });

    event.preventDefault();
}



  render() {
    return (
        <div>
          <h2>State and Diapause</h2>
          <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.region} name="region" onChange={this.handleChange} />
        </label>

        <input type="submit" value="Submit" />
      </form>

      <form onSubmit={this.calculateAccumulatedDegreeDay}>
        <div>
          <label>
            Start Date for analysis:
            <input type="Date" value={this.state.degreeDayFrom} name="degreeDayFrom" onChange={this.calculateAccumulatedDegreeDay} />
          </label>
          <label>
            Reference Date for which analysis:
            <input type="Date" value={this.state.degreeDayTo} name="degreeDayTo" onChange={this.calculateAccumulatedDegreeDay} />
          </label>
          
        <input type="submit" value="Calculate DiaPause Model" />
        </div>
      </form>
      <br></br>
      <br></br>
      <div>
        Your Accumulated Degree Day ==> {this.state.accumulatedDegreeDay}
      </div>

      <br></br>
      <br></br>
        {/* <LineChart
          width={1500}
          height={600}
          data={this.state.apiResponse}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="degreeDay" stroke="#82ca9d" />
        </LineChart> */}

        <br></br>
        <div>
          The stages for the reference date are - 
          <br/>
          {this.state.stages.map(data => {
            return <li>{data}</li>;
          })}
        </div>
      <br></br>
        
        <LineChart
          width={1500}
          height={600}
          data={this.state.diapauseDataset}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis/>
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="diapauseData" stroke="#FF0000" activeDot={{ r: 8 }}/>
          <Line type="monotone" dataKey="dayLength" stroke="#008000" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="tMean" stroke="#FF8C00" activeDot={{ r: 8 }} />
          {/* <Line type="monotone" dataKey="accumulationData" stroke="#0000FF" activeDot={{ r: 8 }} /> */}
          {/* <Line type="monotone" dataKey="tMax" stroke="#aaaaaa" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="tMin" stroke="#bbbbbb" activeDot={{ r: 8 }} /> */}
        </LineChart>



        <LineChart
          width={1500}
          height={600}
          data={this.state.diapauseDataset}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis/>
          <Tooltip />
          <Legend />
          {/* <Line type="monotone" dataKey="diapauseData" stroke="#FF0000" activeDot={{ r: 8 }}/>
          <Line type="monotone" dataKey="dayLength" stroke="#008000" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="tMean" stroke="#FF8C00" activeDot={{ r: 8 }} /> */}
          <Line type="monotone" dataKey="accumulationData" stroke="#0000FF" activeDot={{ r: 8 }} />
          {/* <Line type="monotone" dataKey="tMax" stroke="#aaaaaa" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="tMin" stroke="#bbbbbb" activeDot={{ r: 8 }} /> */}
        </LineChart>


{/* 
      <div style={{ maxWidth: '95%' }}>
        <MaterialTable
          columns={[
            { title: 'Id', field: 'id' },
            { title: 'Date', field: 'date' },
            { title: 'Region', field: 'region' },
            { title: 'T Max', field: 'tMax' },
            { title: 'T Min', field: 'tMin' },
            { title: 'tMedium', field: 'tMedium' },
            { title: 'Precipitation', field: 'precipitation' },
            { title: 'degreeDay', field: 'degreeDay' }
          ]}
          data={this.state.apiResponse}
          title="Degree Day Table"
        />
      </div> */}
      <br/>
      <br/>
      <br/>
          <div>
            The stages for the dates mentioned - 
            <br/>
            {this.state.stagesForAllDatesInRange.map(data => {
              return <li>{data.date} - {data.accumulationData}<ul>{data.stages.map(stageData => {return <li>{stageData}</li>})}</ul></li>;
            })}
          </div>
        </div>
    );
  }
}

export default StageDiapause;