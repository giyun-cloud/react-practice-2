import React, {Component} from 'react'

class Hellow extends Component {
  static defaultProps = {
    name: '이름없음'
  };
  render() {
    const { color, name, isSpecial } = this.props;
    return (
      <div style={{ color }}>
        {isSpecial && <b>*</b>}
        안녕하세요 {name}
      </div>
    );
  }
}

// function Hellow({color, name, isSpecial}) { 
//   return (
//     <>
//       <div style={{color}}>Hello React~~! {name}</div>
//       <div>{isSpecial && <b>*</b>}isSpecial use~!! true=*, false=none {name}</div>
//     </>
//   )
// }

Hellow.defaultProps = {
  nam: '이름없음'
}
export default Hellow