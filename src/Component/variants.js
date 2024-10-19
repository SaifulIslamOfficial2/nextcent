/* eslint-disable no-unused-vars */
export   let fadeIn = (deracation,delay)=> {
    return {
        hidden : {
            y : deracation === 'up'? 40: deracation === 'down'? -40 : 0,
            x : deracation === 'left'? 40: deracation === 'right'? -40 : 0,
        },

        show : {
            y: 0,
            x : 0,
            opacity : 1,
            transition :{
                type: 'tween',
                duration: 1.2,
                delay : delay,
                ease : [0.25,0.25,0.25,0.75],

            }
        }
    }
}