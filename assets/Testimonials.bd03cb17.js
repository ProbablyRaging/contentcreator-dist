import{r as f,R as v,j as i,a as r,x as d,s as h,y as b}from"./index.14049f5d.js";const w="/assets/quotes.9bf91f98.svg";var y=Object.defineProperty,M=Object.defineProperties,_=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,O=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable,c=(e,t,s)=>t in e?y(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,n=(e,t)=>{for(var s in t||(t={}))O.call(t,s)&&c(e,s,t[s]);if(p)for(var s of p(t))j.call(t,s)&&c(e,s,t[s]);return e},a=(e,t)=>M(e,_(t)),N=class extends f.exports.Component{constructor(e){super(e),this.ref=v.createRef(),this.state={style:{}};const t={reverse:!1,max:35,perspective:1e3,easing:"cubic-bezier(.03,.98,.52,.99)",scale:"1.1",speed:"1000",transition:!0,axis:null,reset:!0};this.width=null,this.height=null,this.left=null,this.top=null,this.transitionTimeout=null,this.updateCall=null,this.element=null,this.settings=Object.assign({},t,this.props.options),this.reverse=this.settings.reverse?-1:1,this.onMouseEnter=this.onMouseEnter.bind(this,this.props.onMouseEnter),this.onMouseMove=this.onMouseMove.bind(this,this.props.onMouseMove),this.onMouseLeave=this.onMouseLeave.bind(this,this.props.onMouseLeave)}componentDidMount(){this.element=this.ref.current,setTimeout(()=>{this.element.parentElement.querySelector(":hover")===this.element&&this.onMouseEnter()},0)}componentWillUnmount(){clearTimeout(this.transitionTimeout),cancelAnimationFrame(this.updateCall)}onMouseEnter(e=()=>{},t){return this.updateElementPosition(),this.setState(Object.assign({},this.state,{style:a(n({},this.state.style),{willChange:"transform"})})),this.setTransition(),e(t)}reset(){window.requestAnimationFrame(()=>{this.setState(Object.assign({},this.state,{style:a(n({},this.state.style),{transform:`perspective(${this.settings.perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`})}))})}onMouseMove(e=()=>{},t){return t.persist(),this.updateCall!==null&&window.cancelAnimationFrame(this.updateCall),this.event=t,this.updateCall=requestAnimationFrame(this.update.bind(this,t)),e(t)}setTransition(){clearTimeout(this.transitionTimeout),this.setState(Object.assign({},this.state,{style:a(n({},this.state.style),{transition:`${this.settings.speed}ms ${this.settings.easing}`})})),this.transitionTimeout=setTimeout(()=>{this.setState(Object.assign({},this.state,{style:a(n({},this.state.style),{transition:""})}))},this.settings.speed)}onMouseLeave(e=()=>{},t){return this.setTransition(),this.settings.reset&&this.reset(),e(t)}getValues(e){const t=(e.nativeEvent.clientX-this.left)/this.width,s=(e.nativeEvent.clientY-this.top)/this.height,o=Math.min(Math.max(t,0),1),l=Math.min(Math.max(s,0),1),m=(this.reverse*(this.settings.max/2-o*this.settings.max)).toFixed(2),u=(this.reverse*(l*this.settings.max-this.settings.max/2)).toFixed(2),g=o*100,x=l*100;return{tiltX:m,tiltY:u,percentageX:g,percentageY:x}}updateElementPosition(){const e=this.element.getBoundingClientRect();this.width=this.element.offsetWidth,this.height=this.element.offsetHeight,this.left=e.left,this.top=e.top}update(e){const t=this.getValues(e);this.setState(Object.assign({},this.state,{style:a(n({},this.state.style),{transform:`perspective(${this.settings.perspective}px) rotateX(${this.settings.axis==="x"?0:t.tiltY}deg) rotateY(${this.settings.axis==="y"?0:t.tiltX}deg) scale3d(${this.settings.scale}, ${this.settings.scale}, ${this.settings.scale})`})})),this.updateCall=null}render(){const e=Object.assign({},this.props.style,this.state.style);return i("div",{style:e,ref:this.ref,className:this.props.className,onMouseEnter:this.onMouseEnter,onMouseMove:this.onMouseMove,onMouseLeave:this.onMouseLeave,children:this.props.children})}};const S=({darkMode:e,content:t,name:s,title:o,img:l})=>i(N,{options:{max:15,scale:1},children:r("div",{className:`${e?"bg-[#16181A] drop-shadow-cardShadowSmDark hover:drop-shadow-cardShadowLgDark":"bg-[#fff] drop-shadow-cardShadowSm hover:drop-shadow-cardShadowLg"} relative flex flex-col min-w-0 min-h-[300px] max-w-[400px] md:w-full md:min-h-[250px] rounded-2xl border-none card-anim`,children:[r("div",{className:"p-4",children:[i("img",{src:w,alt:"double_quotes",className:"w-[42.6px] h-[27.6px] object-contain sm:max-w-[32px]"}),i("p",{className:"font-poppins font-normal text-[18px] leading-[32.4px] my-10 sm:text-[14px] sm:text-center",children:t})]}),i("div",{children:r("div",{className:`${e?"bg-[#1b1e20]":"bg-[#f4f4f4]"} flex flex-row py-2 px-4 rounded-2xl rounded-t-none`,children:[i("img",{src:l,alt:s,className:"w-[48px] h-[48px] rounded-full mr-6"}),r("div",{children:[i(d,{h4:!0,className:"font-poppins font-semibold text-[20px] sm:text-[18px] leading-[32px]",css:{display:"inline-block",textGradient:"90deg, rgba(14,98,194,1) 0%, rgba(83,155,237,1) 76%, rgba(14,98,194,1) 100%"},children:s}),i("p",{className:"font-poppins font-normal text-[16px] leading-[24px]",children:o})]})]})})]})}),P=({darkMode:e})=>r("section",{id:"testimonials",className:`${h.paddingY} ${h.flexCenter} flex-col relative sm:pb-0 px-16 sm:px-6 xxlup:px-0`,children:[i("div",{className:"absolute rounded-full bg-gradient z-[0] w-[10rem] h-[66rem] rotate-[54deg] top-[3rem] right-[70rem] sm:top-[40rem] sm:right-[9rem]"}),i("div",{className:"w-full flex justify-between items-center flex-row md:flex-col mb-16 sm:mb-6 relative z-[1]",children:i(d,{h2:!0,className:`${h.headingRes} sm:leading-10 sm:text-center sm:text-[24px]`,children:"What our community thinks"})}),i("div",{className:"flex flex-wrap gap-8 justify-between xl:justify-center w-full feedback-container relative z-[1]",children:b.map(t=>i(S,{...t,darkMode:e},t.id))})]});export{P as default};
