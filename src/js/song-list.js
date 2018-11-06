{
  let view = {
    el:'#songList-contianer',
    template:`
    <ul class = "songList">
      <li>歌曲111</li>
      <li class="active">歌曲222</li>
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
    }
  }
  let model = {}
  let controller = {
    init(view,model){
      this.view = view 
      this.model = model
      this.view.render(this.model.data)
    }
  }
  controller.init(view,model)
}