
import Chart from 'chart.js/auto';

var can = document.createElement("canvas");
var x = document.createTextNode(can);
document.getElementById("Crimes_et_d.C3.A9lits_enregistr.C3.A9s_par_les_services_de_police").appendChild(can);//attaché le canvas dans lequel va se
//trouver la graph a la bonne place



var t1 = document.getElementById("table1")


var touslestr = t1.getElementsByTagName("tr");//je fais un tableau de tout les tr de table1
var thannee = touslestr[1].getElementsByTagName("th");//je recupère les th des années qui se trouve dans le 2ieme tr (tr[1]). Ca devient aussi un tableau
//console.log(touslestr[1]);

var tabannee = [];
 for(let i = 2; i<thannee.length; i++){
  tabannee[i-2] = thannee[i].innerHTML;//on commence au troisième parce que il y a d'abord le th avec l'espace et ensuite le th avec "ltr"
 }//donc dans tabannee on a toutes les années que l'on va placer dans le graph à l'axe x
//console.log(tabannee);

////////////////////belgique///////////////////////////////////////
var tabBelgique = touslestr[2].getElementsByTagName("td");//à partir du troisième tr on prend toutes les infos du premier pays
 //console.log(touslestr[2]);//et on les place dans les datasets
 //console.log(tabBelgique);

 var tabinfopaysbel = []
  for(let i = 1 ; i< tabBelgique.length; i++){
      tabinfopaysbel[i-1] = tabBelgique[i].innerHTML ;
  }

  var tabinfopaysconvbel = tabinfopaysbel.map(function(item){
    return (parseFloat(item.replace(",",".")));
  });
  //console.log(tabinfopaysconvbel);

  ////////////////////////////bulgarie/////////////////////////////
  var tabbulgarie = touslestr[3].getElementsByTagName("td");
 //console.log(touslestr[3]);
 //console.log(tabbulgarie);

 var tabinfopaysbul = []
  for(let i = 1 ; i< tabbulgarie.length; i++){
      tabinfopaysbul[i-1] = tabbulgarie[i].innerHTML ;
  }

  var tabinfopaysconvbul = tabinfopaysbul.map(function(item){
    return (parseFloat(item.replace(",",".")));
  });
  //console.log(tabinfopaysconvbul);

  //////////////////////////////czech/////////////////////////////////
  var tabczech = touslestr[4].getElementsByTagName("td");
 //console.log(touslestr[4]);
 //console.log(tabczech);

 var tabinfopaysczech = []
  for(let i = 1 ; i< tabczech.length; i++){
      tabinfopaysczech[i-1] = tabczech[i].innerHTML ;
  }

  var tabinfopaysconvczech = tabinfopaysczech.map(function(item){
    return (parseFloat(item.replace(",",".")));
  });
  //console.log(tabinfopaysconvczech);

  //////////////////////////////denmark//////////////////////////////
  var tabden = touslestr[5].getElementsByTagName("td");

 var daninfo = []
  for(let i = 1 ; i< tabden.length; i++){
      daninfo[i-1] = tabden[i].innerHTML ;
  }

  var daninfoconv = daninfo.map(function(item){
    return (parseFloat(item.replace(",",".")));
  });
  //console.log(daninfoconv);

  /////////////////////////////germany////////////////////////////////
  var germ = touslestr[6].getElementsByTagName("td");

 var germinfo = []
  for(let i = 1 ; i< germ.length; i++){
      germinfo[i-1] = germ[i].innerHTML ;
  }

  var germinfoconv = germinfo.map(function(item){
    return (parseFloat(item.replace(",",".")));
  });
  //console.log(germinfoconv);

  ///////////////////////////////////estonia/////////////////////////////
  var est = touslestr[7].getElementsByTagName("td");

  var estinfo = []
   for(let i = 1 ; i< est.length; i++){
       estinfo[i-1] = est[i].innerHTML ;
   }
 
   var estinfoconv = estinfo.map(function(item){
     return (parseFloat(item.replace(",",".")));
   });
   //console.log(estinfoconv);

   /////////////////////////////irlande//////////////////////////////////
   var ir = touslestr[8].getElementsByTagName("td");

   var irinfo = []
    for(let i = 1 ; i< ir.length; i++){
        irinfo[i-1] = ir[i].innerHTML ;
    }
  
    var irinfoconv = irinfo.map(function(item){
      return (parseFloat(item.replace(",",".")));
    });
    //console.log(irinfoconv);

    ///////////////////////////geece///////////////////////////////////:
    var gr = touslestr[9].getElementsByTagName("td");

   var grinfo = []
    for(let i = 1 ; i< gr.length; i++){
        grinfo[i-1] = gr[i].innerHTML ;
    }
  
    var grinfoconv = grinfo.map(function(item){
      return (parseFloat(item.replace(",",".")));
    });
    //console.log(grinfoconv);

    //////////////////////////////spain/////////////////////
    var sp = touslestr[10].getElementsByTagName("td");

   var spinfo = []
    for(let i = 1 ; i< sp.length; i++){
        spinfo[i-1] = sp[i].innerHTML ;
    }
  
    var spinfoconv = spinfo.map(function(item){
      return (parseFloat(item.replace(",",".")));
    });
    //console.log(spinfoconv);

    //////////////////////////france///////////////////
    var fr = touslestr[11].getElementsByTagName("td");

   var frinfo = []
    for(let i = 1 ; i< fr.length; i++){
        frinfo[i-1] = fr[i].innerHTML ;
    }
  
    var frinfoconv = frinfo.map(function(item){
      return (parseFloat(item.replace(",",".")));
    });
    //console.log(frinfoconv);

    /////////////////////croatia///////////////////////
    var cr = touslestr[12].getElementsByTagName("td");

   var crinfo = []
    for(let i = 1 ; i< sp.length; i++){
        crinfo[i-1] = cr[i].innerHTML ;
    }
  
    var crinfoconv = crinfo.map(function(item){
      return (parseFloat(item.replace(",",".")));
    });
    //console.log(crinfoconv);

    //////////////////////////italia/////////////////////
    var it = touslestr[13].getElementsByTagName("td");

   var itinfo = []
    for(let i = 1 ; i< sp.length; i++){
        itinfo[i-1] = it[i].innerHTML ;
    }
  
    var itinfoconv = itinfo.map(function(item){
      return (parseFloat(item.replace(",",".")));
    });
    //console.log(itinfoconv);

  ///////////////////////cyrus/////////////////////////
  var cy = touslestr[14].getElementsByTagName("td");

   var cyinfo = []
    for(let i = 1 ; i< sp.length; i++){
        cyinfo[i-1] = cy[i].innerHTML ;
    }
  
    var cyinfoconv = cyinfo.map(function(item){
      return (parseFloat(item.replace(",",".")));
    });
    //console.log(cyinfoconv);

    ///////////////////////Latvya////////////////////
    var la = touslestr[15].getElementsByTagName("td");

   var lainfo = []
    for(let i = 1 ; i< sp.length; i++){
        lainfo[i-1] = la[i].innerHTML ;
    }
  
    var lainfoconv = lainfo.map(function(item){
      return (parseFloat(item.replace(",",".")));
    });
    //console.log(lainfoconv);

  ///////////////////////lithuania/////////////////////
  var li = touslestr[15].getElementsByTagName("td");

   var liinfo = []
    for(let i = 1 ; i< li.length; i++){
        liinfo[i-1] = li[i].innerHTML ;
    }
  
    var liinfoconv = liinfo.map(function(item){
      return (parseFloat(item.replace(",",".")));
    });
    //console.log(liinfoconv);

    ///////////////////////luxembourg/////////////////////
  var lu = touslestr[16].getElementsByTagName("td");

  var luinfo = []
   for(let i = 1 ; i< lu.length; i++){
       luinfo[i-1] = lu[i].innerHTML ;
   }
 
   var luinfoconv = luinfo.map(function(item){
     return (parseFloat(item.replace(",",".")));
   });
   //console.log(luinfoconv);

   ///////////////////////hungary/////////////////////
  var hu = touslestr[17].getElementsByTagName("td");

  var huinfo = []
   for(let i = 1 ; i< hu.length; i++){
       huinfo[i-1] = hu[i].innerHTML ;
   }
 
   var huinfoconv = huinfo.map(function(item){
     return (parseFloat(item.replace(",",".")));
   });
   //console.log(huinfoconv);

   ///////////////////////malte///////////////////////
   var ma = touslestr[18].getElementsByTagName("td");

  var mainfo = []
   for(let i = 1 ; i< ma.length; i++){
       mainfo[i-1] = ma[i].innerHTML ;
   }
 
   var mainfoconv = mainfo.map(function(item){
     return (parseFloat(item.replace(",",".")));
   });

   ////////////////////////the nertherland//////////////
   var ne = touslestr[19].getElementsByTagName("td");

   var neinfo = []
    for(let i = 1 ; i< ne.length; i++){
        neinfo[i-1] = ne[i].innerHTML ;
    }
  
    var neinfoconv = neinfo.map(function(item){
      return (parseFloat(item.replace(",",".")));
    });
    
    ////////////////////////austria//////////////
   var au = touslestr[19].getElementsByTagName("td");

   var auinfo = []
    for(let i = 1 ; i< au.length; i++){
        auinfo[i-1] = au[i].innerHTML ;
    }
  
    var auinfoconv = auinfo.map(function(item){
      return (parseFloat(item.replace(",",".")));
    });
  
  ////////////////////////////Poland////////////////////////////////////
  var pol = touslestr[20].getElementsByTagName("td");

   var polinfo = []
    for(let i = 1 ; i< pol.length; i++){
        polinfo[i-1] = pol[i].innerHTML ;
    }
  
    var polinfoconv = polinfo.map(function(item){
      return (parseFloat(item.replace(",",".")));
    });

    ////////////////////////////Portugal////////////////////////////////////
  var por = touslestr[21].getElementsByTagName("td");

  var porinfo = []
   for(let i = 1 ; i< por.length; i++){
       porinfo[i-1] = por[i].innerHTML ;
   }
 
   var porinfoconv = porinfo.map(function(item){
     return (parseFloat(item.replace(",",".")));
   });
     ////////////////////////////Romania////////////////////////////////////
  var rom = touslestr[22].getElementsByTagName("td");

  var rominfo = []
   for(let i = 1 ; i< rom.length; i++){
       rominfo[i-1] = rom[i].innerHTML ;
   }
 
   var rominfoconv = rominfo.map(function(item){
     return (parseFloat(item.replace(",",".")));
   });
     ////////////////////////////Slovenia////////////////////////////////////
  var slo = touslestr[23].getElementsByTagName("td");

  var sloinfo = []
   for(let i = 1 ; i< slo.length; i++){
       sloinfo[i-1] = slo[i].innerHTML ;
   }
 
   var sloinfoconv = sloinfo.map(function(item){
     return (parseFloat(item.replace(",",".")));
   });
     ////////////////////////////Slovakia////////////////////////////////////
  var slov = touslestr[24].getElementsByTagName("td");

  var slovinfo = []
   for(let i = 1 ; i< slov.length; i++){
       slovinfo[i-1] = slov[i].innerHTML ;
   }
 
   var slovinfoconv = slovinfo.map(function(item){
     return (parseFloat(item.replace(",",".")));
   });
     ////////////////////////////Finland////////////////////////////////////
  var fi = touslestr[25].getElementsByTagName("td");

  var fiinfo = []
   for(let i = 1 ; i< fi.length; i++){
       fiinfo[i-1] = fi[i].innerHTML ;
   }
 
   var fiinfoconv = fiinfo.map(function(item){
     return (parseFloat(item.replace(",",".")));
   });
     ////////////////////////////Sweden////////////////////////////////////
  var sw = touslestr[26].getElementsByTagName("td");

  var swinfo = []
   for(let i = 1 ; i< sw.length; i++){
       swinfo[i-1] = sw[i].innerHTML ;
   }
 
   var swinfoconv = swinfo.map(function(item){
     return (parseFloat(item.replace(",",".")));
   });
  ////////////////////////////Iceland////////////////////////////////////
  var ice = touslestr[27].getElementsByTagName("td");

  var iceinfo = []
   for(let i = 1 ; i< ice.length; i++){
       iceinfo[i-1] = ice[i].innerHTML ;
   }
 
   var iceinfoconv = iceinfo.map(function(item){
     return (parseFloat(item.replace(",",".")));
   });
    ////////////////////////////Leichtenstein////////////////////////////////////
  var leich = touslestr[28].getElementsByTagName("td");

  var leichinfo = []
   for(let i = 1 ; i< leich.length; i++){
       leichinfo[i-1] = leich[i].innerHTML ;
   }
 
   var leichinfoconv = leichinfo.map(function(item){
     return (parseFloat(item.replace(",",".")));
   });
    ////////////////////////////Norway////////////////////////////////////
  var nor = touslestr[29].getElementsByTagName("td");

  var norinfo = []
   for(let i = 1 ; i< nor.length; i++){
       norinfo[i-1] = nor[i].innerHTML ;
   }
 
   var norinfoconv = norinfo.map(function(item){
     return (parseFloat(item.replace(",",".")));
   });
    ////////////////////////////Switzerland////////////////////////////////////
  var swi = touslestr[30].getElementsByTagName("td");

  var swiinfo = []
   for(let i = 1 ; i< swi.length; i++){
       swiinfo[i-1] = swi[i].innerHTML ;
   }
 
   var swiinfoconv = swiinfo.map(function(item){
     return (parseFloat(item.replace(",",".")));
   });

    ////////////////////////////Macedonia////////////////////////////////////
  var mac = touslestr[31].getElementsByTagName("td");

  var macinfo = []
   for(let i = 1 ; i< mac.length; i++){
       macinfo[i-1] = mac[i].innerHTML ;
   }
 
   var macinfoconv = macinfo.map(function(item){
     return (parseFloat(item.replace(",",".")));
   });

    ////////////////////////////Serbia////////////////////////////////////
  var ser = touslestr[32].getElementsByTagName("td");

  var serinfo = []
   for(let i = 1 ; i< ser.length; i++){
       serinfo[i-1] = ser[i].innerHTML ;
   }
 
   var serinfoconv = serinfo.map(function(item){
     return (parseFloat(item.replace(",",".")));
   });

    ////////////////////////////Turkey////////////////////////////////////
  var tur = touslestr[33].getElementsByTagName("td");

  var turinfo = []
   for(let i = 1 ; i< tur.length; i++){
       turinfo[i-1] = tur[i].innerHTML ;
   }
 
   var turinfoconv = turinfo.map(function(item){
     return (parseFloat(item.replace(",",".")));
   });





const graph = new Chart(can,{//creation du graphitque

  data: {
    datasets: [{
        type: 'line',
        label: 'Belgium',
        data: tabinfopaysconvbel
    }, {
        type: 'line',
        label: 'Bulgaria',
        data: tabinfopaysconvbul,
    }, {
        type : "line",
        label : "czech",
        data : tabinfopaysconvczech,
    }, {
      type : "line",
      label : "Denmark",
      data : daninfoconv,
   },{ 
     type : "line",
     label : "Germany",
     data : germinfoconv,
  },{
     type : "line",
     label : "Estonia",
     data : estinfoconv,
  },{
     type : "line",
     label : "Irlande",
     data : irinfoconv,
 },{
    type : "line",
    label : "Greece",
    data : grinfoconv,
 },{
   type : "line",
   label : "Spain",
   data : spinfoconv,
 },{
   type : "line",
   label : "France",
   data : frinfoconv,
 },{
  type : "line",
  label : "Croatia",
  data : crinfoconv,
  },{
    type : "line",
    label : "Italia",
    data : itinfoconv,
  },{
    type : "line",
    label : "Cyprus",
    data : cyinfoconv,
  },{
    type : "line",
    label : "Latvya",
    data : lainfoconv,
  },{
    type : "line",
    label : "Lithunia",
    data : liinfoconv,
  },{
    type : "line",
    label : "Luxembourg",
    data : luinfoconv,
  },{
    type : "line",
    label : "Hungaria",
    data : huinfoconv,
  },{
    type : "line",
    label : "Malte",
    data : mainfoconv,
  },{
    type : "line",
    label : "Netherlands",
    data : neinfoconv,
  },{
    type : "line",
    label : "Austria",
    data : auinfoconv,
  },{
    type : "line",
    label : "Poland",
    data : polinfoconv,
  },{
    type : "line",
    label : "Portugal",
    data : porinfoconv,
  },{
    type : "line",
    label : "Romania",
    data : rominfoconv,
  },{
    type : "line",
    label : "Slovenia",
    data : sloinfoconv,
  },{
    type : "line",
    label : "Slovakia",
    data : slovinfoconv,
  },{
    type : "line",
    label : "Findland",
    data : fiinfoconv,
  },{
    type : "line",
    label : "Sweden",
    data : swinfoconv,
  },{
    type : "line",
    label : "Iceland",
    data : iceinfoconv,
  },{
    type : "line",
    label : "Leichtenstein",
    data : leichinfoconv,
  },{
    type : "line",
    label : "Norway",
    data : norinfoconv,
  },{
    type : "line",
    label : "Switzerland",
    data : swiinfoconv,
  },{
    type : "line",
    label : "Macedonia",
    data : macinfoconv,
  },{
    type : "line",
    label : "Serbia",
    data : serinfoconv,
  },{
    type : "line",
    label : "Turkey",
    data : turinfoconv,
  }                                                                                                                
  ],
    labels: tabannee
},
})

/*****************************************************************************************************************************************/



var t2 = document.getElementById("table2");
var touslestr2 = t2.getElementsByTagName("tr");
//console.log(touslestr2);

var can2 = document.createElement("canvas");
var y = document.createTextNode(can2);
document.getElementById("Homicides").appendChild(can2);

var thannee2 = touslestr2[0].getElementsByTagName("th");
var year1,year2;
year1 = thannee2[2].innerHTML.toString();//recuperer les ranges d'annees et les transformer en string pour les mettre dans les labels
year2 = thannee2[3].innerHTML.toString();
//console.log(year1,year2);

////////////////////////////////////////////////////latvia///////////////////////
var tdlat = touslestr2[1].getElementsByTagName("td");
//console.log(tdlat);
var tdlattab = [];
for (let i=1 ; i<tdlat.length; i++){
  tdlattab[i-1] = tdlat[i].innerHTML;
}
//console.log(tdlattab);

var tdconv = tdlattab.map(function(item){
  return parseInt(item,10);
})
//console.log(tdconv);

////////////////////////////////////////////lithuani//////////////////////
var tdlit = touslestr2[2].getElementsByTagName("td");
console.log(tdlat);
var tdlittab = [];
for (let i=1 ; i<tdlat.length; i++){
  tdlittab[i-1] = tdlit[i].innerHTML;
}
//console.log(tdlittab);

var litconv = tdlittab.map(function(item){
  return parseInt(item,10);
})
//console.log(litconv);
//////////////////////////////////////estonia////////////////////////
var est = touslestr2[3].getElementsByTagName("td");
var esttab = [];
for (let i=1 ; i<est.length; i++){
  esttab[i-1] = est[i].innerHTML;
}
var estconv = esttab.map(function(item){
  return parseInt(item,10);
})
///////////////////////////////////czech///////////////////////////
var cz = touslestr2[4].getElementsByTagName("td");
var cztab = [];
for (let i=1 ; i<cz.length; i++){
  cztab[i-1] = cz[i].innerHTML;
}
var czconv = cztab.map(function(item){
  return parseInt(item,10);
})
///////////////////////////////////poland///////////////////////////
var po = touslestr2[5].getElementsByTagName("td");
var potab = [];
for (let i=1 ; i<po.length; i++){
  potab[i-1] = po[i].innerHTML;
}
var poconv = potab.map(function(item){
  return parseInt(item,10);
})
///////////////////////////////////slovakya///////////////////////////
var sl = touslestr2[6].getElementsByTagName("td");
var sltab = [];
for (let i=1 ; i<sl.length; i++){
  sltab[i-1] = sl[i].innerHTML;
}
var slconv = sltab.map(function(item){
  return parseInt(item,10);
})
///////////////////////////////////hungary///////////////////////////
var hu = touslestr2[7].getElementsByTagName("td");
var hutab = [];
for (let i=1 ; i<hu.length; i++){
  hutab[i-1] = hu[i].innerHTML;
}
var huconv = hutab.map(function(item){
  return parseInt(item,10);
})
///////////////////////////////////england///////////////////////////
var en = touslestr2[8].getElementsByTagName("td");
var entab = [];
for (let i=1 ; i<en.length; i++){
  entab[i-1] = en[i].innerHTML;
}
var enconv = entab.map(function(item){
  return parseInt(item,10);
})
///////////////////////////////////Scotland///////////////////////////
var sc = touslestr2[9].getElementsByTagName("td");
var sctab = [];
for (let i=1 ; i<sc.length; i++){
  sctab[i-1] = sc[i].innerHTML;
}
var scconv = entab.map(function(item){
  return parseInt(item,10);
})
///////////////////////////////////Spain///////////////////////////
var sp = touslestr2[10].getElementsByTagName("td");
var sptab = [];
for (let i=1 ; i<sp.length; i++){
  sptab[i-1] = sp[i].innerHTML;
}
var spconv = entab.map(function(item){
  return parseInt(item,10);
})
///////////////////////////////////Romania///////////////////////////
var ro = touslestr2[11].getElementsByTagName("td");
var rotab = [];
for (let i=1 ; i<ro.length; i++){
  rotab[i-1] = ro[i].innerHTML;
}
var roconv = rotab.map(function(item){
  return parseInt(item,10);
})
///////////////////////////////////Malta///////////////////////////
var ma = touslestr2[12].getElementsByTagName("td");
var matab = [];
for (let i=1 ; i<ma.length; i++){
  matab[i-1] = ma[i].innerHTML;
}
var maconv = matab.map(function(item){
  return parseInt(item,10);
})
///////////////////////////////////Bulgaria///////////////////////////
var bul = touslestr2[13].getElementsByTagName("td");
var bultab = [];
for (let i=1 ; i<bul.length; i++){
  bultab[i-1] = bul[i].innerHTML;
}
var bulconv = bultab.map(function(item){
  return parseInt(item,10);
})
///////////////////////////////////Luxembourg///////////////////////////
var lux = touslestr2[14].getElementsByTagName("td");
var luxtab = [];
for (let i=1 ; i<lux.length; i++){
  luxtab[i-1] = lux[i].innerHTML;
}
var luxconv = luxtab.map(function(item){
  return parseInt(item,10);
})
///////////////////////////////////Portugal///////////////////////////
var por = touslestr2[15].getElementsByTagName("td");
var portab = [];
for (let i=1 ; i<por.length; i++){
  portab[i-1] = por[i].innerHTML;
}
var porconv = portab.map(function(item){
  return parseInt(item,10);
})
///////////////////////////////////Croatie///////////////////////////
var cro = touslestr2[16].getElementsByTagName("td");
var crotab = [];
for (let i=1 ; i<cro.length; i++){
  crotab[i-1] = cro[i].innerHTML;
}
var croconv = crotab.map(function(item){
  return parseInt(item,10);
})

///////////////////////////////////Greece///////////////////////////
var gr = touslestr2[18].getElementsByTagName("td");
var grtab = [];
for (let i=1 ; i<gr.length; i++){
  grtab[i-1] = gr[i].innerHTML;
}
var grconv = grtab.map(function(item){
  return parseInt(item,10);
})
///////////////////////////////////France///////////////////////////
var fra = touslestr2[18].getElementsByTagName("td");
var fratab = [];
for (let i=1 ; i<fra.length; i++){
  fratab[i-1] = fra[i].innerHTML;
}
var fraconv = fratab.map(function(item){
  return parseInt(item,10);
})
///////////////////////////////////Austria///////////////////////////
var aus = touslestr2[19].getElementsByTagName("td");
var austab = [];
for (let i=1 ; i<aus.length; i++){
  austab[i-1] = aus[i].innerHTML;
}
var ausconv = austab.map(function(item){
  return parseInt(item,10);
})
///////////////////////////////////Germany///////////////////////////
var ger = touslestr2[23].getElementsByTagName("td");
var gertab = [];
for (let i=1 ; i<ger.length; i++){
  gertab[i-1] = ger[i].innerHTML;
}
var gerconv = gertab.map(function(item){
  return parseInt(item,10);
})
///////////////////////////////////England///////////////////////////
var eng = touslestr2[24].getElementsByTagName("td");
var engtab = [];
for (let i=1 ; i<eng.length; i++){
  engtab[i-1] = eng[i].innerHTML;
}
var engconv = engtab.map(function(item){
  return parseInt(item,10);
})
///////////////////////////////////Cyprus///////////////////////////
var cyp = touslestr2[25].getElementsByTagName("td");
var cyptab = [];
for (let i=1 ; i<cyp.length; i++){
  cyptab[i-1] = cyp[i].innerHTML;
}
var cypconv = cyptab.map(function(item){
  return parseInt(item,10);
})
///////////////////////////////////Denmark///////////////////////////
var den = touslestr2[26].getElementsByTagName("td");
var dentab = [];
for (let i=1 ; i<den.length; i++){
  dentab[i-1] = den[i].innerHTML;
}
var denconv = dentab.map(function(item){
  return parseInt(item,10);
})
///////////////////////////////////Sweden///////////////////////////
var swe = touslestr2[27].getElementsByTagName("td");
var swetab = [];
for (let i=1 ; i<swe.length; i++){
  swetab[i-1] = swe[i].innerHTML;
}
var swconv = swetab.map(function(item){
  return parseInt(item,10);
})
///////////////////////////////////Slovenia///////////////////////////
var slove = touslestr2[28].getElementsByTagName("td");
var slotab = [];
for (let i=1 ; i<slove.length; i++){
  slotab[i-1] = slove[i].innerHTML;
}
var sloconv = slotab.map(function(item){
  return parseInt(item,10);
})




var data ={
   labels:  [year1,year2],
   datasets: [
    { type : "bar",
      label : "Latvia",
      data : tdconv,
    },{ 
     type : "bar",
     label : "Lithuani",
     data : litconv,
   },{ 
    type : "bar",
    label : "Estonia",
    data : estconv,
  },{ 
    type : "bar",
    label : "Czech",
    data : czconv,
  },{ 
    type : "bar",
    label : "Poland",
    data : poconv,
  },{ 
    type : "bar",
    label : "Slovakia",
    data : slconv,
  },{ 
    type : "bar",
    label : "Hungary",
    data : huconv,
  },{ 
    type : "bar",
    label : "England",
    data : enconv,
  },{ 
    type : "bar",
    label : "Scotlan",
    data : scconv,
  },{ 
    type : "bar",
    label : "Spain",
    data : spconv,
  },{ 
    type : "bar",
    label : "Romania",
    data : roconv,
  },{ 
    type : "bar",
    label : "Malta",
    data : maconv,
  },{ 
    type : "bar",
    label : "Bulgaria",
    data : bulconv,
  },{ 
    type : "bar",
    label : "Luxembourg",
    data : luxconv,
  },{ 
    type : "bar",
    label : "Portugal",
    data : porconv,
  },{ 
    type : "bar",
    label : "Croatie",
    data : croconv,
  },{
  
    type : "bar",
    label : "Greece",
    data : grconv,
  },{ 
    type : "bar",
    label : "France",
    data : fraconv,
  },{ 
    type : "bar",
    label : "Austria",
    data : ausconv,
  },{ 
    type : "bar",
    label : "Germany",
    data : gerconv,
  },{ 
    type : "bar",
    label : "England",
    data : engconv,
  },{ 
    type : "bar",
    label : "Cyprus",
    data : cypconv,
  },{ 
    type : "bar",
    label : ">Denmark",
    data : denconv,
  },{ 
    type : "bar",
    label : "Sweden",
    data : swconv,
  },{ 
    type : "bar",
    label : "Slovenia",
    data : sloconv,
  }



   ]
}

const graph1 = new Chart (can2,{ //pour 2007-2009 et 2010-2012 
  type : "bar",
  data : data ,
  options : {
    scales : {
      xAxes : [{
        ticks : {
          callback : function(value,index,values) {
            if(value===2007){
              return '2007-2009';
            } else if (value === 2010){
              return '2010-2012';
            }
          }
        }
      }]
    }
  }})

  /********************************************************************************************************************************/
  

  var can3 = document.createElement("canvas");
  var z = document.createTextNode(can3);
  document.getElementById("firstHeading").appendChild(can3);

  let axeX = [];
  let axeY = [];

  const graph3 = new Chart(can3, {
    type: "line",
    data: {
        labels: [],
        datasets: [{
            label: "My Data",
            data: axeY
        }]
    },
    options: {
        // other options for the chart
    }
});

setInterval(() => {
  fetchData();

  
}, 1000);

// await fetchData();


async function fetchData (){
  var url = "https://canvasjs.com/services/data/datapoints.php";
  var response = await fetch(url, {cache:"no-store"});
  var data = await response.json();
  
  // console.log(data);
  for(let i = 0; i<data.length; i++)
  {
    axeX[i] = data[i][0];
    axeY[i] = data[i][1];
  }

 
  graph3.data.labels = axeX;
  graph3.update();
  console.log(axeX);
  console.log(axeY);
  return data;
}

