### bug
1. this绑定出错
原因：绑定方法错误
this.handleInput.bind(this)
改为：this.handleInput=this.handleInput.bind(this)

### 重点
数据模块分解为4个包
1. index.js：创建store
2. actionCreators：创建项目中用到的所有Action
3. actionTypes：存储所有Action类型的常量
4. reducer：定义转换规则，store接受到Action后需要通过查阅reducer中的转换规则来改变state