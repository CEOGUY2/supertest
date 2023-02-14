"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[4237,6871,1261],{28569:(t,e,i)=>{i.d(e,{Z:()=>c});var o=i(95772),s=i(93844),a=i(51331),n=i(1113),r=i(53982);const l=[0,0,0,255],d={radiusUnits:"meters",radiusScale:{type:"number",min:0,value:1},radiusMinPixels:{type:"number",min:0,value:0},radiusMaxPixels:{type:"number",min:0,value:Number.MAX_SAFE_INTEGER},lineWidthUnits:"meters",lineWidthScale:{type:"number",min:0,value:1},lineWidthMinPixels:{type:"number",min:0,value:0},lineWidthMaxPixels:{type:"number",min:0,value:Number.MAX_SAFE_INTEGER},stroked:!1,filled:!0,billboard:!1,getPosition:{type:"accessor",value:t=>t.position},getRadius:{type:"accessor",value:1},getFillColor:{type:"accessor",value:l},getLineColor:{type:"accessor",value:l},getLineWidth:{type:"accessor",value:1},strokeWidth:{deprecatedFor:"getLineWidth"},outline:{deprecatedFor:"stroked"},getColor:{deprecatedFor:["getFillColor","getLineColor"]}};class c extends o.Z{getShaders(){return super.getShaders({vs:"#define SHADER_NAME scatterplot-layer-vertex-shader\n\nattribute vec3 positions;\n\nattribute vec3 instancePositions;\nattribute vec3 instancePositions64Low;\nattribute float instanceRadius;\nattribute float instanceLineWidths;\nattribute vec4 instanceFillColors;\nattribute vec4 instanceLineColors;\nattribute vec3 instancePickingColors;\n\nuniform float opacity;\nuniform float radiusScale;\nuniform float radiusMinPixels;\nuniform float radiusMaxPixels;\nuniform float lineWidthScale;\nuniform float lineWidthMinPixels;\nuniform float lineWidthMaxPixels;\nuniform float stroked;\nuniform bool filled;\nuniform bool billboard;\n\nvarying vec4 vFillColor;\nvarying vec4 vLineColor;\nvarying vec2 unitPosition;\nvarying float innerUnitRadius;\nvarying float outerRadiusPixels;\n\nvoid main(void) {\n  geometry.worldPosition = instancePositions;\n  outerRadiusPixels = clamp(\n    project_size_to_pixel(radiusScale * instanceRadius),\n    radiusMinPixels, radiusMaxPixels\n  );\n  float lineWidthPixels = clamp(\n    project_size_to_pixel(lineWidthScale * instanceLineWidths),\n    lineWidthMinPixels, lineWidthMaxPixels\n  );\n  outerRadiusPixels += stroked * lineWidthPixels / 2.0;\n  unitPosition = positions.xy;\n  geometry.uv = unitPosition;\n  geometry.pickingColor = instancePickingColors;\n\n  innerUnitRadius = 1.0 - stroked * lineWidthPixels / outerRadiusPixels;\n  \n  if (billboard) {\n    gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, vec3(0.0), geometry.position);\n    vec3 offset = positions * outerRadiusPixels;\n    DECKGL_FILTER_SIZE(offset, geometry);\n    gl_Position.xy += project_pixel_size_to_clipspace(offset.xy);\n  } else {\n    vec3 offset = positions * project_pixel_size(outerRadiusPixels);\n    DECKGL_FILTER_SIZE(offset, geometry);\n    gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, offset, geometry.position);\n  }\n\n  DECKGL_FILTER_GL_POSITION(gl_Position, geometry);\n  vFillColor = vec4(instanceFillColors.rgb, instanceFillColors.a * opacity);\n  DECKGL_FILTER_COLOR(vFillColor, geometry);\n  vLineColor = vec4(instanceLineColors.rgb, instanceLineColors.a * opacity);\n  DECKGL_FILTER_COLOR(vLineColor, geometry);\n}\n",fs:"#define SHADER_NAME scatterplot-layer-fragment-shader\n\nprecision highp float;\n\nuniform bool filled;\nuniform float stroked;\n\nvarying vec4 vFillColor;\nvarying vec4 vLineColor;\nvarying vec2 unitPosition;\nvarying float innerUnitRadius;\nvarying float outerRadiusPixels;\n\nvoid main(void) {\n  geometry.uv = unitPosition;\n\n  float distToCenter = length(unitPosition) * outerRadiusPixels;\n  float inCircle = smoothedge(distToCenter, outerRadiusPixels);\n\n  if (inCircle == 0.0) {\n    discard;\n  }\n\n  if (stroked > 0.5) {\n    float isLine = smoothedge(innerUnitRadius * outerRadiusPixels, distToCenter);\n    if (filled) {\n      gl_FragColor = mix(vFillColor, vLineColor, isLine);\n    } else {\n      if (isLine == 0.0) {\n        discard;\n      }\n      gl_FragColor = vec4(vLineColor.rgb, vLineColor.a * isLine);\n    }\n  } else if (filled) {\n    gl_FragColor = vFillColor;\n  } else {\n    discard;\n  }\n\n  gl_FragColor.a *= inCircle;\n  DECKGL_FILTER_COLOR(gl_FragColor, geometry);\n}\n",modules:[s.Z,a.Z]})}initializeState(){this.getAttributeManager().addInstanced({instancePositions:{size:3,type:5130,fp64:this.use64bitPositions(),transition:!0,accessor:"getPosition"},instanceRadius:{size:1,transition:!0,accessor:"getRadius",defaultValue:1},instanceFillColors:{size:this.props.colorFormat.length,transition:!0,normalized:!0,type:5121,accessor:"getFillColor",defaultValue:[0,0,0,255]},instanceLineColors:{size:this.props.colorFormat.length,transition:!0,normalized:!0,type:5121,accessor:"getLineColor",defaultValue:[0,0,0,255]},instanceLineWidths:{size:1,transition:!0,accessor:"getLineWidth",defaultValue:1}})}updateState({props:t,oldProps:e,changeFlags:i}){if(super.updateState({props:t,oldProps:e,changeFlags:i}),i.extensionsChanged){var o;const{gl:t}=this.context;null===(o=this.state.model)||void 0===o||o.delete(),this.state.model=this._getModel(t),this.getAttributeManager().invalidateAll()}}draw({uniforms:t}){const{viewport:e}=this.context,{radiusUnits:i,radiusScale:o,radiusMinPixels:s,radiusMaxPixels:a,stroked:n,filled:r,billboard:l,lineWidthUnits:d,lineWidthScale:c,lineWidthMinPixels:u,lineWidthMaxPixels:p}=this.props,h="pixels"===i?e.metersPerPixel:1,g="pixels"===d?e.metersPerPixel:1;this.state.model.setUniforms(t).setUniforms({stroked:n?1:0,filled:r,billboard:l,radiusScale:o*h,radiusMinPixels:s,radiusMaxPixels:a,lineWidthScale:c*g,lineWidthMinPixels:u,lineWidthMaxPixels:p}).draw()}_getModel(t){return new n.Z(t,{...this.getShaders(),id:this.props.id,geometry:new r.Z({drawMode:6,vertexCount:4,attributes:{positions:{size:3,value:new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,1,0])}}}),isInstanced:!0})}}c.layerName="ScatterplotLayer",c.defaultProps=d},36665:(t,e,i)=>{i.d(e,{Z:()=>p});var o=i(67294),s=i(45697),a=i.n(s),n=i(51995),r=i(67190),l=i(11965);const d=n.iK.div`
  ${({theme:t})=>`\n    font-size: ${t.typography.sizes.s}px;\n    position: absolute;\n    background: ${t.colors.grayscale.light5};\n    box-shadow: 0 0 ${t.gridUnit}px ${t.colors.grayscale.light2};\n    margin: ${6*t.gridUnit}px;\n    padding: ${3*t.gridUnit}px ${5*t.gridUnit}px;\n    outline: none;\n    overflow-y: scroll;\n    max-height: 200px;\n\n    & ul {\n      list-style: none;\n      padding-left: 0;\n      margin: 0;\n\n      & li a {\n        color: ${t.colors.grayscale.base};\n        text-decoration: none;\n\n        & span {\n          margin-right: ${3*t.gridUnit}px;\n        }\n      }\n    }\n  `}
`,c=" - ",u={categories:a().object,forceCategorical:a().bool,format:a().string,position:a().oneOf([null,"tl","tr","bl","br"]),showSingleCategory:a().func,toggleCategory:a().func};class p extends o.PureComponent{format(t){if(!this.props.format||this.props.forceCategorical)return t;const e=parseFloat(t);return(0,r.uf)(this.props.format,e)}formatCategoryLabel(t){if(!this.props.format)return t;if(t.includes(c)){const e=t.split(c);return this.format(e[0])+c+this.format(e[1])}return this.format(t)}render(){if(0===Object.keys(this.props.categories).length||null===this.props.position)return null;const t=Object.entries(this.props.categories).map((([t,e])=>{const i={color:`rgba(${e.color.join(", ")})`},o=e.enabled?"◼":"◻";return(0,l.tZ)("li",{key:t},(0,l.tZ)("a",{href:"#",onClick:()=>this.props.toggleCategory(t),onDoubleClick:()=>this.props.showSingleCategory(t)},(0,l.tZ)("span",{style:i},o)," ",this.formatCategoryLabel(t)))})),e={position:"absolute",["t"===this.props.position.charAt(0)?"top":"bottom"]:"0px",["r"===this.props.position.charAt(1)?"right":"left"]:"10px"};return(0,l.tZ)(d,{style:e},(0,l.tZ)("ul",null,t))}}p.propTypes=u,p.defaultProps={categories:{},forceCategorical:!1,format:null,position:"tr",showSingleCategory:()=>{},toggleCategory:()=>{}}},54448:(t,e,i)=>{i.r(e),i.d(e,{default:()=>h,getLayer:()=>p});var o=i(28569),s=(i(67294),i(56652)),a=i(61988),n=i(52154),r=i(26331),l=i(1740);const d=1609.34;var c=i(11965);function u(t,e){return i=>{var o;const n=(null==e?void 0:e[t.point_radius_fixed.value])||(0,s.Z)(null==(o=t.point_radius_fixed)?void 0:o.value);return(0,c.tZ)("div",{className:"deckgl-tooltip"},(0,c.tZ)(l.Z,{label:`${(0,a.t)("Longitude and Latitude")}: `,value:`${i.object.position[0]}, ${i.object.position[1]}`}),i.object.cat_color&&(0,c.tZ)(l.Z,{label:`${(0,a.t)("Category")}: `,value:`${i.object.cat_color}`}),i.object.metric&&(0,c.tZ)(l.Z,{label:`${n}: `,value:`${i.object.metric}`}))}}function p(t,e,i,s,a){const r=t,l=e.data.features.map((t=>{let e=(i=r.point_unit,o=t.radius,("square_m"===i?Math.sqrt(o/Math.PI):"radius_m"===i?o:"radius_km"===i?1e3*o:"radius_miles"===i?o*d:"square_km"===i?1e3*Math.sqrt(o/Math.PI):"square_miles"===i?Math.sqrt(o/Math.PI)*d:null)||10);var i,o;if(r.multiplier&&(e*=r.multiplier),t.color)return{...t,radius:e};const s=r.color_picker||{r:0,g:0,b:0,a:1},a=[s.r,s.g,s.b,255*s.a];return{...t,radius:e,color:a}}));return new o.Z({id:`scatter-layer-${r.slice_id}`,data:l,fp64:!0,getFillColor:t=>t.color,getRadius:t=>t.radius,radiusMinPixels:r.min_radius||null,radiusMaxPixels:r.max_radius||null,stroked:!1,...(0,n.N)(r,s,u(r,null==a?void 0:a.verboseMap))})}const h=(0,r.B)(p,(function(t){return t.map((t=>t.position))}))},26331:(t,e,i)=>{i.d(e,{B:()=>C,G:()=>_});var o=i(18446),s=i.n(o),a=i(67294),n=i(84502),r=i(45697),l=i.n(r),d=i(28062),c=i(85531),u=i(36665),p=i(64106),h=i(66911),g=i(21207),m=i(40461),f=i(11965);const{getScale:y}=d,v={datasource:l().object.isRequired,formData:l().object.isRequired,getLayer:l().func.isRequired,getPoints:l().func.isRequired,height:l().number.isRequired,mapboxApiKey:l().string.isRequired,onAddFilter:l().func,payload:l().object.isRequired,setControlValue:l().func.isRequired,viewport:l().object.isRequired,width:l().number.isRequired};class b extends a.PureComponent{constructor(t){super(t),this.containerRef=a.createRef(),this.setTooltip=t=>{const{current:e}=this.containerRef;e&&e.setTooltip(t)},this.state=this.getStateFromProps(t),this.getLayers=this.getLayers.bind(this),this.onValuesChange=this.onValuesChange.bind(this),this.toggleCategory=this.toggleCategory.bind(this),this.showSingleCategory=this.showSingleCategory.bind(this)}UNSAFE_componentWillReceiveProps(t){t.payload.form_data!==this.state.formData&&this.setState({...this.getStateFromProps(t)})}onValuesChange(t){this.setState({values:Array.isArray(t)?t:[t,t+this.state.getStep(t)]})}getStateFromProps(t,e){const i=t.payload.data.features||[],o=i.map((t=>t.__timestamp)),s=function(t,e){const i=t.color_picker||{r:0,g:0,b:0,a:1},o=[i.r,i.g,i.b,255*i.a],s=y(t.color_scheme),a={};return e.forEach((e=>{if(null!=e.cat_color&&!a.hasOwnProperty(e.cat_color)){let n;n=t.dimension?(0,p.hexToRGB)(s(e.cat_color,t.sliceId),255*i.a):o,a[e.cat_color]={color:n,enabled:!0}}})),a}(t.formData,i);if(e&&t.payload.form_data===e.formData)return{...e,categories:s};const a=t.payload.form_data.time_grain_sqla||t.payload.form_data.granularity||"P1D",{start:n,end:r,getStep:l,values:d,disabled:c}=(0,h.g)(o,a),{width:u,height:g,formData:f}=t;let{viewport:v}=t;return f.autozoom&&(v=(0,m.Z)(v,{width:u,height:g,points:t.getPoints(i)})),v.zoom<0&&(v.zoom=0),{start:n,end:r,getStep:l,values:d,disabled:c,viewport:v,selected:[],lastClick:0,formData:t.payload.form_data,categories:s}}getLayers(t){const{getLayer:e,payload:i,formData:o,onAddFilter:s}=this.props;let a=i.data.features?[...i.data.features]:[];a=this.addColor(a,o),o.js_data_mutator&&(a=(0,g.Z)(o.js_data_mutator)(a)),a=t[0]===t[1]||t[1]===this.end?a.filter((e=>e.__timestamp>=t[0]&&e.__timestamp<=t[1])):a.filter((e=>e.__timestamp>=t[0]&&e.__timestamp<t[1]));const n=this.state.categories;return o.dimension&&(a=a.filter((t=>n[t.cat_color]&&n[t.cat_color].enabled))),[e(o,{...i,data:{...i.data,features:a}},s,this.setTooltip,this.props.datasource)]}addColor(t,e){const i=e.color_picker||{r:0,g:0,b:0,a:1},o=y(e.color_scheme);return t.map((t=>{let s;return e.dimension?(s=(0,p.hexToRGB)(o(t.cat_color,e.sliceId),255*i.a),{...t,color:s}):t}))}toggleCategory(t){const e=this.state.categories[t],i={...this.state.categories,[t]:{...e,enabled:!e.enabled}};Object.values(i).every((t=>!t.enabled))&&Object.values(i).forEach((t=>{t.enabled=!0})),this.setState({categories:i})}showSingleCategory(t){const e={...this.state.categories};Object.values(e).forEach((t=>{t.enabled=!1})),e[t].enabled=!0,this.setState({categories:e})}render(){return(0,f.tZ)("div",{style:{position:"relative"}},(0,f.tZ)(c.Z,{ref:this.containerRef,getLayers:this.getLayers,start:this.state.start,end:this.state.end,getStep:this.state.getStep,values:this.state.values,disabled:this.state.disabled,viewport:this.state.viewport,mapboxApiAccessToken:this.props.mapboxApiKey,mapStyle:this.props.formData.mapbox_style,setControlValue:this.props.setControlValue,width:this.props.width,height:this.props.height},(0,f.tZ)(u.Z,{forceCategorical:!0,categories:this.state.categories,format:this.props.formData.legend_format,position:this.props.formData.legend_position,showSingleCategory:this.showSingleCategory,toggleCategory:this.toggleCategory})))}}function _(t,e){class i extends a.PureComponent{constructor(t){super(t),this.containerRef=a.createRef(),this.setTooltip=t=>{const{current:e}=this.containerRef;e&&(null==e||e.setTooltip(t))};const{width:i,height:o,formData:s}=t;let{viewport:n}=t;s.autozoom&&(n=(0,m.Z)(n,{width:i,height:o,points:e(t.payload.data.features)})),this.state={viewport:n,layer:this.computeLayer(t)},this.onViewportChange=this.onViewportChange.bind(this)}UNSAFE_componentWillReceiveProps(t){const e={...t.formData,viewport:null},i={...this.props.formData,viewport:null};s()(e,i)&&t.payload===this.props.payload||this.setState({layer:this.computeLayer(t)})}onViewportChange(t){this.setState({viewport:t})}computeLayer(e){const{formData:i,payload:o,onAddFilter:s}=e;return t(i,o,s,this.setTooltip)}render(){const{formData:t,payload:e,setControlValue:i,height:o,width:s}=this.props,{layer:a,viewport:r}=this.state;return(0,f.tZ)(n.F,{ref:this.containerRef,mapboxApiAccessToken:e.data.mapboxApiKey,viewport:r,layers:[a],mapStyle:t.mapbox_style,setControlValue:i,width:s,height:o,onViewportChange:this.onViewportChange})}}return i}function C(t,e){return function(i){const{datasource:o,formData:s,height:a,payload:n,setControlValue:r,viewport:l,width:d}=i;return(0,f.tZ)(b,{datasource:o,formData:s,mapboxApiKey:n.data.mapboxApiKey,setControlValue:r,viewport:l,getLayer:t,payload:n,getPoints:e,width:d,height:a})}}b.propTypes=v}}]);
//# sourceMappingURL=447d701a2123fa63122e.chunk.js.map