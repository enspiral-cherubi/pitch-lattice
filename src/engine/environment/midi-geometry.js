import THREE from 'three'
import midi from 'midi-node'
const fs = require('fs')

class MidiGeometry {

  constructor () {
    var self = this
    fs.readFile('./deb_pass_format0.mid',(error,data) => {
      if (error) throw error
      self.midiFile = data
    })
    console.log(this.midiFile)
    this.stream = new midi.Stream(this.midiFile)
    stream.on('startTrack',(track)=>{})
    stream.on('event',(delta,message)=>{
    // message.getStatus(); // 0x80
    // message.getCommand(); // "NOTE_OFF"
    // message.getChannel(); // 0
    // message.getData(); // [0x3c, 0x00]
    console.log(message)
    })
  }



}

export default MidiGeometry
