import c5 from './drum-sample/c5.mp3'; 
import c5has from './drum-sample/c5has.mp3'; 
import d5 from './drum-sample/d5.mp3'; 
import e5 from './drum-sample/e5.mp3'; 
import f5 from './drum-sample/f5.mp3'; 
import g5 from './drum-sample/g5.mp3'; 
import a5 from './drum-sample/a5.mp3'; 
import a5has from './drum-sample/a5has.mp3'; 
import b5 from './drum-sample/b5.mp3'; 

const DNC = [
    {
        keyCode: 81,
        keyTrigger:'Q',
        id: 'c5',
        src: c5
    },
    {
        keyCode: 87,
        keyTrigger:'W',
        id: 'c5#',
        src: c5has
    },
    {
        keyCode: 69,
        keyTrigger:'E',
        id: 'd5',
        src: d5
    },
    {
        keyCode: 65,
        keyTrigger:'A',
        id: 'e5',
        src: e5
    },
    {
        keyCode: 83,
        keyTrigger:'S',
        id: 'f5',
        src: f5
    },
    {
        keyCode: 68,
        keyTrigger:'D',
        id: 'g5',
        src: g5
    },
    {
        keyCode: 90,
        keyTrigger:'Z',
        id: 'a5',
        src: a5
    },
    {
        keyCode: 88,
        keyTrigger:'X',
        id: 'a5#',
        src: a5has
    },
    {
        keyCode: 67,
        keyTrigger:'C',
        id: 'b5',
        src: b5
    },
    
];

export default DNC;
