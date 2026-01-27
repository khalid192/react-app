
export default function Freducer(state,action){
    switch(action.type){
        case 'add':
            console.log(1)
            return Number(action.data.input1) + Number(action.data.input2);

         case 'minus':
            console.log(2)
            return Number(action.data.input1) - Number(action.data.input2);
        
         case 'multiply':
            console.log(3)
            return Number(action.data.input1) * Number(action.data.input2);

         case 'divide':
            console.log(4)
            return Number(action.data.input1) / Number(action.data.input2);}
}