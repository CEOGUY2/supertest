"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[5051],{25051:(t,e,n)=>{n.r(e),n.d(e,{default:()=>w}),n(67294);var r=n(43323),i=n(51995),a=n(15078),o=n.n(a),s=n(45697),l=n.n(s),c=n(71939),p=n(67190),h=n(51115),d=n(28062);const u=l().shape({name:l().string,val:l().number.isRequired}),f={name:l().string,val:l().number.isRequired,children:l().arrayOf(l().oneOfType([l().shape((g=()=>f,()=>g().apply(void 0,arguments))),u]))};var g;const m=l().oneOfType([l().shape(f),u]),y={data:l().arrayOf(m),width:l().number,height:l().number,colorScheme:l().string,dateTimeFormat:l().string,equalDateSize:l().bool,levels:l().arrayOf(l().string),metrics:l().arrayOf(l().oneOfType([l().string,l().object])),numberFormat:l().string,partitionLimit:l().number,partitionThreshold:l().number,timeSeriesOption:l().string,useLogScale:l().bool,useRichTooltip:l().bool};function v(t,e){const{width:n,height:r,data:i,colorScheme:a,dateTimeFormat:s,equalDateSize:l,levels:u,useLogScale:f=!1,metrics:g=[],numberFormat:m,partitionLimit:y,partitionThreshold:v,useRichTooltip:x,timeSeriesOption:b="not_time",sliceId:$}=e,w=o().select(t);w.classed("superset-legacy-chart-partition",!0);const T=["adv_anal","time_series"].includes(b),k=(0,p.JB)(m),N=(0,h.bt)(s),A=d.getScale(a);w.selectAll("*").remove();const O=w.append("div").classed("partition-tooltip",!0);function S(t){return g.includes(t.data.name)&&T}function R(t){return t?T&&1===t?"Date":u[t-(T?2:1)]:"Metric"}function C(e,a){const s=a[e],p=n,h=r/i.length,d=o().scale.linear().range([0,p]),u=o().scale.linear().range([0,h]),g=w.append("div").attr("class","chart").style("width",`${p}px`).style("height",`${h}px`).append("svg:svg").attr("width",p).attr("height",h);e!==i.length-1&&i.length>1&&g.style("padding-bottom","3px"),0!==e&&i.length>1&&g.style("padding-top","3px");const m=(0,c.ZP)(s);function b(e,n){let r="<table>";if(x){const t=function(t){const e=[t];let n=t;for(;n.parent;)e.push(n.parent),n=n.parent;return e}(n);t.reverse().forEach((t=>{r+="<tbody>",r+=`<tr><td><div style='border: 2px solid transparent;background-color: ${t.color};'></div></td><td>${R(t.depth)}</td><td>${t.name}</td><td>${t.disp}</td></tr>`}))}else r+=`<thead><tr><td colspan="3"><strong>${R(n.depth)}</strong></td></tr></thead><tbody>`,r+=`<tr><td><div style='border: thin solid grey; background-color: ${n.color};'></div></td><td>${n.name}</td><td>${n.disp}</td></tr>`;r+="</tbody></table>";const[i,a]=o().mouse(t);e.html(r).style("left",`${i+15}px`).style("top",`${a}px`)}m.eachAfter((t=>{t.disp=t.data.val,t.value=t.disp<0?-t.disp:t.disp,t.weight=t.value,t.name=t.data.name,t.parent&&S(t.parent)&&(t.weight=l?1:t.value,t.value=t.name,t.name=N(t.name)),f&&(t.weight=Math.log(t.weight+1)),t.disp=t.disp&&!Number.isNaN(t.disp)&&Number.isFinite(t.disp)?k(t.disp):""})),m.sort(((t,e)=>{const n=e.value-t.value;return 0===n?e.name>t.name?1:-1:n})),v&&v>=0&&m.each((t=>{if(t.sum=t.children&&t.children.reduce(((t,e)=>t+e.weight),0)||1,t.children)if(S(t)){if(l)return;const e=[];for(let n=1;n<t.children.length;n+=1)t.children[n].weight/t.sum<v&&e.push(n);for(let n=e.length-1;n>=0;n-=1)t.children.splice(e[n],1)}else{let e;for(e=1;e<t.children.length&&!(t.children[e].weight/t.sum<v);e+=1);t.children=t.children.slice(0,e)}})),y&&y>=0&&m.each((t=>{t.children&&t.children.length>y&&(S(t)||(t.children=t.children.slice(0,y)))})),m.eachAfter((t=>{t.sum=t.children&&t.children.reduce(((t,e)=>t+e.weight),0)||1}));const T=function(t){const e=[],n=1/(t.height+1);let r=null;return t.each((t=>{t.y=n*t.depth,t.dy=n,t.parent?(t.x=r.depth===t.parent.depth?0:r.x+r.dx,t.dx=t.weight/t.parent.sum*t.parent.dx):(t.x=0,t.dx=1),r=t,e.push(t)})),e}(m);let C=p/m.dx,U=h/1;function Z(t){return`translate(8,${t.dx*U/2})`}const z=g.selectAll("g").data(T).enter().append("svg:g").attr("transform",(t=>`translate(${d(t.y)},${u(t.x)})`)).on("mouseover",(t=>{O.interrupt().transition().duration(100).style("opacity",.9),b(O,t)})).on("mousemove",(t=>{b(O,t)})).on("mouseout",(()=>{O.interrupt().transition().duration(250).style("opacity",0)}));z.on("click",(function t(e){if(!e.children)return!!e.parent&&t(e.parent);C=(e.y?p-40:p)/(1-e.y),U=h/e.dx,d.domain([e.y,1]).range([e.y?40:0,p]),u.domain([e.x,e.x+e.dx]);const n=z.transition().duration(o().event.altKey?7500:750).attr("transform",(t=>`translate(${d(t.y)},${u(t.x)})`));return n.select("rect").attr("width",e.dy*C).attr("height",(t=>t.dx*U)),n.select("text").attr("transform",Z).style("opacity",(t=>t.dx*U>12?1:0)),o().event.stopPropagation(),!0})),z.append("svg:rect").attr("width",m.dy*C).attr("height",(t=>t.dx*U)),z.append("svg:text").attr("transform",Z).attr("dy","0.35em").style("opacity",(t=>t.dx*U>12?1:0)).text((t=>t.disp?`${t.name}: ${t.disp}`:t.name)),z.selectAll("rect").style("fill",(t=>(t.color=A(t.name,$),t.color)))}for(let t=0;t<i.length;t+=1)C(t,i)}v.displayName="Icicle",v.propTypes=y;const x=v;var b=n(11965);const $=(0,r.Z)(x),w=(0,i.iK)((({className:t,...e})=>(0,b.tZ)("div",{className:t},(0,b.tZ)($,e))))`
  ${({theme:t})=>`\n    .superset-legacy-chart-partition {\n      position: relative;\n    }\n\n    .superset-legacy-chart-partition .chart {\n      display: block;\n      margin: auto;\n      font-size: ${t.typography.sizes.s}px;\n    }\n\n    .superset-legacy-chart-partition rect {\n      stroke: ${t.colors.grayscale.light2};\n      fill: ${t.colors.grayscale.light1};\n      fill-opacity: ${t.opacity.heavy};\n      transition: fill-opacity 180ms linear;\n      cursor: pointer;\n    }\n\n    .superset-legacy-chart-partition rect:hover {\n      fill-opacity: 1;\n    }\n\n    .superset-legacy-chart-partition g text {\n      font-weight: ${t.typography.weights.bold};\n      fill: ${t.colors.grayscale.dark1};\n    }\n\n    .superset-legacy-chart-partition g:hover text {\n      fill: ${t.colors.grayscale.dark2};\n    }\n\n    .superset-legacy-chart-partition .partition-tooltip {\n      position: absolute;\n      top: 0;\n      left: 0;\n      opacity: 0;\n      padding: ${t.gridUnit}px;\n      pointer-events: none;\n      background-color: ${t.colors.grayscale.dark2};\n      border-radius: ${t.gridUnit}px;\n    }\n\n    .partition-tooltip td {\n      padding-left: ${t.gridUnit}px;\n      font-size: ${t.typography.sizes.s}px;\n      color: ${t.colors.grayscale.light5};\n    }\n  `}
`},71939:(t,e,n)=>{function r(t){var e=0,n=t.children,r=n&&n.length;if(r)for(;--r>=0;)e+=n[r].value;else e=1;t.value=e}function i(t,e){var n,r,i,o,c,p=new l(t),h=+t.value&&(p.value=t.value),d=[p];for(null==e&&(e=a);n=d.pop();)if(h&&(n.value=+n.data.value),(i=e(n.data))&&(c=i.length))for(n.children=new Array(c),o=c-1;o>=0;--o)d.push(r=n.children[o]=new l(i[o])),r.parent=n,r.depth=n.depth+1;return p.eachBefore(s)}function a(t){return t.children}function o(t){t.data=t.data.data}function s(t){var e=0;do{t.height=e}while((t=t.parent)&&t.height<++e)}function l(t){this.data=t,this.depth=this.height=0,this.parent=null}n.d(e,{ZP:()=>i}),l.prototype=i.prototype={constructor:l,count:function(){return this.eachAfter(r)},each:function(t){var e,n,r,i,a=this,o=[a];do{for(e=o.reverse(),o=[];a=e.pop();)if(t(a),n=a.children)for(r=0,i=n.length;r<i;++r)o.push(n[r])}while(o.length);return this},eachAfter:function(t){for(var e,n,r,i=this,a=[i],o=[];i=a.pop();)if(o.push(i),e=i.children)for(n=0,r=e.length;n<r;++n)a.push(e[n]);for(;i=o.pop();)t(i);return this},eachBefore:function(t){for(var e,n,r=this,i=[r];r=i.pop();)if(t(r),e=r.children)for(n=e.length-1;n>=0;--n)i.push(e[n]);return this},sum:function(t){return this.eachAfter((function(e){for(var n=+t(e.data)||0,r=e.children,i=r&&r.length;--i>=0;)n+=r[i].value;e.value=n}))},sort:function(t){return this.eachBefore((function(e){e.children&&e.children.sort(t)}))},path:function(t){for(var e=this,n=function(t,e){if(t===e)return t;var n=t.ancestors(),r=e.ancestors(),i=null;for(t=n.pop(),e=r.pop();t===e;)i=t,t=n.pop(),e=r.pop();return i}(e,t),r=[e];e!==n;)e=e.parent,r.push(e);for(var i=r.length;t!==n;)r.splice(i,0,t),t=t.parent;return r},ancestors:function(){for(var t=this,e=[t];t=t.parent;)e.push(t);return e},descendants:function(){var t=[];return this.each((function(e){t.push(e)})),t},leaves:function(){var t=[];return this.eachBefore((function(e){e.children||t.push(e)})),t},links:function(){var t=this,e=[];return t.each((function(n){n!==t&&e.push({source:n.parent,target:n})})),e},copy:function(){return i(this).eachBefore(o)}}},43323:(t,e,n)=>{n.d(e,{Z:()=>a});var r=n(67294),i=n(11965);function a(t,e){class n extends r.Component{constructor(t){super(t),this.container=void 0,this.setContainerRef=this.setContainerRef.bind(this)}componentDidMount(){this.execute()}componentDidUpdate(){this.execute()}componentWillUnmount(){this.container=void 0,null!=e&&e.componentWillUnmount&&e.componentWillUnmount.bind(this)()}setContainerRef(t){this.container=t}execute(){this.container&&t(this.container,this.props)}render(){const{id:t,className:e}=this.props;return(0,i.tZ)("div",{ref:this.setContainerRef,id:t,className:e})}}const a=n;return t.displayName&&(a.displayName=t.displayName),t.propTypes&&(a.propTypes={...a.propTypes,...t.propTypes}),t.defaultProps&&(a.defaultProps=t.defaultProps),n}}}]);
//# sourceMappingURL=86881151df595df4d35b.chunk.js.map