# BinaryClock
 A simple webpage app that displays a clock with the time in a binary format. This project was inspired by a real clock I own that displays the time in the same way.
# How do I read this clock?
 The clock displays the time in the 24 hour format. The hour, minute and second are converted from their integar value to a padded 6-bit value. This value is then displayed as columns of "LEDs" that show the value in a binary format.
 
 The clock itself is 3 vertical columns with 6 cells. Each column shows the 6-bit value of either the hour, minute or second. The cells are the "LEDs" for the 6-bit value shown bitwise. Each cell will be "unlit" if the value is "0" and "lit" if the value is "1".
 
 The order of the "LEDs" follows this format:
 | Hour | Minute | Second |
 | :---: | :---: | :---: |
 | HourBit5 | MinuteBit5 | SecondBit5 |
 | HourBit4 | MinuteBit4 | SecondBit4 |
 | HourBit3 | MinuteBit3 | SecondBit3 |
 | HourBit2 | MinuteBit2 | SecondBit2 |
 | HourBit1 | MinuteBit1 | SecondBit1 |
 | HourBit0 | MinuteBit0 | SecondBit0 |
