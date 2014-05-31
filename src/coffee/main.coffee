class ProgressBar
    constructor: () ->
      @percent = 0
    start:()->
      clearInterval @tickerId
      program = app.get 'plasma.program'
      switch program
        when 1 then @minutes = 15
        when 3 then @minutes = 2.5
        when 5 then @minutes = 15
      @inicio = new Date()
      @final = new Date()
      @final = new Date @final.setSeconds @final.getSeconds() + @minutes*60
      @tickCounter = 0
      @tickerId = setInterval @tick, 1600
    tick:()=>
      @tickCounter++
      now = new Date()
      if now > @final
        @cancel()
        step.next()
      @percent = Math.floor ((now - @inicio) / (@final - @inicio))*100
      console.log @percent
      app.set 'pBar.percent', @percent
    cancel:()->
      clearInterval @tickerId
      app.set 'pBar.percent', ''



# app = new Ractive {
#   el: 'main'
#   template:'#template'
#   data:{}
#   # Aqui van los datos de la app
# }

window.ProgressBar = ProgressBar