var status =
{byte:0,
level:0,
name: 'sick_lms_200',
message:'Desired Frequency met;Time stamps reasonable',
hardware_id:'SICK LMS',
values:[{key:'Events in window',value:2263},
				{key:'Events since startup', value:291898},
        {key:'Duration of window (s)',value:30.181571},
        {key:'Actual frequency (Hz)',value:74.979529},
        {key:'Target frequency (Hz)',value:75.000000},
        {key:'Minimum acceptable frequency (Hz)',value:52.500000},
        {key:'Maximum acceptable frequency (Hz)',value:97.500000},
        {key:'Earliest timestamp delay:',value:0.006673},
        {key:'Latest timestamp delay:',value:0.006684},
        {key:'Earliest acceptable timestamp delay:',value:0.000000},
        {key:'Latest acceptable timestamp delay:',value:0.200000},
        {key:'Late diagnostic update count:',value:0},
        {key:'Early diagnostic update count:',value:0},
        {key:'Zero seen diagnostic update count:',value:0}
        ]
};
//for(var i= 0; i< status.values.length; i++){
//console.log(status.values[i]);
//};


console.log('byte:',status.byte);
console.log('level:',status.level);
console.log('name:',status.name);
console.log('message:',status.message);
console.log('hardware_id:',status.hardware_id);
console.log(status.values[0].value);
status.values.forEach(function(element){console.log(element); });
