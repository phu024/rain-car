let sel1 = 0
let rows: number[] = []
let dt: number[] = []
let t: number[] = []
let mode = 0
function change_display (sel: number) {
    sel1 = sel
    for (let index = 0; index < 5; index++) {
        rows.push(4)
        dt.push(500)
        t.push(input.runningTime())
    }
    if (sel == 1) {
        rain()
    } else if (sel == 2) {
        car()
    }
}
function car () {
    for (let index2 = 0; index2 <= 4; index2++) {
        if (input.runningTime() - t[index2] >= dt[index2]) {
            led.unplot(rows[index2], index2)
            t[index2] = input.runningTime()
            rows[index2] = rows[index2] + 1
            if (rows[index2] == 5) {
                rows[index2] = randint(-1, -5)
                dt[index2] = randint(50, 150)
            }
            led.plot(rows[index2], index2)
        }
    }
}
input.onButtonPressed(Button.A, function () {
    mode = 1
})
input.onButtonPressed(Button.B, function () {
    mode = 2
})
function rain () {
    for (let index4 = 0; index4 <= 4; index4++) {
        if (input.runningTime() - t[index4] >= dt[index4]) {
            led.unplot(index4, rows[index4])
            t[index4] = input.runningTime()
            rows[index4] = rows[index4] + 1
            if (rows[index4] == 5) {
                rows[index4] = randint(-1, -5)
                dt[index4] = randint(50, 150)
            }
            led.plot(index4, rows[index4])
        }
    }
}
basic.forever(function () {
    change_display(mode)
})
