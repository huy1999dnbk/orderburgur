import {TANG_GIAM} from '../types/config'

export const handleChange = (nameFood, val) => {
    return {
        type: TANG_GIAM,
        nameFood,
        val
    }
}