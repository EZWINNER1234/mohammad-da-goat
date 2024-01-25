music.play(music.stringPlayable("F E C5 E D G C5 D ", 120), music.PlaybackMode.UntilDone)
music.play(music.tonePlayable(587, music.beat(BeatFraction.Sixteenth)), music.PlaybackMode.UntilDone)
led.plot(16, 23)
music.play(music.builtinPlayableSoundEffect(soundExpression.mysterious), music.PlaybackMode.UntilDone)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.showIcon(IconNames.Diamond)
basic.forever(function () {
	
})
