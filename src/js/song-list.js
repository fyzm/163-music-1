{
  let view = {
    el:'#songList-contianer',
    template:`
    <ul class = "songList">
      <li>歌曲111</li>
      <li>歌曲222</li>
      <li>歌曲333</li>
      <li>歌曲444</li>
      <li>歌曲555</li>
      <li>歌曲666</li>
      <li>歌曲777</li>
      <li>歌曲888</li>
      <li>歌曲999</li>
    </ul>
    `,
    render(data){
      $(this.el).html(this.template)
    },
    clearActive(){
      $(this.el).find('.active').removeClass('active')
    }
  }
  let model = {}
  let controller = {
    init(view,model){
      this.view = view 
      this.model = model
      this.view.render(this.model.data)
      window.eventHub.on('upload',()=>{
        this.view.clearActive()
      })
    }
  }
  controller.init(view,model)
}