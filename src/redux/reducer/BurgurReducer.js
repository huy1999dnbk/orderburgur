import { TANG_GIAM } from '../types/config'

const burgurState = {
    burgur: [
        {
            name: 'salad',
            amount: 1,
            initialPrice: 10,
        },
        {
            name: 'cheese',
            amount: 1,
            initialPrice: 20,
        },
        {
            name: 'beef',
            amount: 1,
            initialPrice: 55,
        },
    ],
}

const BurgurReducer = (state = burgurState, action) => {

    switch (action.type) {
        case TANG_GIAM:
            let burgurTemp = [...state.burgur]
            let index = burgurTemp.findIndex(item => item.name === action.nameFood)
            if (burgurTemp[index].amount >= 0) {
                if (action.val === 1) {
                    burgurTemp[index].amount += 1
                } else {
                    if(burgurTemp[index].amount >= 1){
                        burgurTemp[index].amount += -1
                    }
                    else{
                        alert('Mon an ko co gia tri am!!!!!!!!!!!!!')
                    }
                }
            } 
            state.burgur = burgurTemp
            return { ...state }
        default:
            return { ...state }
    }
}

export default BurgurReducer