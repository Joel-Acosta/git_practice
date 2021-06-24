const mixed_messages = () =>{
    let num = (array)=> {return Math.floor(Math.random()*array.length)}; // it will be used to randomize the index of each list

    const sign = ['Aries', 'Tauro', 'Cancer'];
    const personalaty = ['Practical and Creative', 'emotional and impulsive', 'racional and cold'];
    const luck = ['n Ominous day, you should avoid going out', ' Good day to go out and make friends', ' normal day, dont expect many events '];

    let message = `Your sign is ${sign[num(sign)]} , you could say that you are ${personalaty[num(personalaty)]}. Today is a${luck[num(luck)]}.`;

    console.log(message);
};

mixed_messages();
