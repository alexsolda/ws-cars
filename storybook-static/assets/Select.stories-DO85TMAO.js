import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{u as y}from"./index.esm-QLZENO-u.js";import"./index-uubelm5h.js";const g=({label:a,name:n,placeholder:l="",register:S,options:v,error:s})=>e.jsxs("div",{className:"mb-2 relative flex flex-col gap-1 text-white w-full",children:[e.jsx("label",{className:"text-sm",children:a}),e.jsxs("select",{className:`p-2 border-b-2 text-zinc-300 ${s?"border-b-red-400":"border-b-amber-700"} outline-none bg-transparent`,...S(n),children:[l&&e.jsx("option",{value:"",children:l}),v.map(o=>e.jsx("option",{value:o.value,children:o.label},o.value))]}),e.jsx("p",{className:`absolute bottom-[-20px] text-red-400 ${s?"opacity-1":"opacity-0"}`,children:s||"erro"})]}),b=g;g.__docgenInfo={description:"",methods:[],displayName:"Input",props:{label:{required:!0,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"Path",elements:[{name:"T"}],raw:"Path<T>"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},register:{required:!0,tsType:{name:"UseFormRegister",elements:[{name:"T"}],raw:"UseFormRegister<T>"},description:""},error:{required:!1,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}}]}}],raw:"ISelectOption[]"},description:""}}};const q={title:"Components/Select",component:b,tags:["autodocs"]},x=[{value:"item01",label:"Item 01"},{value:"item02",label:"Item 02"}],f=a=>{const{register:n}=y();return e.jsx(b,{...a,register:n})},r=f.bind({});r.args={options:x,label:"Item",name:"item",placeholder:"Selecione um item",error:""};const t=f.bind({});t.args={options:x,label:"Item",name:"item",placeholder:"Selecione um item",error:"Selecione um item, por favor!"};var i,m,c;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
  const {
    register
  } = useForm<ExampleFormValues>();
  return <Select {...args} register={register} />;
}`,...(c=(m=r.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var u,p,d;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`args => {
  const {
    register
  } = useForm<ExampleFormValues>();
  return <Select {...args} register={register} />;
}`,...(d=(p=t.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const I=["DefaultSelect","DefaultSelectError"];export{r as DefaultSelect,t as DefaultSelectError,I as __namedExportsOrder,q as default};
