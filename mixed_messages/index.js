const mixed_messages = () =>{
    let num = Math.floor(Math.random()*2);
    const sign = ['Aries', 'Tauro', 'Cancer'];
    const personalaty = ['Practical and Creative', 'emotional and impulsive', 'racional and cold'];
    const luck = ['n Ominous day, you should avoid going out', ' Good day to go out and make friends', ' normal day, dont expect many events '];
    let message = `Your sign is ${sign[num]} , you could say that you are ${personalaty[num]}. Today is a${luck[num]}.`;
    return message;
};

console.log(mixed_messages());
