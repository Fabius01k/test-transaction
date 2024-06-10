function parseTransactions(text) {
    const lines = text.split('\n').filter(line => line.trim() !== '');
    const transactions = [];

    lines.forEach((line, index) => {
        const parts = line.split(/\s+/).filter(part => part !== '');
        if (parts.length >= 4) {
            const id = parseInt(parts[0]);
            const user = parts.slice(1, parts.length - 3).join(' ');
            const balance = parseFloat(parts[parts.length - 3].replace(/[^0-9.-]/g, ''));
            const transaction = parseFloat(parts[parts.length - 1].replace(/[^0-9.-]/g, ''));

            transactions.push({ id, user, balance, transaction });
        } else {

        }
    });

    return transactions;
}

const text = "1\tHeath Ortega\t3 147,71р.\t  \t-45.80 р.\n" +
    "2\tMoran Hunt\t2,490.27 р.\t-4241.35руб\t\n" +
    "3\tLupe Reilly\t1,067.14 р.\t906.5 руб.\t \n" +
    "4\tDixon Farrell\t3´913.50\t\t-498.95 р.\n" +
    "5\tCathryn Sullivan\t3,728.95 р.\t-2´974.62 р.\t \n" +
    "6\tDorothea Merritt\t3,952.81руб\t32.60р.\t\n" +
    "7\tBettie Hess\t3 971,13руб\t-2,283.48руб\t\n" +
    "8\tHelene Dorsey\t1,322.29\t \t-2 718.57 р.\n" +
    "9\tLucile Mcleod\t1 772,23\t  \t353.25 р.\n" +
    "10\tKoch Stephens\t3 661.46руб\t172.53 р.\t \n" +
    "11\tMeyer Duran\t3,843.24\t\t-702.75руб\n" +
    "12\tGail Wiggins\t3 933,94р.\t \t1 031.53р.\n" +
    "13\tLynnette Pacheco\t3 833.73\t-3,028.09 р.\t  \n" +
    "14\tBrandy Santos\t1 335,69\t \t-373.87руб\n" +
    "15\tBooker Dale\t2 642,06р.\t-4´120.19 р.\t\n" +
    "16\tHudson Nolan\t2125.18руб\t \t-1 364,05р.\n" +
    "17\tKatie Ellis\t2 500,00 руб.\t \t2 375,10руб\n" +
    "18\tDionne Mills\t3 591.03р.\t \t1 031,25р.\n" +
    "19\tOneill Briggs\t3,421.10р.\t2 582.63 р.\t \n" +
    "20\tLloyd Allison\t3 708,99р.\t-2 823,92 руб.\t \n" +
    "21\tLatoya Klein\t2,469.63р.\t-796,56руб\t\n" +
    "22\tLiz Valencia\t1 051.56р.\t-510.58\t \n" +
    "23\tDudley Hopkins\t2,712.69руб\t2 996.55 руб.\t \n" +
    "24\tDuran Ewing\t1,239.42р.\t-952,69\t \n" +
    "25\tButler Shepherd\t2,730.74руб\t-4,495.75 р.\t  \n" +
    "26\tWiggins Mcfadden\t3,609.69руб\t \t1 370,60руб\n" +
    "27\tWyatt Conway\t2 376,19\t-2315.96\t \n" +
    "28\tAdriana Boyd\t2 275.31р.\t-3 221,15р.\t \n" +
    "29\tKathy Gallegos\t2´355.85 р.\t\t-460.20\n" +
    "30\tRussell Foley\t3 379,23руб\t-4 301,54руб\t \n" +
    "31\tPate Garza\t1,854.38руб\t\t671,54р.\n" +
    "32\tBoone Mejia\t2,622.37руб\t1,016.84руб\t \n" +
    "33\tShauna Farmer\t3 655.57р.\t \t-4 655,94 р.\n" +
    "34\tWashington Cook\t3 587.32 руб.\t\t-1 917,32руб\n" +
    "35\tHarrison Ingram\t1 265,76руб\t2 443.55р.\t \n" +
    "36\tLucas Donovan\t2,579.85 р.\t-2 994.19р.\t \n" +
    "37\tCorina Cooley\t2 137.07р.\t \t-2 052,72 р.\n" +
    "38\tMelanie Warren\t3 331,65\t837.57\t  \n" +
    "39\tMccoy Stone\t2 793.20р.\t \t-3729.94 р.\n" +
    "40\tVillarreal Everett\t2 747.32\t1,139.09\t\n" +
    "41\tWalls Drake\t3615.39руб\t-2 139.30 р.\t\n" +
    "42\tEliza Gordon\t2´837.13руб\t-3108.89р.\t \n" +
    "43\tStacie Haley\t2 274,87р.\t798.09 р.\t \n" +
    "44\tElliott Jones\t3,573.79руб\t541,39р.\t \n" +
    "45\tLe Reeves\t2 584.92р.\t-455.23руб\t \n" +
    "46\tViolet Huber\t3 940,70руб\t-3 232.17р.\t \n" +
    "47\tPenelope Buckley\t2 473,08\t2 491,82\t \n" +
    "48\tMalone Odom\t1,146.60 р.\t-3 345,76р.\t \n" +
    "49\tDana May\t2 724.28\t \t-3 071,77 р.\n" +
    "50\tWhitney Noble\t1,201.44руб\t1 277,99р.\t  \n" +
    "51\tJenny Rodgers\t1´899.40 руб.\t-3,377.76 р.\t  \n" +
    "52\tLatasha Barnett\t1 640.97руб\t237,74р.\t \n" +
    "53\tNannie Gilbert\t1 577,46руб\t-1 298,83руб\t \n" +
    "54\tJuliette Bates\t1 750.98р.\t\t1 258,49 руб.\n" +
    "55\tTucker Kennedy\t2´536.06руб\t\t-2,335.94 р.\n" +
    "56\tDeloris Malone\t3 187,17руб\t907,92р.\t \n" +
    "57\tMichael Gonzales\t3 981,87 руб.\t2,312.80р.\t \n" +
    "58\tStaci Gaines\t3679.64руб\t-1,245.56р.\t \n" +
    "59\tHyde Hickman\t1,587.72 р.\t \t840.20 р.\n" +
    "60\tJones Levy\t1 599,95\t2,675.53\t \n" +
    "61\tCrosby Clayton\t1,213.84 р.\t \t2 995,67 р.\n" +
    "62\tRebekah Chapman\t2 426,13 р.\t-94.81р.\t \n" +
    "63\tEmily Brewer\t3 034,44р.\t-1 986.43 р.\t \n" +
    "64\tTabitha Waller\t1221.55 руб.\t2´407.20 р.\t\n" +
    "65\tPatty Sexton\t2 070.50 р.\t1 123,39 руб.\t\n" +
    "66\tThelma Roberson\t3,733.81руб\t-4´851.64 руб.\t \n" +
    "67\tCherry Stokes\t1601.02\t-279.99\t  \n" +
    "68\tLindsey Martin\t1´297.25\t-2 585,91руб\t  \n" +
    "69\tNettie Steele\t3 432,23 руб.\t-2 351.27р.\t\n" +
    "70\tGray Wilkins\t1,737.26 р.\t \t-1 262,54\n" +
    "71\tBeverly Patterson\t3749.23руб\t-3,144.51руб\t \n" +
    "72\tVance Atkinson\t3 400,99руб\t \t2 922.92\n" +
    "73\tWheeler Underwood\t3 338,42 р.\t2 530.05р.\t\n" +
    "74\tLolita Stevens\t2683.35 р.\t314.77\t\n" +
    "75\tValeria Howell\t1799.78\t-4,466.43руб\t\n" +
    "76\tSchneider Petersen\t3,323.37р.\t\t1 855.18 р.\n" +
    "77\tLeach Hanson\t2 641.56 р.\t2,461.75\t\n" +
    "78\tTorres Mcknight\t2,085.74 р.\t320.18руб\t\n" +
    "79\tLelia Browning\t2 002,93 руб.\t\t2,966.32 р.\n" +
    "80\tChristensen Matthews\t3445.06 р.\t-3095.72руб\t  \n" +
    "81\tJannie Spence\t1 160,83руб\t1 433.59р.\t\n" +
    "82\tCollier Baldwin\t3 465,15р.\t \t-2 529.38\n" +
    "83\tRuthie English\t1 953.00руб\t-3´808.62руб\t  \n" +
    "84\tNunez Singleton\t3 984,83руб\t-411.29 р.\t \n" +
    "85\tCarolina Randolph\t3 532.45р.\t \t-2´067.83р.\n" +
    "86\tMyers Leonard\t1 542,20руб\t\t1´935.51\n" +
    "87\tDunlap Reynolds\t2 272,46р.\t-347,18руб\t \n" +
    "88\tHiggins Colon\t1,086.94руб\t1,988.58р.\t\n" +
    "89\tJoy Conley\t3 869,75р.\t\t-2 198.29 руб.\n" +
    "90\tLott Burt\t1 921,45р.\t752,55р.\t \n" +
    "91\tSavage Britt\t2,789.75руб\t-3´302.66руб\t \n" +
    "92\tWallace Lawson\t2 846,17руб\t-4 808,24 р.\t\n" +
    "93\tDianna Bird\t1757руб\t \t1,924.04руб\n" +
    "94\tShelby Lewis\t2 974,81\t-712.56\t \n" +
    "95\tJulia Burch\t3,092.77руб\t-4 781,91\t  \n" +
    "96\tStanton Shaffer\t3,765.41р.\t\t1 239,94 р.\n" +
    "97\tTisha Page\t1 819,19\t-2174.17руб\t \n" +
    "98\tChristine Rivers\t1 102,62руб\t \t-2 848,55руб\n" +
    "99\tClaudia Becker\t3,402.95руб\t \t-349.49\n" +
    "100\tRoy Dotson\t3 198,46\t1,725.29 руб.\t  \n" +
    "101\tAtkinson Navarro\t1,437.79руб\t1,811.91 руб.\t\n" +
    "102\tBeryl Bailey\t2,118.70р.\t-3,545.20 р.\t\n" +
    "103\tLydia Phelps\t2,414.51р.\t \t2,777.30р.\n" +
    "104\tMarta Conner\t2475.34\t \t-1,520.90руб\n" +
    "105\tWise Benson\t2,267.76р.\t-710,30руб\t \n" +
    "106\tZimmerman Mcfarland\t3 296,78\t-4 111.37\t \n" +
    "107\tCharlene Nieves\t1,015.35руб\t460.36\t \n" +
    "108\tHolder Cummings\t2,504.90руб\t1 038,88р.\t \n" +
    "109\tCherry Parker\t3 610,37р.\t-3 289,93\t  \n" +
    "110\tGabriela Houston\t3,893.59руб\t \t885,41\n" +
    "111\tKrista Berry\t1580.24\t-88.76руб\t\n" +
    "112\tCalderon Stark\t2885.35р.\t\t-1 604,19р.\n" +
    "113\tAlfreda Adams\t3 515,84 руб.\t1,548.55\t \n" +
    "114\tLisa Jarvis\t1 786,09руб\t-1 840,79руб\t \n" +
    "115\tNoelle Hayden\t3 456,28р.\t843.89 руб.\t \n" +
    "116\tAllie White\t3,474.01 руб.\t28.33р.\t\n" +
    "117\tBetty William\t3 984,47 р.\t-1,127.13 р.\t \n" +
    "118\tRegina Acevedo\t3 716.41 р.\t \t-990,79 руб.\n" +
    "119\tMarie Stuart\t1957.66\t-2,020.77 руб.\t\n" +
    "120\tDavenport Travis\t2586.23р.\t\t71.56руб\n" +
    "121\tRoss Copeland\t1 081,39\t2 503,15руб\t \n" +
    "122\tBarron Berger\t1 971.20руб\t \t-3 428.61\n" +
    "123\tAugusta Lucas\t2,462.49\t918.37 р.\t \n" +
    "124\tEaton Foreman\t1 950.17руб\t1,782.08р.\t \n" +
    "125\tKristi Gill\t3´708.66 руб.\t\t-518,86руб\n" +
    "126\tUnderwood Giles\t3,993.31р.\t\t-2,603.06 р.\n" +
    "127\tSampson Bell\t3,928.01 р.\t2 103.28руб\t \n" +
    "128\tGarza Rhodes\t3 964,16руб\t566.52р.\t\n" +
    "129\tNanette Tanner\t1,426.18 р.\t\t2 336.05р.\n" +
    "130\tCarney Turner\t2 575.03\t-1 329,34 р.\t\n" +
    "131\tMaribel Mcclain\t3296.04руб\t-1,380.65руб\t  \n" +
    "132\tNadia Vazquez\t3´378.49\t \t-1 952,85руб\n" +
    "133\tKeller Ramos\t3,309.65руб\t-2 282,17 р.\t \n" +
    "134\tHodge Key\t2 387,93 р.\t-3,280.45\t  \n" +
    "135\tBuckner Forbes\t3 290.88р.\t-4 223,73р.\t \n" +
    "136\tStuart Goff\t1,649.53 руб.\t161.77\t\n" +
    "137\tSchroeder Velazquez\t1´878.09р.\t\t2 281,74руб\n" +
    "138\tEdith Hodges\t3,518.32\t\t-1 052,18 руб.\n" +
    "139\tDickerson Mitchell\t1 378.76\t\t-392,93 р.\n" +
    "140\tInez Wilkinson\t1,947.08 р.\t-4,050.27 руб.\t \n" +
    "141\tHazel Snyder\t3 236,56 руб.\t-4 164.68руб\t \n" +
    "142\tJosie Hartman\t1´611.07р.\t-1,056.35руб\t \n" +
    "143\tBeverley Murray\t3,375.67\t308.28 р.\t\n" +
    "144\tLilly Erickson\t2,168.00р.\t\t-1 681,14р.\n" +
    "145\tDebora Livingston\t1,930.58\t\t-1 347.07руб\n" +
    "146\tNorton Bush\t3 387.46\t \t2,270.95\n" +
    "147\tJanie Warner\t2,737.04руб\t \t445.44 р.\n" +
    "148\tJanette Griffith\t3876.48руб\t-4 011,10 р.\t \n" +
    "149\tJulie Stein\t1,608.16руб\t1 934.20 р.\t \n" +
    "150\tArnold Head\t3 769,84р.\t-1 364.22руб\t \n" +
    "151\tFoster Larson\t1,907.12 р.\t-4 786.96\t\n" +
    "152\tTania Parsons\t2553.4 р.\t-2 061.03руб\t\n" +
    "153\tBanks Wise\t1144.11руб\t-4 565,42р.\t \n" +
    "154\tGeorgina Gibson\t3890.52\t-2,651.79 р.\t\n" +
    "155\tIrwin Franklin\t1,120.06р.\t\t393,42р.\n" +
    "156\tWong Allen\t3,351.20руб\t-4 775,11\t\n" +
    "157\tLiliana Cole\t1 861,37р.\t-1 294,11\t \n" +
    "158\tKelley Hoffman\t2 204,29\t-4´716.97руб\t \n" +
    "159\tAlissa Logan\t3 568.73руб\t-3 650,71 р.\t  \n" +
    "160\tRuiz Kramer\t1´811.23руб\t\t1 231,28\n" +
    "161\tAcevedo Burks\t2788.64руб\t-1 144,35руб\t\n" +
    "162\tOneal Silva\t2 226,56\t1 854,09 р.\t  \n" +
    "163\tMarylou Simon\t2 506.04р.\t \t851.57р.\n" +
    "164\tWilliam Holloway\t2 666.52р.\t-2´255.95руб\t  \n" +
    "165\tCatalina Campbell\t2 942,44\t \t-3 447,33\n" +
    "166\tTodd Wright\t2 125,97руб\t\t-2,581.00руб\n" +
    "167\tMichele Hester\t1,842.38 руб.\t-635.46р.\t \n" +
    "168\tOdessa Curry\t3 140,47руб\t2 756,67руб\t \n" +
    "169\tRatliff Sheppard\t1,793.28\t \t-1 514.10р.\n" +
    "170\tLula York\t3,018.76 р.\t2 671,81руб\t \n" +
    "171\tGoff Moran\t1´032.76р.\t570.17 руб.\t \n" +
    "172\tMaricela Bartlett\t2 759,93руб\t \t1,104.73 р.\n" +
    "173\tParrish Chandler\t2 756,30\t \t583.18руб\n" +
    "174\tSantos Cash\t3,015.28\t-1 793,54руб\t \n" +
    "175\tNorris Valdez\t1530.82р.\t-2770.88\t\n" +
    "176\tDotson Morrison\t1,671.71 р.\t-3 724,18руб\t\n" +
    "177\tFern Martinez\t3 711.51р.\t2,392.20 р.\t \n" +
    "178\tBrandie Williamson\t2,796.98руб\t-2,395.63руб\t \n" +
    "179\tGamble Sharp\t2,356.26 р.\t2 504.15руб\t \n" +
    "180\tDale Guthrie\t1,242.00руб\t2 697,33 р.\t \n" +
    "181\tDianne Davenport\t3 872,14\t-290,32 р.\t\n" +
    "182\tGarrett Conrad\t3 580,77 руб.\t \t1 839,67р.\n" +
    "183\tLou Hodge\t2,397.31\t-1 415,33р.\t \n" +
    "184\tAvis Duncan\t3,668.63р.\t-3,063.55руб\t \n" +
    "185\tMerrill Mann\t2 568,85руб\t-1 901.00 руб.\t \n" +
    "186\tPearson Rush\t3,966.70руб\t1942.19руб\t \n" +
    "187\tJanine Pruitt\t2,168.00руб\t-1 021,33руб\t  \n" +
    "188\tLucinda Patel\t3 052.55\t544,36 р.\t \n" +
    "189\tGross Bryan\t3 272,89 р.\t\t-4 237.19р.\n" +
    "190\tIsabelle Robbins\t3 935,31руб\t \t-1 414,12 р.\n" +
    "191\tAlston Beasley\t2 586.04\t\t1504.14р.\n" +
    "192\tMelendez Perry\t3,717.18\t\t1 313,91р.\n" +
    "193\tCastillo Ruiz\t3 827,20руб\t\t2,205.85р.\n" +
    "194\tKarina Cantrell\t3 430.73 руб.\t \t26,55руб\n" +
    "195\tFischer Madden\t1,556.42\t2 261.81руб\t\n" +
    "196\tLoraine Villarreal\t3,850.25руб\t-4115.17\t\n" +
    "197\tEve Ryan\t1,897.56 р.\t\t87,82руб\n" +
    "198\tBranch Brooks\t3´514.35руб\t2 169.42 руб.\t \n" +
    "199\tMayo Schmidt\t2 741,69руб\t  \t-4,026.39 руб.\n" +
    "200\tBaker Mathis\t3 528.78р.\t\t-7.70р.\n" +
    "201\tSofia Mcintosh\t1,550.20\t-2,757.63 р.\t\n" +
    "202\tAngelita Guerra\t2,110.04руб\t  \t-4 300,27руб\n" +
    "203\tChristian Blackwell\t1 035,58\t2205.46\t  \n" +
    "204\tNatasha Bauer\t3 436,34 р.\t915.68руб\t  \n" +
    "205\tBaldwin Chang\t2 252,45руб\t-3,735.23 руб.\t \n" +
    "206\tGay Delacruz\t3 877,47руб\t\t-3,969.10руб\n" +
    "207\tWoodward Kim\t1 945,09руб\t2 618.34р.\t \n" +
    "208\tCannon Lang\t3 512,35р.\t-525,24\t \n" +
    "209\tMadelyn Sherman\t1 081.24руб\t\t-3,341.46 р.\n" +
    "210\tDominique Good\t2 228.74\t \t-332,54\n" +
    "211\tAbigail Manning\t2,703.10руб\t \t-4 102,24 р.\n" +
    "212\tHancock Cross\t1071.41руб\t-2 912.42\t \n" +
    "213\tAddie Mason\t2´577.15руб\t-54.14р.\t\n" +
    "214\tLilia Hooper\t2 996,16руб\t \t-1´324.34руб\n" +
    "215\tRiggs Pratt\t2,672.24р.\t  \t515.82руб\n" +
    "216\tMarsh Gomez\t1 164,62руб\t-2´743.91р.\t\n" +
    "217\tSaunders Lyons\t2 156.51руб\t\t-2,709.08руб\n" +
    "218\tAlyce Frederick\t3 132.54руб\t1652.97р.\t  \n" +
    "219\tNorman Oneil\t3403.76р.\t-830.88р.\t \n" +
    "220\tDarla Hines\t3,636.56 руб.\t-1 389,51руб\t \n" +
    "221\tWanda Mooney\t2,608.84руб\t2 605,00р.\t \n" +
    "222\tCombs Arnold\t3 014,49\t2,400.36руб\t \n" +
    "223\tMckinney Randall\t3,538.43руб\t-4 434,78 руб.\t\n" +
    "224\tDouglas Joyner\t3 998,81руб\t-3,965.41руб\t \n" +
    "225\tBuchanan Fox\t2568.46руб\t-881,49 руб.\t\n" +
    "226\tMacias Murphy\t3,117.98\t \t1 890,90руб\n" +
    "227\tCurry Mcdonald\t2,461.03 р.\t\t207.46р.\n" +
    "228\tVargas Roy\t3,455.24 руб.\t854.97\t\n" +
    "229\tFitzgerald Middleton\t3´612.31 руб.\t \t1´051.86руб\n" +
    "230\tRios Gregory\t1 408,08руб\t1´091.02р.\t \n" +
    "231\tHernandez Justice\t2 532,80р.\t1´420.46\t\n" +
    "232\tPacheco Fitzgerald\t1,982.06р.\t \t1,597.55руб\n" +
    "233\tRoslyn Cotton\t2 496,48руб\t-961.67руб\t \n" +
    "234\tHayden Knox\t2,838.81 руб.\t-3,958.62р.\t\n" +
    "235\tMcneil Lopez\t1,230.96\t\t-880.85руб\n" +
    "236\tConsuelo Harrison\t3,416.24руб\t-156,11р.\t \n" +
    "237\tBecky Chan\t2,347.69 р.\t-4,130.85\t\n" +
    "238\tMeghan Johnston\t2435.48руб\t \t-4 523.16 р.\n" +
    "239\tRoman Morse\t2 134,54 руб.\t-4120.38 р.\t  \n" +
    "240\tBillie Leach\t3 926.87руб\t \t-1 996,20р.\n" +
    "241\tJaime Carson\t2 648,75\t\t2 883,84р.\n" +
    "242\tRice Carney\t2 866,92руб\t \t1,673.79 р.\n" +
    "243\tImogene Gilliam\t3,741.78р.\t-1 039,45\t \n" +
    "244\tFrost Hancock\t2,449.48руб\t183,94р.\t \n" +
    "245\tRosemarie Mendoza\t2,213.46руб\t1,078.32р.\t \n" +
    "246\tFlorine Rollins\t2,041.12р.\t-1 500,85руб\t\n" +
    "247\tSawyer Shields\t1 425.86руб\t-4,239.75 руб.\t \n" +
    "248\tWiley Harding\t1´129.11 р.\t-2´364.03р.\t \n" +
    "249\tWillie Hale\t3,767.12руб\t1 103.22руб\t \n" +
    "250\tArline Floyd\t3 036,19р.\t1 986,32р.\t \n" +
    "251\tMorales Vinson\t2,623.10руб\t-3,367.64 руб.\t \n" +
    "252\tRomero Crane\t1 824,16руб\t \t200.63руб\n" +
    "253\tBerta Fowler\t2,174.00 р.\t-2 327.02 руб.\t \n" +
    "254\tDarlene Kidd\t3 696.99 р.\t-3,892.64\t\n" +
    "255\tHenry Fields\t2 078,27\t \t-3 270.56руб\n" +
    "256\tStanley Perez\t2040.05р.\t1 688.23 р.\t \n" +
    "257\tAlice Franks\t1481руб\t1 593,43руб\t \n" +
    "258\tDaniels Vaughan\t3 713.49руб\t-2 593,02 р.\t \n" +
    "259\tBarnett Gonzalez\t2´471.66\t  \t-2 617.90 р.\n" +
    "260\tGwendolyn Todd\t2 922,07руб\t2 643,62руб\t \n" +
    "261\tEddie Mccarty\t1,407.56\t\t1,497.05\n" +
    "262\tLawanda Torres\t3451.07руб\t \t2,425.55р.\n" +
    "263\tFarrell Langley\t2,132.21\t-4069.75\t\n" +
    "264\tTiffany Green\t1 068,35руб\t-3765.51\t\n" +
    "265\tFrieda Moses\t2 284,39р.\t\t-2 428,64р.\n" +
    "266\tLawrence Hood\t2 967,26 р.\t1 308,18р.\t\n" +
    "267\tBernard Lowery\t2193.74 руб.\t-4 695,69р.\t\n" +
    "268\tAyers Kelly\t1 260.19 р.\t-3´183.13руб\t \n" +
    "269\tClay Ballard\t3´829.17руб\t2´375.30\t\n" +
    "270\tMcguire Hubbard\t3 430.42руб\t1 566.99руб\t\n" +
    "271\tFrancis Blanchard\t1 056,09руб\t-2 736,19\t\n" +
    "272\tDenise Fuentes\t3 721,48руб\t\t-427.99руб\n" +
    "273\tCampbell Calhoun\t3,007.27\t236,76руб\t \n" +
    "274\tTricia Garrett\t2 761,11руб\t2 834,41 р.\t \n" +
    "275\tBarlow Michael\t1 482.94руб\t-2,357.92\t \n" +
    "276\tYvette Ward\t3´237.81 р.\t-4´834.27\t  \n" +
    "277\tGale Weiss\t1 310.55руб\t \t-1 622,11руб\n" +
    "278\tBryant Horne\t3´942.22\t-2,792.60руб\t \n" +
    "279\tSloan Francis\t1 805,59руб\t-48,16 руб.\t\n" +
    "280\tVasquez Curtis\t2 183,41\t-4,787.07р.\t \n" +
    "281\tStafford Patrick\t1´189.17\t-2049.66\t \n" +
    "282\tNatalia Chambers\t2,424.91руб\t2 301,88руб\t \n" +
    "283\tAlba Hopper\t1 799,28 руб.\t \t-2,242.66 р.\n" +
    "284\tMelba Owens\t2,952.80руб\t-3,224.13 руб.\t\n" +
    "285\tCook Hyde\t2,392.71р.\t\t617.80руб\n" +
    "286\tBrenda Holman\t3,171.40р.\t-1,127.03руб\t\n" +
    "287\tGinger Carey\t3 429,12 р.\t \t-4 308,31р.\n" +
    "288\tLopez Brown\t2,002.93руб\t-3 290,89руб\t\n" +
    "289\tBlackburn Moreno\t2,763.54 руб.\t\t-836.05\n" +
    "290\tJeannie Barlow\t1,633.80 р.\t \t85.55руб\n" +
    "291\tYolanda Cote\t2 262,87р.\t  \t1,685.01 р.\n" +
    "292\tAlison Orr\t1,891.18руб\t-1,737.95руб\t\n" +
    "293\tColon Mcdaniel\t2,965.24руб\t \t-3 075.53 р.\n" +
    "294\tGolden Mcconnell\t3 235.65 руб.\t  \t2 542.99р.\n" +
    "295\tChris Mckenzie\t1´334.83руб\t-3 859,04р.\t \n" +
    "296\tEthel Walls\t3,814.62руб\t\t-1,129.78руб\n" +
    "297\tArlene Pierce\t1 065.41р.\t-3 364.10\t \n" +
    "298\tDonna Gould\t3 622,35р.\t-2 016.45руб\t\n" +
    "299\tMiranda Nichols\t3 136,91 руб.\t \t733.11р.\n" +
    "300\tBrown Maxwell\t1372.05р.\t-4,439.76 р.\t \n" +
    "301\tMosley Lloyd\t2 479.37р.\t-1 514,03 руб.\t \n" +
    "302\tMatthews Carr\t2995.64р.\t-1´709.40\t\n" +
    "303\tGuzman Sargent\t1,325.16 р.\t2,598.54\t \n" +
    "304\tYesenia Christian\t1 035,58руб\t-105.72 р.\t \n" +
    "305\tMccullough James\t3,245.36руб\t-765.46р.\t \n" +
    "306\tPena Woodard\t2,633.94 р.\t\t269.70 руб.\n" +
    "307\tMaritza Kline\t1,721.88\t \t-4 817.05\n" +
    "308\tSocorro Myers\t2,171.43 р.\t-4 106,20руб\t \n" +
    "309\tGuerrero Pate\t3906.37р.\t2656.17руб\t \n" +
    "310\tMercer Mccormick\t2,188.00 р.\t\t-4,854.73 руб.\n" +
    "311\tBurris Moody\t1,964.80р.\t1,192.82\t\n" +
    "312\tHeather Luna\t3 367,38р.\t-455.55руб\t \n" +
    "313\tAlthea Dickerson\t3 048,26 руб.\t1 069.93руб\t \n" +
    "314\tMayer Wallace\t2779.22 р.\t1 834.38 р.\t \n" +
    "315\tAdkins Diaz\t1 589,96\t\t2 351.21\n" +
    "316\tRichmond Workman\t2662.71 р.\t \t-510.19\n" +
    "317\tLilian Rojas\t3,439.67 р.\t2,662.64 р.\t \n" +
    "318\tKent Mckinney\t2 547,00р.\t-1 356.66руб\t \n" +
    "319\tCollins Goodwin\t3,175.47руб\t-3´338.62руб\t\n" +
    "320\tErika Sanford\t2 668,25руб\t \t-3344.98руб\n" +
    "321\tMcbride Ellison\t2,406.08р.\t-2,854.03\t \n" +
    "322\tMayra Shaw\t1,574.05р.\t \t-1,173.74р.\n" +
    "323\tJerri Lara\t2,321.66 руб.\t \t-4 851.58\n" +
    "324\tHansen Hogan\t2 022.03 р.\t-501.11руб\t\n" +
    "325\tJeanine Casey\t1841.39р.\t\t487.21 р.\n" +
    "326\tHolmes Thompson\t1,763.21руб\t-2,927.68р.\t\n" +
    "327\tYoung Irwin\t2090.57 руб.\t\t-126.62 руб.\n" +
    "328\tDolores Gates\t3 788,75\t  \t-404.87 р.\n" +
    "329\tMoreno Hunter\t3,505.96 руб.\t \t-3´055.10руб\n" +
    "330\tOchoa Padilla\t3,754.94\t \t-1,342.23руб\n" +
    "331\tPeggy Gentry\t2842.36р.\t-1,647.99 руб.\t \n" +
    "332\tGeraldine Watson\t3 091,05 руб.\t-1,725.81р.\t\n" +
    "333\tRoxanne Hardin\t3,370.37\t\t-1699.26\n" +
    "334\tEugenia Larsen\t2 265.78руб\t \t1,133.19\n" +
    "335\tShana Armstrong\t2´286.52 р.\t-3 852,76руб\t \n" +
    "336\tCaitlin Bernard\t3,317.82руб\t-1434.63\t\n" +
    "337\tFanny Holmes\t1,525.84 р.\t2,001.59руб\t \n" +
    "338\tMiles Harrell\t1,836.74р.\t \t-3 743.85 р.\n" +
    "339\tTamika Witt\t3 942,03\t-278.10\t \n" +
    "340\tNell Rios\t1 040,26руб\t \t2906.05 руб.\n" +
    "341\tParks Bishop\t1,946.00руб\t \t-4´022.70руб\n" +
    "342\tKane Harmon\t1 041,11р.\t\t-3 801,92руб\n" +
    "343\tMisty Dejesus\t2 166,15\t-2 545.02 руб.\t\n" +
    "344\tBarry Reid\t2 254,74руб\t-2500.67\t \n" +
    "345\tPatel Maldonado\t1 966.85р.\t-3 644,14 р.\t\n" +
    "346\tGay Farley\t1 477,68\t \t33.55\n" +
    "347\tInes Hansen\t3 145,00 р.\t \t2 897.45р.\n" +
    "348\tDeleon Roach\t2,860.71руб\t2 461.72 р.\t\n" +
    "349\tIrma Austin\t2479.97\t \t1,687.76 руб.\n" +
    "350\tVaughan Barton\t1,489.06\t1,192.18\t \n" +
    "351\tCarol Blair\t1 649.98 руб.\t-2 511,81руб\t \n" +
    "352\tStephens Evans\t1 374,90руб\t\t1406.52 руб.\n" +
    "353\tTeri Estes\t3660.7р.\t-2 761.83руб\t \n" +
    "354\tLuisa Whitehead\t2 884,15руб\t\t1 359,81 р.\n" +
    "355\tEstes Slater\t2 302.18р.\t244.86 р.\t\n" +
    "356\tBailey Rice\t3 948,99руб\t-3,327.00руб\t \n" +
    "357\tHope Wooten\t2,263.00\t-1´708.34 руб.\t \n" +
    "358\tLesley Baird\t3´557.07 руб.\t2028.8руб\t  \n" +
    "359\tGentry Contreras\t3 851,13руб\t-4,987.43руб\t\n" +
    "360\tWhitehead Morris\t2,306.18р.\t \t2,551.22 р.\n" +
    "361\tNorma House\t3´460.81р.\t-4 969.65руб\t\n" +
    "362\tViola Boyer\t3 670.63руб\t-1,893.42 руб.\t\n" +
    "363\tRandi Kaufman\t1 352.58р.\t-1289.76р.\t  \n" +
    "364\tGordon Hammond\t3281.7р.\t-2,053.57 р.\t\n" +
    "365\tVega Collier\t1´381.24 руб.\t\t1 045,73руб\n" +
    "366\tJordan Bentley\t1,612.66 руб.\t-2 347,76руб\t \n" +
    "367\tClara Medina\t3 271.27руб\t\t-2 395.43р.\n" +
    "368\tHunter Howard\t1434.9руб\t-4 847.79руб\t \n" +
    "369\tSilvia Robles\t1 480.80р.\t  \t-582.13руб\n" +
    "370\tLamb Mcbride\t1113.01р.\t1 037.90р.\t\n" +
    "371\tMildred Walsh\t3,368.30р.\t-639.12 руб.\t\n" +
    "372\tRodriguez Donaldson\t1,498.26р.\t \t-1 359,98\n" +
    "373\tSerrano Schultz\t3,396.60 руб.\t-3 640,88руб\t  \n" +
    "374\tHarrell Welch\t1,183.75руб\t-2,357.03р.\t \n" +
    "375\tJohns Cain\t2 999,18руб\t-1 383,42руб\t\n" +
    "376\tSara Ayers\t3821.4руб\t-350.74руб\t\n" +
    "377\tAnastasia Jordan\t1,552.38\t\t507.71руб\n" +
    "378\tBrianna Wells\t1,108.31руб\t2,467.36\t \n" +
    "379\tFletcher Richard\t2,486.64руб\t-4 401.54руб\t  \n" +
    "380\tAva George\t3 479,61р.\t\t-1,729.80 руб.\n" +
    "381\tStewart Haynes\t1,309.34 р.\t438.85р.\t\n" +
    "382\tHelena Elliott\t3 067,88 руб.\t-3,526.00руб\t  \n" +
    "383\tSabrina Woods\t1 458.68руб\t \t-2 885,53 р.\n" +
    "384\tObrien Henderson\t3 028,29\t \t-1467 руб.\n" +
    "385\tBernadine Chavez\t3,198.61\t-4 637,35\t  \n" +
    "386\tBurch Dawson\t1,878.18р.\t-3,613.39\t \n" +
    "387\tGonzales Lester\t3 972,17\t \t-4,612.97 р.\n" +
    "388\tElaine Ortiz\t1,491.63 р.\t2645.09руб\t\n" +
    "389\tEva Cherry\t3165.89руб\t\t2 989,42\n" +
    "390\tJarvis Walters\t2 197,19руб\t  \t-1 090,45руб\n" +
    "391\tSavannah Mcmillan\t3,905.63р.\t806.61р.\t \n" +
    "392\tMarsha Thomas\t3,504.79р.\t\t-1´053.76руб\n" +
    "393\tOphelia Mcpherson\t2956.15руб\t-830,79 р.\t\n" +
    "394\tZamora Ramsey\t1,667.54\t676.37 руб.\t\n" +
    "395\tBurton Hatfield\t1,899.75руб\t2,091.76р.\t \n" +
    "396\tJewel Vang\t3,015.02руб\t482,02руб\t \n" +
    "397\tRoxie Monroe\t2609.12 руб.\t \t2 420.92\n" +
    "398\tPerkins Love\t3477.46 руб.\t-4 489.97р.\t \n" +
    "399\tCandice Jennings\t1 286,94р.\t-980.81руб\t\n" +
    "400\tCalhoun Rivas\t2,052.95руб\t-2 300,90р.\t \n" +
    "401\tMcgowan Mclaughlin\t3 800,24 руб.\t-4,017.71руб\t\n" +
    "402\tAna Sosa\t3 611,85руб\t-3 660,25\t\n" +
    "403\tCecile Barr\t1 143,06\t-2 221,04 р.\t \n" +
    "404\tBlevins Sanchez\t2,152.40р.\t-3´171.87 руб.\t \n" +
    "405\tOconnor Vargas\t2,492.86 р.\t \t-3 046,12 р.\n" +
    "406\tCristina Aguilar\t1,742.90руб\t-3 573,99руб\t \n" +
    "407\tEdwards Rich\t2,322.96 руб.\t1,451.00руб\t \n" +
    "408\tVickie Ratliff\t3 365,30 р.\t \t-2,631.23\n" +
    "409\tValenzuela Sanders\t3,545.91р.\t1 978,99р.\t \n" +
    "410\tLaurel Mathews\t2 045,61руб\t-2 018,31 р.\t\n" +
    "411\tMelissa Hewitt\t2 163.18 р.\t-4 492,71р.\t \n" +
    "412\tCora Mckee\t1349.12р.\t-257.62р.\t \n" +
    "413\tMiddleton Bradley\t1,841.36руб\t1,165.78\t\n" +
    "414\tChasity Atkins\t2,573.29руб\t\t-4 679,19 р.\n" +
    "415\tKatharine Robertson\t3 240,89 р.\t-1 413,64р.\t \n" +
    "416\tLorraine Holt\t1´397.73 руб.\t\t-2´435.44руб\n" +
    "417\tKirby Mccarthy\t3417.43\t-1 383,04р.\t \n" +
    "418\tGraciela Emerson\t2,022.01руб\t \t-827,51 р.\n" +
    "419\tAlisa Joyce\t3 269,50руб\t-4167.77руб\t \n" +
    "420\tGutierrez Salinas\t2651.58\t-941.61руб\t \n" +
    "421\tAlicia Rocha\t2´708.22\t748,94руб\t \n" +
    "422\tCasey Cardenas\t2,497.16руб\t2 876.25р.\t\n" +
    "423\tSonia Cervantes\t3 474,73р.\t-4865.27\t\n" +
    "424\tEster Richmond\t3´130.90р.\t2 624.56р.\t \n" +
    "425\tBall Burnett\t3´926.80р.\t \t2,836.19руб\n" +
    "426\tWooten Wynn\t1,326.44р.\t-4´334.30\t\n" +
    "427\tAshlee Barrett\t1 675,45р.\t-4,298.08\t \n" +
    "428\tWinters Lindsey\t2 708,42\t-897,27руб\t \n" +
    "429\tPearlie Shannon\t1 893,93\t \t-2,215.12\n" +
    "430\tMia Morton\t1,101.15р.\t1 976,47руб\t \n" +
    "431\tJune Clark\t2717.92 руб.\t428,05 руб.\t \n" +
    "432\tAcosta Faulkner\t2´714.02р.\t-412.75\t \n" +
    "433\tWaters Carroll\t2978.01руб\t \t-503.22\n" +
    "434\tLauri Jackson\t1074.68руб\t-3,783.86\t \n" +
    "435\tTherese Mercado\t2,223.03руб\t1 100,04\t \n" +
    "436\tElsie Trevino\t2 103.81\t\t-4,009.81 руб.\n" +
    "437\tClemons Callahan\t3,158.44\t-195.39 р.\t \n" +
    "438\tKnowles Obrien\t3,335.95 р.\t \t-384.29руб\n" +
    "439\tLacey Williams\t3,678.82 р.\t\t2 810,10 р.\n" +
    "440\tMaria Kelley\t2 640.79р.\t-3074.69руб\t\n" +
    "441\tLindsay Porter\t3 070.81р.\t-3,742.27руб\t \n" +
    "442\tJackson Ochoa\t2,704.13руб\t \t-215.06 р.\n" +
    "443\tDonaldson Meyers\t1 549,57 руб.\t119.61\t \n" +
    "444\tNewman Yang\t1,328.74руб\t  \t1,748.41\n" +
    "445\tCameron Gay\t3,256.13р.\t \t2 979,25р.\n" +
    "446\tVicky Guerrero\t2´502.71р.\t587.1руб\t \n" +
    "447\tAnderson Durham\t1 354.23р.\t-2934.08р.\t\n" +
    "448\tPearl Garcia\t2 875,94р.\t-3 521,61 руб.\t\n" +
    "449\tGina Gamble\t2 224.57руб\t \t-1 101,76руб\n" +
    "450\tJeri Wilkerson\t2,176.97р.\t-1 493,91руб\t\n" +
    "451\tAvila Cameron\t2 514,76руб\t \t-188.46 р.\n" +
    "452\tQuinn Fletcher\t1,583.60р.\t1321.99р.\t\n" +
    "453\tCeleste Haney\t2´392.31руб\t1 221,96руб\t  \n" +
    "454\tBauer Barker\t1,607.29руб\t \t-204.21р.\n" +
    "455\tBowen Lynn\t3 054,32 руб.\t-4 591.03р.\t \n" +
    "456\tCraft Weber\t3 301.35руб\t-3 617.72 р.\t\n" +
    "457\tElinor Shepard\t3,928.65\t-1,680.59 руб.\t \n" +
    "458\tBarnes Summers\t2 012,21руб\t\t2 170.61руб\n" +
    "459\tHarriett Wilder\t2475.54 руб.\t \t1´777.27руб\n" +
    "460\tTownsend Macias\t1 668.52 р.\t-1071.52р.\t \n" +
    "461\tLetha Mcdowell\t2096.82 руб.\t-1,715.56 р.\t \n" +
    "462\tTonia Guy\t1,616.64р.\t \t-909.87\n" +
    "463\tMarcella Hawkins\t1 073,28р.\t-1,915.70руб\t \n" +
    "464\tNeva Bond\t1 734.32руб\t \t-4,128.44\n" +
    "465\tRuth Ferrell\t2 578,12 р.\t-1,607.78руб\t\n" +
    "466\tShields Vasquez\t3 502.33руб\t \t-3 199,48 р.\n" +
    "467\tCastro Hensley\t3 511.65 руб.\t \t2559.34\n" +
    "468\tGayle Wall\t3915.22 р.\t177.58\t\n" +
    "469\tLucia Marsh\t1 012.37руб\t2,104.87 р.\t \n" +
    "470\tAngelina Whitley\t2 807,79р.\t\t-2060.53\n" +
    "471\tPrince Mcintyre\t3 197,09 р.\t-13.42руб\t\n" +
    "472\tMillie Perkins\t1 173.41р.\t591.86 р.\t\n" +
    "473\tSmall Peck\t3 299,36 руб.\t92,08\t\n" +
    "474\tRamona Mayo\t1741.04руб\t \t-774.75р.\n" +
    "475\tApril Cunningham\t1 995,86 руб.\t2 475,65руб\t  \n" +
    "476\tBlair Buchanan\t3 497,22р.\t \t1 133,70\n" +
    "477\tMarisa Meyer\t1,486.35р.\t-3 308.14р.\t \n" +
    "478\tWhitfield Pennington\t3 108,58руб\t \t-2,132.89 р.\n" +
    "479\tMiriam Dixon\t3,703.51 р.\t\t843.22руб\n" +
    "480\tDorsey Lynch\t2788.2 р.\t-2 337,03 р.\t \n" +
    "481\tLena Russell\t2 585,10руб\t \t-4,271.98руб\n" +
    "482\tMontoya Spears\t3 206.36руб\t  \t-3 955.45руб\n" +
    "483\tHollie Benjamin\t3,031.41р.\t2,857.53 р.\t\n" +
    "484\tSue Rosales\t1337.32руб\t2,346.41р.\t \n" +
    "485\tChandra Bright\t3 128,35\t \t-4 527,75руб\n" +
    "486\tHenrietta Craig\t1 819,93 руб.\t579.97\t \n" +
    "487\tWhitaker Gardner\t3,168.91руб\t  \t-4826.76\n" +
    "488\tHester Glass\t3´124.56р.\t-2583.5 руб.\t \n" +
    "489\tRoseann Burns\t2502.41р.\t  \t-4 478,31руб\n" +
    "490\tNoemi Byers\t1437.69р.\t\t-3,593.52руб\n" +
    "491\tEula Saunders\t1,958.58 р.\t-1 675,73 р.\t\n" +
    "492\tOrtega Schwartz\t2250.39руб\t \t-1´741.12\n" +
    "493\tNelda Wilcox\t3 009,89руб\t-2285.43руб\t\n" +
    "494\tDunn Gross\t2 079.16 р.\t2´745.94 руб.\t \n" +
    "495\tTonya Fernandez\t3,554.78руб\t-1,096.45\t \n" +
    "496\tGreer Trujillo\t1,926.71\t-3 542,04руб\t\n" +
    "497\tSimmons Parrish\t1,653.74\t2´914.28р.\t \n" +
    "498\tPatterson Dyer\t1 289,00\t\t648.15руб\n" +
    "499\tMcintyre Cooper\t3,966.14\t \t-2 203,49р.\n" +
    "500\tBrennan Bryant\t1,521.40 р.\t-75.89р.\t \n" +
    "501\tSwanson Case\t1,275.22 р.\t\t-3,125.44\n" +
    "502\tMinerva Knight\t1 959.07 р.\t1,737.50\t\n" +
    "503\tLavonne Clemons\t3´316.93\t2331.32 руб.\t \n" +
    "504\tNona Montoya\t2 589.09\t-41.25р.\t\n" +
    "505\tHogan Bullock\t3 463,27руб\t-3 061.41 р.\t \n" +
    "506\tDora Alvarado\t3 477.23 р.\t-89.63руб\t \n" +
    "507\tRoberta Pickett\t3,796.45 руб.\t230.41 руб.\t  \n" +
    "508\tBenson Kent\t1 567.31\t1,415.09руб\t \n" +
    "509\tTravis Hoover\t2,443.95р.\t-543,89\t\n" +
    "510\tKarla Sweeney\t1 835,10 р.\t267.89р.\t \n" +
    "511\tEtta Blake\t2,961.00\t1 274,69руб\t \n" +
    "512\tTaylor Pace\t3260.97\t-413.00р.\t\n" +
    "513\tRoach Nunez\t3 644.13р.\t-949,25руб\t \n" +
    "514\tTerry Massey\t1´093.92\t \t-3 695.17 руб.\n" +
    "515\tAntonia Carter\t3 190,65р.\t \t-1 232.76р.\n" +
    "516\tYork David\t1653.96 руб.\t\t1 889.67руб\n" +
    "517\tTammy Young\t2,740.40р.\t-3 248,46руб\t\n" +
    "518\tEloise Alexander\t1 868.29 р.\t \t-1,212.40руб\n" +
    "519\tWeeks Hill\t2,413.26руб\t  \t-1,748.56руб\n" +
    "520\tSophia Dennis\t3 845,99руб\t\t-1 032.01\n" +
    "521\tSamantha Terry\t1 924.37руб\t\t-4 923.81\n" +
    "522\tOwen Goodman\t2 951,08руб\t833.11руб\t \n" +
    "523\tHolman Ramirez\t3,954.12руб\t \t-3 782,33 р.\n" +
    "524\tRamos Pope\t1´832.99\t\t-1,085.02руб\n" +
    "525\tChelsea Baker\t1,129.04 руб.\t-1 102.73р.\t  \n" +
    "526\tLeblanc Hendricks\t2,056.40 руб.\t-1 582,70\t \n" +
    "527\tShelly Bender\t1´321.28 р.\t177,84\t  \n" +
    "528\tOrtiz Tyler\t1 677.76р.\t \t-2 552,61р.\n" +
    "529\tMary Banks\t2,622.35р.\t422.32руб\t\n" +
    "530\tEspinoza Salazar\t2 514.91 руб.\t-4´867.21руб\t\n" +
    "531\tBrittney Olson\t2 566.16 р.\t-2,763.62руб\t\n" +
    "532\tAda Powell\t2985 руб.\t9.87р.\t \n" +
    "533\tClaudine Beach\t2,571.64руб\t-960.78 р.\t \n" +
    "534\tHolly Horton\t2 421,05руб\t1253.69руб\t \n" +
    "535\tHensley Coffey\t3,981.29 р.\t \t2,278.44\n" +
    "536\tMelisa Abbott\t3 055.61руб\t-4,099.44руб\t\n" +
    "537\tBrigitte Wyatt\t3,059.58руб\t342.51\t  \n" +
    "538\tCardenas Zimmerman\t2157.33 руб.\t-4´985.49 руб.\t \n" +
    "539\tBowman Nash\t1607.03 р.\t-177.36руб\t \n" +
    "540\tPickett Molina\t1 161,86руб\t-2,185.03руб\t\n" +
    "541\tChaney Hull\t2,204.56р.\t-248.38руб\t \n" +
    "542\tJacobson Holcomb\t1,296.78руб\t \t-3,086.77\n" +
    "543\tKenya Vega\t3,022.58руб\t-2054.81 р.\t\n" +
    "544\tLauren Lancaster\t3816.19руб\t\t-3´120.14руб\n" +
    "545\tMabel Franco\t1 567,24\t-893.36руб\t \n" +
    "546\tEvelyn Townsend\t1 092.76руб\t \t-1,212.68руб\n" +
    "547\tKing Fleming\t2 992,25 р.\t-4 069,51р.\t\n" +
    "548\tStacey Shelton\t2,321.95руб\t \t-2´215.83 руб.\n" +
    "549\tParker Stanley\t1,114.77руб\t-3 156,08\t \n" +
    "550\tLeslie Pitts\t3 168,40\t \t2,293.39руб\n" +
    "551\tCandy Jimenez\t2 336.92\t \t2 565,52руб\n" +
    "552\tHewitt Thornton\t1 631,13р.\t-3544.51 р.\t \n" +
    "553\tClayton Jacobson\t3,781.99руб\t \t-2 209.16 руб.\n" +
    "554\tAngeline Yates\t1,251.47р.\t-1,32р.\t \n" +
    "555\tJeanne Harvey\t3,971.00р.\t1 701,48\t\n" +
    "556\tCarpenter Huff\t1,162.87руб\t753,97\t \n" +
    "557\tAline Noel\t2 539,80 руб.\t-200.27р.\t \n" +
    "558\tElva Blevins\t2 748,73 р.\t-2,695.14руб\t \n" +
    "559\tBurnett Burke\t3´791.06 р.\t-1,030.69 р.\t \n" +
    "560\tSusie Fisher\t2,741.25р.\t589,30 руб.\t \n" +
    "561\tMolly Tate\t1,711.09 руб.\t2 066,92р.\t \n" +
    "562\tAlexandra Valentine\t1 386.00 р.\t-4 979,18руб\t \n" +
    "563\tMarquita Fitzpatrick\t1984.96\t \t-2,226.35 р.\n" +
    "564\tLourdes Munoz\t2 545.59 руб.\t\t-1 220.84руб\n" +
    "565\tMargie Russo\t3´781.15\t-1,483.08р.\t \n" +
    "566\tChen Melendez\t2 372,32руб\t \t-1,989.70р.\n" +
    "567\tBrowning Ware\t1 132.10р.\t2655.82руб\t \n" +
    "568\tDebra Humphrey\t2,263.70\t \t-4,380.57руб\n" +
    "569\tNatalie Potts\t2,653.68руб\t-1 688,41\t \n" +
    "570\tEffie Preston\t1,951.32руб\t-59.38 р.\t \n" +
    "571\tStokes Riggs\t1,806.26 р.\t-4,471.11руб\t  \n" +
    "572\tJoan Harper\t3,893.85\t-4,276.53руб\t \n" +
    "573\tWhitney Mccoy\t2 059,28\t-3,908.50руб\t \n" +
    "574\tMaude Blackburn\t3 177,29 р.\t \t-4,238.74руб\n" +
    "575\tKaty Miller\t1´773.99р.\t\t-3838.54руб\n" +
    "576\tJewell Holder\t2848.41р.\t\t-4 437,66 руб.\n" +
    "577\tHutchinson Sellers\t1171.13руб\t465.23р.\t\n" +
    "578\tAlisha Dunn\t3´846.99руб\t \t-2559.05руб\n" +
    "579\tVelez Knapp\t2,971.90\t2768.87 р.\t \n" +
    "580\tMays Little\t1,053.44 р.\t\t-3 319,09 р.\n" +
    "581\tElsa Campos\t1,933.07руб\t \t1 850,91руб\n" +
    "582\tAlexandria Douglas\t2´660.23руб\t-3 016,94руб\t \n" +
    "583\tLynn Patton\t1,945.96р.\t-1 068,71р.\t \n" +
    "584\tHamilton Powers\t2 759,81р.\t1,879.36руб\t \n" +
    "585\tFreda Salas\t2717.63руб\t  \t1,139.16р.\n" +
    "586\tLois Alford\t1,881.32\t39.55руб\t \n" +
    "587\tAmelia Coleman\t2216.06\t-2 671,25руб\t \n" +
    "588\tHelen Freeman\t3´109.52 р.\t  \t-1 310,94 р.\n" +
    "589\tJerry Duke\t3 349,43руб\t2,349.30 р.\t\n" +
    "590\tEarline Reed\t2 781,76 р.\t\t-2719.99р.\n" +
    "591\tAnnabelle Cohen\t1 757,93руб\t \t551,09 р.\n" +
    "592\tCamille Kemp\t1´203.12 руб.\t\t-442,38руб\n" +
    "593\tShelley Whitney\t3 550.30 руб.\t1,724.24 р.\t \n" +
    "594\tWolf Dalton\t2,480.25 руб.\t \t-718.83 руб.\n" +
    "595\tJody Richardson\t1 021.11руб\t \t2 102.60руб\n" +
    "596\tWalker Herring\t1 214,20руб\t \t1,036.41руб\n" +
    "597\tJanelle Day\t1806.96\t-1 258.26 руб.\t \n" +
    "598\tBird Battle\t3 260,16руб\t-243,54\t \n" +
    "599\tCash Spencer\t2 533,04р.\t\t1 721,43р.\n" +
    "600\tPittman Gutierrez\t1 135.81р.\t-4 994,04руб\t\n" +
    "601\tHodges Kane\t2808.39р.\t\t2,038.47 руб.\n" +
    "602\tAlford Strickland\t1´585.98р.\t \t-2682.77\n" +
    "603\tOllie Sutton\t3 027,90\t1 263,01\t \n" +
    "604\tWalton Short\t3,607.59 р.\t-52.01 руб.\t \n" +
    "605\tMccormick Greer\t1 132,41руб\t  \t-4´056.09руб\n" +
    "606\tRosa Bradshaw\t2637.92руб\t \t-481.37руб\n" +
    "607\tMarian Grimes\t2,502.16р.\t-4,555.72 руб.\t\n" +
    "608\tSadie Webster\t1922.41 руб.\t-3´885.93руб\t \n" +
    "609\tMichael Keller\t2,760.75 руб.\t \t-2,337.62 р.\n" +
    "610\tLenora Osborn\t3,611.39р.\t \t703.63р.\n" +
    "611\tAudra Dominguez\t3,798.55р.\t12,34 р.\t\n" +
    "612\tBrooks Fuller\t3´988.02руб\t \t-553.71 р.\n" +
    "613\tLorrie Morin\t3 857,53\t-632.15руб\t \n" +
    "614\tGeneva Wagner\t1 215,95 р.\t \t2834.39 руб.\n" +
    "615\tKerri Aguirre\t1 602.90 руб.\t \t-1059.37\n" +
    "616\tNellie Vaughn\t2,116.02руб\t\t-1´453.93\n" +
    "617\tMolina Price\t3751.86руб\t-2809.34р.\t \n" +
    "618\tVeronica Wong\t3437.35руб\t1,626.91р.\t \n" +
    "619\tConrad Benton\t3180.01 руб.\t \t2 321.09 р.\n" +
    "620\tFisher Stout\t2034.33руб\t\t-3 645.29 р.\n" +
    "621\tLakisha Savage\t3 969,11руб\t2247.58 р.\t \n" +
    "622\tRosetta Bowers\t2,578.66\t \t-2298.76\n" +
    "623\tLorena Finch\t1´079.17 р.\t2 352.69р.\t  \n" +
    "624\tTerry Watts\t3989.86\t\t-3´375.61\n" +
    "625\tStacy Waters\t3 740,25руб\t \t-2 812.50р.\n" +
    "626\tRhodes Adkins\t3,302.77\t181,52руб\t \n" +
    "627\tMelinda Knowles\t2,819.63\t-289.40\t\n" +
    "628\tMaggie Bowen\t1 190.53руб\t2615.37р.\t\n" +
    "629\tJohn Frank\t3,603.99 р.\t959.26р.\t \n" +
    "630\tPatrick Booker\t3 523.92руб\t \t-2´272.18"
const transactions = parseTransactions(text);
console.log(transactions);


function updateBalances(transactions) {
    transactions.forEach(transaction => {
        if (transaction.transaction < 0) {
            transaction.balance += transaction.transaction;
        }
    });
}

function getUsersWithLowBalance(transactions) {
    const usersWithLowBalance = transactions.filter(transaction => transaction.balance <= -2000);
    return usersWithLowBalance;
}

// const transactions = [
//     { id: 1, user: "Иван", balance: 1000, transaction: -3000 },
//     { id: 2, user: "Павел", balance: 2500, transaction: 1000 },
//     { id: 3, user: "Никита", balance: 1500, transaction: 4000 },
//     { id: 4, user: "Сергей", balance: 1000, transaction: -4500 }
// ];

updateBalances(transactions);

const usersWithLowBalance = getUsersWithLowBalance(transactions);

console.log(usersWithLowBalance);

function calculateTotalDebt(transactions) {
    const usersWithLowBalance = getUsersWithLowBalance(transactions);
    const totalDebt = usersWithLowBalance.reduce((total, user) => total + user.balance, 0);
    return totalDebt;
}

const totalDebt = calculateTotalDebt(transactions);

console.log("Общая сумма недоимки: ", totalDebt);