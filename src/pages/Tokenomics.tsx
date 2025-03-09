import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedButton from '@/components/AnimatedButton';
import { PieChart, Package, Coins, Lock, TrendingUp, ArrowRight, Shield, Users } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Label } from 'recharts';

const XelisEmissionSchedule = () => {
  // Data from the provided code
  const jsonData = [
    {
      "height": 103017600,
      "circulating_supply": 18394880.7161627,
      "supply_left": 5119.2838373,
      "block_reward": 0.00040684,
      "miner_supply": 17265720.95541427,
      "dev_supply": 1129159.76074843,
      "mined_percentage": "99.97",
      "dev_reward": 0.00002034,
      "dev_fee": 0.05,
      "approx_duration": "17885d, 0h, 0m, 0s",
      "approx_seconds": 1545264000,
      "approx_days": 17885,
      "year": 49
    },
    {
      "height": 100915200,
      "circulating_supply": 18393949.76926393,
      "supply_left": 6050.23073607,
      "block_reward": 0.00048082,
      "miner_supply": 17264836.54587276,
      "dev_supply": 1129113.22339117,
      "mined_percentage": "99.97",
      "dev_reward": 0.00002404,
      "dev_fee": 0.05,
      "approx_duration": "17520d, 0h, 0m, 0s",
      "approx_seconds": 1513728000,
      "approx_days": 17520,
      "year": 48
    },
    {
      "height": 98812800,
      "circulating_supply": 18392849.52665672,
      "supply_left": 7150.47334328,
      "block_reward": 0.00056826,
      "miner_supply": 17263791.30541193,
      "dev_supply": 1129058.22124479,
      "mined_percentage": "99.96",
      "dev_reward": 0.00002841,
      "dev_fee": 0.05,
      "approx_duration": "17155d, 0h, 0m, 0s",
      "approx_seconds": 1482192000,
      "approx_days": 17155,
      "year": 47
    },
    {
      "height": 96710400,
      "circulating_supply": 18391549.20136931,
      "supply_left": 8450.79863069,
      "block_reward": 0.0006716,
      "miner_supply": 17262555.98639869,
      "dev_supply": 1128993.21497062,
      "mined_percentage": "99.95",
      "dev_reward": 0.00003358,
      "dev_fee": 0.05,
      "approx_duration": "16790d, 0h, 0m, 0s",
      "approx_seconds": 1450656000,
      "approx_days": 16790,
      "year": 46
    },
    {
      "height": 94608000,
      "circulating_supply": 18390012.40771878,
      "supply_left": 9987.59228122,
      "block_reward": 0.00079374,
      "miner_supply": 17261096.02244718,
      "dev_supply": 1128916.3852716,
      "mined_percentage": "99.95",
      "dev_reward": 0.00003968,
      "dev_fee": 0.05,
      "approx_duration": "16425d, 0h, 0m, 0s",
      "approx_seconds": 1419120000,
      "approx_days": 16425,
      "year": 45
    },
    {
      "height": 92505600,
      "circulating_supply": 18388196.14316685,
      "supply_left": 11803.85683315,
      "block_reward": 0.00093808,
      "miner_supply": 17259370.5611368,
      "dev_supply": 1128825.58203005,
      "mined_percentage": "99.94",
      "dev_reward": 0.0000469,
      "dev_fee": 0.05,
      "approx_duration": "16060d, 0h, 0m, 0s",
      "approx_seconds": 1387584000,
      "approx_days": 16060,
      "year": 44
    },
    {
      "height": 90403200,
      "circulating_supply": 18386049.58502606,
      "supply_left": 13950.41497394,
      "block_reward": 0.00110867,
      "miner_supply": 17257331.32091644,
      "dev_supply": 1128718.26410962,
      "mined_percentage": "99.92",
      "dev_reward": 0.00005543,
      "dev_fee": 0.05,
      "approx_duration": "15695d, 0h, 0m, 0s",
      "approx_seconds": 1356048000,
      "approx_days": 15695,
      "year": 43
    },
    {
      "height": 88300800,
      "circulating_supply": 18383512.66833754,
      "supply_left": 16487.33166246,
      "block_reward": 0.00131029,
      "miner_supply": 17254921.24007599,
      "dev_supply": 1128591.42826155,
      "mined_percentage": "99.91",
      "dev_reward": 0.00006551,
      "dev_fee": 0.05,
      "approx_duration": "15330d, 0h, 0m, 0s",
      "approx_seconds": 1324512000,
      "approx_days": 15330,
      "year": 42
    },
    {
      "height": 86198400,
      "circulating_supply": 18380514.40513557,
      "supply_left": 19485.59486443,
      "block_reward": 0.00154857,
      "miner_supply": 17252072.8800464,
      "dev_supply": 1128441.52508917,
      "mined_percentage": "99.89",
      "dev_reward": 0.00007742,
      "dev_fee": 0.05,
      "approx_duration": "14965d, 0h, 0m, 0s",
      "approx_seconds": 1292976000,
      "approx_days": 14965,
      "year": 41
    },
    {
      "height": 84096000,
      "circulating_supply": 18376970.89806201,
      "supply_left": 23029.10193799,
      "block_reward": 0.00183018,
      "miner_supply": 17248706.53833985,
      "dev_supply": 1128264.35972216,
      "mined_percentage": "99.87",
      "dev_reward": 0.0000915,
      "dev_fee": 0.05,
      "approx_duration": "14600d, 0h, 0m, 0s",
      "approx_seconds": 1261440000,
      "approx_days": 14600,
      "year": 40
    },
    {
      "height": 81993600,
      "circulating_supply": 18372782.99275545,
      "supply_left": 27217.00724455,
      "block_reward": 0.00216301,
      "miner_supply": 17244728.01831265,
      "dev_supply": 1128054.9744428,
      "mined_percentage": "99.85",
      "dev_reward": 0.00010815,
      "dev_fee": 0.05,
      "approx_duration": "14235d, 0h, 0m, 0s",
      "approx_seconds": 1229904000,
      "approx_days": 14235,
      "year": 39
    },
    {
      "height": 79891200,
      "circulating_supply": 18367833.50330856,
      "supply_left": 32166.49669144,
      "block_reward": 0.00255636,
      "miner_supply": 17240025.99335205,
      "dev_supply": 1127807.50995651,
      "mined_percentage": "99.83",
      "dev_reward": 0.00012781,
      "dev_fee": 0.05,
      "approx_duration": "13870d, 0h, 0m, 0s",
      "approx_seconds": 1198368000,
      "approx_days": 13870,
      "year": 38
    },
    {
      "height": 77788800,
      "circulating_supply": 18361983.9331828,
      "supply_left": 38016.0668172,
      "block_reward": 0.00302124,
      "miner_supply": 17234468.89174634,
      "dev_supply": 1127515.04143646,
      "mined_percentage": "99.79",
      "dev_reward": 0.00015106,
      "dev_fee": 0.05,
      "approx_duration": "13505d, 0h, 0m, 0s",
      "approx_seconds": 1166832000,
      "approx_days": 13505,
      "year": 37
    },
    {
      "height": 75686400,
      "circulating_supply": 18355070.59979014,
      "supply_left": 44929.40020986,
      "block_reward": 0.00357066,
      "miner_supply": 17227901.21503692,
      "dev_supply": 1127169.38475322,
      "mined_percentage": "99.76",
      "dev_reward": 0.00017853,
      "dev_fee": 0.05,
      "approx_duration": "13140d, 0h, 0m, 0s",
      "approx_seconds": 1135296000,
      "approx_days": 13140,
      "year": 36
    },
    {
      "height": 73584000,
      "circulating_supply": 18346900.05433594,
      "supply_left": 53099.94566406,
      "block_reward": 0.00422,
      "miner_supply": 17220139.18686835,
      "dev_supply": 1126760.86746759,
      "mined_percentage": "99.71",
      "dev_reward": 0.000211,
      "dev_fee": 0.05,
      "approx_duration": "12775d, 0h, 0m, 0s",
      "approx_seconds": 1103760000,
      "approx_days": 12775,
      "year": 35
    },
    {
      "height": 71481600,
      "circulating_supply": 18337243.66873791,
      "supply_left": 62756.33126209,
      "block_reward": 0.00498742,
      "miner_supply": 17210965.61056415,
      "dev_supply": 1126278.05817376,
      "mined_percentage": "99.66",
      "dev_reward": 0.00024937,
      "dev_fee": 0.05,
      "approx_duration": "12410d, 0h, 0m, 0s",
      "approx_seconds": 1072224000,
      "approx_days": 12410,
      "year": 34
    },
    {
      "height": 69379200,
      "circulating_supply": 18325831.23815496,
      "supply_left": 74168.76184504,
      "block_reward": 0.0058944,
      "miner_supply": 17200123.79152358,
      "dev_supply": 1125707.44663138,
      "mined_percentage": "99.60",
      "dev_reward": 0.00029472,
      "dev_fee": 0.05,
      "approx_duration": "12045d, 0h, 0m, 0s",
      "approx_seconds": 1040688000,
      "approx_days": 12045,
      "year": 33
    },
    {
      "height": 67276800,
      "circulating_supply": 18312343.42012185,
      "supply_left": 87656.57987815,
      "block_reward": 0.00696631,
      "miner_supply": 17187310.35440642,
      "dev_supply": 1125033.06571543,
      "mined_percentage": "99.52",
      "dev_reward": 0.00034831,
      "dev_fee": 0.05,
      "approx_duration": "11680d, 0h, 0m, 0s",
      "approx_seconds": 1009152000,
      "approx_days": 11680,
      "year": 32
    },
    {
      "height": 65174400,
      "circulating_supply": 18296402.79870776,
      "supply_left": 103597.20129224,
      "block_reward": 0.00823316,
      "miner_supply": 17172166.75407644,
      "dev_supply": 1124236.04463132,
      "mined_percentage": "99.44",
      "dev_reward": 0.00041165,
      "dev_fee": 0.05,
      "approx_duration": "11315d, 0h, 0m, 0s",
      "approx_seconds": 977616000,
      "approx_days": 11315,
      "year": 31
    },
    {
      "height": 63072000,
      "circulating_supply": 18277563.32367906,
      "supply_left": 122436.67632094,
      "block_reward": 0.00973039,
      "miner_supply": 17154269.24281249,
      "dev_supply": 1123294.08086657,
      "mined_percentage": "99.33",
      "dev_reward": 0.00048651,
      "dev_fee": 0.05,
      "approx_duration": "10950d, 0h, 0m, 0s",
      "approx_seconds": 946080000,
      "approx_days": 10950,
      "year": 30
    },
    {
      "height": 60969600,
      "circulating_supply": 18255297.82911937,
      "supply_left": 144702.17088063,
      "block_reward": 0.01149989,
      "miner_supply": 17133117.01299457,
      "dev_supply": 1122180.8161248,
      "mined_percentage": "99.21",
      "dev_reward": 0.00057499,
      "dev_fee": 0.05,
      "approx_duration": "10585d, 0h, 0m, 0s",
      "approx_seconds": 914544000,
      "approx_days": 10585,
      "year": 29
    },
    {
      "height": 58867200,
      "circulating_supply": 18228983.28228571,
      "supply_left": 171016.71771429,
      "block_reward": 0.01359118,
      "miner_supply": 17108118.18351617,
      "dev_supply": 1120865.09876954,
      "mined_percentage": "99.07",
      "dev_reward": 0.00067955,
      "dev_fee": 0.05,
      "approx_duration": "10220d, 0h, 0m, 0s",
      "approx_seconds": 883008000,
      "approx_days": 10220,
      "year": 28
    },
    {
      "height": 56764800,
      "circulating_supply": 18197883.34991596,
      "supply_left": 202116.65008404,
      "block_reward": 0.01606278,
      "miner_supply": 17078573.23777844,
      "dev_supply": 1119310.11213752,
      "mined_percentage": "98.90",
      "dev_reward": 0.00080313,
      "dev_fee": 0.05,
      "approx_duration": "9855d, 0h, 0m, 0s",
      "approx_seconds": 851472000,
      "approx_days": 9855,
      "year": 27
    },
    {
      "height": 54662400,
      "circulating_supply": 18161127.79415121,
      "supply_left": 238872.20584879,
      "block_reward": 0.01898385,
      "miner_supply": 17043655.4498155,
      "dev_supply": 1117472.34433571,
      "mined_percentage": "98.70",
      "dev_reward": 0.00094919,
      "dev_fee": 0.05,
      "approx_duration": "9490d, 0h, 0m, 0s",
      "approx_seconds": 819936000,
      "approx_days": 9490,
      "year": 26
    },
    {
      "height": 52560000,
      "circulating_supply": 18117688.12156974,
      "supply_left": 282311.87843026,
      "block_reward": 0.02243613,
      "miner_supply": 17002387.75087683,
      "dev_supply": 1115300.37069291,
      "mined_percentage": "98.47",
      "dev_reward": 0.0011218,
      "dev_fee": 0.05,
      "approx_duration": "9125d, 0h, 0m, 0s",
      "approx_seconds": 788400000,
      "approx_days": 9125,
      "year": 25
    },
    {
      "height": 50457600,
      "circulating_supply": 18066348.80388031,
      "supply_left": 333651.19611969,
      "block_reward": 0.02651621,
      "miner_supply": 16953615.38908535,
      "dev_supply": 1112733.41479496,
      "mined_percentage": "98.19",
      "dev_reward": 0.00132581,
      "dev_fee": 0.05,
      "approx_duration": "8760d, 0h, 0m, 0s",
      "approx_seconds": 756864000,
      "approx_days": 8760,
      "year": 24
    },
    {
      "height": 48355200,
      "circulating_supply": 18005673.26505227,
      "supply_left": 394326.73494773,
      "block_reward": 0.03133827,
      "miner_supply": 16895973.61721225,
      "dev_supply": 1109699.64784002,
      "mined_percentage": "97.86",
      "dev_reward": 0.00156691,
      "dev_fee": 0.05,
      "approx_duration": "8395d, 0h, 0m, 0s",
      "approx_seconds": 725328000,
      "approx_days": 8395,
      "year": 23
    },
    {
      "height": 46252800,
      "circulating_supply": 17933963.68303447,
      "supply_left": 466036.31696553,
      "block_reward": 0.03703724,
      "miner_supply": 16827849.50430951,
      "dev_supply": 1106114.17872496,
      "mined_percentage": "97.47",
      "dev_reward": 0.00185186,
      "dev_fee": 0.05,
      "approx_duration": "8030d, 0h, 0m, 0s",
      "approx_seconds": 693792000,
      "approx_days": 8030,
      "year": 22
    },
    {
      "height": 44150400,
      "circulating_supply": 17849213.4813618,
      "supply_left": 550786.5186382,
      "block_reward": 0.04377258,
      "miner_supply": 16747336.80273509,
      "dev_supply": 1101876.67862671,
      "mined_percentage": "97.01",
      "dev_reward": 0.00218862,
      "dev_fee": 0.05,
      "approx_duration": "7665d, 0h, 0m, 0s",
      "approx_seconds": 662256000,
      "approx_days": 7665,
      "year": 21
    },
    {
      "height": 42048000,
      "circulating_supply": 17749051.18112104,
      "supply_left": 650948.81887896,
      "block_reward": 0.05173276,
      "miner_supply": 16652182.60752077,
      "dev_supply": 1096868.57360027,
      "mined_percentage": "96.46",
      "dev_reward": 0.00258663,
      "dev_fee": 0.05,
      "approx_duration": "7300d, 0h, 0m, 0s",
      "approx_seconds": 630720000,
      "approx_days": 7300,
      "year": 20
    },
    {
      "height": 39945600,
      "circulating_supply": 17630674.04228627,
      "supply_left": 769325.95771373,
      "block_reward": 0.06114053,
      "miner_supply": 16539724.31564135,
      "dev_supply": 1090949.72664492,
      "mined_percentage": "95.82",
      "dev_reward": 0.00305702,
      "dev_fee": 0.05,
      "approx_duration": "6935d, 0h, 0m, 0s",
      "approx_seconds": 599184000,
      "approx_days": 6935,
      "year": 19
    },
    {
      "height": 37843200,
      "circulating_supply": 17490769.6374884,
      "supply_left": 909230.3625116,
      "block_reward": 0.07225914,
      "miner_supply": 16406815.1210963,
      "dev_supply": 1083954.5163921,
      "mined_percentage": "95.06",
      "dev_reward": 0.00361295,
      "dev_fee": 0.05,
      "approx_duration": "6570d, 0h, 0m, 0s",
      "approx_seconds": 567648000,
      "approx_days": 6570,
      "year": 18
    },
    {
      "height": 35740800,
      "circulating_supply": 17325423.16371281,
      "supply_left": 1074576.83628719,
      "block_reward": 0.0853997,
      "miner_supply": 16249735.96102314,
      "dev_supply": 1075687.20268967,
      "mined_percentage": "94.16",
      "dev_reward": 0.00426998,
      "dev_fee": 0.05,
      "approx_duration": "6205d, 0h, 0m, 0s",
      "approx_seconds": 536112000,
      "approx_days": 6205,
      "year": 17
    },
    {
      "height": 33638400,
      "circulating_supply": 17130007.89834347,
      "supply_left": 1269992.10165653,
      "block_reward": 0.10092991,
      "miner_supply": 16064091.44893593,
      "dev_supply": 1065916.44940754,
      "mined_percentage": "93.10",
      "dev_reward": 0.00504649,
      "dev_fee": 0.05,
      "approx_duration": "5840d, 0h, 0m, 0s",
      "approx_seconds": 504576000,
      "approx_days": 5840,
      "year": 16
    },
    {
      "height": 31536000,
      "circulating_supply": 16899055.73427377,
      "supply_left": 1500944.26572623,
      "block_reward": 0.11928434,
      "miner_supply": 15844686.88308207,
      "dev_supply": 1054368.8511917,
      "mined_percentage": "91.84",
      "dev_reward": 0.00596421,
      "dev_fee": 0.05,
      "approx_duration": "5475d, 0h, 0m, 0s",
      "approx_seconds": 473040000,
      "approx_days": 5475,
      "year": 15
    },
    {
      "height": 29433600,
      "circulating_supply": 16626104.1714156,
      "supply_left": 1773895.8285844,
      "block_reward": 0.14097658,
      "miner_supply": 15585382.88838198,
      "dev_supply": 1040721.28303362,
      "mined_percentage": "90.36",
      "dev_reward": 0.00704882,
      "dev_fee": 0.05,
      "approx_duration": "5110d, 0h, 0m, 0s",
      "approx_seconds": 441504000,
      "approx_days": 5110,
      "year": 14
    },
    {
      "height": 27331200,
      "circulating_supply": 16303515.48312365,
      "supply_left": 2096484.51687635,
      "block_reward": 0.16661363,
      "miner_supply": 15278923.62451849,
      "dev_supply": 1024591.85860516,
      "mined_percentage": "88.61",
      "dev_reward": 0.00833068,
      "dev_fee": 0.05,
      "approx_duration": "4745d, 0h, 0m, 0s",
      "approx_seconds": 409968000,
      "approx_days": 4745,
      "year": 13
    },
    {
      "height": 25228800,
      "circulating_supply": 15922262.9974337,
      "supply_left": 2477737.0025663,
      "block_reward": 0.19691286,
      "miner_supply": 14916733.75312653,
      "dev_supply": 1005529.24430717,
      "mined_percentage": "86.53",
      "dev_reward": 0.00984564,
      "dev_fee": 0.05,
      "approx_duration": "4380d, 0h, 0m, 0s",
      "approx_seconds": 378432000,
      "approx_days": 4380,
      "year": 12
    },
    {
      "height": 23126400,
      "circulating_supply": 15471678.51284305,
      "supply_left": 2928321.48715695,
      "block_reward": 0.2327221,
      "miner_supply": 14488678.48277999,
      "dev_supply": 983000.03006306,
      "mined_percentage": "84.09",
      "dev_reward": 0.0116361,
      "dev_fee": 0.05,
      "approx_duration": "4015d, 0h, 0m, 0s",
      "approx_seconds": 346896000,
      "approx_days": 4015,
      "year": 11
    },
    {
      "height": 21024000,
      "circulating_supply": 14939153.78088882,
      "supply_left": 3460846.21911118,
      "block_reward": 0.27504336,
      "miner_supply": 13982779.9774353,
      "dev_supply": 956373.80345352,
      "mined_percentage": "81.19",
      "dev_reward": 0.01375216,
      "dev_fee": 0.05,
      "approx_duration": "3650d, 0h, 0m, 0s",
      "approx_seconds": 315360000,
      "approx_days": 3650,
      "year": 10
    },
    {
      "height": 18921600,
      "circulating_supply": 14309787.70227591,
      "supply_left": 4090212.29772409,
      "block_reward": 0.32506089,
      "miner_supply": 13384882.19276604,
      "dev_supply": 924905.50950987,
      "mined_percentage": "77.77",
      "dev_reward": 0.01625304,
      "dev_fee": 0.05,
      "approx_duration": "3285d, 0h, 0m, 0s",
      "approx_seconds": 283824000,
      "approx_days": 3285,
      "year": 9
    },
    {
      "height": 16819200,
      "circulating_supply": 13565969.36458227,
      "supply_left": 4834030.63541773,
      "block_reward": 0.38417426,
      "miner_supply": 12678254.76197213,
      "dev_supply": 887714.60261014,
      "mined_percentage": "73.73",
      "dev_reward": 0.01920871,
      "dev_fee": 0.05,
      "approx_duration": "2920d, 0h, 0m, 0s",
      "approx_seconds": 252288000,
      "approx_days": 2920,
      "year": 8
    },
    {
      "height": 14716800,
      "circulating_supply": 12686885.25394496,
      "supply_left": 5713114.74605504,
      "block_reward": 0.4540376,
      "miner_supply": 11843124.84688063,
      "dev_supply": 843760.40706433,
      "mined_percentage": "68.95",
      "dev_reward": 0.02270188,
      "dev_fee": 0.05,
      "approx_duration": "2555d, 0h, 0m, 0s",
      "approx_seconds": 220752000,
      "approx_days": 2555,
      "year": 7
    },
    {
      "height": 12614400,
      "circulating_supply": 11647936.85159413,
      "supply_left": 6752063.14840587,
      "block_reward": 0.5366058,
      "miner_supply": 10856123.85465876,
      "dev_supply": 791812.99693537,
      "mined_percentage": "63.30",
      "dev_reward": 0.02683029,
      "dev_fee": 0.05,
      "approx_duration": "2190d, 0h, 0m, 0s",
      "approx_seconds": 189216000,
      "approx_days": 2190,
      "year": 6
    },
    {
      "height": 10512000,
      "circulating_supply": 10420052.31849052,
      "supply_left": 7979947.68150948,
      "block_reward": 0.63418931,
      "miner_supply": 9689633.53822945,
      "dev_supply": 730418.78026107,
      "mined_percentage": "56.63",
      "dev_reward": 0.03170946,
      "dev_fee": 0.05,
      "approx_duration": "1825d, 0h, 0m, 0s",
      "approx_seconds": 157680000,
      "approx_days": 1825,
      "year": 5
    },
    {
      "height": 8409600,
      "circulating_supply": 8968873.00755092,
      "supply_left": 9431126.99244908,
      "block_reward": 0.74951869,
      "miner_supply": 8311013.18284908,
      "dev_supply": 657859.82470184,
      "mined_percentage": "48.74",
      "dev_reward": 0.03747593,
      "dev_fee": 0.05,
      "approx_duration": "1460d, 0h, 0m, 0s",
      "approx_seconds": 126144000,
      "approx_days": 1460,
      "year": 4
    },
    {
      "height": 6307200,
      "circulating_supply": 7253792.04046279,
      "supply_left": 11146207.95953721,
      "block_reward": 0.88582109,
      "miner_supply": 6681686.25413206,
      "dev_supply": 572105.78633073,
      "mined_percentage": "39.42",
      "dev_reward": 0.04429105,
      "dev_fee": 0.05,
      "approx_duration": "1095d, 0h, 0m, 0s",
      "approx_seconds": 94608000,
      "approx_days": 1095,
      "year": 3
    },
    {
      "height": 4204800,
      "circulating_supply": 5226818.04663696,
      "supply_left": 13173181.95336304,
      "block_reward": 1.04691052,
      "miner_supply": 4756060.95001222,
      "dev_supply": 470757.09662474,
      "mined_percentage": "28.41",
      "dev_reward": 0.05234552,
      "dev_fee": 0.05,
      "approx_duration": "730d, 0h, 0m, 0s",
      "approx_seconds": 63072000,
      "approx_days": 730,
      "year": 2
    },
    {
      "height": 2102400,
      "circulating_supply": 2831232.26934144,
      "supply_left": 15568767.73065856,
      "block_reward": 1.23729459,
      "miner_supply": 2548109.0518685,
      "dev_supply": 283123.21747294,
      "mined_percentage": "15.39",
      "dev_reward": 0.12372945,
      "dev_fee": 0.1,
      "approx_duration": "365d, 0h, 0m, 0s",
      "approx_seconds": 31536000,
      "approx_days": 365,
      "year": 1
    },
    {
      "height": 0,
      "circulating_supply": 1.46230061,
      "supply_left": 18399998.53769939,
      "block_reward": 1.46230061,
      "miner_supply": 1.31607055,
      "dev_supply": 0.14623006,
      "mined_percentage": "0.00",
      "dev_reward": 0.14623006,
      "dev_fee": 0.1,
      "approx_duration": "0d, 0h, 0m, 0s",
      "approx_seconds": 0,
      "approx_days": 0,
      "year": 0
    }
  ];

  // Transform data for the chart - convert circulating supply to millions and map years to quarters
  const formattedData = jsonData.map(item => {
    // Convert to millions
    const supplyInMillions = item.circulating_supply / 1000000;
    
    // Determine the quarter label based on year
    let quarterLabel;
    if (item.year === 0) {
      quarterLabel = "Q2 2024";
    } else if (item.year === 5) {
      quarterLabel = "Q2 2029";
    } else if (item.year === 10) {
      quarterLabel = "Q2 2034";
    } else if (item.year === 15) {
      quarterLabel = "Q2 2039";
    } else if (item.year === 20) {
      quarterLabel = "Q2 2044";
    } else if (item.year === 25) {
      quarterLabel = "Q2 2049";
    } else if (item.year === 30) {
      quarterLabel = "Q2 2054";
    } else if (item.year === 35) {
      quarterLabel = "Q2 2059";
    } else if (item.year === 40) {
      quarterLabel = "Q2 2064";
    } else if (item.year === 45) {
      quarterLabel = "Q2 2069";
    } else {
      quarterLabel = `Year ${item.year}`;
    }
    
    return {
      year: item.year,
      quarterLabel,
      circulatingSupply: supplyInMillions.toFixed(2),
      originalSupply: item.circulating_supply
    };
  });

  // Sort by year for proper timeline display
  formattedData.sort((a, b) => a.year - b.year);
  
  // Custom tick formatter for Y axis to add 'M' for millions
  const formatYAxis = (value) => {
    return `${value}M`;
  };

  // Custom tooltip component
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 border rounded shadow">
          <p className="font-bold">{payload[0].payload.quarterLabel}</p>
          <p>Circulating Supply: {Number(payload[0].value).toFixed(2)}M</p>
          <p>Total Tokens: {payload[0].payload.originalSupply.toLocaleString()}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full h-full bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6 text-center"></h2>
      <div className="h-96 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={formattedData}
            margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey="quarterLabel" 
              tick={{ fontSize: 12 }}
              angle={-45}
              textAnchor="end"
              height={60}
              interval={4}
            >
              <Label value="Year" position="insideBottom" offset={-10} />
            </XAxis>
            <YAxis 
              tickFormatter={formatYAxis}
              domain={[0, 20]}
            >
              <Label value="Circulating Supply (XEL in millions)" angle={-90} position="insideLeft" style={{ textAnchor: 'middle' }} />
            </YAxis>
            <Tooltip content={<CustomTooltip active={undefined} payload={undefined} />} />
            <Line 
              type="monotone" 
              dataKey="circulatingSupply" 
              stroke="#02FFCF" 
              strokeWidth={3} 
              dot={{ fill: "#02FFCF", r: 2 }}
              activeDot={{ r: 6 }}
              name="Circulating Supply"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="text-sm text-gray-500 mt-4 text-center">
        Data shows circulating supply growth over time (in millions of tokens)
      </div>
    </div>
  );
};

const Tokenomics = () => {
  // State for circulating supply
  const [circulatingSupply, setCirculatingSupply] = useState("Loading...");

  // Fetch circulating supply on component mount
  useEffect(() => {
    const fetchCirculatingSupply = async () => {
      try {
        // Using the correct API endpoint
        const response = await fetch('https://mini-api.xelis.io/?key=circulating_supply');
        const textData = await response.text();
        
        // Parse as a number and round to integer before formatting with commas
        const integerSupply = Math.floor(Number(textData.trim()));
        const formattedSupply = integerSupply.toLocaleString();
        setCirculatingSupply(`${formattedSupply} XEL`);
      } catch (error) {
        console.error("Error fetching circulating supply:", error);
        setCirculatingSupply("Loading..."); // Fallback value
      }
    };

    fetchCirculatingSupply();
  }, []);

  // Token allocation data for the pie chart visualizations across phases
  const phaseAllocations = [
    {
      phase: "Initial Allocation",
      description: "Block 0 to 3,250,000 (~1.5 years)",
      allocation: [
        { category: "Mining Rewards", percentage: 90, color: "#00f2c3" },
        { category: "Treasury", percentage: 10, color: "#009e7c" }
      ]
    },
    {
      phase: "Expansion Allocation",
      description: "Block 3,250,000 to Stabilization",
      allocation: [
        { category: "Mining Rewards", percentage: 95, color: "#00f2c3" },
        { category: "Treasury", percentage: 5, color: "#009e7c" }
      ]
    },
    {
      phase: "Self Sustaining",
      description: "Eventual removal of mining fee",
      allocation: [
        { category: "Mining Rewards", percentage: 100, color: "#00f2c3" },
        { category: "Treasury", percentage: 0, color: "#009e7c" }
      ]
    }
  ];

  // Token details
  const tokenDetails = [
    { title: "Max Supply", value: "18,400,000 XEL", icon: <Package className="h-5 w-5" /> },
    { title: "Circulating Supply", value: circulatingSupply, icon: <Coins className="h-5 w-5" /> },
    { title: "Block Reward", value: "Decreasing each block", icon: <TrendingUp className="h-5 w-5" /> },
    { title: "Emission Model", value: "Deflationary", icon: <Lock className="h-5 w-5" /> }
  ];

  // Emission Schedule
  const emissionSchedule = [
    { period: "Phase 1 (Years 1-2)", reward: "2.5 XELIS per block", description: "Initial distribution phase with higher rewards to incentivize early network participation." },
    { period: "Phase 2 (Years 3-4)", reward: "1.25 XELIS per block", description: "Reduction phase to align with growing network value and reduce inflation pressure." },
    { period: "Phase 3 (Years 5-6)", reward: "0.625 XELIS per block", description: "Further reduction as network matures and transaction volume increases." },
    { period: "Phase 4 (Years 7+)", reward: "0.3125 XELIS per block", description: "Long-term stable emission rate to maintain network security while minimizing inflation." }
  ];

  // Render a single pie chart
  const renderPieChart = (allocation, size = 36) => {
    return (
      <svg className="w-full h-full" viewBox="0 0 100 100">
        {allocation.map((segment, index) => {
          // Calculate the segment position
          const startAngle = allocation
            .slice(0, index)
            .reduce((sum, s) => sum + s.percentage, 0) * 3.6; // 3.6 degrees per percentage point
          const endAngle = startAngle + segment.percentage * 3.6;
          
          // Convert angles to radians
          const startRad = (startAngle - 90) * Math.PI / 180;
          const endRad = (endAngle - 90) * Math.PI / 180;
          
          // Calculate the coordinates
          const x1 = 50 + size * Math.cos(startRad);
          const y1 = 50 + size * Math.sin(startRad);
          const x2 = 50 + size * Math.cos(endRad);
          const y2 = 50 + size * Math.sin(endRad);
          
          // Determine the large arc flag
          const largeArcFlag = segment.percentage > 50 ? 1 : 0;
          
          // Create the path (if percentage is 0, don't draw an arc)
          let d = "";
          if (segment.percentage === 0) {
            return null; // Don't render this segment
          } else if (segment.percentage === 100) {
            // Draw a full circle for 100%
            return <circle key={index} cx="50" cy="50" r={size} fill={segment.color} />;
          } else {
            // Draw a partial arc
            d = `M 50 50 L ${x1} ${y1} A ${size} ${size} 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;
          }
          
          return (
            <path key={index} d={d} fill={segment.color} />
          );
        })}
      </svg>
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">XELIS Tokenomics</h1>
            <p className="text-lg text-gray-600 mb-8">
              An overview of XELIS coin distribution, emission schedule, and economic model 
              designed for long-term sustainability and growth.
            </p>
          </div>
        </section>

        {/* Coin Overview */}
        <section className="container mx-auto px-4 py-12 bg-gray-50 rounded-3xl">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">Coin Overview</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="glass-card p-6 flex flex-col h-full">
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-lg bg-xelis-blue text-white">
                  <Coins className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold ml-4">XELIS Coin</h3>
              </div>
              
              <div className="space-y-4 mb-6 flex-grow">
                <p className="text-gray-600">
                  XELIS is the native utility coin of the XELIS blockchain, designed to 
                  facilitate transactions, secure the network through mining, and as a gas token for smart contracts and tokens.
                </p>
                <p className="text-gray-600">
                  With a fixed maximum supply and burning within our smart contract system, Xelis will be a deflationary emission model, engineered for long-term value preservation.
                </p>
                <p className="text-gray-600">
                This approach ensures scarcity over time, providing incentives for holders and creating a sustainable ecosystem where the coin's value is strengthened as usage grows.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {tokenDetails.map((detail, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <div className="text-xelis-blue mr-2">{detail.icon}</div>
                      <h4 className="font-medium">{detail.title}</h4>
                    </div>
                    <p className="text-gray-700">{detail.value}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="glass-card p-6 flex flex-col h-full">
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-lg bg-xelis-blue text-white">
                  <PieChart className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold ml-4">Coin Allocation Evolution</h3>
              </div>
              
              <p className="text-gray-600 mb-6">
              The XELIS funding strategy relies on a temporary mining block fee, which will decrease over time. Eventually, this fee will be fully eliminated, ensuring that 100% of mining rewards are allocated to miners.
              </p>
              
              <div className="flex-grow grid grid-cols-1 md:grid-cols-3 gap-6">
                {phaseAllocations.map((phase, phaseIndex) => (
                  <div key={phaseIndex} className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-center mb-2">{phase.phase}</h4>
                    <p className="text-sm text-center text-gray-500 mb-4">{phase.description}</p>
                    
                    <div className="relative w-full h-40 mx-auto mb-4">
                      <div className="absolute inset-0 flex items-center justify-center">
                        {renderPieChart(phase.allocation)}
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      {phase.allocation.map((segment, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: segment.color }}></div>
                          <span className="text-xs">{segment.category}: {segment.percentage}%</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Emission Schedule */}
        <section className="container mx-auto px-4 py-12 md:py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">Emission Schedule</h2>
            
            <div className="glass-card p-8 flex justify-center">
              <XelisEmissionSchedule />
            </div>
          </div>
        </section>

        {/* Token Utility */}
        <section className="container mx-auto px-4 py-12 bg-gray-50 rounded-3xl mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">Coin Utility</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "Network Security",
                description: "XELIS coins secure the network through Proof of Work GPU & CPU mining, with miners receiving rewards for honest participation.",
                icon: <Shield className="h-6 w-6" />
              },
              {
                title: "Transaction Fees",
                description: "XELIS is used to pay for transaction fees on the network, with a portion of smart contract fees burned.",
                icon: <ArrowRight className="h-6 w-6" />
              },
              {
                title: "Future Governance",
                description: "In the future XELIS will create a DAO where coin holders can influence governance decisions shaping the future of XELIS.",
                icon: <Users className="h-6 w-6" />
              }
            ].map((utility, index) => (
              <div key={index} className="glass-card p-6 hover:shadow-md transition-shadow duration-300">
                <div className="bg-xelis-blue/10 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4 text-xelis-blue">
                  {utility.icon}
                </div>
                <h3 className="text-xl font-medium mb-3">{utility.title}</h3>
                <p className="text-gray-600">{utility.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <AnimatedButton
              onClick={() => window.open("https://docs.xelis.io/tokenomics", "_blank")}
              className="mx-auto"
            >
              Learn More About XELIS Tokenomics
              <ArrowRight className="ml-2 h-4 w-4" />
            </AnimatedButton>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Tokenomics;