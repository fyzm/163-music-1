import { eventNames } from "cluster";

window.eventHub = {
  events: {
    '羊城晚报':[fn],
    '楚天都是报':[],
  },
  emit(eventName,data){
    for(let key in this.events){
      if(key === eventName){
        let fnList = this.events[key]
        fnList.map((fn)=>{
          fn.call(undefined,data)
        })
      }
    }
  },
  on(eventName,fn){
    for(let key in this.events){
      if(key === eventName){
        if(this.events[key] === undefined){
          this.events[key] = []
        }
        this.events[key].push(fn)
      }
    }
  },
}