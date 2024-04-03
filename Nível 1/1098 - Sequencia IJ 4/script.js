let seqI = 1
let seqJ = 7

while(seqI < 10) {
    for(let i = 1; i <= 3; i++) {
        console.log(`I=${seqI} J=${seqJ}`)
        seqJ--
    }
    seqI += 2
    seqJ = seqI + 6
}