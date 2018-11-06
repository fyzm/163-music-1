{
  let view = {
    el: '.page > main',
    init() {
      this.$el = $(this.el)
    },
    template: `
    <h1>歌曲名</h1>
    <form class="form">
    <div class="row">
      <label>
        歌名
      </label>
      <input name = "name" type="text" value = "__key__">
    </div>
    <div class="row">
      <label>
        歌手
      </label>
      <input name = "singer" type="text">
    </div>
    <div class="row">
      <label>
        外链
      </label>
      <input name = "url" type="text" value = "__link__">
    </div>
    <div class="row actions">
      <button type="button">保存</button>
    </div>
    </form>
    `,
    render(data = {}) {
      let placeholders = ['key', 'link']
      let html = this.template
      placeholders.map((string) => {
        html = html.replace(`__${string}__`, data[string] || '')
      })
      $(this.el).html(html)
    }
  }
  let model = {
    data: {
      name: '', singer: '', url: '', id: ''
    },
    create(data) {
      // 声明类型
      var Song = AV.Object.extend('Song');
      // 新建对象
      var song = new Song();
      // 设置名称
      song.set('name', data.name);
      // 设置优先级
      song.set('singer',data.singer);
      song.set('url',data.url);
      //song.set('id',data.id);
      song.save().then( (newSong)=>{
        console.log(newSong);
      }, (error)=> {
        console.error(error);
      });
    }
  }

  let controller = {
    init(view, model) {
      this.view = view
      this.model = model
      this.view.init()
      this.view.render(this.model.data)
      this.bindEvents()
      window.eventHub.on('upload', (data) => {
        this.view.render(data)
      })
    },
    bindEvents() {
      this.view.$el.find('submit', 'form', (e) => {
        e.preventDefault()
        let needs = 'name singer url'.split(' ')
        let data = {}
        needs.map((string) => {
          data[string] = this.view.$el.find(`name="${string}"`).val()
        })
        this.model.create(data)
        //console.log(data)
      })
    }
  }
  controller.init(view, model)
}