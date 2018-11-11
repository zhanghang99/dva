import React from 'react';
import DragItem from './DragItem';
import styles from './Drag.less'
export default class Drag extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data : [1,2,3,4,5,6],
      Model:false
    }
  }
  componentWillMount(){
    this.screenWidth = window.screen.width;
    this.screenHeight = window.screen.height;
    this.coordinateAll = [];
  }
  coordinate = (data) =>{
    this.coordinateAll.push(data);
  }
  showModel=(width,height,offsetLeft,offsetTop)=>{
    this.width = width;
    this.height = height;
    this.setState({
      Model:true,
    })
    this.model.style.width = width + 'px';
    this.model.style.height = height + 'px';
    this.model.style.left = offsetLeft + 'px';
    this.model.style.top = offsetTop + 'px';
  }
  closeModel = (order) => {
    const { data } = this.state;
    this.setState({
      Model:false,
    })
    this.model.style.width = '0';
    this.model.style.height = '0';
    //this.DragBox包裹元素的上下左右边界距离
    const top = this.DragBox.offsetTop;
    const right = this.DragBox.offsetLeft + parseFloat(window.getComputedStyle(this.DragBox,null)['width']);
    const bottom = this.DragBox.offsetTop + parseFloat(window.getComputedStyle(this.DragBox,null)['height']);
    const left = this.DragBox.offsetLeft;
    if(this.modelLeft < left || this.modelLeft > right || this.modelTop < top || this.modelTop > bottom){
      console.log(true);
      return;
    }
    //将鼠标touchend时阴影块左上角离原有所有卡片块左上角直线距离计算一遍放入数组compareLine中
    let compareLine = [];
    this.coordinateAll.forEach((v,i)=>{
      let line = Math.pow(Math.abs(this.modelLeft - v.offsetLeft),2) + 
      Math.pow(Math.abs(this.modelTop - v.offsetTop),2);
      compareLine.push({distance:Math.sqrt(line),i});
    })
    //排序将鼠标touchend时离的目标位置最近的数据排在最前面
    compareLine.sort((a,b)=>{return a.distance > b.distance});
    //将拖动的卡片块数据从原有数据数组中去除保留
    //compareLine排序好的第一个元素表示阴影块在touchend时离哪个卡片块最近
    //然后将拖动的卡片块数据放入compareLine的第一个数据指定的位置
    let arr = [...data];
    const current = arr.splice(order,1);
    arr.splice(compareLine[0].i,0,current[0]);
    this.setState({
      data:arr
    })
    console.log(arr);
  }
  moveModel = (left,top) => {
    if(left < 0)left = 0;
    if(left > this.screenWidth - this.width)left = this.screenWidth - this.width;
    if(top < 0)top = 0;
    if(top > this.screenHeight - this.height)top = this.screenHeight - this.height ;
    this.model.style.left = left + 'px';
    this.model.style.top = top + 'px';
    this.modelLeft = left;
    this.modelTop = top;
  }
  render(){
    const { data,Model } = this.state;
    return (
      <div className={styles.Drag}
        ref={ (ref) => this.DragBox = ref}
      >
        {
          data.map((v,i)=>{
            return <DragItem 
              key={v} 
              id={v}
              order={i}
              coordinate={this.coordinate}
              showModel={this.showModel}
              closeModel={this.closeModel}
              moveModel={this.moveModel}
            />
          })
        }
        <div 
          className={Model ? `${styles['current']} ${styles.model}` : styles.model}
          ref={ref => {this.model = ref}}
        />
      </div>
    )
  }
}